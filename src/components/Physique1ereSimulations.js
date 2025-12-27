import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Text, Sphere, Box, Cylinder, Line, Plane } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import confetti from 'canvas-confetti';

// ==========================================
// SHARED UTILS
// ==========================================
function triggerSuccess() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#00F5D4', '#FF0055', '#FFFF00'] });
}

function SuccessOverlay({ show, message, onClose }) {
    if (!show) return null;
    return (
        <Html fullscreen>
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
                <div className="bg-black/95 p-8 rounded-3xl border-2 border-[#00F5D4] text-center pointer-events-auto animate-bounce shadow-2xl">
                    <h2 className="text-4xl mb-4">🎉 Bravo !</h2>
                    <p className="text-xl text-white mb-6">{message}</p>
                    <button onClick={onClose} className="bg-[#00F5D4] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Continuer ➡️</button>
                </div>
            </div>
        </Html>
    );
}

function Grid() {
    return <gridHelper args={[30, 30, '#333', '#111']} position={[0, -2, 0]} />;
}

// ==========================================
// P1: TRAVAIL ET PUISSANCE
// ==========================================
export function TravailPuissanceSim() {
    const [force, setForce] = useState(50);
    const [angle, setAngle] = useState(30);
    const [distance, setDistance] = useState(5);
    const [incline, setIncline] = useState(0); // Inclinaison plan
    const [mode, setMode] = useState('explore');
    const [challenge, setChallenge] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [score, setScore] = useState(0);
    const chariotRef = useRef();
    const [animPos, setAnimPos] = useState(-3);
    const [isAnimating, setIsAnimating] = useState(false);

    const travailF = force * distance * Math.cos(angle * Math.PI / 180);
    const travailP = -10 * 9.81 * distance * Math.sin(incline * Math.PI / 180); // m=10kg
    const puissance = travailF / 5; // Suppose t=5s pour simplifier

    const startChallenge = () => {
        const targetW = Math.round(Math.random() * 300 + 100);
        setChallenge({ targetW, tries: 0 });
        setMode('challenge');
    };

    const checkAnswer = () => {
        if (challenge && Math.abs(travailF - challenge.targetW) < 20) {
            triggerSuccess();
            setScore(s => s + 10);
            setShowSuccess(true);
            setChallenge(null);
        } else {
            setChallenge(c => ({ ...c, tries: c.tries + 1 }));
        }
    };

    useFrame((state, delta) => {
        if (isAnimating && chariotRef.current) {
            setAnimPos(p => {
                if (p < distance - 3) return p + delta * 2;
                setIsAnimating(false);
                return p;
            });
        }
    });

    const startAnimation = () => {
        setAnimPos(-3);
        setIsAnimating(true);
    };

    const inclineRad = incline * Math.PI / 180;
    const forceAngleRad = angle * Math.PI / 180;

    return (
        <group>
            <OrbitControls />
            <Grid />

            {/* Plan Inclinable */}
            <group rotation={[0, 0, inclineRad]}>
                <mesh position={[0, -0.15, 0]}>
                    <boxGeometry args={[15, 0.3, 4]} />
                    <meshStandardMaterial color="#444" />
                </mesh>

                {/* Repères distance */}
                {/* Ligne départ */}
                <Line points={[[-3, 0.02, 1.5], [-3, 0.02, -1.5]]} color="white" lineWidth={2} />
                <Text position={[-3, 0.2, 2]} fontSize={0.3} color="white">0m</Text>

                {/* Ligne arrivée */}
                <Line points={[[-3 + distance, 0.02, 1.5], [-3 + distance, 0.02, -1.5]]} color="#00F5D4" lineWidth={2} dashed />
                <Text position={[-3 + distance, 0.2, 2]} fontSize={0.3} color="#00F5D4">{distance}m</Text>

                {/* Chariot */}
                <group ref={chariotRef} position={[animPos, 0.6, 0]}>
                    <Box args={[1.2, 0.6, 1]}><meshStandardMaterial color="#FF6B35" /></Box>
                    <Cylinder args={[0.18, 0.18, 0.12]} position={[-0.35, -0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
                    <Cylinder args={[0.18, 0.18, 0.12]} position={[0.35, -0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
                    <Cylinder args={[0.18, 0.18, 0.12]} position={[-0.35, -0.4, -0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
                    <Cylinder args={[0.18, 0.18, 0.12]} position={[0.35, -0.4, -0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>

                    {/* Vecteur Poids (Vertical toujours) - Rotation inverse pour rester vertical */}
                    <group rotation={[0, 0, -inclineRad]}>
                        <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0, 0), 1.5, 0x00AACC, 0.4, 0.2]} />
                        <Text position={[0.5, -1, 0]} fontSize={0.3} color="#00AACC">P</Text>
                    </group>

                    {/* Vecteur Force */}
                    <arrowHelper args={[new THREE.Vector3(Math.cos(forceAngleRad), Math.sin(forceAngleRad), 0), new THREE.Vector3(0, 0.3, 0), 2, 0xFFFF00, 0.4, 0.2]} />
                </group>

                {/* Corde Force */}
                <Line
                    points={[
                        [animPos, 0.9, 0],
                        [animPos + Math.cos(forceAngleRad) * 2, 0.9 + Math.sin(forceAngleRad) * 2, 0]
                    ]}
                    color="yellow"
                    lineWidth={2}
                />
            </group>


            <Html transform={false}>
                <DraggableHtmlPanel title="🔧 Travail & Puissance">
                    <div className="p-4 w-80 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('explore')} className={`flex-1 py-2 rounded-lg font-bold transition-all ${mode === 'explore' ? 'bg-blue-500' : 'bg-gray-700'}`}>📚 Explorer</button>
                            <button onClick={startChallenge} className={`flex-1 py-2 rounded-lg font-bold transition-all ${mode === 'challenge' ? 'bg-orange-500' : 'bg-gray-700'}`}>🎯 Défi</button>
                        </div>
                        {mode === 'challenge' && challenge && (
                            <div className="mb-4 p-3 bg-orange-900/40 rounded-lg border border-orange-500 animate-pulse">
                                <p className="text-sm">🎯 Objectif: W(F) ≈ <span className="text-xl font-bold text-orange-400">{challenge.targetW} J</span></p>
                            </div>
                        )}
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold text-yellow-400">Force F: {force} N</label><input type="range" min="10" max="150" value={force} onChange={e => setForce(Number(e.target.value))} className="w-full accent-yellow-500" /></div>
                            <div><label className="text-xs font-bold text-cyan-400">Angle α: {angle}°</label><input type="range" min="0" max="60" value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full accent-cyan-500" /></div>
                            <div><label className="text-xs font-bold text-green-400">Distance d: {distance} m</label><input type="range" min="1" max="10" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full accent-green-500" /></div>
                            <div><label className="text-xs font-bold text-gray-400">Inclinaison: {incline}°</label><input type="range" min="-30" max="30" value={incline} onChange={e => setIncline(Number(e.target.value))} className="w-full accent-gray-500" /></div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-black/60 to-black/40 rounded-lg border border-white/20">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-yellow-500">W(F) = F·d·cos(α)</span>
                                <span className="text-xl font-bold text-[#00F5D4]">{travailF.toFixed(0)} J</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-blue-400">W(P) = -mg·d·sin(i)</span>
                                <span className="text-md font-bold text-blue-300">{travailP.toFixed(0)} J</span>
                            </div>
                            <div className="flex justify-between items-center mt-2 border-t border-white/10 pt-1">
                                <span className="text-xs text-gray-400">Puissance P</span>
                                <span className="text-sm font-bold text-white">{puissance.toFixed(0)} W</span>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button onClick={startAnimation} className="flex-1 py-2 bg-green-600 rounded-lg font-bold hover:bg-green-500">▶️ GO</button>
                            {mode === 'challenge' && <button onClick={checkAnswer} className="flex-1 py-2 bg-orange-600 rounded-lg font-bold hover:bg-orange-500">Vérifier</button>}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
            {showSuccess && <SuccessOverlay show={showSuccess} message="Excellent ! Tu maîtrises le Travail !" onClose={() => setShowSuccess(false)} />}
        </group >
    );
}

// ==========================================
// P2: ÉNERGIE CINÉTIQUE
// ==========================================
export function EnergieCinetiqueSim() {
    const [mass, setMass] = useState(1000);
    const [velocity, setVelocity] = useState(20);
    const [brakeForce, setBrakeForce] = useState(5000);
    const [carPos, setCarPos] = useState(-10);
    const [isMoving, setIsMoving] = useState(false);
    const [crashed, setCrashed] = useState(false);
    const cameraRef = useRef();

    const ec = 0.5 * mass * velocity * velocity;
    const distanceFreinage = ec / brakeForce;
    const WALL_POS = 15;
    const START_POS = -10;

    // Si la distance d'arrêt dépasse la distance au mur (25m), CRASH !
    const willCrash = (START_POS + distanceFreinage) > WALL_POS;
    const finalPos = willCrash ? WALL_POS : START_POS + distanceFreinage;

    useFrame((state, delta) => {
        if (isMoving) {
            setCarPos(p => {
                const step = velocity * delta * 0.8; // Vitesse animation proportionnelle
                if (p < finalPos) {
                    const next = p + step;
                    if (next >= finalPos) {
                        setIsMoving(false);
                        if (willCrash) {
                            setCrashed(true);
                            triggerSuccess(); // Boom confetti
                        }
                        return finalPos;
                    }
                    return next;
                }
                return p;
            });
        }
    });

    const reset = () => {
        setCarPos(START_POS);
        setCrashed(false);
        setIsMoving(false);
    };

    return (
        <group>
            <OrbitControls />
            <Grid />
            <Plane args={[40, 5]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.95, 0]}><meshStandardMaterial color="#333" /></Plane>

            {/* Ligne départ */}
            <Line points={[[START_POS, -1.9, 2.5], [START_POS, -1.9, -2.5]]} color="white" lineWidth={2} />
            <Text position={[START_POS, -1.5, 3]} fontSize={0.5} color="white">Départ</Text>

            {/* Mur */}
            <Box args={[1, 4, 6]} position={[WALL_POS + 0.5, 0, 0]}><meshStandardMaterial color="#555" map={null} /></Box>
            <Text position={[WALL_POS, 2.5, 0]} fontSize={0.8} color="red" rotation={[0, -Math.PI / 2, 0]}>MUR</Text>

            {/* Distance théorique */}
            <Line points={[[START_POS, -1.8, 2.2], [START_POS + distanceFreinage, -1.8, 2.2]]} color={willCrash ? "red" : "green"} lineWidth={4} />
            <Text position={[START_POS + distanceFreinage / 2, -1.4, 2.2]} fontSize={0.4} color={willCrash ? "red" : "green"}>d = {distanceFreinage.toFixed(1)} m</Text>

            <group position={[carPos, -1.2, 0]} rotation={[0, 0, crashed ? 0.2 : 0]}>
                <Box args={[2.2, 0.6, 1.2]}><meshStandardMaterial color="#E63946" /></Box>
                <Box args={[1, 0.5, 1.1]} position={[0.4, 0.5, 0]}><meshStandardMaterial color="#1D3557" /></Box>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[-0.7, -0.35, 0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[0.7, -0.35, 0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[-0.7, -0.35, -0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[0.7, -0.35, -0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                {crashed && <Text position={[0, 1.5, 0]} fontSize={1} color="yellow">BOOM!</Text>}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🚗 Énergie Cinétique">
                    <div className="p-4 w-80 text-white">
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold text-blue-400">Masse: {mass} kg</label><input type="range" min="500" max="2500" step="100" value={mass} onChange={e => { setMass(Number(e.target.value)); reset(); }} className="w-full accent-blue-500" /></div>
                            <div><label className="text-xs font-bold text-green-400">Vitesse: {velocity} m/s ({(velocity * 3.6).toFixed(0)} km/h)</label><input type="range" min="5" max="50" value={velocity} onChange={e => { setVelocity(Number(e.target.value)); reset(); }} className="w-full accent-green-500" /></div>
                            <div><label className="text-xs font-bold text-red-400">Force freinage: {brakeForce} N</label><input type="range" min="1000" max="15000" step="500" value={brakeForce} onChange={e => { setBrakeForce(Number(e.target.value)); reset(); }} className="w-full accent-red-500" /></div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-green-900/30 to-black/50 rounded-lg border border-green-500/30">
                            <p className="text-xs text-gray-400">Ec = ½mv²</p>
                            <p className="text-2xl font-bold text-green-400">Ec = {(ec / 1000).toFixed(1)} kJ</p>
                        </div>
                        <div className={`mt-2 p-3 bg-gradient-to-br ${willCrash ? 'from-red-900/50 border-red-500' : 'from-blue-900/30 border-blue-500/30'} rounded-lg border`}>
                            <p className="text-xs text-gray-400">Distance d'arrêt requis:</p>
                            <p className={`text-xl font-bold ${willCrash ? 'text-red-500' : 'text-blue-400'}`}>{distanceFreinage.toFixed(1)} m</p>
                            <p className="text-xs text-gray-500 mt-1">Distance au mur: {(WALL_POS - START_POS).toFixed(0)} m</p>
                        </div>
                        <button onClick={() => { reset(); setTimeout(() => setIsMoving(true), 100); }} className={`w-full mt-4 py-2 ${willCrash ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'} rounded-lg font-bold`}>
                            {willCrash ? '⚠️ TESTER LE CRASH' : '▶️ TESTER FREINAGE'}
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P3: ÉNERGIE MÉCANIQUE (Pendule)
// ==========================================
export function EnergieMecaniqueSim() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [angleInit, setAngleInit] = useState(45);
    const penduleRef = useRef();
    const timeRef = useRef(0);
    const L = 3;
    const g = 9.81;
    const omega = Math.sqrt(g / L);
    const [ec, setEc] = useState(0);
    const [ep, setEp] = useState(0);

    useFrame((state, delta) => {
        if (isPlaying && penduleRef.current) {
            timeRef.current += delta;
            const theta = (angleInit * Math.PI / 180) * Math.cos(omega * timeRef.current);
            penduleRef.current.rotation.z = theta;
            const h = L * (1 - Math.cos(theta));
            const v = L * omega * Math.abs(Math.sin(omega * timeRef.current)) * (angleInit * Math.PI / 180);
            setEp(10 * g * h);
            setEc(0.5 * 10 * v * v);
        }
    });

    const reset = () => { setIsPlaying(false); timeRef.current = 0; if (penduleRef.current) penduleRef.current.rotation.z = angleInit * Math.PI / 180; };

    return (
        <group>
            <OrbitControls />
            <Box args={[5, 0.25, 0.6]} position={[0, 4.5, 0]}><meshStandardMaterial color="#444" /></Box>
            <group ref={penduleRef} position={[0, 4.5, 0]}>
                <Cylinder args={[0.05, 0.05, L]} position={[0, -L / 2, 0]}><meshStandardMaterial color="#777" /></Cylinder>
                <Sphere args={[0.35]} position={[0, -L, 0]}><meshStandardMaterial color="#FF0055" emissive={isPlaying ? "#FF0055" : "#000"} emissiveIntensity={0.3} /></Sphere>
            </group>
            <Line points={[[-4, 4.5 - L, 0], [4, 4.5 - L, 0]]} color="cyan" lineWidth={2} />
            <Text position={[4.5, 4.5 - L, 0]} fontSize={0.25} color="cyan">Ep = 0</Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="🎢 Énergie Mécanique">
                    <div className="p-4 w-80 text-white">
                        <div className="mb-4"><label className="text-xs font-bold">Angle initial: {angleInit}°</label><input type="range" min="15" max="80" value={angleInit} onChange={e => { setAngleInit(Number(e.target.value)); reset(); }} className="w-full" disabled={isPlaying} /></div>
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setIsPlaying(!isPlaying)} className={`flex-1 py-2 rounded-lg font-bold ${isPlaying ? 'bg-red-500' : 'bg-green-500'}`}>{isPlaying ? '⏸ Pause' : '▶️ Lâcher'}</button>
                            <button onClick={reset} className="px-4 bg-gray-600 rounded-lg font-bold">↺ Reset</button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-green-900/50 p-3 rounded-lg border border-green-500/30"><div className="text-green-400 text-xs font-bold">Ec</div><div className="text-lg font-bold">{ec.toFixed(1)} J</div></div>
                            <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-500/30"><div className="text-blue-400 text-xs font-bold">Ep</div><div className="text-lg font-bold">{ep.toFixed(1)} J</div></div>
                            <div className="bg-yellow-900/50 p-3 rounded-lg border border-yellow-500/30"><div className="text-yellow-400 text-xs font-bold">Em</div><div className="text-lg font-bold">{(ec + ep).toFixed(1)} J</div></div>
                        </div>
                        <div className="mt-4 text-xs text-gray-400 text-center">Em = Ec + Ep = constante (sans frottements)</div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P4: ÉNERGIE POTENTIELLE DE PESANTEUR
// ==========================================
export function EnergiePotentielleSim() {
    const [mass, setMass] = useState(10);
    const [height, setHeight] = useState(2); // Hauteur
    const [gravity, setGravity] = useState(9.81); // Terre par défaut

    const epp = mass * gravity * height;

    return (
        <group>
            <OrbitControls />
            <Grid />
            {/* Sol */}
            <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}><meshStandardMaterial color="#222" /></Plane>

            {/* Objet suspendu/posé */}
            <group position={[0, height + 0.5, 0]}>
                <Box args={[1, 1, 1]}><meshStandardMaterial color="#FFD700" /></Box>
                <Text position={[0, 0.6, 0.6]} fontSize={0.3} color="white">{mass} kg</Text>
            </group>

            {/* Ligne de référence */}
            <Line points={[[-5, 0, 0], [5, 0, 0]]} color="blue" lineWidth={2} transparent opacity={0.5} />
            <Text position={[5.2, 0, 0]} fontSize={0.3} color="blue">z=0</Text>

            {/* Ligne hauteur actuelle */}
            <Line points={[[0, 0, 0], [0, height, 0]]} color="white" lineWidth={1} dashed />
            <Text position={[0.6, height / 2, 0]} fontSize={0.3} color="white">h={height}m</Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="🏗️ Énergie Potentielle">
                    <div className="p-4 w-72 text-white">
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold text-yellow-400">Masse m: {mass} kg</label><input type="range" min="1" max="50" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full" /></div>
                            <div><label className="text-xs font-bold text-blue-400">Hauteur h: {height} m</label><input type="range" min="0" max="10" step="0.5" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full" /></div>
                            <div>
                                <label className="text-xs font-bold text-gray-400">Astre (g):</label>
                                <select value={gravity} onChange={e => setGravity(Number(e.target.value))} className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600">
                                    <option value="9.81">Terre (9.81 N/kg)</option>
                                    <option value="1.62">Lune (1.62 N/kg)</option>
                                    <option value="3.71">Mars (3.71 N/kg)</option>
                                    <option value="24.79">Jupiter (24.79 N/kg)</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-yellow-900/30 to-black/50 rounded-lg border border-yellow-500/30">
                            <p className="text-xs text-gray-400">Epp = m × g × z</p>
                            <p className="text-2xl font-bold text-yellow-400">Epp = {epp.toFixed(1)} J</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}


export function ElectrostatiqueSim() {
    const [charges, setCharges] = useState([{ x: 2, y: 0, q: 5 }, { x: -2, y: 0, q: -5 }]);
    const [showFieldLines, setShowFieldLines] = useState(true);

    const addCharge = (q) => setCharges([...charges, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4, q }]);

    const fieldLines = useMemo(() => {
        const lines = [];
        charges.forEach(c => {
            if (c.q > 0) {
                for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
                    const pts = [];
                    let x = c.x + 0.3 * Math.cos(a), y = c.y + 0.3 * Math.sin(a);
                    for (let step = 0; step < 20; step++) {
                        pts.push(new THREE.Vector3(x, y, 0));
                        let ex = 0, ey = 0;
                        charges.forEach(oc => { const dx = x - oc.x, dy = y - oc.y, r2 = dx * dx + dy * dy + 0.01, e = oc.q / r2; ex += e * dx / Math.sqrt(r2); ey += e * dy / Math.sqrt(r2); });
                        const len = Math.sqrt(ex * ex + ey * ey);
                        if (len > 0) { x += 0.3 * ex / len; y += 0.3 * ey / len; }
                    }
                    lines.push(pts);
                }
            }
        });
        return lines;
    }, [charges]);

    return (
        <group>
            <OrbitControls enableRotate={false} />
            <Grid />
            {charges.map((c, i) => (<group key={i} position={[c.x, c.y, 0]}><Sphere args={[0.35]}><meshStandardMaterial color={c.q > 0 ? "#FF4444" : "#4444FF"} /></Sphere><Text fontSize={0.3} color="white">{c.q > 0 ? '+' : '-'}</Text></group>))}
            {showFieldLines && fieldLines.map((pts, i) => (<Line key={i} points={pts} color="#00F5D4" lineWidth={1.5} transparent opacity={0.7} />))}
            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Champ Électrique" >
                    <div className="p-4 w-72 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => addCharge(5)} className="flex-1 bg-red-600 py-2 rounded-lg font-bold hover:bg-red-500">+ Positive</button>
                            <button onClick={() => addCharge(-5)} className="flex-1 bg-blue-600 py-2 rounded-lg font-bold hover:bg-blue-500">- Négative</button>
                        </div>
                        <button onClick={() => setCharges([])} className="w-full mb-4 py-2 bg-gray-700 rounded-lg">🗑️ Effacer tout</button>
                        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={showFieldLines} onChange={e => setShowFieldLines(e.target.checked)} className="w-4 h-4" /> Lignes de champ</label>
                        <div className="mt-4 p-3 bg-black/50 rounded-lg text-xs text-gray-400">
                            <p className="mb-1">Loi de Coulomb: F = k·q₁·q₂/r²</p>
                            <p>Champ: E = F/q (V/m)</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P7-P9: ÉLECTRONIQUE (Circuit RC)
// ==========================================
export function ElectroniqueSim() {
    const [mode, setMode] = useState('charge');
    const [R, setR] = useState(1000);
    const [C, setC] = useState(0.001);
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const electronsRef = useRef([]);

    const tau = R * C;
    const E = 5; // Tension générateur

    // Calculs temps réel
    const uC = mode === 'charge' ? E * (1 - Math.exp(-time / tau)) : E * Math.exp(-time / tau);
    const i = mode === 'charge' ? (E / R) * Math.exp(-time / tau) : -(E / R) * Math.exp(-time / tau);
    const q = C * uC; // Charge condensateur

    useFrame((state, delta) => {
        if (running) {
            setTime(t => t + delta);
        }

        // Animation électrons (vitesse proportionnelle au courant i)
        // Courant max = E/R = 5/1000 = 0.005 A. On multiplie pour l'effet visuel.
        const speed = Math.abs(i) * 500;
        const direction = i > 0 ? 1 : -1;

        electronsRef.current.forEach((el, idx) => {
            if (el) {
                // Circuit rectangulaire simple autour de [0, 2, -2] (Generateur) et [0, -1.5, 2] (Composants)
                // C'est un peu complexe à animer parfaitement sur un path.
                // On fait tourner simple : angle += speed
                el.rotation.z += speed * direction * 0.1;
            }
        });
    });

    const reset = () => { setTime(0); setRunning(true); };

    return (
        <group>
            <OrbitControls />
            <Grid />

            {/* Circuit Visuel - Fil Rectangulaire */}
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh>
                    <torusGeometry args={[4, 0.1, 16, 100]} />
                    <meshStandardMaterial color="gold" />
                </mesh>

                {/* Electrons sur l'anneau */}
                <group ref={g => { electronsRef.current[0] = g }}>
                    {Array.from({ length: 12 }).map((_, k) => (
                        <mesh key={k} position={[4 * Math.cos(k * Math.PI / 6), 4 * Math.sin(k * Math.PI / 6), 0]}>
                            <sphereGeometry args={[0.15]} />
                            <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={0.5} />
                        </mesh>
                    ))}
                </group>
            </group>

            {/* Générateur (Haut) */}
            <group position={[0, 4, 0]}>
                <Box args={[2, 1, 1]}><meshStandardMaterial color="#333" /></Box>
                <Text position={[0, 0, 0.6]} fontSize={0.5} color="red">{mode === 'charge' ? 'GÉNÉRATEUR' : 'COURT-CIRCUIT'}</Text>
                {mode === 'charge' && <Text position={[0, 0.8, 0]} fontSize={0.4} color="yellow">E = 5V</Text>}
            </group>

            {/* Condensateur (Bas-Droite) */}
            <group position={[3, -2, 0]}>
                <Cylinder args={[0.5, 0.5, 1]} rotation={[0, 0, Math.PI / 2]}><meshStandardMaterial color="#1a1a1a" /></Cylinder>
                <Text position={[0, -0.8, 0]} fontSize={0.4} color="cyan">C</Text>
                {/* Charge accumulée Visualisation */}
                <Text position={[-0.8, 0.8, 0]} fontSize={0.3} color="red" visible={q > 0}>+{q.toFixed(4)}C</Text>
                <Text position={[0.8, 0.8, 0]} fontSize={0.3} color="blue" visible={q > 0}>-{q.toFixed(4)}C</Text>
            </group>

            {/* Résistance (Bas-Gauche) */}
            <group position={[-3, -2, 0]}>
                <Box args={[1.5, 0.6, 0.6]}><meshStandardMaterial color="#b5651d" /></Box>
                <Text position={[0, -0.8, 0]} fontSize={0.4} color="orange">R</Text>
            </group>

            <Line points={[[-4, 0, 0], [-4, 4, 0], [4, 4, 0], [4, 0, 0]]} color="gold" lineWidth={2} /> {/* Haut */}
            <Line points={[[-4, 0, 0], [-4, -2, 0], [4, -2, 0], [4, 0, 0]]} color="gold" lineWidth={2} /> {/* Bas */}

            <Html transform={false}>
                <DraggableHtmlPanel title="📺 Circuit RC">
                    <div className="p-4 w-80 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => { setMode('charge'); reset(); }} className={`flex-1 py-2 rounded-lg font-bold transition-all ${mode === 'charge' ? 'bg-green-500 scale-105' : 'bg-gray-700'}`}>⬆️ Charger</button>
                            <button onClick={() => { setMode('discharge'); reset(); }} className={`flex-1 py-2 rounded-lg font-bold transition-all ${mode === 'discharge' ? 'bg-red-500 scale-105' : 'bg-gray-700'}`}>⬇️ Décharger</button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                            <div className="bg-cyan-900/40 p-2 rounded border border-cyan-500/30">
                                <div className="text-xs text-cyan-400">Tension uC</div>
                                <div className="text-xl font-bold">{uC.toFixed(2)} V</div>
                                <div className="w-full bg-gray-700 h-1 mt-1 rounded"><div className="bg-cyan-400 h-1 rounded transition-all" style={{ width: `${(uC / 5) * 100}%` }}></div></div>
                            </div>
                            <div className="bg-yellow-900/40 p-2 rounded border border-yellow-500/30">
                                <div className="text-xs text-yellow-400">Courant i</div>
                                <div className="text-xl font-bold">{(i * 1000).toFixed(2)} mA</div>
                                <div className="text-xs text-gray-400">Flux d'électrons</div>
                            </div>
                        </div>

                        <div className="space-y-3 bg-black/30 p-3 rounded-lg">
                            <div><label className="text-xs font-bold text-orange-400">R = {R} Ω</label><input type="range" min="100" max="5000" step="100" value={R} onChange={e => { setR(Number(e.target.value)); reset(); }} className="w-full accent-orange-500" /></div>
                            <div><label className="text-xs font-bold text-cyan-400">C = {(C * 1000).toFixed(1)} mF</label><input type="range" min="0.1" max="5" step="0.1" value={C * 1000} onChange={e => { setC(Number(e.target.value) / 1000); reset(); }} className="w-full accent-cyan-500" /></div>
                        </div>

                        <div className="mt-3 text-center">
                            <span className="text-gray-400 text-sm">Constante de temps τ = RC = </span><span className="text-xl font-bold text-[#00F5D4]">{tau.toFixed(2)} s</span>
                            <div className="text-xs text-gray-500 mt-1">Le condensateur est chargé à 63% à t=τ</div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P10: ONDES MÉCANIQUES
// ==========================================
export function OndesSim() {
    const materialRef = useRef();
    const [freq, setFreq] = useState(3.0);
    const [separation, setSeparation] = useState(0.4); // Distance entre sources relative (0 à 1)

    // Shader amélioré pour interférences
    const WaveShader = useMemo(() => ({
        uniforms: { uTime: { value: 0 }, uFreq: { value: 3.0 }, uSep: { value: 0.4 } },
        vertexShader: `
            varying vec2 vUv; 
            uniform float uTime;
            uniform float uFreq;
            uniform float uSep;
            void main() { 
                vUv = uv; 
                vec3 pos = position;
                
                // Effet de vague sur le mesh (vertex displacement)
                vec2 p = vUv * 2.0 - 1.0;
                float d1 = distance(p, vec2(-uSep, 0.0));
                float d2 = distance(p, vec2(uSep, 0.0));
                float w = sin(d1 * 20.0 - uTime * uFreq * 5.0) + sin(d2 * 20.0 - uTime * uFreq * 5.0);
                pos.z += w * 0.2; // Hauteur vague

                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); 
            }
        `,
        fragmentShader: `
            uniform float uTime; 
            uniform float uFreq; 
            uniform float uSep;
            varying vec2 vUv; 
            
            void main() { 
                vec2 p = vUv * 2.0 - 1.0; 
                float d1 = distance(p, vec2(-uSep, 0.0)); 
                float d2 = distance(p, vec2(uSep, 0.0)); 
                
                // Onde
                float w = sin(d1 * 20.0 - uTime * uFreq * 5.0) + sin(d2 * 20.0 - uTime * uFreq * 5.0);
                
                // Couleurs basées sur l'amplitude
                float intensity = 0.5 + 0.25 * w;
                vec3 color = mix(vec3(0.0, 0.2, 0.5), vec3(0.0, 0.8, 1.0), intensity);
                
                // Lignes de crête brillantes
                if (w > 1.8) color = vec3(1.0); 

                gl_FragColor = vec4(color, 0.9); 
            }
        `
    }), []);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            materialRef.current.uniforms.uFreq.value = freq;
            materialRef.current.uniforms.uSep.value = separation;
        }
    });

    return (
        <group>
            <OrbitControls />
            <Grid infiniteGrid fadeDistance={50} />

            {/* Sources ponctuelles */}
            <Sphere position={[-separation * 6, 0.5, 0]} args={[0.2]}><meshStandardMaterial color="white" emissive="white" /></Sphere>
            <Sphere position={[separation * 6, 0.5, 0]} args={[0.2]}><meshStandardMaterial color="white" emissive="white" /></Sphere>

            {/* Surface de l'eau */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <planeGeometry args={[12, 12, 128, 128]} /> {/* Haute résolution pour le displacement */}
                <shaderMaterial ref={materialRef} args={[WaveShader]} transparent side={THREE.DoubleSide} />
            </mesh>

            <Html transform={false}>
                <DraggableHtmlPanel title="🌊 Ondes : Interférences" >
                    <div className="p-4 w-72 text-white">
                        <div className="space-y-4">
                            <div>
                                <label className="flex justify-between text-xs font-bold mb-1">
                                    <span>Fréquence f</span>
                                    <span className="text-cyan-400">{freq} Hz</span>
                                </label>
                                <input type="range" min="1" max="8" step="0.1" value={freq} onChange={e => setFreq(Number(e.target.value))} className="w-full accent-cyan-500" />
                            </div>

                            <div>
                                <label className="flex justify-between text-xs font-bold mb-1">
                                    <span>Écartement S1-S2</span>
                                    <span className="text-yellow-400">{(separation * 2).toFixed(1)}</span>
                                </label>
                                <input type="range" min="0" max="0.8" step="0.05" value={separation} onChange={e => setSeparation(Number(e.target.value))} className="w-full accent-yellow-500" />
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-black/50 rounded-lg text-sm border border-white/10">
                            <p className="text-gray-300 font-semibold mb-2">Conditions d'interférence :</p>
                            <div className="flex items-center gap-2 text-xs">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <span className="text-gray-400">Constructive (Max) : Δ = k·λ</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs mt-1">
                                <div className="w-3 h-3 bg-blue-900 rounded-full border border-blue-500"></div>
                                <span className="text-gray-400">Destructive (Nul) : Δ = (k+½)·λ</span>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P11: OPTIQUE (Lentilles)
// ==========================================
export function OptiqueLentilleSim() {
    const [focalAbs, setFocalAbs] = useState(3);
    const [objPos, setObjPos] = useState(-6);
    const [lensType, setLensType] = useState('converging'); // converging, diverging

    const f = lensType === 'converging' ? focalAbs : -focalAbs;
    const oa = objPos;

    // Formule conjugaison : 1/oa' = 1/f + 1/oa
    // oa' = (oa * f) / (oa + f)
    const oaP = (oa * f) / (oa + f);
    const gamma = oaP / oa;

    const isVirtual = oaP < 0; // Image virtuelle si oa' < 0 (à gauche) pour objet réel

    const hObj = 2; // Hauteur objet
    const hImg = hObj * gamma;

    return (
        <group>
            <OrbitControls enableRotate={false} />
            <Grid infiniteGrid fadeDistance={50} />

            {/* Axe optique */}
            <Line points={[[-15, 0, 0], [15, 0, 0]]} color="white" transparent opacity={0.3} lineWidth={1} />

            {/* Lentille */}
            <group rotation={[0, 0, Math.PI / 2]}>
                {lensType === 'converging' ? (
                    // Biconvexe
                    <mesh><cylinderGeometry args={[3, 3, 0.2, 32]} /><meshPhysicalMaterial transmission={0.9} roughness={0} color="#88CCFF" /></mesh>
                ) : (
                    // Biconcave (simulé par cylindre + torus inverse ou juste symbole)
                    <group>
                        <mesh><cylinderGeometry args={[3, 3, 0.1, 32]} /><meshPhysicalMaterial transmission={0.9} roughness={0} color="#FFCC88" /></mesh>
                        <Text position={[0, 3.2, 0]} fontSize={0.5} rotation={[0, 0, -Math.PI / 2]}>)(</Text>
                    </group>
                )}
                {/* Symboles extrémité */}
                <Text position={[0, 3.5, 0]} fontSize={1} color="white" rotation={[0, 0, -Math.PI / 2]}>{lensType === 'converging' ? '↑' : 'Y'}</Text>
                <Text position={[0, -3.5, 0]} fontSize={1} color="white" rotation={[0, 0, -Math.PI / 2]}>{lensType === 'converging' ? '↓' : 'A'}</Text>
            </group>

            {/* Foyers */}
            <Sphere args={[0.15]} position={[f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
            <Text position={[f, -0.5, 0]} fontSize={0.4} color="red">F'</Text>

            <Sphere args={[0.15]} position={[-f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
            <Text position={[-f, -0.5, 0]} fontSize={0.4} color="red">F</Text>

            {/* Objet (Bougie) */}
            <group position={[oa, 0, 0]}>
                <Cylinder args={[0.05, 0.05, hObj]} position={[0, hObj / 2, 0]}><meshStandardMaterial color="white" /></Cylinder>
                <Sphere args={[0.2]} position={[0, hObj, 0]}><meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={1} /></Sphere>
                <Text position={[0, -0.5, 0]} fontSize={0.4} color="white">A</Text>
                <Text position={[0, hObj + 0.3, 0]} fontSize={0.4} color="white">B</Text>
            </group>

            {/* Image */}
            <group position={[oaP, 0, 0]}>
                <Cylinder args={[0.05, 0.05, Math.abs(hImg)]} position={[0, hImg / 2, 0]}><meshStandardMaterial color={isVirtual ? "#888" : "#00F5D4"} transparent opacity={isVirtual ? 0.5 : 1} /></Cylinder>
                <Sphere args={[0.2]} position={[0, hImg, 0]}><meshStandardMaterial color={isVirtual ? "#888" : "#00F5D4"} transparent opacity={isVirtual ? 0.5 : 1} /></Sphere>
                <Text position={[0, -0.5, 0]} fontSize={0.4} color={isVirtual ? "#888" : "#00F5D4"}>A'</Text>
                <Text position={[0, hImg + (hImg > 0 ? 0.3 : -0.3), 0]} fontSize={0.4} color={isVirtual ? "#888" : "#00F5D4"}>B'</Text>
            </group>

            {/* Rayons de construction */}
            {/* 1. Parallèle -> F' */}
            <group>
                <Line points={[[oa, hObj, 0], [0, hObj, 0]]} color="yellow" lineWidth={2} /> {/* Incident */}
                <Line points={[[0, hObj, 0], [oaP, hImg, 0]]} color="yellow" lineWidth={2} /> {/* Emergent */}
                {isVirtual && <Line points={[[0, hObj, 0], [oaP, hImg, 0]]} color="yellow" lineWidth={1} dashed dashSize={0.2} gapSize={0.1} />}
                {/* Prolongement si divergent */}
                {lensType === 'diverging' && <Line points={[[f, 0, 0], [0, hObj, 0]]} color="yellow" lineWidth={1} dashed />}
            </group>

            {/* 2. Centre optique */}
            <Line points={[[oa, hObj, 0], [oaP, hImg, 0]]} color="cyan" lineWidth={2} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🔭 Lentilles Minces" >
                    <div className="p-4 w-80 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setLensType('converging')} className={`flex-1 py-1 rounded text-sm ${lensType === 'converging' ? 'bg-blue-600' : 'bg-gray-700'}`}>Convergente</button>
                            <button onClick={() => setLensType('diverging')} className={`flex-1 py-1 rounded text-sm ${lensType === 'diverging' ? 'bg-orange-600' : 'bg-gray-700'}`}>Divergente</button>
                        </div>

                        <div className="space-y-3">
                            <div><label className="text-xs font-bold">Position Objet OA = {objPos.toFixed(1)} cm</label><input type="range" min="-10" max="-2" step="0.1" value={objPos} onChange={e => setObjPos(Number(e.target.value))} className="w-full" /></div>
                            <div><label className="text-xs font-bold">Focale |f'| = {focalAbs} cm</label><input type="range" min="1" max="5" step="0.5" value={focalAbs} onChange={e => setFocalAbs(Number(e.target.value))} className="w-full" /></div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="bg-gray-800 p-2 rounded">
                                <div className="text-gray-400">Grandissement γ</div>
                                <div className="text-lg font-bold">{gamma.toFixed(2)}</div>
                            </div>
                            <div className="bg-gray-800 p-2 rounded">
                                <div className="text-gray-400">Position Image OA'</div>
                                <div className={`text-lg font-bold ${oaP > 0 ? 'text-green-400' : 'text-red-400'}`}>{Math.abs(oaP) > 50 ? '∞' : oaP.toFixed(1) + ' cm'}</div>
                            </div>
                        </div>

                        <div className="mt-2 text-xs text-center text-gray-500">
                            {isVirtual ? "Image VIRTUELLE (ne peut être projetée)" : "Image RÉELLE (peut être projetée)"}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

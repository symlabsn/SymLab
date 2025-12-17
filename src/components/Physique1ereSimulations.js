import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Text, Sphere, Box, Cylinder, Line, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { DraggableHtmlPanel } from './DraggableHtmlPanel';
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
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="bg-black/95 p-8 rounded-3xl border-2 border-[#00F5D4] text-center pointer-events-auto animate-bounce shadow-2xl">
                <h2 className="text-4xl mb-4">🎉 Bravo !</h2>
                <p className="text-xl text-white mb-6">{message}</p>
                <button onClick={onClose} className="bg-[#00F5D4] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Continuer ➡️</button>
            </div>
        </div>
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
    const [mode, setMode] = useState('explore');
    const [challenge, setChallenge] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [score, setScore] = useState(0);
    const chariotRef = useRef();
    const [animPos, setAnimPos] = useState(-3);
    const [isAnimating, setIsAnimating] = useState(false);

    const travail = force * distance * Math.cos(angle * Math.PI / 180);
    const puissance = travail / 10;

    const startChallenge = () => {
        const targetW = Math.round(Math.random() * 300 + 100);
        setChallenge({ targetW, tries: 0 });
        setMode('challenge');
    };

    const checkAnswer = () => {
        if (challenge && Math.abs(travail - challenge.targetW) < 20) {
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

    return (
        <group>
            <OrbitControls />
            <Grid />
            <mesh rotation={[0, 0, -angle * Math.PI / 180]} position={[0, 0.5, 0]}>
                <boxGeometry args={[10, 0.3, 3]} />
                <meshStandardMaterial color="#444" />
            </mesh>
            <group ref={chariotRef} position={[animPos, 1.2 + Math.tan(angle * Math.PI / 180) * (animPos + 3), 0]}>
                <Box args={[1.2, 0.6, 1]}><meshStandardMaterial color="#FF6B35" /></Box>
                <Cylinder args={[0.18, 0.18, 0.12]} position={[-0.35, -0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
                <Cylinder args={[0.18, 0.18, 0.12]} position={[0.35, -0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
                <Cylinder args={[0.18, 0.18, 0.12]} position={[-0.35, -0.4, -0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
                <Cylinder args={[0.18, 0.18, 0.12]} position={[0.35, -0.4, -0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
            </group>
            <Line points={[[animPos, 1.5 + Math.tan(angle * Math.PI / 180) * (animPos + 3), 0], [animPos + force / 25, 1.5 + Math.tan(angle * Math.PI / 180) * (animPos + 3), 0]]} color="yellow" lineWidth={5} />
            <Text position={[animPos + force / 50, 2.2 + Math.tan(angle * Math.PI / 180) * (animPos + 3), 0]} fontSize={0.35} color="yellow">F = {force} N</Text>

            <Html position={[7, 4, 0]}>
                <DraggableHtmlPanel title="🔧 Travail & Puissance" usePortal={false}>
                    <div className="p-4 w-80 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('explore')} className={`flex-1 py-2 rounded-lg font-bold transition-all ${mode === 'explore' ? 'bg-blue-500' : 'bg-gray-700'}`}>📚 Explorer</button>
                            <button onClick={startChallenge} className={`flex-1 py-2 rounded-lg font-bold transition-all ${mode === 'challenge' ? 'bg-orange-500' : 'bg-gray-700'}`}>🎯 Défi</button>
                        </div>
                        {mode === 'challenge' && challenge && (
                            <div className="mb-4 p-3 bg-orange-900/40 rounded-lg border border-orange-500">
                                <p className="text-sm">🎯 Objectif: W ≈ <span className="text-xl font-bold text-orange-400">{challenge.targetW} J</span></p>
                                <p className="text-xs text-gray-400">Essais: {challenge.tries}</p>
                            </div>
                        )}
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold text-yellow-400">Force F: {force} N</label><input type="range" min="10" max="120" value={force} onChange={e => setForce(Number(e.target.value))} className="w-full accent-yellow-500" /></div>
                            <div><label className="text-xs font-bold text-cyan-400">Angle α: {angle}°</label><input type="range" min="0" max="60" value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full accent-cyan-500" /></div>
                            <div><label className="text-xs font-bold text-green-400">Distance d: {distance} m</label><input type="range" min="1" max="10" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full accent-green-500" /></div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-black/60 to-black/40 rounded-lg border border-white/20">
                            <p className="text-xs text-gray-400 mb-1">W = F × d × cos(α)</p>
                            <p className="text-2xl font-bold text-[#00F5D4]">W = {travail.toFixed(1)} J</p>
                            <p className="text-sm text-yellow-400 mt-2">P = W/t = {puissance.toFixed(1)} W</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button onClick={startAnimation} className="flex-1 py-2 bg-green-600 rounded-lg font-bold hover:bg-green-500">▶️ Animer</button>
                            {mode === 'challenge' && <button onClick={checkAnswer} className="flex-1 py-2 bg-orange-600 rounded-lg font-bold hover:bg-orange-500">Vérifier</button>}
                        </div>
                        {score > 0 && <div className="mt-3 text-center text-sm text-[#00F5D4]">🏆 Score: {score} pts</div>}
                    </div>
                </DraggableHtmlPanel>
            </Html>
            {showSuccess && <SuccessOverlay show={showSuccess} message="Tu as trouvé le travail correct !" onClose={() => setShowSuccess(false)} />}
        </group>
    );
}

// ==========================================
// P2: ÉNERGIE CINÉTIQUE
// ==========================================
export function EnergieCinetiqueSim() {
    const [mass, setMass] = useState(1000);
    const [velocity, setVelocity] = useState(20);
    const [brakeForce, setBrakeForce] = useState(5000);
    const [mode, setMode] = useState('explore');
    const [carPos, setCarPos] = useState(-6);
    const [isMoving, setIsMoving] = useState(false);

    const ec = 0.5 * mass * velocity * velocity;
    const distanceFreinage = ec / brakeForce;

    useFrame((state, delta) => {
        if (isMoving) {
            setCarPos(p => {
                if (p < distanceFreinage - 6) return p + delta * velocity / 5;
                setIsMoving(false);
                return p;
            });
        }
    });

    return (
        <group>
            <OrbitControls />
            <Grid />
            <Plane args={[25, 5]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.95, 0]}><meshStandardMaterial color="#333" /></Plane>
            <Line points={[[-6, -1.9, 2.2], [distanceFreinage - 6, -1.9, 2.2]]} color="red" lineWidth={4} />
            <Text position={[(distanceFreinage - 6) / 2 - 3, -1.5, 2.2]} fontSize={0.4} color="red">d = {distanceFreinage.toFixed(1)} m</Text>
            <group position={[carPos, -1.2, 0]}>
                <Box args={[2.2, 0.6, 1.2]}><meshStandardMaterial color="#E63946" /></Box>
                <Box args={[1, 0.5, 1.1]} position={[0.4, 0.5, 0]}><meshStandardMaterial color="#1D3557" /></Box>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[-0.7, -0.35, 0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[0.7, -0.35, 0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[-0.7, -0.35, -0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.28, 0.28, 0.18]} position={[0.7, -0.35, -0.6]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
            </group>

            <Html position={[8, 4, 0]}>
                <DraggableHtmlPanel title="🚗 Énergie Cinétique" usePortal={false}>
                    <div className="p-4 w-80 text-white">
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold text-blue-400">Masse: {mass} kg</label><input type="range" min="500" max="2500" step="100" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full accent-blue-500" /></div>
                            <div><label className="text-xs font-bold text-green-400">Vitesse: {velocity} m/s ({(velocity * 3.6).toFixed(0)} km/h)</label><input type="range" min="5" max="50" value={velocity} onChange={e => setVelocity(Number(e.target.value))} className="w-full accent-green-500" /></div>
                            <div><label className="text-xs font-bold text-red-400">Force freinage: {brakeForce} N</label><input type="range" min="1000" max="12000" step="500" value={brakeForce} onChange={e => setBrakeForce(Number(e.target.value))} className="w-full accent-red-500" /></div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-green-900/30 to-black/50 rounded-lg border border-green-500/30">
                            <p className="text-xs text-gray-400">Ec = ½mv²</p>
                            <p className="text-2xl font-bold text-green-400">Ec = {(ec / 1000).toFixed(1)} kJ</p>
                        </div>
                        <div className="mt-2 p-3 bg-gradient-to-br from-red-900/30 to-black/50 rounded-lg border border-red-500/30">
                            <p className="text-xs text-gray-400">TEC: ΔEc = W(F) → d = Ec/F</p>
                            <p className="text-xl font-bold text-red-400">Distance: {distanceFreinage.toFixed(1)} m</p>
                        </div>
                        <button onClick={() => { setCarPos(-6); setIsMoving(true); }} className="w-full mt-4 py-2 bg-green-600 rounded-lg font-bold hover:bg-green-500">▶️ Simuler freinage</button>
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

            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="🎢 Énergie Mécanique" usePortal={false}>
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
// P5-P6: ÉLECTROSTATIQUE
// ==========================================
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
            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="⚡ Champ Électrique" usePortal={false}>
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
    const tau = R * C;

    const graphPoints = useMemo(() => {
        const pts = [];
        for (let x = 0; x < 10; x += 0.1) {
            const t = x * tau * 0.5;
            const u = mode === 'charge' ? 5 * (1 - Math.exp(-t / tau)) : 5 * Math.exp(-t / tau);
            pts.push(new THREE.Vector3(x - 5, u - 2.5, 0));
        }
        return pts;
    }, [R, C, mode, tau]);

    return (
        <group>
            <OrbitControls />
            <Grid />
            <Box args={[12, 8, 1]} position={[0, 2, -2]}><meshStandardMaterial color="#0a0a0a" /></Box>
            <group position={[0, 2.5, -1.4]}>
                <gridHelper args={[10, 10, '#333', '#222']} rotation={[Math.PI / 2, 0, 0]} />
                <Line points={graphPoints} color="#00FF00" lineWidth={4} />
            </group>
            <Box args={[7, 0.4, 3.5]} position={[0, -1.5, 2]}><meshStandardMaterial color="#d4d4d4" /></Box>
            <Box args={[1.2, 0.5, 0.5]} position={[-1.8, -1.1, 2]}><meshStandardMaterial color="#b5651d" /></Box>
            <Text position={[-1.8, -0.4, 2]} fontSize={0.25} color="#333">R={R}Ω</Text>
            <Cylinder args={[0.35, 0.35, 0.7]} position={[1.8, -1.1, 2]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#1a1a1a" /></Cylinder>
            <Text position={[1.8, -0.4, 2]} fontSize={0.25} color="#333">C={(C * 1000).toFixed(0)}mF</Text>

            <Html position={[8, 4, 0]}>
                <DraggableHtmlPanel title="📺 Circuit RC" usePortal={false}>
                    <div className="p-4 w-72 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('charge')} className={`flex-1 py-2 rounded-lg font-bold ${mode === 'charge' ? 'bg-green-500' : 'bg-gray-700'}`}>⬆️ Charge</button>
                            <button onClick={() => setMode('discharge')} className={`flex-1 py-2 rounded-lg font-bold ${mode === 'discharge' ? 'bg-red-500' : 'bg-gray-700'}`}>⬇️ Décharge</button>
                        </div>
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold">R = {R} Ω</label><input type="range" min="100" max="2500" step="100" value={R} onChange={e => setR(Number(e.target.value))} className="w-full" /></div>
                            <div><label className="text-xs font-bold">C = {(C * 1000).toFixed(1)} mF</label><input type="range" min="0.1" max="3" step="0.1" value={C * 1000} onChange={e => setC(Number(e.target.value) / 1000)} className="w-full" /></div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-cyan-900/30 to-black/50 rounded-lg border border-cyan-500/30 text-center">
                            <span className="text-gray-400">τ = RC = </span><span className="text-2xl font-bold text-[#00F5D4]">{tau.toFixed(2)} s</span>
                        </div>
                        <div className="mt-3 text-xs text-gray-400">
                            <p>Charge: Uc = E(1 - e^(-t/τ))</p>
                            <p>Décharge: Uc = E × e^(-t/τ)</p>
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
    const [freq, setFreq] = useState(2);
    const [lambda, setLambda] = useState(1);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            materialRef.current.uniforms.uFreq.value = freq;
        }
    });

    const WaveShader = {
        uniforms: { uTime: { value: 0 }, uFreq: { value: 2.0 } },
        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `uniform float uTime; uniform float uFreq; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float d1 = distance(p, vec2(-0.3, 0.0)); float d2 = distance(p, vec2(0.3, 0.0)); float w = sin(d1 * 20.0 - uTime * uFreq * 5.0) + sin(d2 * 20.0 - uTime * uFreq * 5.0); float c = 0.5 + 0.25 * w; gl_FragColor = vec4(0.0, c, c * 1.2, 0.95); }`
    };

    return (
        <group>
            <OrbitControls />
            <mesh rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[12, 12]} /><shaderMaterial ref={materialRef} args={[WaveShader]} transparent /></mesh>
            <Text position={[0, 0.5, -6.5]} fontSize={0.5} color="#00AACC">Interférences - Cuve à Ondes</Text>
            <Html position={[7, 3, 0]}>
                <DraggableHtmlPanel title="🌊 Ondes Mécaniques" usePortal={false}>
                    <div className="p-4 w-64 text-white">
                        <div><label className="text-xs font-bold">Fréquence f = {freq} Hz</label><input type="range" min="0.5" max="5" step="0.1" value={freq} onChange={e => setFreq(Number(e.target.value))} className="w-full accent-cyan-500" /></div>
                        <div className="mt-4 p-3 bg-black/50 rounded-lg text-sm">
                            <p className="text-gray-400">λ = v / f</p>
                            <p className="text-gray-400 mt-1">Interférence constructive: Δ = nλ</p>
                            <p className="text-gray-400">Interférence destructive: Δ = (n+½)λ</p>
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
    const [focal, setFocal] = useState(3);
    const [objPos, setObjPos] = useState(-6);
    const f = focal;
    const oaP = 1 / ((1 / f) + (1 / objPos));
    const gamma = oaP / objPos;

    return (
        <group>
            <OrbitControls />
            <Grid />
            <Line points={[[-12, 0, 0], [12, 0, 0]]} color="white" transparent opacity={0.3} />
            <mesh rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[2.5, 2.5, 0.2, 32]} /><meshPhysicalMaterial transmission={1} thickness={0.4} roughness={0} color="#88CCFF" /></mesh>
            <Sphere args={[0.12]} position={[f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
            <Text position={[f, -0.5, 0]} fontSize={0.3} color="red">F'</Text>
            <Sphere args={[0.12]} position={[-f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
            <Text position={[-f, -0.5, 0]} fontSize={0.3} color="red">F</Text>
            <group position={[objPos, 0, 0]}>
                <Cylinder args={[0.1, 0.1, 1.8]} position={[0, 0.9, 0]}><meshStandardMaterial color="white" /></Cylinder>
                <Sphere args={[0.25]} position={[0, 1.9, 0]}><meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={0.5} /></Sphere>
                <pointLight position={[0, 1.9, 0]} color="orange" intensity={0.6} distance={4} />
            </group>
            <group position={[oaP, 0, 0]} scale={[1, Math.abs(gamma), 1]} rotation={[0, 0, gamma < 0 ? Math.PI : 0]}>
                <Cylinder args={[0.1, 0.1, 1.8]} position={[0, 0.9, 0]}><meshStandardMaterial color="#00F5D4" transparent opacity={0.6} /></Cylinder>
                <Sphere args={[0.25]} position={[0, 1.9, 0]}><meshStandardMaterial color="#00F5D4" transparent opacity={0.6} /></Sphere>
            </group>
            <Line points={[[objPos, 1.9, 0], [0, 1.9, 0], [oaP, 1.9 * gamma, 0]]} color="yellow" lineWidth={2} />
            <Line points={[[objPos, 1.9, 0], [0, 0, 0], [oaP, 1.9 * gamma, 0]]} color="cyan" lineWidth={2} />

            <Html position={[8, 4, 0]}>
                <DraggableHtmlPanel title="🔭 Lentilles Minces" usePortal={false}>
                    <div className="p-4 w-80 text-white">
                        <div className="space-y-3">
                            <div><label className="text-xs font-bold">Position objet OA = {objPos.toFixed(1)} cm</label><input type="range" min="-12" max="-1.5" step="0.2" value={objPos} onChange={e => setObjPos(Number(e.target.value))} className="w-full" /></div>
                            <div><label className="text-xs font-bold">Distance focale f' = {focal} cm</label><input type="range" min="1" max="6" step="0.5" value={focal} onChange={e => setFocal(Number(e.target.value))} className="w-full" /></div>
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-br from-purple-900/30 to-black/50 rounded-lg border border-purple-500/30">
                            <p className="text-xs text-gray-400 mb-2">1/OA' - 1/OA = 1/f'</p>
                            <p className="text-sm">γ = OA'/OA = <span className="text-xl font-bold text-[#00F5D4]">{gamma.toFixed(2)}</span></p>
                            <p className="text-sm mt-2 text-gray-300">Image: <span className={oaP > 0 ? 'text-green-400' : 'text-red-400'}>{oaP > 0 ? "Réelle" : "Virtuelle"}</span>, <span className={gamma < 0 ? 'text-yellow-400' : 'text-blue-400'}>{gamma < 0 ? "Renversée" : "Droite"}</span></p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

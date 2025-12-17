import React, { useState, useRef, useMemo } from 'react';
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

function SuccessOverlay({ show, message, onNext }) {
    if (!show) return null;
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="bg-black/90 p-8 rounded-3xl border-2 border-[#00F5D4] text-center pointer-events-auto animate-bounce">
                <h2 className="text-4xl mb-4">🎉 Bravo !</h2>
                <p className="text-xl text-white mb-6">{message}</p>
                <button onClick={onNext} className="bg-[#00F5D4] text-black px-8 py-3 rounded-full font-bold">Suivant ➡️</button>
            </div>
        </div>
    );
}

function Grid() {
    return <gridHelper args={[30, 30, '#333', '#111']} position={[0, -2, 0]} />;
}

// ==========================================
// P1: TRAVAIL ET PUISSANCE (Chariot sur rampe)
// ==========================================
export function TravailPuissanceSim() {
    const [force, setForce] = useState(50);
    const [angle, setAngle] = useState(30);
    const [distance, setDistance] = useState(5);

    const travail = force * distance * Math.cos(angle * Math.PI / 180);
    const puissance = travail / 10; // Assuming 10s

    return (
        <group>
            <OrbitControls />
            <Grid />

            {/* Rampe */}
            <mesh rotation={[0, 0, -angle * Math.PI / 180]} position={[0, 1, 0]}>
                <boxGeometry args={[8, 0.2, 2]} />
                <meshStandardMaterial color="#555" />
            </mesh>

            {/* Chariot */}
            <group position={[-2, 1.5 + Math.tan(angle * Math.PI / 180) * 2, 0]}>
                <Box args={[1, 0.5, 0.8]}><meshStandardMaterial color="#FF6B35" /></Box>
                <Cylinder args={[0.15, 0.15, 0.1]} position={[-0.3, -0.35, 0.4]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#333" /></Cylinder>
                <Cylinder args={[0.15, 0.15, 0.1]} position={[0.3, -0.35, 0.4]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#333" /></Cylinder>
            </group>

            {/* Force Vector */}
            <Line points={[[-2, 2, 0], [-2 + force / 30, 2, 0]]} color="yellow" lineWidth={4} />
            <Text position={[-2 + force / 60, 2.5, 0]} fontSize={0.3} color="yellow">F = {force}N</Text>

            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="🔧 Travail & Puissance">
                    <div className="p-4 w-72 text-white">
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold">Force (N): {force}</label>
                                <input type="range" min="10" max="100" value={force} onChange={e => setForce(Number(e.target.value))} className="w-full accent-yellow-500" />
                            </div>
                            <div>
                                <label className="text-xs font-bold">Angle α: {angle}°</label>
                                <input type="range" min="0" max="60" value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full accent-cyan-500" />
                            </div>
                            <div>
                                <label className="text-xs font-bold">Distance (m): {distance}</label>
                                <input type="range" min="1" max="10" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full accent-green-500" />
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-black/50 rounded-lg border border-white/20">
                            <p className="text-xs text-gray-400">W = F × d × cos(α)</p>
                            <p className="text-xl font-bold text-[#00F5D4]">W = {travail.toFixed(1)} J</p>
                            <p className="text-sm text-yellow-400 mt-2">P = {puissance.toFixed(1)} W</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P2: ÉNERGIE CINÉTIQUE (Voiture + TEC)
// ==========================================
export function EnergieCinetiqueSim() {
    const [mass, setMass] = useState(1000);
    const [velocity, setVelocity] = useState(20);
    const [brakeForce, setBrakeForce] = useState(5000);

    const ec = 0.5 * mass * velocity * velocity;
    const distanceFreinage = ec / brakeForce;

    return (
        <group>
            <OrbitControls />
            <Grid />

            {/* Route */}
            <Plane args={[20, 4]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
                <meshStandardMaterial color="#333" />
            </Plane>

            {/* Voiture */}
            <group position={[-5, -1, 0]}>
                <Box args={[2, 0.5, 1]}><meshStandardMaterial color="#E63946" /></Box>
                <Box args={[0.8, 0.4, 0.9]} position={[0.3, 0.4, 0]}><meshStandardMaterial color="#333" /></Box>
                <Cylinder args={[0.25, 0.25, 0.15]} position={[-0.6, -0.3, 0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
                <Cylinder args={[0.25, 0.25, 0.15]} position={[0.6, -0.3, 0.5]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#111" /></Cylinder>
            </group>

            {/* Distance freinage marker */}
            <Line points={[[-5, -1.5, 2], [-5 + distanceFreinage, -1.5, 2]]} color="red" lineWidth={3} />
            <Text position={[-5 + distanceFreinage / 2, -1, 2]} fontSize={0.3} color="red">d = {distanceFreinage.toFixed(1)}m</Text>

            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="🚗 Énergie Cinétique">
                    <div className="p-4 w-72 text-white">
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold">Masse (kg): {mass}</label>
                                <input type="range" min="500" max="2000" step="100" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full" />
                            </div>
                            <div>
                                <label className="text-xs font-bold">Vitesse (m/s): {velocity}</label>
                                <input type="range" min="5" max="50" value={velocity} onChange={e => setVelocity(Number(e.target.value))} className="w-full" />
                            </div>
                            <div>
                                <label className="text-xs font-bold">Force freinage (N): {brakeForce}</label>
                                <input type="range" min="1000" max="10000" step="500" value={brakeForce} onChange={e => setBrakeForce(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-black/50 rounded-lg">
                            <p className="text-xs text-gray-400">Ec = ½mv²</p>
                            <p className="text-xl font-bold text-green-400">Ec = {(ec / 1000).toFixed(1)} kJ</p>
                            <p className="text-xs text-gray-400 mt-2">TEC: ΔEc = W(F)</p>
                            <p className="text-sm text-red-400">Distance freinage: {distanceFreinage.toFixed(1)} m</p>
                        </div>
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

    const L = 3; // Longueur pendule
    const g = 9.81;
    const omega = Math.sqrt(g / L);

    const [currentAngle, setCurrentAngle] = useState(angleInit);
    const [ec, setEc] = useState(0);
    const [ep, setEp] = useState(0);

    useFrame((state, delta) => {
        if (isPlaying && penduleRef.current) {
            timeRef.current += delta;
            const theta = (angleInit * Math.PI / 180) * Math.cos(omega * timeRef.current);
            penduleRef.current.rotation.z = theta;
            setCurrentAngle(theta * 180 / Math.PI);

            // Énergies
            const h = L * (1 - Math.cos(theta));
            const v = L * omega * Math.abs(Math.sin(omega * timeRef.current)) * (angleInit * Math.PI / 180);
            setEp(10 * g * h);
            setEc(0.5 * 10 * v * v);
        }
    });

    const reset = () => {
        setIsPlaying(false);
        timeRef.current = 0;
        if (penduleRef.current) penduleRef.current.rotation.z = angleInit * Math.PI / 180;
        setCurrentAngle(angleInit);
    };

    return (
        <group>
            <OrbitControls />

            {/* Support */}
            <Box args={[4, 0.2, 0.5]} position={[0, 4, 0]}><meshStandardMaterial color="#555" /></Box>

            {/* Pendule */}
            <group ref={penduleRef} position={[0, 4, 0]}>
                <Cylinder args={[0.05, 0.05, L]} position={[0, -L / 2, 0]}><meshStandardMaterial color="#888" /></Cylinder>
                <Sphere args={[0.3]} position={[0, -L, 0]}><meshStandardMaterial color="#FF0055" /></Sphere>
            </group>

            {/* Niveau de référence */}
            <Line points={[[-3, 4 - L, 0], [3, 4 - L, 0]]} color="cyan" opacity={0.5} transparent lineWidth={2} />
            <Text position={[3.5, 4 - L, 0]} fontSize={0.2} color="cyan">Ref Ep=0</Text>

            <Html position={[5, 4, 0]}>
                <DraggableHtmlPanel title="🎢 Énergie Mécanique">
                    <div className="p-4 w-72 text-white">
                        <div className="mb-4">
                            <label className="text-xs font-bold">Angle initial: {angleInit}°</label>
                            <input type="range" min="10" max="80" value={angleInit} onChange={e => { setAngleInit(Number(e.target.value)); reset(); }} className="w-full" disabled={isPlaying} />
                        </div>
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setIsPlaying(!isPlaying)} className={`flex-1 py-2 rounded font-bold ${isPlaying ? 'bg-red-500' : 'bg-green-500'}`}>
                                {isPlaying ? 'Pause' : 'Lâcher'}
                            </button>
                            <button onClick={reset} className="px-4 bg-gray-600 rounded">↺</button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="bg-green-900/50 p-2 rounded"><div className="text-green-400">Ec</div><div>{ec.toFixed(1)} J</div></div>
                            <div className="bg-blue-900/50 p-2 rounded"><div className="text-blue-400">Ep</div><div>{ep.toFixed(1)} J</div></div>
                            <div className="bg-yellow-900/50 p-2 rounded"><div className="text-yellow-400">Em</div><div>{(ec + ep).toFixed(1)} J</div></div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P5-P6: ÉLECTROSTATIQUE (Champ E)
// ==========================================
export function ElectrostatiqueSim() {
    const [charges, setCharges] = useState([{ x: 2, y: 0, q: 5 }, { x: -2, y: 0, q: -5 }]);
    const [showFieldLines, setShowFieldLines] = useState(true);

    const addCharge = (q) => {
        setCharges([...charges, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4, q }]);
    };

    // Generate field lines (simplified)
    const fieldLines = useMemo(() => {
        const lines = [];
        charges.forEach((c, idx) => {
            if (c.q > 0) {
                for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
                    const pts = [];
                    let x = c.x + 0.3 * Math.cos(a);
                    let y = c.y + 0.3 * Math.sin(a);
                    for (let step = 0; step < 20; step++) {
                        pts.push(new THREE.Vector3(x, y, 0));
                        let ex = 0, ey = 0;
                        charges.forEach(oc => {
                            const dx = x - oc.x, dy = y - oc.y;
                            const r2 = dx * dx + dy * dy + 0.01;
                            const e = oc.q / r2;
                            ex += e * dx / Math.sqrt(r2);
                            ey += e * dy / Math.sqrt(r2);
                        });
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

            {/* Charges */}
            {charges.map((c, i) => (
                <group key={i} position={[c.x, c.y, 0]}>
                    <Sphere args={[0.3]}><meshStandardMaterial color={c.q > 0 ? "#FF4444" : "#4444FF"} /></Sphere>
                    <Text position={[0, 0, 0]} fontSize={0.25} color="white">{c.q > 0 ? '+' : '-'}</Text>
                </group>
            ))}

            {/* Field Lines */}
            {showFieldLines && fieldLines.map((pts, i) => (
                <Line key={i} points={pts} color="#00F5D4" lineWidth={1} opacity={0.6} transparent />
            ))}

            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="⚡ Champ Électrique">
                    <div className="p-4 w-64 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => addCharge(5)} className="flex-1 bg-red-600 py-2 rounded font-bold">+</button>
                            <button onClick={() => addCharge(-5)} className="flex-1 bg-blue-600 py-2 rounded font-bold">-</button>
                            <button onClick={() => setCharges([])} className="px-4 bg-gray-700 rounded">Clear</button>
                        </div>
                        <label className="flex items-center gap-2 text-xs">
                            <input type="checkbox" checked={showFieldLines} onChange={e => setShowFieldLines(e.target.checked)} />
                            Afficher lignes de champ
                        </label>
                        <div className="mt-4 text-xs text-gray-400">
                            <p>Loi de Coulomb: F = k·q₁·q₂/r²</p>
                            <p>E = F/q (N/C ou V/m)</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P7-P9: ÉLECTRONIQUE (Circuit RC + Oscillo)
// ==========================================
export function ElectroniqueSim() {
    const [mode, setMode] = useState('charge');
    const [R, setR] = useState(1000);
    const [C, setC] = useState(0.001);

    const graphPoints = useMemo(() => {
        const tau = R * C;
        const pts = [];
        for (let x = 0; x < 10; x += 0.1) {
            const t = x * tau * 0.5;
            const u = mode === 'charge' ? 5 * (1 - Math.exp(-t / tau)) : 5 * Math.exp(-t / tau);
            pts.push(new THREE.Vector3(x - 5, u - 2.5, 0));
        }
        return pts;
    }, [R, C, mode]);

    return (
        <group>
            <OrbitControls />
            <Grid />

            {/* Oscilloscope */}
            <Box args={[12, 7, 1]} position={[0, 2, -2]}><meshStandardMaterial color="#111" /></Box>
            <group position={[0, 2.5, -1.4]}>
                <gridHelper args={[10, 10, '#333', '#222']} rotation={[Math.PI / 2, 0, 0]} />
                <Line points={graphPoints} color="#00FF00" lineWidth={3} />
            </group>

            {/* Components on breadboard */}
            <Box args={[6, 0.3, 3]} position={[0, -1, 2]}><meshStandardMaterial color="#DDD" /></Box>
            <Box args={[1, 0.4, 0.4]} position={[-1.5, -0.6, 2]}><meshStandardMaterial color="tan" /></Box>
            <Text position={[-1.5, 0, 2]} fontSize={0.2} color="black">R={R}Ω</Text>
            <Cylinder args={[0.3, 0.3, 0.6]} position={[1.5, -0.6, 2]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#222" /></Cylinder>
            <Text position={[1.5, 0, 2]} fontSize={0.2} color="black">C={C * 1000}mF</Text>

            <Html position={[7, 4, 0]}>
                <DraggableHtmlPanel title="⚡ Circuit RC">
                    <div className="p-4 w-64 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('charge')} className={`flex-1 py-1 rounded ${mode === 'charge' ? 'bg-green-500' : 'bg-gray-700'}`}>Charge</button>
                            <button onClick={() => setMode('discharge')} className={`flex-1 py-1 rounded ${mode === 'discharge' ? 'bg-red-500' : 'bg-gray-700'}`}>Décharge</button>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs">R: {R}Ω</label>
                                <input type="range" min="100" max="2000" step="100" value={R} onChange={e => setR(Number(e.target.value))} className="w-full" />
                            </div>
                            <div>
                                <label className="text-xs">C: {(C * 1000).toFixed(1)}mF</label>
                                <input type="range" min="0.1" max="2" step="0.1" value={C * 1000} onChange={e => setC(Number(e.target.value) / 1000)} className="w-full" />
                            </div>
                        </div>
                        <div className="mt-4 p-2 bg-black/50 rounded text-center">
                            <span className="text-gray-400">τ = RC = </span>
                            <span className="text-[#00F5D4] font-bold text-lg">{(R * C).toFixed(2)} s</span>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P10: ONDES MÉCANIQUES (Cuve à ondes)
// ==========================================
export function OndesSim() {
    const materialRef = useRef();
    const [freq, setFreq] = useState(2);
    const [sources, setSources] = useState([{ x: -0.3, y: 0 }, { x: 0.3, y: 0 }]);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            materialRef.current.uniforms.uFreq.value = freq;
        }
    });

    const WaveShader = {
        uniforms: {
            uTime: { value: 0 },
            uFreq: { value: 2.0 },
        },
        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
            uniform float uTime;
            uniform float uFreq;
            varying vec2 vUv;
            void main() {
                vec2 p = vUv * 2.0 - 1.0;
                vec2 s1 = vec2(-0.3, 0.0);
                vec2 s2 = vec2(0.3, 0.0);
                float d1 = distance(p, s1);
                float d2 = distance(p, s2);
                float w = sin(d1 * 20.0 - uTime * uFreq * 5.0) + sin(d2 * 20.0 - uTime * uFreq * 5.0);
                float c = 0.5 + 0.25 * w;
                gl_FragColor = vec4(0.0, c, c, 0.9);
            }
        `
    };

    return (
        <group>
            <OrbitControls />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <shaderMaterial ref={materialRef} args={[WaveShader]} transparent />
            </mesh>
            <Text position={[0, 0.5, -5.5]} fontSize={0.4} color="#00AACC">Interférences - Cuve à Ondes</Text>

            <Html position={[6, 3, 0]}>
                <DraggableHtmlPanel title="🌊 Ondes">
                    <div className="p-4 w-56 text-white">
                        <label className="text-xs font-bold">Fréquence: {freq} Hz</label>
                        <input type="range" min="1" max="5" step="0.1" value={freq} onChange={e => setFreq(Number(e.target.value))} className="w-full" />
                        <div className="mt-4 text-xs text-gray-400">
                            <p>λ = v / f</p>
                            <p>Franges brillantes: Δ = nλ</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P11: OPTIQUE (Banc optique + Lentilles)
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

            {/* Axe optique */}
            <Line points={[[-10, 0, 0], [10, 0, 0]]} color="white" opacity={0.3} transparent />

            {/* Lentille */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[2, 2, 0.15, 32]} />
                <meshPhysicalMaterial transmission={1} thickness={0.3} roughness={0} color="#AACCFF" />
            </mesh>

            {/* Foyers */}
            <Sphere args={[0.1]} position={[f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
            <Text position={[f, -0.4, 0]} fontSize={0.25} color="red">F'</Text>
            <Sphere args={[0.1]} position={[-f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
            <Text position={[-f, -0.4, 0]} fontSize={0.25} color="red">F</Text>

            {/* Objet (Bougie) */}
            <group position={[objPos, 0, 0]}>
                <Cylinder args={[0.08, 0.08, 1.5]} position={[0, 0.75, 0]}><meshStandardMaterial color="white" /></Cylinder>
                <Sphere args={[0.2]} position={[0, 1.6, 0]}><meshStandardMaterial color="orange" emissive="orange" /></Sphere>
                <pointLight position={[0, 1.6, 0]} color="orange" intensity={0.5} distance={3} />
            </group>

            {/* Image */}
            <group position={[oaP, 0, 0]} scale={[1, Math.abs(gamma), 1]} rotation={[0, 0, gamma < 0 ? Math.PI : 0]}>
                <Cylinder args={[0.08, 0.08, 1.5]} position={[0, 0.75, 0]}><meshStandardMaterial color="#00F5D4" transparent opacity={0.5} /></Cylinder>
                <Sphere args={[0.2]} position={[0, 1.6, 0]}><meshStandardMaterial color="#00F5D4" transparent opacity={0.5} /></Sphere>
            </group>

            {/* Rayons */}
            <Line points={[[objPos, 1.6, 0], [0, 1.6, 0], [oaP, 1.6 * gamma, 0]]} color="yellow" lineWidth={2} />
            <Line points={[[objPos, 1.6, 0], [0, 0, 0], [oaP, 1.6 * gamma, 0]]} color="cyan" lineWidth={2} />

            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="👁️ Lentilles Minces">
                    <div className="p-4 w-72 text-white">
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs">Position objet OA: {objPos.toFixed(1)}</label>
                                <input type="range" min="-10" max="-1.5" step="0.1" value={objPos} onChange={e => setObjPos(Number(e.target.value))} className="w-full" />
                            </div>
                            <div>
                                <label className="text-xs">Focale f': {focal}</label>
                                <input type="range" min="1" max="5" step="0.5" value={focal} onChange={e => setFocal(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>
                        <div className="mt-4 p-2 bg-black/50 rounded text-xs">
                            <p>1/OA' - 1/OA = 1/f'</p>
                            <p className="mt-2">γ = OA'/OA = <span className="text-[#00F5D4] font-bold">{gamma.toFixed(2)}</span></p>
                            <p>Image: {oaP > 0 ? "Réelle" : "Virtuelle"}, {gamma < 0 ? "Renversée" : "Droite"}</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

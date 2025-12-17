import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, useTexture, Text, Line, Sphere, Box, Cylinder, Plane, Cone } from '@react-three/drei';
import * as THREE from 'three';
import { DraggableHtmlPanel } from './DraggableHtmlPanel'; // Assumed generic component
import confetti from 'canvas-confetti'; // Assuming global confetti or similar, or just simplified

// ==========================================
// SHARED COMPONENTS
// ==========================================

function AxesHelper({ size = 5 }) {
    return <axesHelper args={[size]} />;
}

function Grid({ size = 20, divisions = 20 }) {
    return <gridHelper args={[size, divisions, '#444', '#222']} position={[0, -0.01, 0]} />;
}

// ==========================================
// P1-P3: MÉCANIQUE & ÉNERGIE (SKATE PARK / ROLLER COASTER)
// ==========================================
export function EnergieMecaniqueSim({ mode = 'explore' }) { // explore, challenge
    // Physique : Montagnes russes
    const [mass, setMass] = useState(50); // kg
    const [height, setHeight] = useState(10); // m
    const [velocity, setVelocity] = useState(0);
    const [position, setPosition] = useState(0); // along track
    const [isPlaying, setIsPlaying] = useState(false);
    const [friction, setFriction] = useState(0);
    const [trackType, setTrackType] = useState('parabola'); // parabola, loop, slope

    // Variables temps réel
    const g = 9.81;
    const [ec, setEc] = useState(0);
    const [ep, setEp] = useState(0);
    const [em, setEm] = useState(0);

    // Refs
    const skaterRef = useRef();
    const timeRef = useRef(0);

    // Calcul de la hauteur de la piste y = f(x)
    const getTrackY = (x) => {
        if (trackType === 'slope') return Math.max(0, 10 - x * 0.5);
        if (trackType === 'parabola') return 0.1 * x * x;
        if (trackType === 'loop') {
            // Simple loop approx
            if (x > 5 && x < 15) return 5 + 5 * Math.sin((x - 5) * Math.PI / 5 - Math.PI / 2);
            return Math.max(0, 10 - x * 0.5); // approach
        }
        return 0;
    };

    useFrame((state, delta) => {
        if (isPlaying && skaterRef.current) {
            // Simulation simple conservation énergie + friction
            // Em = Ec + Ep
            // Ec = Em_initial - Ep - W_frot

            // Simplification: on déplace x, on calcule y, on déduit v
            const x = skaterRef.current.position.x;
            const newX = x + velocity * delta * 0.5; // approx

            // Limites
            if (newX > 20 || newX < -20) {
                setIsPlaying(false);
                return;
            }

            const y = getTrackY(newX);
            const currentEp = mass * g * y;

            // Gestion énergie
            // Em initial (au départ)
            const emTotal = mass * g * height;
            const currentEc = Math.max(0, emTotal - currentEp);
            const v = Math.sqrt(2 * currentEc / mass);

            setEp(currentEp);
            setEc(currentEc);
            setEm(emTotal);
            setVelocity(v);

            skaterRef.current.position.set(newX, y, 0);

            // Rotation tangentielle (visuel)
            const nextY = getTrackY(newX + 0.1);
            const angle = Math.atan2(nextY - y, 0.1);
            skaterRef.current.rotation.z = angle;
        }
    });

    const reset = () => {
        setIsPlaying(false);
        if (skaterRef.current) {
            skaterRef.current.position.set(-10, getTrackY(-10), 0);
            setHeight(getTrackY(-10));
        }
        setEc(0);
        setEp(mass * g * getTrackY(-10));
        setEm(mass * g * getTrackY(-10));
    };

    // Track Geometry
    const TrackMesh = useMemo(() => {
        const points = [];
        for (let x = -20; x <= 20; x += 0.5) {
            points.push(new THREE.Vector3(x, getTrackY(x), 0));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        return (
            <group>
                <Line points={points} color="#00F5D4" lineWidth={5} />
                {points.map((p, i) => (
                    i % 2 === 0 && <mesh key={i} position={[p.x, p.y - 0.5, p.z]}>
                        <cylinderGeometry args={[0.1, 0.1, 1]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                ))}
            </group>
        );
    }, [trackType]);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Grid />

            {/* Track */}
            {TrackMesh}

            {/* Skater / Ball */}
            <group ref={skaterRef} position={[-10, 10, 0]}>
                <mesh>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="#FF0055" />
                </mesh>
                <Text position={[0, 1, 0]} fontSize={0.5} color="white">
                    {velocity.toFixed(1)} m/s
                </Text>
            </group>

            {/* Energy Bars (In Scene) */}
            <group position={[-8, 8, -5]} scale={0.5}>
                <Text position={[0, 6, 0]} color="white">Énergies</Text>
                {/* Ec - Vert */}
                <mesh position={[-2, ec / 5000, 0]}>
                    <boxGeometry args={[1, ec / 2500, 1]} />
                    <meshStandardMaterial color="#00FF00" />
                </mesh>
                <Text position={[-2, -1, 0]} color="#00FF00">Ec</Text>

                {/* Ep - Bleu */}
                <mesh position={[0, ep / 5000, 0]}>
                    <boxGeometry args={[1, ep / 2500, 1]} />
                    <meshStandardMaterial color="#0088FF" />
                </mesh>
                <Text position={[0, -1, 0]} color="#0088FF">Ep</Text>

                {/* Em - Jaune */}
                <mesh position={[2, em / 5000, 0]}>
                    <boxGeometry args={[1, em / 2500, 1]} />
                    <meshStandardMaterial color="#FFFF00" />
                </mesh>
                <Text position={[2, -1, 0]} color="#FFFF00">Em</Text>
            </group>

            <Html position={[10, 5, 0]}>
                <DraggableHtmlPanel title="🎢 Énergie Mécanique">
                    <div className="p-4 w-64 text-white">
                        <div className="mb-4">
                            <label className="block text-xs mb-1">Masse: {mass} kg</label>
                            <input type="range" min="10" max="100" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setIsPlaying(!isPlaying)} className={`flex-1 py-1 rounded ${isPlaying ? 'bg-red-500' : 'bg-green-500'}`}>
                                {isPlaying ? 'Pause' : 'Partir'}
                            </button>
                            <button onClick={reset} className="px-3 py-1 bg-gray-600 rounded">R</button>
                        </div>
                        <div className="text-xs space-y-1 bg-black/30 p-2 rounded">
                            <div className="flex justify-between text-green-400"><span>Ec:</span> <span>{ec.toFixed(0)} J</span></div>
                            <div className="flex justify-between text-blue-400"><span>Ep:</span> <span>{ep.toFixed(0)} J</span></div>
                            <div className="flex justify-between text-yellow-400 font-bold"><span>Em:</span> <span>{em.toFixed(0)} J</span></div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P5-P6: ÉLECTROSTATIQUE (OFFICE FIELD)
// ==========================================
export function ElectrostatiqueSim() {
    // Charges placées par l'utilisateur
    const [charges, setCharges] = useState([]);
    const [testCharge, setTestCharge] = useState({ x: -5, y: 0, vx: 0, vy: 0 });
    const [isPlaying, setIsPlaying] = useState(false);
    const [showField, setShowField] = useState(true);

    // Ajout charge
    const addCharge = (q) => {
        setCharges([...charges, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4, q, id: Math.random() }]);
    };

    // Physique
    useFrame((state, delta) => {
        if (isPlaying && testCharge) {
            let fx = 0;
            let fy = 0;
            const k = 10; // Constante arbitraire pour visuel

            charges.forEach(c => {
                const dx = testCharge.x - c.x;
                const dy = testCharge.y - c.y;
                const d2 = dx * dx + dy * dy;
                const d = Math.sqrt(d2);
                if (d > 0.5) { // Collision évitée
                    const f = (k * 1 * c.q) / d2; // q_test = +1
                    const angle = Math.atan2(dy, dx);
                    // Si c.q > 0 (rouge), repousse test(+). Donc force s'éloigne.
                    // Si c.q < 0 (bleu), attire test(+).
                    // Formule standard: F = k q1 q2 / r^2. Si q1=1, q2=+1, F>0 (repulsion).

                    // Projection
                    fx += f * Math.cos(angle);
                    fy += f * Math.sin(angle);
                }
            });

            // Newton F=ma (m=1)
            const ax = fx;
            const ay = fy;

            setTestCharge(prev => ({
                ...prev,
                vx: prev.vx + ax * delta,
                vy: prev.vy + ay * delta,
                x: prev.x + prev.vx * delta,
                y: prev.y + prev.vy * delta
            }));
        }
    });

    const reset = () => {
        setTestCharge({ x: -5, y: 0, vx: 1, vy: 0 }); // Petite vitesse initiale
        setIsPlaying(false);
    };

    return (
        <group>
            <Grid size={20} />
            <OrbitControls makeDefault position={[0, 0, 15]} />

            {/* Charges fixes */}
            {charges.map((c, i) => (
                <group key={c.id} position={[c.x, c.y, 0]}>
                    <Sphere args={[0.3]}>
                        <meshStandardMaterial color={c.q > 0 ? "#FF4444" : "#4444FF"} emissive={c.q > 0 ? "#FF4444" : "#4444FF"} emissiveIntensity={0.5} />
                    </Sphere>
                    <Text position={[0, 0.5, 0]} fontSize={0.3} color="white">{c.q > 0 ? "+" : "-"}</Text>
                    {/* Interaction Drag à faire plus tard si besoin */}
                </group>
            ))}

            {/* Charge Test */}
            <group position={[testCharge.x, testCharge.y, 0]}>
                <Sphere args={[0.15]}>
                    <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
                </Sphere>
                <pointLight color="#FFFF00" distance={2} intensity={2} />
                <Line points={[[0, 0, 0], [-testCharge.vx * 0.5, -testCharge.vy * 0.5, 0]]} color="white" transparent opacity={0.5} />
            </group>

            <Html position={[8, 5, 0]}>
                <DraggableHtmlPanel title="⚡ Champ Électrique">
                    <div className="p-4 w-64 text-white">
                        <p className="text-xs mb-2 text-gray-300">Placez des charges pour dévier l'électron (jaune).</p>
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => addCharge(5)} className="flex-1 py-2 bg-red-600 rounded text-xs font-bold">+ Charge</button>
                            <button onClick={() => addCharge(-5)} className="flex-1 py-2 bg-blue-600 rounded text-xs font-bold">- Charge</button>
                        </div>
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setIsPlaying(!isPlaying)} className="flex-1 bg-green-600 rounded py-1">
                                {isPlaying ? 'Stop' : 'Lancer'}
                            </button>
                            <button onClick={reset} className="bg-gray-600 px-3 rounded">Reset</button>
                            <button onClick={() => setCharges([])} className="bg-gray-700 px-3 rounded text-xs">Clear</button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P11: OPTIQUE (LENTILLES)
// ==========================================
export function OptiqueLentilleSim() {
    const [focal, setFocal] = useState(3); // f' en unités
    const [objPos, setObjPos] = useState(-6); // OA
    const [objHeight, setObjHeight] = useState(1.5); // AB

    // Calculs conjugaison
    // 1/OA' - 1/OA = 1/f' => 1/OA' = 1/f' + 1/OA
    const oa = objPos;
    const f = focal;
    // Eviter div par 0
    const invOAP = (1 / f) + (1 / oa);
    const oaO = Math.abs(invOAP) < 0.001 ? 1000 : 1 / invOAP; // OA'
    const gamma = oaO / oa;
    const imgHeight = objHeight * gamma;

    return (
        <group>
            <Grid />
            <axesHelper args={[10]} />

            {/* Axe Optique */}
            <Line points={[[-15, 0, 0], [15, 0, 0]]} color="white" dashed opacity={0.5} />

            {/* Lentille */}
            <group>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[2, 2, 0.1, 32]} />
                    <meshStandardMaterial color="#88CCFF" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, 2.2, 0]} fontSize={0.3} color="#88CCFF">Lentille (f'={f})</Text>
                {/* Foyers */}
                <mesh position={[f, 0, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
                <Text position={[f, -0.3, 0]} fontSize={0.3} color="red">F'</Text>

                <mesh position={[-f, 0, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
                <Text position={[-f, -0.3, 0]} fontSize={0.3} color="red">F</Text>
            </group>

            {/* Objet AB */}
            <group position={[objPos, objHeight / 2, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, objHeight, 0.1]} />
                    <meshStandardMaterial color="#00FF00" />
                </mesh>
                <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, objHeight / 2, 0), 1, 0x00FF00]} />
                <Text position={[0, objHeight / 2 + 0.5, 0]} fontSize={0.4} color="#00FF00">AB</Text>
            </group>

            {/* Image A'B' */}
            <group position={[oaO, imgHeight / 2, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, Math.abs(imgHeight), 0.1]} />
                    <meshStandardMaterial color="#FFaa00" transparent opacity={0.7} />
                </mesh>
                {/* Sens de l'image */}
                <arrowHelper
                    args={[
                        new THREE.Vector3(0, Math.sign(imgHeight), 0),
                        new THREE.Vector3(0, -Math.sign(imgHeight) * Math.abs(imgHeight) / 2 + imgHeight / 2, 0), // Base arrow start
                        1,
                        0xFFaa00
                    ]}
                />
                <Text position={[0, imgHeight / 2 + (imgHeight > 0 ? 0.5 : -0.5), 0]} fontSize={0.4} color="#FFaa00">A'B'</Text>
            </group>

            {/* Rayons Caractéristiques */}
            {/* 1. Rayon parallèle à l'axe -> sort par F' */}
            <Line points={[
                [objPos, objHeight, 0],
                [0, objHeight, 0],
                [oaO, imgHeight, 0],
                [oaO + (oaO) * 0.5, imgHeight + (imgHeight) * 0.5, 0] // Extension
            ]} color="yellow" lineWidth={2} />

            {/* 2. Rayon par le centre O -> non dévié */}
            <Line points={[
                [objPos, objHeight, 0],
                [oaO, imgHeight, 0],
                [oaO * 1.2, imgHeight * 1.2, 0]
            ]} color="cyan" lineWidth={2} />

            <Html position={[8, -5, 0]}>
                <DraggableHtmlPanel title="👁️ Optique Géométrique">
                    <div className="p-4 w-64 text-white">
                        <div className="mb-4">
                            <label className="block text-xs">Position Objet (OA): {objPos.toFixed(1)}</label>
                            <input type="range" min="-12" max="-1" step="0.1" value={objPos} onChange={e => setObjPos(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs">Focale (f'): {focal}</label>
                            <input type="range" min="1" max="8" step="0.5" value={focal} onChange={e => setFocal(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="bg-black/30 p-2 rounded text-xs">
                            <p>Grandissement: {gamma.toFixed(2)}</p>
                            <p>Nature: {oaO > 0 ? "Réelle" : "Virtuelle"}</p>
                            <p>Sens: {gamma < 0 ? "Renversée" : "Droite"}</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

        </group>
    );
}

// ==========================================
// P10: ONDES (RIPPLE TANK)
// ==========================================
export function OndesSim() {
    // Simulation visuelle d'ondes concentriques
    const materialRef = useRef();
    const [freq, setFreq] = useState(2);
    const [amplitude, setAmplitude] = useState(1);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            materialRef.current.uniforms.uFreq.value = freq;
        }
    });

    // Shader simple pour ondulation
    const WaveShader = {
        uniforms: {
            uTime: { value: 0 },
            uFreq: { value: 2.0 },
            uColor: { value: new THREE.Color('#00AACC') }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform float uFreq;
            uniform vec3 uColor;
            varying vec2 vUv;
            
            void main() {
                vec2 center = vec2(0.5, 0.5);
                float dist = distance(vUv, center);
                // Sin wave expanding
                float wave = sin(dist * 20.0 - uTime * uFreq * 5.0);
                // Decay
                float alpha = (wave * 0.5 + 0.5) * (1.0 - dist);
                gl_FragColor = vec4(uColor + alpha*0.5, 0.8 * (1.0 - dist));
            }
        `
    };

    return (
        <group>
            <OrbitControls />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <shaderMaterial
                    ref={materialRef}
                    args={[WaveShader]}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>
            <Text position={[0, 1, -6]} color="#00AACC" fontSize={0.5}>Cuve à Ondes</Text>

            <Html position={[5, 4, 0]}>
                <DraggableHtmlPanel title="🌊 Propagation d'Ondes">
                    <div className="p-4 w-56 text-white">
                        <label className="block text-xs mb-2">Fréquence: {freq} Hz</label>
                        <input type="range" min="0.5" max="10" step="0.1" value={freq} onChange={e => setFreq(Number(e.target.value))} className="w-full" />
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P7-P9: ÉLECTRONIQUE (CIRCUITS RC / AOP)
// ==========================================
export function ElectroniqueSim() {
    // Mode: 'charge' (RC Charge), 'discharge' (RC Décharge), 'aliasing' (Oscillo v1)
    const [mode, setMode] = useState('charge');
    const [resistance, setResistance] = useState(1000); // Ohms
    const [capacitance, setCapacitance] = useState(0.001); // Farads (1000µF)
    const [voltage] = useState(5); // Volts

    // Simulation temporelle simplifiée
    const graphData = useMemo(() => {
        const data = [];
        const tau = resistance * capacitance; // Constante de temps
        const totalTime = 5 * tau; // 5 tau pour régime permanent
        const steps = 100;

        for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * totalTime;
            let u = 0;
            if (mode === 'charge') {
                u = voltage * (1 - Math.exp(-t / tau));
            } else if (mode === 'discharge') {
                u = voltage * Math.exp(-t / tau);
            }
            // Mapping for 3D graph: x in [-5, 5], y inside oscilloscreen
            data.push(new THREE.Vector3((i / steps) * 10 - 5, (u / voltage) * 4 - 2, 0));
        }
        return data;
    }, [resistance, capacitance, mode, voltage]);

    return (
        <group>
            <Grid />
            <OrbitControls makeDefault />

            {/* Breadboard Visual (Abstrait) */}
            <group position={[0, -2, 0]}>
                <Box args={[8, 0.5, 4]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#DDD" />
                </Box>
                {/* Composants */}
                <Box args={[1, 0.5, 0.5]} position={[-2, 0.5, 0]}>
                    <meshStandardMaterial color="tan" />
                </Box>
                <Text position={[-2, 1, 0]} fontSize={0.3} color="black">R = {resistance}Ω</Text>

                <Cylinder args={[0.3, 0.3, 0.8]} position={[2, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#222" />
                </Cylinder>
                <Text position={[2, 1, 0]} fontSize={0.3} color="black">C = {(capacitance * 1000).toFixed(0)}mF</Text>
            </group>

            {/* Oscilloscope Screen */}
            <group position={[0, 2, -2]}>
                <Box args={[12, 6, 0.5]}>
                    <meshStandardMaterial color="#111" />
                </Box>
                <Text position={[-5, 4, 0.3]} fontSize={0.3} color="#00FF00">Oscilloscope</Text>

                {/* Courbe */}
                <group position={[0, 0, 0.3]}>
                    <Line points={graphData} color="#00FF00" lineWidth={3} />
                </group>

                {/* Axes */}
                <Line points={[[-5, -2.5, 0.3], [5, -2.5, 0.3]]} color="#333" /> {/* t */}
                <Line points={[[-5, -2.5, 0.3], [-5, 2.5, 0.3]]} color="#333" /> {/* u */}

                <Text position={[5.2, -2.5, 0.3]} fontSize={0.3} color="#00FF00">t</Text>
                <Text position={[-5, 2.8, 0.3]} fontSize={0.3} color="#00FF00">u(t)</Text>
            </group>

            <Html position={[8, 3, 0]}>
                <DraggableHtmlPanel title="⚡ Labo Électronique">
                    <div className="p-4 w-64 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('charge')} className={`flex-1 py-1 rounded text-xs ${mode === 'charge' ? 'bg-green-600' : 'bg-gray-700'}`}>Charge RC</button>
                            <button onClick={() => setMode('discharge')} className={`flex-1 py-1 rounded text-xs ${mode === 'discharge' ? 'bg-red-600' : 'bg-gray-700'}`}>Décharge RC</button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs">Résistance (Ω): {resistance}</label>
                            <input type="range" min="100" max="5000" step="100" value={resistance} onChange={e => setResistance(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs">Capacité (mF): {(capacitance * 1000).toFixed(1)}</label>
                            <input type="range" min="0.5" max="5" step="0.1" value={capacitance * 1000} onChange={e => setCapacitance(Number(e.target.value) / 1000)} className="w-full" />
                        </div>
                        <div className="text-xs bg-black/30 p-2 rounded">
                            <p>Constante de temps τ = R×C</p>
                            <p className="font-bold text-yellow-400">τ = {(resistance * capacitance).toFixed(2)} s</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}


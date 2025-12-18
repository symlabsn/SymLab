'use client';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Html } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================
// P1. CINÉMATIQUE DU POINT
// =========================================
export function CinematiquePoint() {
    const [motionType, setMotionType] = useState('mru'); // mru, mruv, mcu
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    const particleRef = useRef();
    const trailRef = useRef([]);

    // Paramètres
    const v0 = 2;
    const a = 0.5;
    const R = 2;

    useFrame((state, delta) => {
        if (running && particleRef.current) {
            setTime(t => (t + delta) % 10);

            let x, y, vx, vy, ax, ay;

            if (motionType === 'mru') {
                x = (v0 * time) % 8 - 4;
                y = 0;
                vx = v0; vy = 0;
                ax = 0; ay = 0;
            } else if (motionType === 'mruv') {
                x = 0.5 * a * time * time % 8 - 4;
                y = 0;
                vx = a * time; vy = 0;
                ax = a; ay = 0;
            } else { // mcu
                const omega = 1;
                x = R * Math.cos(omega * time);
                y = R * Math.sin(omega * time);
                vx = -R * omega * Math.sin(omega * time);
                vy = R * omega * Math.cos(omega * time);
                ax = -R * omega * omega * Math.cos(omega * time);
                ay = -R * omega * omega * Math.sin(omega * time);
            }

            particleRef.current.position.set(x, y, 0);
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#3B82F6">CINÉMATIQUE DU POINT</Text>

            {/* Axes */}
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-4, 0, 0), 8, 0xffffff]} />
            <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -3, 0), 6, 0xffffff]} />
            <Text position={[4.3, 0, 0]} fontSize={0.2} color="white">x</Text>
            <Text position={[0, 3.3, 0]} fontSize={0.2} color="white">y</Text>

            {/* Particule */}
            <mesh ref={particleRef}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
            </mesh>

            {/* Cercle pour MCU */}
            {motionType === 'mcu' && (
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[R - 0.02, R + 0.02, 64]} />
                    <meshBasicMaterial color="#4ADE80" side={THREE.DoubleSide} />
                </mesh>
            )}

            {/* Légende */}
            <Text position={[-3, -2.5, 0]} fontSize={0.2} color="#4ADE80" anchorX="left">
                {motionType === 'mru' ? '→ MRU: v = constante, a = 0' : motionType === 'mruv' ? '→ MRUV: v = at + v₀, a = constante' : '→ MCU: aₙ = v²/R (centripète)'}
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="📍 Cinématique">
                    <div className="text-white min-w-[220px]">
                        <div className="flex gap-2 mb-3">
                            {['mru', 'mruv', 'mcu'].map(t => (
                                <button key={t} onClick={() => setMotionType(t)}
                                    className={`px-2 py-1 rounded text-xs font-bold transition ${motionType === t ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}>
                                    {t.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setRunning(!running)}
                            className={`w-full py-2 rounded font-bold ${running ? 'bg-red-500' : 'bg-green-500'}`}>
                            {running ? '⏸ Pause' : '▶ Lecture'}
                        </button>
                        <div className="mt-2 text-xs text-gray-300">
                            <p>t = {time.toFixed(2)} s</p>
                            {motionType === 'mru' && <p>x(t) = v·t = {(v0 * time).toFixed(2)} m</p>}
                            {motionType === 'mruv' && <p>x(t) = ½at² = {(0.5 * a * time * time).toFixed(2)} m</p>}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// P2. BASES DE LA DYNAMIQUE
// =========================================
export function DynamiqueNewton() {
    const [force, setForce] = useState(10);
    const [mass, setMass] = useState(2);
    const [friction, setFriction] = useState(0);
    const boxRef = useRef();
    const [position, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);

    const acceleration = (force - friction) / mass;

    useFrame((state, delta) => {
        if (boxRef.current) {
            const newVel = velocity + acceleration * delta;
            const newPos = position + newVel * delta;

            if (newPos > 3) {
                setPosition(-3);
                setVelocity(0);
            } else {
                setPosition(newPos);
                setVelocity(Math.max(0, newVel));
            }

            boxRef.current.position.x = position;
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#F59E0B">LOIS DE NEWTON</Text>

            {/* Sol */}
            <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 4]} />
                <meshStandardMaterial color="#374151" />
            </mesh>

            {/* Objet */}
            <group ref={boxRef}>
                <mesh position={[0, -0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, 0.3, 0.6]} fontSize={0.3} color="white">{mass} kg</Text>

                {/* Vecteur Force */}
                {force > 0 && (
                    <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.6, -0.5, 0), force / 10, 0x22C55E, 0.2, 0.15]} />
                )}

                {/* Vecteur Poids */}
                <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -0.5, 0), 0.8, 0xEF4444, 0.15, 0.1]} />

                {/* Réaction Normale */}
                <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0), 0.8, 0x8B5CF6, 0.15, 0.1]} />
            </group>

            {/* Légende */}
            <group position={[3, 1.5, 0]}>
                <Text position={[0, 0.4, 0]} fontSize={0.2} color="#22C55E" anchorX="left">→ F (force appliquée)</Text>
                <Text position={[0, 0, 0]} fontSize={0.2} color="#EF4444" anchorX="left">↓ P = mg (poids)</Text>
                <Text position={[0, -0.4, 0]} fontSize={0.2} color="#8B5CF6" anchorX="left">↑ N (réaction normale)</Text>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="⚖️ Dynamique - Newton">
                    <div className="text-white min-w-[200px]">
                        <label className="block text-sm mb-1">Force F = {force} N</label>
                        <input type="range" min="0" max="30" value={force}
                            onChange={e => setForce(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                        <label className="block text-sm mb-1 mt-2">Masse m = {mass} kg</label>
                        <input type="range" min="1" max="10" value={mass}
                            onChange={e => setMass(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-green-500" />

                        <label className="block text-sm mb-1 mt-2">Frottement f = {friction} N</label>
                        <input type="range" min="0" max="15" value={friction}
                            onChange={e => setFriction(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-red-500" />

                        <div className="mt-3 p-2 bg-gray-800 rounded text-center">
                            <p className="text-lg font-bold text-yellow-400">a = F/m = {acceleration.toFixed(2)} m/s²</p>
                            <p className="text-xs text-gray-400">ΣF = ma (PFD)</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// P3. APPLICATIONS - PROJECTILE
// =========================================
export function ProjectileMotion() {
    const [angle, setAngle] = useState(45);
    const [v0, setV0] = useState(10);
    const [launched, setLaunched] = useState(false);
    const [time, setTime] = useState(0);
    const ballRef = useRef();
    const trailPoints = useRef([]);

    const g = 9.81;
    const angleRad = (angle * Math.PI) / 180;
    const vx = v0 * Math.cos(angleRad);
    const vy = v0 * Math.sin(angleRad);
    const tMax = (2 * vy) / g;
    const range = vx * tMax;
    const maxHeight = (vy * vy) / (2 * g);

    useFrame((state, delta) => {
        if (launched && ballRef.current) {
            const newTime = time + delta * 2;
            const x = vx * newTime - 4;
            const y = vy * newTime - 0.5 * g * newTime * newTime;

            if (y < 0) {
                setLaunched(false);
                setTime(0);
                trailPoints.current = [];
            } else {
                setTime(newTime);
                ballRef.current.position.set(x, y, 0);
                trailPoints.current.push(new THREE.Vector3(x, y, 0));
            }
        }
    });

    const launch = () => {
        setLaunched(true);
        setTime(0);
        trailPoints.current = [];
        if (ballRef.current) ballRef.current.position.set(-4, 0, 0);
    };

    return (
        <group>
            <Text position={[0, 4, 0]} fontSize={0.4} color="#F97316">MOUVEMENT PROJECTILE</Text>

            {/* Sol */}
            <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[12, 4]} />
                <meshStandardMaterial color="#15803D" />
            </mesh>

            {/* Canon */}
            <group position={[-4, 0, 0]} rotation={[0, 0, angleRad]}>
                <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.2, 1]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
            </group>

            {/* Balle */}
            <mesh ref={ballRef} position={[-4, 0, 0]}>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Trajectoire théorique (parabole) */}
            {!launched && (
                <Line
                    points={Array.from({ length: 50 }, (_, i) => {
                        const t = (i / 49) * tMax;
                        return [-4 + vx * t, vy * t - 0.5 * g * t * t, 0];
                    })}
                    color="#FBBF24"
                    lineWidth={2}
                    dashed
                />
            )}

            {/* Équations */}
            <Text position={[3, 2.5, 0]} fontSize={0.2} color="white" anchorX="left">
                x(t) = v₀·cos(α)·t
            </Text>
            <Text position={[3, 2, 0]} fontSize={0.2} color="white" anchorX="left">
                y(t) = v₀·sin(α)·t - ½gt²
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🎯 Mouvement Projectile">
                    <div className="text-white min-w-[200px]">
                        <label className="block text-sm">Angle: {angle}°</label>
                        <input type="range" min="15" max="75" value={angle}
                            onChange={e => setAngle(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                        <label className="block text-sm mt-2">Vitesse: {v0} m/s</label>
                        <input type="range" min="5" max="20" value={v0}
                            onChange={e => setV0(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-green-500" />

                        <button onClick={launch} disabled={launched}
                            className={`w-full mt-3 py-2 rounded font-bold ${launched ? 'bg-gray-600' : 'bg-orange-500 hover:bg-orange-400'}`}>
                            🚀 LANCER
                        </button>

                        <div className="mt-2 text-xs bg-gray-800 p-2 rounded">
                            <p>Portée: {range.toFixed(2)} m</p>
                            <p>Hauteur max: {maxHeight.toFixed(2)} m</p>
                            <p>Temps vol: {tMax.toFixed(2)} s</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// P4. GRAVITATION UNIVERSELLE
// =========================================
export function GravitationSatellite() {
    const [orbitRadius, setOrbitRadius] = useState(3);
    const [showKepler, setShowKepler] = useState(false);
    const satelliteRef = useRef();
    const moonRef = useRef();

    const G = 6.67e-11;
    const M = 5.97e24; // Masse Terre
    const period = 2 * Math.PI * Math.sqrt(Math.pow(orbitRadius, 3) / 10); // Simplifié pour animation
    const velocity = Math.sqrt(10 / orbitRadius); // Simplifié

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (satelliteRef.current) {
            const omega = 2 * Math.PI / period;
            satelliteRef.current.position.x = orbitRadius * Math.cos(omega * t);
            satelliteRef.current.position.z = orbitRadius * Math.sin(omega * t);
        }
        if (moonRef.current) {
            moonRef.current.position.x = 5 * Math.cos(t * 0.2);
            moonRef.current.position.z = 5 * Math.sin(t * 0.2);
        }
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🌍 Gravitation">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">Rayon orbital: {orbitRadius.toFixed(1)} u</label>
                    <input type="range" min="1.5" max="4.5" step="0.1" value={orbitRadius}
                        onChange={e => setOrbitRadius(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                    <div className="mt-2 text-xs bg-gray-800 p-2 rounded">
                        <p>v = √(GM/r) ∝ 1/√r</p>
                        <p>T² ∝ r³ (Kepler)</p>
                        <p className="text-yellow-400 mt-1">Période: {period.toFixed(2)} s</p>
                    </div>

                    <button onClick={() => setShowKepler(!showKepler)}
                        className="w-full mt-2 py-1 rounded bg-purple-600 text-sm">
                        {showKepler ? 'Masquer' : 'Afficher'} Kepler
                    </button>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 4, 0]} fontSize={0.4} color="#60A5FA">GRAVITATION UNIVERSELLE</Text>

                {/* Terre */}
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>

                {/* Orbite */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} />
                    <meshBasicMaterial color="#4ADE80" side={THREE.DoubleSide} transparent opacity={0.5} />
                </mesh>

                {/* Satellite */}
                <mesh ref={satelliteRef}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>

                {/* Lune (optionnel) */}
                <mesh ref={moonRef} position={[5, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>

                {/* Vecteur gravité */}
                {satelliteRef.current && (
                    <arrowHelper
                        args={[
                            new THREE.Vector3(-satelliteRef.current?.position.x || -orbitRadius, 0, -satelliteRef.current?.position.z || 0).normalize(),
                            satelliteRef.current?.position || new THREE.Vector3(orbitRadius, 0, 0),
                            0.8, 0xEF4444, 0.15, 0.1
                        ]}
                    />
                )}

                {/* Formule */}
                <Text position={[0, -3, 0]} fontSize={0.25} color="#FBBF24">
                    F = G·Mm/r² | v = √(GM/r) | T²/r³ = cste
                </Text>
            </group>
    );
}

// =========================================
// P5. CHAMPS MAGNÉTIQUES
// =========================================
export function ChampMagnetiqueSolenoid() {
    const [current, setCurrent] = useState(5);
    const [spires, setSpires] = useState(100);

    const mu0 = 4 * Math.PI * 1e-7;
    const L = 0.2;
    const n = spires / L;
    const B = mu0 * n * current * 1e4;

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🧲 Champ Magnétique">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">Courant I = {current} A</label>
                    <input type="range" min="0" max="10" value={current}
                        onChange={e => setCurrent(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-yellow-500" />

                    <label className="block text-sm mt-2">Spires N = {spires}</label>
                    <input type="range" min="50" max="200" value={spires}
                        onChange={e => setSpires(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                    <div className="mt-3 p-2 bg-gray-800 rounded text-center">
                        <p className="text-lg font-bold text-cyan-400">B = μ₀nI</p>
                        <p className="text-yellow-400">B ≈ {B.toFixed(2)} mT</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#06B6D4">CHAMP MAGNÉTIQUE - SOLÉNOÏDE</Text>

                {Array.from({ length: 10 }, (_, i) => (
                    <mesh key={i} position={[-2 + i * 0.4, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <torusGeometry args={[1, 0.05, 8, 32]} />
                        <meshStandardMaterial color="#F59E0B" />
                    </mesh>
                ))}

                {current > 0 && Array.from({ length: 5 }, (_, i) => (
                    <arrowHelper key={i}
                        args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-2.5, (i - 2) * 0.3, 0), 4.5, 0x3B82F6, 0.2, 0.15]} />
                ))}

                <Text position={[2.5, 1.5, 0]} fontSize={0.4} color="#EF4444">N</Text>
                <Text position={[-2.5, 1.5, 0]} fontSize={0.4} color="#3B82F6">S</Text>
            </group>
    );
}

// =========================================
// P6. FORCE DE LORENTZ
// =========================================
export function ForceLorentz() {
    const [B, setB] = useState(1);
    const [v, setV] = useState(5);
    const particleRef = useRef();
    const [angle, setAngle] = useState(0);

    const R = 2 * v / B;

    useFrame((state, delta) => {
        if (particleRef.current) {
            setAngle(a => (a + delta * v / 2) % (2 * Math.PI));
            particleRef.current.position.x = R * Math.cos(angle);
            particleRef.current.position.y = R * Math.sin(angle);
        }
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="⚡ Force de Lorentz">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">Champ B = {B} T</label>
                    <input type="range" min="0.5" max="2" step="0.1" value={B}
                        onChange={e => setB(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                    <label className="block text-sm mt-2">Vitesse v (u.a.)</label>
                    <input type="range" min="1" max="10" value={v}
                        onChange={e => setV(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-green-500" />

                    <div className="mt-3 p-2 bg-gray-800 rounded">
                        <p className="text-cyan-400 font-bold">F = qv × B</p>
                        <p className="text-yellow-400">R = mv/(qB)</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#8B5CF6">FORCE DE LORENTZ</Text>

                <mesh rotation={[0, 0, 0]}>
                    <ringGeometry args={[R - 0.03, R + 0.03, 64]} />
                    <meshBasicMaterial color="#4ADE80" side={THREE.DoubleSide} />
                </mesh>

                <mesh ref={particleRef} position={[R, 0, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
                </mesh>

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="white">
                    F ⊥ v (ne travaille jamais) | Ec = constante
                </Text>
            </group>
    );
}

// =========================================
// P7. LOI DE LAPLACE
// =========================================
export function LoiLaplace() {
    const [current, setCurrent] = useState(5);
    const [B, setB] = useState(0.5);
    const L = 0.1;
    const F = B * current * L;
    const wireRef = useRef();
    const [position, setPosition] = useState(0);

    useFrame((state) => {
        if (wireRef.current && F > 0) {
            setPosition(Math.sin(state.clock.elapsedTime * 2) * F * 0.5);
            wireRef.current.position.x = position;
        }
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🔌 Loi de Laplace">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">Courant I = {current} A</label>
                    <input type="range" min="0" max="10" value={current}
                        onChange={e => setCurrent(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-yellow-500" />

                    <label className="block text-sm mt-2">Champ B = {B} T</label>
                    <input type="range" min="0.1" max="1" step="0.1" value={B}
                        onChange={e => setB(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                    <div className="mt-3 p-2 bg-gray-800 rounded text-center">
                        <p className="text-lg font-bold text-orange-400">F = BIL</p>
                        <p className="text-yellow-400">F = {(F * 1000).toFixed(1)} mN</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#F97316">LOI DE LAPLACE</Text>

                <mesh position={[-2.5, 0, 0]}><boxGeometry args={[0.5, 2, 1]} /><meshStandardMaterial color="#EF4444" /></mesh>
                <mesh position={[2.5, 0, 0]}><boxGeometry args={[0.5, 2, 1]} /><meshStandardMaterial color="#3B82F6" /></mesh>

                <group ref={wireRef}>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.08, 0.08, 3]} />
                        <meshStandardMaterial color="#F59E0B" />
                    </mesh>
                </group>

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="#4ADE80">F = I·L × B</Text>
            </group>
    );
}

// =========================================
// P8. INDUCTION - DIPÔLE RL
// =========================================
export function InductionRL() {
    const [time, setTime] = useState(0);
    const [charging, setCharging] = useState(true);
    const [L, setL] = useState(0.1);
    const [R, setR] = useState(10);

    const E = 10;
    const tau = L / R;
    const i = charging ? (E / R) * (1 - Math.exp(-time / tau)) : (E / R) * Math.exp(-time / tau);

    useFrame((state, delta) => {
        setTime(t => t + delta);
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🔋 Dipôle RL">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">L = {(L * 1000).toFixed(0)} mH</label>
                    <input type="range" min="0.01" max="0.5" step="0.01" value={L}
                        onChange={e => { setL(Number(e.target.value)); setTime(0); }}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-purple-500" />

                    <label className="block text-sm mt-2">R = {R} Ω</label>
                    <input type="range" min="5" max="50" value={R}
                        onChange={e => { setR(Number(e.target.value)); setTime(0); }}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-orange-500" />

                    <button onClick={() => { setCharging(!charging); setTime(0); }}
                        className="w-full mt-3 py-2 rounded bg-blue-600 font-bold">
                        {charging ? '⚡ Rupture' : '🔌 Établissement'}
                    </button>

                    <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                        <p>τ = L/R = {(tau * 1000).toFixed(1)} ms</p>
                        <p className="text-yellow-400">i(t) = {(i * 1000).toFixed(1)} mA</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#A855F7">INDUCTION - DIPÔLE RL</Text>

                <mesh position={[-3, 0, 0]}><circleGeometry args={[0.4, 32]} /><meshBasicMaterial color="#22C55E" /></mesh>
                <mesh position={[0, 1.5, 0]}><boxGeometry args={[1.5, 0.3, 0.2]} /><meshStandardMaterial color="#F97316" /></mesh>

                <Text position={[0, -3, 0]} fontSize={0.2} color="#FBBF24">
                    e = -L(di/dt) | i(t) = (E/R)(1 - e^(-t/τ))
                </Text>
            </group>
    );
}

// =========================================
// P9. DIPÔLE RC
// =========================================
export function DipoleRC() {
    const [time, setTime] = useState(0);
    const [charging, setCharging] = useState(true);
    const [R, setR] = useState(1000);
    const [C, setC] = useState(100);

    const E = 5;
    const tau = R * C * 1e-6;
    const uC = charging ? E * (1 - Math.exp(-time / tau)) : E * Math.exp(-time / tau);

    useFrame((state, delta) => {
        setTime(t => t + delta);
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🔋 Dipôle RC">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">R = {R} Ω</label>
                    <input type="range" min="100" max="5000" step="100" value={R}
                        onChange={e => { setR(Number(e.target.value)); setTime(0); }}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-orange-500" />

                    <label className="block text-sm mt-2">C = {C} μF</label>
                    <input type="range" min="10" max="500" step="10" value={C}
                        onChange={e => { setC(Number(e.target.value)); setTime(0); }}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-cyan-500" />

                    <button onClick={() => { setCharging(!charging); setTime(0); }}
                        className="w-full mt-3 py-2 rounded bg-green-600 font-bold">
                        {charging ? '🔋 Décharger' : '⚡ Charger'}
                    </button>

                    <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                        <p>τ = RC = {(tau * 1000).toFixed(1)} ms</p>
                        <p className="text-cyan-400">uC = {uC.toFixed(2)} V ({((uC / E) * 100).toFixed(0)}%)</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#06B6D4">DIPÔLE RC</Text>

                <group position={[0, 0, 0]}>
                    <mesh position={[-0.15, 0, 0]}><boxGeometry args={[0.1, 1.5, 0.5]} /><meshStandardMaterial color="#06B6D4" /></mesh>
                    <mesh position={[0.15, 0, 0]}><boxGeometry args={[0.1, 1.5, 0.5]} /><meshStandardMaterial color="#06B6D4" /></mesh>
                </group>

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                    uC(t) = E(1 - e^(-t/τ)) | τ = RC
                </Text>
            </group>
    );
}

// =========================================
// P10. OSCILLATIONS LC/RLC
// =========================================
export function OscillationsLCRLC() {
    const [mode, setMode] = useState('lc');
    const [time, setTime] = useState(0);
    const [L, setL] = useState(0.1);
    const [C, setC] = useState(100);
    const [R, setR] = useState(10);

    const omega0 = 1 / Math.sqrt(L * C * 1e-6);
    const T0 = 2 * Math.PI / omega0;
    const amortissement = R / (2 * L);

    const q0 = 1;
    const q = mode === 'lc'
        ? q0 * Math.cos(omega0 * time)
        : q0 * Math.exp(-amortissement * time) * Math.cos(omega0 * time);

    useFrame((state, delta) => {
        setTime(t => t + delta);
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="📡 Oscillations LC/RLC">
                <div className="text-white min-w-[200px]">
                    <div className="flex gap-2 mb-3">
                        <button onClick={() => { setMode('lc'); setTime(0); }}
                            className={`flex-1 py-1 rounded font-bold ${mode === 'lc' ? 'bg-green-500' : 'bg-gray-700'}`}>LC</button>
                        <button onClick={() => { setMode('rlc'); setTime(0); }}
                            className={`flex-1 py-1 rounded font-bold ${mode === 'rlc' ? 'bg-orange-500' : 'bg-gray-700'}`}>RLC</button>
                    </div>

                    <div className="text-xs p-2 bg-gray-800 rounded">
                        <p>ω₀ = 1/√(LC) = {omega0.toFixed(1)} rad/s</p>
                        <p>T₀ = {(T0 * 1000).toFixed(1)} ms</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color={mode === 'lc' ? '#22C55E' : '#F97316'}>
                    OSCILLATIONS {mode.toUpperCase()}
                </Text>

                <mesh position={[0, q * 2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} />
                </mesh>

                <Text position={[0, -3, 0]} fontSize={0.2} color="#FBBF24">
                    Énergie totale = ½Cu² + ½Li² = constante (LC)
                </Text>
            </group>
    );
}

// =========================================
// P11. OSCILLATIONS MÉCANIQUES
// =========================================
export function OscillationsMecaniques() {
    const [type, setType] = useState('pendule');
    const [time, setTime] = useState(0);
    const [length, setLength] = useState(1);
    const [k, setK] = useState(10);
    const [mass] = useState(1);

    const g = 9.81;
    const T = type === 'pendule' ? 2 * Math.PI * Math.sqrt(length / g) : 2 * Math.PI * Math.sqrt(mass / k);
    const omega = 2 * Math.PI / T;
    const theta = 0.3 * Math.cos(omega * time);

    const penduleRef = useRef();

    useFrame((state, delta) => {
        setTime(t => t + delta);
        if (type === 'pendule' && penduleRef.current) {
            penduleRef.current.rotation.z = theta;
        }
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="⏱️ Oscillations Mécaniques">
                <div className="text-white min-w-[200px]">
                    <div className="flex gap-2 mb-3">
                        <button onClick={() => setType('pendule')}
                            className={`flex-1 py-1 rounded font-bold ${type === 'pendule' ? 'bg-blue-500' : 'bg-gray-700'}`}>Pendule</button>
                        <button onClick={() => setType('ressort')}
                            className={`flex-1 py-1 rounded font-bold ${type === 'ressort' ? 'bg-green-500' : 'bg-gray-700'}`}>Ressort</button>
                    </div>

                    {type === 'pendule' ? (
                        <>
                            <label className="block text-sm">l = {length.toFixed(1)} m</label>
                            <input type="range" min="0.5" max="2" step="0.1" value={length}
                                onChange={e => setLength(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />
                        </>
                    ) : (
                        <>
                            <label className="block text-sm">k = {k} N/m</label>
                            <input type="range" min="5" max="50" value={k}
                                onChange={e => setK(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg accent-green-500" />
                        </>
                    )}

                    <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                        <p className="text-yellow-400">T = {T.toFixed(2)} s</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#60A5FA">
                    OSCILLATIONS {type === 'pendule' ? 'PENDULE' : 'RESSORT'}
                </Text>

                {type === 'pendule' && (
                    <group ref={penduleRef} position={[0, 2, 0]}>
                        <Line points={[[0, 0, 0], [0, -length * 2, 0]]} color="white" lineWidth={2} />
                        <mesh position={[0, -length * 2, 0]}>
                            <sphereGeometry args={[0.3]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                    </group>
                )}

                <Text position={[0, -3, 0]} fontSize={0.2} color="#FBBF24">
                    {type === 'pendule' ? 'T = 2π√(l/g)' : 'T = 2π√(m/k)'}
                </Text>
            </group>
    );
}

// =========================================
// P12. INTERFÉRENCES LUMINEUSES
// =========================================
export function InterferencesYoung() {
    const [lambda, setLambda] = useState(600);
    const [a, setA] = useState(0.5);
    const D = 2;
    const i = (lambda * 1e-6 * D) / (a * 1e-3);

    const getColor = (wl) => {
        if (wl < 450) return '#8B5CF6';
        if (wl < 550) return '#22C55E';
        if (wl < 600) return '#FBBF24';
        return '#EF4444';
    };

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🌈 Interférences">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">λ = {lambda} nm</label>
                    <input type="range" min="400" max="700" value={lambda}
                        onChange={e => setLambda(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg" />

                    <label className="block text-sm mt-2">a = {a} mm</label>
                    <input type="range" min="0.2" max="1" step="0.1" value={a}
                        onChange={e => setA(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg" />

                    <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                        <p className="text-cyan-400">i = λD/a = {(i * 1000).toFixed(2)} mm</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color={getColor(lambda)}>FENTES DE YOUNG</Text>

                <mesh position={[-4, 0, 0]}><sphereGeometry args={[0.2]} /><meshStandardMaterial color={getColor(lambda)} emissive={getColor(lambda)} /></mesh>
                <mesh position={[-2, 0, 0]}><boxGeometry args={[0.1, 3, 0.5]} /><meshStandardMaterial color="#1F2937" /></mesh>
                <mesh position={[3, 0, 0]}><boxGeometry args={[0.1, 4, 0.5]} /><meshStandardMaterial color="#374151" /></mesh>

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="white">
                    Constructif: δ = kλ | Destructif: δ = (k+½)λ
                </Text>
            </group>
    );
}

// =========================================
// P13. EFFET PHOTOÉLECTRIQUE
// =========================================
export function EffetPhotoelectrique() {
    const [frequency, setFrequency] = useState(8);
    const h = 6.63e-34;
    const W0 = 4e-19;
    const nu0 = W0 / h;
    const nu = frequency * 1e14;
    const emission = nu > nu0;
    const Ec = emission ? h * nu - W0 : 0;

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="💡 Effet Photoélectrique">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">ν = {frequency} × 10¹⁴ Hz</label>
                    <input type="range" min="4" max="12" value={frequency}
                        onChange={e => setFrequency(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-purple-500" />

                    <div className={`mt-3 p-2 rounded text-center ${emission ? 'bg-green-900' : 'bg-red-900'}`}>
                        <p className="font-bold">{emission ? '✅ ÉMISSION' : '❌ PAS D\'ÉMISSION'}</p>
                        <p className="text-xs">ν₀ = {(nu0 / 1e14).toFixed(1)} × 10¹⁴ Hz</p>
                        {emission && <p className="text-yellow-400">Ec = {(Ec * 1e19).toFixed(2)} × 10⁻¹⁹ J</p>}
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#A855F7">EFFET PHOTOÉLECTRIQUE</Text>

                <mesh position={[0, 0, 0]}><boxGeometry args={[0.3, 2, 1]} /><meshStandardMaterial color="#6B7280" metalness={1} /></mesh>

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                    E = hν = W₀ + Ec,max
                </Text>
            </group>
    );
}

// =========================================
// P14. NIVEAUX D'ÉNERGIE DE L'ATOME
// =========================================
export function NiveauxEnergie() {
    const [transition, setTransition] = useState([3, 2]);
    const levels = [
        { n: 1, E: -13.6, color: '#EF4444' },
        { n: 2, E: -3.4, color: '#F97316' },
        { n: 3, E: -1.51, color: '#FBBF24' },
        { n: 4, E: -0.85, color: '#22C55E' },
    ];

    const deltaE = Math.abs(levels.find(l => l.n === transition[0]).E - levels.find(l => l.n === transition[1]).E);
    const lambda = (1240 / deltaE).toFixed(0);

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="🔬 Niveaux d'Énergie">
                <div className="text-white min-w-[200px]">
                    <label className="block text-sm">Transition:</label>
                    <select value={`${transition[0]}-${transition[1]}`}
                        onChange={e => setTransition(e.target.value.split('-').map(Number))}
                        className="w-full p-2 bg-gray-700 rounded mt-1">
                        <option value="3-2">n=3 → n=2 (Hα)</option>
                        <option value="4-2">n=4 → n=2 (Hβ)</option>
                        <option value="2-1">n=2 → n=1 (Lyman)</option>
                    </select>

                    <div className="mt-3 p-2 bg-gray-800 rounded text-xs">
                        <p>ΔE = {deltaE.toFixed(2)} eV</p>
                        <p className="text-cyan-400">λ ≈ {lambda} nm</p>
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="#06B6D4">NIVEAUX D&apos;ÉNERGIE - HYDROGÈNE</Text>

                {levels.map(level => (
                    <group key={level.n} position={[0, level.E / 5 + 1, 0]}>
                        <Line points={[[-2, 0, 0], [2, 0, 0]]} color={level.color} lineWidth={3} />
                        <Text position={[-2.5, 0, 0]} fontSize={0.2} color={level.color}>n={level.n}</Text>
                        <Text position={[2.5, 0, 0]} fontSize={0.2} color={level.color}>{level.E} eV</Text>
                    </group>
                ))}

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                    hν = E_haut - E_bas
                </Text>
            </group>
    );
}

// =========================================
// P15. RÉACTIONS NUCLÉAIRES
// =========================================
export function ReactionsNucleaires() {
    const [reactionType, setReactionType] = useState('fission');
    const [exploded, setExploded] = useState(false);
    const fragmentRefs = useRef([]);

    useFrame((state, delta) => {
        if (exploded) {
            fragmentRefs.current.forEach((ref, i) => {
                if (ref) {
                    const dir = i % 2 === 0 ? 1 : -1;
                    ref.position.x += dir * delta * 2;
                }
            });
        }
    });

    return (<group><Html transform={false}><DraggableHtmlPanel usePortal={false} title="☢️ Réactions Nucléaires">
                <div className="text-white min-w-[200px]">
                    <div className="flex gap-2 mb-3">
                        <button onClick={() => { setReactionType('fission'); setExploded(false); }}
                            className={`flex-1 py-1 rounded font-bold ${reactionType === 'fission' ? 'bg-red-500' : 'bg-gray-700'}`}>Fission</button>
                        <button onClick={() => { setReactionType('fusion'); setExploded(false); }}
                            className={`flex-1 py-1 rounded font-bold ${reactionType === 'fusion' ? 'bg-yellow-500' : 'bg-gray-700'}`}>Fusion</button>
                    </div>

                    <button onClick={() => setExploded(true)}
                        className="w-full py-2 rounded bg-orange-600 font-bold mb-2">
                        ⚛️ DÉCLENCHER
                    </button>
                    <button onClick={() => setExploded(false)} className="w-full py-1 rounded bg-gray-600 text-sm">🔄 Reset</button>

                    <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                        {reactionType === 'fission' ? (
                            <p>²³⁵U + n → fragments + 2-3n + ~200 MeV</p>
                        ) : (
                            <p>²H + ³H → ⁴He + n + ~17 MeV</p>
                        )}
                    </div>
                </div>
            </DraggableHtmlPanel></Html>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color={reactionType === 'fission' ? '#EF4444' : '#FBBF24'}>
                    {reactionType === 'fission' ? 'FISSION NUCLÉAIRE' : 'FUSION NUCLÉAIRE'}
                </Text>

                {!exploded ? (
                    <mesh><sphereGeometry args={[1, 32, 32]} /><meshStandardMaterial color="#22C55E" /></mesh>
                ) : (
                    <>
                        <mesh ref={el => fragmentRefs.current[0] = el} position={[-0.5, 0, 0]}>
                            <sphereGeometry args={[0.5]} /><meshStandardMaterial color="#3B82F6" />
                        </mesh>
                        <mesh ref={el => fragmentRefs.current[1] = el} position={[0.5, 0, 0]}>
                            <sphereGeometry args={[0.4]} /><meshStandardMaterial color="#8B5CF6" />
                        </mesh>
                        <pointLight position={[0, 0, 0]} intensity={3} color="#FBBF24" />
                    </>
                )}

                <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                    E = Δm × c²
                </Text>
            </group>
    );
}

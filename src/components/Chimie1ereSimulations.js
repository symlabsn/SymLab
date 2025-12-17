import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Text, Sphere, Box, Cylinder, Line, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { DraggableHtmlPanel } from './DraggableHtmlPanel';
import confetti from 'canvas-confetti';

// ==========================================
// ATOM COLORS & RADII
// ==========================================
const ATOM = {
    C: { color: '#333', r: 0.4 },
    H: { color: '#FFF', r: 0.25 },
    O: { color: '#F00', r: 0.38 },
    N: { color: '#00F', r: 0.38 },
    Cl: { color: '#0F0', r: 0.45 },
};

function triggerSuccess() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

// ==========================================
// C1: GÉNÉRALITÉS CHIMIE ORGANIQUE (Tétravalence du C)
// ==========================================
export function ChimieOrgaGeneralSim() {
    const [showLabels, setShowLabels] = useState(true);
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) groupRef.current.rotation.y += 0.005;
    });

    // Méthane CH4 - Tétraèdre parfait
    const hPos = [
        [0.6, 0.6, 0.6], [-0.6, -0.6, 0.6], [-0.6, 0.6, -0.6], [0.6, -0.6, -0.6]
    ];

    return (
        <group>
            <OrbitControls />
            <group ref={groupRef} scale={2}>
                {/* Carbone central */}
                <Sphere args={[ATOM.C.r]}><meshStandardMaterial color={ATOM.C.color} /></Sphere>
                {showLabels && <Text position={[0, 0.6, 0]} fontSize={0.3} color="cyan">C</Text>}

                {/* 4 Hydrogènes */}
                {hPos.map((p, i) => (
                    <group key={i}>
                        <Sphere args={[ATOM.H.r]} position={p}><meshStandardMaterial color={ATOM.H.color} /></Sphere>
                        <Line points={[[0, 0, 0], p]} color="#888" lineWidth={2} />
                        {showLabels && <Text position={[p[0] * 1.3, p[1] * 1.3, p[2] * 1.3]} fontSize={0.2} color="gray">H</Text>}
                    </group>
                ))}
            </group>

            <Text position={[0, -3, 0]} fontSize={0.4} color="#00F5D4">Méthane CH₄ - Tétravalence du Carbone</Text>

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="🧪 Tétravalence du C">
                    <div className="p-4 w-64 text-white">
                        <p className="text-sm mb-4">Le carbone forme toujours <span className="text-[#00F5D4] font-bold">4 liaisons</span> covalentes.</p>
                        <label className="flex items-center gap-2 text-xs">
                            <input type="checkbox" checked={showLabels} onChange={e => setShowLabels(e.target.checked)} />
                            Afficher les labels
                        </label>
                        <div className="mt-4 text-xs bg-black/30 p-2 rounded">
                            <p>Angles de liaison: 109.5°</p>
                            <p>Géométrie: Tétraédrique</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C2: ALCANES (Nomenclature + Combustion)
// ==========================================
export function AlcanesSim() {
    const [n, setN] = useState(3); // Nombre de carbones
    const names = ['', 'Méthane', 'Éthane', 'Propane', 'Butane', 'Pentane', 'Hexane', 'Heptane', 'Octane'];

    const formula = `C${n}H${2 * n + 2}`;

    return (
        <group>
            <OrbitControls />

            {/* Chaîne carbonée */}
            <group position={[-(n - 1) * 0.6, 0, 0]}>
                {Array.from({ length: n }).map((_, i) => (
                    <group key={i} position={[i * 1.2, 0, 0]}>
                        <Sphere args={[0.35]}><meshStandardMaterial color="#333" /></Sphere>
                        {i < n - 1 && <Line points={[[0.35, 0, 0], [0.85, 0, 0]]} color="#888" lineWidth={3} />}
                        {/* H en haut et en bas */}
                        <Sphere args={[0.2]} position={[0, 0.6, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                        <Sphere args={[0.2]} position={[0, -0.6, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                        <Line points={[[0, 0.35, 0], [0, 0.55, 0]]} color="#888" />
                        <Line points={[[0, -0.35, 0], [0, -0.55, 0]]} color="#888" />
                    </group>
                ))}
            </group>

            <Text position={[0, -2, 0]} fontSize={0.5} color="#00F5D4">{names[n]} ({formula})</Text>

            <Html position={[6, 3, 0]}>
                <DraggableHtmlPanel title="⛽ Les Alcanes">
                    <div className="p-4 w-64 text-white">
                        <label className="text-xs font-bold">Nombre de carbones: {n}</label>
                        <input type="range" min="1" max="8" value={n} onChange={e => setN(Number(e.target.value))} className="w-full mb-4" />

                        <div className="bg-black/30 p-2 rounded text-xs space-y-1">
                            <p>Formule générale: <span className="font-mono text-green-400">CₙH₂ₙ₊₂</span></p>
                            <p>Nom: <span className="text-[#00F5D4]">{names[n]}</span></p>
                            <p>Formule: <span className="font-mono">{formula}</span></p>
                        </div>

                        <div className="mt-4 text-xs text-gray-400">
                            <p className="font-bold text-orange-400">Combustion:</p>
                            <p>CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C3: ALCÈNES (Double liaison)
// ==========================================
export function AlcenesSim() {
    const groupRef = useRef();
    useFrame(() => { if (groupRef.current) groupRef.current.rotation.y += 0.005; });

    return (
        <group>
            <OrbitControls />
            <group ref={groupRef} scale={1.5}>
                {/* Éthène C2H4 */}
                <Sphere args={[0.35]} position={[-0.6, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                <Sphere args={[0.35]} position={[0.6, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>

                {/* Double liaison */}
                <Line points={[[-0.25, 0.1, 0], [0.25, 0.1, 0]]} color="#00FF00" lineWidth={4} />
                <Line points={[[-0.25, -0.1, 0], [0.25, -0.1, 0]]} color="#00FF00" lineWidth={4} />

                {/* Hydrogènes */}
                <Sphere args={[0.2]} position={[-1.1, 0.5, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                <Sphere args={[0.2]} position={[-1.1, -0.5, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                <Sphere args={[0.2]} position={[1.1, 0.5, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                <Sphere args={[0.2]} position={[1.1, -0.5, 0]}><meshStandardMaterial color="#FFF" /></Sphere>

                <Line points={[[-0.6, 0, 0], [-1.1, 0.5, 0]]} color="#888" />
                <Line points={[[-0.6, 0, 0], [-1.1, -0.5, 0]]} color="#888" />
                <Line points={[[0.6, 0, 0], [1.1, 0.5, 0]]} color="#888" />
                <Line points={[[0.6, 0, 0], [1.1, -0.5, 0]]} color="#888" />
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.4} color="#00FF00">Éthène C₂H₄ - Double Liaison C=C</Text>

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="🧬 Alcènes">
                    <div className="p-4 w-64 text-white">
                        <p className="text-sm mb-2">Formule: <span className="font-mono text-green-400">CₙH₂ₙ</span></p>
                        <div className="bg-green-900/30 border border-green-500 p-2 rounded text-xs mb-4">
                            <p className="font-bold">Double liaison C=C</p>
                            <p>Site de réactivité intense</p>
                        </div>
                        <div className="text-xs text-gray-400">
                            <p className="font-bold text-yellow-400">Réactions d'addition:</p>
                            <p>• Hydrogénation: + H₂</p>
                            <p>• Halogénation: + Br₂</p>
                            <p>• Hydratation: + H₂O</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C4: BENZÈNE (Cycle aromatique)
// ==========================================
export function BenzeneSim() {
    const groupRef = useRef();
    useFrame(() => { if (groupRef.current) groupRef.current.rotation.y += 0.003; });

    const angle = (i) => (i * Math.PI * 2) / 6;
    const r = 1.2;

    return (
        <group>
            <OrbitControls />
            <group ref={groupRef}>
                {/* 6 Carbones en hexagone */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <group key={i}>
                        <Sphere args={[0.3]} position={[r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0]}>
                            <meshStandardMaterial color="#333" />
                        </Sphere>
                        {/* Liaison vers le suivant */}
                        <Line points={[
                            [r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0],
                            [r * Math.cos(angle(i + 1)), r * Math.sin(angle(i + 1)), 0]
                        ]} color="#888" lineWidth={2} />
                        {/* H vers l'extérieur */}
                        <Sphere args={[0.15]} position={[1.8 * Math.cos(angle(i)), 1.8 * Math.sin(angle(i)), 0]}>
                            <meshStandardMaterial color="#FFF" />
                        </Sphere>
                        <Line points={[
                            [r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0],
                            [1.7 * Math.cos(angle(i)), 1.7 * Math.sin(angle(i)), 0]
                        ]} color="#888" />
                    </group>
                ))}
                {/* Cercle central (délocalisation) */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.6, 0.05, 16, 32]} />
                    <meshStandardMaterial color="#FF00FF" />
                </mesh>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.4} color="#FF00FF">Benzène C₆H₆ - Aromatique</Text>

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="💎 Benzène">
                    <div className="p-4 w-64 text-white">
                        <p className="text-sm mb-2">Formule: <span className="font-mono text-pink-400">C₆H₆</span></p>
                        <div className="bg-pink-900/30 border border-pink-500 p-2 rounded text-xs mb-4">
                            <p className="font-bold">Électrons π délocalisés</p>
                            <p>Stabilité aromatique exceptionnelle</p>
                        </div>
                        <div className="text-xs text-gray-400">
                            <p className="font-bold text-yellow-400">Réactions de substitution:</p>
                            <p>• Nitration: → Nitrobenzène</p>
                            <p>• Halogénation (catalysée)</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C5: COMPOSÉS OXYGÉNÉS (Alcools, Aldéhydes, Cétones)
// ==========================================
export function ComposesOxygenesSim() {
    const [type, setType] = useState('alcool');
    const groupRef = useRef();
    useFrame(() => { if (groupRef.current) groupRef.current.rotation.y += 0.005; });

    return (
        <group>
            <OrbitControls />
            <group ref={groupRef} scale={1.3}>
                {type === 'alcool' && (
                    <>
                        {/* Éthanol: CH3-CH2-OH */}
                        <Sphere args={[0.3]} position={[-1, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[0, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[1, 0, 0]}><meshStandardMaterial color="#F00" /></Sphere>
                        <Sphere args={[0.2]} position={[1.6, 0.4, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                        <Line points={[[-1, 0, 0], [0, 0, 0]]} color="#888" lineWidth={2} />
                        <Line points={[[0, 0, 0], [1, 0, 0]]} color="#888" lineWidth={2} />
                        <Line points={[[1, 0, 0], [1.6, 0.4, 0]]} color="#888" lineWidth={2} />
                        <Text position={[1, -0.6, 0]} fontSize={0.3} color="#F00">-OH</Text>
                    </>
                )}
                {type === 'aldehyde' && (
                    <>
                        <Sphere args={[0.3]} position={[-0.6, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[0.6, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.25]} position={[0.6, 0.8, 0]}><meshStandardMaterial color="#F00" /></Sphere>
                        <Line points={[[0.6, 0.3, 0], [0.6, 0.55, 0]]} color="#F00" lineWidth={3} />
                        <Line points={[[0.5, 0.35, 0], [0.5, 0.5, 0]]} color="#F00" lineWidth={3} />
                        <Sphere args={[0.15]} position={[1.2, -0.3, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                        <Text position={[0.6, -0.6, 0]} fontSize={0.3} color="#F00">-CHO</Text>
                    </>
                )}
                {type === 'cetone' && (
                    <>
                        <Sphere args={[0.3]} position={[-1, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[0, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[1, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.25]} position={[0, 0.8, 0]}><meshStandardMaterial color="#F00" /></Sphere>
                        <Line points={[[0, 0.3, 0], [0, 0.55, 0]]} color="#F00" lineWidth={3} />
                        <Line points={[[-0.1, 0.35, 0], [-0.1, 0.5, 0]]} color="#F00" lineWidth={3} />
                        <Text position={[0, -0.6, 0]} fontSize={0.3} color="#F00">C=O</Text>
                    </>
                )}
            </group>

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="🧪 Composés Oxygénés">
                    <div className="p-4 w-64 text-white">
                        <div className="flex gap-1 mb-4">
                            <button onClick={() => setType('alcool')} className={`flex-1 py-1 rounded text-xs ${type === 'alcool' ? 'bg-red-500' : 'bg-gray-700'}`}>Alcool</button>
                            <button onClick={() => setType('aldehyde')} className={`flex-1 py-1 rounded text-xs ${type === 'aldehyde' ? 'bg-red-500' : 'bg-gray-700'}`}>Aldéhyde</button>
                            <button onClick={() => setType('cetone')} className={`flex-1 py-1 rounded text-xs ${type === 'cetone' ? 'bg-red-500' : 'bg-gray-700'}`}>Cétone</button>
                        </div>
                        <div className="text-xs bg-black/30 p-2 rounded">
                            {type === 'alcool' && <><p className="font-bold text-red-400">Groupe hydroxyle -OH</p><p>Oxydation → Aldéhyde ou Cétone</p></>}
                            {type === 'aldehyde' && <><p className="font-bold text-red-400">Groupe -CHO</p><p>Test Fehling: Précipité rouge</p></>}
                            {type === 'cetone' && <><p className="font-bold text-red-400">Groupe C=O (interne)</p><p>Test DNPH: Précipité jaune</p></>}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C6-C9: REDOX (Règle du Gamma)
// ==========================================
export function RedoxGammaSim() {
    const [metal, setMetal] = useState('Zn');
    const [solution, setSolution] = useState('CuSO4');

    const E0 = { 'Ag': 0.80, 'Cu': 0.34, 'Fe': -0.44, 'Zn': -0.76 };
    const ionE0 = { 'AgNO3': 0.80, 'CuSO4': 0.34, 'FeSO4': -0.44, 'ZnSO4': -0.76 };

    const metalE = E0[metal];
    const solE = ionE0[solution];
    const reaction = solE > metalE;

    return (
        <group>
            <OrbitControls />

            {/* Bécher */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                <meshStandardMaterial color={solution.includes('Cu') ? '#00AACC' : solution.includes('Fe') ? '#99DD99' : '#EEEEFF'} transparent opacity={0.6} />
            </mesh>

            {/* Lame métallique */}
            <Box args={[0.4, 2.5, 0.1]} position={[0, 0.5, 0]}>
                <meshStandardMaterial color={metal === 'Cu' ? '#B87333' : metal === 'Zn' ? '#AFAFAF' : '#555'} />
            </Box>

            {/* Dépôt si réaction */}
            {reaction && (
                <Box args={[0.42, 1.2, 0.12]} position={[0, -0.3, 0.02]}>
                    <meshStandardMaterial color="#222" />
                </Box>
            )}

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="⚗️ Règle du Gamma">
                    <div className="p-4 w-64 text-white">
                        <div className="mb-3">
                            <label className="text-xs font-bold">Lame métallique:</label>
                            <select value={metal} onChange={e => setMetal(e.target.value)} className="w-full bg-gray-700 rounded p-1 text-sm">
                                <option value="Cu">Cuivre (E°=+0.34V)</option>
                                <option value="Zn">Zinc (E°=-0.76V)</option>
                                <option value="Fe">Fer (E°=-0.44V)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-xs font-bold">Solution:</label>
                            <select value={solution} onChange={e => setSolution(e.target.value)} className="w-full bg-gray-700 rounded p-1 text-sm">
                                <option value="CuSO4">Sulfate de Cuivre (Cu²⁺)</option>
                                <option value="ZnSO4">Sulfate de Zinc (Zn²⁺)</option>
                                <option value="FeSO4">Sulfate de Fer (Fe²⁺)</option>
                            </select>
                        </div>
                        <div className={`p-2 rounded text-xs border ${reaction ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'}`}>
                            <p className="font-bold">{reaction ? '✅ RÉACTION SPONTANÉE' : '❌ PAS DE RÉACTION'}</p>
                            <p className="mt-1">ΔE° = {(solE - metalE).toFixed(2)} V</p>
                            {reaction && <p className="italic mt-1">L'oxydant le plus fort réagit avec le réducteur le plus fort.</p>}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C10: ÉLECTROLYSE (Loi de Faraday)
// ==========================================
export function ElectrolyseSim() {
    const [current, setCurrent] = useState(2);
    const [time, setTime] = useState(600);

    const M = 63.5; const n = 2; const F = 96500;
    const mass = (current * time * M) / (n * F);

    return (
        <group>
            <OrbitControls />

            {/* Cuve */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                <meshStandardMaterial color="#00AACC" transparent opacity={0.6} />
            </mesh>

            {/* Électrodes */}
            <Cylinder args={[0.1, 0.1, 2.5]} position={[-0.6, 0.3, 0]}><meshStandardMaterial color="#333" /></Cylinder>
            <Text position={[-0.6, 1.8, 0]} fontSize={0.2} color="red">Anode (+)</Text>

            <Cylinder args={[0.1, 0.1, 2.5]} position={[0.6, 0.3, 0]}><meshStandardMaterial color="#333" /></Cylinder>
            <Text position={[0.6, 1.8, 0]} fontSize={0.2} color="blue">Cathode (-)</Text>

            {/* Dépôt de cuivre */}
            <Cylinder args={[0.12, 0.12, Math.min(mass * 2, 1.5)]} position={[0.6, -0.5, 0]}>
                <meshStandardMaterial color="#B87333" />
            </Cylinder>

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="⚡ Électrolyse">
                    <div className="p-4 w-64 text-white">
                        <div className="mb-3">
                            <label className="text-xs">Intensité I: {current} A</label>
                            <input type="range" min="0.5" max="5" step="0.1" value={current} onChange={e => setCurrent(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xs">Durée t: {time} s ({(time / 60).toFixed(0)} min)</label>
                            <input type="range" min="60" max="3600" step="60" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="bg-black/40 p-2 rounded text-xs">
                            <p className="font-bold text-gray-400">Loi de Faraday:</p>
                            <p>m = (I × t × M) / (n × F)</p>
                            <p className="text-xl font-bold text-[#00F5D4] mt-2">{(mass * 1000).toFixed(1)} mg</p>
                            <p className="text-gray-400">de cuivre déposé</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C11: VOIE SÈCHE (Aluminothermie)
// ==========================================
export function VoieSecheSimulation() {
    const [isReacting, setIsReacting] = useState(false);
    const flameRef = useRef();

    useFrame((state) => {
        if (flameRef.current && isReacting) {
            flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.3;
        }
    });

    return (
        <group>
            <OrbitControls />

            {/* Creuset */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1, 0.8, 1.5, 32]} />
                <meshStandardMaterial color="#666" />
            </mesh>

            {/* Mélange réactif */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.7, 0.7, 0.4, 32]} />
                <meshStandardMaterial color={isReacting ? "#FF4400" : "#AA6633"} emissive={isReacting ? "#FF2200" : "#000"} emissiveIntensity={isReacting ? 0.5 : 0} />
            </mesh>

            {/* Flamme */}
            {isReacting && (
                <group ref={flameRef} position={[0, 0.5, 0]}>
                    <mesh>
                        <coneGeometry args={[0.3, 1.5, 16]} />
                        <meshStandardMaterial color="#FF6600" emissive="#FF4400" transparent opacity={0.8} />
                    </mesh>
                    <pointLight color="#FF6600" intensity={2} distance={5} />
                </group>
            )}

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#FF6600">
                {isReacting ? "Fe₂O₃ + 2Al → 2Fe + Al₂O₃" : "Aluminothermie"}
            </Text>

            <Html position={[5, 3, 0]}>
                <DraggableHtmlPanel title="🔥 Voie Sèche">
                    <div className="p-4 w-64 text-white">
                        <p className="text-sm mb-4">Réduction par l'aluminium à haute température.</p>
                        <button
                            onClick={() => { setIsReacting(true); setTimeout(() => setIsReacting(false), 5000); }}
                            className="w-full py-2 bg-orange-600 hover:bg-orange-500 rounded font-bold"
                            disabled={isReacting}
                        >
                            {isReacting ? '🔥 Réaction en cours...' : 'Déclencher la réaction'}
                        </button>
                        <div className="mt-4 text-xs bg-black/30 p-2 rounded">
                            <p className="font-bold text-orange-400">Aluminothermie:</p>
                            <p>Fe₂O₃ + 2Al → 2Fe + Al₂O₃</p>
                            <p className="mt-2 text-gray-400">T° ≈ 2500°C</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// Keep old exports for compatibility
export { ChimieOrgaGeneralSim as ChimieOrganiqueSim };
export { RedoxGammaSim as RedoxElectrolyseSim };

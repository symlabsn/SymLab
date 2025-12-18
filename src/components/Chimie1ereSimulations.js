import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Text, Sphere, Box, Cylinder, Line, Plane } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
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

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🧪 Tétravalence du C">
                    <div className="p-4 w-64 text-white">
                        <div className="mb-4">
                            <p className="text-sm mb-1">Exemple: Méthane <span className="font-bold text-[#00F5D4] font-mono">CH<sub>4</sub></span></p>
                            <p className="text-xs text-gray-300">Le carbone est tétravalent (4 liaisons).</p>
                        </div>
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
    const [n, setN] = useState(3);
    const names = ['', 'Méthane', 'Éthane', 'Propane', 'Butane', 'Pentane', 'Hexane', 'Heptane', 'Octane'];

    const structure = useMemo(() => {
        const list = [];
        const bondLen = 0.9;
        const angle = 35 * Math.PI / 180;
        const dx = bondLen * Math.cos(angle);
        const dy = bondLen * Math.sin(angle);
        const hRad = 0.7;

        for (let i = 0; i < n; i++) {
            const cx = i * dx - ((n - 1) * dx) / 2;
            const cy = (i % 2 === 0) ? -dy / 2 : dy / 2;
            const cPos = new THREE.Vector3(cx, cy, 0);
            list.push({ type: 'C', pos: cPos, id: i });

            const up = (i % 2 === 0) ? 1 : -1;

            const h1 = new THREE.Vector3(cx, cy + up * hRad * 0.7, hRad * 0.8);
            const h2 = new THREE.Vector3(cx, cy + up * hRad * 0.7, -hRad * 0.8);
            list.push({ type: 'H', pos: h1, parent: cPos });
            list.push({ type: 'H', pos: h2, parent: cPos });

            if (i === 0) {
                const hTerm = new THREE.Vector3(cx - hRad, cy - up * 0.3, 0);
                list.push({ type: 'H', pos: hTerm, parent: cPos });
            }
            if (i === n - 1) {
                const hTerm = new THREE.Vector3(cx + hRad, cy - up * 0.3, 0);
                list.push({ type: 'H', pos: hTerm, parent: cPos });
            }
        }
        return { atoms: list, carbonCount: n };
    }, [n]);

    return (
        <group>
            <OrbitControls />
            <group scale={1.5}>
                {structure.atoms.map((a, k) => (
                    <group key={k}>
                        <Sphere args={[a.type === 'C' ? ATOM.C.r : ATOM.H.r]} position={a.pos}>
                            <meshStandardMaterial color={a.type === 'C' ? ATOM.C.color : ATOM.H.color} />
                        </Sphere>
                        {a.parent && <Line points={[a.parent, a.pos]} color="#888" lineWidth={2} />}
                    </group>
                ))}

                {Array.from({ length: n - 1 }).map((_, i) => {
                    const carbons = structure.atoms.filter(a => a.type === 'C');
                    return <Line key={'cc' + i} points={[carbons[i].pos, carbons[i + 1].pos]} color="#555" lineWidth={5} />;
                })}
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.5} color="#00F5D4">{names[n]}</Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="⛽ Les Alcanes">
                    <div className="p-4 w-72 text-white">
                        <label className="text-xs font-bold mb-2 block">Nombre de carbones: {n}</label>
                        <input type="range" min="1" max="8" value={n} onChange={e => setN(Number(e.target.value))} className="w-full mb-4 accent-[#00F5D4]" />

                        <div className="bg-black/30 p-3 rounded text-sm space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Nom :</span>
                                <span className="font-bold text-[#00F5D4]">{names[n]}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Formule :</span>
                                <span className="font-mono bg-gray-800 px-2 py-1 rounded">C<sub>{n}</sub>H<sub>{2 * n + 2}</sub></span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Générale : C<sub>n</sub>H<sub>2n+2</sub></div>
                        </div>

                        <div className="mt-4 text-xs text-gray-300">
                            <p className="font-bold text-orange-400 mb-1">Combustion complète :</p>
                            <div className="font-mono bg-orange-900/20 p-2 rounded text-[10px]">
                                C<sub>{n}</sub>H<sub>{2 * n + 2}</sub> + {(3 * n + 1) / 2}O<sub>2</sub> → {n}CO<sub>2</sub> + {n + 1}H<sub>2</sub>O
                            </div>
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

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🧬 Alcènes">
                    <div className="p-4 w-64 text-white">
                        <p className="text-sm mb-2">Formule: <span className="font-mono text-green-400">C<sub>n</sub>H<sub>2n</sub></span></p>
                        <div className="bg-green-900/30 border border-green-500 p-2 rounded text-xs mb-4">
                            <p className="font-bold">Double liaison C=C</p>
                            <p>Site de réactivité intense</p>
                        </div>
                        <div className="text-xs text-gray-400">
                            <p className="font-bold text-yellow-400">Réactions d'addition:</p>
                            <p>• Hydrogénation: + H<sub>2</sub></p>
                            <p>• Halogénation: + Br<sub>2</sub></p>
                            <p>• Hydratation: + H<sub>2</sub>O</p>
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

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="💎 Benzène">
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

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🧪 Composés Oxygénés">
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
// ==========================================
// C6-C9: REDOX (Défi Corrosion)
// ==========================================
export function RedoxGammaSim() {
    const [mode, setMode] = useState('explore'); // 'explore', 'game'
    const [metal, setMetal] = useState('Zn');
    const [solution, setSolution] = useState('CuSO4');
    const [gameChoice, setGameChoice] = useState(null);
    const [gameState, setGameState] = useState('playing'); // playing, win, lose

    const E0 = { 'Ag': 0.80, 'Cu': 0.34, 'Fe': -0.44, 'Zn': -0.76, 'Mg': -2.37 };
    const ionE0 = { 'AgNO3': 0.80, 'CuSO4': 0.34, 'FeSO4': -0.44, 'ZnSO4': -0.76 };

    // Exploration Logic
    const metalE = E0[metal];
    const solE = ionE0[solution];
    const reaction = solE > metalE;

    // Game Logic: Protéger le Fer (Fe)
    // Il faut une anode sacrificielle (E° < E°Fe = -0.44)
    const checkGame = (choice) => {
        setGameChoice(choice);
        const isProtective = E0[choice] < E0['Fe'];
        if (isProtective) {
            setGameState('win');
            triggerSuccess();
        } else {
            setGameState('lose');
        }
    };

    const resetGame = () => {
        setGameState('playing');
        setGameChoice(null);
    };

    return (
        <group>
            <OrbitControls />

            {mode === 'explore' ? (
                <group>
                    {/* Bécher Simulation */}
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                        <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                        <meshStandardMaterial color={solution.includes('Cu') ? '#00AACC' : solution.includes('Fe') ? '#99DD99' : '#EEEEFF'} transparent opacity={0.6} />
                    </mesh>
                    <Box args={[0.4, 2.5, 0.1]} position={[0, 0.5, 0]}>
                        <meshStandardMaterial color={metal === 'Cu' ? '#B87333' : metal === 'Zn' ? '#AFAFAF' : metal === 'Mg' ? '#DDDDDD' : '#555'} />
                    </Box>
                    {reaction && (
                        <group>
                            <Box args={[0.42, 1.2, 0.12]} position={[0, -0.3, 0.02]}><meshStandardMaterial color="#222" /></Box>
                            {/* Particules réaction */}
                            <group position={[0, -0.5, 0.2]}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Sphere key={i} args={[0.05]} position={[(Math.random() - 0.5) * 0.5, Math.random(), 0]}>
                                        <meshBasicMaterial color="#FFFF00" />
                                    </Sphere>
                                ))}
                            </group>
                        </group>
                    )}
                </group>
            ) : (
                <group>
                    {/* Scène Bateau */}
                    <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">MISSION : SAUVER LA COQUE !</Text>
                    {/* Coque en Fer */}
                    <group position={[0, 0, 0]}>
                        <mesh rotation={[0, 0, Math.PI]}>
                            <capsuleGeometry args={[1, 4, 4, 16]} />
                            <meshStandardMaterial color={gameState === 'lose' ? '#8B4513' : '#777777'} roughness={0.6} />
                        </mesh>
                        <Text position={[0, 1.5, 1.1]} fontSize={0.3} color="black">Coque Acier (Fe)</Text>

                        {/* Anode Sacrificielle */}
                        {gameChoice && (
                            <mesh position={[0.8, -1, 0.8]}>
                                <boxGeometry args={[0.5, 0.5, 0.2]} />
                                <meshStandardMaterial color={gameChoice === 'Zn' ? '#AFAFAF' : gameChoice === 'Mg' ? '#EEE' : '#B87333'} />
                            </mesh>
                        )}

                        {/* Eau de mer */}
                        <mesh position={[0, -1, 0]}>
                            <cylinderGeometry args={[3, 3, 2, 32]} />
                            <meshStandardMaterial color="#006994" transparent opacity={0.4} />
                        </mesh>

                        {/* Effets */}
                        {gameState === 'lose' && (
                            <group position={[0, 0, 1]}>
                                <Text position={[0, 0, 0.2]} fontSize={0.4} color="#FF4400">ROUILLE ! 😱</Text>
                            </group>
                        )}
                        {gameState === 'win' && (
                            <group position={[1, -1, 1]}>
                                <Text position={[0, 0.5, 0]} fontSize={0.3} color="#00FF00">Protection OK</Text>
                            </group>
                        )}
                    </group>
                </group>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title={mode === 'explore' ? "⚗️ Règle du Gamma" : "⚓ Défi Corrosion"}>
                    <div className="p-4 w-72 text-white">
                        <div className="flex gap-2 mb-4 border-b border-gray-600 pb-2">
                            <button onClick={() => setMode('explore')} className={`flex-1 py-1 rounded text-xs ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={() => setMode('game')} className={`flex-1 py-1 rounded text-xs ${mode === 'game' ? 'bg-orange-600' : 'bg-gray-700'}`}>Jeu 🎮</button>
                        </div>

                        {mode === 'explore' ? (
                            <>
                                <div className="mb-3">
                                    <label className="text-xs font-bold">Lame métallique:</label>
                                    <select value={metal} onChange={e => setMetal(e.target.value)} className="w-full bg-gray-700 rounded p-1 text-sm text-white">
                                        <option value="Cu">Cuivre (E°=+0.34V)</option>
                                        <option value="Zn">Zinc (E°=-0.76V)</option>
                                        <option value="Fe">Fer (E°=-0.44V)</option>
                                        <option value="Mg">Magnésium (E°=-2.37V)</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="text-xs font-bold">Solution:</label>
                                    <select value={solution} onChange={e => setSolution(e.target.value)} className="w-full bg-gray-700 rounded p-1 text-sm text-white">
                                        <option value="CuSO4">Sulfate de Cuivre (Cu²⁺)</option>
                                        <option value="ZnSO4">Sulfate de Zinc (Zn²⁺)</option>
                                        <option value="FeSO4">Sulfate de Fer (Fe²⁺)</option>
                                    </select>
                                </div>
                                <div className={`p-2 rounded text-xs border ${reaction ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'}`}>
                                    <p className="font-bold">{reaction ? '✅ RÉACTION SPONTANÉE' : '❌ PAS DE RÉACTION'}</p>
                                    <p className="mt-1">ΔE° = {(solE - metalE).toFixed(2)} V</p>
                                    {reaction && <p className="italic mt-1 text-green-300">Dépôt métallique + Oxydation de la lame</p>}
                                </div>
                            </>
                        ) : (
                            <div className="space-y-3">
                                <p className="text-sm">La coque en <span className="font-bold text-gray-400">Fer (E°=-0.44V)</span> est attaquée par l'eau de mer !</p>
                                <p className="text-xs text-orange-300">Choisis une anode sacrificielle pour la protéger (protection cathodique).</p>

                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <button onClick={() => checkGame('Zn')} disabled={gameState !== 'playing'} className="p-2 bg-gray-600 rounded hover:bg-gray-500 text-xs">Zinc (E°=-0.76)</button>
                                    <button onClick={() => checkGame('Cu')} disabled={gameState !== 'playing'} className="p-2 bg-yellow-900 rounded hover:bg-yellow-800 text-xs">Cuivre (E°=+0.34)</button>
                                    <button onClick={() => checkGame('Mg')} disabled={gameState !== 'playing'} className="p-2 bg-gray-300 text-black rounded hover:bg-white text-xs">Magnésium (E°=-2.37)</button>
                                    <button onClick={() => checkGame('Ag')} disabled={gameState !== 'playing'} className="p-2 bg-gray-400 text-black rounded hover:bg-gray-300 text-xs">Argent (E°=+0.80)</button>
                                </div>

                                {gameState !== 'playing' && (
                                    <div className={`mt-2 p-2 rounded text-center animate-bounce ${gameState === 'win' ? 'bg-green-600' : 'bg-red-600'}`}>
                                        {gameState === 'win' ? 'BRAVO ! Le Fer est protégé.' : 'CATASTROPHE ! La corrosion accélère.'}
                                        <button onClick={resetGame} className="block w-full mt-2 text-[10px] underline">Recommencer</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C10: ÉLECTROLYSE (Loi de Faraday)
// ==========================================
// ==========================================
// C10: ÉLECTROLYSE (Atelier d'Orfèvre)
// ==========================================
export function ElectrolyseSim() {
    const [mode, setMode] = useState('explore');
    const [current, setCurrent] = useState(2);
    const [time, setTime] = useState(600);
    const [metalType, setMetalType] = useState('Cu'); // Cu, Au, Ag

    // Game Logic
    const [targetMass, setTargetMass] = useState(0.5); // g
    const [gameStatus, setGameStatus] = useState(null); // win, lose

    const constants = {
        'Cu': { M: 63.5, n: 2, color: '#B87333', name: 'Cuivre' },
        'Au': { M: 197.0, n: 3, color: '#FFD700', name: 'Or' },
        'Ag': { M: 107.9, n: 1, color: '#C0C0C0', name: 'Argent' }
    };

    const F = 96500;
    const { M, n, color, name } = constants[metalType];
    const mass = (current * time * M) / (n * F);

    const radius = Math.min(0.12 + (mass / 10) * 0.1, 0.25); // Epaisseur visible du dépôt

    const checkChallenge = () => {
        // Tolérance 10%
        const error = Math.abs(mass - targetMass) / targetMass;
        if (error < 0.1) {
            setGameStatus('win');
            triggerSuccess();
        } else {
            setGameStatus('lose');
        }
    };

    const resetChallenge = () => {
        setTargetMass(Number((Math.random() * 0.8 + 0.2).toFixed(2))); // 0.2 à 1.0g
        setGameStatus(null);
        setMode('game');
        setMetalType('Au'); // Or pour le challenge
    };

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
                <meshStandardMaterial color={mode === 'game' ? '#FFD70044' : '#00AACC44'} transparent opacity={0.6} />
            </mesh>

            {/* Électrodes */}
            <Cylinder args={[0.08, 0.08, 2.5]} position={[-0.6, 0.3, 0]}><meshStandardMaterial color="#333" /></Cylinder>
            <Text position={[-0.6, 1.8, 0]} fontSize={0.2} color="red">Anode (+)</Text>
            {/* Bulles Anode simulées */}
            {mode === 'explore' && Array.from({ length: 8 }).map((_, i) => (
                <Sphere key={i} args={[0.03]} position={[-0.6 + (Math.random() - 0.5) * 0.1, -0.5 + Math.random() * 1.5, (Math.random() - 0.5) * 0.1]}>
                    <meshStandardMaterial color="#FFF" opacity={0.5} transparent />
                </Sphere>
            ))}

            {/* Cathode (Objet à plaquer) */}
            <group position={[0.6, 0, 0]}>
                {/* Support */}
                <Cylinder args={[0.02, 0.02, 2.5]} position={[0, 0.3, 0]}><meshStandardMaterial color="#333" /></Cylinder>
                <Text position={[0, 1.8, 0]} fontSize={0.2} color="blue">Cathode (-)</Text>

                {/* Objet Plaquage (Bague ou Cylindre) */}
                {mode === 'game' ? (
                    <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.3, 0.08 + (mass / 5) * 0.05, 16, 32]} />
                        <meshStandardMaterial color={mass > 0 ? color : '#555'} metalness={0.8} roughness={0.2} />
                    </mesh>
                ) : (
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[radius, radius, 1.5, 32]} />
                        <meshStandardMaterial color={mass > 0 ? color : '#333'} metalness={0.6} roughness={0.3} />
                    </mesh>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title={mode === 'explore' ? "⚡ Électrolyse" : "👑 L'Orfèvre Royal"}>
                    <div className="p-4 w-72 text-white">
                        <div className="flex gap-2 mb-4 border-b border-gray-600 pb-2">
                            <button onClick={() => setMode('explore')} className={`flex-1 py-1 rounded text-xs ${mode === 'explore' ? 'bg-purple-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={resetChallenge} className={`flex-1 py-1 rounded text-xs ${mode === 'game' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Défi 👑</button>
                        </div>

                        <div className="mb-3">
                            <label className="text-xs">Intensité I: <span className="font-bold text-yellow-400">{current.toFixed(1)} A</span></label>
                            <input type="range" min="0.1" max="5" step="0.1" value={current} onChange={e => setCurrent(Number(e.target.value))} className="w-full accent-yellow-500" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xs">Durée t: <span className="font-bold text-blue-400">{(time / 60).toFixed(0)} min</span> ({time}s)</label>
                            <input type="range" min="60" max="3600" step="60" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full accent-blue-500" />
                        </div>

                        {mode === 'explore' && (
                            <div className="mb-2">
                                <label className="text-xs">Métal déposé :</label>
                                <div className="flex gap-1 mt-1">
                                    {Object.entries(constants).map(([k, v]) => (
                                        <button key={k} onClick={() => setMetalType(k)} className={`text-[10px] px-2 py-1 rounded ${metalType === k ? 'bg-gray-200 text-black' : 'bg-gray-700'}`}>
                                            {v.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-black/40 p-2 rounded text-xs relative overflow-hidden">
                            {mode === 'explore' ? (
                                <>
                                    <p className="font-bold text-gray-400">Masse déposée (Faraday):</p>
                                    <p className="text-xl font-bold text-[#00F5D4] mt-1">{mass.toFixed(3)} g</p>
                                    <p className="text-[10px] text-gray-500">m = (I × t × M) / (n × F)</p>
                                </>
                            ) : (
                                <>
                                    <p className="font-bold text-yellow-400 mb-2">OBJECTIF COMMANDE :</p>
                                    <p className="text-sm">Plaquer exactement <span className="text-xl font-bold text-white">{targetMass} g</span> d'Or.</p>
                                    <p className="mt-2 text-gray-400">Actuel : {(mass).toFixed(3)} g</p>

                                    {gameStatus && (
                                        <div className={`absolute inset-0 flex items-center justify-center bg-black/80 ${gameStatus === 'win' ? 'text-green-400' : 'text-red-400'} font-bold text-lg`}>
                                            {gameStatus === 'win' ? 'PARFAIT ! 💰' : 'RATÉ ! 😤'}
                                        </div>
                                    )}

                                    <button onClick={checkChallenge} disabled={gameStatus !== null} className="w-full mt-3 py-1 bg-yellow-600 hover:bg-yellow-500 rounded font-bold text-black">
                                        LIVRER LA COMMANDE
                                    </button>
                                </>
                            )}
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

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🔥 Voie Sèche">
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

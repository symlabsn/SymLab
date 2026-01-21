'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { ScoreDisplay, ProgressBar, GameButton } from './SVT6SimulationsAdvanced';

// ============================================================================
// 7. CELL DISCOVERY - Microscope Virtuel Immersif
// ============================================================================
export function CellDiscovery() {
    const [zoom, setZoom] = useState(1);
    const [cellType, setCellType] = useState('animal');
    const [selectedOrganelle, setSelectedOrganelle] = useState(null);
    const [discovered, setDiscovered] = useState([]);

    const organelles = useMemo(() => ({
        animal: [
            { id: 'membrane', name: 'Membrane', pos: [0, 0, 2], color: '#E1BEE7', desc: 'Frontière protectrice qui contrôle les entrées/sorties', emoji: '🛡️' },
            { id: 'noyau', name: 'Noyau', pos: [0, 0, 0], color: '#7B1FA2', desc: 'Contient l\'ADN, le chef d\'orchestre de la cellule', emoji: '🧠' },
            { id: 'cytoplasme', name: 'Cytoplasme', pos: [0.8, 0.5, 0.5], color: '#F8BBD9', desc: 'Gelée où baignent tous les organites', emoji: '🫧' },
            { id: 'mitochondrie', name: 'Mitochondrie', pos: [-1, 0.5, 0.5], color: '#FF5722', desc: 'Centrale énergétique - produit l\'ATP', emoji: '⚡' },
            { id: 'ribosome', name: 'Ribosome', pos: [0.5, -0.5, 0.8], color: '#795548', desc: 'Usine à protéines', emoji: '🏭' },
        ],
        vegetal: [
            { id: 'paroi', name: 'Paroi cellulaire', pos: [0, 0, 2.2], color: '#8BC34A', desc: 'Mur rigide de cellulose pour la protection', emoji: '🧱' },
            { id: 'membrane', name: 'Membrane', pos: [0, 0, 2], color: '#C8E6C9', desc: 'Sous la paroi, contrôle les échanges', emoji: '🛡️' },
            { id: 'noyau', name: 'Noyau', pos: [0, 0, 0], color: '#2E7D32', desc: 'Centre de contrôle avec l\'ADN', emoji: '🧠' },
            { id: 'chloroplaste', name: 'Chloroplaste', pos: [1, 0.3, 0.5], color: '#4CAF50', desc: 'Usine de photosynthèse - donne la couleur verte', emoji: '🌿' },
            { id: 'vacuole', name: 'Vacuole', pos: [-0.5, -0.3, 0], color: '#81D4FA', desc: 'Grande poche de stockage d\'eau et nutriments', emoji: '💧' },
        ]
    }), []);

    const handleOrganelleClick = (org) => {
        setSelectedOrganelle(org);
        if (!discovered.includes(org.id)) {
            setDiscovered([...discovered, org.id]);
        }
    };

    const currentOrganelles = organelles[cellType];
    const progress = discovered.length;
    const total = organelles.animal.length + organelles.vegetal.length;

    return (
        <group scale={[zoom, zoom, zoom]}>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Microscope Virtuel">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={progress} maxScore={total} label="découverts" />
                            <div className="flex gap-1">
                                <button onClick={() => setCellType('animal')}
                                    className={`px-2 py-1 rounded text-xs ${cellType === 'animal' ? 'bg-pink-500' : 'bg-white/10'}`}>
                                    🦠 Animale
                                </button>
                                <button onClick={() => setCellType('vegetal')}
                                    className={`px-2 py-1 rounded text-xs ${cellType === 'vegetal' ? 'bg-green-500' : 'bg-white/10'}`}>
                                    🌱 Végétale
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>🔍 Zoom</span>
                                <span>{zoom.toFixed(1)}x</span>
                            </div>
                            <input type="range" min="0.5" max="2" step="0.1" value={zoom}
                                onChange={(e) => setZoom(parseFloat(e.target.value))}
                                className="w-full accent-purple-500" />
                        </div>

                        {selectedOrganelle ? (
                            <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl">{selectedOrganelle.emoji}</span>
                                    <span className="font-bold text-white">{selectedOrganelle.name}</span>
                                </div>
                                <p className="text-xs text-gray-300">{selectedOrganelle.desc}</p>
                            </div>
                        ) : (
                            <div className="text-center text-xs text-gray-400 italic p-2">
                                👆 Clique sur un organite pour l'identifier
                            </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                            {currentOrganelles.map(org => (
                                <span key={org.id} className={`text-lg ${discovered.includes(org.id) ? '' : 'opacity-30'}`}>
                                    {org.emoji}
                                </span>
                            ))}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 5]} intensity={1} color={cellType === 'animal' ? '#F48FB1' : '#81C784'} />

            {/* Cell membrane/wall */}
            <mesh>
                {cellType === 'animal' ? (
                    <sphereGeometry args={[2, 32, 32]} />
                ) : (
                    <boxGeometry args={[4, 4, 4]} />
                )}
                <meshStandardMaterial
                    color={cellType === 'animal' ? '#F8BBD9' : '#A5D6A7'}
                    transparent opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Organelles */}
            {currentOrganelles.map((org) => (
                <group key={org.id} position={org.pos} onClick={() => handleOrganelleClick(org)}>
                    <Float speed={2} floatIntensity={0.2}>
                        <mesh>
                            {org.id === 'noyau' && <sphereGeometry args={[0.6]} />}
                            {org.id === 'mitochondrie' && <capsuleGeometry args={[0.15, 0.4]} />}
                            {org.id === 'chloroplaste' && <capsuleGeometry args={[0.2, 0.3]} />}
                            {org.id === 'vacuole' && <sphereGeometry args={[0.8]} />}
                            {org.id === 'ribosome' && <sphereGeometry args={[0.1]} />}
                            {(org.id === 'membrane' || org.id === 'paroi' || org.id === 'cytoplasme') && <sphereGeometry args={[0.15]} />}
                            <meshStandardMaterial
                                color={org.color}
                                emissive={selectedOrganelle?.id === org.id ? org.color : '#000'}
                                emissiveIntensity={selectedOrganelle?.id === org.id ? 0.5 : 0}
                            />
                        </mesh>
                        {selectedOrganelle?.id === org.id && (
                            <Sparkles count={15} scale={1} size={2} speed={0.5} color={org.color} />
                        )}
                    </Float>
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 8. PLANT GROWTH - Cycle de Vie Interactif
// ============================================================================
export function PlantGrowth() {
    const [stage, setStage] = useState(0);
    const [days, setDays] = useState(0);
    const [watered, setWatered] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);

    const stages = [
        { name: 'Graine', emoji: '🌰', desc: 'La vie est en dormance, attendant les bonnes conditions', duration: 3 },
        { name: 'Germination', emoji: '🌱', desc: 'L\'eau réveille la graine, la radicule apparaît', duration: 5 },
        { name: 'Croissance', emoji: '🌿', desc: 'La tige et les feuilles se développent', duration: 10 },
        { name: 'Floraison', emoji: '🌸', desc: 'Les fleurs apparaissent pour la reproduction', duration: 7 },
        { name: 'Fructification', emoji: '🍎', desc: 'Le fruit se forme, contenant les graines', duration: 0 },
    ];

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            if (!watered) return;
            setDays(d => {
                const newDays = d + 1;
                const currentStage = stages[stage];
                if (currentStage.duration > 0 && newDays >= currentStage.duration && stage < stages.length - 1) {
                    setStage(s => s + 1);
                    return 0;
                }
                return newDays;
            });
            if (Math.random() > 0.7) setWatered(false);
        }, 1000);
        return () => clearInterval(interval);
    }, [autoPlay, watered, stage]);

    const waterPlant = () => setWatered(true);
    const reset = () => { setStage(0); setDays(0); setWatered(true); };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌱 Cycle de Vie Végétal">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="text-3xl">{stages[stage].emoji}</div>
                            <div className="text-right">
                                <div className="font-bold text-white">{stages[stage].name}</div>
                                <div className="text-xs text-gray-400">Jour {days}</div>
                            </div>
                        </div>

                        <ProgressBar current={stage} max={stages.length - 1} color="#4CAF50" />

                        <div className="p-2 bg-green-500/20 rounded-lg text-xs text-gray-300">
                            {stages[stage].desc}
                        </div>

                        <div className="flex gap-1">
                            {stages.map((s, i) => (
                                <div key={i} className={`flex-1 h-2 rounded ${i <= stage ? 'bg-green-500' : 'bg-gray-700'}`} />
                            ))}
                        </div>

                        {!watered && (
                            <div className="p-2 bg-red-500/20 rounded-lg text-center text-red-300 animate-pulse">
                                ⚠️ La plante a soif !
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-2">
                            <GameButton onClick={waterPlant} disabled={watered}>💧 Arroser</GameButton>
                            <GameButton onClick={() => setAutoPlay(!autoPlay)} color={autoPlay ? 'red' : 'cyan'}>
                                {autoPlay ? '⏸️' : '▶️'}
                            </GameButton>
                            <GameButton onClick={reset}>🔄</GameButton>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <circleGeometry args={[4, 32]} />
                <meshStandardMaterial color={watered ? '#5D4037' : '#8D6E63'} />
            </mesh>

            {/* Plant stages */}
            <group position={[0, -2, 0]}>
                {/* Seed */}
                {stage >= 0 && (
                    <mesh position={[0, stage === 0 ? 0.1 : -0.2, 0]}>
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#8D6E63" />
                    </mesh>
                )}

                {/* Root */}
                {stage >= 1 && (
                    <mesh position={[0, -0.3, 0]}>
                        <cylinderGeometry args={[0.03, 0.01, 0.5]} />
                        <meshStandardMaterial color="#5D4037" />
                    </mesh>
                )}

                {/* Stem */}
                {stage >= 1 && (
                    <mesh position={[0, stage >= 3 ? 1.5 : stage >= 2 ? 0.8 : 0.2, 0]}>
                        <cylinderGeometry args={[0.05, 0.08, stage >= 3 ? 3 : stage >= 2 ? 1.5 : 0.3]} />
                        <meshStandardMaterial color="#66BB6A" />
                    </mesh>
                )}

                {/* Leaves */}
                {stage >= 2 && Array.from({ length: 4 }).map((_, i) => (
                    <mesh key={i} position={[0, 1 + i * 0.3, 0]} rotation={[0.3, i * Math.PI / 2, 0.2]}>
                        <boxGeometry args={[0.5, 0.05, 0.2]} />
                        <meshStandardMaterial color="#43A047" />
                    </mesh>
                ))}

                {/* Flower */}
                {stage >= 3 && (
                    <group position={[0, 3, 0]}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <mesh key={i} rotation={[0, i * Math.PI / 3, 0.5]} position={[0.3, 0, 0]}>
                                <sphereGeometry args={[0.15]} />
                                <meshStandardMaterial color="#E91E63" />
                            </mesh>
                        ))}
                        <mesh>
                            <sphereGeometry args={[0.15]} />
                            <meshStandardMaterial color="#FFC107" />
                        </mesh>
                    </group>
                )}

                {/* Fruit */}
                {stage >= 4 && (
                    <Float speed={2} floatIntensity={0.2}>
                        <mesh position={[0, 3.2, 0]}>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial color="#F44336" />
                        </mesh>
                    </Float>
                )}
            </group>

            {watered && <Sparkles count={10} scale={5} size={2} speed={0.3} color="#4FC3F7" position={[0, 0, 0]} />}
        </group>
    );
}

// ============================================================================
// 9-12: Export placeholders for remaining simulations
// ============================================================================
export { CellDiscovery as CellDiscoveryAdvanced, PlantGrowth as PlantGrowthAdvanced };

'use client';
import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { ScoreDisplay, ProgressBar, GameButton } from './SVT6SimulationsAdvanced';

// ============================================================================
// 9. MALARIA CYCLE - Jeu de Protection
// ============================================================================
export function MalariaCycle() {
    const [phase, setPhase] = useState('intro');
    const [protection, setProtection] = useState({ moustiquaire: false, repulsif: false, assainissement: false });
    const [infected, setInfected] = useState(false);
    const [mosquitoCount, setMosquitoCount] = useState(5);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(30);

    const protectionLevel = useMemo(() => {
        let level = 0;
        if (protection.moustiquaire) level += 50;
        if (protection.repulsif) level += 30;
        if (protection.assainissement) level += 20;
        return level;
    }, [protection]);

    useEffect(() => {
        if (phase !== 'playing') return;
        const interval = setInterval(() => {
            setTimer(t => {
                if (t <= 0) {
                    setPhase('result');
                    return 0;
                }
                return t - 1;
            });
            // Random infection attempt
            if (Math.random() * 100 > protectionLevel) {
                if (!infected && Math.random() > 0.7) {
                    setInfected(true);
                }
            } else {
                setScore(s => s + 10);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [phase, protectionLevel, infected]);

    const startGame = () => {
        setPhase('playing');
        setTimer(30);
        setScore(0);
        setInfected(false);
    };

    const toggleProtection = (key) => {
        setProtection(p => ({ ...p, [key]: !p[key] }));
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🦟 Mission Anti-Paludisme">
                    <div className="space-y-3">
                        {phase === 'intro' && (
                            <>
                                <div className="text-center p-3 bg-gradient-to-b from-red-500/20 to-transparent rounded-xl">
                                    <div className="text-4xl mb-2">🦟</div>
                                    <div className="font-bold text-red-400">Alerte Paludisme !</div>
                                    <p className="text-xs text-gray-300 mt-1">
                                        Protège-toi des moustiques Anophèles qui transmettent le paludisme.
                                    </p>
                                </div>
                                <div className="text-xs text-gray-400">
                                    🎯 Objectif : Survivre 30 secondes sans être infecté
                                </div>
                                <GameButton onClick={startGame} color="green">🎮 Commencer</GameButton>
                            </>
                        )}

                        {phase === 'playing' && (
                            <>
                                <div className="flex justify-between items-center">
                                    <ScoreDisplay score={score} maxScore={300} />
                                    <div className={`px-3 py-1 rounded-full font-bold ${timer < 10 ? 'bg-red-500 animate-pulse' : 'bg-white/10'}`}>
                                        ⏱️ {timer}s
                                    </div>
                                </div>

                                <div className="p-2 rounded-lg text-center" style={{
                                    background: `linear-gradient(90deg, #4CAF50 ${protectionLevel}%, #333 ${protectionLevel}%)`
                                }}>
                                    <span className="text-xs font-bold text-white">Protection: {protectionLevel}%</span>
                                </div>

                                {infected && (
                                    <div className="p-2 bg-red-500/30 rounded-lg text-center text-red-300 animate-pulse">
                                        ⚠️ Tu as été piqué ! Symptômes : fièvre, frissons...
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <button onClick={() => toggleProtection('moustiquaire')}
                                        className={`w-full p-2 rounded-lg text-left flex items-center gap-2 ${protection.moustiquaire ? 'bg-green-500/30 border border-green-500' : 'bg-white/10'}`}>
                                        <span className="text-xl">🛏️</span>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold">Moustiquaire imprégnée</div>
                                            <div className="text-xs text-gray-400">+50% protection pendant le sommeil</div>
                                        </div>
                                        <span>{protection.moustiquaire ? '✅' : '❌'}</span>
                                    </button>
                                    <button onClick={() => toggleProtection('repulsif')}
                                        className={`w-full p-2 rounded-lg text-left flex items-center gap-2 ${protection.repulsif ? 'bg-blue-500/30 border border-blue-500' : 'bg-white/10'}`}>
                                        <span className="text-xl">🧴</span>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold">Répulsif anti-moustique</div>
                                            <div className="text-xs text-gray-400">+30% protection cutanée</div>
                                        </div>
                                        <span>{protection.repulsif ? '✅' : '❌'}</span>
                                    </button>
                                    <button onClick={() => toggleProtection('assainissement')}
                                        className={`w-full p-2 rounded-lg text-left flex items-center gap-2 ${protection.assainissement ? 'bg-cyan-500/30 border border-cyan-500' : 'bg-white/10'}`}>
                                        <span className="text-xl">🚰</span>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold">Éliminer les eaux stagnantes</div>
                                            <div className="text-xs text-gray-400">+20% - moins de reproduction</div>
                                        </div>
                                        <span>{protection.assainissement ? '✅' : '❌'}</span>
                                    </button>
                                </div>
                            </>
                        )}

                        {phase === 'result' && (
                            <div className="text-center space-y-3">
                                <div className="text-5xl">{infected ? '😷' : '💪'}</div>
                                <div className={`text-xl font-bold ${infected ? 'text-red-400' : 'text-green-400'}`}>
                                    {infected ? 'Infecté...' : 'Protégé !'}
                                </div>
                                <div className="text-white">Score final: {score}</div>
                                <div className="text-xs text-gray-400 p-2 bg-white/10 rounded">
                                    💡 <strong>Rappel :</strong> La moustiquaire imprégnée d'insecticide est le moyen le plus efficace contre le paludisme au Sénégal !
                                </div>
                                <GameButton onClick={startGame} color="cyan">🔄 Rejouer</GameButton>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.3} />
            <pointLight position={[0, 5, 5]} intensity={0.8} />

            {/* Night scene */}
            <color attach="background" args={['#1a1a2e']} />

            {/* Bed */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[3, 0.5, 2]} />
                <meshStandardMaterial color="#5D4037" />
            </mesh>

            {/* Person sleeping */}
            <mesh position={[0, -0.5, 0]}>
                <capsuleGeometry args={[0.3, 1.5]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#FFCCBC" />
            </mesh>

            {/* Mosquito net if active */}
            {protection.moustiquaire && (
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[3.5, 3, 2.5]} />
                    <meshStandardMaterial color="#E8F5E9" transparent opacity={0.3} side={THREE.DoubleSide} wireframe />
                </mesh>
            )}

            {/* Mosquitoes */}
            {phase === 'playing' && Array.from({ length: mosquitoCount }).map((_, i) => (
                <AnimatedMosquito key={i} index={i} blocked={protection.moustiquaire} />
            ))}
        </group>
    );
}

function AnimatedMosquito({ index, blocked }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.elapsedTime + index;
        const targetX = blocked ? 3 + Math.sin(t) : Math.sin(t * 2) * 2;
        const targetY = 1 + Math.sin(t * 3) * 0.5;
        const targetZ = Math.cos(t * 2) * 2;
        ref.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.02);
        ref.current.rotation.y += 0.1;
    });
    return (
        <group ref={ref}>
            <mesh>
                <coneGeometry args={[0.05, 0.2]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, 0.05, 0]} rotation={[0, 0, 0.5]}>
                <planeGeometry args={[0.2, 0.1]} />
                <meshBasicMaterial color="#666" transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

// ============================================================================
// 10. ASCARIS PREVENTION - Hygiène Interactive
// ============================================================================
export function AscarisPrevention() {
    const [handsClean, setHandsClean] = useState(false);
    const [foodWashed, setFoodWashed] = useState(false);
    const [scenario, setScenario] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const scenarios = [
        { text: "Tu reviens des toilettes...", action: "laver", correct: true },
        { text: "Tu vas manger une mangue du marché...", action: "laver_fruit", correct: true },
        { text: "Tu joues dans la terre...", action: "laver", correct: true },
        { text: "Tu prends de l'eau du robinet pour boire...", action: "ok", correct: true },
    ];

    const handleAction = (actionType) => {
        const current = scenarios[scenario];
        let isCorrect = false;

        if (actionType === 'wash_hands') {
            setHandsClean(true);
            isCorrect = current.action === 'laver';
        } else if (actionType === 'wash_food') {
            setFoodWashed(true);
            isCorrect = current.action === 'laver_fruit';
        } else if (actionType === 'skip') {
            isCorrect = current.action === 'ok';
        }

        if (isCorrect) {
            setScore(s => s + 25);
            setFeedback('✅ Bonne hygiène ! Les œufs d\'Ascaris ne passeront pas !');
        } else {
            setFeedback('❌ Attention ! Tu risques d\'avaler des œufs de parasites !');
        }

        setTimeout(() => {
            if (scenario < scenarios.length - 1) {
                setScenario(s => s + 1);
                setHandsClean(false);
                setFoodWashed(false);
                setFeedback('');
            }
        }, 2000);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧼 Prévention Ascaridiase">
                    <div className="space-y-3">
                        <ScoreDisplay score={score} maxScore={100} />
                        <ProgressBar current={scenario + 1} max={scenarios.length} color="#2196F3" />

                        <div className="p-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl text-center">
                            <div className="text-3xl mb-2">🤔</div>
                            <div className="text-sm text-white">{scenarios[scenario]?.text}</div>
                        </div>

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-sm ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-2">
                            <GameButton onClick={() => handleAction('wash_hands')}>
                                🧼 Laver mains
                            </GameButton>
                            <GameButton onClick={() => handleAction('wash_food')}>
                                🍎 Laver fruit
                            </GameButton>
                            <GameButton onClick={() => handleAction('skip')} color="default">
                                ➡️ Direct
                            </GameButton>
                        </div>

                        <div className="text-xs text-center text-cyan-400 p-2 bg-cyan-500/10 rounded">
                            💡 L'Ascaris entre par la bouche via des mains ou aliments souillés !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Hands */}
            <group position={[-1.5, 0, 0]}>
                <mesh>
                    <boxGeometry args={[1, 1.5, 0.3]} />
                    <meshStandardMaterial color={handsClean ? '#FFCCBC' : '#8D6E63'} />
                </mesh>
                <Billboard position={[0, 1.2, 0]}>
                    <Text fontSize={0.3} color="white">{handsClean ? '✨ Propres' : '🦠 Sales'}</Text>
                </Billboard>
            </group>

            {/* Food */}
            <group position={[1.5, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6]} />
                    <meshStandardMaterial color={foodWashed ? '#FFC107' : '#795548'} />
                </mesh>
                <Billboard position={[0, 1.2, 0]}>
                    <Text fontSize={0.3} color="white">{foodWashed ? '✨ Lavé' : '🦠 Sale'}</Text>
                </Billboard>
            </group>

            {/* Parasites if not clean */}
            {(!handsClean || !foodWashed) && (
                <group>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Float key={i} speed={3} floatIntensity={0.5}>
                            <mesh position={[Math.random() * 4 - 2, Math.random() * 2, Math.random() - 0.5]}>
                                <torusGeometry args={[0.1, 0.03, 8, 16]} />
                                <meshStandardMaterial color="#4E342E" />
                            </mesh>
                        </Float>
                    ))}
                </group>
            )}
        </group>
    );
}

// ============================================================================
// 11. CHOLERA FILTER - Station d'Eau Potable
// ============================================================================
export function CholeraFilter() {
    const [waterSource, setWaterSource] = useState('marigot');
    const [treatment, setTreatment] = useState([]);
    const [waterQuality, setWaterQuality] = useState(0);

    const sources = {
        marigot: { name: 'Marigot', quality: 10, emoji: '🏞️' },
        puits: { name: 'Puits', quality: 40, emoji: '🪣' },
        robinet: { name: 'Robinet SDE', quality: 80, emoji: '🚰' },
    };

    const treatments = [
        { id: 'filter', name: 'Filtration', bonus: 20, emoji: '🧽' },
        { id: 'javel', name: 'Eau de Javel', bonus: 30, emoji: '🧪' },
        { id: 'boil', name: 'Ébullition', bonus: 40, emoji: '🔥' },
    ];

    useEffect(() => {
        let quality = sources[waterSource].quality;
        treatment.forEach(t => {
            const treatmentInfo = treatments.find(tr => tr.id === t);
            if (treatmentInfo) quality += treatmentInfo.bonus;
        });
        setWaterQuality(Math.min(100, quality));
    }, [waterSource, treatment]);

    const toggleTreatment = (id) => {
        setTreatment(t => t.includes(id) ? t.filter(x => x !== id) : [...t, id]);
    };

    const isSafe = waterQuality >= 80;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="💧 Station Eau Potable">
                    <div className="space-y-3">
                        <div className="text-center">
                            <div className="text-4xl mb-1">{isSafe ? '✅' : '⚠️'}</div>
                            <div className={`font-bold ${isSafe ? 'text-green-400' : 'text-red-400'}`}>
                                {isSafe ? 'Eau POTABLE' : 'Eau DANGEREUSE'}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Qualité</span>
                                <span className={isSafe ? 'text-green-400' : 'text-red-400'}>{waterQuality}%</span>
                            </div>
                            <ProgressBar current={waterQuality} max={100} color={isSafe ? '#4CAF50' : '#F44336'} />
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-2">Source d'eau :</div>
                            <div className="grid grid-cols-3 gap-1">
                                {Object.entries(sources).map(([key, src]) => (
                                    <button key={key} onClick={() => setWaterSource(key)}
                                        className={`p-2 rounded text-center ${waterSource === key ? 'bg-blue-500' : 'bg-white/10'}`}>
                                        <div className="text-xl">{src.emoji}</div>
                                        <div className="text-xs">{src.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-2">Traitements :</div>
                            <div className="space-y-1">
                                {treatments.map(t => (
                                    <button key={t.id} onClick={() => toggleTreatment(t.id)}
                                        className={`w-full p-2 rounded flex items-center gap-2 ${treatment.includes(t.id) ? 'bg-green-500/30 border border-green-500' : 'bg-white/10'}`}>
                                        <span className="text-xl">{t.emoji}</span>
                                        <span className="flex-1 text-left text-sm">{t.name}</span>
                                        <span className="text-xs text-green-400">+{t.bonus}%</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-xs text-cyan-400 p-2 bg-cyan-500/10 rounded text-center">
                            💡 Le choléra se transmet par l'eau contaminée. Toujours traiter l'eau douteuse !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Water container */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1, 0.8, 2.5, 32, 1, true]} />
                <meshPhysicalMaterial transmission={0.9} thickness={0.1} color="white" />
            </mesh>

            {/* Water inside */}
            <mesh position={[0, -0.7, 0]}>
                <cylinderGeometry args={[0.9, 0.7, 2]} />
                <meshStandardMaterial
                    color={isSafe ? '#4FC3F7' : '#558B2F'}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Bacteria if not safe */}
            {!isSafe && Array.from({ length: 10 }).map((_, i) => (
                <Float key={i} speed={2 + i * 0.3} floatIntensity={0.5}>
                    <mesh position={[Math.random() * 1.4 - 0.7, -0.7 + Math.random(), Math.random() * 1.4 - 0.7]}>
                        <capsuleGeometry args={[0.05, 0.1]} />
                        <meshStandardMaterial color="#33691E" />
                    </mesh>
                </Float>
            ))}

            {isSafe && <Sparkles count={20} scale={3} size={3} speed={0.5} color="#4FC3F7" position={[0, 0, 0]} />}
        </group>
    );
}

// ============================================================================
// 12. LANDSCAPE BUILDER - Constructeur de Paysage Sénégalais
// ============================================================================
export function LandscapeBuilder() {
    const [elements, setElements] = useState({ vegetation: [], water: [], human: [], relief: 'plaine' });
    const [selectedTool, setSelectedTool] = useState(null);
    const [score, setScore] = useState(0);

    const reliefTypes = ['plaine', 'plateau', 'colline'];
    const tools = [
        { id: 'baobab', category: 'vegetation', emoji: '🌳', name: 'Baobab' },
        { id: 'palmier', category: 'vegetation', emoji: '🌴', name: 'Palmier' },
        { id: 'fleuve', category: 'water', emoji: '🌊', name: 'Fleuve' },
        { id: 'lac', category: 'water', emoji: '💧', name: 'Lac' },
        { id: 'village', category: 'human', emoji: '🏘️', name: 'Village' },
        { id: 'route', category: 'human', emoji: '🛤️', name: 'Route' },
    ];

    const addElement = (tool) => {
        const pos = [Math.random() * 6 - 3, 0, Math.random() * 6 - 3];
        setElements(e => ({
            ...e,
            [tool.category]: [...e[tool.category], { ...tool, pos }]
        }));
        setScore(s => s + 10);
    };

    const totalElements = elements.vegetation.length + elements.water.length + elements.human.length;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⛰️ Constructeur de Paysage">
                    <div className="space-y-3">
                        <ScoreDisplay score={score} maxScore={100} label="XP" />

                        <div>
                            <div className="text-xs text-gray-400 mb-1">Relief :</div>
                            <div className="grid grid-cols-3 gap-1">
                                {reliefTypes.map(r => (
                                    <button key={r} onClick={() => setElements(e => ({ ...e, relief: r }))}
                                        className={`p-1 text-xs rounded capitalize ${elements.relief === r ? 'bg-amber-500' : 'bg-white/10'}`}>
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-1">Éléments :</div>
                            <div className="grid grid-cols-3 gap-1">
                                {tools.map(t => (
                                    <button key={t.id} onClick={() => addElement(t)}
                                        className="p-2 bg-white/10 hover:bg-white/20 rounded text-center">
                                        <div className="text-xl">{t.emoji}</div>
                                        <div className="text-xs">{t.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 bg-green-500/20 rounded">
                                <div>🌿 Végétation</div>
                                <div className="font-bold">{elements.vegetation.length}</div>
                            </div>
                            <div className="p-2 bg-blue-500/20 rounded">
                                <div>💧 Eau</div>
                                <div className="font-bold">{elements.water.length}</div>
                            </div>
                            <div className="p-2 bg-orange-500/20 rounded">
                                <div>🏠 Humain</div>
                                <div className="font-bold">{elements.human.length}</div>
                            </div>
                        </div>

                        <GameButton onClick={() => setElements({ vegetation: [], water: [], human: [], relief: 'plaine' })} color="red">
                            🗑️ Tout effacer
                        </GameButton>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 15, 10]} intensity={1.2} castShadow />

            {/* Ground with relief */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, elements.relief === 'colline' ? 0.5 : 0, 0]} receiveShadow>
                <planeGeometry args={[15, 15, 32, 32]} />
                <meshStandardMaterial color="#C4A484" />
            </mesh>

            {elements.relief === 'colline' && (
                <mesh position={[0, 0.8, 0]}>
                    <coneGeometry args={[3, 2, 8]} />
                    <meshStandardMaterial color="#A1887F" />
                </mesh>
            )}

            {elements.relief === 'plateau' && (
                <mesh position={[0, 0.3, 0]}>
                    <cylinderGeometry args={[4, 4, 0.6, 8]} />
                    <meshStandardMaterial color="#A1887F" />
                </mesh>
            )}

            {/* Vegetation */}
            {elements.vegetation.map((el, i) => (
                <group key={`veg-${i}`} position={el.pos}>
                    {el.id === 'baobab' && (
                        <>
                            <mesh position={[0, 1, 0]}>
                                <cylinderGeometry args={[0.4, 0.6, 2]} />
                                <meshStandardMaterial color="#8D6E63" />
                            </mesh>
                            <mesh position={[0, 2.5, 0]}>
                                <sphereGeometry args={[1.2]} />
                                <meshStandardMaterial color="#4CAF50" />
                            </mesh>
                        </>
                    )}
                    {el.id === 'palmier' && (
                        <>
                            <mesh position={[0, 1.5, 0]}>
                                <cylinderGeometry args={[0.15, 0.2, 3]} />
                                <meshStandardMaterial color="#795548" />
                            </mesh>
                            {Array.from({ length: 6 }).map((_, j) => (
                                <mesh key={j} position={[0, 3, 0]} rotation={[0.5, j * Math.PI / 3, 0]}>
                                    <boxGeometry args={[0.2, 0.05, 1.5]} />
                                    <meshStandardMaterial color="#2E7D32" />
                                </mesh>
                            ))}
                        </>
                    )}
                </group>
            ))}

            {/* Water */}
            {elements.water.map((el, i) => (
                <group key={`water-${i}`} position={el.pos}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                        {el.id === 'fleuve' ? (
                            <planeGeometry args={[1, 5]} />
                        ) : (
                            <circleGeometry args={[1.5, 32]} />
                        )}
                        <meshStandardMaterial color="#29B6F6" transparent opacity={0.8} />
                    </mesh>
                </group>
            ))}

            {/* Human elements */}
            {elements.human.map((el, i) => (
                <group key={`human-${i}`} position={el.pos}>
                    {el.id === 'village' && (
                        <>
                            <mesh position={[0, 0.5, 0]}>
                                <boxGeometry args={[1, 1, 1]} />
                                <meshStandardMaterial color="#ECEFF1" />
                            </mesh>
                            <mesh position={[0, 1.2, 0]}>
                                <coneGeometry args={[0.8, 0.6, 4]} />
                                <meshStandardMaterial color="#8D6E63" />
                            </mesh>
                        </>
                    )}
                    {el.id === 'route' && (
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
                            <planeGeometry args={[0.8, 4]} />
                            <meshStandardMaterial color="#616161" />
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
}

export { MalariaCycle as MalariaCycleAdvanced, AscarisPrevention as AscarisPreventionAdvanced, CholeraFilter as CholeraFilterAdvanced, LandscapeBuilder as LandscapeBuilderAdvanced };

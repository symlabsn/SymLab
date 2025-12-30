'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Box, Sphere, Cylinder, Float, Line } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { PhaseSelector, MissionObjective, GradeBadge, XPBar, SuccessOverlay, ConfettiExplosion } from './GamificationUtils';


export function Chap6SourcesLumiere() {
    const [lightsOn, setLightsOn] = useState(false);
    const [mode, setMode] = useState('explore');
    const [quizIndex, setQuizIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const quizQuestions = [
        { q: "Quelle source produit sa propre lumière ?", options: ["Miroir", "Lampe", "Livre"], correct: "Lampe", icon: "💡" },
        { q: "Quel objet diffuse la lumière reçue ?", options: ["Soleil", "Lampe", "Miroir"], correct: "Miroir", icon: "🪞" },
        { q: "La Lune est-elle une source primaire ?", options: ["Oui", "Non", "Parfois"], correct: "Non", icon: "🌙" }
    ];

    const checkAnswer = (ans) => {
        if (ans === quizQuestions[quizIndex].correct) {
            setScore(s => s + 50);
            setShowSuccess(true);
        } else {
            alert("Raté ! Observe bien les rayons et les sources.");
        }
    };

    const nextQuestion = () => {
        setShowSuccess(false);
        setQuizIndex(i => (i + 1) % quizQuestions.length);
    };

    const isVisible = (type) => type === 'primaire' || lightsOn;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="💡 Expert Optique" showCloseButton={false} defaultPosition="bottom-center" className="w-[380px] border-yellow-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => setMode(m)} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Maître de la Lumière</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Laboratoire d\'Optique' : 'Défi des Sources 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <button onClick={() => setLightsOn(!lightsOn)}
                                className={`w-full py-6 rounded-2xl font-black text-lg transition-all flex flex-col items-center justify-center gap-2 ${lightsOn ? 'bg-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.4)]' : 'bg-gray-800 text-gray-500 border border-white/5'}`}>
                                <span className="text-2xl">{lightsOn ? '☀️' : '🌑'}</span>
                                {lightsOn ? 'INTERRUPTEUR : ALLUMÉ' : 'INTERRUPTEUR : ÉTEINT'}
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-yellow-900/20 rounded-xl border border-yellow-500/20">
                                    <div className="text-yellow-400 font-black text-[10px] uppercase mb-1">Source Primaire</div>
                                    <p className="text-[10px] text-gray-400 leading-tight">Crée sa propre lumière. Reste visible dans le noir absolu.</p>
                                </div>
                                <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20">
                                    <div className="text-blue-400 font-black text-[10px] uppercase mb-1">Source Secondaire</div>
                                    <p className="text-[10px] text-gray-400 leading-tight">Diffuse la lumière reçue. Devient invisible sans source.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <MissionObjective objective={quizQuestions[quizIndex].q} icon={quizQuestions[quizIndex].icon} />
                            <div className="grid grid-cols-1 gap-2">
                                {quizQuestions[quizIndex].options.map(opt => (
                                    <button key={opt} onClick={() => checkAnswer(opt)}
                                        className="w-full p-4 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 rounded-xl text-sm font-bold transition-all text-left flex justify-between items-center group">
                                        {opt}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Analyse Correcte ! Tu distingues parfaitement l'origine de la lumière." points={50} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            <ambientLight intensity={lightsOn ? 0.3 : 0} />

            <group position={[-2, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.2, 0.4, 0.5]} />
                    <meshStandardMaterial color={lightsOn ? '#FCD34D' : '#4B5563'} emissive={lightsOn ? '#FCD34D' : 'black'} emissiveIntensity={2} />
                </mesh>
                <Text position={[0, -0.6, 0]} fontSize={0.2} color="#FCD34D" font="/fonts/Inter-Bold.ttf">Lampe (Primaire)</Text>
                {lightsOn && <pointLight distance={10} intensity={4} color="#FCD34D" />}
            </group>

            <group position={[2, 0, 0]} visible={isVisible('secondaire')}>
                <mesh rotation={[0, -0.5, 0]}>
                    <boxGeometry args={[0.1, 2, 1.5]} />
                    <meshStandardMaterial color="#93C5FD" metalness={1} roughness={0} />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.2} color="#93C5FD" font="/fonts/Inter-Bold.ttf">Miroir (Secondaire)</Text>
                {lightsOn && (
                    <mesh position={[-0.1, 0, 0]} rotation={[0, -0.5, 0]}>
                        <planeGeometry args={[0.1, 2, 1.4]} />
                        <meshBasicMaterial color="#FCD34D" opacity={0.2} transparent />
                    </mesh>
                )}
            </group>

            <group position={[0, -1.5, 1]} visible={isVisible('secondaire')}>
                <Box args={[1, 0.2, 1.4]} material-color="#EF4444" />
                <Text position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.12} color="white" font="/fonts/Inter-Bold.ttf">LABORATOIRE PC</Text>
                <Text position={[0, -0.3, 0]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.ttf">Livre (Secondaire)</Text>
            </group>

            {lightsOn && (
                <group>
                    <Line points={[[-2, 0, 0], [2, 0, 0]]} color="#FCD34D" lineWidth={3} transparent opacity={0.6} />
                    <Line points={[[2, 0, 0], [0, 0, 4]]} color="#FCD34D" lineWidth={1} transparent opacity={0.3} />
                    <Line points={[[-2, 0, 0], [0, -1.5, 1]]} color="#FCD34D" lineWidth={3} transparent opacity={0.6} />
                </group>
            )}
        </group>
    );
}

// ============================================================
// CHAPITRE 7: PROPAGATION DE LA LUMIÈRE (ENRICHI)
// ============================================================
export function Chap7PropagationLumiere() {
    const [screenDistance, setScreenDistance] = useState(3);
    const [objectSize, setObjectSize] = useState(0.5);
    const [showRays, setShowRays] = useState(true);
    const [mode, setMode] = useState('explore');
    const [targetShadow, setTargetShadow] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const D_source_obj = 3;
    const D_source_screen = 3 + screenDistance;
    const shadowScale = D_source_screen / D_source_obj;
    const shadowSize = objectSize * shadowScale;

    const startChallenge = () => {
        setTargetShadow((Math.random() * 1.5 + 0.5).toFixed(1));
        setMode('challenge');
        setShowSuccess(false);
    };

    useEffect(() => {
        if (mode === 'challenge' && targetShadow && !showSuccess) {
            if (Math.abs(shadowSize - parseFloat(targetShadow)) < 0.05) {
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        }
    }, [shadowSize, targetShadow, mode, showSuccess]);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌑 Expert en Ombres" showCloseButton={false} defaultPosition="bottom-center" className="w-[380px] border-white/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Projectionniste</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Manipulation Géométrique' : 'Défi de Projection 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'challenge' && targetShadow && (
                        <div className="mb-4">
                            <MissionObjective objective={`Règle les paramètres pour obtenir une ombre de exactement ${targetShadow} m.`} icon="🎯" />
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-4">
                            <div>
                                <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 mb-2">
                                    <span>Distance Écran</span>
                                    <span className="text-white">{screenDistance.toFixed(1)} M</span>
                                </div>
                                <input type="range" min="1" max="5" step="0.1" value={screenDistance} onChange={(e) => setScreenDistance(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white" />
                            </div>

                            <div>
                                <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 mb-2">
                                    <span>Diamètre Objet</span>
                                    <span className="text-white">{(objectSize * 2).toFixed(1)} M</span>
                                </div>
                                <input type="range" min="0.2" max="1" step="0.1" value={objectSize} onChange={(e) => setObjectSize(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-500" />
                            </div>
                        </div>

                        <div className="p-4 bg-black/60 rounded-xl border border-white/20 flex flex-col items-center">
                            <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Taille de l'ombre calculée</div>
                            <div className={`text-4xl font-mono font-black transition-all ${showSuccess ? 'text-green-400' : 'text-white'}`}>
                                {shadowSize.toFixed(2)} <span className="text-xl">M</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${showRays ? 'border-yellow-400 bg-yellow-400' : 'border-white/20 bg-transparent'}`}
                                    onClick={() => setShowRays(!showRays)}>
                                    {showRays && <span className="text-black text-[10px]">✔</span>}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-tighter">Afficher les Rayons Limites</span>
                            </label>
                            <div className="text-[8px] text-gray-500 font-mono">THALÈS : h'/h = D'/D</div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Alignement Parfait ! L'ombre correspond exactement à la consigne." points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            <group position={[-3, 0, 0]}>
                <Sphere args={[0.1]}>
                    <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={5} />
                </Sphere>
                <pointLight intensity={3} distance={20} />
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="yellow" font="/fonts/Inter-Bold.ttf">SOURCE</Text>
            </group>

            <group position={[0, 0, 0]}>
                <Sphere args={[objectSize]}>
                    <meshStandardMaterial color="#EF4444" roughness={0.3} metalness={0.2} />
                </Sphere>
                <Text position={[0, -1.2, 0]} fontSize={0.2} color="#EF4444" font="/fonts/Inter-Bold.ttf">OBJET OPAQUE</Text>
            </group>

            <group position={[screenDistance, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <Box args={[10, 10, 0.1]}>
                    <meshStandardMaterial color="#F3F4F6" />
                </Box>
                <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[shadowSize, 64]} />
                    <meshBasicMaterial color="#000" opacity={0.85} transparent />
                </mesh>
                <Text position={[0, 4.5, 0.1]} fontSize={0.3} color="#374151" font="/fonts/Inter-Bold.ttf">ÉCRAN D'OBSERVATION</Text>
            </group>

            {/* Cône d'ombre volumétrique */}
            <mesh position={[screenDistance / 2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <cylinderGeometry args={[shadowSize, 0, screenDistance, 64, 1, true]} />
                <meshBasicMaterial color="black" opacity={0.15} transparent side={THREE.DoubleSide} />
            </mesh>

            {showRays && (
                <group>
                    <Line points={[[-3, 0, 0], [screenDistance, shadowSize, 0]]} color="#FBBF24" lineWidth={1} transparent opacity={0.4} />
                    <Line points={[[-3, 0, 0], [screenDistance, -shadowSize, 0]]} color="#FBBF24" lineWidth={1} transparent opacity={0.4} />
                    <Line points={[[-3, 0, 0], [screenDistance, 0, shadowSize]]} color="#FBBF24" lineWidth={1} transparent opacity={0.2} />
                    <Line points={[[-3, 0, 0], [screenDistance, 0, -shadowSize]]} color="#FBBF24" lineWidth={1} transparent opacity={0.2} />
                </group>
            )}
        </group>
    );
}


// ============================================================
// CHAPITRE 8: RÉFRACTION DE LA LUMIÈRE (ENRICHI)
// ============================================================
export function Chap8Refraction() {
    const [angleIncidence, setAngleIncidence] = useState(45);
    const [n1, setN1] = useState(1.0);
    const [n2, setN2] = useState(1.33);
    const [mode, setMode] = useState('explore');
    const [targetPos, setTargetPos] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const i1 = angleIncidence * Math.PI / 180;
    let i2 = 0;
    let reflection = false;
    const sin_i2 = (n1 / n2) * Math.sin(i1);

    if (Math.abs(sin_i2) <= 1) {
        i2 = Math.asin(sin_i2);
    } else {
        reflection = true;
        i2 = i1;
    }

    const angleRefractionDeg = (i2 * 180 / Math.PI).toFixed(1);
    const beamLength = 4;
    const endX = Math.sin(i2) * beamLength;
    const endY = -Math.cos(i2) * beamLength;

    const startChallenge = () => {
        const randAngle = (Math.random() * 50 + 15) * Math.PI / 180;
        const tX = Math.sin(randAngle) * beamLength;
        const tY = -Math.cos(randAngle) * beamLength;
        setTargetPos({ x: tX, y: tY });
        setMode('challenge');
        setAngleIncidence(0);
        setShowSuccess(false);
    };

    useEffect(() => {
        if (mode === 'challenge' && targetPos && !reflection && !showSuccess) {
            const dist = Math.sqrt(Math.pow(endX - targetPos.x, 2) + Math.pow(endY - targetPos.y, 2));
            if (dist < 0.25) {
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        }
    }, [endX, endY, targetPos, mode, showSuccess, reflection]);

    const materials = {
        1.0: { name: 'Air', icon: '💨' },
        1.33: { name: 'Eau', icon: '💧' },
        1.5: { name: 'Verre', icon: '🔍' },
        2.42: { name: 'Diamant', icon: '💎' }
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌈 Maître des Rayons" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-cyan-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Ingénieur Optique</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Loi de Snell-Descartes' : 'Target Laser 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'challenge' && targetPos && (
                        <div className="mb-4">
                            <MissionObjective objective="Ajuste l'angle d'incidence pour que le rayon réfracté touche la cible dorée." icon="🔦" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Milieu Incident (n₁)</label>
                                <div className="grid grid-cols-2 gap-1">
                                    {Object.entries(materials).map(([n, data]) => (
                                        <button key={n} onClick={() => setN1(Number(n))}
                                            className={`p-2 rounded-lg text-[10px] font-bold border transition-all ${n1 === Number(n) ? 'bg-cyan-500 border-cyan-400 text-white' : 'bg-gray-800 border-white/5 text-gray-400'}`}>
                                            {data.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Milieu Réfracté (n₂)</label>
                                <div className="grid grid-cols-2 gap-1">
                                    {Object.entries(materials).map(([n, data]) => (
                                        <button key={n} onClick={() => setN2(Number(n))}
                                            className={`p-2 rounded-lg text-[10px] font-bold border transition-all ${n2 === Number(n) ? 'bg-indigo-500 border-indigo-400 text-white' : 'bg-gray-800 border-white/5 text-gray-400'}`}>
                                            {data.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                            <div className="flex justify-between text-[10px] font-black text-gray-500 mb-2">
                                <span>ANGLE INCIDENT (i₁)</span>
                                <span className="text-white">{angleIncidence}°</span>
                            </div>
                            <input type="range" min="0" max="85" value={angleIncidence} onChange={(e) => setAngleIncidence(Number(e.target.value))}
                                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                        </div>

                        <div className="p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/30">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-mono text-cyan-400">{n1} · sin({angleIncidence}°) = {n2} · sin(i₂)</span>
                                {reflection ? (
                                    <span className="text-red-400 font-black animate-pulse">RÉFLEXION TOTALE</span>
                                ) : (
                                    <span className="text-xl font-black text-white">i₂ = {angleRefractionDeg}°</span>
                                )}
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Calcul Précis ! La trajectoire est parfaite." points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Target */}
            {mode === 'challenge' && targetPos && (
                <group position={[targetPos.x, targetPos.y, 0]}>
                    <Sphere args={[0.2]}>
                        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={5} />
                    </Sphere>
                    <pointLight color="#FBBF24" intensity={2} distance={2} />
                </group>
            )}

            {/* Milieux */}
            <mesh position={[0, -2, 0]}>
                <planeGeometry args={[10, 4]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.25} />
                <Text position={[4, -1, 0.1]} color="white" fontSize={0.2} font="/fonts/Inter-Bold.ttf">{materials[n2].name} (n={n2})</Text>
            </mesh>
            <mesh position={[0, 2, 0]}>
                <planeGeometry args={[10, 4]} />
                <meshStandardMaterial color="white" transparent opacity={0.05} />
                <Text position={[4, 1, 0.1]} color="white" fontSize={0.2} font="/fonts/Inter-Bold.ttf">{materials[n1].name} (n={n1})</Text>
            </mesh>

            <Line points={[[-5, 0, 0], [5, 0, 0]]} color="white" lineWidth={2} transparent opacity={0.5} />
            <Line points={[[0, -4, 0], [0, 4, 0]]} color="white" lineWidth={1} dashed transparent opacity={0.3} />

            <RayVisuals i1={i1} i2={i2} length={beamLength} reflection={reflection} />
        </group>
    );
}

function RayVisuals({ i1, i2, length, reflection }) {
    // Incident : Vient du haut gauche.
    // vecteur direct : x = sin(i1), y = -cos(i1)  (car 0 = verticale bas)
    // Start point calculé pour arriver en (0,0)

    const startX = -Math.sin(i1) * length;
    const startY = Math.cos(i1) * length;

    const endRefractX = Math.sin(i2) * length;
    const endRefractY = -Math.cos(i2) * length;

    const endReflectX = Math.sin(i1) * length;
    const endReflectY = Math.cos(i1) * length;

    return (
        <group>
            {/* Incident */}
            <Line points={[[startX, startY, 0], [0, 0, 0]]} color="red" lineWidth={3} />
            <Text position={[startX / 2, startY / 2 + 0.2, 0]} fontSize={0.2} color="red">i1</Text>

            {/* Arcs d'angle */}
            {/* ... */}

            {reflection ? (
                <Line points={[[0, 0, 0], [endReflectX, endReflectY, 0]]} color="red" lineWidth={3} dashed />
            ) : (
                <group>
                    <Line points={[[0, 0, 0], [endRefractX, endRefractY, 0]]} color="green" lineWidth={3} />
                    <Text position={[endRefractX / 2, endRefractY / 2 - 0.2, 0]} fontSize={0.2} color="green">i2</Text>
                </group>
            )}
        </group>
    )
}

function LaserRay({ angle, length, color, isReflected, isRefracted }) {
    // Composant helper simple si besoin, mais RayVisuals fait le job mathématique
    return null;
}

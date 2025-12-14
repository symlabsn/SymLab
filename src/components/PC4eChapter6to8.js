'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Box, Sphere, Cylinder, Float, Line } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';

// ============================================================
// CHAPITRE 6: SOURCES DE LUMIÈRE (ENRICHI)
// ============================================================
export function Chap6SourcesLumiere() {
    const [lightsOn, setLightsOn] = useState(false);

    // Mode Défi
    const [mode, setMode] = useState('explore');
    const [quizIndex, setQuizIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Objets dans la scène
    const objects = [
        { name: 'Lampe', type: 'primaire', visible: true, pos: [-2, 0, 0] },
        { name: 'Soleil', type: 'primaire', visible: false, pos: [0, 3, -5] },
        { name: 'Miroir', type: 'secondaire', visible: true, pos: [2, 0, 0] },
        { name: 'Livre', type: 'secondaire', visible: true, pos: [0, -1.5, 1] },
        { name: 'Lune', type: 'secondaire', visible: true, pos: [2, 2, -2] }
    ];

    const quizQuestions = [
        { q: "Quelle source produit sa propre lumière ?", options: ["Miroir", "Lampe", "Livre"], correct: "Lampe" },
        { q: "Quel objet diffuse la lumière reçue ?", options: ["Soleil", "Lampe", "Miroir"], correct: "Miroir" },
        { q: "La Lune est-elle une source primaire ?", options: ["Oui", "Non", "Parfois"], correct: "Non" }
    ];

    const checkAnswer = (ans) => {
        if (ans === quizQuestions[quizIndex].correct) {
            setScore(s => s + 30);
            setShowSuccess(true);
        } else {
            alert("Raté ! Essaie encore.");
        }
    };

    const nextQuestion = () => {
        setShowSuccess(false);
        setQuizIndex(i => (i + 1) % quizQuestions.length);
    };

    // Une source secondaire n'est visible que s'il y a de la lumière
    const isVisible = (type) => type === 'primaire' || lightsOn;

    return (
        <group>

            <Html transform={false}>
                <DraggableHtmlPanel title="💡 Sources de Lumière" showCloseButton={false} defaultPosition="bottom-center" className="w-[300px] border-yellow-500/30 text-white" usePortal={false}>
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Obs.</button>
                            <button onClick={() => { setMode('challenge'); setQuizIndex(0); setScore(0); }} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-indigo-600' : 'bg-gray-700'}`}>Quiz 🧠</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <button onClick={() => setLightsOn(!lightsOn)} className={`w-full py-4 mb-4 rounded-xl font-bold text-xl transition-all ${lightsOn ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.5)]' : 'bg-gray-800 text-gray-400'}`}>
                                {lightsOn ? 'LUMIÈRE ALLUMÉE ☀️' : 'NOIR TOTAL 🌑'}
                            </button>

                            <div className="space-y-2">
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <span className="text-yellow-400 font-bold">Source Primaire :</span>
                                    <p className="text-xs text-gray-300">Produit sa propre lumière (Visible même dans le noir).</p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <span className="text-blue-400 font-bold">Source Secondaire :</span>
                                    <p className="text-xs text-gray-300">Diffuse la lumière reçue (Invisible dans le noir !).</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-500/50">
                            <h3 className="text-indigo-300 text-xs uppercase font-bold mb-2">Question {quizIndex + 1}</h3>
                            <div className="text-sm font-bold mb-4">{quizQuestions[quizIndex].q}</div>
                            <div className="space-y-2">
                                {quizQuestions[quizIndex].options.map(opt => (
                                    <button key={opt} onClick={() => checkAnswer(opt)} className="w-full p-2 bg-gray-800 hover:bg-indigo-600 rounded text-sm transition-colors text-left">
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>


            <SuccessOverlay show={showSuccess} message="Bonne réponse ! Tu connais tes sources !" points={30} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Ambiance */}
            <ambientLight intensity={lightsOn ? 0.5 : 0} />

            {/* Lampe (Source Primaire) */}
            <group position={[-2, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.2, 0.4, 0.5]} />
                    <meshStandardMaterial color={lightsOn ? '#FCD34D' : '#4B5563'} emissive={lightsOn ? '#FCD34D' : 'black'} />
                </mesh>
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="#FCD34D">Lampe (Primaire)</Text>
                {lightsOn && <pointLight distance={10} intensity={2} color="#FCD34D" />}
            </group>

            {/* Miroir (Source Secondaire) */}
            <group position={[2, 0, 0]} visible={isVisible('secondaire')}>
                <mesh rotation={[0, -0.5, 0]}>
                    <boxGeometry args={[0.1, 2, 1.5]} />
                    <meshStandardMaterial color="#A5F3FC" metalness={0.9} roughness={0.1} />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.2} color="#93C5FD">Miroir (Secondaire)</Text>
                {/* Reflet simulé */}
                {lightsOn && (
                    <mesh position={[-0.1, 0, 0]} rotation={[0, -0.5, 0]}>
                        <planeGeometry args={[0.1, 2, 1.4]} />
                        <meshBasicMaterial color="#FCD34D" opacity={0.2} transparent />
                    </mesh>
                )}
            </group>

            {/* Livre (Source Secondaire Diffusante) */}
            <group position={[0, -1.5, 1]} visible={isVisible('secondaire')}>
                <Box args={[1, 0.2, 1.4]} material-color="#EF4444" />
                <Text position={[0, 0.3, 0]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.15} color="white">PHYSIQUE CHIMIE</Text>
            </group>

            {/* Rayons lumineux */}
            {lightsOn && (
                <group>
                    {/* Vers le miroir */}
                    <Line points={[[-2, 0, 0], [2, 0, 0]]} color="yellow" lineWidth={2} transparent opacity={0.5} />
                    {/* Réflexion miroir */}
                    <Line points={[[2, 0, 0], [0, 0, 4]]} color="yellow" lineWidth={1} transparent opacity={0.3} />
                    {/* Vers le livre */}
                    <Line points={[[-2, 0, 0], [0, -1.5, 1]]} color="yellow" lineWidth={2} transparent opacity={0.5} />
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

    // Mode Défi
    const [mode, setMode] = useState('explore');
    const [targetShadow, setTargetShadow] = useState(null); // Target size
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Calculs géométriques pour l'ombre
    const sourcePos = new THREE.Vector3(-3, 0, 0);
    const objectPos = new THREE.Vector3(0, 0, 0);
    const screenPosX = screenDistance;

    // Thalès : R_ombre / R_objet = D_ecran_source / D_objet_source
    const D_source_obj = 3; // distance fixe entre -3 et 0
    const D_source_screen = 3 + screenDistance;
    const shadowScale = D_source_screen / D_source_obj;
    const shadowSize = objectSize * shadowScale;

    const startChallenge = () => {
        setTargetShadow((Math.random() * 1.5 + 0.5).toFixed(2)); // Random size 0.5 - 2.0
        setMode('challenge');
        setShowSuccess(false);
    };

    // Check challenge
    useEffect(() => {
        if (mode === 'challenge' && targetShadow) {
            if (Math.abs(shadowSize - parseFloat(targetShadow)) < 0.1) {
                if (!showSuccess) {
                    setScore(s => s + 50);
                    setShowSuccess(true);
                }
            }
        }
    }, [shadowSize, targetShadow, mode, showSuccess]);

    return (
        <group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🌑 Ombres & Propagation" showCloseButton={false} defaultPosition="bottom-center" className="w-[300px] border-white/30 text-white" usePortal={false}>
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-gray-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-white text-black' : 'bg-gray-700'}`}>Défi Ombre 🎯</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'challenge' && targetShadow && (
                        <div className="mb-4 bg-gray-900 p-3 rounded-lg border border-white/50 text-center">
                            <div className="text-xs text-gray-400 uppercase">Mission</div>
                            <div>Atteins une taille d'ombre de :</div>
                            <div className="text-2xl font-bold">{targetShadow} m</div>
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="text-xs text-gray-400">Distance de l'écran</label>
                        <input type="range" min="1" max="5" step="0.1" value={screenDistance} onChange={(e) => setScreenDistance(Number(e.target.value))} className="w-full accent-white" />
                    </div>

                    <div className="mb-4">
                        <label className="text-xs text-gray-400">Taille de l'objet</label>
                        <input type="range" min="0.2" max="1" step="0.1" value={objectSize} onChange={(e) => setObjectSize(Number(e.target.value))} className="w-full accent-red-500" />
                    </div>

                    <div className="bg-gray-800 p-3 rounded-lg text-sm">
                        <div className="flex justify-between">
                            <span>Taille Ombre :</span>
                            <span className={`font-bold ${showSuccess ? 'text-green-400' : 'text-white'}`}>{shadowSize.toFixed(2)} m</span>
                        </div>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                        <input type="checkbox" checked={showRays} onChange={() => setShowRays(!showRays)} />
                        <span className="text-sm">Voir rayons extrêmes</span>
                    </div>
                </DraggableHtmlPanel>
            </Html>


            <SuccessOverlay show={showSuccess} message="Cible atteinte ! Maître des ombres !" points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Source Ponctuelle */}
            <group position={sourcePos}>
                <Sphere args={[0.1]} material-color="yellow" material-emissive="yellow" material-emissiveIntensity={2} />
                <pointLight intensity={2} distance={20} />
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="yellow">Source</Text>
            </group>

            {/* Objet Opaque */}
            <group position={objectPos}>
                <Sphere args={[objectSize]} material-color="#EF4444" />
                <Text position={[0, -1.2, 0]} fontSize={0.2} color="#EF4444">Objet</Text>
            </group>

            {/* Écran */}
            <group position={[screenPosX, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <Box args={[10, 10, 0.1]} material-color="white" />

                {/* Ombre Portée (Cylindre noir aplati) */}
                <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[shadowSize, 32]} />
                    <meshBasicMaterial color="black" opacity={0.8} transparent />
                </mesh>

                <Text position={[0, shadowSize + 0.5, 0.1]} rotation={[0, 0, 0]} fontSize={0.3} color="black">Ombre Portée</Text>
            </group>

            {/* Cône d'ombre (Volume) */}
            <mesh position={[screenDistance / 2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <cylinderGeometry args={[shadowSize, 0, screenDistance, 32, 1, true]} />
                <meshBasicMaterial color="black" opacity={0.1} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Rayons Limites */}
            {showRays && (
                <group>
                    {/* Haut */}
                    <Line points={[sourcePos, [screenPosX, shadowSize, 0]]} color="yellow" dashed opacity={0.5} />
                    {/* Bas */}
                    <Line points={[sourcePos, [screenPosX, -shadowSize, 0]]} color="yellow" dashed opacity={0.5} />
                </group>
            )}
        </group>
    );
}


// ============================================================
// CHAPITRE 8: RÉFRACTION DE LA LUMIÈRE (ENRICHI)
// ============================================================
export function Chap8Refraction() {
    const [angleIncidence, setAngleIncidence] = useState(45); // Degrés
    const [n1, setN1] = useState(1.0); // Air
    const [n2, setN2] = useState(1.33); // Eau

    // Mode Défi
    const [mode, setMode] = useState('explore');
    const [targetPos, setTargetPos] = useState(null); // {x, y}
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Conversion deg -> rad
    const i1 = angleIncidence * Math.PI / 180;

    // Loi de Snell-Descartes : n1 * sin(i1) = n2 * sin(i2)
    // sin(i2) = (n1 / n2) * sin(i1)
    let i2 = 0;
    let reflection = false; // Réflexion totale ?

    const sin_i2 = (n1 / n2) * Math.sin(i1);

    if (Math.abs(sin_i2) <= 1) {
        i2 = Math.asin(sin_i2);
    } else {
        reflection = true; // Réflexion totale interne
        i2 = i1; // Pour affichage miroir
    }

    const angleRefractionDeg = (i2 * 180 / Math.PI).toFixed(1);

    // Calcul target hit
    const beamLength = 3;
    const endX = Math.sin(i2) * beamLength;
    const endY = -Math.cos(i2) * beamLength; // Downwards

    const startChallenge = () => {
        // Place target somewhere in the bottom
        const randAngle = (Math.random() * 60 + 10) * Math.PI / 180; // 10 to 70 deg
        const tX = Math.sin(randAngle) * beamLength; // Match length for easier hit detection
        const tY = -Math.cos(randAngle) * beamLength;
        setTargetPos({ x: tX, y: tY });
        setMode('challenge');
        setAngleIncidence(0); // Reset
        setShowSuccess(false);
    };

    useEffect(() => {
        if (mode === 'challenge' && targetPos && !reflection) {
            // Check distance between beam end and target
            const dist = Math.sqrt(Math.pow(endX - targetPos.x, 2) + Math.pow(endY - targetPos.y, 2));
            if (dist < 0.3) {
                if (!showSuccess) {
                    setScore(s => s + 50);
                    setShowSuccess(true);
                }
            }
        }
    }, [endX, endY, targetPos, mode, showSuccess, reflection]);

    const materials = {
        1.0: 'Air',
        1.33: 'Eau',
        1.5: 'Verre',
        2.42: 'Diamant'
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌈 Réfraction (Snell-Descartes)" showCloseButton={false} defaultPosition="bottom-center" className="w-[320px] border-cyan-500/30 text-white" usePortal={false}>
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-indigo-600' : 'bg-gray-700'}`}>Tir Laser 🎯</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'challenge' && (
                        <div className="mb-4 text-center text-xs text-indigo-300">
                            Ajuste l'angle pour toucher la cible !
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-xs text-gray-400 block mb-1">Milieu 1 (Haut)</label>
                            <select value={n1} onChange={(e) => setN1(Number(e.target.value))} className="bg-gray-800 rounded p-1 text-sm w-full">
                                {Object.entries(materials).map(([n, name]) => <option key={n} value={n}>{name} (n={n})</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400 block mb-1">Milieu 2 (Bas)</label>
                            <select value={n2} onChange={(e) => setN2(Number(e.target.value))} className="bg-gray-800 rounded p-1 text-sm w-full">
                                {Object.entries(materials).map(([n, name]) => <option key={n} value={n}>{name} (n={n})</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-xs text-gray-400">Angle d'incidence (i1): {angleIncidence}°</label>
                        <input type="range" min="0" max="85" value={angleIncidence} onChange={(e) => setAngleIncidence(Number(e.target.value))} className="w-full accent-red-500" />
                    </div>

                    <div className="bg-gray-800 p-3 rounded-xl border border-white/20">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-400 text-sm">n₁ × sin(i₁) = n₂ × sin(i₂)</span>
                        </div>
                        {reflection ? (
                            <div className="text-red-400 font-bold text-center">RÉFLEXION TOTALE !</div>
                        ) : (
                            <div className="text-green-400 font-mono text-xl text-center">i₂ = {angleRefractionDeg}°</div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Cible touchée ! Tireur d'élite !" points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Target Visual */}
            {mode === 'challenge' && targetPos && (
                <group position={[targetPos.x, targetPos.y, 0]}>
                    <Sphere args={[0.2]}>
                        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={2} />
                    </Sphere>
                    <pointLight color="orange" distance={1} intensity={2} />
                </group>
            )}

            {/* Interface (Ligne horizontable y=0) */}
            <mesh position={[0, -2, 0]}>
                <boxGeometry args={[8, 4, 0.1]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                <Text position={[3, -1, 0]} color="white" fontSize={0.3}>{materials[n2]}</Text>
            </mesh>
            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[8, 4, 0.1]} />
                <meshStandardMaterial color="white" transparent opacity={0.05} />
                <Text position={[3, 1, 0]} color="white" fontSize={0.3}>{materials[n1]}</Text>
            </mesh>

            <Line points={[[-4, 0, 0], [4, 0, 0]]} color="white" lineWidth={1} />
            {/* Normale */}
            <Line points={[[0, -3, 0], [0, 3, 0]]} color="gray" dashed lineWidth={1} />

            {/* Rayon Incident */}
            <LaserRay angle={i1 + Math.PI / 2} length={3} color="red" />

            {/* Rayon Réfracté ou Réfléchi */}
            {reflection ? (
                <LaserRay angle={Math.PI / 2 - i1} length={3} color="red" isReflected />
            ) : (
                <LaserRay angle={Math.PI / 2 - i1 - (i1 - i2) - Math.PI} length={3} color="green" isRefracted />
            )}

            {/* Affichage correct des rayons avec calcul vectoriel */}
            <RayVisuals i1={i1} i2={i2} length={3} reflection={reflection} />

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

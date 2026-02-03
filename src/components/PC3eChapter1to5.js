'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Sphere, Box, Cylinder, Line, Float } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';
import * as THREE from 'three';

// ============================================================
// CHAPITRE 1: LENTILLES MINCES (PC 3e)
// ============================================================
export function Chap1LentillesMCE() {
    const [lensType, setLensType] = useState('convergente');
    const [focalLength, setFocalLength] = useState(3);
    const [objectDistance, setObjectDistance] = useState(6);
    const [showRays, setShowRays] = useState(true);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [scenario, setScenario] = useState(null);

    const scenarios = {
        loupe: {
            name: 'Loupe',
            icon: '🔍',
            f: 3,
            d: 1.5,
            type: 'convergente',
            desc: 'Grossir un texte',
            mission: 'Placez l&apos;objet très près de la lentille pour créer une image virtuelle agrandie.',
            tip: 'L&apos;image se forme du même côté que l&apos;objet !'
        },
        cinema: {
            name: 'Cinéma',
            icon: '📽️',
            f: 2,
            d: 3,
            type: 'convergente',
            desc: 'Projection',
            mission: 'Utilisez la lentille pour projeter une image géante et renversée sur un écran.',
            tip: 'Plus l&apos;objet est près du foyer F, plus l&apos;image est grande.'
        },
        oeil: {
            name: 'Œil Humain',
            icon: '👁️',
            f: 1.5,
            d: 10,
            type: 'convergente',
            desc: 'Vision normale',
            mission: 'Formez l&apos;image exactement sur la rétine (fond de l&apos;œil).',
            tip: 'Le cristallin change de forme pour accommoder.'
        },
        photo: {
            name: 'Appareil',
            icon: '📷',
            f: 5,
            d: 40,
            type: 'convergente',
            desc: 'Focus paysage',
            mission: 'Capturez un objet lointain avec une mise au point nette.',
            tip: 'Pour un objet à l&apos;infini, l&apos;image se forme au foyer image F&apos;.'
        }
    };

    const challenges = [
        { q: "Une lentille convergente est plus épaisse :", options: ["Au bord", "Au centre", "Au centre et au bord"], ans: 1, icon: "🔍" },
        { q: "Les rayons parallèles convergent vers :", options: ["Le centre O", "Le foyer image F'", "Le foyer objet F"], ans: 1, icon: "🎯" },
        { q: "Un rayon passant par le centre O est :", options: ["Dévié vers F'", "Non dévié", "Réfléchi à 90°"], ans: 1, icon: "📏" },
        { q: "La vergence C = 1/f est exprimée en :", options: ["Mètres", "Dioptries (δ)", "Newtons"], ans: 1, icon: "⚡" }
    ];

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setLensType(sc.type);
        setFocalLength(Math.abs(sc.f));
        setObjectDistance(sc.d);
        setScenario(key);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        const rand = Math.floor(Math.random() * challenges.length);
        setChallenge({ ...challenges[rand], answered: false });
        setShowSuccess(false);
    };

    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Analyse incorrecte. Révise les propriétés des rayons !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const isConvergent = lensType === 'convergente';
    const f = isConvergent ? focalLength : -focalLength;
    const imageDistance = objectDistance * f / (objectDistance - f);
    const magnification = -imageDistance / objectDistance;
    const isRealImage = isConvergent && objectDistance > focalLength;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🔭 Opticien Expert"
                    usePortal={true}
                    initialPos={{ x: 20, y: 80 }}
                    showCloseButton={false}
                    className="w-[400px] border-cyan-500/30 text-white"
                >
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Laboratoire d&apos;Optique</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Étude des Lentilles' : 'Défi de Focalisation 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Trouvez la configuration idéale pour projeter une image nette." icon="🔍" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => applyScenario(key)}
                                        className="p-2 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-cyan-900/40 transition-all">
                                        <span className="text-xl">{sc.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center">{sc.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div className="flex gap-2">
                                    <button onClick={() => setLensType('convergente')}
                                        className={`flex-1 py-3 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all ${lensType === 'convergente' ? 'bg-cyan-500 text-white shadow-lg' : 'bg-gray-800 text-gray-500'}`}>
                                        ⊕ Convergente
                                    </button>
                                    <button onClick={() => setLensType('divergente')}
                                        className={`flex-1 py-3 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all ${lensType === 'divergente' ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-800 text-gray-500'}`}>
                                        ⊖ Divergente
                                    </button>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>DISTANCE FOCALE (f)</span>
                                        <span className="text-cyan-400">{focalLength} CM</span>
                                    </div>
                                    <input type="range" min="1" max="8" step="0.5" value={focalLength} onChange={(e) => setFocalLength(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>DISTANCE OBJET (OA)</span>
                                        <span className="text-orange-400">{objectDistance} CM</span>
                                    </div>
                                    <input type="range" min="2" max="15" step="0.5" value={objectDistance} onChange={(e) => setObjectDistance(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                                </div>
                            </div>

                            <div className="p-4 bg-slate-900/60 rounded-2xl border border-cyan-500/20">
                                <div className="text-[10px] font-bold text-cyan-400 uppercase mb-2 flex items-center gap-2">
                                    <span className="animate-pulse">🎯</span> Mission : {scenarios[scenario]?.name || 'Exploration'}
                                </div>
                                <p className="text-[11px] text-slate-300 leading-relaxed italic">
                                    &quot;{scenarios[scenario]?.mission || 'Explorez librement les propriétés optiques.'}&quot;
                                </p>
                                {scenarios[scenario]?.tip && (
                                    <div className="mt-3 p-2 bg-blue-500/10 rounded-lg border border-blue-500/10 text-[9px] text-blue-300">
                                        💡 Indice : {scenarios[scenario].tip}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-2">
                                <div className="p-3 bg-cyan-950/30 rounded-lg border border-cyan-500/20 text-center">
                                    <div className="text-[8px] text-cyan-400 font-black uppercase">Position Image (OA&apos;)</div>
                                    <div className="text-xl font-mono font-black">{imageDistance.toFixed(1)} cm</div>
                                </div>
                                <div className="p-3 bg-indigo-950/30 rounded-lg border border-indigo-500/20 text-center">
                                    <div className="text-[8px] text-indigo-400 font-black uppercase">Grandissement (γ)</div>
                                    <div className="text-xl font-mono font-black">{magnification.toFixed(2)}</div>
                                </div>
                            </div>

                            <div className={`p-3 rounded-xl text-center text-[10px] font-black uppercase tracking-wider ${isRealImage ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                                {isRealImage ? '✅ IMAGE RÉELLE : PROJETABLE SUR ÉCRAN' : '⚡ IMAGE VIRTUELLE : OBSERVABLE À TRAVERS LA LENTILLE'}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-cyan-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-cyan-900/40">
                                    Mission Suivante ➜
                                </button>
                            )}
                        </div>
                    )}
                    {/* <XPBar current={score % 100} nextLevel={100} /> */}
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Alignement Optique Réussi ! Ton image est d'une netteté absolue." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            <Line points={[[-10, 0, 0], [10, 0, 0]]} color="white" lineWidth={1} dashed dashScale={10} transparent opacity={0.3} />

            <group position={[0, 0, 0]}>
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[2, 0.05, 16, 64]} />
                    <meshStandardMaterial color={isConvergent ? "#22D3EE" : "#F43F5E"} metalness={1} roughness={0} />
                </mesh>
                {/* Corps de la lentille - Effet Verre */}
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <cylinderGeometry args={[2, 2, 0.2, 32]} />
                    <meshPhysicalMaterial
                        color={isConvergent ? "#22D3EE" : "#F43F5E"}
                        transmission={0.9}
                        thickness={0.5}
                        roughness={0}
                        ior={1.5}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.25} color="white" fontWeight="bold">
                    LENTILLE {lensType.toUpperCase()}
                </Text>
            </group>

            <group position={[-focalLength, 0, 0]}>
                <Sphere args={[0.1]}>
                    <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={2} />
                </Sphere>
                <Text position={[0, -0.5, 0]} fontSize={0.25} color="yellow">F</Text>
            </group>

            <group position={[focalLength, 0, 0]}>
                <Sphere args={[0.1]}>
                    <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={2} />
                </Sphere>
                <Text position={[0, -0.5, 0]} fontSize={0.25} color="orange">F&apos;</Text>
            </group>

            <group position={[-objectDistance, 0, 0]}>
                <Line points={[[0, 0, 0], [0, 1.5, 0]]} color="#F59E0B" lineWidth={5} />
                <mesh position={[0, 1.6, 0]}>
                    <coneGeometry args={[0.15, 0.3, 32]} />
                    <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.5} />
                </mesh>
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="#F59E0B">OBJET (A)</Text>
            </group>

            {showRays && isConvergent && (
                <group>
                    <Line points={[[-objectDistance, 1.5, 0], [0, 1.5, 0], [focalLength * 3, -1.5, 0]]} color="yellow" lineWidth={2} transparent opacity={0.6} />
                    <Line points={[[-objectDistance, 1.5, 0], [0, 0, 0], [imageDistance, -1.5 * (imageDistance / objectDistance), 0]]} color="cyan" lineWidth={2} transparent opacity={0.6} />
                </group>
            )}

            {isRealImage && (
                <group position={[imageDistance, 0, 0]}>
                    <Line points={[[0, 0, 0], [0, 1.5 * magnification, 0]]} color="#22D3EE" lineWidth={5} />
                    <mesh position={[0, 1.5 * magnification + (magnification < 0 ? -0.1 : 0.1), 0]} rotation={[0, 0, magnification < 0 ? Math.PI : 0]}>
                        <coneGeometry args={[0.15, 0.3, 32]} />
                        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.5} />
                    </mesh>
                    <Text position={[0, -0.5 * Math.sign(magnification), 0]} fontSize={0.2} color="#22D3EE">IMAGE (A&apos;)</Text>
                </group>
            )}
        </group>
    );
}

// CHAPITRE 2: DISPERSION DE LA LUMIÈRE (PC 3e)
// ============================================================
export function Chap2DispersionLumiere() {
    const [beamWidth, setBeamWidth] = useState(0.2);
    const [prismAngle, setPrismAngle] = useState(60);
    const [showSpectrum, setShowSpectrum] = useState(true);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [scenario, setScenario] = useState(null);

    const scenarios = {
        white: {
            name: 'Solaire',
            icon: '☀️',
            angle: 60,
            width: 0.5,
            desc: 'Spectre complet',
            mission: 'Décomposez la lumière du soleil pour observer toutes les couleurs de l&apos;arc-en-ciel.',
            fact: 'La lumière blanche est un mélange de toutes les radiations visibles.'
        },
        laser: {
            name: 'Laser',
            icon: '🔦',
            angle: 45,
            width: 0.1,
            desc: 'Monochromatique',
            mission: 'Observez qu&apos;une lumière laser ne se décompose pas en plusieurs couleurs.',
            fact: 'Un laser est constitué d&apos;une seule couleur (une seule longueur d&apos;onde).'
        },
        rainbow: {
            name: 'Arc-en-ciel',
            icon: '🌈',
            angle: 42,
            width: 0.3,
            desc: 'Phénomène météo',
            mission: 'Ajustez l&apos;angle pour créer la dispersion maximale des couleurs comme dans la nature.',
            fact: 'Chaque goutte de pluie agit comme un minuscule prisme.'
        }
    };

    const challenges = [
        { q: "Quelle couleur est la plus déviée par le prisme ?", options: ["Le Rouge", "Le Vert", "Le Violet"], ans: 2, icon: "🌈" },
        { q: "La lumière blanche est qualifiée de :", options: ["Monochromatique", "Polychromatique", "Achromatique"], ans: 1, icon: "⚪" },
        { q: "Le passage de l'air au verre dévie la lumière : c'est la...", options: ["Réflexion", "Réfraction", "Diffusion"], ans: 1, icon: "📐" },
        { q: "Un laser rouge traversant un prisme est-il décomposé ?", options: ["Oui, en 3 couleurs", "Non, il reste rouge", "Il devient blanc"], ans: 1, icon: "🔦" }
    ];

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setPrismAngle(sc.angle);
        setBeamWidth(sc.width);
        setScenario(key);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        const rand = Math.floor(Math.random() * challenges.length);
        setChallenge({ ...challenges[rand], answered: false });
        setShowSuccess(false);
    };

    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Dispersion incorrecte ! Révise le spectre de Newton.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🌈 Maître des Couleurs"
                    usePortal={true}
                    initialPos={{ x: 20, y: 80 }}
                    showCloseButton={false}
                    className="w-[400px] border-purple-500/30 text-white"
                >
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Laboratoire de Spectroscopie</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Étude du Prisme' : 'Défi Chromatique 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Manipulez l'angle du prisme pour observer le spectre complet." icon="🌈" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => applyScenario(key)}
                                        className="p-2 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-purple-900/40 transition-all">
                                        <span className="text-xl">{sc.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{sc.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>ANGLE DU PRISME</span>
                                        <span className="text-purple-400">{prismAngle}°</span>
                                    </div>
                                    <input type="range" min="30" max="90" value={prismAngle} onChange={(e) => setPrismAngle(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>LARGEUR DU FAISCEAU</span>
                                        <span className="text-white">{(beamWidth * 10).toFixed(1)} MM</span>
                                    </div>
                                    <input type="range" min="0.05" max="0.5" step="0.05" value={beamWidth} onChange={(e) => setBeamWidth(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white" />
                                </div>
                            </div>

                            <div className="p-4 bg-slate-900/60 rounded-2xl border border-purple-500/20">
                                <div className="text-[10px] font-bold text-purple-400 uppercase mb-2 flex items-center gap-2">
                                    <span className="animate-pulse">✨</span> Objectif : {scenarios[scenario]?.name || 'Exploration'}
                                </div>
                                <p className="text-[11px] text-slate-300 leading-relaxed italic">
                                    &quot;{scenarios[scenario]?.mission || 'Explorez la décomposition de la lumière.'}&quot;
                                </p>
                                {scenarios[scenario]?.fact && (
                                    <div className="mt-3 p-2 bg-purple-500/10 rounded-lg border border-purple-500/10 text-[9px] text-purple-300">
                                        🔍 Le saviez-vous ? {scenarios[scenario].fact}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-purple-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-purple-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-purple-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Analyse Spectrale Parfaite ! Tu identifies les ondes avec précision." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Faisceau Incident - Plus volumétrique */}
            <group position={[-5, 0, 0]}>
                <Box args={[10, beamWidth, 0.05]} position={[2.5, 0, 0]}>
                    <meshStandardMaterial color="white" emissive="white" emissiveIntensity={5} transparent opacity={0.8} />
                </Box>
                {/* Lueur du faisceau */}
                <Box args={[10, beamWidth * 2, 0.1]} position={[2.5, 0, 0]}>
                    <meshStandardMaterial color="#A5F3FC" transparent opacity={0.1} />
                </Box>
            </group>

            {/* Prisme - Effet Verre Réel */}
            <group position={[0, 0, 0]}>
                <mesh rotation={[0, 0, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 0.5, 3]} />
                    <meshPhysicalMaterial
                        color="#A5F3FC"
                        transmission={0.95}
                        thickness={1}
                        roughness={0}
                        metalness={0}
                        ior={1.5}
                        clearcoat={1}
                        transparent
                    />
                </mesh>
                <Text position={[0, 2, 0]} fontSize={0.2} color="#A5F3FC" fontWeight="bold">
                    PRISME EN VERRE FLINT
                </Text>
            </group>

            {/* Spectre Sortant - Faisceaux colorés */}
            {showSpectrum && (
                <group position={[1.4, 0, 0]} rotation={[0, 0, -0.2]}>
                    {colors.map((color, i) => (
                        <group key={i}>
                            <Box args={[8, 0.08, 0.01]} position={[4, 0.3 - i * 0.1, 0]} rotation={[0, 0, i * 0.04]}>
                                <meshStandardMaterial
                                    color={color}
                                    emissive={color}
                                    emissiveIntensity={2}
                                    transparent
                                    opacity={0.6}
                                />
                            </Box>
                            {/* Halo coloré */}
                            <Box args={[8, 0.15, 0.02]} position={[4, 0.3 - i * 0.1, 0]} rotation={[0, 0, i * 0.04]}>
                                <meshStandardMaterial color={color} transparent opacity={0.1} />
                            </Box>
                        </group>
                    ))}
                </group>
            )}
        </group>
    );
}


// ============================================================
// CHAPITRE 3: FORCES ET VECTEURS (PC 3e)
// ============================================================
export function Chap3ForcesVecteurs() {
    const [mass, setMass] = useState(5);
    const [planet, setPlanet] = useState('terre');
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const planets = {
        terre: { name: 'Terre', icon: '🌍', g: 10, color: '#3B82F6' },
        lune: { name: 'Lune', icon: '🌙', g: 1.6, color: '#94A3B8' },
        mars: { name: 'Mars', icon: '🔴', g: 3.7, color: '#EF4444' },
        jupiter: { name: 'Jupiter', icon: '🟠', g: 25, color: '#F59E0B' }
    };

    const scenarios = {
        sac: { name: 'Sac de riz', icon: '🎒', mass: 50, planet: 'terre', desc: '50 kg sur Terre' },
        astronaute: { name: 'Explorateur', icon: '👨‍🚀', mass: 80, planet: 'lune', desc: '80 kg sur la Lune' },
        voiture: { name: 'Véhicule', icon: '🚗', mass: 1000, planet: 'terre', desc: '1 tonne sur Terre' },
        pomme: { name: 'Lâcher libre', icon: '🍎', mass: 0.2, planet: 'terre', desc: '200g d\'accélération' }
    };

    const challenges = [
        { q: "Quelle est l'unité internationale de l'intensité d'une force ?", options: ["Le Kilogramme (kg)", "Le Newton (N)", "Le Joule (J)"], ans: 1, icon: "📏" },
        { q: "La formule du poids est P = m × g. Que représente 'g' ?", options: ["La gravité", "L'intensité de pesanteur", "Le grandissement"], ans: 1, icon: "🪐" },
        { q: "Si la masse d'un objet est de 10 kg, son poids sur Terre est environ :", options: ["1 N", "10 N", "100 N"], ans: 2, icon: "🎯" },
        { q: "La masse d'un astronaute est de 80kg sur Terre. Sur la Lune, elle est de :", options: ["13 kg", "80 kg", "0 kg"], ans: 1, icon: "🧠" }
    ];

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setMass(sc.mass);
        setPlanet(sc.planet);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        const rand = Math.floor(Math.random() * challenges.length);
        setChallenge({ ...challenges[rand], answered: false });
        setShowSuccess(false);
    };

    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Erreur de calcul. Relis la loi de Newton !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const gValue = planets[planet].g;
    const weight = mass * gValue;
    const forceScale = Math.min(weight / 100, 3);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🦾 Ingénieur Mécanique"
                    usePortal={true}
                    initialPos={{ x: 20, y: 80 }}
                    showCloseButton={false}
                    className="w-[400px] border-emerald-500/30 text-white"
                >
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Étude de la Gravité</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Dynamique des Forces' : 'Défi Newton 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Analysez l'influence de la masse et de la gravité sur le poids." icon="🪐" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => applyScenario(key)}
                                        className="p-2 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-emerald-900/40 transition-all">
                                        <span className="text-xl">{sc.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{sc.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(planets).map(([key, p]) => (
                                        <button key={key} onClick={() => setPlanet(key)}
                                            className={`p-2 rounded-lg text-[10px] font-bold border transition-all flex items-center gap-2 ${planet === key ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg' : 'bg-gray-800 border-white/5 text-gray-400'}`}>
                                            <span>{p.icon}</span>
                                            <span>{p.name}</span>
                                        </button>
                                    ))}
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>MASSE IDENTIFIÉE (m)</span>
                                        <span className="text-emerald-400">{mass} KG</span>
                                    </div>
                                    <input type="range" min={0.1} max={100} step={0.1} value={mass} onChange={(e) => setMass(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                                </div>
                            </div>

                            <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/30 text-center relative overflow-hidden">
                                <div className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-1">Intensité du Poids</div>
                                <div className="text-4xl font-black text-white">{weight.toFixed(1)} <span className="text-xl">N</span></div>
                                <div className="mt-2 text-[10px] font-mono text-gray-500">P = {mass}kg × {gValue}N/kg</div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-emerald-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-emerald-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                    {/* <XPBar current={score % 100} nextLevel={100} /> */}
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Succès Mécanique ! Les lois de la physique n'ont plus de secret pour toi." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Objet */}
            <Box args={[1.5, 1.5, 1.5]} position={[0, 1, 0]}>
                <meshStandardMaterial color={planets[planet].color} roughness={0.3} metalness={0.2} />
            </Box>
            <Text position={[0, 2.2, 0]} fontSize={0.3} color="white">MASSE = {mass} KG</Text>

            {/* Vecteur Poids */}
            <group position={[0, 0.5, 0]}>
                <Line points={[[0, 0, 0], [0, -forceScale, 0]]} color="#EF4444" lineWidth={8} />
                <mesh position={[0, -forceScale - 0.2, 0]} rotation={[0, 0, Math.PI]}>
                    <coneGeometry args={[0.2, 0.4, 16]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0.8, -forceScale / 2, 0]} fontSize={0.3} color="#EF4444">
                    P = {weight.toFixed(0)} N
                </Text>
            </group>

            {/* Sol */}
            <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[12, 12]} />
                <meshStandardMaterial color="#1E293B" />
            </mesh>
            <gridHelper args={[12, 12, "#334155", "#0F172A"]} position={[0, -0.49, 0]} rotation={[0, 0, 0]} />
        </group>
    );
}

// ============================================================
// CHAPITRE 4: TRAVAIL ET PUISSANCE (PC 3e)
// ============================================================
export function Chap4TravailPuissance() {
    const [force, setForce] = useState(100);
    const [distance, setDistance] = useState(10);
    const [time, setTime] = useState(5);
    const [angle, setAngle] = useState(0);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [animProgress, setAnimProgress] = useState(0);

    const scenarios = {
        porteur: { name: 'Porteur', icon: '🏋️', force: 500, distance: 10, time: 10, angle: 0, desc: 'Transport horizontal' },
        escalier: { name: 'Escalier', icon: '🪜', force: 700, distance: 5, time: 20, angle: 0, desc: 'Lutte contre le poids' },
        voiture: { name: 'Véhicule', icon: '🚗', force: 200, distance: 20, time: 60, angle: 30, desc: 'Pousser en diagonale' },
        athlete: { name: 'Sprinter', icon: '🏃', force: 800, distance: 100, time: 10, angle: 0, desc: 'Explosion de puissance' }
    };

    const challenges = [
        { q: "L'unité légale du travail mécanique est :", options: ["Le Newton (N)", "Le Watt (W)", "Le Joule (J)"], ans: 2, icon: "⚡" },
        { q: "La puissance est définie par le rapport :", options: ["P = W × t", "P = W / t", "P = F / d"], ans: 1, icon: "⏱️" },
        { q: "Si la force est perpendiculaire au déplacement, le travail est :", options: ["Maximum", "Nul", "Négatif"], ans: 1, icon: "📐" },
        { q: "Un moteur de 2 kW développe une puissance de :", options: ["200 W", "2000 W", "20000 W"], ans: 1, icon: "🧠" }
    ];

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setForce(sc.force);
        setDistance(sc.distance);
        setTime(sc.time);
        setAngle(sc.angle);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        const rand = Math.floor(Math.random() * challenges.length);
        setChallenge({ ...challenges[rand], answered: false });
        setShowSuccess(false);
    };

    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Erreur de calcul ! Analyse les unités.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const cosAngle = Math.cos(angle * Math.PI / 180);
    const work = force * distance * cosAngle;
    const power = work / time;

    useFrame((_, delta) => {
        setAnimProgress(p => (p + delta * 0.2) % 1);
    });

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="⚡ Ingénieur Énergie"
                    usePortal={true}
                    initialPos={{ x: 20, y: 80 }}
                    showCloseButton={false}
                    className="w-[400px] border-yellow-500/30 text-white"
                >
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Dynamique & Performance</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Étude du Travail' : 'Défi Puissance 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Optimisez le rendement en ajustant la force et le temps." icon="⚡" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => applyScenario(key)}
                                        className="p-2 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-yellow-900/40 transition-all">
                                        <span className="text-xl">{sc.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{sc.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>FORCE APPLIQUÉE (F)</span>
                                        <span className="text-yellow-400">{force} N</span>
                                    </div>
                                    <input type="range" min={10} max={1000} value={force} onChange={(e) => setForce(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>DISTANCE (d)</span>
                                        <span className="text-emerald-400">{distance} M</span>
                                    </div>
                                    <input type="range" min={1} max={100} value={distance} onChange={(e) => setDistance(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>DURÉE (t)</span>
                                        <span className="text-cyan-400">{time} S</span>
                                    </div>
                                    <input type="range" min={1} max={120} value={time} onChange={(e) => setTime(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3 bg-yellow-950/30 rounded-lg border border-yellow-500/20 text-center">
                                    <div className="text-[8px] text-yellow-400 font-black uppercase">Travail (W)</div>
                                    <div className="text-xl font-mono font-black">{work.toFixed(0)} J</div>
                                </div>
                                <div className="p-3 bg-red-950/30 rounded-lg border border-red-500/20 text-center">
                                    <div className="text-[8px] text-red-400 font-black uppercase">Puissance (P)</div>
                                    <div className="text-xl font-mono font-black">{power.toFixed(0)} W</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-yellow-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-yellow-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-yellow-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                    {/* <XPBar current={score % 100} nextLevel={100} /> */}
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Énergie Maîtrisée ! Ton analyse de la puissance est parfaite." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Animation objet */}
            <Box args={[1.2, 1.2, 1.2]} position={[-4 + animProgress * 8, 0.6, 0]}>
                <meshStandardMaterial color="#F59E0B" metalness={0.5} roughness={0.2} />
            </Box>

            {/* Vecteur Force */}
            <group position={[-4 + animProgress * 8, 0.6, 0]} rotation={[0, 0, angle * Math.PI / 180]}>
                <Line points={[[0, 0, 0], [2, 0, 0]]} color="#FACC15" lineWidth={6} />
                <mesh position={[2.1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.15, 0.3, 16]} />
                    <meshStandardMaterial color="#FACC15" emissive="#FACC15" emissiveIntensity={2} />
                </mesh>
            </group>

            {/* Distance Scale */}
            <Line points={[[-4, -0.5, 0], [4, -0.5, 0]]} color="#10B981" lineWidth={2} dashed dashScale={1} transparent opacity={0.3} />
            <Text position={[0, -1, 0]} fontSize={0.3} color="#10B981">DISTANCE = {distance} M</Text>

            {/* Sol */}
            <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[14, 6]} />
                <meshStandardMaterial color="#0F172A" />
            </mesh>
            <gridHelper args={[14, 6, "#1E293B", "#334155"]} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        </group>
    );
}

// ============================================================
// CHAPITRE 5: ÉLECTRISATION PAR FROTTEMENT (PC 3e)
// ============================================================
export function Chap5Electrisation() {
    const [object1, setObject1] = useState('regle');
    const [object2, setObject2] = useState('tissu');
    const [frictionCount, setFrictionCount] = useState(0);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const objects = {
        regle: { name: 'Règle', icon: '📏', charge: 'negative', color: '#F87171', desc: 'Plastique' },
        ballon: { name: 'Ballon', icon: '🎈', charge: 'negative', color: '#FB923C', desc: 'Caoutchouc' },
        verre: { name: 'Verre', icon: '🥃', charge: 'positive', color: '#60A5FA', desc: 'Bâton' },
        ebonite: { name: 'Ébonite', icon: '⬛', charge: 'negative', color: '#4B5563', desc: 'Isolant dur' }
    };

    const frictionMaterials = {
        tissu: { name: 'Tissu', icon: '👕', effect: 'Don' },
        laine: { name: 'Laine', icon: '🧶', effect: 'Perte' },
        cheveux: { name: 'Cheveux', icon: '👩', effect: 'Perte' },
        soie: { name: 'Soie', icon: '🧣', effect: 'Don' }
    };

    const challenges = [
        { q: "Deux corps portant des charges de même signe :", options: ["S'attirent", "Se repoussent", "S'annulent"], ans: 1, icon: "⚡" },
        { q: "Quel constituant de l'atome porte une charge négative ?", options: ["Le Proton", "Le Neutron", "L'Électron"], ans: 2, icon: "⚛️" },
        { q: "Un corps électriquement neutre possède :", options: ["Autant de + que de -", "Uniquement des +", "Aucune charge"], ans: 0, icon: "⚖️" },
        { q: "Lors d'un frottement, ce sont les ... qui se déplacent :", options: ["Protons", "Électrons", "Neutrons"], ans: 1, icon: "🏃" }
    ];

    const doFriction = () => {
        setFrictionCount(c => Math.min(c + 1, 10));
    };

    const resetCharges = () => {
        setFrictionCount(0);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        const rand = Math.floor(Math.random() * challenges.length);
        setChallenge({ ...challenges[rand], answered: false });
        setShowSuccess(false);
    };

    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Analyse de charge incorrecte. Révise la statique !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const chargeLevel = frictionCount / 10;
    const isCharged = frictionCount > 0;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="⚡ Maître des Charges"
                    usePortal={true}
                    initialPos={{ x: 20, y: 80 }}
                    showCloseButton={false}
                    className="w-[400px] border-blue-500/30 text-white"
                >
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Électricité Statique</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Atelier d\'Électrisation' : 'Défi Atomique 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Frottez les matériaux pour transférer des électrons." icon="⚡" />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <span className="text-[8px] text-gray-500 font-black uppercase">Objet à charger</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        {Object.entries(objects).map(([k, o]) => (
                                            <button key={k} onClick={() => { setObject1(k); resetCharges(); }}
                                                className={`p-2 rounded-xl flex flex-col items-center border transition-all ${object1 === k ? 'bg-blue-600 border-blue-400 shadow-lg' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                                <span className="text-xl">{o.icon}</span>
                                                <span className="text-[8px] font-black uppercase">{o.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[8px] text-gray-500 font-black uppercase">Frotter avec</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        {Object.entries(frictionMaterials).map(([k, m]) => (
                                            <button key={k} onClick={() => { setObject2(k); resetCharges(); }}
                                                className={`p-2 rounded-xl flex flex-col items-center border transition-all ${object2 === k ? 'bg-indigo-600 border-indigo-400 shadow-lg' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                                <span className="text-xl">{m.icon}</span>
                                                <span className="text-[8px] font-black uppercase">{m.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button onClick={doFriction}
                                className="w-full py-6 rounded-2xl font-black text-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-900/40 relative overflow-hidden group">
                                <div className="flex flex-col items-center">
                                    <span className="text-[10px] text-blue-200 uppercase tracking-[0.2em] mb-1">Action de Frottement</span>
                                    <span className="flex items-center gap-3">⚡ FROTTER L&apos;OBJET ! <span className="bg-black/20 px-3 py-1 rounded-full text-xs">{frictionCount}/10</span></span>
                                </div>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                            </button>

                            <div className="bg-black/40 p-4 rounded-2xl border border-white/10">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] text-gray-500 font-black uppercase">Polarité acquise</span>
                                        <span className={`text-xs font-black ${isCharged ? (objects[object1].charge === 'negative' ? 'text-red-400' : 'text-emerald-400') : 'text-gray-600'}`}>
                                            {isCharged ? (objects[object1].charge === 'negative' ? '⊝ EXCÈS D\'ÉLECTRONS' : '⊕ DÉFICIT D\'ÉLECTRONS') : 'SYSTÈME NEUTRE'}
                                        </span>
                                    </div>
                                    <button onClick={resetCharges} className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs">🔄</button>
                                </div>
                                <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                                    <div className={`h-full transition-all duration-300 ${objects[object1].charge === 'negative' ? 'bg-red-500' : 'bg-emerald-500'}`}
                                        style={{ width: `${chargeLevel * 100}%` }} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-blue-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-blue-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-900/40">
                                    Question Suivante ➜
                                </button>
                            )}
                        </div>
                    )}
                    {/* <XPBar current={score % 100} nextLevel={100} /> */}
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Analyse Atomique Réussie ! Tu as parfaitement stabilisé les charges." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Objet */}
            <Box args={[4, 0.3, 0.6]} position={[0, 0, 0]}>
                <meshStandardMaterial color={objects[object1].color} roughness={0.1} metalness={0.8} />
            </Box>

            {/* Charges */}
            {isCharged && Array.from({ length: Math.floor(frictionCount) }).map((_, i) => (
                <Float key={i} speed={4} floatIntensity={0.8}>
                    <Text
                        position={[-1.5 + i * 0.4, 0.5, 0]}
                        fontSize={0.3}
                        color={objects[object1].charge === 'negative' ? "#F87171" : "#34D399"}>
                        {objects[object1].charge === 'negative' ? '−' : '+'}
                    </Text>
                </Float>
            ))}

            {/* Effet d'attraction */}
            {isCharged && chargeLevel > 0.4 && (
                <group position={[0, -1.8, 0]}>
                    {[...Array(5)].map((_, i) => (
                        <Float key={i} speed={5} rotationIntensity={2} floatIntensity={1.5}>
                            <Box args={[0.2, 0.2, 0.05]} position={[-1 + i * 0.5, chargeLevel * 1.2, 0]}>
                                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
                            </Box>
                        </Float>
                    ))}
                    <Text position={[0, -0.5, 0]} fontSize={0.25} color="#60A5FA">ATTRACTION ÉLECTROSTATIQUE</Text>
                </group>
            )}

            <Float speed={2} rotationIntensity={0.1}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="white">
                    {objects[object1].name.toUpperCase()}
                </Text>
            </Float>
        </group>
    );
}


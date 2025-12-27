'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Sphere, Box, Cylinder, Line, Float } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';
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

    const scenarios = {
        loupe: { name: '🔍 Loupe', f: 2, d: 4, type: 'convergente', desc: 'Grossir un texte' },
        oeil: { name: '👁️ Œil', f: 1.7, d: 10, type: 'convergente', desc: 'Vision normale' },
        myope: { name: '👓 Myope', f: -3, d: 8, type: 'divergente', desc: 'Correction myopie' },
        appareil: { name: '📷 Appareil Photo', f: 5, d: 20, type: 'convergente', desc: 'Photo nette' }
    };

    const challenges = [
        { q: "Une lentille convergente est plus épaisse :", options: ["Au bord", "Au centre", "Partout pareille"], ans: 1 },
        { q: "Les rayons parallèles convergent vers :", options: ["Le centre O", "Le foyer F'", "L'infini"], ans: 1 },
        { q: "Un rayon passant par O est :", options: ["Dévié vers F", "Non dévié", "Réfléchi"], ans: 1 },
        { q: "La vergence C = 1/f est exprimée en :", options: ["Mètres", "Dioptries (δ)", "Newton"], ans: 1 }
    ];

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setLensType(sc.type);
        setFocalLength(Math.abs(sc.f));
        setObjectDistance(sc.d);
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
            alert("Ce n'est pas la bonne réponse, essaie encore !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    // Calcul image
    const isConvergent = lensType === 'convergente';
    const f = isConvergent ? focalLength : -focalLength;
    const imageDistance = objectDistance * f / (objectDistance - f);
    const magnification = -imageDistance / objectDistance;
    const isRealImage = isConvergent && objectDistance > focalLength;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔭 Lentilles Minces" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-cyan-500/30 text-white">
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Scénarios</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(scenarios).map(([key, sc]) => (
                                        <button key={key} onClick={() => applyScenario(key)}
                                            className="p-2 bg-gray-800 rounded-lg text-xs hover:bg-gray-700 text-left">
                                            <div className="font-bold">{sc.name}</div>
                                            <div className="text-gray-400 text-[10px]">{sc.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contrôles */}
                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <button onClick={() => setLensType('convergente')}
                                        className={`flex-1 py-2 rounded text-sm ${lensType === 'convergente' ? 'bg-green-600' : 'bg-gray-700'}`}>
                                        ⊕ Convergente
                                    </button>
                                    <button onClick={() => setLensType('divergente')}
                                        className={`flex-1 py-2 rounded text-sm ${lensType === 'divergente' ? 'bg-red-600' : 'bg-gray-700'}`}>
                                        ⊖ Divergente
                                    </button>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Distance focale f</span>
                                        <span className="text-cyan-400">{focalLength} cm</span>
                                    </div>
                                    <input type="range" min="1" max="8" step="0.5" value={focalLength}
                                        onChange={(e) => setFocalLength(parseFloat(e.target.value))}
                                        className="w-full accent-cyan-500" />
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Distance objet OA</span>
                                        <span className="text-orange-400">{objectDistance} cm</span>
                                    </div>
                                    <input type="range" min="2" max="15" step="0.5" value={objectDistance}
                                        onChange={(e) => setObjectDistance(parseFloat(e.target.value))}
                                        className="w-full accent-orange-500" />
                                </div>

                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" checked={showRays} onChange={(e) => setShowRays(e.target.checked)} className="accent-yellow-500" />
                                    Afficher les rayons
                                </label>
                            </div>

                            {/* Résultats */}
                            <div className="mt-4 p-3 bg-gray-900 rounded-lg border border-white/10">
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span className="text-gray-400">Image à</span>
                                        <div className="text-lg font-mono text-cyan-300">{imageDistance.toFixed(1)} cm</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Grandissement</span>
                                        <div className="text-lg font-mono text-purple-300">γ = {magnification.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className={`mt-2 p-2 rounded text-center text-sm ${isRealImage ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                    {isRealImage ? '✓ Image RÉELLE (projetable)' : '○ Image VIRTUELLE'}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-xl border border-purple-500/50">
                            <h3 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
                                <span>🧠</span> Quiz Optique
                            </h3>
                            {challenge && (
                                <div className="space-y-4">
                                    <div className="text-sm font-medium">{challenge.q}</div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors text-sm">
                                                {['A', 'B', 'C'][idx]}. {opt}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">
                                            Question suivante →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            {/* Axe optique */}
            <Line points={[[-8, 0, 0], [8, 0, 0]]} color="white" lineWidth={1} dashed dashScale={10} />

            {/* Lentille 3D */}
            <group position={[0, 0, 0]}>
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[2, 0.1, 16, 32]} />
                    <meshStandardMaterial color={isConvergent ? "#00ff88" : "#ff4444"} transparent opacity={0.8} />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="white">
                    {isConvergent ? 'Lentille Convergente' : 'Lentille Divergente'}
                </Text>
            </group>

            {/* Foyers */}
            <Sphere args={[0.1]} position={[-focalLength, 0, 0]}>
                <meshStandardMaterial color="yellow" />
            </Sphere>
            <Text position={[-focalLength, -0.4, 0]} fontSize={0.2} color="yellow">F</Text>

            <Sphere args={[0.1]} position={[focalLength, 0, 0]}>
                <meshStandardMaterial color="orange" />
            </Sphere>
            <Text position={[focalLength, -0.4, 0]} fontSize={0.2} color="orange">F'</Text>

            {/* Objet */}
            <Line points={[[-objectDistance, 0, 0], [-objectDistance, 1.5, 0]]} color="red" lineWidth={3} />
            <mesh position={[-objectDistance, 1.6, 0]}>
                <coneGeometry args={[0.15, 0.3, 8]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <Text position={[-objectDistance, -0.4, 0]} fontSize={0.2} color="red">A</Text>

            {/* Rayons (si activés) */}
            {
                showRays && isConvergent && (
                    <group>
                        {/* Rayon parallèle -> F' */}
                        <Line points={[[-objectDistance, 1.5, 0], [0, 1.5, 0], [focalLength * 2, 0, 0]]} color="yellow" lineWidth={2} />
                        {/* Rayon par O */}
                        <Line points={[[-objectDistance, 1.5, 0], [0, 0, 0], [imageDistance, imageDistance * magnification * -1, 0]]} color="cyan" lineWidth={2} />
                    </group>
                )
            }

            <SuccessOverlay show={showSuccess} message="Bonne réponse !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
        </group >
    );
}

// ============================================================
// CHAPITRE 2: DISPERSION DE LA LUMIÈRE (PC 3e)
// ============================================================
export function Chap2DispersionLumiere() {
    const [prismAngle, setPrismAngle] = useState(60);
    const [lightType, setLightType] = useState('white');
    const [showSpectrum, setShowSpectrum] = useState(true);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const spectrumColors = ['#ff0000', '#ff7700', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    const colorNames = ['Rouge', 'Orange', 'Jaune', 'Vert', 'Bleu', 'Indigo', 'Violet'];

    const scenarios = {
        arcenciel: { name: '🌈 Arc-en-ciel', angle: 42, light: 'white', desc: 'Après la pluie' },
        prisme: { name: '🔺 Prisme Newton', angle: 60, light: 'white', desc: 'Expérience historique' },
        laser: { name: '🔴 Laser Rouge', angle: 60, light: 'red', desc: 'Lumière monochromatique' },
        cd: { name: '💿 CD/DVD', angle: 30, light: 'white', desc: 'Diffraction' }
    };

    const challenges = [
        { q: "Combien de couleurs dans l'arc-en-ciel ?", options: ["5", "7", "12"], ans: 1 },
        { q: "Quelle couleur est la plus déviée ?", options: ["Rouge", "Jaune", "Violet"], ans: 2 },
        { q: "La lumière blanche est :", options: ["Monochromatique", "Polychromatique", "Incolore"], ans: 1 },
        { q: "ROY G. BIV représente :", options: ["Les planètes", "Les couleurs du spectre", "Les métaux"], ans: 1 }
    ];

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setPrismAngle(sc.angle);
        setLightType(sc.light);
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
            alert("Ce n'est pas la bonne réponse !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌈 Dispersion de la Lumière" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-purple-500/30 text-white">
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-purple-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-indigo-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Scénarios</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(scenarios).map(([key, sc]) => (
                                        <button key={key} onClick={() => applyScenario(key)}
                                            className="p-2 bg-gray-800 rounded-lg text-xs hover:bg-gray-700 text-left">
                                            <div className="font-bold">{sc.name}</div>
                                            <div className="text-gray-400 text-[10px]">{sc.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contrôles */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Angle du prisme</span>
                                        <span className="text-purple-400">{prismAngle}°</span>
                                    </div>
                                    <input type="range" min="30" max="90" value={prismAngle}
                                        onChange={(e) => setPrismAngle(parseInt(e.target.value))}
                                        className="w-full accent-purple-500" />
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={() => setLightType('white')}
                                        className={`flex-1 py-2 rounded text-sm ${lightType === 'white' ? 'bg-white text-black' : 'bg-gray-700'}`}>
                                        ☀️ Blanche
                                    </button>
                                    <button onClick={() => setLightType('red')}
                                        className={`flex-1 py-2 rounded text-sm ${lightType === 'red' ? 'bg-red-600' : 'bg-gray-700'}`}>
                                        🔴 Rouge
                                    </button>
                                    <button onClick={() => setLightType('green')}
                                        className={`flex-1 py-2 rounded text-sm ${lightType === 'green' ? 'bg-green-600' : 'bg-gray-700'}`}>
                                        🟢 Vert
                                    </button>
                                </div>

                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" checked={showSpectrum} onChange={(e) => setShowSpectrum(e.target.checked)} className="accent-yellow-500" />
                                    Afficher le spectre
                                </label>
                            </div>

                            {/* Spectre */}
                            {showSpectrum && lightType === 'white' && (
                                <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-2">Spectre visible (380-780 nm)</div>
                                    <div className="flex h-8 rounded overflow-hidden">
                                        {spectrumColors.map((color, i) => (
                                            <div key={i} className="flex-1" style={{ backgroundColor: color }} title={colorNames[i]} />
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                        {colorNames.map((name, i) => <span key={i}>{name[0]}</span>)}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-xl border border-indigo-500/50">
                            <h3 className="text-indigo-300 font-bold mb-4">🧠 Quiz Lumière</h3>
                            {challenge && (
                                <div className="space-y-4">
                                    <div className="text-sm font-medium">{challenge.q}</div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                                {['A', 'B', 'C'][idx]}. {opt}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-2 bg-indigo-600 rounded font-bold">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            {/* Prisme 3D */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
                <cylinderGeometry args={[2, 2, 0.5, 3]} />
                <meshStandardMaterial color="#4488ff" transparent opacity={0.6} />
            </mesh>

            {/* Rayon incident */}
            <Line points={[[-5, 1, 0], [-1, 0, 0]]} color={lightType === 'white' ? 'white' : lightType} lineWidth={4} />

            {/* Rayons dispersés */}
            {lightType === 'white' && showSpectrum && spectrumColors.map((color, i) => (
                <Line key={i}
                    points={[[1, 0, 0], [5, -1.5 + i * 0.5, 0]]}
                    color={color}
                    lineWidth={2}
                />
            ))}

            {lightType !== 'white' && (
                <Line points={[[1, 0, 0], [5, -0.5, 0]]} color={lightType} lineWidth={4} />
            )}

            <Text position={[0, 3, 0]} fontSize={0.4} color="white">
                {lightType === 'white' ? 'Lumière Polychromatique' : 'Lumière Monochromatique'}
            </Text>

            <SuccessOverlay show={showSuccess} message="Excellent !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// CHAPITRE 3: FORCES ET VECTEURS (PC 3e)
// ============================================================
export function Chap3ForcesVecteurs() {
    const [mass, setMass] = useState(5);
    const [planet, setPlanet] = useState('terre');
    const [showComponents, setShowComponents] = useState(true);
    const [forceAngle, setForceAngle] = useState(0);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const planets = {
        terre: { name: '🌍 Terre', g: 10, color: '#4488ff' },
        lune: { name: '🌙 Lune', g: 1.6, color: '#888888' },
        mars: { name: '🔴 Mars', g: 3.7, color: '#ff4444' },
        jupiter: { name: '🟠 Jupiter', g: 25, color: '#ffaa00' }
    };

    const scenarios = {
        sac: { name: '🎒 Sac de riz 50kg', mass: 50, planet: 'terre', desc: 'Au marché Sandaga' },
        astronaute: { name: '👨‍🚀 Astronaute', mass: 80, planet: 'lune', desc: 'Sur la Lune' },
        voiture: { name: '🚗 Voiture 1000kg', mass: 1000, planet: 'terre', desc: 'Force de friction' },
        pomme: { name: '🍎 Pomme 200g', mass: 0.2, planet: 'terre', desc: 'Chute libre' }
    };

    const challenges = [
        { q: "L'unité de la force est :", options: ["Le kilogramme", "Le Newton", "Le Joule"], ans: 1 },
        { q: "P = m × g donne P en :", options: ["kg", "N", "m/s²"], ans: 1 },
        { q: "Sur la Lune, la masse d'un objet :", options: ["Augmente", "Diminue", "Ne change pas"], ans: 2 },
        { q: "Un objet de 10 kg pèse sur Terre :", options: ["10 N", "100 N", "1000 N"], ans: 1 }
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
            alert("Réessaie !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const g = planets[planet].g;
    const weight = mass * g;
    const forceScale = Math.min(weight / 100, 3);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="💪 Forces et Vecteurs" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-green-500/30 text-white">
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-green-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-orange-600' : 'bg-gray-700'}`}>Défi 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Scénarios</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(scenarios).map(([key, sc]) => (
                                        <button key={key} onClick={() => applyScenario(key)}
                                            className="p-2 bg-gray-800 rounded-lg text-xs hover:bg-gray-700 text-left">
                                            <div className="font-bold">{sc.name}</div>
                                            <div className="text-gray-400 text-[10px]">{sc.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Planètes */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Lieu</div>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(planets).map(([key, p]) => (
                                        <button key={key} onClick={() => setPlanet(key)}
                                            className={`px-3 py-1 rounded text-xs ${planet === key ? 'ring-2 ring-white' : ''}`}
                                            style={{ backgroundColor: p.color + '40' }}>
                                            {p.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contrôles */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Masse m</span>
                                        <span className="text-green-400">{mass} kg</span>
                                    </div>
                                    <input type="range" min={0.1} max={100} step={0.1} value={mass}
                                        onChange={(e) => setMass(parseFloat(e.target.value))}
                                        className="w-full accent-green-500" />
                                </div>
                            </div>

                            {/* Résultats */}
                            <div className="mt-4 p-3 bg-gray-900 rounded-lg border border-green-500/30">
                                <div className="text-center">
                                    <div className="text-gray-400 text-xs">g = {g} N/kg</div>
                                    <div className="text-3xl font-bold text-green-400 my-2">P = {weight.toFixed(1)} N</div>
                                    <div className="text-xs text-gray-400">P = m × g = {mass} × {g}</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-xl border border-orange-500/50">
                            <h3 className="text-orange-300 font-bold mb-4">🧠 Quiz Forces</h3>
                            {challenge && (
                                <div className="space-y-4">
                                    <div className="text-sm font-medium">{challenge.q}</div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                                {['A', 'B', 'C'][idx]}. {opt}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-2 bg-orange-600 rounded font-bold">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            {/* Objet (cube) */}
            <Box args={[1.5, 1.5, 1.5]} position={[0, 1, 0]}>
                <meshStandardMaterial color={planets[planet].color} />
            </Box>
            <Text position={[0, 2.2, 0]} fontSize={0.3} color="white">m = {mass} kg</Text>

            {/* Vecteur Poids */}
            <group position={[0, 0.5, 0]}>
                <Line points={[[0, 0, 0], [0, -forceScale, 0]]} color="red" lineWidth={5} />
                <mesh position={[0, -forceScale - 0.15, 0]} rotation={[0, 0, Math.PI]}>
                    <coneGeometry args={[0.15, 0.3, 8]} />
                    <meshStandardMaterial color="red" />
                </mesh>
                <Text position={[0.5, -forceScale / 2, 0]} fontSize={0.25} color="red">
                    P = {weight.toFixed(0)} N
                </Text>
            </group>

            {/* Sol */}
            <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#333333" />
            </mesh>

            <SuccessOverlay show={showSuccess} message="Bravo !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
        porteur: { name: '🏋️ Porteur 500N', force: 500, distance: 10, time: 10, angle: 0, desc: 'Sac de riz horizontal' },
        escalier: { name: '🪜 Monter escalier', force: 700, distance: 5, time: 20, angle: 0, desc: 'Travail contre le poids' },
        voiture: { name: '🚗 Pousser voiture', force: 200, distance: 20, time: 60, angle: 30, desc: 'Force oblique' },
        athlete: { name: '🏃 Sprinter', force: 800, distance: 100, time: 10, angle: 0, desc: 'Puissance maximale' }
    };

    const challenges = [
        { q: "W = F × d donne W en :", options: ["Newton", "Watt", "Joule"], ans: 2 },
        { q: "P = W / t donne P en :", options: ["Joule", "Watt", "Newton"], ans: 1 },
        { q: "1 kW = ", options: ["100 W", "1000 W", "10000 W"], ans: 1 },
        { q: "Force ⊥ déplacement → Travail :", options: ["Maximum", "Nul", "Négatif"], ans: 1 }
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
            alert("Essaie encore !");
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
                <DraggableHtmlPanel title="⚡ Travail et Puissance" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-yellow-500/30 text-white">
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-red-600' : 'bg-gray-700'}`}>Défi 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Scénarios</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(scenarios).map(([key, sc]) => (
                                        <button key={key} onClick={() => applyScenario(key)}
                                            className="p-2 bg-gray-800 rounded-lg text-xs hover:bg-gray-700 text-left">
                                            <div className="font-bold">{sc.name}</div>
                                            <div className="text-gray-400 text-[10px]">{sc.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contrôles */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Force F</span><span className="text-yellow-400">{force} N</span>
                                    </div>
                                    <input type="range" min={10} max={1000} value={force}
                                        onChange={(e) => setForce(parseInt(e.target.value))}
                                        className="w-full accent-yellow-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Distance d</span><span className="text-green-400">{distance} m</span>
                                    </div>
                                    <input type="range" min={1} max={100} value={distance}
                                        onChange={(e) => setDistance(parseInt(e.target.value))}
                                        className="w-full accent-green-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs">
                                        <span>Temps t</span><span className="text-blue-400">{time} s</span>
                                    </div>
                                    <input type="range" min={1} max={120} value={time}
                                        onChange={(e) => setTime(parseInt(e.target.value))}
                                        className="w-full accent-blue-500" />
                                </div>
                            </div>

                            {/* Résultats */}
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 text-center">
                                    <div className="text-xs text-gray-400">Travail W</div>
                                    <div className="text-2xl font-bold text-yellow-400">{work.toFixed(0)} J</div>
                                    <div className="text-[10px] text-gray-500">= F × d × cos(α)</div>
                                </div>
                                <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30 text-center">
                                    <div className="text-xs text-gray-400">Puissance P</div>
                                    <div className="text-2xl font-bold text-red-400">{power.toFixed(0)} W</div>
                                    <div className="text-[10px] text-gray-500">= W / t</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-xl border border-red-500/50">
                            <h3 className="text-red-300 font-bold mb-4">🧠 Quiz Énergie</h3>
                            {challenge && (
                                <div className="space-y-4">
                                    <div className="text-sm font-medium">{challenge.q}</div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                                {['A', 'B', 'C'][idx]}. {opt}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-2 bg-red-600 rounded font-bold">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            {/* Animation objet */}
            <Box args={[1, 1, 1]} position={[-3 + animProgress * 6, 0.5, 0]}>
                <meshStandardMaterial color="#ffaa00" />
            </Box>

            {/* Vecteur Force */}
            <group position={[-3 + animProgress * 6, 0.5, 0]}>
                <Line points={[[0, 0, 0], [1.5, 0, 0]]} color="yellow" lineWidth={4} />
                <mesh position={[1.65, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.1, 0.2, 8]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>
            </group>

            {/* Distance */}
            <Line points={[[-3, -0.5, 0], [3, -0.5, 0]]} color="green" lineWidth={2} dashed dashScale={5} />
            <Text position={[0, -0.8, 0]} fontSize={0.25} color="green">d = {distance} m</Text>

            {/* Sol */}
            <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 5]} />
                <meshStandardMaterial color="#444444" />
            </mesh>

            <SuccessOverlay show={showSuccess} message="Super !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
    const [showField, setShowField] = useState(true);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const objects = {
        regle: { name: '📏 Règle plastique', charge: 'negative', color: '#ff4444' },
        ballon: { name: '🎈 Ballon', charge: 'negative', color: '#ff8800' },
        verre: { name: '🥃 Bâton de verre', charge: 'positive', color: '#4488ff' },
        ebonite: { name: '⬛ Ébonite', charge: 'negative', color: '#333333' }
    };

    const frictionMaterials = {
        tissu: { name: '👕 Tissu', effect: 'Donne des électrons' },
        laine: { name: '🧶 Laine', effect: 'Perd des électrons' },
        cheveux: { name: '👩 Cheveux', effect: 'Perd des électrons' },
        soie: { name: '🧣 Soie', effect: 'Donne des électrons' }
    };

    const challenges = [
        { q: "Charges de même signe :", options: ["S'attirent", "Se repoussent", "Restent neutres"], ans: 1 },
        { q: "L'électron a une charge :", options: ["Positive", "Négative", "Nulle"], ans: 1 },
        { q: "Un objet neutre a :", options: ["Que des +", "Que des -", "Autant de + que de -"], ans: 2 },
        { q: "L'électrisation par frottement :", options: ["Crée des charges", "Transfère des électrons", "Détruit des protons"], ans: 1 }
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
            alert("Non, essaie encore !");
        }
        setChallenge({ ...challenge, answered: true });
    };

    const chargeLevel = frictionCount / 10;
    const isCharged = frictionCount > 0;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Électrisation" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-blue-500/30 text-white">
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            {/* Choix objets */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Objet à charger</div>
                                    <select value={object1} onChange={(e) => { setObject1(e.target.value); resetCharges(); }}
                                        className="w-full p-2 bg-gray-800 rounded text-sm">
                                        {Object.entries(objects).map(([k, o]) => (
                                            <option key={k} value={k}>{o.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Frotter avec</div>
                                    <select value={object2} onChange={(e) => { setObject2(e.target.value); resetCharges(); }}
                                        className="w-full p-2 bg-gray-800 rounded text-sm">
                                        {Object.entries(frictionMaterials).map(([k, o]) => (
                                            <option key={k} value={k}>{o.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Bouton frotter */}
                            <button onClick={doFriction}
                                className="w-full py-4 mb-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform active:scale-95">
                                🤚 FROTTER ! ({frictionCount}/10)
                            </button>

                            {/* Jauge de charge */}
                            <div className="mb-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>Niveau de charge</span>
                                    <span className={isCharged ? 'text-yellow-400' : 'text-gray-400'}>
                                        {isCharged ? `${objects[object1].charge === 'negative' ? '➖' : '➕'} Chargé !` : 'Neutre'}
                                    </span>
                                </div>
                                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                                        style={{ width: `${chargeLevel * 100}%` }} />
                                </div>
                            </div>

                            {isCharged && (
                                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 text-center">
                                    <div className="text-2xl mb-1">✨</div>
                                    <div className="text-sm">L'objet peut maintenant attirer des petits papiers !</div>
                                </div>
                            )}

                            <button onClick={resetCharges}
                                className="w-full py-2 mt-3 rounded bg-gray-700 text-sm hover:bg-gray-600">
                                🔄 Décharger (toucher le sol)
                            </button>
                        </>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-xl border border-purple-500/50">
                            <h3 className="text-purple-300 font-bold mb-4">🧠 Quiz Électricité</h3>
                            {challenge && (
                                <div className="space-y-4">
                                    <div className="text-sm font-medium">{challenge.q}</div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                                {['A', 'B', 'C'][idx]}. {opt}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            {/* Objet principal (règle) */}
            <Box args={[3, 0.2, 0.5]} position={[0, 0, 0]}>
                <meshStandardMaterial color={objects[object1].color} />
            </Box>

            {/* Charges visuelles */}
            {isCharged && Array.from({ length: Math.floor(frictionCount) }).map((_, i) => (
                <Float key={i} speed={2} floatIntensity={0.5}>
                    <Text
                        position={[-1.2 + i * 0.3, 0.3, 0]}
                        fontSize={0.2}
                        color={objects[object1].charge === 'negative' ? '#ff4444' : '#44ff44'}>
                        {objects[object1].charge === 'negative' ? '−' : '+'}
                    </Text>
                </Float>
            ))}

            {/* Petits papiers attirés */}
            {isCharged && chargeLevel > 0.3 && (
                <group position={[0, -1.5, 0]}>
                    {[0, 1, 2].map(i => (
                        <Float key={i} speed={3} floatIntensity={chargeLevel}>
                            <Box args={[0.15, 0.15, 0.02]} position={[-0.3 + i * 0.3, chargeLevel * 0.5, 0]}>
                                <meshStandardMaterial color="white" />
                            </Box>
                        </Float>
                    ))}
                </group>
            )}

            <Text position={[0, 1.5, 0]} fontSize={0.3} color="white">
                {objects[object1].name}
            </Text>

            <SuccessOverlay show={showSuccess} message="Correct !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

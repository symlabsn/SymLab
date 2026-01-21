'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { ScoreDisplay, ProgressBar, GameButton } from './SVT6SimulationsAdvanced';

const ScenarioSelector = ({ scenarios, current, onChange, title }) => (
    <div className="space-y-2">
        <div className="text-xs text-gray-400">{title}</div>
        <div className="grid grid-cols-2 gap-1">
            {scenarios.map((s, i) => (
                <button key={i} onClick={() => onChange(i)}
                    className={`p-2 rounded-lg text-xs text-left transition-all ${current === i ? 'bg-cyan-500/30 border border-cyan-500' : 'bg-white/10 hover:bg-white/20'}`}>
                    <div className="font-bold">{s.emoji} {s.name}</div>
                    <div className="text-gray-400 text-[10px]">{s.difficulty}</div>
                </button>
            ))}
        </div>
    </div>
);

// ============================================================================
// 4. PHOTOSYNTHÈSE - 4 SCÉNARIOS
// ============================================================================
export function Photosynthesis() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [sunIntensity, setSunIntensity] = useState(50);
    const [water, setWater] = useState(50);
    const [co2, setCo2] = useState(50);
    const [glucoseProduced, setGlucoseProduced] = useState(0);
    const [challenge, setChallenge] = useState(null);
    const [score, setScore] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Laboratoire Libre",
            emoji: "🔬",
            difficulty: "⭐ Exploration",
            mode: "free",
            description: "Expérimente librement avec les paramètres"
        },
        {
            name: "Saison Sèche",
            emoji: "☀️",
            difficulty: "⭐⭐ Défi",
            mode: "challenge",
            description: "Optimise la photosynthèse avec peu d'eau",
            constraints: { maxWater: 30 },
            target: 60
        },
        {
            name: "Forêt Dense",
            emoji: "🌳",
            difficulty: "⭐⭐ Défi",
            mode: "challenge",
            description: "Obtiens du glucose malgré le peu de lumière",
            constraints: { maxSun: 40 },
            target: 50
        },
        {
            name: "Pollution Urbaine",
            emoji: "🏭",
            difficulty: "⭐⭐⭐ Expert",
            mode: "challenge",
            description: "Produis 70% de glucose avec des contraintes",
            constraints: { maxSun: 60, maxCo2: 40 },
            target: 70
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    useEffect(() => {
        let effectiveSun = sunIntensity;
        let effectiveWater = water;
        let effectiveCo2 = co2;

        if (scenario.constraints) {
            if (scenario.constraints.maxSun) effectiveSun = Math.min(sunIntensity, scenario.constraints.maxSun);
            if (scenario.constraints.maxWater) effectiveWater = Math.min(water, scenario.constraints.maxWater);
            if (scenario.constraints.maxCo2) effectiveCo2 = Math.min(co2, scenario.constraints.maxCo2);
        }

        const efficiency = Math.min(effectiveSun, effectiveWater, effectiveCo2) / 100;
        setGlucoseProduced(Math.floor(efficiency * 100));
    }, [sunIntensity, water, co2, scenario]);

    const checkChallenge = () => {
        if (scenario.mode === 'challenge' && glucoseProduced >= scenario.target) {
            setScore(s => s + 25);
            setChallenge('success');
        } else if (scenario.mode === 'challenge') {
            setChallenge('fail');
        }
    };

    const limitingFactor = sunIntensity <= water && sunIntensity <= co2 ? 'Lumière' :
        water <= sunIntensity && water <= co2 ? 'Eau' : 'CO₂';

    const reset = () => {
        setSunIntensity(50);
        setWater(50);
        setCo2(50);
        setChallenge(null);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="☀️ Laboratoire Photosynthèse">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Mode :" />

                        {scenario.mode === 'challenge' && (
                            <div className="p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg text-center">
                                <div className="text-xs text-orange-300">🎯 Objectif : {scenario.target}% de glucose</div>
                                <div className="text-xs text-gray-400">{scenario.description}</div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                                <div className="text-2xl">🍬</div>
                                <div className="text-xs text-gray-400">Glucose</div>
                                <div className={`font-bold text-xl ${glucoseProduced >= (scenario.target || 50) ? 'text-green-400' : 'text-white'}`}>{glucoseProduced}%</div>
                            </div>
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <div className="text-2xl">💨</div>
                                <div className="text-xs text-gray-400">O₂ libéré</div>
                                <div className="font-bold text-xl text-blue-400">{glucoseProduced}%</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>☀️ Lumière {scenario.constraints?.maxSun ? `(max ${scenario.constraints.maxSun}%)` : ''}</span>
                                    <span className="text-yellow-400">{sunIntensity}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={sunIntensity}
                                    onChange={(e) => setSunIntensity(parseInt(e.target.value))}
                                    className="w-full accent-yellow-500" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>💧 Eau {scenario.constraints?.maxWater ? `(max ${scenario.constraints.maxWater}%)` : ''}</span>
                                    <span className="text-blue-400">{water}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={water}
                                    onChange={(e) => setWater(parseInt(e.target.value))}
                                    className="w-full accent-blue-500" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>🌫️ CO₂ {scenario.constraints?.maxCo2 ? `(max ${scenario.constraints.maxCo2}%)` : ''}</span>
                                    <span className="text-gray-400">{co2}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={co2}
                                    onChange={(e) => setCo2(parseInt(e.target.value))}
                                    className="w-full accent-gray-500" />
                            </div>
                        </div>

                        <div className="p-2 bg-orange-500/20 rounded-lg text-center text-xs">
                            <span className="text-orange-400">⚠️ Facteur limitant : </span>
                            <span className="font-bold text-white">{limitingFactor}</span>
                        </div>

                        {scenario.mode === 'challenge' && !challenge && (
                            <GameButton onClick={checkChallenge} color="green">✓ Valider ma solution</GameButton>
                        )}

                        {challenge === 'success' && (
                            <div className="p-2 bg-green-500/30 rounded-lg text-center text-green-300 font-bold">
                                🎉 Bravo ! Défi réussi ! +25 XP
                            </div>
                        )}
                        {challenge === 'fail' && (
                            <div className="p-2 bg-red-500/30 rounded-lg text-center text-red-300">
                                ❌ Pas assez de glucose. Essaie encore !
                                <GameButton onClick={reset} size="small">🔄 Réessayer</GameButton>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.3} />
            <pointLight position={[5, 8, -5]} intensity={sunIntensity / 30} color="#FDB813" />

            <mesh position={[5, 6, -5]}>
                <sphereGeometry args={[1.5]} />
                <meshBasicMaterial color="#FDB813" />
            </mesh>

            <group rotation={[0.3, 0, 0]}>
                <mesh>
                    <boxGeometry args={[4, 0.2, 6]} />
                    <meshStandardMaterial color={glucoseProduced > 50 ? '#2E7D32' : '#81C784'} />
                </mesh>
            </group>

            {glucoseProduced > 30 && <Sparkles count={glucoseProduced / 3} scale={5} size={3} speed={0.3} color="#81D4FA" />}
        </group>
    );
}

// ============================================================================
// 5. AGRICULTURE LAB - 4 SCÉNARIOS
// ============================================================================
export function AgricultureLab() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [water, setWater] = useState(50);
    const [fertilizer, setFertilizer] = useState(30);
    const [days, setDays] = useState(0);
    const [harvest, setHarvest] = useState(0);
    const [season, setSeason] = useState('hivernage');
    const [pestAttack, setPestAttack] = useState(false);

    const scenarios = useMemo(() => [
        {
            name: "Jardin Familial",
            emoji: "🏡",
            difficulty: "⭐ Facile",
            crop: "Tomates",
            daysToHarvest: 10,
            optimalWater: [40, 70],
            description: "Cultive des tomates dans ton jardin"
        },
        {
            name: "Champ d'Arachide",
            emoji: "🥜",
            difficulty: "⭐⭐ Moyen",
            crop: "Arachides",
            daysToHarvest: 15,
            optimalWater: [30, 50],
            description: "Saloum : la région de l'arachide"
        },
        {
            name: "Rizière du Fleuve",
            emoji: "🌾",
            difficulty: "⭐⭐ Moyen",
            crop: "Riz",
            daysToHarvest: 20,
            optimalWater: [70, 90],
            description: "Le riz aime beaucoup d'eau !"
        },
        {
            name: "Maraîchage Niayes",
            emoji: "🥬",
            difficulty: "⭐⭐⭐ Expert",
            crop: "Légumes variés",
            daysToHarvest: 12,
            optimalWater: [50, 70],
            hasPests: true,
            description: "Zone des Niayes : attention aux parasites !"
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const growthRate = useMemo(() => {
        const [minW, maxW] = scenario.optimalWater;
        const waterOk = water >= minW && water <= maxW;
        const waterFactor = waterOk ? 1 : 0.3;
        const fertFactor = 0.5 + fertilizer / 200;
        const pestFactor = pestAttack ? 0.5 : 1;
        const seasonFactor = season === 'hivernage' ? 1.3 : season === 'saison_seche' ? 0.6 : 1;
        return waterFactor * fertFactor * seasonFactor * pestFactor;
    }, [water, fertilizer, season, pestAttack, scenario]);

    const plantProgress = Math.min(100, (days / scenario.daysToHarvest) * 100 * growthRate);
    const isHarvestReady = plantProgress >= 90;

    useEffect(() => {
        if (scenario.hasPests && days > 5 && Math.random() > 0.8 && !pestAttack) {
            setPestAttack(true);
        }
    }, [days, scenario, pestAttack]);

    const advanceDay = () => {
        setDays(d => d + 1);
        setWater(w => Math.max(0, w - 8 - Math.random() * 5));
    };

    const doHarvest = () => {
        if (isHarvestReady) {
            const quality = Math.floor(plantProgress);
            setHarvest(h => h + quality);
            setDays(0);
            setPestAttack(false);
        }
    };

    const waterPlants = () => setWater(w => Math.min(100, w + 25));
    const treatPests = () => setPestAttack(false);

    const reset = () => {
        setDays(0);
        setWater(50);
        setFertilizer(30);
        setHarvest(0);
        setPestAttack(false);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🚜 Ferme Virtuelle">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Type de culture :" />

                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={harvest} maxScore={500} label="kg" />
                            <span className="text-xs bg-white/10 px-2 py-1 rounded">Jour {days}</span>
                        </div>

                        <div className="p-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-lg text-center">
                            <div className="text-lg font-bold">{scenario.emoji} {scenario.crop}</div>
                            <div className="text-xs text-gray-400">{scenario.description}</div>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                            {['hivernage', 'saison_seche', 'contre_saison'].map(s => (
                                <button key={s} onClick={() => setSeason(s)}
                                    className={`p-1 text-xs rounded ${season === s ? 'bg-green-500 text-black' : 'bg-white/10'}`}>
                                    {s === 'hivernage' ? '🌧️' : s === 'saison_seche' ? '☀️' : '🌾'}
                                </button>
                            ))}
                        </div>

                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>🌱 Croissance</span>
                                <span className={isHarvestReady ? 'text-green-400' : ''}>{Math.floor(plantProgress)}%</span>
                            </div>
                            <ProgressBar current={plantProgress} max={100} color={isHarvestReady ? '#4CAF50' : '#FFC107'} />
                        </div>

                        <div className="space-y-2">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>💧 Eau (optimal: {scenario.optimalWater[0]}-{scenario.optimalWater[1]}%)</span>
                                    <span className={water < scenario.optimalWater[0] ? 'text-red-400' : water > scenario.optimalWater[1] ? 'text-blue-400' : 'text-green-400'}>{Math.floor(water)}%</span>
                                </div>
                                <ProgressBar current={water} max={100} color={water < 30 ? '#EF4444' : '#3B82F6'} />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>🧪 Engrais</span>
                                    <span className="text-yellow-400">{fertilizer}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={fertilizer}
                                    onChange={(e) => setFertilizer(parseInt(e.target.value))}
                                    className="w-full accent-yellow-500 h-1" />
                            </div>
                        </div>

                        {pestAttack && (
                            <div className="p-2 bg-red-500/30 rounded-lg text-center animate-pulse">
                                <span className="text-red-300">🐛 Attaque de parasites !</span>
                                <GameButton onClick={treatPests} color="red" size="small">🧴 Traiter</GameButton>
                            </div>
                        )}

                        {water < 20 && (
                            <div className="text-xs text-red-400 text-center animate-pulse">⚠️ Les plantes ont soif !</div>
                        )}

                        <div className="grid grid-cols-3 gap-2">
                            <GameButton onClick={waterPlants} size="small">💧</GameButton>
                            <GameButton onClick={advanceDay} color="default" size="small">⏭️ +1j</GameButton>
                            <GameButton onClick={doHarvest} color="green" disabled={!isHarvestReady} size="small">
                                {isHarvestReady ? '🌾' : '⏳'}
                            </GameButton>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[12, 12]} />
                <meshStandardMaterial color={water > 40 ? '#5D4037' : '#8D6E63'} />
            </mesh>

            {Array.from({ length: 12 }).map((_, i) => (
                <group key={i} position={[(i % 4) * 2.5 - 4, -1, Math.floor(i / 4) * 2.5 - 2]}>
                    <mesh position={[0, (plantProgress / 100) * 1.5, 0]}>
                        <cylinderGeometry args={[0.05, 0.08, (plantProgress / 100) * 3]} />
                        <meshStandardMaterial color={pestAttack ? '#8D6E63' : '#66BB6A'} />
                    </mesh>
                    {isHarvestReady && (
                        <Float speed={3} floatIntensity={0.2}>
                            <mesh position={[0, (plantProgress / 100) * 1.8, 0]}>
                                <sphereGeometry args={[0.2]} />
                                <meshStandardMaterial color="#FFC107" emissive="#FFC107" emissiveIntensity={0.3} />
                            </mesh>
                        </Float>
                    )}
                </group>
            ))}

            {season === 'hivernage' && <RainEffect />}
        </group>
    );
}

function RainEffect() {
    const refs = useRef([]);
    useFrame(({ clock }) => {
        refs.current.forEach((ref, i) => {
            if (ref) ref.position.y = 5 - ((clock.elapsedTime * 8 + i * 0.5) % 10);
        });
    });
    return (
        <group>
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el} position={[Math.random() * 10 - 5, 5, Math.random() * 10 - 5]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.3]} />
                    <meshBasicMaterial color="#4FC3F7" transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

// ============================================================================
// 6. ANIMAL LOCOMOTION - 4 SCÉNARIOS
// ============================================================================
export function AnimalLocomotion() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [raceStarted, setRaceStarted] = useState(false);
    const [positions, setPositions] = useState({});
    const [winner, setWinner] = useState(null);
    const [races, setRaces] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Course Terrestre",
            emoji: "🏃",
            difficulty: "⭐ Facile",
            environment: "terre",
            envColor: "#C4A484",
            animals: [
                { id: 'cheval', name: 'Cheval', emoji: '🐴', speedTerre: 5, speedAir: 0, speedEau: 1 },
                { id: 'autruche', name: 'Autruche', emoji: '🦤', speedTerre: 4, speedAir: 0, speedEau: 0.5 },
                { id: 'tortue', name: 'Tortue', emoji: '🐢', speedTerre: 0.5, speedAir: 0, speedEau: 2 },
            ]
        },
        {
            name: "Course Aérienne",
            emoji: "🦅",
            difficulty: "⭐⭐ Moyen",
            environment: "air",
            envColor: "#BBDEFB",
            animals: [
                { id: 'aigle', name: 'Aigle', emoji: '🦅', speedTerre: 1, speedAir: 5, speedEau: 0 },
                { id: 'pelican', name: 'Pélican', emoji: '🦢', speedTerre: 1, speedAir: 3, speedEau: 2 },
                { id: 'poule', name: 'Poule', emoji: '🐔', speedTerre: 2, speedAir: 0.5, speedEau: 0.5 },
            ]
        },
        {
            name: "Course Aquatique",
            emoji: "🐟",
            difficulty: "⭐⭐ Moyen",
            environment: "eau",
            envColor: "#0277BD",
            animals: [
                { id: 'dauphin', name: 'Dauphin', emoji: '🐬', speedTerre: 0, speedAir: 0, speedEau: 5 },
                { id: 'crocodile', name: 'Crocodile', emoji: '🐊', speedTerre: 2, speedAir: 0, speedEau: 4 },
                { id: 'canard', name: 'Canard', emoji: '🦆', speedTerre: 1, speedAir: 2, speedEau: 3 },
            ]
        },
        {
            name: "Triathlon",
            emoji: "🏆",
            difficulty: "⭐⭐⭐ Expert",
            environment: "mixte",
            envColor: "#9C27B0",
            phases: ['terre', 'eau', 'terre'],
            animals: [
                { id: 'homme', name: 'Humain', emoji: '🏃', speedTerre: 3, speedAir: 0, speedEau: 2 },
                { id: 'chien', name: 'Chien', emoji: '🐕', speedTerre: 4, speedAir: 0, speedEau: 2 },
                { id: 'loutre', name: 'Loutre', emoji: '🦦', speedTerre: 2, speedAir: 0, speedEau: 4 },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    useEffect(() => {
        const initialPos = {};
        scenario.animals.forEach(a => initialPos[a.id] = 0);
        setPositions(initialPos);
    }, [scenarioIndex]);

    useEffect(() => {
        if (!raceStarted) return;
        const interval = setInterval(() => {
            setPositions(prev => {
                const newPos = { ...prev };
                scenario.animals.forEach(animal => {
                    const speedKey = `speed${scenario.environment.charAt(0).toUpperCase() + scenario.environment.slice(1)}`;
                    const speed = animal[speedKey] || 1;
                    newPos[animal.id] = Math.min(100, prev[animal.id] + speed + Math.random() * 1.5);
                });

                const finisher = Object.entries(newPos).find(([_, pos]) => pos >= 100);
                if (finisher) {
                    setWinner(finisher[0]);
                    setRaceStarted(false);
                    setRaces(r => r + 1);
                }
                return newPos;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [raceStarted, scenario]);

    const startRace = () => {
        const initialPos = {};
        scenario.animals.forEach(a => initialPos[a.id] = 0);
        setPositions(initialPos);
        setWinner(null);
        setRaceStarted(true);
    };

    const reset = () => {
        const initialPos = {};
        scenario.animals.forEach(a => initialPos[a.id] = 0);
        setPositions(initialPos);
        setWinner(null);
        setRaces(0);
    };

    const winnerAnimal = scenario.animals.find(a => a.id === winner);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🏁 Course Adaptative">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Type de course :" />

                        <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg text-center">
                            <div className="text-xs text-gray-400">Environnement</div>
                            <div className="font-bold text-white capitalize">{scenario.environment}</div>
                        </div>

                        <div className="space-y-2">
                            {scenario.animals.map(animal => {
                                const speedKey = `speed${scenario.environment.charAt(0).toUpperCase() + scenario.environment.slice(1)}`;
                                const isAdapted = animal[speedKey] >= 3;
                                return (
                                    <div key={animal.id} className="flex items-center gap-2">
                                        <span className="text-xl w-8">{animal.emoji}</span>
                                        <div className="flex-1">
                                            <ProgressBar current={positions[animal.id] || 0} max={100}
                                                color={isAdapted ? '#4CAF50' : '#9E9E9E'} />
                                        </div>
                                        <span className="text-xs w-10 text-right">
                                            {isAdapted && <span className="text-green-400">⚡</span>}
                                            {Math.floor(positions[animal.id] || 0)}%
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {winner && winnerAnimal && (
                            <div className="p-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-lg text-center">
                                <div className="text-3xl">{winnerAnimal.emoji} 🏆</div>
                                <div className="font-bold text-yellow-400">{winnerAnimal.name} gagne !</div>
                                <div className="text-xs text-gray-300">
                                    Adaptation au milieu = Performance !
                                </div>
                            </div>
                        )}

                        <div className="text-xs text-center p-2 bg-cyan-500/20 rounded text-cyan-400">
                            💡 ⚡ = Animal adapté au milieu (organes spécialisés)
                        </div>

                        <GameButton onClick={startRace} color="green" disabled={raceStarted}>
                            {raceStarted ? '🏃 En cours...' : '🚀 Lancer !'}
                        </GameButton>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <color attach="background" args={[scenario.envColor]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[12, 8]} />
                <meshStandardMaterial color={scenario.envColor} transparent opacity={0.5} />
            </mesh>

            {scenario.animals.map((animal, i) => (
                <group key={animal.id} position={[((positions[animal.id] || 0) / 10) - 5, 0, i * 2 - 2]}>
                    <Float speed={raceStarted ? 8 : 2} floatIntensity={raceStarted ? 0.4 : 0.1}>
                        <Billboard><Text fontSize={1}>{animal.emoji}</Text></Billboard>
                    </Float>
                    {winner === animal.id && <Sparkles count={20} scale={2} size={3} speed={1} color="#FFD700" />}
                </group>
            ))}
        </group>
    );
}

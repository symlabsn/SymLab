'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles, Trail } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { ScoreDisplay, ProgressBar, GameButton } from './SVT6SimulationsAdvanced';

// ============================================================================
// 4. PHOTOSYNTHESIS - Laboratoire Interactif
// ============================================================================
export function Photosynthesis() {
    const [sunIntensity, setSunIntensity] = useState(50);
    const [water, setWater] = useState(50);
    const [co2, setCo2] = useState(50);
    const [glucoseProduced, setGlucoseProduced] = useState(0);
    const [oxygenReleased, setOxygenReleased] = useState(0);

    useEffect(() => {
        const efficiency = Math.min(sunIntensity, water, co2) / 100;
        setGlucoseProduced(Math.floor(efficiency * 100));
        setOxygenReleased(Math.floor(efficiency * 100));
    }, [sunIntensity, water, co2]);

    const limitingFactor = sunIntensity <= water && sunIntensity <= co2 ? 'Lumière' :
        water <= sunIntensity && water <= co2 ? 'Eau' : 'CO₂';

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="☀️ Laboratoire Photosynthèse">
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                                <div className="text-2xl">🍬</div>
                                <div className="text-xs text-gray-400">Glucose</div>
                                <div className="font-bold text-green-400">{glucoseProduced}%</div>
                            </div>
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <div className="text-2xl">💨</div>
                                <div className="text-xs text-gray-400">Oxygène</div>
                                <div className="font-bold text-blue-400">{oxygenReleased}%</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>☀️ Lumière</span>
                                    <span className="text-yellow-400">{sunIntensity}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={sunIntensity}
                                    onChange={(e) => setSunIntensity(parseInt(e.target.value))}
                                    className="w-full accent-yellow-500" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>💧 Eau</span>
                                    <span className="text-blue-400">{water}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={water}
                                    onChange={(e) => setWater(parseInt(e.target.value))}
                                    className="w-full accent-blue-500" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>🌫️ CO₂</span>
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

                        <div className="text-xs text-gray-400 text-center italic">
                            6CO₂ + 6H₂O + Lumière → C₆H₁₂O₆ + 6O₂
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.3} />
            <pointLight position={[5, 8, -5]} intensity={sunIntensity / 30} color="#FDB813" />

            {/* Sun */}
            <mesh position={[5, 6, -5]}>
                <sphereGeometry args={[1.5]} />
                <meshBasicMaterial color="#FDB813" />
            </mesh>
            {sunIntensity > 30 && <SunRays intensity={sunIntensity} />}

            {/* Leaf */}
            <group rotation={[0.3, 0, 0]}>
                <mesh>
                    <boxGeometry args={[4, 0.2, 6]} />
                    <meshStandardMaterial color={glucoseProduced > 50 ? '#2E7D32' : '#81C784'} />
                </mesh>
                {/* Chloroplasts */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <mesh key={i} position={[Math.random() * 3 - 1.5, 0.15, Math.random() * 5 - 2.5]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#1B5E20" emissive="#4CAF50" emissiveIntensity={glucoseProduced / 200} />
                    </mesh>
                ))}
            </group>

            {/* Water particles rising */}
            {water > 20 && <WaterParticles intensity={water} />}

            {/* Oxygen bubbles */}
            {oxygenReleased > 20 && <OxygenBubbles intensity={oxygenReleased} />}
        </group>
    );
}

function SunRays({ intensity }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) ref.current.rotation.z = clock.elapsedTime * 0.5;
    });
    return (
        <group ref={ref} position={[5, 6, -5]}>
            {Array.from({ length: 8 }).map((_, i) => (
                <mesh key={i} rotation={[0, 0, i * Math.PI / 4]}>
                    <boxGeometry args={[0.1, 3, 0.1]} />
                    <meshBasicMaterial color="#FFD54F" transparent opacity={intensity / 150} />
                </mesh>
            ))}
        </group>
    );
}

function WaterParticles({ intensity }) {
    const refs = useRef([]);
    useFrame(({ clock }) => {
        refs.current.forEach((ref, i) => {
            if (ref) {
                ref.position.y = ((clock.elapsedTime + i * 0.3) % 3) - 2;
                ref.position.x = Math.sin(clock.elapsedTime * 2 + i) * 0.5 + (i % 3 - 1);
            }
        });
    });
    return (
        <group position={[0, 0, 0]}>
            {Array.from({ length: Math.floor(intensity / 20) }).map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el}>
                    <sphereGeometry args={[0.08]} />
                    <meshBasicMaterial color="#4FC3F7" transparent opacity={0.8} />
                </mesh>
            ))}
        </group>
    );
}

function OxygenBubbles({ intensity }) {
    const refs = useRef([]);
    useFrame(({ clock }) => {
        refs.current.forEach((ref, i) => {
            if (ref) {
                ref.position.y = ((clock.elapsedTime * 0.5 + i * 0.5) % 4);
                ref.position.x = Math.sin(clock.elapsedTime + i * 2) * 2;
            }
        });
    });
    return (
        <group position={[0, 1, 0]}>
            {Array.from({ length: Math.floor(intensity / 15) }).map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el}>
                    <sphereGeometry args={[0.12]} />
                    <meshBasicMaterial color="#81D4FA" transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

// ============================================================================
// 5. AGRICULTURE LAB - Ferme Virtuelle
// ============================================================================
export function AgricultureLab() {
    const [water, setWater] = useState(50);
    const [fertilizer, setFertilizer] = useState(30);
    const [days, setDays] = useState(0);
    const [harvest, setHarvest] = useState(0);
    const [season, setSeason] = useState('hivernage');

    const growthRate = useMemo(() => {
        const waterFactor = water > 30 && water < 80 ? 1 : 0.3;
        const fertFactor = 0.5 + fertilizer / 200;
        const seasonFactor = season === 'hivernage' ? 1.5 : season === 'saison_seche' ? 0.5 : 1;
        return waterFactor * fertFactor * seasonFactor;
    }, [water, fertilizer, season]);

    const plantHeight = Math.min(3, (days * growthRate) / 10);
    const isHarvestReady = plantHeight >= 2.5;

    const advanceDay = () => {
        setDays(d => d + 1);
        setWater(w => Math.max(0, w - 5));
    };

    const doHarvest = () => {
        if (isHarvestReady) {
            setHarvest(h => h + Math.floor(plantHeight * 20));
            setDays(0);
        }
    };

    const waterPlants = () => setWater(w => Math.min(100, w + 30));

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🚜 Ferme Virtuelle Sénégal">
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <ScoreDisplay score={harvest} maxScore={500} label="kg récoltés" />
                            <span className="text-xs bg-white/10 px-2 py-1 rounded">Jour {days}</span>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                            {['hivernage', 'saison_seche', 'ngor'].map(s => (
                                <button key={s} onClick={() => setSeason(s)}
                                    className={`p-1 text-xs rounded ${season === s ? 'bg-green-500 text-black' : 'bg-white/10'}`}>
                                    {s === 'hivernage' ? '🌧️ Hivernage' : s === 'saison_seche' ? '☀️ Sèche' : '🌾 Ngor'}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>💧 Humidité du sol</span>
                                    <span className={water < 30 ? 'text-red-400' : 'text-blue-400'}>{water}%</span>
                                </div>
                                <ProgressBar current={water} max={100} color={water < 30 ? '#EF4444' : '#3B82F6'} />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>🌱 Engrais</span>
                                    <span className="text-yellow-400">{fertilizer}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={fertilizer}
                                    onChange={(e) => setFertilizer(parseInt(e.target.value))}
                                    className="w-full accent-yellow-500" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <GameButton onClick={waterPlants}>💧 Arroser</GameButton>
                            <GameButton onClick={advanceDay} color="default">⏭️ Jour +1</GameButton>
                            <GameButton onClick={doHarvest} color="green" disabled={!isHarvestReady}>
                                {isHarvestReady ? '🌾 Récolter!' : '⏳'}
                            </GameButton>
                        </div>

                        {water < 20 && (
                            <div className="text-xs text-red-400 text-center animate-pulse">
                                ⚠️ Les plantes ont soif !
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} />

            {/* Field */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[12, 12]} />
                <meshStandardMaterial color={water > 40 ? '#5D4037' : '#8D6E63'} />
            </mesh>

            {/* Plants */}
            {Array.from({ length: 15 }).map((_, i) => (
                <group key={i} position={[(i % 5) * 2 - 4, -1, Math.floor(i / 5) * 2 - 2]}>
                    {/* Stem */}
                    <mesh position={[0, plantHeight / 2, 0]}>
                        <cylinderGeometry args={[0.05, 0.08, plantHeight]} />
                        <meshStandardMaterial color="#66BB6A" />
                    </mesh>
                    {/* Leaves */}
                    {plantHeight > 0.5 && (
                        <mesh position={[0, plantHeight * 0.7, 0]} rotation={[0.3, i, 0]}>
                            <boxGeometry args={[0.4, 0.05, 0.2]} />
                            <meshStandardMaterial color="#43A047" />
                        </mesh>
                    )}
                    {/* Fruit/Grain */}
                    {isHarvestReady && (
                        <Float speed={3} floatIntensity={0.2}>
                            <mesh position={[0, plantHeight + 0.3, 0]}>
                                <sphereGeometry args={[0.15]} />
                                <meshStandardMaterial color="#FFC107" emissive="#FFC107" emissiveIntensity={0.3} />
                            </mesh>
                        </Float>
                    )}
                </group>
            ))}

            {/* Rain if hivernage */}
            {season === 'hivernage' && <RainEffect />}
        </group>
    );
}

function RainEffect() {
    const refs = useRef([]);
    useFrame(({ clock }) => {
        refs.current.forEach((ref, i) => {
            if (ref) {
                ref.position.y = 5 - ((clock.elapsedTime * 8 + i * 0.5) % 10);
            }
        });
    });
    return (
        <group>
            {Array.from({ length: 30 }).map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el} position={[Math.random() * 10 - 5, 5, Math.random() * 10 - 5]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.3]} />
                    <meshBasicMaterial color="#4FC3F7" transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

// ============================================================================
// 6. ANIMAL LOCOMOTION - Course de Vitesse
// ============================================================================
export function AnimalLocomotion() {
    const [selectedEnv, setSelectedEnv] = useState('terre');
    const [raceStarted, setRaceStarted] = useState(false);
    const [positions, setPositions] = useState({ cheval: 0, oiseau: 0, poisson: 0 });
    const [winner, setWinner] = useState(null);

    const environments = {
        terre: { name: 'Terre', color: '#8D6E63', animal: 'cheval', speed: 60 },
        air: { name: 'Air', color: '#BBDEFB', animal: 'oiseau', speed: 100 },
        eau: { name: 'Eau', color: '#0277BD', animal: 'poisson', speed: 40 },
    };

    useEffect(() => {
        if (!raceStarted) return;
        const interval = setInterval(() => {
            setPositions(prev => {
                const env = environments[selectedEnv];
                const newPos = { ...prev };

                Object.keys(newPos).forEach(animal => {
                    const isAdapted = environments[selectedEnv].animal === animal;
                    const speed = isAdapted ? 5 : 1;
                    newPos[animal] = Math.min(100, prev[animal] + speed + Math.random() * 2);
                });

                const finisher = Object.entries(newPos).find(([_, pos]) => pos >= 100);
                if (finisher) {
                    setWinner(finisher[0]);
                    setRaceStarted(false);
                }
                return newPos;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [raceStarted, selectedEnv]);

    const startRace = () => {
        setPositions({ cheval: 0, oiseau: 0, poisson: 0 });
        setWinner(null);
        setRaceStarted(true);
    };

    const animals = [
        { id: 'cheval', name: 'Cheval', emoji: '🐴', adaptation: 'Pattes musclées' },
        { id: 'oiseau', name: 'Oiseau', emoji: '🦅', adaptation: 'Ailes aérodynamiques' },
        { id: 'poisson', name: 'Poisson', emoji: '🐟', adaptation: 'Nageoires et branchies' },
    ];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🏃 Course Adaptative">
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-1">
                            {Object.entries(environments).map(([key, env]) => (
                                <button key={key} onClick={() => !raceStarted && setSelectedEnv(key)}
                                    className={`p-2 rounded text-xs font-bold ${selectedEnv === key ? 'bg-white text-black' : 'bg-white/10'}`}
                                    disabled={raceStarted}>
                                    {key === 'terre' ? '🏜️' : key === 'air' ? '☁️' : '🌊'} {env.name}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-2">
                            {animals.map(animal => (
                                <div key={animal.id} className="flex items-center gap-2">
                                    <span className="text-xl w-8">{animal.emoji}</span>
                                    <div className="flex-1">
                                        <ProgressBar current={positions[animal.id]} max={100}
                                            color={environments[selectedEnv].animal === animal.id ? '#4CAF50' : '#9E9E9E'} />
                                    </div>
                                    <span className="text-xs w-8 text-right">{Math.floor(positions[animal.id])}%</span>
                                </div>
                            ))}
                        </div>

                        {winner && (
                            <div className="p-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-lg text-center">
                                <div className="text-2xl">{animals.find(a => a.id === winner)?.emoji} 🏆</div>
                                <div className="font-bold text-yellow-400">
                                    {animals.find(a => a.id === winner)?.name} gagne !
                                </div>
                                <div className="text-xs text-gray-300">
                                    {winner === environments[selectedEnv].animal
                                        ? "L'animal adapté au milieu est le plus rapide !"
                                        : "Surprise ! Mais normalement l'animal adapté aurait dû gagner."}
                                </div>
                            </div>
                        )}

                        <div className="text-xs text-center p-2 bg-cyan-500/20 rounded">
                            💡 L'animal <strong>adapté</strong> au milieu est toujours plus performant !
                        </div>

                        <GameButton onClick={startRace} color="green" disabled={raceStarted}>
                            {raceStarted ? '🏃 Course en cours...' : '🚀 Lancer la course !'}
                        </GameButton>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <color attach="background" args={[environments[selectedEnv].color]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Track */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[12, 8]} />
                <meshStandardMaterial color={environments[selectedEnv].color} transparent opacity={0.8} />
            </mesh>

            {/* Racing animals */}
            {animals.map((animal, i) => (
                <group key={animal.id} position={[(positions[animal.id] / 10) - 5, 0, i * 2 - 2]}>
                    <Float speed={raceStarted ? 10 : 2} floatIntensity={raceStarted ? 0.5 : 0.1}>
                        <Billboard>
                            <Text fontSize={1}>{animal.emoji}</Text>
                        </Billboard>
                    </Float>
                    {raceStarted && environments[selectedEnv].animal === animal.id && (
                        <Sparkles count={10} scale={2} size={2} speed={2} color="#4CAF50" />
                    )}
                </group>
            ))}
        </group>
    );
}

export { Photosynthesis as PhotosynthesisAdvanced, AgricultureLab as AgricultureLabAdvanced, AnimalLocomotion as AnimalLocomotionAdvanced };

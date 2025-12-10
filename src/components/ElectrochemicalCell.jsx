import { Text, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

// Composant Pile Électrochimique - INTERACTIF
export function ElectrochemicalCell() {
    const [isRunning, setIsRunning] = useState(true);
    const [cellType, setCellType] = useState('daniell'); // daniell, leclanche
    const [voltage, setVoltage] = useState(1.1);
    const [electronPositions, setElectronPositions] = useState([]);
    const [ionPositions, setIonPositions] = useState([]);

    const bulbRef = useRef();
    const electronRefs = useRef([]);
    const ionRefs = useRef([]);

    // Initialisation des positions
    useEffect(() => {
        setElectronPositions(Array.from({ length: 5 }, (_, i) => -1.5 + i * 0.7));
        setIonPositions(Array.from({ length: 5 }, (_, i) => -1.5 + i * 0.7));
    }, []);

    // Configuration selon le type de pile
    const cellConfig = {
        daniell: {
            anode: 'Zn', cathode: 'Cu',
            anodeColor: '#9CA3AF', cathodeColor: '#F59E0B',
            voltage: 1.1, name: 'Pile Daniell'
        },
        leclanche: {
            anode: 'Zn', cathode: 'C (Graphite)',
            anodeColor: '#9CA3AF', cathodeColor: '#374151',
            voltage: 1.5, name: 'Pile Leclanché'
        }
    };

    const config = cellConfig[cellType];

    useFrame((state, delta) => {
        if (!isRunning) return;

        // Animation des électrons
        electronRefs.current.forEach((el, i) => {
            if (el) {
                el.position.x += delta * 0.8;
                if (el.position.x > 1.8) el.position.x = -1.8;
            }
        });

        // Animation des ions dans le pont salin
        ionRefs.current.forEach((ion, i) => {
            if (ion) {
                ion.position.x += (i % 2 === 0 ? 1 : -1) * delta * 0.3;
                if (Math.abs(ion.position.x) > 1.5) {
                    ion.position.x = i % 2 === 0 ? -1.5 : 1.5;
                }
            }
        });

        // Animation de l'ampoule qui pulse
        if (bulbRef.current) {
            const intensity = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.3;
            bulbRef.current.material.emissiveIntensity = intensity;
        }
    });

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[-4, 1, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🔋 Pile Électrochimique</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-2">Type de Pile</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setCellType('daniell')}
                                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-colors ${cellType === 'daniell'
                                            ? 'bg-orange-600'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    🥉 Daniell
                                </button>
                                <button
                                    onClick={() => setCellType('leclanche')}
                                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-colors ${cellType === 'leclanche'
                                            ? 'bg-gray-600'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    🔋 Leclanché
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsRunning(!isRunning)}
                            className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${isRunning
                                    ? 'bg-green-600 animate-pulse'
                                    : 'bg-red-600'
                                }`}
                        >
                            {isRunning ? '⚡ Circuit Fermé' : '🔌 Circuit Ouvert'}
                        </button>

                        {/* Info sur la pile */}
                        <div className="p-2 bg-white/10 rounded-lg">
                            <div className="text-center mb-2">
                                <span className="text-2xl font-bold text-[#FCD34D]">{config.voltage} V</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-red-400">Anode (-): {config.anode}</span>
                                <span className="text-blue-400">Cathode (+): {config.cathode}</span>
                            </div>
                        </div>

                        {/* Réactions */}
                        <div className="p-2 bg-white/5 rounded-lg text-xs font-mono">
                            <div className="text-red-400 mb-1">Oxydation: {config.anode} → {config.anode}²⁺ + 2e⁻</div>
                            <div className="text-blue-400">{cellType === 'daniell' ? 'Réduction: Cu²⁺ + 2e⁻ → Cu' : 'Réduction: MnO₂ + H⁺ + e⁻ → MnOOH'}</div>
                        </div>

                        <div className="text-xs text-center text-gray-400">
                            {isRunning ? '🔥 Réaction en cours' : '⏸ Réaction arrêtée'}
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">{config.name.toUpperCase()}</Text>

            {/* Bécher Gauche (Anode -) */}
            <group position={[-2, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.8, 0.8, 2, 32, 1, true]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} side={2} />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="#EF4444">Anode (-)</Text>

                {/* Électrode */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.3, 1.5, 0.1]} />
                    <meshStandardMaterial color={config.anodeColor} metalness={0.8} roughness={0.2} />
                </mesh>
                <Text position={[0, -1.3, 0]} fontSize={0.3} color="white">{config.anode}</Text>

                {/* Ions qui partent (animation) */}
                {isRunning && Array.from({ length: 4 }).map((_, i) => (
                    <mesh key={i} position={[
                        0.3 + Math.sin(i * 2) * 0.3,
                        Math.sin(i * 1.5) * 0.5,
                        Math.cos(i * 2) * 0.3
                    ]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.5} />
                    </mesh>
                ))}
            </group>

            {/* Bécher Droit (Cathode +) */}
            <group position={[2, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.8, 0.8, 2, 32, 1, true]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.3} side={2} />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="#3B82F6">Cathode (+)</Text>

                {/* Électrode */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.3, 1.5, 0.1]} />
                    <meshStandardMaterial color={config.cathodeColor} metalness={0.8} roughness={0.2} />
                </mesh>
                <Text position={[0, -1.3, 0]} fontSize={0.3} color="white">{cellType === 'daniell' ? 'Cu' : 'C'}</Text>

                {/* Dépôt sur l'électrode */}
                {isRunning && Array.from({ length: 3 }).map((_, i) => (
                    <mesh key={i} position={[0.16, (i - 1) * 0.4, 0]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color={config.cathodeColor} />
                    </mesh>
                ))}
            </group>

            {/* Pont Salin */}
            <group position={[0, 0.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.15, 3.5, 16]} />
                    <meshStandardMaterial color="#FCD34D" transparent opacity={0.4} />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.25} color="#FCD34D">Pont Salin</Text>

                {/* Ions en mouvement */}
                {isRunning && Array.from({ length: 5 }).map((_, i) => (
                    <mesh
                        key={i}
                        ref={el => ionRefs.current[i] = el}
                        position={[-1.5 + i * 0.7, 0, 0]}
                    >
                        <sphereGeometry args={[0.06, 8, 8]} />
                        <meshStandardMaterial color={i % 2 === 0 ? "#FCD34D" : "#9CA3AF"} />
                    </mesh>
                ))}
            </group>

            {/* Fil et électrons */}
            <group position={[0, 2, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>

                {/* Électrons animés */}
                {isRunning && Array.from({ length: 5 }).map((_, i) => (
                    <mesh
                        key={i}
                        ref={el => electronRefs.current[i] = el}
                        position={[-1.5 + i * 0.7, 0, 0]}
                    >
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
                    </mesh>
                ))}
                <Text position={[0, 0.4, 0]} fontSize={0.25} color="#00F5D4">e⁻ →</Text>

                {/* Ampoule */}
                <mesh ref={bulbRef} position={[0, 0.8, 0]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial
                        color="#FCD34D"
                        emissive={isRunning ? "#FCD34D" : "#000"}
                        emissiveIntensity={isRunning ? 1.2 : 0}
                    />
                </mesh>
                {isRunning && (
                    <Text position={[0, 1.3, 0]} fontSize={0.2} color="#FCD34D">💡</Text>
                )}
            </group>

            <Text position={[0, -2.8, 0]} fontSize={0.25} color="white">
                Énergie Chimique → Énergie Électrique
            </Text>
        </group>
    );
}

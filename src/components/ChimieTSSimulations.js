'use client';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Html, Sphere, Box, Cylinder } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================
// C1. ALCOOLS ET OXYDATION
// =========================================
export function AlcoolsOxydation() {
    const [alcoholType, setAlcoholType] = useState('primaire');
    const [oxidizing, setOxidizing] = useState(false);
    const [oxidationStage, setOxidationStage] = useState(0);

    useFrame((state, delta) => {
        if (oxidizing && oxidationStage < 2) {
            setOxidationStage(s => Math.min(2, s + delta * 0.5));
        }
    });

    const getProduct = () => {
        if (alcoholType === 'primaire') {
            if (oxidationStage < 1) return 'Alcool';
            if (oxidationStage < 2) return 'Aldéhyde';
            return 'Acide Carboxylique';
        } else if (alcoholType === 'secondaire') {
            return oxidationStage > 0.5 ? 'Cétone' : 'Alcool';
        }
        return 'Pas de réaction';
    };

    const reset = () => { setOxidizing(false); setOxidationStage(0); };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#22C55E">OXYDATION DES ALCOOLS</Text>

            {/* Molécule d'alcool */}
            <group position={[-2, 0, 0]}>
                <Sphere args={[0.4]}><meshStandardMaterial color="#333" /></Sphere>
                <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">C</Text>
                <Sphere args={[0.25]} position={[0.8, 0, 0]}><meshStandardMaterial color="#EF4444" /></Sphere>
                <Text position={[0.8, 0.4, 0]} fontSize={0.2} color="#EF4444">O</Text>
                <Sphere args={[0.15]} position={[1.3, 0, 0]}><meshStandardMaterial color="white" /></Sphere>
                <Text position={[1.3, 0.3, 0]} fontSize={0.15} color="white">H</Text>
            </group>

            {/* Flèche de réaction */}
            {oxidizing && (
                <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-0.5, 0, 0), 2, 0xFBBF24, 0.3, 0.2]} />
            )}

            {/* Produit */}
            <group position={[2, 0, 0]}>
                {oxidationStage > 0 && (
                    <>
                        <Sphere args={[0.4]}><meshStandardMaterial color="#333" /></Sphere>
                        <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">C</Text>
                        <Sphere args={[0.25]} position={[0.6, 0.4, 0]}><meshStandardMaterial color="#EF4444" /></Sphere>
                        <Text position={[0.6, 0.8, 0]} fontSize={0.2} color="#EF4444">=O</Text>
                    </>
                )}
            </group>

            {/* Formule */}
            <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                {alcoholType === 'primaire' ? 'R-CH₂OH → R-CHO → R-COOH' :
                    alcoholType === 'secondaire' ? 'R-CHOH-R\' → R-CO-R\'' : 'R₃C-OH → Pas de réaction'}
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🧪 Oxydation Alcools">
                    <div className="text-white min-w-[220px]">
                        <div className="flex gap-2 mb-3">
                            {['primaire', 'secondaire', 'tertiaire'].map(t => (
                                <button key={t} onClick={() => { setAlcoholType(t); reset(); }}
                                    className={`px-2 py-1 rounded text-xs font-bold ${alcoholType === t ? 'bg-green-500' : 'bg-gray-700'}`}>
                                    {t.charAt(0).toUpperCase() + t.slice(1, 3)}
                                </button>
                            ))}
                        </div>

                        <button onClick={() => setOxidizing(true)} disabled={alcoholType === 'tertiaire'}
                            className={`w-full py-2 rounded font-bold mb-2 ${alcoholType === 'tertiaire' ? 'bg-gray-600' : 'bg-orange-500'}`}>
                            🔥 Oxyder avec KMnO₄
                        </button>
                        <button onClick={reset} className="w-full py-1 rounded bg-gray-600 text-sm">↺ Reset</button>

                        <div className="mt-3 p-2 bg-gray-800 rounded text-center">
                            <p className="text-xs text-gray-400">Produit:</p>
                            <p className="text-lg font-bold text-cyan-400">{getProduct()}</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C2. AMINES
// =========================================
export function AminesProprietes() {
    const [amineClass, setAmineClass] = useState('primaire');
    const [showProtonation, setShowProtonation] = useState(false);

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#8B5CF6">AMINES - PROPRIÉTÉS</Text>

            {/* Atome d'azote central */}
            <group position={[0, 0, 0]}>
                <Sphere args={[0.5]}><meshStandardMaterial color="#3B82F6" /></Sphere>
                <Text position={[0, 0, 0.6]} fontSize={0.3} color="white">N</Text>

                {/* Doublet non-liant */}
                <group position={[0, 0.8, 0]}>
                    <Sphere args={[0.1]} position={[-0.1, 0, 0]}><meshStandardMaterial color="#FBBF24" /></Sphere>
                    <Sphere args={[0.1]} position={[0.1, 0, 0]}><meshStandardMaterial color="#FBBF24" /></Sphere>
                </group>

                {/* Liaisons R */}
                {amineClass === 'primaire' && (
                    <>
                        <Line points={[[0, 0, 0], [-1, -0.5, 0]]} color="white" lineWidth={3} />
                        <Text position={[-1.3, -0.5, 0]} fontSize={0.25} color="gray">R</Text>
                        <Line points={[[0, 0, 0], [0.5, -0.7, 0.5]]} color="white" lineWidth={3} />
                        <Text position={[0.7, -0.9, 0.5]} fontSize={0.2} color="white">H</Text>
                        <Line points={[[0, 0, 0], [0.5, -0.7, -0.5]]} color="white" lineWidth={3} />
                        <Text position={[0.7, -0.9, -0.5]} fontSize={0.2} color="white">H</Text>
                    </>
                )}
                {amineClass === 'secondaire' && (
                    <>
                        <Line points={[[0, 0, 0], [-1, -0.5, 0]]} color="white" lineWidth={3} />
                        <Text position={[-1.3, -0.5, 0]} fontSize={0.25} color="gray">R</Text>
                        <Line points={[[0, 0, 0], [1, -0.5, 0]]} color="white" lineWidth={3} />
                        <Text position={[1.3, -0.5, 0]} fontSize={0.25} color="gray">R'</Text>
                        <Line points={[[0, 0, 0], [0, -0.8, 0.5]]} color="white" lineWidth={3} />
                        <Text position={[0, -1, 0.5]} fontSize={0.2} color="white">H</Text>
                    </>
                )}
                {amineClass === 'tertiaire' && (
                    <>
                        <Line points={[[0, 0, 0], [-1, -0.3, 0]]} color="white" lineWidth={3} />
                        <Text position={[-1.3, -0.3, 0]} fontSize={0.25} color="gray">R</Text>
                        <Line points={[[0, 0, 0], [0.7, -0.6, 0.5]]} color="white" lineWidth={3} />
                        <Text position={[1, -0.8, 0.5]} fontSize={0.25} color="gray">R'</Text>
                        <Line points={[[0, 0, 0], [0.7, -0.6, -0.5]]} color="white" lineWidth={3} />
                        <Text position={[1, -0.8, -0.5]} fontSize={0.25} color="gray">R''</Text>
                    </>
                )}

                {/* Protonation */}
                {showProtonation && (
                    <group position={[0, 1.5, 0]}>
                        <Sphere args={[0.15]}><meshStandardMaterial color="#EF4444" /></Sphere>
                        <Text position={[0.3, 0, 0]} fontSize={0.2} color="#EF4444">H⁺</Text>
                    </group>
                )}
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                R-NH₂ + H₂O ⇌ R-NH₃⁺ + HO⁻ (caractère basique)
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🔬 Amines">
                    <div className="text-white min-w-[200px]">
                        <div className="flex gap-2 mb-3">
                            {['primaire', 'secondaire', 'tertiaire'].map(c => (
                                <button key={c} onClick={() => setAmineClass(c)}
                                    className={`flex-1 py-1 rounded text-xs font-bold ${amineClass === c ? 'bg-purple-500' : 'bg-gray-700'}`}>
                                    {c.charAt(0).toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <button onClick={() => setShowProtonation(!showProtonation)}
                            className={`w-full py-2 rounded font-bold ${showProtonation ? 'bg-red-500' : 'bg-blue-500'}`}>
                            {showProtonation ? '➖ Retirer H⁺' : '➕ Ajouter H⁺'}
                        </button>

                        <div className="mt-3 p-2 bg-gray-800 rounded text-xs">
                            <p className="text-yellow-400">💡 Le doublet non-liant de N</p>
                            <p className="text-gray-400">→ Caractère basique (capte H⁺)</p>
                            <p className="text-gray-400">→ Caractère nucléophile</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C3. ESTÉRIFICATION
// =========================================
export function Esterification() {
    const [reacting, setReacting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [catalyst, setCatalyst] = useState(false);

    useFrame((state, delta) => {
        if (reacting && progress < 1) {
            const speed = catalyst ? 3 : 1;
            setProgress(p => Math.min(1, p + delta * 0.2 * speed));
        }
    });

    const reset = () => { setReacting(false); setProgress(0); };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#F97316">ESTÉRIFICATION</Text>

            {/* Acide carboxylique */}
            <group position={[-3, 0, 0]} scale={1 - progress * 0.5}>
                <Box args={[1, 0.8, 0.5]}><meshStandardMaterial color="#EF4444" /></Box>
                <Text position={[0, 0, 0.3]} fontSize={0.2} color="white">RCOOH</Text>
                <Text position={[0, -0.7, 0]} fontSize={0.15} color="#EF4444">Acide</Text>
            </group>

            {/* Alcool */}
            <group position={[-1, 0, 0]} scale={1 - progress * 0.5}>
                <Box args={[0.8, 0.8, 0.5]}><meshStandardMaterial color="#22C55E" /></Box>
                <Text position={[0, 0, 0.3]} fontSize={0.2} color="white">R'OH</Text>
                <Text position={[0, -0.7, 0]} fontSize={0.15} color="#22C55E">Alcool</Text>
            </group>

            {/* Flèches équilibre */}
            <group position={[0.5, 0, 0]}>
                <arrowHelper args={[new THREE.Vector3(1, 0.1, 0), new THREE.Vector3(0, 0, 0), 1, 0xFBBF24, 0.15, 0.1]} />
                <arrowHelper args={[new THREE.Vector3(-1, -0.1, 0), new THREE.Vector3(1, 0, 0), 1, 0xFBBF24, 0.15, 0.1]} />
            </group>

            {/* Ester */}
            <group position={[2.5, 0, 0]} scale={progress}>
                <Box args={[1.2, 0.8, 0.5]}><meshStandardMaterial color="#3B82F6" /></Box>
                <Text position={[0, 0, 0.3]} fontSize={0.2} color="white">RCOOR'</Text>
                <Text position={[0, -0.7, 0]} fontSize={0.15} color="#3B82F6">Ester</Text>
            </group>

            {/* Eau */}
            <group position={[4, 0, 0]} scale={progress}>
                <Sphere args={[0.3]}><meshStandardMaterial color="#06B6D4" /></Sphere>
                <Text position={[0, 0, 0.4]} fontSize={0.2} color="white">H₂O</Text>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                Réaction lente, limitée, athermique {catalyst ? '+ H₂SO₄ (catalyseur)' : ''}
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="⚗️ Estérification">
                    <div className="text-white min-w-[220px]">
                        <div className="flex items-center gap-2 mb-3">
                            <input type="checkbox" checked={catalyst} onChange={e => setCatalyst(e.target.checked)} />
                            <label className="text-sm">Ajouter H₂SO₄ (catalyseur)</label>
                        </div>

                        <button onClick={() => setReacting(true)} disabled={reacting}
                            className={`w-full py-2 rounded font-bold mb-2 ${reacting ? 'bg-gray-600' : 'bg-orange-500'}`}>
                            🔥 Chauffer
                        </button>
                        <button onClick={reset} className="w-full py-1 rounded bg-gray-600 text-sm">↺ Reset</button>

                        <div className="mt-3 p-2 bg-gray-800 rounded">
                            <p className="text-xs text-gray-400">Avancement:</p>
                            <div className="w-full bg-gray-700 h-2 rounded mt-1">
                                <div className="bg-blue-500 h-2 rounded transition-all" style={{ width: `${progress * 100}%` }}></div>
                            </div>
                            <p className="text-xs text-cyan-400 mt-1">Rendement ≈ 67% (équilibre)</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C4. ACIDES AMINÉS ET CHIRALITÉ
// =========================================
export function AcidesAminesChiralite() {
    const [showMirror, setShowMirror] = useState(false);
    const [rotation, setRotation] = useState(0);
    const moleculeRef = useRef();

    useFrame((state, delta) => {
        if (moleculeRef.current) {
            setRotation(r => r + delta * 0.5);
            moleculeRef.current.rotation.y = rotation;
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#EC4899">ACIDES AMINÉS - CHIRALITÉ</Text>

            {/* Molécule L */}
            <group ref={moleculeRef} position={[-2, 0, 0]}>
                {/* Carbone alpha central */}
                <Sphere args={[0.3]}><meshStandardMaterial color="#333" /></Sphere>
                <Text position={[0, 0.5, 0]} fontSize={0.2} color="white">Cα</Text>

                {/* COOH */}
                <group position={[0.8, 0.5, 0]}>
                    <Sphere args={[0.2]}><meshStandardMaterial color="#EF4444" /></Sphere>
                    <Text position={[0.3, 0, 0]} fontSize={0.15} color="#EF4444">COOH</Text>
                </group>

                {/* NH2 */}
                <group position={[-0.8, 0.5, 0]}>
                    <Sphere args={[0.2]}><meshStandardMaterial color="#3B82F6" /></Sphere>
                    <Text position={[-0.3, 0, 0]} fontSize={0.15} color="#3B82F6">NH₂</Text>
                </group>

                {/* R */}
                <group position={[0, -0.7, 0]}>
                    <Sphere args={[0.25]}><meshStandardMaterial color="#22C55E" /></Sphere>
                    <Text position={[0, -0.4, 0]} fontSize={0.15} color="#22C55E">R</Text>
                </group>

                {/* H */}
                <group position={[0, 0, 0.6]}>
                    <Sphere args={[0.1]}><meshStandardMaterial color="white" /></Sphere>
                    <Text position={[0, 0.2, 0]} fontSize={0.1} color="white">H</Text>
                </group>

                <Text position={[0, -1.5, 0]} fontSize={0.3} color="#FBBF24">L</Text>
            </group>

            {/* Miroir */}
            {showMirror && (
                <>
                    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                        <planeGeometry args={[0.05, 4]} />
                        <meshStandardMaterial color="#888" metalness={1} roughness={0} />
                    </mesh>

                    {/* Molécule D (image miroir) */}
                    <group position={[2, 0, 0]} scale={[-1, 1, 1]}>
                        <Sphere args={[0.3]}><meshStandardMaterial color="#333" /></Sphere>
                        <group position={[0.8, 0.5, 0]}><Sphere args={[0.2]}><meshStandardMaterial color="#EF4444" /></Sphere></group>
                        <group position={[-0.8, 0.5, 0]}><Sphere args={[0.2]}><meshStandardMaterial color="#3B82F6" /></Sphere></group>
                        <group position={[0, -0.7, 0]}><Sphere args={[0.25]}><meshStandardMaterial color="#22C55E" /></Sphere></group>
                        <group position={[0, 0, 0.6]}><Sphere args={[0.1]}><meshStandardMaterial color="white" /></Sphere></group>
                    </group>
                    <Text position={[2, -1.5, 0]} fontSize={0.3} color="#FBBF24">D</Text>
                </>
            )}

            <Text position={[0, -2.8, 0]} fontSize={0.18} color="#FBBF24">
                Énantiomères : non superposables à leur image miroir
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🔬 Chiralité">
                    <div className="text-white min-w-[200px]">
                        <button onClick={() => setShowMirror(!showMirror)}
                            className={`w-full py-2 rounded font-bold mb-3 ${showMirror ? 'bg-pink-500' : 'bg-purple-500'}`}>
                            {showMirror ? '🪞 Masquer miroir' : '🪞 Afficher miroir'}
                        </button>

                        <div className="p-2 bg-gray-800 rounded text-xs">
                            <p className="text-yellow-400 mb-1">💡 Carbone asymétrique (Cα)</p>
                            <p className="text-gray-400">→ 4 groupes différents</p>
                            <p className="text-gray-400">→ L-aminoacides naturels</p>
                            <p className="text-cyan-400 mt-2">Zwitterion: NH₃⁺-CHR-COO⁻</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C5. CINÉTIQUE CHIMIQUE
// =========================================
export function CinetiqueChimique() {
    const [temperature, setTemperature] = useState(25);
    const [concentration, setConcentration] = useState(1);
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const k = 0.1 * Math.exp((temperature - 25) / 10) * concentration;
    const advancement = 1 - Math.exp(-k * time);
    const velocity = k * (1 - advancement);

    useFrame((state, delta) => {
        if (running) {
            setTime(t => t + delta);
        }
    });

    const reset = () => { setTime(0); setRunning(false); };

    // Points pour la courbe
    const curvePoints = useMemo(() => {
        const pts = [];
        for (let t = 0; t <= 10; t += 0.2) {
            const x = (t / 10) * 6 - 3;
            const adv = 1 - Math.exp(-k * t);
            const y = adv * 2 - 1;
            pts.push(new THREE.Vector3(x, y, 0));
        }
        return pts;
    }, [k]);

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#F59E0B">CINÉTIQUE CHIMIQUE</Text>

            {/* Axes */}
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-3.5, -1.5, 0), 7.5, 0xffffff]} />
            <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(-3.5, -1.5, 0), 4, 0xffffff]} />
            <Text position={[4.2, -1.5, 0]} fontSize={0.2} color="white">t</Text>
            <Text position={[-3.5, 2.7, 0]} fontSize={0.2} color="white">x</Text>

            {/* Courbe x(t) */}
            <Line points={curvePoints} color="#22C55E" lineWidth={3} />

            {/* Point actuel */}
            <mesh position={[(time / 10) * 6 - 3, advancement * 2 - 1, 0]}>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
            </mesh>

            {/* t1/2 */}
            <Line points={[[0, -1.5, 0], [0, 0, 0]]} color="#FBBF24" lineWidth={1} dashed />
            <Text position={[0.3, -1.8, 0]} fontSize={0.15} color="#FBBF24">t½</Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="⏱️ Cinétique">
                    <div className="text-white min-w-[220px]">
                        <label className="block text-sm">Température: {temperature}°C</label>
                        <input type="range" min="0" max="80" value={temperature}
                            onChange={e => { setTemperature(Number(e.target.value)); reset(); }}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-orange-500" />

                        <label className="block text-sm mt-2">Concentration: {concentration} mol/L</label>
                        <input type="range" min="0.1" max="2" step="0.1" value={concentration}
                            onChange={e => { setConcentration(Number(e.target.value)); reset(); }}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500" />

                        <button onClick={() => setRunning(!running)}
                            className={`w-full mt-3 py-2 rounded font-bold ${running ? 'bg-red-500' : 'bg-green-500'}`}>
                            {running ? '⏸ Pause' : '▶ Démarrer'}
                        </button>
                        <button onClick={reset} className="w-full mt-1 py-1 rounded bg-gray-600 text-sm">↺ Reset</button>

                        <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                            <p>t = {time.toFixed(2)} s</p>
                            <p className="text-green-400">x = {(advancement * 100).toFixed(1)}%</p>
                            <p className="text-yellow-400">v = {velocity.toFixed(3)} mol/s</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C6. pH ET AUTOPROTOLYSE
// =========================================
export function PHAutoprotolyse() {
    const [hydronium, setHydronium] = useState(1e-7);
    const hydroxide = 1e-14 / hydronium;
    const pH = -Math.log10(hydronium);
    const pOH = 14 - pH;

    const getMilieu = () => {
        if (pH < 6.8) return { text: 'ACIDE', color: '#EF4444' };
        if (pH > 7.2) return { text: 'BASIQUE', color: '#3B82F6' };
        return { text: 'NEUTRE', color: '#22C55E' };
    };

    const milieu = getMilieu();

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#06B6D4">pH ET AUTOPROTOLYSE</Text>

            {/* Échelle pH */}
            <group position={[0, 0, 0]}>
                {Array.from({ length: 15 }, (_, i) => (
                    <group key={i} position={[(i - 7) * 0.5, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[0.45, 0.5, 0.1]} />
                            <meshStandardMaterial color={
                                i < 3 ? '#DC2626' : i < 6 ? '#F97316' : i < 8 ? '#22C55E' : i < 11 ? '#3B82F6' : '#7C3AED'
                            } />
                        </mesh>
                        <Text position={[0, -0.5, 0]} fontSize={0.15} color="white">{i}</Text>
                    </group>
                ))}

                {/* Curseur pH actuel */}
                <mesh position={[(pH - 7) * 0.5, 0.8, 0]}>
                    <coneGeometry args={[0.2, 0.4, 3]} rotation={[Math.PI, 0, 0]} />
                    <meshStandardMaterial color={milieu.color} />
                </mesh>
                <Text position={[(pH - 7) * 0.5, 1.3, 0]} fontSize={0.25} color={milieu.color}>
                    pH = {pH.toFixed(2)}
                </Text>
            </group>

            {/* Équation autoprotolyse */}
            <Text position={[0, -2, 0]} fontSize={0.2} color="white">
                2H₂O ⇌ H₃O⁺ + HO⁻
            </Text>
            <Text position={[0, -2.5, 0]} fontSize={0.18} color="#FBBF24">
                Ke = [H₃O⁺][HO⁻] = 10⁻¹⁴ (à 25°C)
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🧪 pH">
                    <div className="text-white min-w-[220px]">
                        <label className="block text-sm">pH = {pH.toFixed(2)}</label>
                        <input type="range" min="0" max="14" step="0.1" value={pH}
                            onChange={e => setHydronium(Math.pow(10, -Number(e.target.value)))}
                            className="w-full h-2 bg-gray-700 rounded-lg" />

                        <div className={`mt-3 p-3 rounded text-center font-bold text-xl`}
                            style={{ backgroundColor: milieu.color + '40', borderColor: milieu.color, borderWidth: 2 }}>
                            {milieu.text}
                        </div>

                        <div className="mt-3 p-2 bg-gray-800 rounded text-xs grid grid-cols-2 gap-2">
                            <div>
                                <p className="text-red-400">[H₃O⁺]</p>
                                <p>{hydronium.toExponential(2)} mol/L</p>
                            </div>
                            <div>
                                <p className="text-blue-400">[HO⁻]</p>
                                <p>{hydroxide.toExponential(2)} mol/L</p>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C7. ACIDES ET BASES FORTS
// =========================================
export function AcidesBasesForts() {
    const [type, setType] = useState('acide');
    const [concentration, setConcentration] = useState(0.01);

    const pH = type === 'acide' ? -Math.log10(concentration) : 14 + Math.log10(concentration);

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color={type === 'acide' ? '#EF4444' : '#3B82F6'}>
                {type === 'acide' ? 'ACIDE FORT (HCl)' : 'BASE FORTE (NaOH)'}
            </Text>

            {/* Bécher */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.5, 1.2, 2, 32, 1, true]} />
                <meshPhysicalMaterial color="#fff" transmission={0.9} roughness={0} />
            </mesh>

            {/* Solution */}
            <mesh position={[0, -0.7, 0]}>
                <cylinderGeometry args={[1.4, 1.1, 1.5, 32]} />
                <meshStandardMaterial
                    color={type === 'acide' ? '#FCA5A5' : '#93C5FD'}
                    transparent opacity={0.7}
                />
            </mesh>

            {/* Ions */}
            {Array.from({ length: 20 }, (_, i) => (
                <Sphere key={i} args={[0.08]}
                    position={[
                        (Math.random() - 0.5) * 2,
                        -0.7 + (Math.random() - 0.5) * 1.2,
                        (Math.random() - 0.5) * 2
                    ]}>
                    <meshStandardMaterial color={type === 'acide' ? '#EF4444' : '#3B82F6'} />
                </Sphere>
            ))}

            <Text position={[0, -2.8, 0]} fontSize={0.2} color="#FBBF24">
                {type === 'acide' ? 'HCl → H₃O⁺ + Cl⁻ (totale)' : 'NaOH → Na⁺ + HO⁻ (totale)'}
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="💧 Acides/Bases Forts">
                    <div className="text-white min-w-[200px]">
                        <div className="flex gap-2 mb-3">
                            <button onClick={() => setType('acide')}
                                className={`flex-1 py-2 rounded font-bold ${type === 'acide' ? 'bg-red-500' : 'bg-gray-700'}`}>
                                HCl
                            </button>
                            <button onClick={() => setType('base')}
                                className={`flex-1 py-2 rounded font-bold ${type === 'base' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                                NaOH
                            </button>
                        </div>

                        <label className="block text-sm">C = {concentration} mol/L</label>
                        <input type="range" min="-3" max="0" step="0.1" value={Math.log10(concentration)}
                            onChange={e => setConcentration(Math.pow(10, Number(e.target.value)))}
                            className="w-full h-2 bg-gray-700 rounded-lg" />

                        <div className="mt-3 p-3 bg-gray-800 rounded text-center">
                            <p className="text-xs text-gray-400">pH = {type === 'acide' ? '-log C' : '14 + log C'}</p>
                            <p className="text-2xl font-bold text-cyan-400">pH = {pH.toFixed(2)}</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C8. ACIDES FAIBLES ET Ka
// =========================================
export function AcidesFaiblesKa() {
    const [pKa, setPKa] = useState(4.75);
    const [pH, setPH] = useState(4.75);

    const ratio = Math.pow(10, pH - pKa);
    const percentBase = (ratio / (1 + ratio)) * 100;
    const percentAcid = 100 - percentBase;

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#A855F7">ACIDES FAIBLES - Ka</Text>

            {/* Diagramme de prédominance */}
            <group position={[0, 0.5, 0]}>
                {/* Zone acide */}
                <mesh position={[-2, 0, 0]}>
                    <boxGeometry args={[3, 1, 0.1]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.6} />
                </mesh>
                <Text position={[-2, 0, 0.1]} fontSize={0.3} color="white">AH</Text>

                {/* Zone base */}
                <mesh position={[2, 0, 0]}>
                    <boxGeometry args={[3, 1, 0.1]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
                </mesh>
                <Text position={[2, 0, 0.1]} fontSize={0.3} color="white">A⁻</Text>

                {/* Limite pKa */}
                <Line points={[[0, -0.7, 0], [0, 0.7, 0]]} color="#FBBF24" lineWidth={3} />
                <Text position={[0, -1, 0]} fontSize={0.2} color="#FBBF24">pKa = {pKa}</Text>

                {/* Curseur pH */}
                <mesh position={[(pH - pKa) * 0.8, 1.2, 0]}>
                    <coneGeometry args={[0.15, 0.3, 3]} rotation={[Math.PI, 0, 0]} />
                    <meshStandardMaterial color="#22C55E" />
                </mesh>
                <Text position={[(pH - pKa) * 0.8, 1.6, 0]} fontSize={0.2} color="#22C55E">pH = {pH.toFixed(1)}</Text>
            </group>

            {/* Barres de proportion */}
            <group position={[0, -1.5, 0]}>
                <mesh position={[-1.5 + (percentAcid / 100) * 1.5, 0, 0]}>
                    <boxGeometry args={[(percentAcid / 100) * 3, 0.4, 0.1]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <mesh position={[1.5 - (percentBase / 100) * 1.5, 0, 0]}>
                    <boxGeometry args={[(percentBase / 100) * 3, 0.4, 0.1]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
            </group>

            <Text position={[0, -2.8, 0]} fontSize={0.18} color="#FBBF24">
                pH = pKa + log([A⁻]/[AH]) (Henderson-Hasselbalch)
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="⚖️ Équilibre Acide-Base">
                    <div className="text-white min-w-[220px]">
                        <label className="block text-sm">pKa = {pKa.toFixed(2)}</label>
                        <input type="range" min="1" max="10" step="0.1" value={pKa}
                            onChange={e => setPKa(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-yellow-500" />

                        <label className="block text-sm mt-2">pH = {pH.toFixed(2)}</label>
                        <input type="range" min="0" max="14" step="0.1" value={pH}
                            onChange={e => setPH(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg accent-green-500" />

                        <div className="mt-3 p-2 bg-gray-800 rounded grid grid-cols-2 gap-2 text-center">
                            <div>
                                <p className="text-red-400 text-xs">AH</p>
                                <p className="font-bold">{percentAcid.toFixed(1)}%</p>
                            </div>
                            <div>
                                <p className="text-blue-400 text-xs">A⁻</p>
                                <p className="font-bold">{percentBase.toFixed(1)}%</p>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================
// C9. SOLUTIONS TAMPONS
// =========================================
export function SolutionsTampons() {
    const [pKa] = useState(4.75);
    const [addedAcid, setAddedAcid] = useState(0);
    const [addedBase, setAddedBase] = useState(0);

    // Effet tampon : le pH varie peu
    const pHInitial = pKa;
    const pHChange = (addedBase - addedAcid) * 0.1;
    const pH = Math.max(1, Math.min(14, pHInitial + pHChange));

    const reset = () => { setAddedAcid(0); setAddedBase(0); };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#10B981">SOLUTIONS TAMPONS</Text>

            {/* Bécher avec solution tampon */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[1.5, 1.2, 2.5, 32, 1, true]} />
                <meshPhysicalMaterial color="#fff" transmission={0.9} roughness={0} />
            </mesh>

            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.4, 1.1, 2, 32]} />
                <meshStandardMaterial color="#86EFAC" transparent opacity={0.6} />
            </mesh>

            {/* pH-mètre */}
            <group position={[2.5, 1, 0]}>
                <Box args={[1, 1.5, 0.3]}><meshStandardMaterial color="#1F2937" /></Box>
                <Text position={[0, 0.3, 0.2]} fontSize={0.15} color="#22C55E">pH</Text>
                <Text position={[0, -0.1, 0.2]} fontSize={0.35} color="#22C55E">{pH.toFixed(2)}</Text>
            </group>

            {/* Burettes */}
            <group position={[-2, 2, 0]}>
                <Cylinder args={[0.1, 0.1, 2]} rotation={[0, 0, 0]}><meshStandardMaterial color="#EF4444" /></Cylinder>
                <Text position={[0, 1.2, 0]} fontSize={0.15} color="#EF4444">HCl</Text>
            </group>
            <group position={[0, 2, 0]}>
                <Cylinder args={[0.1, 0.1, 2]} rotation={[0, 0, 0]}><meshStandardMaterial color="#3B82F6" /></Cylinder>
                <Text position={[0, 1.2, 0]} fontSize={0.15} color="#3B82F6">NaOH</Text>
            </group>

            <Text position={[0, -2.8, 0]} fontSize={0.18} color="#FBBF24">
                Tampon = Acide faible + Base conjuguée (résiste aux variations de pH)
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel usePortal={false} title="🧪 Solution Tampon">
                    <div className="text-white min-w-[220px]">
                        <p className="text-sm text-center mb-3 bg-green-900/50 p-2 rounded">
                            Tampon CH₃COOH / CH₃COO⁻
                        </p>

                        <div className="flex gap-2 mb-2">
                            <button onClick={() => setAddedAcid(a => a + 1)}
                                className="flex-1 py-2 rounded bg-red-600 font-bold text-sm">
                                + HCl
                            </button>
                            <button onClick={() => setAddedBase(b => b + 1)}
                                className="flex-1 py-2 rounded bg-blue-600 font-bold text-sm">
                                + NaOH
                            </button>
                        </div>
                        <button onClick={reset} className="w-full py-1 rounded bg-gray-600 text-sm">↺ Reset</button>

                        <div className="mt-3 p-2 bg-gray-800 rounded text-center">
                            <p className="text-xs text-gray-400">pH initial = pKa = {pKa}</p>
                            <p className="text-2xl font-bold text-green-400">pH = {pH.toFixed(2)}</p>
                            <p className="text-xs text-yellow-400 mt-1">
                                Variation: {pHChange > 0 ? '+' : ''}{pHChange.toFixed(2)}
                            </p>
                        </div>

                        <p className="mt-2 text-xs text-gray-400 text-center">
                            💡 Le pH varie peu grâce à l'effet tampon !
                        </p>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

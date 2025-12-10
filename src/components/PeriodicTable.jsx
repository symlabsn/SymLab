import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

// Base de données des éléments chimiques (les 20 premiers)
const ELEMENTS = [
    { z: 1, symbol: 'H', name: 'Hydrogène', mass: 1, family: 'Non-métal', period: 1, group: 1, config: '1s¹', color: '#FFFFFF' },
    { z: 2, symbol: 'He', name: 'Hélium', mass: 4, family: 'Gaz Noble', period: 1, group: 18, config: '1s²', color: '#D9FFFF' },
    { z: 3, symbol: 'Li', name: 'Lithium', mass: 7, family: 'Alcalin', period: 2, group: 1, config: '[He] 2s¹', color: '#CC80FF' },
    { z: 4, symbol: 'Be', name: 'Béryllium', mass: 9, family: 'Alcalino-terreux', period: 2, group: 2, config: '[He] 2s²', color: '#C2FF00' },
    { z: 5, symbol: 'B', name: 'Bore', mass: 11, family: 'Métalloïde', period: 2, group: 13, config: '[He] 2s²2p¹', color: '#FFB5B5' },
    { z: 6, symbol: 'C', name: 'Carbone', mass: 12, family: 'Non-métal', period: 2, group: 14, config: '[He] 2s²2p²', color: '#909090' },
    { z: 7, symbol: 'N', name: 'Azote', mass: 14, family: 'Non-métal', period: 2, group: 15, config: '[He] 2s²2p³', color: '#3050F8' },
    { z: 8, symbol: 'O', name: 'Oxygène', mass: 16, family: 'Non-métal', period: 2, group: 16, config: '[He] 2s²2p⁴', color: '#FF0D0D' },
    { z: 9, symbol: 'F', name: 'Fluor', mass: 19, family: 'Halogène', period: 2, group: 17, config: '[He] 2s²2p⁵', color: '#90E050' },
    { z: 10, symbol: 'Ne', name: 'Néon', mass: 20, family: 'Gaz Noble', period: 2, group: 18, config: '[He] 2s²2p⁶', color: '#B3E3F5' },
    { z: 11, symbol: 'Na', name: 'Sodium', mass: 23, family: 'Alcalin', period: 3, group: 1, config: '[Ne] 3s¹', color: '#AB5CF2' },
    { z: 12, symbol: 'Mg', name: 'Magnésium', mass: 24, family: 'Alcalino-terreux', period: 3, group: 2, config: '[Ne] 3s²', color: '#8AFF00' },
    { z: 13, symbol: 'Al', name: 'Aluminium', mass: 27, family: 'Métal pauvre', period: 3, group: 13, config: '[Ne] 3s²3p¹', color: '#BFA6A6' },
    { z: 14, symbol: 'Si', name: 'Silicium', mass: 28, family: 'Métalloïde', period: 3, group: 14, config: '[Ne] 3s²3p²', color: '#F0C8A0' },
    { z: 15, symbol: 'P', name: 'Phosphore', mass: 31, family: 'Non-métal', period: 3, group: 15, config: '[Ne] 3s²3p³', color: '#FF8000' },
    { z: 16, symbol: 'S', name: 'Soufre', mass: 32, family: 'Non-métal', period: 3, group: 16, config: '[Ne] 3s²3p⁴', color: '#FFFF30' },
    { z: 17, symbol: 'Cl', name: 'Chlore', mass: 35.5, family: 'Halogène', period: 3, group: 17, config: '[Ne] 3s²3p⁵', color: '#1FF01F' },
    { z: 18, symbol: 'Ar', name: 'Argon', mass: 40, family: 'Gaz Noble', period: 3, group: 18, config: '[Ne] 3s²3p⁶', color: '#80D1E3' },
    { z: 19, symbol: 'K', name: 'Potassium', mass: 39, family: 'Alcalin', period: 4, group: 1, config: '[Ar] 4s¹', color: '#8F40D4' },
    { z: 20, symbol: 'Ca', name: 'Calcium', mass: 40, family: 'Alcalino-terreux', period: 4, group: 2, config: '[Ar] 4s²', color: '#3DFF00' },
];

const FAMILY_COLORS = {
    'Alcalin': '#8B5CF6',
    'Alcalino-terreux': '#10B981',
    'Gaz Noble': '#3B82F6',
    'Halogène': '#F59E0B',
    'Non-métal': '#EF4444',
    'Métalloïde': '#EC4899',
    'Métal pauvre': '#6B7280',
};

export function PeriodicTable() {
    const [protons, setProtons] = useState(1);
    const [neutrons, setNeutrons] = useState(0);
    const [electrons, setElectrons] = useState(1);
    const [showHint, setShowHint] = useState(false);

    const nucleusRef = useRef();
    const electronRefs = useRef([]);

    // Trouver l'élément correspondant
    const element = useMemo(() => {
        return ELEMENTS.find(el => el.z === protons) || null;
    }, [protons]);

    // Vérifier si c'est un atome neutre
    const isNeutral = protons === electrons;
    const ionType = protons > electrons ? `${element?.symbol}${protons - electrons}+` :
        protons < electrons ? `${element?.symbol}${electrons - protons}-` : null;

    // Calcul du nombre de masse
    const massNumber = protons + neutrons;

    // Animation des électrons
    useFrame((state, delta) => {
        electronRefs.current.forEach((el, i) => {
            if (el) {
                const speed = 1 + i * 0.3;
                el.rotation.z += delta * speed;
            }
        });

        if (nucleusRef.current) {
            nucleusRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[-4, 0.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[300px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚛️ Tableau Périodique Interactif</h3>

                    <div className="space-y-3">
                        {/* Contrôles */}
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <label className="block text-xs text-center mb-1 text-red-400">Protons (Z)</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={protons}
                                    onChange={(e) => {
                                        const val = Math.max(1, Math.min(20, parseInt(e.target.value) || 1));
                                        setProtons(val);
                                        if (electrons === protons || showHint) setElectrons(val);
                                    }}
                                    className="w-full p-2 bg-red-900/50 border border-red-500/50 rounded text-center text-lg font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-center mb-1 text-gray-400">Neutrons (N)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="30"
                                    value={neutrons}
                                    onChange={(e) => setNeutrons(Math.max(0, Math.min(30, parseInt(e.target.value) || 0)))}
                                    className="w-full p-2 bg-gray-900/50 border border-gray-500/50 rounded text-center text-lg font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-center mb-1 text-blue-400">Électrons (e⁻)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="20"
                                    value={electrons}
                                    onChange={(e) => setElectrons(Math.max(0, Math.min(20, parseInt(e.target.value) || 0)))}
                                    className="w-full p-2 bg-blue-900/50 border border-blue-500/50 rounded text-center text-lg font-bold"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setShowHint(!showHint)}
                            className={`w-full py-1 rounded text-xs ${showHint ? 'bg-yellow-600' : 'bg-gray-700'}`}
                        >
                            {showHint ? '💡 Indices ON' : '💡 Indices OFF'}
                        </button>

                        {/* Info sur l'élément trouvé */}
                        {element ? (
                            <div className="p-3 rounded-lg border-2" style={{
                                borderColor: FAMILY_COLORS[element.family] || '#666',
                                background: `${FAMILY_COLORS[element.family]}20`
                            }}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-4xl font-black" style={{ color: element.color }}>
                                        {element.symbol}
                                    </span>
                                    <div className="text-right">
                                        <div className="text-lg font-bold">{element.name}</div>
                                        <div className="text-xs text-gray-400">Z = {element.z}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span className="text-gray-400">Famille:</span>
                                        <div className="font-bold" style={{ color: FAMILY_COLORS[element.family] }}>
                                            {element.family}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Période / Groupe:</span>
                                        <div className="font-bold">{element.period} / {element.group}</div>
                                    </div>
                                </div>

                                <div className="mt-2 p-2 bg-black/30 rounded text-center">
                                    <div className="text-xs text-gray-400">Configuration Électronique</div>
                                    <div className="font-mono text-sm text-cyan-400">{element.config}</div>
                                </div>

                                {/* Notation atomique */}
                                <div className="mt-2 text-center">
                                    <span className="text-xs text-gray-400">Notation: </span>
                                    <span className="font-mono">
                                        <sup className="text-yellow-400">{massNumber}</sup>
                                        <sub className="text-red-400">{protons}</sub>
                                        <span className="text-xl font-bold">{element.symbol}</span>
                                    </span>
                                </div>

                                {/* État ionique */}
                                {!isNeutral && (
                                    <div className="mt-2 p-2 bg-purple-900/30 rounded text-center">
                                        <span className="text-purple-400 font-bold">Ion: {ionType}</span>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="p-3 bg-red-900/30 rounded-lg text-center">
                                <span className="text-red-400">Élément non trouvé (Z = {protons})</span>
                            </div>
                        )}

                        {showHint && element && (
                            <div className="text-xs text-yellow-400 text-center">
                                💡 Neutrons typiques: {element.mass - element.z}
                            </div>
                        )}
                    </div>
                </div>
            </Html>

            <Text position={[2, 3.5, 0]} fontSize={0.5} color="white">
                {element ? `${element.name} (${element.symbol})` : 'ATOME'}
            </Text>

            {/* Noyau */}
            <group ref={nucleusRef}>
                {/* Protons (rouge) */}
                {Array.from({ length: Math.min(protons, 10) }).map((_, i) => {
                    const angle = (i / Math.min(protons, 10)) * Math.PI * 2;
                    const r = 0.3 + (i % 2) * 0.15;
                    return (
                        <mesh key={`p-${i}`} position={[
                            Math.cos(angle) * r,
                            Math.sin(angle) * r * 0.5,
                            Math.sin(angle) * r * 0.5
                        ]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.3} />
                        </mesh>
                    );
                })}

                {/* Neutrons (gris) */}
                {Array.from({ length: Math.min(neutrons, 10) }).map((_, i) => {
                    const angle = (i / Math.min(neutrons, 10)) * Math.PI * 2 + 0.5;
                    const r = 0.25 + (i % 2) * 0.2;
                    return (
                        <mesh key={`n-${i}`} position={[
                            Math.cos(angle) * r,
                            Math.sin(angle) * r * 0.5 + 0.1,
                            Math.sin(angle) * r * 0.5
                        ]}>
                            <sphereGeometry args={[0.14, 16, 16]} />
                            <meshStandardMaterial color="#6B7280" />
                        </mesh>
                    );
                })}
            </group>

            {/* Orbites et électrons */}
            {Array.from({ length: Math.min(Math.ceil(electrons / 2), 4) }).map((_, shell) => {
                const radius = 1 + shell * 0.6;
                const electronsInShell = Math.min(2 * (shell + 1) ** 2, electrons - shell * 2);

                return (
                    <group key={`shell-${shell}`} ref={el => electronRefs.current[shell] = el}>
                        {/* Orbite */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[radius, 0.01, 16, 64]} />
                            <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                        </mesh>

                        {/* Électrons sur cette couche */}
                        {Array.from({ length: Math.min(electronsInShell, 8) }).map((_, e) => {
                            const eAngle = (e / electronsInShell) * Math.PI * 2;
                            return (
                                <mesh key={`e-${shell}-${e}`} position={[
                                    Math.cos(eAngle) * radius,
                                    0,
                                    Math.sin(eAngle) * radius
                                ]}>
                                    <sphereGeometry args={[0.08, 16, 16]} />
                                    <meshStandardMaterial
                                        color="#00F5D4"
                                        emissive="#00F5D4"
                                        emissiveIntensity={0.8}
                                    />
                                </mesh>
                            );
                        })}
                    </group>
                );
            })}

            {/* Légende famille */}
            {element && (
                <Text
                    position={[2, -2.5, 0]}
                    fontSize={0.3}
                    color={FAMILY_COLORS[element.family] || 'white'}
                >
                    {element.family}
                </Text>
            )}

            <Text position={[2, -3, 0]} fontSize={0.2} color="gray">
                {isNeutral ? 'Atome neutre' : `Ion ${ionType}`}
            </Text>
        </group>
    );
}

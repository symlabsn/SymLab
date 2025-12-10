import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MoleConcept() {
    const [element, setElement] = useState('C'); // C, H2O, Au, Fe
    const [moles, setMoles] = useState(1);

    // Données des éléments
    const ELEMENTS = {
        'C': { name: 'Carbone', molarMass: 12.0, color: '#374151', particleColor: '#1F2937', radius: 0.1 },
        'H2O': { name: 'Eau', molarMass: 18.0, color: '#3B82F6', particleColor: '#60A5FA', radius: 0.12 },
        'Fe': { name: 'Fer', molarMass: 55.8, color: '#9CA3AF', particleColor: '#D1D5DB', radius: 0.09 },
        'Au': { name: 'Or', molarMass: 197.0, color: '#FCD34D', particleColor: '#F59E0B', radius: 0.11 }
    };

    const particlesRef = useRef();
    const containerRef = useRef();

    // Calculs
    const currentData = ELEMENTS[element];
    const totalMass = (moles * currentData.molarMass).toFixed(1);
    const particleCount = (moles * 6.022).toFixed(2); // x 10^23

    // Génération visuelle des particules (échantillonnage pour éviter de faire crasher le GPU)
    // On montre ~100 particules par mole visuelle pour l'effet "tas"
    const particles = useMemo(() => {
        const count = Math.min(Math.ceil(moles * 50), 300);
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 1.5,
                y: (Math.random()) * 2,
                z: (Math.random() - 0.5) * 1.5,
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
            });
        }
        return temp;
    }, [moles, element]);

    useFrame((state) => {
        // Animation légère du conteneur ou des particules pour donner vie
        if (containerRef.current) {
            containerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧪 Le Concept de Mole</h3>

                    <div className="space-y-4">
                        {/* Choix substance */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Substance</label>
                            <div className="grid grid-cols-4 gap-1">
                                {Object.entries(ELEMENTS).map(([key, val]) => (
                                    <button
                                        key={key}
                                        onClick={() => setElement(key)}
                                        className={`px-2 py-1 text-sm rounded ${element === key ? 'bg-cyan-600 font-bold' : 'bg-gray-700'}`}
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Slider Moles */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Quantité: {moles} mol
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="3.0"
                                step="0.1"
                                value={moles}
                                onChange={(e) => setMoles(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Résultats Calculés */}
                        <div className="grid grid-cols-1 gap-2">
                            <div className="p-3 bg-gray-800 rounded flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Masse :</span>
                                <span className="text-cyan-400 font-bold text-lg">{totalMass} g</span>
                            </div>
                            <div className="p-3 bg-gray-800 rounded flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Particules :</span>
                                <div className="text-right">
                                    <span className="text-purple-400 font-bold text-lg">{particleCount}</span>
                                    <span className="text-purple-400 text-xs block">× 10²³</span>
                                </div>
                            </div>
                        </div>

                        {/* Rappel théorique */}
                        <div className="p-2 bg-blue-900/30 rounded text-center text-xs text-blue-200">
                            n = m / M <br />
                            1 mol = 6.022 × 10²³ atomes (Nₐ)
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                LA MOLE (Nₐ)
            </Text>

            {/* Balance ou Conteneur */}
            <group position={[1.5, -1, 0]}>
                {/* Plateau Balance */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[2, 2, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Pied Balance */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[1.5, 2.2, 2, 8]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                {/* Écran Digital Balance */}
                <group position={[0, -1, 1.1]}>
                    <mesh rotation={[-0.2, 0, 0]}>
                        <boxGeometry args={[1.5, 0.6, 0.1]} />
                        <meshStandardMaterial color="#000" />
                    </mesh>
                    <Text position={[0, 0, 0.06]} rotation={[-0.2, 0, 0]} fontSize={0.3} color="#10B981">
                        {totalMass} g
                    </Text>
                </group>

                {/* Bécher / Conteneur */}
                <group ref={containerRef} position={[0, 0.2, 0]}>
                    <mesh position={[0, 1.5, 0]}>
                        <cylinderGeometry args={[1.8, 1.8, 3, 32, 1, true]} />
                        <meshStandardMaterial color="#A5B4FC" transparent opacity={0.3} side={THREE.DoubleSide} />
                    </mesh>
                    {/* Fond du bécher */}
                    <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[1.8, 32]} />
                        <meshStandardMaterial color="#A5B4FC" transparent opacity={0.3} />
                    </mesh>

                    {/* Particules */}
                    <group position={[0, 0.2, 0]}>
                        {particles.map((p, i) => (
                            <mesh key={i} position={[p.x, p.y * (moles / 3), p.z]} rotation={p.rotation}>
                                <sphereGeometry args={[currentData.radius, 8, 8]} />
                                <meshStandardMaterial color={currentData.particleColor} />
                            </mesh>
                        ))}
                    </group>
                </group>
            </group>

            {/* Légende Visuelle */}
            <Text position={[4.5, 1, 0]} fontSize={0.2} color="gray" maxWidth={2}>
                Chaque sphère représente ici ~10²¹ particules réelles.
                C'est un amas énorme !
            </Text>
        </group>
    );
}

import { Text } from '@react-three/drei';

// Composant ADN (Double Hélice)
export function DNAHelix() {
    const numPairs = 12;
    const helixRadius = 0.8;
    const helixHeight = 6;

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ADN - DOUBLE HÉLICE</Text>

            {/* Brins d'ADN (deux hélices) */}
            {Array.from({ length: numPairs }).map((_, i) => {
                const t = (i / numPairs) * Math.PI * 4;
                const y = (i / numPairs) * helixHeight - helixHeight / 2;

                return (
                    <group key={`pair-${i}`}>
                        {/* Brin 1 (Bleu) */}
                        <mesh position={[
                            Math.cos(t) * helixRadius,
                            y,
                            Math.sin(t) * helixRadius
                        ]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} />
                        </mesh>

                        {/* Brin 2 (Rouge) */}
                        <mesh position={[
                            Math.cos(t + Math.PI) * helixRadius,
                            y,
                            Math.sin(t + Math.PI) * helixRadius
                        ]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.3} />
                        </mesh>

                        {/* Paire de bases (Barreaux de l'échelle) */}
                        <mesh
                            position={[0, y, 0]}
                            rotation={[0, t, Math.PI / 2]}
                        >
                            <cylinderGeometry args={[0.05, 0.05, helixRadius * 2, 8]} />
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#FCD34D" : "#10B981"}
                            />
                        </mesh>
                    </group>
                );
            })}

            {/* Légendes */}
            <Text position={[1.5, 2, 0]} fontSize={0.3} color="#3B82F6">Brin 1</Text>
            <Text position={[-1.5, 2, 0]} fontSize={0.3} color="#EF4444">Brin 2</Text>
            <Text position={[0, -3.5, 0]} fontSize={0.3} color="white">Paires de bases (A-T, G-C)</Text>
        </group>
    );
}

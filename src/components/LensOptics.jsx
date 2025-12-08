import { Text } from '@react-three/drei';

// Composant Lentilles Optiques (Vision et Réfraction)
export function LensOptics() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">LENTILLES ET VISION</Text>

            {/* Lentille Convergente (Gauche) */}
            <group position={[-3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="#3B82F6">Convergente</Text>

                {/* Lentille biconvexe */}
                <mesh>
                    <torusGeometry args={[0.8, 0.1, 16, 32, Math.PI]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.6} />
                </mesh>
                <mesh rotation={[0, 0, Math.PI]}>
                    <torusGeometry args={[0.8, 0.1, 16, 32, Math.PI]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.6} />
                </mesh>

                {/* Rayons convergents */}
                {Array.from({ length: 3 }).map((_, i) => {
                    const y = (i - 1) * 0.6;
                    return (
                        <group key={`conv-${i}`}>
                            {/* Rayon incident */}
                            <mesh position={[-1, y, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                                <meshStandardMaterial color="#FCD34D" />
                            </mesh>
                            {/* Rayon réfracté (converge) */}
                            <mesh position={[0.5, y * 0.3, 0]} rotation={[0, 0, Math.PI / 2 - y * 0.3]}>
                                <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                                <meshStandardMaterial color="#F59E0B" />
                            </mesh>
                        </group>
                    );
                })}

                {/* Foyer */}
                <mesh position={[1.2, 0, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={1} />
                </mesh>
                <Text position={[1.2, -0.5, 0]} fontSize={0.3} color="#EF4444">F</Text>
            </group>

            {/* Lentille Divergente (Droite) */}
            <group position={[3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="#EF4444">Divergente</Text>

                {/* Lentille biconcave */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <torusGeometry args={[0.8, 0.1, 16, 32, Math.PI]} />
                    <meshStandardMaterial color="#FCA5A5" transparent opacity={0.6} />
                </mesh>
                <mesh rotation={[0, 0, -Math.PI / 2]}>
                    <torusGeometry args={[0.8, 0.1, 16, 32, Math.PI]} />
                    <meshStandardMaterial color="#FCA5A5" transparent opacity={0.6} />
                </mesh>

                {/* Rayons divergents */}
                {Array.from({ length: 3 }).map((_, i) => {
                    const y = (i - 1) * 0.6;
                    return (
                        <group key={`div-${i}`}>
                            {/* Rayon incident */}
                            <mesh position={[-1, y, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                                <meshStandardMaterial color="#FCD34D" />
                            </mesh>
                            {/* Rayon réfracté (diverge) */}
                            <mesh position={[0.5, y * 1.5, 0]} rotation={[0, 0, Math.PI / 2 + y * 0.5]}>
                                <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                                <meshStandardMaterial color="#F59E0B" />
                            </mesh>
                        </group>
                    );
                })}

                {/* Foyer virtuel */}
                <mesh position={[-1.2, 0, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#7C3AED" transparent opacity={0.5} />
                </mesh>
                <Text position={[-1.2, -0.5, 0]} fontSize={0.3} color="#7C3AED">F&apos;</Text>
            </group>

            {/* Légendes */}
            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">Convergente: Myopie | Divergente: Hypermétropie</Text>
            <Text position={[0, -3, 0]} fontSize={0.25} color="gray">Les rayons parallèles convergent (ou semblent diverger) au foyer</Text>
        </group>
    );
}

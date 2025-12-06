// Composant Pile Électrochimique (Oxydoréduction)
export function ElectrochemicalCell() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">PILE ÉLECTROCHIMIQUE</Text>

            {/* Bécher Gauche (Anode -) */}
            <group position={[-2, 0, 0]}>
                {/* Bécher */}
                <mesh>
                    <cylinderGeometry args={[0.8, 0.8, 2, 32, 1, true]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} side={2} />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="#EF4444">Anode (-)</Text>

                {/* Électrode Zinc */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.3, 1.5, 0.1]} />
                    <meshStandardMaterial color="#9CA3AF" metalness={0.8} roughness={0.2} />
                </mesh>
                <Text position={[0, -1.3, 0]} fontSize={0.25} color="white">Zn</Text>

                {/* Ions Zn²⁺ (qui partent) */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <mesh key={i} position={[
                        (Math.random() - 0.5) * 0.6,
                        (Math.random() - 0.5) * 0.8,
                        (Math.random() - 0.5) * 0.6
                    ]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.5} />
                    </mesh>
                ))}

                <Text position={[0, -1.8, 0]} fontSize={0.2} color="#60A5FA">Oxydation: Zn → Zn²⁺ + 2e⁻</Text>
            </group>

            {/* Bécher Droit (Cathode +) */}
            <group position={[2, 0, 0]}>
                {/* Bécher */}
                <mesh>
                    <cylinderGeometry args={[0.8, 0.8, 2, 32, 1, true]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.3} side={2} />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="#3B82F6">Cathode (+)</Text>

                {/* Électrode Cuivre */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.3, 1.5, 0.1]} />
                    <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.2} />
                </mesh>
                <Text position={[0, -1.3, 0]} fontSize={0.25} color="white">Cu</Text>

                {/* Ions Cu²⁺ (qui se déposent) */}
                {Array.from({ length: 3 }).map((_, i) => (
                    <mesh key={i} position={[
                        0.15 + (Math.random() - 0.5) * 0.1,
                        (i - 1) * 0.4,
                        0
                    ]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#F59E0B" />
                    </mesh>
                ))}

                <Text position={[0, -1.8, 0]} fontSize={0.2} color="#10B981">Réduction: Cu²⁺ + 2e⁻ → Cu</Text>
            </group>

            {/* Pont Salin */}
            <group position={[0, 0.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.15, 3.5, 16]} />
                    <meshStandardMaterial color="#FCD34D" transparent opacity={0.4} />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.25} color="#FCD34D">Pont Salin</Text>

                {/* Ions en mouvement dans le pont */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <mesh key={i} position={[-1.5 + i * 0.7, 0.5, 0]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshStandardMaterial color={i % 2 === 0 ? "#FCD34D" : "#F59E0B"} />
                    </mesh>
                ))}
            </group>

            {/* Fil et électrons */}
            <group position={[0, 2, 0]}>
                {/* Fil conducteur */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>

                {/* Électrons en mouvement (de - vers +) */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <mesh key={i} position={[-1.5 + i * 0.8, 0, 0]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
                    </mesh>
                ))}
                <Text position={[0, 0.4, 0]} fontSize={0.25} color="#00F5D4">e⁻ →</Text>

                {/* Ampoule */}
                <mesh position={[0, 0.8, 0]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={1.2} />
                </mesh>
            </group>

            <Text position={[0, -2.8, 0]} fontSize={0.3} color="white">Énergie Chimique → Énergie Électrique</Text>
        </group>
    );
}

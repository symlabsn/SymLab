import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MolecularGeometry() {
    const [doubletsLiants, setDoubletsLiants] = useState(2); // Atomes liés (X)
    const [doubletsNonLiants, setDoubletsNonLiants] = useState(0); // Paires libres (E)
    const [rotationSpeed, setRotationSpeed] = useState(0.5);

    // Notation AXmEn
    const notation = `AX${doubletsLiants}E${doubletsNonLiants}`;

    const moleculeRef = useRef();

    // Détermination de la forme géométrique (VSEPR Simplifié)
    const geometryType = useMemo(() => {
        const total = doubletsLiants + doubletsNonLiants;
        if (total === 2) return { name: 'Linéaire', angle: '180°', shape: 'linear' };
        if (total === 3) {
            if (doubletsNonLiants === 0) return { name: 'Trigonale Plane', angle: '120°', shape: 'trigonal' };
            return { name: 'Coudée', angle: '< 120°', shape: 'bent' };
        }
        if (total === 4) {
            if (doubletsNonLiants === 0) return { name: 'Tétraédrique', angle: '109.5°', shape: 'tetrahedral' };
            if (doubletsNonLiants === 1) return { name: 'Pyramide Trigonale', angle: '< 109.5°', shape: 'pyramidal' };
            return { name: 'Coudée', angle: '<< 109.5°', shape: 'bent_tetra' };
        }
        if (total === 5) return { name: 'Bipyramide Trigonale', angle: '90°/120°', shape: 'bipyramidal' };
        if (total === 6) return { name: 'Octaédrique', angle: '90°', shape: 'octahedral' };
        return { name: 'Complexe', angle: '?', shape: 'complex' };
    }, [doubletsLiants, doubletsNonLiants]);

    // Positions des atomes selon la forme (vecteurs unitaires)
    const atomPositions = useMemo(() => {
        // Logique simplifiée de placement pour les formes classiques
        // On génère des vecteurs
        const pos = [];
        const total = doubletsLiants + doubletsNonLiants;

        if (total === 2) { // Linéaire
            pos.push(new THREE.Vector3(2, 0, 0));
            pos.push(new THREE.Vector3(-2, 0, 0));
        } else if (total === 3) { // Triangulaire
            for (let i = 0; i < 3; i++) {
                const angle = (i * 2 * Math.PI) / 3;
                pos.push(new THREE.Vector3(Math.cos(angle) * 2, Math.sin(angle) * 2, 0));
            }
        } else if (total === 4) { // Tétraédrique
            // Sommets cube alternés
            pos.push(new THREE.Vector3(1.5, 1.5, 1.5));
            pos.push(new THREE.Vector3(-1.5, -1.5, 1.5));
            pos.push(new THREE.Vector3(-1.5, 1.5, -1.5));
            pos.push(new THREE.Vector3(1.5, -1.5, -1.5));
        } else {
            // Fallback pour > 4 (génération sphérique simple)
            for (let i = 0; i < total; i++) {
                // Fibonacci sphere distribution pour répartition uniforme
                const phi = Math.acos(1 - 2 * (i + 0.5) / total);
                const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
                pos.push(new THREE.Vector3(
                    Math.cos(theta) * Math.sin(phi) * 2,
                    Math.sin(theta) * Math.sin(phi) * 2,
                    Math.cos(phi) * 2
                ));
            }
        }

        return pos;
    }, [doubletsLiants, doubletsNonLiants]);

    useFrame((state, delta) => {
        if (moleculeRef.current) {
            moleculeRef.current.rotation.y += delta * rotationSpeed;
            moleculeRef.current.rotation.x += delta * rotationSpeed * 0.5;
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚛️ Géométrie VSEPR</h3>

                    <div className="space-y-4">
                        {/* Atomes liés X */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Atomes liés (X) : {doubletsLiants}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="6"
                                step="1"
                                value={doubletsLiants}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val + doubletsNonLiants <= 6) setDoubletsLiants(val);
                                }}
                                className="w-full accent-green-500"
                            />
                        </div>

                        {/* Doublets Non-Liants E */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Doublets Libres (E) : {doubletsNonLiants}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="3"
                                step="1"
                                value={doubletsNonLiants}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val + doubletsLiants <= 6) setDoubletsNonLiants(val);
                                }}
                                className="w-full accent-pink-500"
                            />
                        </div>

                        {/* Résultat */}
                        <div className="p-3 bg-gray-800 rounded text-center border border-gray-600 space-y-2">
                            <div className="text-2xl font-bold text-white">{notation}</div>
                            <div className="text-lg text-cyan-400 font-bold">{geometryType.name}</div>
                            <div className="text-sm text-gray-400">Angle : {geometryType.angle}</div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                MÉTHODE VSEPR
            </Text>

            {/* Molécule 3D */}
            <group position={[1.5, 0, 0]}>
                <group ref={moleculeRef}>
                    {/* Atome Central A */}
                    <mesh>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <meshStandardMaterial color="#9CA3AF" />
                    </mesh>

                    {/* Substituants et Doublets */}
                    {atomPositions.map((pos, i) => {
                        // Les premiers sont des atomes (X), les derniers des doublets (E)
                        // Logique simple modifiée pour l'affichage :
                        // Si on a X et E, il faut assigner E aux positions qui minimisent les répulsions (pas géré parfaitement ici)
                        // Simplification : les derniers indices dans le tableau positions deviennent des doublets libres

                        const isLonePair = i >= doubletsLiants;

                        return (
                            <group key={i} position={pos} lookAt={new THREE.Vector3(0, 0, 0)}>
                                {/* Liaison */}
                                {!isLonePair && (
                                    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}
                                    // Hack: lookAt fait regarder vers 0. Il faut dessiner le cylindre vers l'origine
                                    // Le cylindre est centré. On doit le placer à mi-chemin
                                    >
                                        {/* On dessine la liaison séparement car la rotation locale est complexe.
                                            Astuce: On met la liaison dans le repère parent (group ref) 
                                         */}
                                    </mesh>
                                )}

                                {/* Liaison Cylindre (du centre à l'atome) */}
                                <mesh position={[-(pos.x / 2), -(pos.y / 2), -(pos.z / 2)]}>
                                    {/* Position inverse relative car on est dans le groupe décalé de pos */}
                                    {/* Mieux : dessiner la liaison depuis le centre 0,0,0 vers pos outside of map */}
                                </mesh>

                                {/* Atome X ou Doublet E */}
                                {isLonePair ? (
                                    // Doublet Libre (Forme goutte/ovale fantôme)
                                    <mesh>
                                        <sphereGeometry args={[0.5, 16, 16]} />
                                        <meshStandardMaterial color="#EC4899" transparent opacity={0.6} wireframe />
                                    </mesh>
                                ) : (
                                    // Atome Lié X
                                    <mesh>
                                        <sphereGeometry args={[0.5, 32, 32]} />
                                        <meshStandardMaterial color="#22C55E" />
                                    </mesh>
                                )}
                            </group>
                        );
                    })}

                    {/* Liaisons (Tubes gris) */}
                    {atomPositions.map((pos, i) => {
                        const isLonePair = i >= doubletsLiants;
                        if (isLonePair) return null; // Pas de liaison matérielle pour un doublet

                        // Créer un tube du centre (0,0,0) vers pos
                        const distance = pos.length();
                        const direction = pos.clone().normalize();
                        const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

                        return (
                            <mesh key={`bond-${i}`} position={pos.clone().multiplyScalar(0.5)} quaternion={quaternion}>
                                <cylinderGeometry args={[0.1, 0.1, distance, 8]} />
                                <meshStandardMaterial color="#D1D5DB" />
                            </mesh>
                        );
                    })}
                </group>
            </group>
        </group>
    );
}

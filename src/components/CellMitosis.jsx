import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CellMitosis() {
    const [step, setStep] = useState(0); // 0: Interphase, 1: Prophase, 2: Metaphase, 3: Anaphase, 4: Telophase

    // Données des étapes
    const STEPS = [
        { name: 'Interphase', desc: 'ADN décondensé, réplication en cours.', color: '#FCD34D' },
        { name: 'Prophase', desc: 'Condensation des chromosomes, disparition noyau.', color: '#F87171' },
        { name: 'Métaphase', desc: 'Alignement des chromosomes au centre (plaque équatoriale).', color: '#60A5FA' },
        { name: 'Anaphase', desc: 'Séparation des chromatides vers les pôles.', color: '#A78BFA' },
        { name: 'Télophase', desc: 'Division de la cellule (cytodiérèse) et reformation noyau.', color: '#34D399' }
    ];

    const chromosomesRef = useRef([]);
    const cellRef = useRef();

    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;

        // Animation globale douce
        if (cellRef.current) {
            cellRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
        }

        // Logique simplifiée d'animation des chromosomes selon l'étape
        chromosomesRef.current.forEach((chr, i) => {
            if (!chr) return;
            const targetPos = new THREE.Vector3();
            let targetRot = new THREE.Euler(0, 0, 0);

            if (step === 0) { // Interphase (dispersés, bougent un peu)
                targetPos.set(
                    Math.sin(time + i) * 0.5,
                    Math.cos(time * 0.8 + i) * 0.5,
                    Math.sin(time * 0.5 + i) * 0.2
                );
            } else if (step === 1) { // Prophase (se regroupent un peu mais désordre)
                targetPos.set(
                    (Math.random() - 0.5) * 1.5,
                    (Math.random() - 0.5) * 1.5,
                    0
                );
            } else if (step === 2) { // Métaphase (alignés verticalement)
                targetPos.set(0, (i - 1.5) * 0.8, 0);
                targetRot.set(0, 0, Math.PI / 2);
            } else if (step === 3) { // Anaphase (séparation, ici on simule par écartement groupe)
                // Simplification: pour l'anaphase on écarte juste les entiers
                const dir = i % 2 === 0 ? -1 : 1;
                targetPos.set(dir * 2, (Math.floor(i / 2) - 0.5) * 0.8, 0);
            } else if (step === 4) { // Telophase (deux pôles distincts)
                const dir = i % 2 === 0 ? -1 : 1;
                targetPos.set(dir * 2.5, 0, 0);
            }

            // Interpolation (lerp)
            chr.position.lerp(targetPos, 0.05);
            // chr.rotation.x = THREE.MathUtils.lerp(chr.rotation.x, targetRot.x, 0.05); (compliqué avec Euler)
        });
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧬 La Mitose</h3>

                    <div className="space-y-4">
                        {/* Contrôle Étapes */}
                        <div className="flex justify-between items-center bg-gray-800 p-2 rounded">
                            <button
                                onClick={() => setStep(Math.max(0, step - 1))}
                                disabled={step === 0}
                                className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-600"
                            >
                                ◀
                            </button>
                            <span className="font-bold text-cyan-400">{STEPS[step].name}</span>
                            <button
                                onClick={() => setStep(Math.min(4, step + 1))}
                                disabled={step === 4}
                                className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-600"
                            >
                                ▶
                            </button>
                        </div>

                        {/* Description Étape */}
                        <div className="p-3 bg-gray-900 rounded border-l-4" style={{ borderColor: STEPS[step].color }}>
                            <p className="text-sm text-gray-300">{STEPS[step].desc}</p>
                        </div>

                        {/* Barre de progression */}
                        <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2">
                            <div
                                className="h-1.5 rounded-full transition-all duration-500"
                                style={{ width: `${(step / 4) * 100}%`, backgroundColor: STEPS[step].color }}
                            />
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                DIVISION CELLULAIRE
            </Text>

            {/* Cellule Globale */}
            <group position={[1.5, 0, 0]} ref={cellRef}>
                {/* Membrane (change de forme en télophase via scale hack ou 2 sphères) */}
                {step < 4 ? (
                    <mesh>
                        <sphereGeometry args={[3, 32, 32]} />
                        <meshStandardMaterial color="#EC4899" transparent opacity={0.2} wireframe={false} />
                    </mesh>
                ) : (
                    <group>
                        <mesh position={[-2, 0, 0]}>
                            <sphereGeometry args={[2, 32, 32]} />
                            <meshStandardMaterial color="#EC4899" transparent opacity={0.2} />
                        </mesh>
                        <mesh position={[2, 0, 0]}>
                            <sphereGeometry args={[2, 32, 32]} />
                            <meshStandardMaterial color="#EC4899" transparent opacity={0.2} />
                        </mesh>
                    </group>
                )}

                {/* Chromosomes X */}
                {[...Array(4)].map((_, i) => (
                    <group key={i} ref={el => chromosomesRef.current[i] = el}>
                        {/* Forme de X */}
                        <mesh rotation={[0, 0, 0.5]} position={[0, 0, 0]}>
                            <capsuleGeometry args={[0.15, 1, 4, 8]} />
                            <meshStandardMaterial color={i % 2 === 0 ? "#60A5FA" : "#F87171"} />
                        </mesh>
                        <mesh rotation={[0, 0, -0.5]} position={[0, 0, 0]}>
                            <capsuleGeometry args={[0.15, 1, 4, 8]} />
                            <meshStandardMaterial color={i % 2 === 0 ? "#60A5FA" : "#F87171"} />
                        </mesh>
                    </group>
                ))}

                {/* Centrosomes et fuseau (visibles à partir de Prophase) */}
                {step > 0 && step < 4 && (
                    <group>
                        <mesh position={[-2.5, 0, 0]}>
                            <sphereGeometry args={[0.2]} />
                            <meshStandardMaterial color="yellow" />
                        </mesh>
                        <mesh position={[2.5, 0, 0]}>
                            <sphereGeometry args={[0.2]} />
                            <meshStandardMaterial color="yellow" />
                        </mesh>
                        {/* Fils du fuseau (lignes simples) */}
                        <mesh rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="white" opacity={0.3} transparent />
                        </mesh>
                    </group>
                )}
            </group>
        </group>
    );
}

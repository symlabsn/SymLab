import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ProteinSynthesis() {
    const [step, setStep] = useState(0); // Codon index
    const [chain, setChain] = useState([]); // Chaine polypeptidique

    // Code Génétique (Simplifié)
    const GENETIC_CODE = {
        'AUG': { aa: 'Met', color: '#10B981' }, // Start
        'UUU': { aa: 'Phe', color: '#F472B6' },
        'GGC': { aa: 'Gly', color: '#60A5FA' },
        'AAA': { aa: 'Lys', color: '#FCD34D' },
        'UAA': { aa: 'STOP', color: '#EF4444' } // Stop
    };

    // Séquence ARNm
    const mrnaSequence = ['AUG', 'UUU', 'GGC', 'AAA', 'UAA'];

    const ribosomeRef = useRef();

    useFrame((state, delta) => {
        // Animation fluide ribosome vers l'étape cible
        // Chaque étape = déplacement de 3 unités (largeur codon)
        const targetX = step * 1.5 - 3;
        if (ribosomeRef.current) {
            ribosomeRef.current.position.x = THREE.MathUtils.lerp(ribosomeRef.current.position.x, targetX, 0.1);
        }
    });

    const nextStep = () => {
        if (step >= mrnaSequence.length) return; // Fin

        const codon = mrnaSequence[step];
        const info = GENETIC_CODE[codon];

        if (info.aa === 'STOP') {
            // Détachement
        } else {
            // Ajout AA
            setChain(prev => [...prev, info]);
        }
        setStep(s => s + 1);
    };

    const reset = () => {
        setStep(0);
        setChain([]);
    };

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧬 Traduction (Synthèse)</h3>

                    <div className="space-y-3">
                        <div className="bg-gray-800 p-2 rounded text-center font-mono text-sm">
                            {mrnaSequence.map((c, i) => (
                                <span key={i} className={i === step ? "text-yellow-400 font-bold underline" : "text-gray-500"}> {c} </span>
                            ))}
                        </div>

                        <div className="text-center text-xs text-cyan-400">
                            Codon actuel : <span className="font-bold text-lg">{mrnaSequence[step] || 'FIN'}</span>
                        </div>

                        <div className="flex gap-2">
                            <button onClick={nextStep} disabled={step >= mrnaSequence.length} className="flex-1 py-3 bg-blue-600 rounded font-bold hover:bg-blue-500 disabled:bg-gray-700">
                                {step >= mrnaSequence.length ? 'Terminé' : '▶ Ajouter AA'}
                            </button>
                            <button onClick={reset} className="px-3 bg-red-600 rounded">R</button>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">RIBOSOME & ARNm</Text>

            {/* ARN messager (Ligne au sol) */}
            <group position={[0, -1, 0]}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[10, 0.2, 0.5]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                {/* Visualisation codons */}
                {mrnaSequence.map((codon, i) => (
                    <Text key={i} position={[i * 1.5 - 3, 0.3, 0.3]} fontSize={0.3} color="black" rotation={[-Math.PI / 4, 0, 0]}>
                        {codon}
                    </Text>
                ))}
            </group>

            {/* Ribosome (Grosse + Petite sous-unité) */}
            <group ref={ribosomeRef} position={[-3, 0, 0]}>
                {/* Grosse sous-unité */}
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5]} />
                    {/* Forme dôme */}
                    <meshStandardMaterial color="#FCA5A5" transparent opacity={0.8} />
                </mesh>
                {/* Petite sous-unité */}
                <mesh position={[0, -0.5, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial color="#F87171" />
                </mesh>

                {/* ARNc (Transfert) qui arrive - Animation simple : il est juste là quand on clique */}
            </group>

            {/* Chaine Polypeptidique (Acides Aminés) qui sort du ribosome */}
            <group>
                {chain.map((aa, i) => {
                    // La chaîne est attachée au ribosome courant ou flotte ?
                    // Elle sort du ribosome. Donc sa position dépend de l'étape.
                    // Si le ribosome avance, la chaîne le suit.
                    // Position relative au ribosome : [0, 2 + i*0.6, 0]
                    const ribosomeX = step * 1.5 - 3;
                    // Pour simplifier, on la fait "monter" au dessus du ribosome actuel
                    // Mais les anciens AA sont poussés vers le haut
                    const y = 2.5 + (chain.length - 1 - i) * 0.6;

                    return (
                        <group key={i} position={[ribosomeX + (i - chain.length) * 0.2, y, 0]}>
                            {/* Petit effet de traîne */}
                            <mesh>
                                <sphereGeometry args={[0.3, 16, 16]} />
                                <meshStandardMaterial color={aa.color} />
                            </mesh>
                            <Text position={[0, 0, 0.4]} fontSize={0.2} color="white">{aa.aa}</Text>
                            {/* Liaison peptidique */}
                            {i > 0 && (
                                <mesh position={[0, -0.3, 0]}>
                                    <cylinderGeometry args={[0.05, 0.05, 0.6]} />
                                    <meshStandardMaterial color="white" />
                                </mesh>
                            )}
                        </group>
                    );
                })}
            </group>
        </group>
    );
}

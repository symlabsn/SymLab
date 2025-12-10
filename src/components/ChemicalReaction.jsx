import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ChemicalReaction({ type = 'esterification' }) { // esterification, saponification
    const [progress, setProgress] = useState(0); // 0 (Réactifs) -> 1 (Produits)
    const [running, setRunning] = useState(false);

    // Config
    const CONFIG = {
        esterification: {
            title: "Estérification",
            eq: "Acide + Alcool ⇌ Ester + Eau",
            color: "#EC4899",
            reactants: [{ n: "Acide", c: "red" }, { n: "Alcool", c: "blue" }],
            products: [{ n: "Ester", c: "purple" }, { n: "Eau", c: "cyan" }]
        },
        saponification: {
            title: "Saponification",
            eq: "Ester (Gras) + Soude → Savon + Glycérol",
            color: "#10B981",
            reactants: [{ n: "Huile", c: "yellow" }, { n: "NaOH", c: "white" }],
            products: [{ n: "Savon", c: "green" }, { n: "Glycérol", c: "gray" }]
        }
    }[type] || CONFIG.esterification;

    useFrame((state, delta) => {
        if (running) {
            setProgress(p => Math.min(1, p + delta * 0.5));
        }
    });

    const reset = () => { setProgress(0); setRunning(false); };

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="font-bold mb-3 text-center" style={{ color: CONFIG.color }}>⚗️ {CONFIG.title}</h3>
                    <div className="text-center text-xs mb-4">
                        {CONFIG.eq}
                    </div>
                    <button onClick={() => setRunning(true)} disabled={running && progress < 1} className="w-full py-2 bg-blue-600 rounded font-bold mb-2">
                        Démarrer Réaction
                    </button>
                    <button onClick={reset} className="w-full py-2 bg-gray-700 rounded font-bold">
                        Reset
                    </button>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color={CONFIG.color}>{CONFIG.title.toUpperCase()}</Text>

            {/* Scène Réaction */}

            {/* Réactifs (Disparaissent quand progress augmente) */}
            <group position={[-3 * (1 - progress), 0, 0]} scale={[1 - progress, 1 - progress, 1 - progress]}>
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[0.8]} />
                    <meshStandardMaterial color={CONFIG.reactants[0].c} />
                </mesh>
                <Text position={[0, 2, 0]} fontSize={0.3}>{CONFIG.reactants[0].n}</Text>

                <mesh position={[0, -1, 0]}>
                    <sphereGeometry args={[0.6]} />
                    <meshStandardMaterial color={CONFIG.reactants[1].c} />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3}>{CONFIG.reactants[1].n}</Text>
            </group>

            {/* Zone de rencontre */}
            {progress > 0.2 && progress < 0.8 && (
                <mesh position={[0, 0, 0]} scale={[Math.sin(progress * Math.PI) * 1.5, Math.sin(progress * Math.PI) * 1.5, Math.sin(progress * Math.PI) * 1.5]}>
                    <sphereGeometry args={[1]} />
                    <meshStandardMaterial color="white" transparent opacity={0.5} emissive="white" emissiveIntensity={0.5} />
                </mesh>
            )}

            {/* Produits (Apparaissent quand progress augmente) */}
            <group position={[3 * progress, 0, 0]} scale={[progress, progress, progress]}>
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[1.5, 1, 1]} />
                    <meshStandardMaterial color={CONFIG.products[0].c} />
                </mesh>
                <Text position={[0, 2, 0]} fontSize={0.3}>{CONFIG.products[0].n}</Text>

                <mesh position={[0, -1, 0]}>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color={CONFIG.products[1].c} />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3}>{CONFIG.products[1].n}</Text>
            </group>

            <Text position={[0, -3.5, 0]} fontSize={0.3} color="gray">
                {progress < 0.5 ? "Approche..." : (progress >= 1 ? "Terminé !" : "Réaction...")}
            </Text>

        </group>
    );
}

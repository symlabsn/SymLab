import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SoundPropagation() {
    const [frequency, setFrequency] = useState(1); // Hz (Visualisation lente)
    const [amplitude, setAmplitude] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);

    // Grille de particules d'air (1D ou 2D)
    // Pour bien voir la compression longitudinale, une ligne ou un tube de points est mieux
    const particles = useMemo(() => {
        const p = [];
        for (let x = 0; x < 40; x++) {
            for (let y = 0; y < 5; y++) {
                // Position de repos
                p.push({
                    baseX: (x - 20) * 0.3,
                    baseY: (y - 2.5) * 0.3,
                    baseZ: (Math.random() - 0.5) * 0.5,
                    id: x * 10 + y
                });
            }
        }
        return p;
    }, []);

    const particlesRef = useRef([]);
    const membraneRef = useRef();

    useFrame((state, delta) => {
        if (!isPlaying) return;

        const time = state.clock.elapsedTime;

        // Animation membrane HP
        const displacement = Math.sin(time * frequency * 5) * amplitude * 0.2;
        if (membraneRef.current) {
            membraneRef.current.position.x = -4 + displacement;
            membraneRef.current.scale.x = 1 + displacement; // Effet visuel
        }

        // Animation particules (Onde longitudinale)
        // x(t) = x0 + A * cos(k*x0 - w*t)
        // C'est le déplacement autour de la position d'équilibre
        particlesRef.current.forEach((mesh, i) => {
            if (!mesh) return;
            const p = particles[i];

            // Onde qui se propage vers la droite
            // Phase dépend de la position X d'origine (k*x)
            const phase = p.baseX * 1.5;
            const wave = Math.sin(phase - time * frequency * 5); // Onde progressive

            // Déplacement longitudinal (sur l'axe X)
            const dx = wave * amplitude * 0.15;

            mesh.position.x = p.baseX + dx;

            // Couleur : Rouge si comprimé (dérivée négative/densité haute), Bleu si dilaté
            // Approximation visuelle : si les voisins sont proches...
            // Ou plus simple : baser sur la phase (la compression est maximale quand cos = -1 ou +1 ?)
            // Compression max à wave = 0 (pente max) ? Non.
            // Dans une onde de déplacement sinusoïdale, la surpression est déphasée de pi/2 (cosinus).
            const pressure = Math.cos(phase - time * frequency * 5);
            mesh.material.color.setHSL(0.6 - pressure * 0.3, 1, 0.5); // Bleu à Rouge
        });
    });

    return (
        <group>
            {/* UI */}
            <Html position={[-5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🔊 Propagation du Son</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-400">Fréquence (Hauteur)</label>
                            <input type="range" min="0.5" max="3" step="0.1" value={frequency} onChange={e => setFrequency(Number(e.target.value))} className="w-full accent-green-500" />
                            <div className="text-xs text-right text-green-400">{frequency < 1.5 ? "Grave (Basse)" : "Aigu (Haute)"}</div>
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Amplitude (Volume)</label>
                            <input type="range" min="0" max="2" step="0.1" value={amplitude} onChange={e => setAmplitude(Number(e.target.value))} className="w-full accent-blue-500" />
                            <div className="text-xs text-right text-blue-400">{amplitude < 1 ? "Faible (Chuchote)" : "Fort (Crie)"}</div>
                        </div>

                        <button onClick={() => setIsPlaying(!isPlaying)} className={`w-full py-2 rounded font-bold ${isPlaying ? 'bg-gray-700' : 'bg-green-600'}`}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ONDE LONGITUDINALE</Text>

            {/* Haut Parleur */}
            <group position={[-4, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <boxGeometry args={[1, 3, 3]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <mesh ref={membraneRef} position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <coneGeometry args={[1.2, 0.5, 32, 1, true]} />
                    <meshStandardMaterial color="#374151" side={THREE.DoubleSide} />
                </mesh>
            </group>

            {/* Particules d'Air */}
            <group>
                {particles.map((p, i) => (
                    <mesh
                        key={i}
                        ref={el => particlesRef.current[i] = el}
                        position={[p.baseX, p.baseY, p.baseZ]}
                    >
                        <sphereGeometry args={[0.08]} />
                        <meshBasicMaterial color="white" />
                    </mesh>
                ))}
            </group>

            {/* Indication vide/air */}
            <Text position={[6, -2, 0]} fontSize={0.2} color="gray" font="italic">
                Les molécules d'air vibrent sur place,<br />c'est l'énergie qui avance.
            </Text>
        </group>
    );
}

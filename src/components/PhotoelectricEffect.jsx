import { Text, Html, Line } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function PhotoelectricEffect() {
    const [wavelength, setWavelength] = useState(400); // nm (UV/Visible)
    const [intensity, setIntensity] = useState(5); // Nb photons
    const [metal, setMetal] = useState('Zn'); // Zn, Na, Cs

    // Potentiels d'extraction (Work Function) en eV
    // E = h*c / lambda. h*c approx 1240 eV.nm
    // E(eV) = 1240 / lambda(nm)
    const MATERIALS = {
        'Zn': { W: 4.3, name: 'Zinc', color: '#9CA3AF' },
        'Na': { W: 2.3, name: 'Sodium', color: '#FCD34D' },
        'Cs': { W: 2.1, name: 'Césium', color: '#F59E0B' },
        'Pt': { W: 6.35, name: 'Platine', color: '#E5E7EB' }
    };

    const photonEnergy = 1240 / wavelength;
    const workFunction = MATERIALS[metal].W;
    const kineticEnergy = Math.max(0, photonEnergy - workFunction);

    // Particules
    const photonsRef = useRef([]);
    const electronsRef = useRef([]);

    // Générateur de particules
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;

        // Photons descendent
        // Recyclage manuel ou génération continue

        // Si photon touche plaque (y=0) et E > W -> Émet électron
        // Visuellement : on peut juste faire boucler des photons.
    });

    // Rendu simple basé état
    const photonColor = new THREE.Color().setHSL(Math.max(0, (700 - wavelength) / 400 * 0.7), 1, 0.5); // Rouge à Violet approx

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">💡 Effet Photoélectrique</h3>

                    <div className="space-y-4">
                        <div className="bg-gray-800 p-2 rounded text-center space-y-1">
                            <div className="text-xs text-gray-400">Énergie Photon (E = hν)</div>
                            <div className="font-bold text-yellow-400">{photonEnergy.toFixed(2)} eV</div>
                            <div className="text-xs text-gray-400">Travail Extraction ({metal})</div>
                            <div className="font-bold text-red-400">{workFunction.toFixed(2)} eV</div>
                        </div>

                        <div className="p-2 border border-gray-600 rounded text-center">
                            {kineticEnergy > 0 ? (
                                <div className="text-green-400 font-bold">ÉLECTRONS ÉJECTÉS !<br /><span className="text-xs text-white">Ec = {kineticEnergy.toFixed(2)} eV</span></div>
                            ) : (
                                <div className="text-gray-500 font-bold">Pas d'effet<br /><span className="text-xs">Énergie insuffisante</span></div>
                            )}
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Longueur d'onde : {wavelength} nm</label>
                            <input type="range" min="200" max="800" step="10" value={wavelength} onChange={e => setWavelength(Number(e.target.value))} className="w-full" style={{ accentColor: '#' + photonColor.getHexString() }} />
                            <div className="w-full h-2 rounded mt-1 bg-gradient-to-r from-purple-500 via-green-500 to-red-500 opacity-50"></div>
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Métal Cible</label>
                            <div className="flex gap-1 mt-1">
                                {Object.keys(MATERIALS).map(m => (
                                    <button key={m} onClick={() => setMetal(m)} className={`flex-1 text-xs py-1 rounded ${metal === m ? 'bg-white text-black' : 'bg-gray-700'}`}>{m}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">E_cinétique = hν - W</Text>

            {/* Lampe */}
            <mesh position={[0, 3, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[1, 1.5, 32, 1, true]} />
                <meshStandardMaterial color="#374151" side={2} />
            </mesh>
            <mesh position={[0, 2.5, 0]}>
                <sphereGeometry args={[0.3]} />
                <meshStandardMaterial color={photonColor} emissive={photonColor} emissiveIntensity={2} />
            </mesh>
            <pointLight position={[0, 2.5, 0]} color={photonColor} intensity={intensity} distance={10} />

            {/* Flux Photons (Ondes sinusoïdales qui descendent) */}
            {[...Array(intensity)].map((_, i) => (
                <mesh key={i} position={[(Math.random() - 0.5) * 1.5, 2.5 - (Date.now() / 1000 * 2 + i) % 2.5, 0]}>
                    <sphereGeometry args={[0.05]} />
                    <meshBasicMaterial color={photonColor} />
                </mesh>
            ))}

            {/* Plaque Métal */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[4, 0.2, 2]} />
                <meshStandardMaterial color={MATERIALS[metal].color} metalness={0.8} roughness={0.2} />
            </mesh>
            <Text position={[1.5, -0.8, 1]} fontSize={0.3} color="black" rotation={[-Math.PI / 4, 0, 0]}>{MATERIALS[metal].name}</Text>

            {/* Électrons éjectés (Si E > W) */}
            {kineticEnergy > 0 && [...Array(Math.floor(intensity * (kineticEnergy / 2)))].map((_, i) => (
                <mesh key={`e-${i}`} position={[(Math.random() - 0.5) * 2, -0.9 + (Date.now() / 500 * Math.sqrt(kineticEnergy) + i) % 3, 0]}>
                    <sphereGeometry args={[0.08]} />
                    <meshBasicMaterial color="#FEF08A" /> {/* Jaune Electron */}
                </mesh>
            ))}
        </group>
    );
}

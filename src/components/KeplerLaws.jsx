import { Text, Html, Line } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function KeplerLaws() {
    const [eccentricity, setEccentricity] = useState(0.5);
    const [showArea, setShowArea] = useState(true);
    const [speed, setSpeed] = useState(1);

    // Orbite simulée Math
    // r = a(1-e^2) / (1 + e cos theta)
    // Pour simplifier visu, on prend a = 3
    const a = 3;

    // Génération trajectoire pour le tracé (Line)
    const points = useMemo(() => {
        const pts = [];
        for (let th = 0; th <= Math.PI * 2; th += 0.1) {
            const r = (a * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(th));
            pts.push(new THREE.Vector3(r * Math.cos(th), 0, r * Math.sin(th)));
        }
        // Fermer la boucle
        const r0 = (a * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(0));
        pts.push(new THREE.Vector3(r0 * Math.cos(0), 0, r0 * Math.sin(0)));
        return pts;
    }, [eccentricity]);

    const planetRef = useRef();
    const areaRef = useRef(); // Pour visualiser l'aire balayée

    // État simulation
    const [theta, setTheta] = useState(0);

    useFrame((state, delta) => {
        // Loi des Aires (2ème loi) : dA/dt = constant => r^2 * d(theta)/dt = C
        // Donc d(theta)/dt = C / r^2
        // Plus on est proche (r petit), plus theta change vite.

        const r = (a * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(theta));
        const dTheta = (delta * speed * 2) / (r * r); // vitesse angulaire

        const newTheta = theta + dTheta;
        setTheta(newTheta);

        if (planetRef.current) {
            planetRef.current.position.set(r * Math.cos(newTheta), 0, r * Math.sin(newTheta));
        }

    });

    // Soleil (Foyer 1) est à (0,0) dans l'équation polaire centrée sur foyer ? NON.
    // Dans r = p / (1+e cos theta), l'origine est au foyer.
    // Donc le Soleil est à [0,0,0]. C'est parfait.

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🪐 Lois de Kepler</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-400">Excentricité (e) : {eccentricity}</label>
                            <input type="range" min="0" max="0.8" step="0.1" value={eccentricity} onChange={e => setEccentricity(Number(e.target.value))} className="w-full accent-purple-500" />
                            <div className="text-[10px] text-right text-purple-400">0=Cercle, 0.9=Ellipse aplatie</div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400">Vitesse du temps</label>
                            <input type="range" min="0" max="3" step="0.1" value={speed} onChange={e => setSpeed(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="p-2 bg-white/10 rounded text-xs">
                            Lo 2 : Le rayon vecteur balaie des aires égales en des temps égaux.
                            <br />
                            <span className="text-yellow-400">Vitesse max au périhélie (près).</span>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">ORBITES PLANÉTAIRES</Text>

            {/* Soleil (Foyer) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.4]} />
                <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={2} />
            </mesh>
            <Text position={[0, -0.6, 0]} fontSize={0.2} color="orange">Soleil</Text>

            {/* Orbite */}
            <Line points={points} color="white" opacity={0.3} transparent lineWidth={1} />

            {/* Planète */}
            <mesh ref={planetRef}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>

            {/* Rayon Vecteur (Ligne Soleil-Planète) */}
            {/* On ne peut pas facilement lier deux objets dynamiques avec <Line> statique. 
                Utilisons un petit cylindre scalé dynamiquement ou juste on imagine.
             */}

            {/* Visu aire balayée (secteur) ? C'est complexe à faire propre en 3D frame par frame */}

        </group>
    );
}

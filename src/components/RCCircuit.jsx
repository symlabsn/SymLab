import { Text, Html, Line } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RCCircuit() {
    const [state, setState] = useState('off'); // off, charge, discharge
    const [t, setT] = useState(0);
    const [R, setR] = useState(100); // kOhm
    const [C, setC] = useState(10);  // microF

    // Constante de temps Tau = R * C (unités relatives)
    // Disons TauSec = (R * C) / 1000. 
    // R=100, C=10 => 1000 => Tau=1s
    const Tau = (R * C) / 1000;
    const E = 10; // Volts

    // Valeurs instantanées
    const [uC, setUC] = useState(0);
    const [i, setI] = useState(0);

    useFrame((_, delta) => {
        if (state === 'off') return;

        const dt = delta;
        setT(old => old + dt);

        let voltage = 0;
        let current = 0;

        if (state === 'charge') {
            // uc(t) = E * (1 - exp(-t/tau))
            voltage = E * (1 - Math.exp(-t / Tau));
            // i(t) = (E/R) * exp(-t/tau)
            current = (E / R) * Math.exp(-t / Tau);
        } else {
            // Décharge (supposons départ à E)
            // uc(t) = E * exp(-t/tau)
            voltage = E * Math.exp(-t / Tau);
            current = -(E / R) * Math.exp(-t / Tau);
        }

        setUC(voltage);
        setI(current);
    });

    // Courbe dynamique (points)
    // On veut afficher U en fct du temps.
    // Complexe en 3D pur. Utilisons un indicateur de remplissage.

    const electronSpeed = Math.abs(i) * 50; // Vitesse visuelle prop au courant

    // Électrons
    const electronsRef = useRef([]);

    useFrame((state, delta) => {
        if (!electronsRef.current) return;
        electronsRef.current.forEach((el, index) => {
            // Mouvement le long du circuit (Rectangulaire)
            // Circuit de -2 à 2 en X, -1 à 1 en Y
            // Paramètre 'pos' de 0 à perimeter
            if (!el.userData.pos) el.userData.pos = Math.random() * 12;

            // Sens du courant (Conventionnel + -> -). Électrons vont inverse (- -> +).
            // Charge : I positif (Générateur pousse). Électrons sortent du -
            // Décharge : I négatif.

            const direction = Math.sign(i);
            // Si i proche de 0, mouvement s'arrête

            el.userData.pos += direction * electronSpeed * delta;

            // Mapping pos -> Coordonnées Rectangulaire
            // 0: HautGauche (-2, 1) -> HautDroit (2, 1) [L=4]
            // 4: HautDroit -> BasDroit (2, -1) [L=2]
            // 6: BasDroit -> BasGauche (-2, -1) [L=4]
            // 10: BasGauche -> HautGauche (-2, 1) [L=2]
            // Total = 12

            let p = el.userData.pos % 12;
            if (p < 0) p += 12;

            let x = 0, y = 0;
            if (p < 4) { x = -2 + p; y = 1; }
            else if (p < 6) { x = 2; y = 1 - (p - 4); }
            else if (p < 10) { x = 2 - (p - 6); y = -1; }
            else { x = -2; y = -1 + (p - 10); }

            el.position.set(x, y, 0);
        });
    });

    const reset = (newState) => {
        setT(0);
        setState(newState);
        if (newState === 'charge') {
            // Si on charge, on part de 0 (ou de uC actuel si on voulait être précis, ici on simplifie reset à 0)
            setT(0);
            // setUC(0) sera calculé prochain frame
        } else if (newState === 'discharge') {
            // Décharge : on suppose condo chargé à E pour voir la belle courbe
            // ou on décharge depuis l'état actuel ? Faisons simple : décharge complète idéale
            setT(0);
        }
    };

    return (
        <group>
            <Html position={[-5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚡ Circuit RC</h3>

                    <div className="space-y-3">
                        {/* Jauges */}
                        <div className="text-xs">
                            <div className="flex justify-between"><span className="text-yellow-400">Tension Uc</span> <span>{uC.toFixed(2)} V</span></div>
                            <div className="w-full bg-gray-600 h-2 rounded"><div className="bg-yellow-400 h-2 rounded transition-all" style={{ width: `${(Math.max(0, uC) / E) * 100}%` }}></div></div>
                        </div>
                        <div className="text-xs">
                            <div className="flex justify-between"><span className="text-blue-400">Courant i</span> <span>{(i * 1000).toFixed(2)} mA</span></div>
                            {/* Courant peut être négatif */}
                            <div className="w-full bg-gray-600 h-2 rounded relative">
                                <div className="absolute left-1/2 w-0.5 h-full bg-white"></div>
                                <div className={`h-2 rounded absolute top-0 transition-all ${i > 0 ? 'bg-blue-400 left-1/2' : 'bg-red-400 right-1/2'}`}
                                    style={{
                                        width: `${Math.min(50, Math.abs(i) * 500)}%`,
                                        right: i < 0 ? '50%' : 'auto',
                                        left: i > 0 ? '50%' : 'auto'
                                    }}></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <button onClick={() => reset('charge')} className={`py-2 rounded font-bold ${state === 'charge' ? 'bg-green-500' : 'bg-gray-700'}`}>Charge</button>
                            <button onClick={() => reset('discharge')} className={`py-2 rounded font-bold ${state === 'discharge' ? 'bg-red-500' : 'bg-gray-700'}`}>Décharge</button>
                        </div>

                        <div className="text-xs text-gray-400 mt-2 space-y-1">
                            <div>R = {R} kΩ</div>
                            <input type="range" min="10" max="500" value={R} onChange={e => setR(Number(e.target.value))} className="w-full" />
                            <div>C = {C} µF</div>
                            <input type="range" min="1" max="50" value={C} onChange={e => setC(Number(e.target.value))} className="w-full" />
                            <div className="text-right text-gray-500">τ = {Tau.toFixed(2)} s</div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">CHARGE & DÉCHARGE</Text>

            {/* Circuit Visuel */}
            <group position={[0, -0.5, 0]}>
                {/* Fils */}
                <mesh position={[0, 1, 0]}> <boxGeometry args={[4, 0.05, 0.05]} /> <meshStandardMaterial color="gray" /> </mesh>
                <mesh position={[0, -1, 0]}> <boxGeometry args={[4, 0.05, 0.05]} /> <meshStandardMaterial color="gray" /> </mesh>
                <mesh position={[-2, 0, 0]}> <boxGeometry args={[0.05, 2, 0.05]} /> <meshStandardMaterial color="gray" /> </mesh>
                <mesh position={[2, 0, 0]}> <boxGeometry args={[0.05, 2, 0.05]} /> <meshStandardMaterial color="gray" /> </mesh>

                {/* Composants */}
                {/* Générateur à Gauche */}
                <group position={[-2, 0, 0]}>
                    <mesh><cylinderGeometry args={[0.4, 0.4, 0.8]} /><meshStandardMaterial color="#374151" /></mesh>
                    <Text position={[-0.6, 0, 0]} fontSize={0.3}>E</Text>
                </group>

                {/* Résistance en Haut */}
                <group position={[0, 1, 0]}>
                    <mesh><boxGeometry args={[1, 0.3, 0.3]} /><meshStandardMaterial color="#D97706" /></mesh>
                    <Text position={[0, 0.5, 0]} fontSize={0.3}>R</Text>
                </group>

                {/* Condensateur à Droite */}
                <group position={[2, 0, 0]}>
                    <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.6, 0.05, 0.4]} /><meshStandardMaterial color="#3B82F6" /></mesh>
                    <mesh position={[0, -0.2, 0]}><boxGeometry args={[0.6, 0.05, 0.4]} /><meshStandardMaterial color="#3B82F6" /></mesh>
                    <Text position={[0.6, 0, 0]} fontSize={0.3}>C</Text>
                    {/* Visualisation charge plaques */}
                    {uC > 0 && (
                        <>
                            <Text position={[-0.4, 0.4, 0]} fontSize={0.2} color="red">++++</Text>
                            <Text position={[-0.4, -0.4, 0]} fontSize={0.2} color="blue">----</Text>
                        </>
                    )}
                </group>

                {/* Électrons */}
                {state !== 'off' && [...Array(20)].map((_, i) => (
                    <mesh key={i} ref={el => electronsRef.current[i] = el}>
                        <sphereGeometry args={[0.08]} />
                        <meshBasicMaterial color="#FEF08A" />
                    </mesh>
                ))}
            </group>
        </group>
    );
}

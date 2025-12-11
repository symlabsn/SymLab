'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';

// ============================================================
// 1. MASSE VOLUMIQUE ET DENSITÉ - Simulation Interactive
// ============================================================
export function DensityExplorer() {
    const [selectedMaterial, setSelectedMaterial] = useState('eau');
    const [cubeSize, setCubeSize] = useState(1);

    const materials = {
        eau: { name: 'Eau', density: 1, color: '#3B82F6', emoji: '💧' },
        huile: { name: 'Huile', density: 0.92, color: '#F59E0B', emoji: '🫒' },
        fer: { name: 'Fer', density: 7.87, color: '#6B7280', emoji: '🔩' },
        bois: { name: 'Bois (Chêne)', density: 0.75, color: '#92400E', emoji: '🪵' },
        plomb: { name: 'Plomb', density: 11.34, color: '#374151', emoji: '⚫' },
        air: { name: 'Air', density: 0.0012, color: '#E5E7EB', emoji: '💨' },
        or: { name: 'Or', density: 19.3, color: '#FBBF24', emoji: '🥇' },
        liege: { name: 'Liège', density: 0.24, color: '#D2B48C', emoji: '🍾' },
    };

    const mat = materials[selectedMaterial];
    const volume = cubeSize ** 3;
    const mass = volume * mat.density * 1000; // en kg

    // Animation de flottaison
    const cubeRef = useRef();
    const [floatY, setFloatY] = useState(0);

    useFrame(({ clock }) => {
        if (cubeRef.current) {
            // Si densité < 1, flotte (y positif), sinon coule
            const targetY = mat.density < 1 ? 0.5 : (mat.density > 1 ? -1.5 : 0);
            cubeRef.current.position.y = THREE.MathUtils.lerp(cubeRef.current.position.y, targetY, 0.02);

            // Légère oscillation pour effet réaliste
            if (mat.density < 1) {
                cubeRef.current.position.y += Math.sin(clock.elapsedTime * 2) * 0.02;
            }
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[3.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-cyan-500/30 min-w-[280px] backdrop-blur-md select-none shadow-xl">
                    <h3 className="text-cyan-400 font-bold mb-3 text-lg">⚗️ Masse Volumique</h3>

                    {/* Sélection du matériau */}
                    <label className="block text-sm mb-2">Matériau :</label>
                    <div className="grid grid-cols-4 gap-1 mb-4">
                        {Object.entries(materials).map(([key, m]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedMaterial(key)}
                                className={`p-1 rounded text-xs transition-all ${selectedMaterial === key
                                        ? 'bg-cyan-600 ring-2 ring-cyan-400'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                            >
                                {m.emoji}
                            </button>
                        ))}
                    </div>

                    {/* Taille du cube */}
                    <label className="block text-sm mb-1">
                        Côté du cube : {cubeSize.toFixed(1)} dm
                    </label>
                    <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={cubeSize}
                        onChange={(e) => setCubeSize(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 mb-4"
                    />

                    {/* Résultats */}
                    <div className="bg-gray-900/80 p-3 rounded-lg space-y-2 font-mono text-sm">
                        <div className="flex justify-between border-b border-gray-700 pb-1">
                            <span className="text-gray-400">Matériau :</span>
                            <span className="text-white font-bold">{mat.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">ρ (masse vol.) :</span>
                            <span className="text-cyan-400">{mat.density} kg/L</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Volume :</span>
                            <span>{volume.toFixed(2)} dm³</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Masse :</span>
                            <span className="text-yellow-400">{mass.toFixed(0)} g</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-700">
                            <span className="text-gray-400">Densité :</span>
                            <span className={mat.density < 1 ? 'text-green-400' : 'text-red-400'}>
                                {mat.density} → {mat.density < 1 ? 'FLOTTE 🏊' : 'COULE ⚓'}
                            </span>
                        </div>
                    </div>

                    <div className="mt-3 text-xs text-gray-400 text-center">
                        ρ = m / V (masse / volume)
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#22D3EE">
                MASSE VOLUMIQUE ET DENSITÉ
            </Text>

            {/* Bécher avec eau */}
            <group position={[0, -1, 0]}>
                {/* Récipient transparent */}
                <mesh>
                    <cylinderGeometry args={[1.8, 1.5, 3, 32, 1, true]} />
                    <meshStandardMaterial
                        color="#87CEEB"
                        transparent
                        opacity={0.15}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Eau dans le bécher */}
                <mesh position={[0, -0.3, 0]}>
                    <cylinderGeometry args={[1.7, 1.4, 2.4, 32]} />
                    <meshStandardMaterial
                        color="#3B82F6"
                        transparent
                        opacity={0.5}
                    />
                </mesh>

                {/* Surface de l'eau */}
                <mesh position={[0, 0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[1.7, 32]} />
                    <meshStandardMaterial
                        color="#60A5FA"
                        transparent
                        opacity={0.7}
                    />
                </mesh>

                {/* Cube du matériau */}
                <mesh ref={cubeRef} position={[0, 0, 0]} scale={[cubeSize, cubeSize, cubeSize]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color={mat.color}
                        metalness={mat.density > 5 ? 0.8 : 0.2}
                        roughness={0.3}
                    />
                </mesh>
            </group>

            {/* Légende densité */}
            <Text position={[-3, 1, 0]} fontSize={0.25} color="#10B981">
                d {'<'} 1 → Flotte
            </Text>
            <Text position={[-3, 0.5, 0]} fontSize={0.25} color="#EF4444">
                d {'>'} 1 → Coule
            </Text>

            {/* Formule */}
            <Text position={[0, -3.2, 0]} fontSize={0.3} color="#F59E0B">
                ρ = m / V | d = ρ_objet / ρ_eau
            </Text>
        </group>
    );
}

// ============================================================
// 2. RÉFRACTION DE LA LUMIÈRE - Simulation Interactive
// ============================================================
export function RefractionSimulator() {
    const [incidenceAngle, setIncidenceAngle] = useState(45);
    const [medium1, setMedium1] = useState('air');
    const [medium2, setMedium2] = useState('eau');

    const media = {
        air: { name: 'Air', n: 1.0, color: '#E0F2FE' },
        eau: { name: 'Eau', n: 1.33, color: '#3B82F6' },
        verre: { name: 'Verre', n: 1.5, color: '#A5B4FC' },
        diamant: { name: 'Diamant', n: 2.42, color: '#F472B6' },
    };

    const n1 = media[medium1].n;
    const n2 = media[medium2].n;

    // Calcul de l'angle de réfraction (Snell-Descartes)
    const angleRad = (incidenceAngle * Math.PI) / 180;
    const sinRefracted = (n1 / n2) * Math.sin(angleRad);
    const isTotalReflection = Math.abs(sinRefracted) > 1;
    const refractionAngle = isTotalReflection ? 0 : Math.asin(sinRefracted) * (180 / Math.PI);

    // Calcul de l'angle critique pour réflexion totale
    const criticalAngle = n1 > n2 ? Math.asin(n2 / n1) * (180 / Math.PI) : null;

    // Animation du rayon
    const laserRef = useRef();

    useFrame(({ clock }) => {
        if (laserRef.current) {
            laserRef.current.material.opacity = 0.7 + Math.sin(clock.elapsedTime * 5) * 0.2;
        }
    });

    // Position des rayons
    const rayLength = 3;
    const incidentStartX = -rayLength * Math.sin(angleRad);
    const incidentStartY = rayLength * Math.cos(angleRad);

    const refractedAngleRad = (refractionAngle * Math.PI) / 180;
    const refractedEndX = rayLength * Math.sin(refractedAngleRad);
    const refractedEndY = -rayLength * Math.cos(refractedAngleRad);

    // Rayon réfléchi
    const reflectedEndX = rayLength * Math.sin(angleRad);
    const reflectedEndY = rayLength * Math.cos(angleRad);

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[4, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-purple-500/30 min-w-[280px] backdrop-blur-md select-none shadow-xl">
                    <h3 className="text-purple-400 font-bold mb-3 text-lg">🔦 Réfraction</h3>

                    {/* Angle d'incidence */}
                    <label className="block text-sm mb-1">
                        Angle d'incidence : {incidenceAngle}°
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="85"
                        value={incidenceAngle}
                        onChange={(e) => setIncidenceAngle(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500 mb-3"
                    />

                    {/* Milieu 1 */}
                    <div className="flex gap-2 mb-2">
                        <span className="text-sm text-gray-400 w-20">Milieu 1 :</span>
                        <select
                            value={medium1}
                            onChange={(e) => setMedium1(e.target.value)}
                            className="flex-1 bg-gray-800 rounded px-2 py-1 text-sm"
                        >
                            {Object.entries(media).map(([k, v]) => (
                                <option key={k} value={k}>{v.name} (n={v.n})</option>
                            ))}
                        </select>
                    </div>

                    {/* Milieu 2 */}
                    <div className="flex gap-2 mb-3">
                        <span className="text-sm text-gray-400 w-20">Milieu 2 :</span>
                        <select
                            value={medium2}
                            onChange={(e) => setMedium2(e.target.value)}
                            className="flex-1 bg-gray-800 rounded px-2 py-1 text-sm"
                        >
                            {Object.entries(media).map(([k, v]) => (
                                <option key={k} value={k}>{v.name} (n={v.n})</option>
                            ))}
                        </select>
                    </div>

                    {/* Résultats */}
                    <div className="bg-gray-900/80 p-3 rounded-lg space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">n₁ × sin(i) :</span>
                            <span>{(n1 * Math.sin(angleRad)).toFixed(3)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Angle réfracté :</span>
                            <span className={isTotalReflection ? 'text-red-400' : 'text-cyan-400'}>
                                {isTotalReflection ? 'RÉFLEXION TOTALE !' : `${refractionAngle.toFixed(1)}°`}
                            </span>
                        </div>
                        {criticalAngle && (
                            <div className="flex justify-between">
                                <span className="text-gray-400">Angle critique :</span>
                                <span className="text-yellow-400">{criticalAngle.toFixed(1)}°</span>
                            </div>
                        )}
                    </div>

                    <div className="mt-3 text-xs text-center text-purple-300">
                        n₁ × sin(i) = n₂ × sin(r)
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#A855F7">
                RÉFRACTION DE LA LUMIÈRE
            </Text>

            {/* Surface de séparation */}
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[8, 6]} />
                <meshStandardMaterial
                    color="#1E3A5F"
                    transparent
                    opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Milieu 1 (au-dessus) */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[8, 3, 6]} />
                <meshStandardMaterial
                    color={media[medium1].color}
                    transparent
                    opacity={0.2}
                />
            </mesh>
            <Text position={[-3, 2, 0]} fontSize={0.25} color={media[medium1].color}>
                {media[medium1].name} (n = {n1})
            </Text>

            {/* Milieu 2 (en dessous) */}
            <mesh position={[0, -1.5, 0]}>
                <boxGeometry args={[8, 3, 6]} />
                <meshStandardMaterial
                    color={media[medium2].color}
                    transparent
                    opacity={0.4}
                />
            </mesh>
            <Text position={[-3, -2, 0]} fontSize={0.25} color={media[medium2].color}>
                {media[medium2].name} (n = {n2})
            </Text>

            {/* Normale (ligne verticale) */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 6]} />
                <meshBasicMaterial color="#FFFFFF" opacity={0.5} transparent />
            </mesh>
            <Text position={[0.3, 2.8, 0]} fontSize={0.2} color="#FFFFFF">
                Normale
            </Text>

            {/* Rayon incident (rouge) */}
            <group>
                <mesh position={[incidentStartX / 2, incidentStartY / 2, 0]}
                    rotation={[0, 0, -angleRad]}>
                    <cylinderGeometry args={[0.05, 0.05, rayLength]} />
                    <meshStandardMaterial
                        ref={laserRef}
                        color="#EF4444"
                        emissive="#EF4444"
                        emissiveIntensity={1}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
                <Text position={[incidentStartX - 0.5, incidentStartY / 2, 0]} fontSize={0.2} color="#EF4444">
                    Incident ({incidenceAngle}°)
                </Text>
            </group>

            {/* Rayon réfracté ou réfléchi */}
            {!isTotalReflection ? (
                // Rayon réfracté (bleu)
                <group>
                    <mesh position={[refractedEndX / 2, refractedEndY / 2, 0]}
                        rotation={[0, 0, refractedAngleRad]}>
                        <cylinderGeometry args={[0.05, 0.05, rayLength]} />
                        <meshStandardMaterial
                            color="#3B82F6"
                            emissive="#3B82F6"
                            emissiveIntensity={0.8}
                            transparent
                            opacity={0.8}
                        />
                    </mesh>
                    <Text position={[refractedEndX + 0.5, refractedEndY / 2, 0]} fontSize={0.2} color="#3B82F6">
                        Réfracté ({refractionAngle.toFixed(0)}°)
                    </Text>
                </group>
            ) : (
                // Réflexion totale (jaune)
                <group>
                    <mesh position={[reflectedEndX / 2, reflectedEndY / 2, 0]}
                        rotation={[0, 0, angleRad]}>
                        <cylinderGeometry args={[0.05, 0.05, rayLength]} />
                        <meshStandardMaterial
                            color="#FBBF24"
                            emissive="#FBBF24"
                            emissiveIntensity={1}
                        />
                    </mesh>
                    <Text position={[reflectedEndX + 0.5, reflectedEndY / 2, 0]} fontSize={0.2} color="#FBBF24">
                        Réfléchi (Total)
                    </Text>
                </group>
            )}

            {/* Indicateurs d'angles */}
            <mesh position={[0, 0, 0]}>
                <torusGeometry args={[0.5, 0.02, 8, 32, angleRad]} />
                <meshBasicMaterial color="#EF4444" />
            </mesh>
        </group>
    );
}

// ============================================================
// 3. CIRCUIT SÉRIE VS PARALLÈLE - Simulation Interactive
// ============================================================
export function CircuitSeriesParallel() {
    const [circuitType, setCircuitType] = useState('serie');
    const [voltage, setVoltage] = useState(12);
    const [isBulb1On, setIsBulb1On] = useState(true);
    const [isBulb2On, setIsBulb2On] = useState(true);

    const resistance = 6; // Ohms par ampoule

    // Calculs selon le type de circuit
    let totalResistance, current, voltageBulb1, voltageBulb2, bulb1Works, bulb2Works;

    if (circuitType === 'serie') {
        // En série : R_total = R1 + R2
        const activeResistors = (isBulb1On ? 1 : 0) + (isBulb2On ? 1 : 0);
        totalResistance = resistance * 2;
        current = (isBulb1On && isBulb2On) ? voltage / totalResistance : 0;
        voltageBulb1 = isBulb1On ? voltage / 2 : 0;
        voltageBulb2 = isBulb2On ? voltage / 2 : 0;
        bulb1Works = isBulb1On && isBulb2On && current > 0;
        bulb2Works = isBulb1On && isBulb2On && current > 0;
    } else {
        // En parallèle : 1/R_total = 1/R1 + 1/R2
        totalResistance = resistance / 2;
        const current1 = isBulb1On ? voltage / resistance : 0;
        const current2 = isBulb2On ? voltage / resistance : 0;
        current = current1 + current2;
        voltageBulb1 = isBulb1On ? voltage : 0;
        voltageBulb2 = isBulb2On ? voltage : 0;
        bulb1Works = isBulb1On;
        bulb2Works = isBulb2On;
    }

    // Animation des électrons
    const electron1Ref = useRef();
    const electron2Ref = useRef();

    useFrame(({ clock }) => {
        const speed = current * 0.5;
        if (electron1Ref.current && bulb1Works) {
            const t = (clock.elapsedTime * speed) % 1;
            electron1Ref.current.position.x = -2 + t * 4;
        }
        if (electron2Ref.current && bulb2Works) {
            const t = (clock.elapsedTime * speed + 0.5) % 1;
            if (circuitType === 'parallele') {
                electron2Ref.current.position.x = -2 + t * 4;
            }
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[4, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-yellow-500/30 min-w-[280px] backdrop-blur-md select-none shadow-xl">
                    <h3 className="text-yellow-400 font-bold mb-3 text-lg">⚡ Circuits Électriques</h3>

                    {/* Choix du circuit */}
                    <div className="flex gap-2 mb-3">
                        <button
                            onClick={() => setCircuitType('serie')}
                            className={`flex-1 py-2 rounded-lg font-bold transition-colors ${circuitType === 'serie'
                                    ? 'bg-yellow-600 text-black'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            Série
                        </button>
                        <button
                            onClick={() => setCircuitType('parallele')}
                            className={`flex-1 py-2 rounded-lg font-bold transition-colors ${circuitType === 'parallele'
                                    ? 'bg-green-600'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            Parallèle
                        </button>
                    </div>

                    {/* Tension */}
                    <label className="block text-sm mb-1">
                        Tension : {voltage} V
                    </label>
                    <input
                        type="range"
                        min="3"
                        max="24"
                        value={voltage}
                        onChange={(e) => setVoltage(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500 mb-3"
                    />

                    {/* Interrupteurs des ampoules */}
                    <div className="flex gap-4 mb-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isBulb1On}
                                onChange={(e) => setIsBulb1On(e.target.checked)}
                                className="w-4 h-4 accent-yellow-500"
                            />
                            <span className="text-sm">Ampoule 1</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isBulb2On}
                                onChange={(e) => setIsBulb2On(e.target.checked)}
                                className="w-4 h-4 accent-yellow-500"
                            />
                            <span className="text-sm">Ampoule 2</span>
                        </label>
                    </div>

                    {/* Résultats */}
                    <div className="bg-gray-900/80 p-3 rounded-lg space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">R totale :</span>
                            <span>{totalResistance.toFixed(1)} Ω</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Courant I :</span>
                            <span className="text-cyan-400">{current.toFixed(2)} A</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">U Ampoule 1 :</span>
                            <span className={bulb1Works ? 'text-yellow-400' : 'text-red-400'}>
                                {voltageBulb1.toFixed(1)} V
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">U Ampoule 2 :</span>
                            <span className={bulb2Works ? 'text-yellow-400' : 'text-red-400'}>
                                {voltageBulb2.toFixed(1)} V
                            </span>
                        </div>
                    </div>

                    <div className="mt-3 p-2 rounded bg-gray-800 text-xs text-center">
                        {circuitType === 'serie'
                            ? '⚠️ Série : Si une ampoule grille, TOUT s\'éteint !'
                            : '✅ Parallèle : Les ampoules sont indépendantes'
                        }
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#FBBF24">
                CIRCUITS SÉRIE vs PARALLÈLE
            </Text>

            {/* Pile/Générateur */}
            <group position={[-3, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.8, 1.5, 0.5]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
                <mesh position={[0, 0.9, 0]}>
                    <boxGeometry args={[0.3, 0.3, 0.3]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.3} color="#F59E0B">
                    {voltage}V
                </Text>
                <Text position={[0, 1.2, 0]} fontSize={0.25} color="#EF4444">+</Text>
                <Text position={[0, -0.9, 0]} fontSize={0.25} color="#3B82F6">-</Text>
            </group>

            {circuitType === 'serie' ? (
                // Circuit Série
                <group>
                    {/* Fils */}
                    <mesh position={[-1.5, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.03, 0.03, 3]} />
                        <meshStandardMaterial color={current > 0 ? "#FBBF24" : "#374151"} />
                    </mesh>
                    <mesh position={[1.5, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.03, 0.03, 3]} />
                        <meshStandardMaterial color={current > 0 ? "#FBBF24" : "#374151"} />
                    </mesh>
                    <mesh position={[3, 0, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 1]} />
                        <meshStandardMaterial color={current > 0 ? "#FBBF24" : "#374151"} />
                    </mesh>
                    <mesh position={[-2.5, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.03, 0.03, 4]} />
                        <meshStandardMaterial color={current > 0 ? "#FBBF24" : "#374151"} />
                    </mesh>

                    {/* Ampoule 1 */}
                    <group position={[0, 0.5, 0]}>
                        <mesh>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial
                                color={bulb1Works ? "#FBBF24" : "#374151"}
                                emissive={bulb1Works ? "#FBBF24" : "#000000"}
                                emissiveIntensity={bulb1Works ? 2 : 0}
                                transparent
                                opacity={0.9}
                            />
                        </mesh>
                        {bulb1Works && <pointLight intensity={1} color="#FBBF24" distance={3} />}
                        <Text position={[0, -0.7, 0]} fontSize={0.2} color="#FFFFFF">L1</Text>
                    </group>

                    {/* Ampoule 2 (en série) */}
                    <group position={[2, 0.5, 0]}>
                        <mesh>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial
                                color={bulb2Works ? "#FBBF24" : "#374151"}
                                emissive={bulb2Works ? "#FBBF24" : "#000000"}
                                emissiveIntensity={bulb2Works ? 2 : 0}
                                transparent
                                opacity={0.9}
                            />
                        </mesh>
                        {bulb2Works && <pointLight intensity={1} color="#FBBF24" distance={3} />}
                        <Text position={[0, -0.7, 0]} fontSize={0.2} color="#FFFFFF">L2</Text>
                    </group>

                    {/* Électron animé */}
                    {current > 0 && (
                        <mesh ref={electron1Ref} position={[-2, 0.5, 0]}>
                            <sphereGeometry args={[0.1]} />
                            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
                        </mesh>
                    )}
                </group>
            ) : (
                // Circuit Parallèle
                <group>
                    {/* Branche principale */}
                    <mesh position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.03, 0.03, 3]} />
                        <meshStandardMaterial color={current > 0 ? "#10B981" : "#374151"} />
                    </mesh>

                    {/* Branche 1 (haut) */}
                    <group position={[0, 1, 0]}>
                        <mesh rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.03, 0.03, 4]} />
                            <meshStandardMaterial color={bulb1Works ? "#10B981" : "#374151"} />
                        </mesh>
                        <mesh position={[0, 0, 0]}>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial
                                color={bulb1Works ? "#FBBF24" : "#374151"}
                                emissive={bulb1Works ? "#FBBF24" : "#000000"}
                                emissiveIntensity={bulb1Works ? 2 : 0}
                                transparent
                                opacity={0.9}
                            />
                        </mesh>
                        {bulb1Works && <pointLight intensity={1} color="#FBBF24" distance={3} />}
                        <Text position={[0, 0.7, 0]} fontSize={0.2} color="#FFFFFF">L1</Text>
                    </group>

                    {/* Branche 2 (bas) */}
                    <group position={[0, -1, 0]}>
                        <mesh rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.03, 0.03, 4]} />
                            <meshStandardMaterial color={bulb2Works ? "#10B981" : "#374151"} />
                        </mesh>
                        <mesh position={[0, 0, 0]}>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial
                                color={bulb2Works ? "#FBBF24" : "#374151"}
                                emissive={bulb2Works ? "#FBBF24" : "#000000"}
                                emissiveIntensity={bulb2Works ? 2 : 0}
                                transparent
                                opacity={0.9}
                            />
                        </mesh>
                        {bulb2Works && <pointLight intensity={1} color="#FBBF24" distance={3} />}
                        <Text position={[0, -0.7, 0]} fontSize={0.2} color="#FFFFFF">L2</Text>
                    </group>

                    {/* Jonctions */}
                    <mesh position={[2, 0, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 2]} />
                        <meshStandardMaterial color={current > 0 ? "#10B981" : "#374151"} />
                    </mesh>
                    <mesh position={[-2, 0, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 2, 8, 1]} />
                        <meshStandardMaterial color={current > 0 ? "#10B981" : "#374151"} />
                    </mesh>
                </group>
            )}

            {/* Légende */}
            <Text position={[0, -2.5, 0]} fontSize={0.25} color="#9CA3AF">
                {circuitType === 'serie'
                    ? 'Série : I identique partout | U = U1 + U2'
                    : 'Parallèle : U identique | I = I1 + I2'
                }
            </Text>
        </group>
    );
}

// ============================================================
// 4. CONSERVATION DE LA MASSE (LAVOISIER) - Simulation
// ============================================================
export function MassConservation() {
    const [isReacting, setIsReacting] = useState(false);
    const [reactionProgress, setReactionProgress] = useState(0);

    const massReactants = 100; // g - ne change jamais !
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (isReacting && reactionProgress < 100) {
            const timer = setTimeout(() => {
                setReactionProgress(prev => Math.min(prev + 2, 100));
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isReacting, reactionProgress]);

    const carbonCount = Math.max(0, 4 - Math.floor(reactionProgress / 25));
    const oxygenCount = Math.max(0, 8 - Math.floor(reactionProgress / 12.5));
    const co2Count = Math.min(4, Math.floor(reactionProgress / 25));

    const reset = () => {
        setIsReacting(false);
        setReactionProgress(0);
    };

    // Animation
    const particlesRef = useRef([]);

    useFrame(({ clock }) => {
        particlesRef.current.forEach((mesh, i) => {
            if (mesh && isReacting) {
                mesh.position.y += Math.sin(clock.elapsedTime * 3 + i) * 0.005;
                mesh.rotation.y = clock.elapsedTime * 0.5;
            }
        });
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[4, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-orange-500/30 min-w-[280px] backdrop-blur-md select-none shadow-xl">
                    <h3 className="text-orange-400 font-bold mb-3 text-lg">⚖️ Loi de Lavoisier</h3>

                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setIsReacting(true)}
                            disabled={isReacting}
                            className={`flex-1 py-2 rounded-lg font-bold transition-colors ${isReacting
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-orange-600 hover:bg-orange-500'
                                }`}
                        >
                            🔥 Réagir !
                        </button>
                        <button
                            onClick={reset}
                            className="flex-1 py-2 rounded-lg font-bold bg-gray-700 hover:bg-gray-600"
                        >
                            🔄 Reset
                        </button>
                    </div>

                    {/* Progression */}
                    <div className="mb-4">
                        <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all"
                                style={{ width: `${reactionProgress}%` }}
                            />
                        </div>
                        <div className="text-center text-sm mt-1">{reactionProgress}% réagi</div>
                    </div>

                    {/* Équation */}
                    <div className="bg-gray-900/80 p-3 rounded-lg mb-3 text-center font-mono">
                        <div className="text-sm">C + O₂ → CO₂</div>
                        <div className="text-xs text-gray-400 mt-1">Combustion du carbone</div>
                    </div>

                    {/* Bilan des masses */}
                    <div className="bg-gray-900/80 p-3 rounded-lg space-y-2 font-mono text-sm">
                        <div className="flex justify-between text-gray-400">
                            <span>AVANT :</span>
                            <span className="text-white">{massReactants} g</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>APRÈS :</span>
                            <span className="text-green-400">{massReactants} g ✓</span>
                        </div>
                        <div className="border-t border-gray-700 pt-2 text-center text-orange-400 font-bold">
                            MASSE CONSERVÉE !
                        </div>
                    </div>

                    <div className="mt-3 text-xs text-center text-gray-400 italic">
                        "Rien ne se perd, rien ne se crée, tout se transforme"
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F59E0B">
                CONSERVATION DE LA MASSE
            </Text>

            {/* Balance */}
            <group position={[0, -2.5, 0]}>
                {/* Pivot */}
                <mesh>
                    <coneGeometry args={[0.3, 0.5, 4]} />
                    <meshStandardMaterial color="#78350F" />
                </mesh>

                {/* Barre de balance */}
                <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.08, 0.08, 6]} />
                    <meshStandardMaterial color="#92400E" />
                </mesh>

                {/* Plateau gauche (Réactifs) */}
                <mesh position={[-2.5, 0.2, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
                    <meshStandardMaterial color="#6B7280" metalness={0.8} />
                </mesh>

                {/* Plateau droite (Produits) */}
                <mesh position={[2.5, 0.2, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
                    <meshStandardMaterial color="#6B7280" metalness={0.8} />
                </mesh>
            </group>

            {/* Réactifs (Gauche) */}
            <group position={[-2.5, -1.5, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="#6B7280">
                    RÉACTIFS
                </Text>

                {/* Atomes de Carbone */}
                {[...Array(carbonCount)].map((_, i) => (
                    <mesh
                        key={`c-${i}`}
                        ref={el => particlesRef.current[i] = el}
                        position={[-0.5 + (i % 2) * 0.5, 0.5 + Math.floor(i / 2) * 0.5, 0]}
                    >
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#1F2937" />
                    </mesh>
                ))}

                {/* Molécules O2 */}
                {[...Array(Math.floor(oxygenCount / 2))].map((_, i) => (
                    <group key={`o2-${i}`} position={[0.5, 0.3 + i * 0.5, 0]}>
                        <mesh position={[-0.1, 0, 0]}>
                            <sphereGeometry args={[0.15]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                        <mesh position={[0.1, 0, 0]}>
                            <sphereGeometry args={[0.15]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                    </group>
                ))}

                <Text position={[0, -0.3, 0]} fontSize={0.2} color="#9CA3AF">
                    C + O₂
                </Text>
            </group>

            {/* Produits (Droite) */}
            <group position={[2.5, -1.5, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="#10B981">
                    PRODUITS
                </Text>

                {/* Molécules CO2 */}
                {[...Array(co2Count)].map((_, i) => (
                    <group key={`co2-${i}`} position={[0, 0.5 + i * 0.6, 0]}>
                        {/* Carbone central */}
                        <mesh>
                            <sphereGeometry args={[0.18]} />
                            <meshStandardMaterial color="#1F2937" />
                        </mesh>
                        {/* Oxygènes */}
                        <mesh position={[-0.25, 0, 0]}>
                            <sphereGeometry args={[0.15]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                        <mesh position={[0.25, 0, 0]}>
                            <sphereGeometry args={[0.15]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                    </group>
                ))}

                <Text position={[0, -0.3, 0]} fontSize={0.2} color="#9CA3AF">
                    CO₂
                </Text>
            </group>

            {/* Flamme pendant la réaction */}
            {isReacting && reactionProgress < 100 && (
                <group position={[0, 0, 0]}>
                    <mesh>
                        <coneGeometry args={[0.3, 1, 8]} />
                        <meshStandardMaterial
                            color="#F59E0B"
                            emissive="#F59E0B"
                            emissiveIntensity={2}
                            transparent
                            opacity={0.8}
                        />
                    </mesh>
                    <pointLight intensity={2} color="#F59E0B" distance={5} />
                </group>
            )}

            {/* Affichage masse */}
            <Text position={[-2.5, -2.8, 0]} fontSize={0.25} color="#FFFFFF">
                {massReactants} g
            </Text>
            <Text position={[2.5, -2.8, 0]} fontSize={0.25} color="#FFFFFF">
                {massReactants} g
            </Text>
        </group>
    );
}

// ============================================================
// 5. PROPAGATION RECTILIGNE DE LA LUMIÈRE
// ============================================================
export function LightPropagationPC4() {
    const [holePosition, setHolePosition] = useState(0);
    const [showShadow, setShowShadow] = useState(true);

    // Animation du rayon
    const rayRef = useRef();

    useFrame(({ clock }) => {
        if (rayRef.current) {
            rayRef.current.material.opacity = 0.6 + Math.sin(clock.elapsedTime * 3) * 0.2;
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[4, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-amber-500/30 min-w-[250px] backdrop-blur-md select-none shadow-xl">
                    <h3 className="text-amber-400 font-bold mb-3 text-lg">💡 Propagation Rectiligne</h3>

                    <label className="block text-sm mb-1">
                        Position du trou : {holePosition.toFixed(1)}
                    </label>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.1"
                        value={holePosition}
                        onChange={(e) => setHolePosition(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500 mb-3"
                    />

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showShadow}
                            onChange={(e) => setShowShadow(e.target.checked)}
                            className="w-4 h-4 accent-amber-500"
                        />
                        <span className="text-sm">Afficher l'ombre</span>
                    </label>

                    <div className="mt-3 p-2 bg-gray-900/80 rounded text-xs text-center">
                        La lumière voyage en <span className="text-amber-400 font-bold">LIGNE DROITE</span>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#FBBF24">
                PROPAGATION RECTILIGNE
            </Text>

            {/* Source lumineuse (bougie/lampe) */}
            <group position={[-4, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.1, 0.15, 0.5]} />
                    <meshStandardMaterial color="#FEF3C7" />
                </mesh>
                <mesh position={[0, 0.5, 0]}>
                    <coneGeometry args={[0.15, 0.4, 8]} />
                    <meshStandardMaterial
                        color="#FBBF24"
                        emissive="#FBBF24"
                        emissiveIntensity={2}
                    />
                </mesh>
                <pointLight position={[0, 0.5, 0]} intensity={3} color="#FBBF24" distance={10} />
                <Text position={[0, -0.8, 0]} fontSize={0.25} color="#FBBF24">
                    Source
                </Text>
            </group>

            {/* Écran opaque avec trou */}
            <group position={[0, 0, 0]}>
                {/* Partie haute de l'écran */}
                <mesh position={[0, 1 + (1 - holePosition) / 2, 0]}>
                    <boxGeometry args={[0.2, 2 - (1 - holePosition), 3]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
                {/* Partie basse de l'écran */}
                <mesh position={[0, -1 - (1 + holePosition) / 2, 0]}>
                    <boxGeometry args={[0.2, 2 - (1 + holePosition), 3]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.25} color="#9CA3AF">
                    Écran opaque
                </Text>
            </group>

            {/* Rayons lumineux */}
            <mesh
                ref={rayRef}
                position={[-2, holePosition / 2, 0]}
                rotation={[0, 0, Math.atan2(holePosition, 4)]}
            >
                <cylinderGeometry args={[0.02, 0.02, 4]} />
                <meshBasicMaterial color="#FBBF24" transparent opacity={0.8} />
            </mesh>

            {/* Rayon après le trou */}
            <mesh
                position={[2, holePosition / 2, 0]}
                rotation={[0, 0, Math.PI / 2]}
            >
                <cylinderGeometry args={[0.02, 0.02, 4]} />
                <meshBasicMaterial color="#FBBF24" transparent opacity={0.6} />
            </mesh>

            {/* Écran de projection */}
            <group position={[4, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, 4, 3]} />
                    <meshStandardMaterial color="#F3F4F6" />
                </mesh>

                {/* Point lumineux sur l'écran */}
                <mesh position={[0.1, holePosition / 2, 0]}>
                    <circleGeometry args={[0.3, 32]} />
                    <meshStandardMaterial
                        color="#FBBF24"
                        emissive="#FBBF24"
                        emissiveIntensity={1}
                    />
                </mesh>

                {/* Ombre */}
                {showShadow && (
                    <mesh position={[0.1, holePosition / 2 + 1, 0]}>
                        <planeGeometry args={[0.5, 1]} />
                        <meshBasicMaterial color="#1F2937" transparent opacity={0.8} />
                    </mesh>
                )}

                <Text position={[0, -2.5, 0]} fontSize={0.25} color="#9CA3AF">
                    Écran
                </Text>
            </group>

            {/* Légende */}
            <Text position={[0, -3, 0]} fontSize={0.25} color="#D1D5DB">
                La lumière ne contourne pas les obstacles !
            </Text>
        </group>
    );
}

/**
 * Physique 2nde Simulations - Part 2: Mécanique (Chapitres 8-12)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Cone } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// ============================================================
// P8. GÉNÉRALITÉS SUR LE MOUVEMENT - Référentiel et Trajectoire
// ============================================================
export function MouvementSeconde() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const [vitesse, setVitesse] = useState(2);
    const [showTrajectory, setShowTrajectory] = useState(true);
    const [referentiel, setReferentiel] = useState('sol'); // 'sol' or 'train'
    const mobileRef = useRef();
    const trainRef = useRef();

    useFrame((state, delta) => {
        if (isPlaying) {
            setTime(prev => prev + delta);

            // Mobile movement
            if (mobileRef.current) {
                const position = (time * vitesse) % 8 - 4;
                mobileRef.current.position.x = position;
            }

            // Train movement
            if (trainRef.current && referentiel === 'sol') {
                trainRef.current.position.x = Math.sin(time * 0.5) * 2;
            }
        }
    });

    const handleReset = () => {
        setTime(0);
        setIsPlaying(false);
        if (mobileRef.current) mobileRef.current.position.x = -4;
        if (trainRef.current) trainRef.current.position.x = 0;
    };

    // Generate trajectory points
    const trajectoryPoints = useMemo(() => {
        const points = [];
        for (let i = 0; i <= 20; i++) {
            points.push(new THREE.Vector3(-4 + i * 0.4, 0, 0));
        }
        return points;
    }, []);

    return (
        <group>
            {/* Ground/Reference */}
            <Box args={[12, 0.2, 4]} position={[0, -1.5, 0]} receiveShadow>
                <meshStandardMaterial color="#4a4a4a" />
            </Box>

            {/* Rails */}
            <Box args={[10, 0.05, 0.2]} position={[0, -1.35, 0.5]}>
                <meshStandardMaterial color="#666" metalness={0.8} />
            </Box>
            <Box args={[10, 0.05, 0.2]} position={[0, -1.35, -0.5]}>
                <meshStandardMaterial color="#666" metalness={0.8} />
            </Box>

            {/* Train (Reference frame) */}
            <group ref={trainRef} position={[0, 0, 0]}>
                <Box args={[6, 2, 2]} position={[0, 0, 0]} castShadow>
                    <meshStandardMaterial color="#1565c0" />
                </Box>
                {/* Windows */}
                {[-2, -1, 0, 1, 2].map((x) => (
                    <Box key={x} args={[0.6, 0.6, 0.1]} position={[x, 0.3, 1.05]}>
                        <meshStandardMaterial color="#b3e5fc" transparent opacity={0.7} />
                    </Box>
                ))}
                {/* Wheels */}
                {[-2, -0.5, 1, 2.5].map((x) => (
                    <Cylinder key={x} args={[0.3, 0.3, 0.2, 16]} position={[x, -0.85, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
                        <meshStandardMaterial color="#333" />
                    </Cylinder>
                ))}
                <Text position={[0, 1.2, 0]} fontSize={0.25} color="#fff">
                    TRAIN
                </Text>
            </group>

            {/* Mobile (ball being thrown) */}
            <Sphere ref={mobileRef} args={[0.25, 16, 16]} position={[-4, 0.5, 0]} castShadow>
                <meshStandardMaterial color="#f44336" emissive="#ff5722" emissiveIntensity={0.3} />
            </Sphere>

            {/* Trajectory visualization */}
            {showTrajectory && (
                <Line
                    points={trajectoryPoints}
                    color="#ffeb3b"
                    lineWidth={2}
                    dashed
                    dashSize={0.2}
                    dashScale={10}
                />
            )}

            {/* Velocity vector */}
            <group position={[mobileRef.current?.position.x || -4, 0.5, 0]}>
                <Line
                    points={[[0, 0, 0], [vitesse * 0.3, 0, 0]]}
                    color="#4caf50"
                    lineWidth={4}
                />
                <Cone args={[0.1, 0.2, 8]} position={[vitesse * 0.3 + 0.1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <meshStandardMaterial color="#4caf50" />
                </Cone>
                <Text position={[vitesse * 0.15, 0.3, 0]} fontSize={0.15} color="#4caf50">
                    v = {vitesse} m/s
                </Text>
            </group>

            {/* Position markers */}
            {[-4, -2, 0, 2, 4].map((x) => (
                <group key={x} position={[x, -1.3, 1.5]}>
                    <Box args={[0.1, 0.3, 0.1]}>
                        <meshStandardMaterial color="#fff" />
                    </Box>
                    <Text position={[0, 0.4, 0]} fontSize={0.15} color="#fff">
                        {x}m
                    </Text>
                </group>
            ))}

            {/* Control Panel */}
            <Html position={[7, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🚂 Mouvement & Référentiel" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '280px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Vitesse: {vitesse} m/s
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="5"
                                step="0.5"
                                value={vitesse}
                                onChange={(e) => setVitesse(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: isPlaying ? '#f44336' : '#4caf50',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                {isPlaying ? '⏸️ Pause' : '▶️ Lancer'}
                            </button>
                            <button
                                onClick={handleReset}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: '#607d8b',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                🔄 Reset
                            </button>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>
                                Référentiel:
                            </label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => setReferentiel('sol')}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        background: referentiel === 'sol' ? '#9c27b0' : '#444',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    🌍 Sol
                                </button>
                                <button
                                    onClick={() => setReferentiel('train')}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        background: referentiel === 'train' ? '#9c27b0' : '#444',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    🚃 Train
                                </button>
                            </div>
                        </div>

                        <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                            <input
                                type="checkbox"
                                checked={showTrajectory}
                                onChange={(e) => setShowTrajectory(e.target.checked)}
                            />
                            Afficher la trajectoire
                        </label>

                        <div style={{
                            background: 'rgba(76,175,80,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#81c784', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Mesures:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Temps: <strong>{time.toFixed(2)} s</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Distance: <strong>{(time * vitesse).toFixed(2)} m</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>📚 Mouvement relatif:</strong><br />
                            Le mouvement dépend du référentiel choisi.
                            Le vecteur vitesse est tangent à la trajectoire.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P9-P10. FORCES ET POIDS - Représentation vectorielle
// ============================================================
export function ForcesPoidsSeconde() {
    const [masse, setMasse] = useState(5);
    const [gValue, setGValue] = useState(9.8);
    const [planete, setPlanete] = useState('terre');
    const [showComponents, setShowComponents] = useState(false);
    const [inclinaison, setInclinaison] = useState(0);

    const poids = masse * gValue;

    const planetes = {
        terre: { g: 9.8, color: '#2196f3', name: 'Terre' },
        lune: { g: 1.6, color: '#bdbdbd', name: 'Lune' },
        mars: { g: 3.7, color: '#ff5722', name: 'Mars' },
        jupiter: { g: 24.8, color: '#ff9800', name: 'Jupiter' }
    };

    useEffect(() => {
        setGValue(planetes[planete].g);
    }, [planete]);

    const inclinaisonRad = (inclinaison * Math.PI) / 180;
    const poidsParallele = poids * Math.sin(inclinaisonRad);
    const poidsPerpendiculaire = poids * Math.cos(inclinaisonRad);

    return (
        <group>
            {/* Planet indicator */}
            <Sphere args={[0.8, 32, 32]} position={[-4, 2, 0]}>
                <meshStandardMaterial color={planetes[planete].color} />
            </Sphere>
            <Text position={[-4, 3.2, 0]} fontSize={0.25} color="#fff">
                {planetes[planete].name}
            </Text>
            <Text position={[-4, 2.8, 0]} fontSize={0.15} color="#aaa">
                g = {gValue} N/kg
            </Text>

            {/* Inclined plane */}
            <group rotation={[0, 0, -inclinaisonRad]}>
                <Box args={[6, 0.2, 3]} position={[0, -0.5, 0]}>
                    <meshStandardMaterial color="#795548" />
                </Box>

                {/* Object (mass) */}
                <Box args={[0.8, 0.8, 0.8]} position={[0, 0.4, 0]} castShadow>
                    <meshStandardMaterial color="#9c27b0" />
                </Box>
                <Text position={[0, 0.4, 0.5]} fontSize={0.15} color="#fff">
                    {masse} kg
                </Text>
            </group>

            {/* Weight vector (always vertical) */}
            <group position={[0, 0.4, 0]}>
                <Line
                    points={[[0, 0, 0], [0, -poids / 20, 0]]}
                    color="#f44336"
                    lineWidth={4}
                />
                <Cone args={[0.1, 0.2, 8]} position={[0, -poids / 20 - 0.1, 0]} rotation={[Math.PI, 0, 0]}>
                    <meshStandardMaterial color="#f44336" />
                </Cone>
                <Text position={[0.5, -poids / 40, 0]} fontSize={0.2} color="#f44336">
                    P = {poids.toFixed(1)} N
                </Text>
            </group>

            {/* Component vectors (if inclined) */}
            {showComponents && inclinaison > 0 && (
                <>
                    {/* Parallel component */}
                    <group position={[0, 0.4, 0]}>
                        <Line
                            points={[[0, 0, 0], [poidsParallele / 20 * Math.cos(inclinaisonRad), -poidsParallele / 20 * Math.sin(inclinaisonRad), 0]]}
                            color="#4caf50"
                            lineWidth={3}
                        />
                        <Text position={[poidsParallele / 30, -0.3, 0]} fontSize={0.15} color="#4caf50">
                            P// = {poidsParallele.toFixed(1)} N
                        </Text>
                    </group>

                    {/* Perpendicular component */}
                    <group position={[0, 0.4, 0]}>
                        <Line
                            points={[[0, 0, 0], [-poidsPerpendiculaire / 20 * Math.sin(inclinaisonRad), -poidsPerpendiculaire / 20 * Math.cos(inclinaisonRad), 0]]}
                            color="#2196f3"
                            lineWidth={3}
                        />
                        <Text position={[-0.8, -poidsPerpendiculaire / 30, 0]} fontSize={0.15} color="#2196f3">
                            P⊥ = {poidsPerpendiculaire.toFixed(1)} N
                        </Text>
                    </group>
                </>
            )}

            {/* Angle indicator */}
            {inclinaison > 0 && (
                <Text position={[2, -0.8, 0]} fontSize={0.2} color="#ffeb3b">
                    α = {inclinaison}°
                </Text>
            )}

            {/* Control Panel */}
            <Html position={[5, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="⚖️ Poids et Masse" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Masse: {masse} kg
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="1"
                                value={masse}
                                onChange={(e) => setMasse(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Inclinaison: {inclinaison}°
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="60"
                                step="5"
                                value={inclinaison}
                                onChange={(e) => setInclinaison(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>
                                Planète:
                            </label>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                {Object.entries(planetes).map(([key, val]) => (
                                    <button
                                        key={key}
                                        onClick={() => setPlanete(key)}
                                        style={{
                                            padding: '8px',
                                            background: planete === key ? val.color : '#444',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}
                                    >
                                        {val.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {inclinaison > 0 && (
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                                <input
                                    type="checkbox"
                                    checked={showComponents}
                                    onChange={(e) => setShowComponents(e.target.checked)}
                                />
                                Afficher les composantes
                            </label>
                        )}

                        <div style={{
                            background: 'rgba(244,67,54,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#ef9a9a', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Calculs:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                P = m × g = {masse} × {gValue} = <strong style={{ color: '#f44336' }}>{poids.toFixed(1)} N</strong>
                            </p>
                            {inclinaison > 0 && showComponents && (
                                <>
                                    <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                        P// = P × sin(α) = <strong style={{ color: '#4caf50' }}>{poidsParallele.toFixed(1)} N</strong>
                                    </p>
                                    <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                        P⊥ = P × cos(α) = <strong style={{ color: '#2196f3' }}>{poidsPerpendiculaire.toFixed(1)} N</strong>
                                    </p>
                                </>
                            )}
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>⚡ À retenir:</strong><br />
                            La masse (kg) est invariable.<br />
                            Le poids (N) dépend de g (donc du lieu).
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P11. ÉQUILIBRE SOUMIS À 3 FORCES
// ============================================================
export function Equilibre3ForcesSeconde() {
    const [force1, setForce1] = useState(50);
    const [force2, setForce2] = useState(50);
    const [angle1, setAngle1] = useState(120);
    const [angle2, setAngle2] = useState(240);
    const [showResultante, setShowResultante] = useState(false);

    // Calculate force 3 for equilibrium
    const rad1 = (angle1 * Math.PI) / 180;
    const rad2 = (angle2 * Math.PI) / 180;

    const f1x = force1 * Math.cos(rad1);
    const f1y = force1 * Math.sin(rad1);
    const f2x = force2 * Math.cos(rad2);
    const f2y = force2 * Math.sin(rad2);

    const f3x = -(f1x + f2x);
    const f3y = -(f1y + f2y);
    const force3 = Math.sqrt(f3x * f3x + f3y * f3y);
    const angle3 = (Math.atan2(f3y, f3x) * 180) / Math.PI;

    const isEquilibrium = Math.abs(f1x + f2x + f3x) < 0.1 && Math.abs(f1y + f2y + f3y) < 0.1;

    const scale = 0.02;

    return (
        <group>
            {/* Central point */}
            <Sphere args={[0.2, 16, 16]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fff" />
            </Sphere>

            {/* Force 1 */}
            <group>
                <Line
                    points={[[0, 0, 0], [f1x * scale, f1y * scale, 0]]}
                    color="#f44336"
                    lineWidth={4}
                />
                <Cone
                    args={[0.1, 0.2, 8]}
                    position={[f1x * scale, f1y * scale, 0]}
                    rotation={[0, 0, rad1 - Math.PI / 2]}
                >
                    <meshStandardMaterial color="#f44336" />
                </Cone>
                <Text position={[f1x * scale * 0.6, f1y * scale * 0.6 + 0.3, 0]} fontSize={0.2} color="#f44336">
                    F₁ = {force1}N
                </Text>
            </group>

            {/* Force 2 */}
            <group>
                <Line
                    points={[[0, 0, 0], [f2x * scale, f2y * scale, 0]]}
                    color="#4caf50"
                    lineWidth={4}
                />
                <Cone
                    args={[0.1, 0.2, 8]}
                    position={[f2x * scale, f2y * scale, 0]}
                    rotation={[0, 0, rad2 - Math.PI / 2]}
                >
                    <meshStandardMaterial color="#4caf50" />
                </Cone>
                <Text position={[f2x * scale * 0.6, f2y * scale * 0.6 + 0.3, 0]} fontSize={0.2} color="#4caf50">
                    F₂ = {force2}N
                </Text>
            </group>

            {/* Force 3 (equilibrium) */}
            <group>
                <Line
                    points={[[0, 0, 0], [f3x * scale, f3y * scale, 0]]}
                    color="#2196f3"
                    lineWidth={4}
                />
                <Cone
                    args={[0.1, 0.2, 8]}
                    position={[f3x * scale, f3y * scale, 0]}
                    rotation={[0, 0, (angle3 * Math.PI / 180) - Math.PI / 2]}
                >
                    <meshStandardMaterial color="#2196f3" />
                </Cone>
                <Text position={[f3x * scale * 0.6, f3y * scale * 0.6 + 0.3, 0]} fontSize={0.2} color="#2196f3">
                    F₃ = {force3.toFixed(1)}N
                </Text>
            </group>

            {/* Resultante (should be zero) */}
            {showResultante && (
                <Text position={[0, -2, 0]} fontSize={0.25} color={isEquilibrium ? '#4caf50' : '#f44336'}>
                    {isEquilibrium ? '✓ Équilibre' : '✗ Non équilibré'}
                </Text>
            )}

            {/* Triangle des forces (construction) */}
            <group position={[3, 0, -2]}>
                <Text position={[0, 2, 0]} fontSize={0.2} color="#fff">Triangle des forces</Text>
                <Line
                    points={[[0, 0, 0], [f1x * scale, f1y * scale, 0]]}
                    color="#f44336"
                    lineWidth={2}
                />
                <Line
                    points={[[f1x * scale, f1y * scale, 0], [f1x * scale + f2x * scale, f1y * scale + f2y * scale, 0]]}
                    color="#4caf50"
                    lineWidth={2}
                />
                <Line
                    points={[[f1x * scale + f2x * scale, f1y * scale + f2y * scale, 0], [0, 0, 0]]}
                    color="#2196f3"
                    lineWidth={2}
                />
            </group>

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="⚖️ Équilibre 3 Forces" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '280px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#f44336', display: 'block', marginBottom: '5px' }}>
                                Force F₁: {force1} N à {angle1}°
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={force1}
                                onChange={(e) => setForce1(parseFloat(e.target.value))}
                                style={{ width: '100%', marginBottom: '5px' }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={angle1}
                                onChange={(e) => setAngle1(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#4caf50', display: 'block', marginBottom: '5px' }}>
                                Force F₂: {force2} N à {angle2}°
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={force2}
                                onChange={(e) => setForce2(parseFloat(e.target.value))}
                                style={{ width: '100%', marginBottom: '5px' }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={angle2}
                                onChange={(e) => setAngle2(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#90caf9', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Force F₃ (calculée):
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                Intensité: <strong style={{ color: '#2196f3' }}>{force3.toFixed(1)} N</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                Direction: <strong>{angle3.toFixed(1)}°</strong>
                            </p>
                        </div>

                        <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                            <input
                                type="checkbox"
                                checked={showResultante}
                                onChange={(e) => setShowResultante(e.target.checked)}
                            />
                            Vérifier l'équilibre
                        </label>

                        <div style={{
                            background: 'rgba(156,39,176,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#ce93d8'
                        }}>
                            <strong>📐 Condition d'équilibre:</strong><br />
                            ΣF = 0 ⟺ F₁ + F₂ + F₃ = 0<br />
                            Le triangle des forces doit être fermé.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P12. MOMENT D'UNE FORCE - Équilibre autour d'un axe
// ============================================================
export function MomentForceSeconde() {
    const [force1, setForce1] = useState(20);
    const [distance1, setDistance1] = useState(1);
    const [force2, setForce2] = useState(10);
    const [distance2, setDistance2] = useState(2);
    const [showMoments, setShowMoments] = useState(true);
    const leverRef = useRef();

    const moment1 = force1 * distance1;
    const moment2 = force2 * distance2;
    const momentNet = moment1 - moment2;
    const isEquilibrium = Math.abs(momentNet) < 0.5;

    useFrame(() => {
        if (leverRef.current && !isEquilibrium) {
            const angle = Math.min(Math.max(momentNet / 100, -0.3), 0.3);
            leverRef.current.rotation.z += (angle - leverRef.current.rotation.z) * 0.05;
        } else if (leverRef.current) {
            leverRef.current.rotation.z *= 0.95;
        }
    });

    return (
        <group>
            {/* Pivot point */}
            <Cylinder args={[0.2, 0.3, 0.5, 16]} position={[0, -0.5, 0]}>
                <meshStandardMaterial color="#795548" />
            </Cylinder>
            <Sphere args={[0.15, 16, 16]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#ff9800" />
            </Sphere>
            <Text position={[0, 0.4, 0]} fontSize={0.15} color="#ff9800">
                Axe Δ
            </Text>

            {/* Lever */}
            <group ref={leverRef}>
                <Box args={[6, 0.15, 0.4]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#607d8b" />
                </Box>

                {/* Force 1 (left) - causes clockwise rotation */}
                <group position={[-distance1, 0, 0]}>
                    <Box args={[0.4, 0.4, 0.4]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color="#f44336" />
                    </Box>
                    <Line points={[[0, 0, 0], [0, -force1 / 30, 0]]} color="#f44336" lineWidth={4} />
                    <Text position={[0.5, -force1 / 60, 0]} fontSize={0.15} color="#f44336">
                        F₁ = {force1}N
                    </Text>
                    <Text position={[0, 0.3, 0]} fontSize={0.12} color="#aaa">
                        d₁ = {distance1}m
                    </Text>
                </group>

                {/* Force 2 (right) - causes counter-clockwise rotation */}
                <group position={[distance2, 0, 0]}>
                    <Box args={[0.4, 0.4, 0.4]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color="#2196f3" />
                    </Box>
                    <Line points={[[0, 0, 0], [0, -force2 / 30, 0]]} color="#2196f3" lineWidth={4} />
                    <Text position={[0.5, -force2 / 60, 0]} fontSize={0.15} color="#2196f3">
                        F₂ = {force2}N
                    </Text>
                    <Text position={[0, 0.3, 0]} fontSize={0.12} color="#aaa">
                        d₂ = {distance2}m
                    </Text>
                </group>
            </group>

            {/* Distance markers */}
            <Line points={[[0, -1.5, 0], [-distance1, -1.5, 0]]} color="#f44336" lineWidth={1} dashed />
            <Line points={[[0, -1.5, 0], [distance2, -1.5, 0]]} color="#2196f3" lineWidth={1} dashed />

            {/* Equilibrium indicator */}
            <Text
                position={[0, 2, 0]}
                fontSize={0.3}
                color={isEquilibrium ? '#4caf50' : '#ff9800'}
            >
                {isEquilibrium ? '⚖️ ÉQUILIBRE' : '↻ Rotation...'}
            </Text>

            {/* Control Panel */}
            <Html position={[5, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🔄 Moment d'une Force" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{
                            background: 'rgba(244,67,54,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginBottom: '15px'
                        }}>
                            <label style={{ color: '#ef9a9a', display: 'block', marginBottom: '5px' }}>
                                Force F₁: {force1} N
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="50"
                                value={force1}
                                onChange={(e) => setForce1(parseFloat(e.target.value))}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <label style={{ color: '#ef9a9a', display: 'block', marginBottom: '5px' }}>
                                Distance d₁: {distance1} m
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="2.5"
                                step="0.1"
                                value={distance1}
                                onChange={(e) => setDistance1(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '12px' }}>
                                M₁ = F₁ × d₁ = <strong style={{ color: '#f44336' }}>{moment1.toFixed(1)} N·m</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginBottom: '15px'
                        }}>
                            <label style={{ color: '#90caf9', display: 'block', marginBottom: '5px' }}>
                                Force F₂: {force2} N
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="50"
                                value={force2}
                                onChange={(e) => setForce2(parseFloat(e.target.value))}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <label style={{ color: '#90caf9', display: 'block', marginBottom: '5px' }}>
                                Distance d₂: {distance2} m
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="2.5"
                                step="0.1"
                                value={distance2}
                                onChange={(e) => setDistance2(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '12px' }}>
                                M₂ = F₂ × d₂ = <strong style={{ color: '#2196f3' }}>{moment2.toFixed(1)} N·m</strong>
                            </p>
                        </div>

                        <div style={{
                            background: isEquilibrium ? 'rgba(76,175,80,0.3)' : 'rgba(255,152,0,0.3)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#fff', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Bilan des moments:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                ΣM = M₁ - M₂ = {moment1.toFixed(1)} - {moment2.toFixed(1)} = <strong>{momentNet.toFixed(1)} N·m</strong>
                            </p>
                            <p style={{
                                color: isEquilibrium ? '#4caf50' : '#ff9800',
                                margin: '8px 0 0 0',
                                fontWeight: 'bold'
                            }}>
                                {isEquilibrium ? '✓ Équilibre (ΣM ≈ 0)' : '✗ Pas d\'équilibre'}
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(156,39,176,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#ce93d8'
                        }}>
                            <strong>🔧 Théorème des moments:</strong><br />
                            À l'équilibre: ΣM = 0<br />
                            Plus le bras de levier est grand, plus l'effet de rotation est important!
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

export default {
    MouvementSeconde,
    ForcesPoidsSeconde,
    Equilibre3ForcesSeconde,
    MomentForceSeconde
};

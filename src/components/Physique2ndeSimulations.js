/**
 * Physique 2nde Simulations - Part 1: Électricité (Chapitres 1-7)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// ============================================================
// P1. ÉLECTRISATION - Phénomènes d'électrisation par frottement
// ============================================================
export function ElectrisationSimulation() {
    const [isRubbing, setIsRubbing] = useState(false);
    const [chargeLevel, setChargeLevel] = useState(0);
    const [showAttraction, setShowAttraction] = useState(false);
    const rulerRef = useRef();
    const clothRef = useRef();
    const particlesRef = useRef([]);

    useFrame((state) => {
        if (isRubbing && chargeLevel < 100) {
            setChargeLevel(prev => Math.min(prev + 0.5, 100));
        }

        // Animate ruler wobble when rubbing
        if (rulerRef.current && isRubbing) {
            rulerRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 20) * 0.05;
        }

        // Animate attracted particles
        if (showAttraction && particlesRef.current.length > 0) {
            particlesRef.current.forEach((p, i) => {
                if (p) {
                    const targetY = 1.5 - (chargeLevel / 100) * 1.2;
                    p.position.y += (targetY - p.position.y) * 0.02;
                    p.position.x += Math.sin(state.clock.elapsedTime * 3 + i) * 0.002;
                }
            });
        }
    });

    const handleReset = () => {
        setChargeLevel(0);
        setShowAttraction(false);
        setIsRubbing(false);
    };

    // Generate paper pieces
    const paperPieces = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            x: (Math.random() - 0.5) * 3,
            z: (Math.random() - 0.5) * 2,
            scale: 0.05 + Math.random() * 0.05
        }));
    }, []);

    return (
        <group>
            {/* Ruler */}
            <group ref={rulerRef} position={[0, 2, 0]}>
                <Box args={[3, 0.1, 0.4]} castShadow>
                    <meshStandardMaterial
                        color={chargeLevel > 50 ? '#4fc3f7' : '#ffb74d'}
                        emissive={chargeLevel > 50 ? '#0288d1' : '#000'}
                        emissiveIntensity={chargeLevel / 200}
                    />
                </Box>
                {/* Charge indicators */}
                {chargeLevel > 20 && Array.from({ length: Math.floor(chargeLevel / 20) }, (_, i) => (
                    <Text
                        key={i}
                        position={[-1.2 + i * 0.6, 0.15, 0]}
                        fontSize={0.15}
                        color="#ff4444"
                    >
                        -
                    </Text>
                ))}
            </group>

            {/* Cloth */}
            <group ref={clothRef} position={[0, 1, 2]}>
                <Box args={[2, 1.5, 0.1]} castShadow>
                    <meshStandardMaterial color="#8d6e63" roughness={0.9} />
                </Box>
                <Text position={[0, 0, 0.1]} fontSize={0.15} color="#fff">
                    Chiffon de laine
                </Text>
                {/* Positive charges on cloth after rubbing */}
                {chargeLevel > 20 && Array.from({ length: Math.floor(chargeLevel / 25) }, (_, i) => (
                    <Text
                        key={i}
                        position={[-0.6 + i * 0.4, 0.5, 0.1]}
                        fontSize={0.15}
                        color="#4caf50"
                    >
                        +
                    </Text>
                ))}
            </group>

            {/* Paper pieces on table */}
            <group position={[0, -0.5, 0]}>
                {paperPieces.map((piece, i) => (
                    <Box
                        key={i}
                        ref={el => particlesRef.current[i] = el}
                        args={[piece.scale * 2, piece.scale, piece.scale * 2]}
                        position={[piece.x, showAttraction ? 0.5 : 0, piece.z]}
                    >
                        <meshStandardMaterial color="#f5f5f5" />
                    </Box>
                ))}
            </group>

            {/* Table */}
            <Box args={[5, 0.2, 4]} position={[0, -0.6, 0]} receiveShadow>
                <meshStandardMaterial color="#5d4037" />
            </Box>

            {/* Lightning effect when charged */}
            {chargeLevel > 80 && (
                <Line
                    points={[[0, 1.9, 0], [0, 0, 0]]}
                    color="#00bcd4"
                    lineWidth={2}
                    dashed
                    dashSize={0.1}
                    dashScale={50}
                />
            )}

            {/* Control Panel */}
            <Html position={[4, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="⚡ Électrisation" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '280px' }}>
                        <div style={{
                            background: 'linear-gradient(90deg, #333, #4fc3f7)',
                            height: '20px',
                            borderRadius: '10px',
                            marginBottom: '15px'
                        }}>
                            <div style={{
                                width: `${chargeLevel}%`,
                                height: '100%',
                                background: '#2196f3',
                                borderRadius: '10px',
                                transition: 'width 0.1s'
                            }} />
                        </div>

                        <p style={{ color: '#fff', marginBottom: '10px' }}>
                            Charge: <strong>{chargeLevel.toFixed(0)}%</strong>
                        </p>

                        <button
                            onMouseDown={() => setIsRubbing(true)}
                            onMouseUp={() => setIsRubbing(false)}
                            onMouseLeave={() => setIsRubbing(false)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginBottom: '10px',
                                background: isRubbing ? '#f44336' : '#4caf50',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            {isRubbing ? '🔥 Frottement...' : '👆 Maintenir pour frotter'}
                        </button>

                        <button
                            onClick={() => setShowAttraction(chargeLevel > 30)}
                            disabled={chargeLevel < 30}
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginBottom: '10px',
                                background: chargeLevel >= 30 ? '#9c27b0' : '#666',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff',
                                cursor: chargeLevel >= 30 ? 'pointer' : 'not-allowed',
                                fontSize: '14px'
                            }}
                        >
                            🧲 Approcher les papiers
                        </button>

                        <button
                            onClick={handleReset}
                            style={{
                                width: '100%',
                                padding: '10px',
                                background: '#607d8b',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff',
                                cursor: 'pointer'
                            }}
                        >
                            🔄 Réinitialiser
                        </button>

                        <div style={{
                            marginTop: '15px',
                            padding: '10px',
                            background: 'rgba(33,150,243,0.2)',
                            borderRadius: '8px',
                            fontSize: '12px',
                            color: '#90caf9'
                        }}>
                            <strong>📚 Principe:</strong><br />
                            Le frottement arrache des électrons à la laine.
                            La règle devient négative (-), la laine positive (+).
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P2-P4. CIRCUIT ÉLECTRIQUE - Tension et Intensité
// ============================================================
export function CircuitElectriqueSeconde() {
    const [voltage, setVoltage] = useState(6);
    const [resistance, setResistance] = useState(100);
    const [circuitClosed, setCircuitClosed] = useState(true);
    const electronRefs = useRef([]);

    const current = circuitClosed ? (voltage / resistance) * 1000 : 0; // mA

    useFrame((state) => {
        if (circuitClosed && electronRefs.current.length > 0) {
            const speed = current / 500;
            electronRefs.current.forEach((electron, i) => {
                if (electron) {
                    electron.position.x += speed;
                    if (electron.position.x > 3) electron.position.x = -3;
                }
            });
        }
    });

    // Electrons visualization
    const electrons = useMemo(() => {
        return Array.from({ length: 10 }, (_, i) => ({
            x: -3 + (i * 0.6),
            delay: i * 0.1
        }));
    }, []);

    return (
        <group>
            {/* Battery / Pile */}
            <group position={[-3, 0, 0]}>
                <Cylinder args={[0.3, 0.3, 1, 16]} rotation={[0, 0, Math.PI / 2]}>
                    <meshStandardMaterial color="#333" />
                </Cylinder>
                <Box args={[0.15, 0.4, 0.4]} position={[0.6, 0, 0]}>
                    <meshStandardMaterial color="#ff5722" />
                </Box>
                <Text position={[0, 0.6, 0]} fontSize={0.2} color="#fff">
                    {voltage}V
                </Text>
                <Text position={[0.6, 0.25, 0]} fontSize={0.15} color="#f44336">+</Text>
                <Text position={[-0.6, 0.25, 0]} fontSize={0.15} color="#2196f3">-</Text>
            </group>

            {/* Wires */}
            <Line
                points={[[-2.4, 0, 0], [-1.5, 0, 0], [-1.5, 1, 0], [1.5, 1, 0], [1.5, 0, 0], [2.4, 0, 0]]}
                color={circuitClosed ? '#ffc107' : '#666'}
                lineWidth={3}
            />
            <Line
                points={[[-2.4, 0, 0], [-1.5, 0, 0], [-1.5, -1, 0], [1.5, -1, 0], [1.5, 0, 0], [2.4, 0, 0]]}
                color={circuitClosed ? '#ffc107' : '#666'}
                lineWidth={3}
            />

            {/* Resistor */}
            <group position={[0, 1, 0]}>
                <Box args={[1, 0.3, 0.3]}>
                    <meshStandardMaterial color="#795548" />
                </Box>
                {/* Resistance bands */}
                {[0, 1, 2, 3].map((i) => (
                    <Box key={i} args={[0.08, 0.35, 0.35]} position={[-0.35 + i * 0.2, 0, 0]}>
                        <meshStandardMaterial color={['#f44336', '#ff9800', '#795548', '#ffc107'][i]} />
                    </Box>
                ))}
                <Text position={[0, 0.4, 0]} fontSize={0.15} color="#fff">
                    R = {resistance}Ω
                </Text>
            </group>

            {/* Lamp */}
            <group position={[0, -1, 0]}>
                <Sphere args={[0.3, 16, 16]}>
                    <meshStandardMaterial
                        color={circuitClosed ? '#ffeb3b' : '#424242'}
                        emissive={circuitClosed ? '#ff9800' : '#000'}
                        emissiveIntensity={circuitClosed ? current / 100 : 0}
                        transparent
                        opacity={0.9}
                    />
                </Sphere>
                <Text position={[0, 0.5, 0]} fontSize={0.12} color="#fff">
                    Lampe
                </Text>
            </group>

            {/* Switch */}
            <group position={[2.5, 0, 0]}>
                <Box args={[0.5, 0.5, 0.3]}>
                    <meshStandardMaterial color="#607d8b" />
                </Box>
                <Box
                    args={[0.4, 0.1, 0.1]}
                    position={[0, circuitClosed ? 0 : 0.3, 0]}
                    rotation={[0, 0, circuitClosed ? 0 : Math.PI / 6]}
                >
                    <meshStandardMaterial color="#ffeb3b" />
                </Box>
            </group>

            {/* Electrons (visible when circuit is closed) */}
            {circuitClosed && electrons.map((e, i) => (
                <Sphere
                    key={i}
                    ref={el => electronRefs.current[i] = el}
                    args={[0.08, 8, 8]}
                    position={[e.x, 1, 0.2]}
                >
                    <meshStandardMaterial color="#2196f3" emissive="#2196f3" emissiveIntensity={0.5} />
                </Sphere>
            ))}

            {/* Ammeter */}
            <group position={[-1.5, 1.5, 0]}>
                <Cylinder args={[0.3, 0.3, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#1976d2" />
                </Cylinder>
                <Text position={[0, 0, 0.1]} fontSize={0.1} color="#fff">
                    A
                </Text>
                <Text position={[0, -0.4, 0]} fontSize={0.1} color="#4fc3f7">
                    I = {current.toFixed(1)} mA
                </Text>
            </group>

            {/* Voltmeter */}
            <group position={[1.5, 1.5, 0]}>
                <Cylinder args={[0.3, 0.3, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#d32f2f" />
                </Cylinder>
                <Text position={[0, 0, 0.1]} fontSize={0.1} color="#fff">
                    V
                </Text>
                <Text position={[0, -0.4, 0]} fontSize={0.1} color="#ef9a9a">
                    U = {circuitClosed ? (current * resistance / 1000).toFixed(2) : 0} V
                </Text>
            </group>

            {/* Control Panel */}
            <Html position={[5, 1, 0]} transform={false}>
                <DraggableHtmlPanel title="🔌 Circuit Électrique" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '280px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Tension (U): {voltage} V
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="12"
                                step="0.5"
                                value={voltage}
                                onChange={(e) => setVoltage(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Résistance (R): {resistance} Ω
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="500"
                                step="10"
                                value={resistance}
                                onChange={(e) => setResistance(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <button
                            onClick={() => setCircuitClosed(!circuitClosed)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginBottom: '10px',
                                background: circuitClosed ? '#f44336' : '#4caf50',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            {circuitClosed ? '🔴 Ouvrir le circuit' : '🟢 Fermer le circuit'}
                        </button>

                        <div style={{
                            background: 'rgba(76,175,80,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginTop: '10px'
                        }}>
                            <p style={{ color: '#81c784', margin: '0 0 10px 0', fontWeight: 'bold' }}>
                                📊 Mesures:
                            </p>
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '13px' }}>
                                Intensité: <strong style={{ color: '#4fc3f7' }}>{current.toFixed(2)} mA</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '13px' }}>
                                U = R × I = {resistance} × {(current / 1000).toFixed(4)} = <strong style={{ color: '#ef9a9a' }}>{(voltage).toFixed(2)} V</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginTop: '10px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>⚡ Loi d'Ohm:</strong> U = R × I<br />
                            Le courant circule de (+) vers (-) (sens conventionnel).
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P5. LOI D'OHM - Caractéristique Tension-Intensité
// ============================================================
export function LoiOhmSeconde() {
    const [voltage, setVoltage] = useState(0);
    const [resistance, setResistance] = useState(100);
    const [dataPoints, setDataPoints] = useState([]);
    const [showGraph, setShowGraph] = useState(false);

    const current = voltage / resistance;

    const addDataPoint = () => {
        if (voltage > 0) {
            setDataPoints(prev => [...prev, { U: voltage, I: current * 1000 }]);
        }
    };

    const clearData = () => {
        setDataPoints([]);
    };

    return (
        <group>
            {/* Resistor visualization */}
            <group position={[0, 0, 0]}>
                <Box args={[2, 0.5, 0.5]}>
                    <meshStandardMaterial color="#795548" />
                </Box>
                {/* Resistance color bands */}
                {[0, 1, 2, 3].map((i) => (
                    <Box key={i} args={[0.12, 0.55, 0.55]} position={[-0.7 + i * 0.35, 0, 0]}>
                        <meshStandardMaterial color={['#9c27b0', '#000', '#795548', '#ffc107'][i]} />
                    </Box>
                ))}
            </group>

            {/* Current flow visualization */}
            <Line
                points={[[-3, 0, 0], [-1.1, 0, 0]]}
                color="#f44336"
                lineWidth={4}
            />
            <Line
                points={[[1.1, 0, 0], [3, 0, 0]]}
                color="#2196f3"
                lineWidth={4}
            />

            {/* Voltage arrows */}
            <group position={[0, 1, 0]}>
                <Line points={[[-1, 0, 0], [1, 0, 0]]} color="#ff9800" lineWidth={2} />
                <Text position={[0, 0.3, 0]} fontSize={0.2} color="#ff9800">
                    U = {voltage.toFixed(1)} V
                </Text>
            </group>

            {/* Current indicator */}
            <group position={[0, -1, 0]}>
                <Text position={[0, 0, 0]} fontSize={0.2} color="#4fc3f7">
                    I = {(current * 1000).toFixed(2)} mA
                </Text>
            </group>

            {/* Graph visualization (simplified 3D) */}
            {showGraph && (
                <group position={[0, 2.5, -2]}>
                    {/* Axes */}
                    <Line points={[[0, 0, 0], [3, 0, 0]]} color="#fff" lineWidth={2} />
                    <Line points={[[0, 0, 0], [0, 2, 0]]} color="#fff" lineWidth={2} />
                    <Text position={[3.2, 0, 0]} fontSize={0.15} color="#fff">U (V)</Text>
                    <Text position={[0, 2.2, 0]} fontSize={0.15} color="#fff">I (mA)</Text>

                    {/* Data points */}
                    {dataPoints.map((point, i) => (
                        <Sphere key={i} args={[0.08, 8, 8]} position={[point.U / 4, point.I / 50, 0]}>
                            <meshStandardMaterial color="#4caf50" emissive="#4caf50" emissiveIntensity={0.5} />
                        </Sphere>
                    ))}

                    {/* Trend line (if enough points) */}
                    {dataPoints.length >= 2 && (
                        <Line
                            points={[[0, 0, 0], [3, (30 / resistance) * 60, 0]]}
                            color="#ff9800"
                            lineWidth={2}
                            dashed
                        />
                    )}
                </group>
            )}

            {/* Control Panel */}
            <Html position={[5, 1, 0]} transform={false}>
                <DraggableHtmlPanel title="📈 Loi d'Ohm" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Tension U: {voltage.toFixed(1)} V
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="12"
                                step="0.5"
                                value={voltage}
                                onChange={(e) => setVoltage(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Résistance R: {resistance} Ω
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="500"
                                step="50"
                                value={resistance}
                                onChange={(e) => setResistance(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <button
                                onClick={addDataPoint}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    background: '#4caf50',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                📌 Ajouter point
                            </button>
                            <button
                                onClick={clearData}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    background: '#f44336',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                🗑️ Effacer
                            </button>
                        </div>

                        <button
                            onClick={() => setShowGraph(!showGraph)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                background: showGraph ? '#9c27b0' : '#673ab7',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff',
                                cursor: 'pointer',
                                marginBottom: '15px'
                            }}
                        >
                            {showGraph ? '📊 Masquer graphique' : '📊 Afficher graphique'}
                        </button>

                        <div style={{
                            background: 'rgba(255,152,0,0.2)',
                            padding: '12px',
                            borderRadius: '8px'
                        }}>
                            <p style={{ color: '#ffcc80', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                🧮 Calculs:
                            </p>
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '13px' }}>
                                I = U / R = {voltage} / {resistance} = <strong>{(current * 1000).toFixed(2)} mA</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '13px' }}>
                                Points enregistrés: <strong>{dataPoints.length}</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginTop: '10px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>📐 Caractéristique:</strong><br />
                            La courbe U = f(I) est une droite passant par l'origine.
                            La pente = R (résistance).
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P6. DIPÔLES ACTIFS - Générateur avec f.é.m et résistance interne
// ============================================================
export function GenerateurSeconde() {
    const [fem, setFem] = useState(9); // Force électromotrice
    const [rInterne, setRInterne] = useState(1); // Résistance interne
    const [rExterne, setRExterne] = useState(50); // Résistance externe

    const iTot = fem / (rInterne + rExterne);
    const uBornes = fem - rInterne * iTot;
    const pUtile = uBornes * iTot;
    const pPerdue = rInterne * iTot * iTot;
    const rendement = (pUtile / (pUtile + pPerdue)) * 100;

    return (
        <group>
            {/* Battery representation */}
            <group position={[-2, 0, 0]}>
                <Box args={[1.5, 2, 1]}>
                    <meshStandardMaterial color="#333" />
                </Box>
                {/* Positive terminal */}
                <Cylinder args={[0.15, 0.15, 0.3, 16]} position={[0, 1.15, 0]}>
                    <meshStandardMaterial color="#f44336" />
                </Cylinder>
                {/* Internal resistance visualization */}
                <Box args={[0.8, 0.3, 0.3]} position={[0, 0.3, 0.5]}>
                    <meshStandardMaterial color="#ff9800" />
                </Box>
                <Text position={[0, 0.3, 0.85]} fontSize={0.12} color="#fff">
                    r = {rInterne}Ω
                </Text>
                {/* EMF indicator */}
                <Text position={[0, -0.3, 0.6]} fontSize={0.15} color="#4caf50">
                    E = {fem}V
                </Text>
            </group>

            {/* External circuit */}
            <Line
                points={[[-1.2, 1, 0], [2, 1, 0], [2, -1, 0], [-1.2, -1, 0]]}
                color="#ffc107"
                lineWidth={3}
            />

            {/* External resistance */}
            <group position={[2, 0, 0]}>
                <Box args={[0.5, 1.5, 0.5]}>
                    <meshStandardMaterial color="#795548" />
                </Box>
                <Text position={[0.5, 0, 0]} fontSize={0.15} color="#fff">
                    R = {rExterne}Ω
                </Text>
            </group>

            {/* Voltage at terminals */}
            <group position={[0, 2, 0]}>
                <Line points={[[-1.5, 0, 0], [0.5, 0, 0]]} color="#2196f3" lineWidth={2} />
                <Text position={[-0.5, 0.3, 0]} fontSize={0.18} color="#2196f3">
                    U = {uBornes.toFixed(2)} V
                </Text>
            </group>

            {/* Current indicator */}
            <group position={[0, -2, 0]}>
                <Text position={[0, 0, 0]} fontSize={0.18} color="#4fc3f7">
                    I = {(iTot * 1000).toFixed(1)} mA
                </Text>
            </group>

            {/* Control Panel */}
            <Html position={[5, 1, 0]} transform={false}>
                <DraggableHtmlPanel title="🔋 Générateur" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                f.é.m (E): {fem} V
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="12"
                                step="0.5"
                                value={fem}
                                onChange={(e) => setFem(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Résistance interne (r): {rInterne} Ω
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="5"
                                step="0.1"
                                value={rInterne}
                                onChange={(e) => setRInterne(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Résistance externe (R): {rExterne} Ω
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="200"
                                step="10"
                                value={rExterne}
                                onChange={(e) => setRExterne(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{
                            background: 'rgba(76,175,80,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#81c784', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Bilan:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Tension aux bornes: <strong style={{ color: '#4fc3f7' }}>{uBornes.toFixed(2)} V</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Intensité: <strong>{(iTot * 1000).toFixed(1)} mA</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Puissance utile: <strong style={{ color: '#4caf50' }}>{(pUtile * 1000).toFixed(1)} mW</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Pertes (effet Joule): <strong style={{ color: '#f44336' }}>{(pPerdue * 1000).toFixed(2)} mW</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Rendement: <strong style={{ color: '#ffeb3b' }}>{rendement.toFixed(1)}%</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>📐 Loi d'Ohm générateur:</strong><br />
                            U = E - r × I<br />
                            La tension aux bornes diminue quand I augmente.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

export default {
    ElectrisationSimulation,
    CircuitElectriqueSeconde,
    LoiOhmSeconde,
    GenerateurSeconde
};

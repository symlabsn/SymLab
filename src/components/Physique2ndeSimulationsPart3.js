/**
 * Physique 2nde Simulations - Part 3: Optique (Chapitres 13-15)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Plane } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// ============================================================
// P13. PROPAGATION RECTILIGNE DE LA LUMIÈRE
// ============================================================
export function PropagationLumiereSeconde() {
    const [sourceType, setSourceType] = useState('ponctuelle');
    const [showRays, setShowRays] = useState(true);
    const [showShadow, setShowShadow] = useState(true);
    const [obstaclePosition, setObstaclePosition] = useState(0);
    const lightRef = useRef();

    useFrame((state) => {
        if (lightRef.current) {
            lightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
        }
    });

    // Calculate shadow geometry
    const shadowWidth = sourceType === 'ponctuelle' ? 1.5 : 2.5;
    const penumbraWidth = sourceType === 'etendue' ? 0.8 : 0;

    return (
        <group>
            {/* Light source */}
            <group position={[-4, 0, 0]}>
                {sourceType === 'ponctuelle' ? (
                    <Sphere args={[0.3, 16, 16]}>
                        <meshStandardMaterial
                            color="#ffeb3b"
                            emissive="#ff9800"
                            emissiveIntensity={1}
                        />
                    </Sphere>
                ) : (
                    <Box args={[0.3, 1.5, 0.3]}>
                        <meshStandardMaterial
                            color="#ffeb3b"
                            emissive="#ff9800"
                            emissiveIntensity={1}
                        />
                    </Box>
                )}
                <Text position={[0, -1, 0]} fontSize={0.2} color="#fff">
                    Source {sourceType === 'ponctuelle' ? 'ponctuelle' : 'étendue'}
                </Text>
                <pointLight ref={lightRef} position={[0, 0, 0]} intensity={1} color="#fff" />
            </group>

            {/* Light rays */}
            {showRays && (
                <group>
                    {[-0.8, -0.4, 0, 0.4, 0.8].map((offset, i) => (
                        <Line
                            key={i}
                            points={[
                                [-3.5, sourceType === 'etendue' ? offset * 0.8 : 0, 0],
                                [obstaclePosition - 0.6, offset, 0]
                            ]}
                            color="#ffeb3b"
                            lineWidth={2}
                            transparent
                            opacity={0.7}
                        />
                    ))}
                </group>
            )}

            {/* Opaque obstacle */}
            <group position={[obstaclePosition, 0, 0]}>
                <Cylinder args={[0.4, 0.4, 1.5, 16]} rotation={[0, 0, 0]}>
                    <meshStandardMaterial color="#333" />
                </Cylinder>
                <Text position={[0, 1.2, 0]} fontSize={0.15} color="#fff">
                    Obstacle opaque
                </Text>
            </group>

            {/* Screen */}
            <Box args={[0.1, 4, 3]} position={[4, 0, 0]}>
                <meshStandardMaterial color="#e0e0e0" />
            </Box>

            {/* Shadow on screen */}
            {showShadow && (
                <group position={[3.9, 0, 0]}>
                    {/* Umbra (full shadow) */}
                    <Plane args={[0.1, shadowWidth]} rotation={[0, -Math.PI / 2, 0]}>
                        <meshBasicMaterial color="#111" side={THREE.DoubleSide} />
                    </Plane>

                    {/* Penumbra (partial shadow for extended source) */}
                    {sourceType === 'etendue' && (
                        <>
                            <Plane
                                args={[0.1, penumbraWidth]}
                                position={[0, shadowWidth / 2 + penumbraWidth / 2, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            >
                                <meshBasicMaterial color="#444" transparent opacity={0.5} side={THREE.DoubleSide} />
                            </Plane>
                            <Plane
                                args={[0.1, penumbraWidth]}
                                position={[0, -shadowWidth / 2 - penumbraWidth / 2, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            >
                                <meshBasicMaterial color="#444" transparent opacity={0.5} side={THREE.DoubleSide} />
                            </Plane>
                        </>
                    )}

                    <Text position={[0.2, -2.3, 0]} fontSize={0.15} color="#fff" rotation={[0, -Math.PI / 2, 0]}>
                        {sourceType === 'etendue' ? 'Ombre + Pénombre' : 'Ombre portée'}
                    </Text>
                </group>
            )}

            {/* Labels */}
            <Text position={[4, 2.3, 0]} fontSize={0.2} color="#fff">
                Écran
            </Text>

            {/* Shadow cone visualization */}
            {showShadow && (
                <Line
                    points={[
                        [obstaclePosition, 0.75, 0],
                        [4, shadowWidth / 2 + (sourceType === 'etendue' ? penumbraWidth : 0), 0]
                    ]}
                    color="#666"
                    lineWidth={1}
                    dashed
                />
            )}

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="💡 Propagation de la Lumière" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '280px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>
                                Type de source:
                            </label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => setSourceType('ponctuelle')}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        background: sourceType === 'ponctuelle' ? '#ff9800' : '#444',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ⚪ Ponctuelle
                                </button>
                                <button
                                    onClick={() => setSourceType('etendue')}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        background: sourceType === 'etendue' ? '#ff9800' : '#444',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    📏 Étendue
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Position obstacle: {obstaclePosition.toFixed(1)}
                            </label>
                            <input
                                type="range"
                                min="-2"
                                max="2"
                                step="0.1"
                                value={obstaclePosition}
                                onChange={(e) => setObstaclePosition(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showRays}
                                    onChange={(e) => setShowRays(e.target.checked)}
                                />
                                Afficher les rayons
                            </label>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showShadow}
                                    onChange={(e) => setShowShadow(e.target.checked)}
                                />
                                Afficher l'ombre
                            </label>
                        </div>

                        <div style={{
                            background: 'rgba(255,235,59,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#fff176', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Observations:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Source: <strong>{sourceType === 'ponctuelle' ? 'Ponctuelle' : 'Étendue'}</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Ombre: <strong>{sourceType === 'ponctuelle' ? 'Propre uniquement' : 'Propre + Pénombre'}</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                Vitesse lumière: <strong>c = 3×10⁸ m/s</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>📐 Principe:</strong><br />
                            Dans un milieu homogène et transparent,<br />
                            la lumière se propage en ligne droite.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P14. RÉFLEXION DE LA LUMIÈRE
// ============================================================
export function ReflexionLumiereSeconde() {
    const [angleIncidence, setAngleIncidence] = useState(45);
    const [showNormal, setShowNormal] = useState(true);
    const [showAngles, setShowAngles] = useState(true);
    const [mirrorType, setMirrorType] = useState('plan');

    const rad = (angleIncidence * Math.PI) / 180;
    const angleReflexion = angleIncidence; // i = r

    // Calculate ray positions
    const rayLength = 3;
    const incidentEnd = [-rayLength * Math.sin(rad), rayLength * Math.cos(rad), 0];
    const reflectedEnd = [rayLength * Math.sin(rad), rayLength * Math.cos(rad), 0];

    return (
        <group>
            {/* Mirror surface */}
            <group rotation={[0, 0, 0]}>
                {mirrorType === 'plan' ? (
                    <Box args={[6, 0.1, 2]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#90caf9" metalness={0.9} roughness={0.1} />
                    </Box>
                ) : (
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[3, 3, 2, 32, 1, true, Math.PI * 0.75, Math.PI * 0.5]} />
                        <meshStandardMaterial color="#90caf9" metalness={0.9} roughness={0.1} side={THREE.DoubleSide} />
                    </mesh>
                )}
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="#fff">
                    Miroir {mirrorType}
                </Text>
            </group>

            {/* Normal line */}
            {showNormal && (
                <group>
                    <Line
                        points={[[0, 0, 0], [0, 3.5, 0]]}
                        color="#9c27b0"
                        lineWidth={2}
                        dashed
                        dashSize={0.1}
                    />
                    <Text position={[0.3, 3.2, 0]} fontSize={0.15} color="#9c27b0">
                        Normale (N)
                    </Text>
                </group>
            )}

            {/* Incident ray */}
            <group>
                <Line
                    points={[incidentEnd, [0, 0, 0]]}
                    color="#ffeb3b"
                    lineWidth={4}
                />
                <Sphere args={[0.1, 8, 8]} position={incidentEnd}>
                    <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={0.5} />
                </Sphere>
                <Text position={[incidentEnd[0] - 0.5, incidentEnd[1] + 0.3, 0]} fontSize={0.15} color="#ffeb3b">
                    Rayon incident
                </Text>
            </group>

            {/* Reflected ray */}
            <group>
                <Line
                    points={[[0, 0, 0], reflectedEnd]}
                    color="#4caf50"
                    lineWidth={4}
                />
                <Text position={[reflectedEnd[0] + 0.3, reflectedEnd[1] + 0.3, 0]} fontSize={0.15} color="#4caf50">
                    Rayon réfléchi
                </Text>
            </group>

            {/* Angle arcs */}
            {showAngles && (
                <group>
                    {/* Incidence angle arc */}
                    <mesh rotation={[0, 0, 0]}>
                        <ringGeometry args={[0.8, 0.9, 32, 1, Math.PI / 2, rad]} />
                        <meshBasicMaterial color="#ffeb3b" transparent opacity={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    <Text position={[-0.5, 1.2, 0]} fontSize={0.15} color="#ffeb3b">
                        i = {angleIncidence}°
                    </Text>

                    {/* Reflection angle arc */}
                    <mesh rotation={[0, 0, 0]}>
                        <ringGeometry args={[0.8, 0.9, 32, 1, Math.PI / 2 - rad, rad]} />
                        <meshBasicMaterial color="#4caf50" transparent opacity={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    <Text position={[0.5, 1.2, 0]} fontSize={0.15} color="#4caf50">
                        r = {angleReflexion}°
                    </Text>
                </group>
            )}

            {/* Point of incidence */}
            <Sphere args={[0.12, 16, 16]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#f44336" />
            </Sphere>
            <Text position={[0.3, -0.25, 0]} fontSize={0.12} color="#f44336">
                I
            </Text>

            {/* Virtual image indicator (for plane mirror) */}
            {mirrorType === 'plan' && (
                <group position={[0, -2.5, 0]}>
                    <Sphere args={[0.15, 16, 16]} position={incidentEnd}>
                        <meshStandardMaterial color="#ffeb3b" transparent opacity={0.4} />
                    </Sphere>
                    <Text position={[incidentEnd[0], incidentEnd[1] - 0.3, 0]} fontSize={0.12} color="#aaa">
                        Image virtuelle
                    </Text>
                    <Line
                        points={[[0, 0, 0], [incidentEnd[0], incidentEnd[1], 0]]}
                        color="#aaa"
                        lineWidth={1}
                        dashed
                    />
                </group>
            )}

            {/* Control Panel */}
            <Html position={[5, 3, 0]} transform={false}>
                <DraggableHtmlPanel title="🪞 Réflexion de la Lumière" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '280px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Angle d'incidence: {angleIncidence}°
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="80"
                                value={angleIncidence}
                                onChange={(e) => setAngleIncidence(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>
                                Type de miroir:
                            </label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => setMirrorType('plan')}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        background: mirrorType === 'plan' ? '#2196f3' : '#444',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    📏 Plan
                                </button>
                                <button
                                    onClick={() => setMirrorType('courbe')}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        background: mirrorType === 'courbe' ? '#2196f3' : '#444',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    🔵 Courbe
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showNormal}
                                    onChange={(e) => setShowNormal(e.target.checked)}
                                />
                                Afficher la normale
                            </label>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showAngles}
                                    onChange={(e) => setShowAngles(e.target.checked)}
                                />
                                Afficher les angles
                            </label>
                        </div>

                        <div style={{
                            background: 'rgba(76,175,80,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#81c784', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                ⚖️ Vérification:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                Angle d'incidence (i): <strong style={{ color: '#ffeb3b' }}>{angleIncidence}°</strong>
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                Angle de réflexion (r): <strong style={{ color: '#4caf50' }}>{angleReflexion}°</strong>
                            </p>
                            <p style={{ color: '#81c784', margin: '8px 0 0 0', fontWeight: 'bold' }}>
                                ✓ i = r (Loi de la réflexion)
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(156,39,176,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#ce93d8'
                        }}>
                            <strong>📐 Lois de Snell-Descartes (Réflexion):</strong><br />
                            1. Le rayon réfléchi est dans le plan d'incidence<br />
                            2. L'angle de réflexion égale l'angle d'incidence: <strong>i = r</strong>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P15. RÉFRACTION ET DISPERSION
// ============================================================
export function RefractionDispersionSeconde() {
    const [angleIncidence, setAngleIncidence] = useState(45);
    const [milieu1, setMilieu1] = useState('air');
    const [milieu2, setMilieu2] = useState('eau');
    const [showNormal, setShowNormal] = useState(true);
    const [showDispersion, setShowDispersion] = useState(false);

    const indices = {
        air: { n: 1.0, color: '#e3f2fd', name: 'Air' },
        eau: { n: 1.33, color: '#81d4fa', name: 'Eau' },
        verre: { n: 1.5, color: '#b2dfdb', name: 'Verre' },
        diamant: { n: 2.4, color: '#e1bee7', name: 'Diamant' }
    };

    const n1 = indices[milieu1].n;
    const n2 = indices[milieu2].n;
    const rad1 = (angleIncidence * Math.PI) / 180;

    // Snell-Descartes law: n1 * sin(i1) = n2 * sin(i2)
    const sinI2 = (n1 * Math.sin(rad1)) / n2;
    const hasTotalReflection = sinI2 > 1;
    const angleRefraction = hasTotalReflection ? 90 : (Math.asin(sinI2) * 180) / Math.PI;
    const rad2 = (angleRefraction * Math.PI) / 180;

    // Calculate critical angle
    const criticalAngle = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : null;

    const rayLength = 2.5;

    // Dispersion colors (for prism effect)
    const spectrumColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'];

    return (
        <group>
            {/* First medium (top) */}
            <Box args={[8, 3, 2]} position={[0, 1.5, 0]}>
                <meshStandardMaterial
                    color={indices[milieu1].color}
                    transparent
                    opacity={0.3}
                />
            </Box>
            <Text position={[-3, 2.5, 1]} fontSize={0.2} color="#333">
                {indices[milieu1].name} (n₁ = {n1})
            </Text>

            {/* Second medium (bottom) */}
            <Box args={[8, 3, 2]} position={[0, -1.5, 0]}>
                <meshStandardMaterial
                    color={indices[milieu2].color}
                    transparent
                    opacity={0.5}
                />
            </Box>
            <Text position={[-3, -2.5, 1]} fontSize={0.2} color="#333">
                {indices[milieu2].name} (n₂ = {n2})
            </Text>

            {/* Interface (dioptre) */}
            <Box args={[8, 0.05, 2]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fff" />
            </Box>

            {/* Normal */}
            {showNormal && (
                <group>
                    <Line
                        points={[[0, -2.5, 0], [0, 2.5, 0]]}
                        color="#9c27b0"
                        lineWidth={2}
                        dashed
                    />
                    <Text position={[0.3, 2.2, 0]} fontSize={0.15} color="#9c27b0">
                        Normale
                    </Text>
                </group>
            )}

            {/* Incident ray */}
            <Line
                points={[
                    [-rayLength * Math.sin(rad1), rayLength * Math.cos(rad1), 0],
                    [0, 0, 0]
                ]}
                color="#ffeb3b"
                lineWidth={4}
            />
            <Text position={[-rayLength * Math.sin(rad1) * 0.5 - 0.5, rayLength * Math.cos(rad1) * 0.5, 0]} fontSize={0.15} color="#ffeb3b">
                Incident
            </Text>

            {/* Refracted ray (or total reflection) */}
            {!showDispersion && (
                hasTotalReflection ? (
                    // Total internal reflection
                    <group>
                        <Line
                            points={[
                                [0, 0, 0],
                                [rayLength * Math.sin(rad1), rayLength * Math.cos(rad1), 0]
                            ]}
                            color="#f44336"
                            lineWidth={4}
                        />
                        <Text position={[1.5, 1.5, 0]} fontSize={0.2} color="#f44336">
                            ⚠️ Réflexion Totale!
                        </Text>
                    </group>
                ) : (
                    <group>
                        <Line
                            points={[
                                [0, 0, 0],
                                [rayLength * Math.sin(rad2), -rayLength * Math.cos(rad2), 0]
                            ]}
                            color="#4caf50"
                            lineWidth={4}
                        />
                        <Text position={[rayLength * Math.sin(rad2) * 0.5 + 0.3, -rayLength * Math.cos(rad2) * 0.5, 0]} fontSize={0.15} color="#4caf50">
                            Réfracté
                        </Text>
                    </group>
                )
            )}

            {/* Dispersion (spectrum) */}
            {showDispersion && !hasTotalReflection && (
                <group>
                    {spectrumColors.map((color, i) => {
                        const dispersionAngle = angleRefraction + (i - 3) * 2;
                        const dispRad = (dispersionAngle * Math.PI) / 180;
                        return (
                            <Line
                                key={i}
                                points={[
                                    [0, 0, 0],
                                    [rayLength * Math.sin(dispRad), -rayLength * Math.cos(dispRad), 0]
                                ]}
                                color={color}
                                lineWidth={3}
                            />
                        );
                    })}
                    <Text position={[2, -2, 0]} fontSize={0.15} color="#fff">
                        Dispersion (Spectre)
                    </Text>
                </group>
            )}

            {/* Angle indicators */}
            <Text position={[-0.8, 0.8, 0]} fontSize={0.15} color="#ffeb3b">
                i₁ = {angleIncidence}°
            </Text>
            {!hasTotalReflection && (
                <Text position={[0.5, -0.8, 0]} fontSize={0.15} color="#4caf50">
                    i₂ = {angleRefraction.toFixed(1)}°
                </Text>
            )}

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🔬 Réfraction & Dispersion" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Angle d'incidence: {angleIncidence}°
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="85"
                                value={angleIncidence}
                                onChange={(e) => setAngleIncidence(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                            <div>
                                <label style={{ color: '#fff', display: 'block', marginBottom: '5px', fontSize: '12px' }}>
                                    Milieu 1 (dessus):
                                </label>
                                <select
                                    value={milieu1}
                                    onChange={(e) => setMilieu1(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '6px',
                                        background: '#333',
                                        color: '#fff',
                                        border: 'none'
                                    }}
                                >
                                    {Object.entries(indices).map(([key, val]) => (
                                        <option key={key} value={key}>{val.name} (n={val.n})</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label style={{ color: '#fff', display: 'block', marginBottom: '5px', fontSize: '12px' }}>
                                    Milieu 2 (dessous):
                                </label>
                                <select
                                    value={milieu2}
                                    onChange={(e) => setMilieu2(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '6px',
                                        background: '#333',
                                        color: '#fff',
                                        border: 'none'
                                    }}
                                >
                                    {Object.entries(indices).map(([key, val]) => (
                                        <option key={key} value={key}>{val.name} (n={val.n})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showNormal}
                                    onChange={(e) => setShowNormal(e.target.checked)}
                                />
                                Afficher la normale
                            </label>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showDispersion}
                                    onChange={(e) => setShowDispersion(e.target.checked)}
                                />
                                🌈 Afficher la dispersion
                            </label>
                        </div>

                        <div style={{
                            background: hasTotalReflection ? 'rgba(244,67,54,0.3)' : 'rgba(76,175,80,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: hasTotalReflection ? '#ef9a9a' : '#81c784', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Calculs (Snell-Descartes):
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                n₁ × sin(i₁) = n₂ × sin(i₂)
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                {n1} × sin({angleIncidence}°) = {n2} × sin(i₂)
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                sin(i₂) = {sinI2.toFixed(4)}
                            </p>
                            {hasTotalReflection ? (
                                <p style={{ color: '#f44336', margin: '8px 0 0 0', fontWeight: 'bold' }}>
                                    ⚠️ sin(i₂) {'>'} 1 → Réflexion totale!
                                </p>
                            ) : (
                                <p style={{ color: '#4caf50', margin: '8px 0 0 0', fontWeight: 'bold' }}>
                                    i₂ = {angleRefraction.toFixed(1)}°
                                </p>
                            )}
                            {criticalAngle && (
                                <p style={{ color: '#ff9800', margin: '5px 0 0 0', fontSize: '11px' }}>
                                    Angle limite: {criticalAngle.toFixed(1)}°
                                </p>
                            )}
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>📐 Loi de Snell-Descartes:</strong><br />
                            n₁ × sin(i₁) = n₂ × sin(i₂)<br />
                            Si n₂ {'>'} n₁: le rayon se rapproche de la normale.<br />
                            Si n₁ {'>'} n₂: risque de réflexion totale.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

export default {
    PropagationLumiereSeconde,
    ReflexionLumiereSeconde,
    RefractionDispersionSeconde
};

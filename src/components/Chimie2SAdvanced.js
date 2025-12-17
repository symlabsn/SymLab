'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================================
// COMPOSANTS DE GAMIFICATION PARTAGÉS
// =========================================================

function Confetti({ active }) {
    const groupRef = useRef();
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (active) {
            const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6A1', '#DDA0DD'];
            const newParticles = [];
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: (Math.random() - 0.5) * 0.5,
                    y: 2 + Math.random(),
                    z: (Math.random() - 0.5) * 0.5,
                    vx: (Math.random() - 0.5) * 0.1,
                    vy: Math.random() * 0.15 + 0.05,
                    vz: (Math.random() - 0.5) * 0.1,
                    color: colors[i % colors.length],
                    size: 0.02 + Math.random() * 0.02
                });
            }
            setParticles(newParticles);
            const timer = setTimeout(() => setParticles([]), 3000);
            return () => clearTimeout(timer);
        }
    }, [active]);

    useFrame(() => {
        if (groupRef.current && particles.length > 0) {
            groupRef.current.children.forEach((mesh, i) => {
                if (particles[i]) {
                    mesh.position.x += particles[i].vx;
                    mesh.position.y += particles[i].vy;
                    mesh.position.z += particles[i].vz;
                    particles[i].vy -= 0.005;
                    mesh.rotation.x += 0.1;
                }
            });
        }
    });

    if (particles.length === 0) return null;

    return (
        <group ref={groupRef}>
            {particles.map((p) => (
                <mesh key={p.id} position={[p.x, p.y, p.z]}>
                    <boxGeometry args={[p.size, p.size, p.size * 0.3]} />
                    <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={0.3} />
                </mesh>
            ))}
        </group>
    );
}

// =========================================================
// C2. STRUCTURE ATOMIQUE - AMÉLIORÉE
// =========================================================
// =========================================================
// C2. STRUCTURE ATOMIQUE - AMÉLIORÉE (30 PREMIERS ÉLÉMENTS)
// =========================================================
export function AtomicStructureAdvanced() {
    const [elementSymbol, setElementSymbol] = useState('C');
    const [showElectrons, setShowElectrons] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Données complètes pour les 30 premiers éléments
    const elementsData = useMemo(() => [
        { symbol: 'H', name: 'Hydrogène', Z: 1, A: 1, family: 'Non-métaux', config: [1], color: '#FFFFFF' },
        { symbol: 'He', name: 'Hélium', Z: 2, A: 4, family: 'Gaz Nobles', config: [2], color: '#D1FAE5' },
        { symbol: 'Li', name: 'Lithium', Z: 3, A: 7, family: 'Alcalins', config: [2, 1], color: '#FDE68A' },
        { symbol: 'Be', name: 'Béryllium', Z: 4, A: 9, family: 'Alcalino-terreux', config: [2, 2], color: '#A3E635' },
        { symbol: 'B', name: 'Bore', Z: 5, A: 11, family: 'Métalloïdes', config: [2, 3], color: '#FCD34D' },
        { symbol: 'C', name: 'Carbone', Z: 6, A: 12, family: 'Non-métaux', config: [2, 4], color: '#374151' },
        { symbol: 'N', name: 'Azote', Z: 7, A: 14, family: 'Non-métaux', config: [2, 5], color: '#60A5FA' },
        { symbol: 'O', name: 'Oxygène', Z: 8, A: 16, family: 'Non-métaux', config: [2, 6], color: '#EF4444' },
        { symbol: 'F', name: 'Fluor', Z: 9, A: 19, family: 'Halogènes', config: [2, 7], color: '#22C55E' },
        { symbol: 'Ne', name: 'Néon', Z: 10, A: 20, family: 'Gaz Nobles', config: [2, 8], color: '#D1FAE5' },
        { symbol: 'Na', name: 'Sodium', Z: 11, A: 23, family: 'Alcalins', config: [2, 8, 1], color: '#A78BFA' },
        { symbol: 'Mg', name: 'Magnésium', Z: 12, A: 24, family: 'Alcalino-terreux', config: [2, 8, 2], color: '#F5F5F4' },
        { symbol: 'Al', name: 'Aluminium', Z: 13, A: 27, family: 'Métaux pauvres', config: [2, 8, 3], color: '#D1D5DB' },
        { symbol: 'Si', name: 'Silicium', Z: 14, A: 28, family: 'Métalloïdes', config: [2, 8, 4], color: '#FCD34D' },
        { symbol: 'P', name: 'Phosphore', Z: 15, A: 31, family: 'Non-métaux', config: [2, 8, 5], color: '#F97316' },
        { symbol: 'S', name: 'Soufre', Z: 16, A: 32, family: 'Non-métaux', config: [2, 8, 6], color: '#FACC15' },
        { symbol: 'Cl', name: 'Chlore', Z: 17, A: 35, family: 'Halogènes', config: [2, 8, 7], color: '#22C55E' },
        { symbol: 'Ar', name: 'Argon', Z: 18, A: 40, family: 'Gaz Nobles', config: [2, 8, 8], color: '#D1FAE5' },
        { symbol: 'K', name: 'Potassium', Z: 19, A: 39, family: 'Alcalins', config: [2, 8, 8, 1], color: '#A78BFA' },
        { symbol: 'Ca', name: 'Calcium', Z: 20, A: 40, family: 'Alcalino-terreux', config: [2, 8, 8, 2], color: '#F5F5F4' },
        { symbol: 'Sc', name: 'Scandium', Z: 21, A: 45, family: 'Métaux de transition', config: [2, 8, 9, 2], color: '#9CA3AF' },
        { symbol: 'Ti', name: 'Titane', Z: 22, A: 48, family: 'Métaux de transition', config: [2, 8, 10, 2], color: '#9CA3AF' },
        { symbol: 'V', name: 'Vanadium', Z: 23, A: 51, family: 'Métaux de transition', config: [2, 8, 11, 2], color: '#9CA3AF' },
        { symbol: 'Cr', name: 'Chrome', Z: 24, A: 52, family: 'Métaux de transition', config: [2, 8, 13, 1], color: '#9CA3AF' },
        { symbol: 'Mn', name: 'Manganèse', Z: 25, A: 55, family: 'Métaux de transition', config: [2, 8, 13, 2], color: '#9CA3AF' },
        { symbol: 'Fe', name: 'Fer', Z: 26, A: 56, family: 'Métaux de transition', config: [2, 8, 14, 2], color: '#9CA3AF' },
        { symbol: 'Co', name: 'Cobalt', Z: 27, A: 59, family: 'Métaux de transition', config: [2, 8, 15, 2], color: '#9CA3AF' },
        { symbol: 'Ni', name: 'Nickel', Z: 28, A: 59, family: 'Métaux de transition', config: [2, 8, 16, 2], color: '#9CA3AF' },
        { symbol: 'Cu', name: 'Cuivre', Z: 29, A: 64, family: 'Métaux de transition', config: [2, 8, 18, 1], color: '#F59E0B' },
        { symbol: 'Zn', name: 'Zinc', Z: 30, A: 65, family: 'Métaux de transition', config: [2, 8, 18, 2], color: '#9CA3AF' }
    ], []);

    const el = elementsData.find(e => e.symbol === elementSymbol) || elementsData[0];
    const neutrons = el.A - el.Z;
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        // Générer un défi aléatoire
        const types = ['protons', 'neutrons', 'electrons_valence', 'couches', 'famille'];
        const type = types[Math.floor(Math.random() * types.length)];
        const targetEl = elementsData[Math.floor(Math.random() * elementsData.length)];

        let question, answer, options;

        switch (type) {
            case 'protons':
                question = `Combien de protons (Z) possède l'atome de ${targetEl.name} ?`;
                answer = targetEl.Z;
                break;
            case 'neutrons':
                question = `Combien de neutrons possède l'atome de ${targetEl.name} (${targetEl.symbol}, A=${targetEl.A}) ?`;
                answer = targetEl.A - targetEl.Z;
                break;
            case 'electrons_valence':
                const valence = targetEl.config[targetEl.config.length - 1];
                question = `Combien d'électrons de valence pour ${targetEl.name} ?`;
                answer = valence;
                break;
            case 'couches':
                question = `Combien de couches électroniques occupées pour ${targetEl.name} ?`;
                answer = targetEl.config.length;
                break;
            case 'famille':
                question = `À quelle famille appartient l'élément ${targetEl.name} ?`;
                answer = targetEl.family;
                break;
            default:
                question = `Quel est le numéro atomique du ${targetEl.name} ?`;
                answer = targetEl.Z;
        }

        setCurrentChallenge({ question, answer, type, element: targetEl });
        setElementSymbol(targetEl.symbol);
    };

    const checkAnswer = (userAns) => {
        if (!currentChallenge) return;

        const isCorrect = userAns === currentChallenge.answer;

        if (isCorrect) {
            setScore(prev => prev + 50);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                startChallenge();
            }, 2000);
        }
    };

    // Helper pour générer des choix multiples pour le défi
    const generateOptions = () => {
        if (!currentChallenge) return [];
        if (currentChallenge.type === 'famille') {
            const families = [...new Set(elementsData.map(e => e.family))];
            // Mélanger et prendre 4
            return families.sort(() => 0.5 - Math.random()).slice(0, 4);
        }
        // Pour les nombres, générer des proches
        const correct = currentChallenge.answer;
        const opts = new Set([correct]);
        while (opts.size < 4) {
            const offset = Math.floor(Math.random() * 5) - 2;
            const val = correct + offset;
            if (val >= 0) opts.add(val);
        }
        return Array.from(opts).sort((a, b) => a - b);
    };

    const options = useMemo(() => generateOptions(), [currentChallenge]);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <Confetti active={showSuccess} />

            <Text position={[0, 4, 0]} fontSize={0.3} color="#60A5FA" anchorX="center">
                🔬 STRUCTURE DE L'ATOME (1-30)
            </Text>
            <Text position={[0, 3.5, 0]} fontSize={0.2} color="white" anchorX="center">
                {el.name} ({el.symbol}) - Z={el.Z}, A={el.A}
            </Text>
            <Text position={[0, 3.2, 0]} fontSize={0.15} color={el.color} anchorX="center">
                Famille : {el.family}
            </Text>

            <group ref={groupRef} position={[0, 0, 0]}>
                {/* Noyau */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" emissive="#7F1D1D" emissiveIntensity={0.5} />
                </mesh>

                {/* Protons et Neutrons (Symboliques) */}
                {/* On ne dessine pas tout pour éviter la surcharge, juste un nuage représentatif */}
                {Array(Math.min(el.Z, 15)).fill(0).map((_, i) => {
                    const r = 0.25;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.random() * Math.PI;
                    const x = r * Math.sin(phi) * Math.cos(theta);
                    const y = r * Math.sin(phi) * Math.sin(theta);
                    const z = r * Math.cos(phi);
                    return (
                        <mesh key={`nuc-${i}`} position={[x, y, z]}>
                            <sphereGeometry args={[0.08, 8, 8]} />
                            <meshStandardMaterial color={i % 2 === 0 ? "#EF4444" : "#F59E0B"} />
                        </mesh>
                    )
                })}

                {/* Couches électroniques (K, L, M, N) */}
                {showElectrons && el.config.map((count, layerIndex) => {
                    const radius = 1.2 + layerIndex * 0.8;
                    const layerName = ['K', 'L', 'M', 'N'][layerIndex];
                    return (
                        <group key={layerName}>
                            {/* Orbite */}
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <torusGeometry args={[radius, 0.015, 16, 100]} />
                                <meshBasicMaterial color="#4B5563" transparent opacity={0.3} />
                            </mesh>

                            {/* Électrons */}
                            {Array(count).fill(0).map((_, eIndex) => {
                                const angle = (eIndex / count) * Math.PI * 2 + (layerIndex * Math.PI / 4);
                                const x = Math.cos(angle) * radius;
                                const z = Math.sin(angle) * radius;
                                return (
                                    <mesh key={`e-${layerIndex}-${eIndex}`} position={[x, 0, z]}>
                                        <sphereGeometry args={[0.08, 16, 16]} />
                                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.8} />
                                    </mesh>
                                );
                            })}

                            {showLabels && (
                                <Text position={[radius + 0.2, 0, 0]} fontSize={0.15} color="#9CA3AF" rotation={[-Math.PI / 2, 0, 0]}>
                                    {layerName}
                                </Text>
                            )}
                        </group>
                    );
                })}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚛️ Tableau Périodique 3D" className="w-[400px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white max-h-[80vh] overflow-y-auto custom-scrollbar">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded border border-gray-700">
                            <div>
                                <span className="text-gray-400 text-xs">Score</span>
                                <div className="text-xl font-bold text-yellow-500">{score} 🏆</div>
                            </div>
                            {challengeMode && (
                                <div className="text-right">
                                    <div className="text-xs text-purple-400">Mode Défi Actif</div>
                                    <div className="text-xs text-white animate-pulse">Réponds à la question !</div>
                                </div>
                            )}
                        </div>

                        {/* Zone de Question (Challenge Mode) */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-purple-900/40 border border-purple-500/50 p-3 rounded-lg space-y-3">
                                <div className="font-bold text-center text-sm">{currentChallenge.question}</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {options.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => checkAnswer(opt)}
                                            className="px-3 py-2 bg-purple-700 hover:bg-purple-600 rounded text-sm font-bold transition-colors"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sélecteur d'éléments (Mode Explore) */}
                        {!challengeMode && (
                            <div className="bg-gray-800/50 p-2 rounded">
                                <div className="text-xs text-gray-400 mb-2">Sélectionner un élément (Z=1 à 30) :</div>
                                <div className="grid grid-cols-6 gap-1">
                                    {elementsData.map(e => (
                                        <button
                                            key={e.symbol}
                                            onClick={() => setElementSymbol(e.symbol)}
                                            className={`p-1 text-[10px] font-bold rounded border transition-all ${elementSymbol === e.symbol
                                                    ? 'bg-blue-600 border-blue-400 text-white scale-110 z-10'
                                                    : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                                                }`}
                                            title={e.name}
                                        >
                                            {e.symbol}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Détails de l'élément */}
                        {!challengeMode && (
                            <div className="space-y-2 text-sm bg-gray-900/30 p-2 rounded">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-gray-800 p-2 rounded">
                                        <div className="text-xs text-gray-500">Numéro Atomique</div>
                                        <div className="text-lg font-bold text-red-400">Z = {el.Z}</div>
                                    </div>
                                    <div className="bg-gray-800 p-2 rounded">
                                        <div className="text-xs text-gray-500">Masse Atomique</div>
                                        <div className="text-lg font-bold text-yellow-400">A = {el.A}</div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-2 rounded flex justify-between items-center">
                                    <span className="text-gray-400 text-xs">Configuration élec.</span>
                                    <span className="font-mono text-blue-300 font-bold">
                                        {el.config.map((n, i) => `${['K', 'L', 'M', 'N'][i]}(${n})`).join(' ')}
                                    </span>
                                </div>
                                <div className="bg-gray-800 p-2 rounded">
                                    <div className="text-xs text-gray-500">Famille Chimique</div>
                                    <div className="font-bold" style={{ color: el.color }}>{el.family}</div>
                                </div>
                            </div>
                        )}

                        {/* Contrôles d'affichage */}
                        <div className="flex gap-4 text-xs">
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="checkbox" checked={showElectrons} onChange={e => setShowElectrons(e.target.checked)} />
                                Voir Électrons
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="checkbox" checked={showLabels} onChange={e => setShowLabels(e.target.checked)} />
                                Voir Couches
                            </label>
                        </div>

                        {/* Boutons Actions */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <button
                                onClick={startChallenge}
                                className="py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded font-bold text-sm shadow-lg"
                            >
                                🎯 Démarrer Défi
                            </button>
                            {challengeMode && (
                                <button
                                    onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }}
                                    className="py-2 bg-gray-600 hover:bg-gray-500 rounded font-bold text-sm"
                                >
                                    Fermer Défi
                                </button>
                            )}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// C4. LA MOLE - AMÉLIORÉE AVEC DÉFI
// =========================================================
export function MoleScaleAdvanced() {
    const [substance, setSubstance] = useState('H2O');
    const [mass, setMass] = useState(18);
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const substances = {
        H2O: { name: 'Eau', M: 18, formula: 'H₂O', color: '#60A5FA' },
        NaCl: { name: 'Sel', M: 58.5, formula: 'NaCl', color: '#F5F5F4' },
        CO2: { name: 'CO₂', M: 44, formula: 'CO₂', color: '#6B7280' },
        C6H12O6: { name: 'Glucose', M: 180, formula: 'C₆H₁₂O₆', color: '#FCD34D' },
        C: { name: 'Carbone', M: 12, formula: 'C', color: '#374151' },
        Fe: { name: 'Fer', M: 56, formula: 'Fe', color: '#78716C' },
        O2: { name: 'Dioxygène', M: 32, formula: 'O₂', color: '#EF4444' },
    };

    const sub = substances[substance];
    const n = mass / sub.M; // quantité de matière (mol)
    const N = n * 6.02e23; // nombre d'entités

    const challenges = [
        { question: "Quelle masse pour 2 mol d'eau (M=18) ?", answer: 36, unit: 'g' },
        { question: "Combien de mol dans 58,5g de NaCl (M=58,5) ?", answer: 1, unit: 'mol' },
        { question: "Quelle masse pour 0,5 mol de CO₂ (M=44) ?", answer: 22, unit: 'g' },
        { question: "Combien de mol dans 36g de carbone (M=12) ?", answer: 3, unit: 'mol' },
        { question: "Quelle masse pour 3 mol de glucose (M=180) ?", answer: 540, unit: 'g' },
    ];

    const balanceRef = useRef();
    const weightRef = useRef();

    useFrame((state, delta) => {
        if (weightRef.current) {
            // Animation de la balance
            const targetY = -0.5 - (mass / 100) * 0.3;
            weightRef.current.position.y += (targetY - weightRef.current.position.y) * 0.1;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setCurrentChallenge(challenge);
        setUserAnswer('');
    };

    const checkAnswer = () => {
        if (!currentChallenge) return;
        const answer = parseFloat(userAnswer);
        if (Math.abs(answer - currentChallenge.answer) < 0.1) {
            setScore(prev => prev + 100);
            setShowConfetti(true);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                startChallenge();
            }, 2000);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showConfetti} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                ⚖️ LA MOLE - QUANTITÉ DE MATIÈRE
            </Text>

            {/* Balance */}
            <group ref={balanceRef} position={[0, 0, 0]}>
                {/* Pied de la balance */}
                <mesh position={[0, -2, 0]}>
                    <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
                    <meshStandardMaterial color="#374151" metalness={0.8} />
                </mesh>
                <mesh position={[0, -1.5, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
                    <meshStandardMaterial color="#4B5563" metalness={0.7} />
                </mesh>

                {/* Plateau de la balance */}
                <group ref={weightRef} position={[0, -0.5, 0]}>
                    <mesh>
                        <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
                        <meshStandardMaterial color="#6B7280" metalness={0.6} />
                    </mesh>

                    {/* Substance sur le plateau */}
                    <mesh position={[0, 0.3, 0]}>
                        <sphereGeometry args={[0.3 + (mass / 100) * 0.4, 32, 32]} />
                        <meshStandardMaterial color={sub.color} />
                    </mesh>

                    {/* Particules représentatives */}
                    {Array(Math.min(Math.floor(n * 3), 15)).fill(0).map((_, i) => {
                        const angle = (i / 15) * Math.PI * 2;
                        const r = 0.5 + Math.random() * 0.3;
                        return (
                            <mesh key={i} position={[Math.cos(angle) * r, 0.2 + Math.random() * 0.3, Math.sin(angle) * r]}>
                                <sphereGeometry args={[0.08, 16, 16]} />
                                <meshStandardMaterial color={sub.color} />
                            </mesh>
                        );
                    })}
                </group>

                {/* Écran de la balance */}
                <mesh position={[0, 0.8, 0.5]}>
                    <boxGeometry args={[1.5, 0.6, 0.1]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0, 0.85, 0.56]} fontSize={0.2} color="#22C55E">
                    {mass.toFixed(1)} g
                </Text>
                <Text position={[0, 0.65, 0.56]} fontSize={0.1} color="#9CA3AF">
                    {n.toFixed(3)} mol
                </Text>
            </group>

            {/* Formule visuelle */}
            <Float speed={2} floatIntensity={0.3}>
                <Text position={[-2.5, 2, 0]} fontSize={0.25} color="white">
                    n = m / M
                </Text>
                <Text position={[-2.5, 1.6, 0]} fontSize={0.15} color="#9CA3AF">
                    {n.toFixed(2)} = {mass} / {sub.M}
                </Text>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ La Mole (n = m/M)" className="w-[350px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-gray-400">Score</span>
                            <span className="text-xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-orange-900/40 border border-orange-500/50 p-3 rounded-xl space-y-2">
                                <div className="text-xs text-orange-400">🎯 CALCUL À FAIRE</div>
                                <div className="font-bold text-sm">{currentChallenge.question}</div>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        placeholder="Ta réponse"
                                        className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-white"
                                    />
                                    <span className="py-2 px-3 bg-gray-700 rounded-lg">{currentChallenge.unit}</span>
                                </div>
                                <button
                                    onClick={checkAnswer}
                                    className="w-full py-2 bg-orange-600 hover:bg-orange-500 rounded-lg font-bold"
                                >
                                    Vérifier
                                </button>
                            </div>
                        )}

                        {/* Mode Exploration */}
                        {!challengeMode && (
                            <>
                                {/* Substance */}
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Substance :</div>
                                    <div className="grid grid-cols-4 gap-1">
                                        {Object.keys(substances).map(key => (
                                            <button
                                                key={key}
                                                onClick={() => { setSubstance(key); setMass(substances[key].M); }}
                                                className={`py-1 rounded text-xs ${substance === key ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                            >
                                                {substances[key].formula}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Masse */}
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Masse (g) :</div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="200"
                                        value={mass}
                                        onChange={(e) => setMass(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded accent-blue-500"
                                    />
                                    <div className="text-center text-lg font-bold">{mass} g</div>
                                </div>

                                {/* Résultats */}
                                <div className="bg-gray-900/50 p-3 rounded-lg space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Masse molaire (M)</span>
                                        <span className="font-bold">{sub.M} g/mol</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Quantité (n)</span>
                                        <span className="font-bold text-blue-400">{n.toFixed(3)} mol</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Nombre d'entités</span>
                                        <span className="font-bold text-green-400">{N.toExponential(2)}</span>
                                    </div>
                                </div>

                                {/* Formule */}
                                <div className="bg-blue-900/30 border border-blue-500/30 p-2 rounded-lg text-center">
                                    <span className="text-blue-400 font-mono">n = m / M = {mass} / {sub.M} = </span>
                                    <span className="text-white font-bold">{n.toFixed(3)} mol</span>
                                </div>
                            </>
                        )}

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={startChallenge}
                                className="py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl font-bold"
                            >
                                🎯 Mode Défi
                            </button>
                            <button
                                onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }}
                                className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                            >
                                📚 Explorer
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Success Overlay */}
            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">🎉</div>
                            <div className="text-2xl font-bold text-green-400">Excellent !</div>
                            <div className="text-yellow-400 text-lg">+100 pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C3. STRUCTURE DE LEWIS - AMÉLIORÉE AVEC DÉFI
// =========================================================
export function LewisStructureAdvanced() {
    const [molecule, setMolecule] = useState('H2O');
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const molecules = {
        H2: { name: 'Dihydrogène', atoms: [{ el: 'H', pos: [-0.5, 0, 0], color: '#FFFFFF' }, { el: 'H', pos: [0.5, 0, 0], color: '#FFFFFF' }], bonds: 1, nonBonding: 0 },
        H2O: { name: 'Eau', atoms: [{ el: 'O', pos: [0, 0, 0], color: '#EF4444' }, { el: 'H', pos: [-0.8, -0.6, 0], color: '#FFFFFF' }, { el: 'H', pos: [0.8, -0.6, 0], color: '#FFFFFF' }], bonds: 2, nonBonding: 2, angle: '104.5°' },
        CO2: { name: 'Dioxyde de carbone', atoms: [{ el: 'C', pos: [0, 0, 0], color: '#374151' }, { el: 'O', pos: [-1.2, 0, 0], color: '#EF4444' }, { el: 'O', pos: [1.2, 0, 0], color: '#EF4444' }], bonds: 4, nonBonding: 4, angle: '180°', doubleBonds: true },
        NH3: { name: 'Ammoniac', atoms: [{ el: 'N', pos: [0, 0.3, 0], color: '#3B82F6' }, { el: 'H', pos: [-0.7, -0.4, 0.4], color: '#FFFFFF' }, { el: 'H', pos: [0.7, -0.4, 0.4], color: '#FFFFFF' }, { el: 'H', pos: [0, -0.4, -0.8], color: '#FFFFFF' }], bonds: 3, nonBonding: 1, angle: '107°' },
        CH4: { name: 'Méthane', atoms: [{ el: 'C', pos: [0, 0, 0], color: '#374151' }, { el: 'H', pos: [0.6, 0.6, 0.6], color: '#FFFFFF' }, { el: 'H', pos: [-0.6, -0.6, 0.6], color: '#FFFFFF' }, { el: 'H', pos: [0.6, -0.6, -0.6], color: '#FFFFFF' }, { el: 'H', pos: [-0.6, 0.6, -0.6], color: '#FFFFFF' }], bonds: 4, nonBonding: 0, angle: '109.5°' },
        O2: { name: 'Dioxygène', atoms: [{ el: 'O', pos: [-0.6, 0, 0], color: '#EF4444' }, { el: 'O', pos: [0.6, 0, 0], color: '#EF4444' }], bonds: 2, nonBonding: 4, doubleBonds: true },
        N2: { name: 'Diazote', atoms: [{ el: 'N', pos: [-0.5, 0, 0], color: '#3B82F6' }, { el: 'N', pos: [0.5, 0, 0], color: '#3B82F6' }], bonds: 3, nonBonding: 2, tripleBonds: true },
        HCl: { name: 'Chlorure d\'hydrogène', atoms: [{ el: 'H', pos: [-0.6, 0, 0], color: '#FFFFFF' }, { el: 'Cl', pos: [0.6, 0, 0], color: '#22C55E' }], bonds: 1, nonBonding: 3 },
    };

    const challenges = [
        { question: "Combien de doublets liants dans H₂O ?", answer: 2, molecule: 'H2O' },
        { question: "Combien de doublets NON liants dans NH₃ ?", answer: 1, molecule: 'NH3' },
        { question: "Quel angle de liaison dans CH₄ ?", answer: '109.5°', molecule: 'CH4', isText: true },
        { question: "Combien de liaisons dans N₂ ?", answer: 3, molecule: 'N2' },
        { question: "Combien de doublets non liants sur l'oxygène de H₂O ?", answer: 2, molecule: 'H2O' },
    ];

    const mol = molecules[molecule];
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setCurrentChallenge(challenge);
        setMolecule(challenge.molecule);
    };

    const checkAnswer = (answer) => {
        if (currentChallenge) {
            const isCorrect = currentChallenge.isText
                ? answer === currentChallenge.answer
                : Number(answer) === currentChallenge.answer;
            if (isCorrect) {
                setScore(prev => prev + 75);
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                    startChallenge();
                }, 2000);
            }
        }
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                🔬 STRUCTURE DE LEWIS
            </Text>
            <Text position={[0, 3, 0]} fontSize={0.25} color="white" anchorX="center">
                {mol.name}
            </Text>

            <group ref={groupRef} scale={[1.8, 1.8, 1.8]}>
                {/* Atomes */}
                {mol.atoms.map((atom, i) => (
                    <group key={i} position={atom.pos}>
                        <mesh>
                            <sphereGeometry args={[atom.el === 'H' ? 0.25 : 0.4, 32, 32]} />
                            <meshStandardMaterial color={atom.color} />
                        </mesh>
                        <Text position={[0, 0, 0.5]} fontSize={0.2} color="white" anchorX="center">
                            {atom.el}
                        </Text>
                    </group>
                ))}

                {/* Liaisons (simplifiées) */}
                {mol.atoms.length > 1 && mol.atoms.slice(1).map((atom, i) => {
                    const start = new THREE.Vector3(...mol.atoms[0].pos);
                    const end = new THREE.Vector3(...atom.pos);
                    const mid = start.clone().add(end).multiplyScalar(0.5);
                    const dir = end.clone().sub(start);
                    const len = dir.length() * 0.6;

                    return (
                        <mesh key={`bond${i}`} position={mid.toArray()} quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())}>
                            <cylinderGeometry args={[0.05, 0.05, len, 8]} />
                            <meshStandardMaterial color="#888" />
                        </mesh>
                    );
                })}

                {/* Doublets non liants (sur l'atome central) */}
                {mol.nonBonding > 0 && mol.atoms[0] && (
                    <>
                        {Array(Math.min(mol.nonBonding, 2)).fill(0).map((_, i) => {
                            const angle = (i / 2) * Math.PI + Math.PI / 2;
                            return (
                                <group key={`nl${i}`} position={[mol.atoms[0].pos[0] + Math.cos(angle) * 0.6, mol.atoms[0].pos[1] + 0.5, mol.atoms[0].pos[2] + Math.sin(angle) * 0.3]}>
                                    <mesh position={[-0.08, 0, 0]}>
                                        <sphereGeometry args={[0.06, 16, 16]} />
                                        <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
                                    </mesh>
                                    <mesh position={[0.08, 0, 0]}>
                                        <sphereGeometry args={[0.06, 16, 16]} />
                                        <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
                                    </mesh>
                                </group>
                            );
                        })}
                    </>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Formule de Lewis" className="w-[340px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-gray-400">Score</span>
                            <span className="text-xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-green-900/40 border border-green-500/50 p-3 rounded-xl space-y-2">
                                <div className="text-xs text-green-400">🎯 QUESTION</div>
                                <div className="font-bold">{currentChallenge.question}</div>
                                <div className="grid grid-cols-4 gap-2">
                                    {currentChallenge.isText
                                        ? ['104.5°', '109.5°', '120°', '180°'].map(a => (
                                            <button key={a} onClick={() => checkAnswer(a)} className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">{a}</button>
                                        ))
                                        : [0, 1, 2, 3, 4].map(n => (
                                            <button key={n} onClick={() => checkAnswer(n)} className="py-2 bg-gray-700 hover:bg-gray-600 rounded font-bold">{n}</button>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {/* Sélection molécule */}
                        {!challengeMode && (
                            <div>
                                <div className="text-xs text-gray-400 mb-1">Molécule :</div>
                                <div className="grid grid-cols-4 gap-1">
                                    {Object.keys(molecules).map(key => (
                                        <button
                                            key={key}
                                            onClick={() => setMolecule(key)}
                                            className={`py-2 rounded text-xs ${molecule === key ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                        >
                                            {key}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Infos */}
                        <div className="bg-gray-900/50 p-3 rounded-lg space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Doublets liants</span>
                                <span className="font-bold">{mol.bonds}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Doublets non liants</span>
                                <span className="font-bold text-yellow-400">{mol.nonBonding}</span>
                            </div>
                            {mol.angle && (
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Angle</span>
                                    <span className="font-bold text-blue-400">{mol.angle}</span>
                                </div>
                            )}
                        </div>

                        {/* Légende */}
                        <div className="text-xs space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-500" />
                                <span className="text-gray-400">Liaison covalente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="text-gray-400">Doublet non liant</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={startChallenge}
                                className="py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-bold"
                            >
                                🎯 Mode Défi
                            </button>
                            <button
                                onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }}
                                className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                            >
                                📚 Explorer
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">🎉</div>
                            <div className="text-2xl font-bold text-green-400">Bien joué !</div>
                            <div className="text-yellow-400 text-lg">+75 pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C5. ÉQUATION-BILAN - AMÉLIORÉE
// =========================================================
export function EquationBalancerAdvanced() {
    const [coefficients, setCoefficients] = useState([1, 1, 1, 1]);
    const [currentEq, setCurrentEq] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameStarted, setGameStarted] = useState(false);

    const equations = [
        { reactants: [{ f: 'H₂', a: { H: 2 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'H₂O', a: { H: 2, O: 1 } }], solution: [2, 1, 2] },
        { reactants: [{ f: 'N₂', a: { N: 2 } }, { f: 'H₂', a: { H: 2 } }], products: [{ f: 'NH₃', a: { N: 1, H: 3 } }], solution: [1, 3, 2] },
        { reactants: [{ f: 'CH₄', a: { C: 1, H: 4 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'CO₂', a: { C: 1, O: 2 } }, { f: 'H₂O', a: { H: 2, O: 1 } }], solution: [1, 2, 1, 2] },
        { reactants: [{ f: 'Fe', a: { Fe: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'Fe₂O₃', a: { Fe: 2, O: 3 } }], solution: [4, 3, 2] },
        { reactants: [{ f: 'C', a: { C: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'CO₂', a: { C: 1, O: 2 } }], solution: [1, 1, 1] },
        { reactants: [{ f: 'Na', a: { Na: 1 } }, { f: 'Cl₂', a: { Cl: 2 } }], products: [{ f: 'NaCl', a: { Na: 1, Cl: 1 } }], solution: [2, 1, 2] },
        { reactants: [{ f: 'Al', a: { Al: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'Al₂O₃', a: { Al: 2, O: 3 } }], solution: [4, 3, 2] },
    ];

    const eq = equations[currentEq];

    useEffect(() => {
        if (gameStarted && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [gameStarted, timeLeft]);

    const calcAtoms = (side, coeffs) => {
        const totals = {};
        side.forEach((mol, i) => {
            const coef = coeffs[i] || 1;
            Object.entries(mol.a).forEach(([atom, count]) => {
                totals[atom] = (totals[atom] || 0) + count * coef;
            });
        });
        return totals;
    };

    const leftAtoms = calcAtoms(eq.reactants, coefficients.slice(0, eq.reactants.length));
    const rightAtoms = calcAtoms(eq.products, coefficients.slice(eq.reactants.length));
    const isBalanced = JSON.stringify(leftAtoms) === JSON.stringify(rightAtoms);

    const updateCoef = (index, delta) => {
        const newCoeffs = [...coefficients];
        newCoeffs[index] = Math.max(1, Math.min(8, (newCoeffs[index] || 1) + delta));
        setCoefficients(newCoeffs);
    };

    const validate = () => {
        if (isBalanced) {
            const bonus = streak * 10;
            setScore(prev => prev + 100 + bonus);
            setStreak(prev => prev + 1);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                nextEquation();
            }, 1500);
        } else {
            setStreak(0);
        }
    };

    const nextEquation = () => {
        setCurrentEq((currentEq + 1) % equations.length);
        setCoefficients([1, 1, 1, 1]);
    };

    const startGame = () => {
        setGameStarted(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setCurrentEq(0);
        setCoefficients([1, 1, 1, 1]);
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                ⚖️ ÉQUILIBRAGE DES ÉQUATIONS
            </Text>

            {/* Affichage équation */}
            <group position={[0, 1, 0]}>
                {/* Réactifs */}
                {eq.reactants.map((mol, i) => (
                    <group key={`r${i}`} position={[-2 + i * 1.8, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[1.4, 0.8, 0.3]} />
                            <meshStandardMaterial color="#3B82F6" />
                        </mesh>
                        <Text position={[0, 0, 0.2]} fontSize={0.25} color="white">
                            {coefficients[i] > 1 ? coefficients[i] : ''}{mol.f}
                        </Text>
                        {i < eq.reactants.length - 1 && (
                            <Text position={[1, 0, 0]} fontSize={0.3} color="white">+</Text>
                        )}
                    </group>
                ))}

                {/* Flèche */}
                <Text position={[0.5, 0, 0]} fontSize={0.4} color="white">→</Text>

                {/* Produits */}
                {eq.products.map((mol, i) => (
                    <group key={`p${i}`} position={[2 + i * 1.8, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[1.4, 0.8, 0.3]} />
                            <meshStandardMaterial color="#22C55E" />
                        </mesh>
                        <Text position={[0, 0, 0.2]} fontSize={0.25} color="white">
                            {coefficients[eq.reactants.length + i] > 1 ? coefficients[eq.reactants.length + i] : ''}{mol.f}
                        </Text>
                        {i < eq.products.length - 1 && (
                            <Text position={[1, 0, 0]} fontSize={0.3} color="white">+</Text>
                        )}
                    </group>
                ))}
            </group>

            {/* Indicateur équilibré */}
            {isBalanced && (
                <Float speed={3} floatIntensity={0.5}>
                    <Text position={[0, -0.5, 0]} fontSize={0.3} color="#22C55E">
                        ✓ ÉQUILIBRÉE !
                    </Text>
                </Float>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Lavoisier (Conservation)" className="w-[380px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Stats */}
                        <div className="flex justify-between items-center">
                            <div className="bg-yellow-900/30 px-3 py-2 rounded-lg border border-yellow-500/30">
                                <span className="text-yellow-400 font-bold">⭐ {score}</span>
                            </div>
                            <div className="bg-orange-900/30 px-3 py-2 rounded-lg border border-orange-500/30">
                                <span className="text-orange-400 font-bold">🔥 {streak}</span>
                            </div>
                            {gameStarted && (
                                <div className={`px-3 py-2 rounded-lg ${timeLeft <= 10 ? 'bg-red-900/50 animate-pulse' : 'bg-gray-800'}`}>
                                    <span className={timeLeft <= 10 ? 'text-red-400' : 'text-white'}>⏱️ {timeLeft}s</span>
                                </div>
                            )}
                        </div>

                        {/* Compteur d'atomes */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-900/40 p-2 rounded-lg border border-blue-600/40">
                                <div className="text-xs text-blue-400 mb-1">Réactifs</div>
                                <div className="flex gap-2 text-sm">
                                    {Object.entries(leftAtoms).map(([a, c]) => (
                                        <span key={a} className={rightAtoms[a] === c ? 'text-green-400' : 'text-red-400'}>
                                            {a}:{c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-900/40 p-2 rounded-lg border border-green-600/40">
                                <div className="text-xs text-green-400 mb-1">Produits</div>
                                <div className="flex gap-2 text-sm">
                                    {Object.entries(rightAtoms).map(([a, c]) => (
                                        <span key={a} className={leftAtoms[a] === c ? 'text-green-400' : 'text-red-400'}>
                                            {a}:{c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contrôles coefficients */}
                        <div className="grid grid-cols-4 gap-2">
                            {[...eq.reactants, ...eq.products].map((mol, i) => (
                                <div key={i} className="text-center bg-gray-800/50 p-2 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-1">{mol.f}</div>
                                    <div className="flex items-center justify-center gap-1">
                                        <button onClick={() => updateCoef(i, -1)} className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded text-sm">-</button>
                                        <span className="w-6 font-bold text-lg">{coefficients[i] || 1}</span>
                                        <button onClick={() => updateCoef(i, 1)} className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded text-sm">+</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={validate}
                                className={`py-3 rounded-xl font-bold transition-all ${isBalanced
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                            >
                                {isBalanced ? '✓ Valider' : 'Vérifier'}
                            </button>
                            <button
                                onClick={nextEquation}
                                className="py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold"
                            >
                                Suivant →
                            </button>
                        </div>

                        {!gameStarted && (
                            <button
                                onClick={startGame}
                                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold"
                            >
                                🎮 Mode Défi (60s)
                            </button>
                        )}

                        {/* Aide */}
                        <div className="text-xs text-gray-500 text-center">
                            💡 Même nombre d'atomes à gauche et à droite !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">⚖️</div>
                            <div className="text-2xl font-bold text-green-400">Équilibrée !</div>
                            <div className="text-yellow-400">+{100 + streak * 10} pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

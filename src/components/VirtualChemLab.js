'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Line, OrbitControls, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================================
// LABORATOIRE VIRTUEL DE CHIMIE - 2NDE S
// =========================================================

// Configuration des scénarios par chapitre
const SCENARIOS = {
    'C1': {
        title: 'Séparation des Mélanges',
        description: 'Utilise les techniques de laboratoire pour séparer un mélange eau + sable + huile',
        equipment: ['becher', 'entonnoir', 'papierFiltre', 'ampouleDecantation', 'distillateur'],
        steps: [
            { action: 'observer', text: 'Observe le mélange hétérogène dans le bécher' },
            { action: 'filtrer', text: 'Utilise l\'entonnoir + papier filtre pour retirer le sable' },
            { action: 'decanter', text: 'Verse dans l\'ampoule à décantation pour séparer eau/huile' },
            { action: 'collecter', text: 'Récupère l\'eau purifiée' }
        ],
        objective: 'Obtenir de l\'eau pure à partir du mélange'
    },
    'C2': {
        title: 'Construction Atomique',
        description: 'Construis différents atomes en ajoutant protons, neutrons et électrons',
        equipment: ['noyau', 'protons', 'neutrons', 'electrons', 'tableauPeriodique'],
        steps: [
            { action: 'selectElement', text: 'Choisis un élément dans le tableau périodique' },
            { action: 'addProtons', text: 'Ajoute le bon nombre de protons (Z)' },
            { action: 'addNeutrons', text: 'Ajoute les neutrons (A-Z)' },
            { action: 'addElectrons', text: 'Place les électrons sur les couches K, L, M' }
        ],
        objective: 'Construire un atome stable et identifier son élément'
    },
    'C3': {
        title: 'Modèles Moléculaires',
        description: 'Assemble des molécules en respectant les règles de Lewis',
        equipment: ['atomesC', 'atomesH', 'atomesO', 'atomesN', 'liaisons'],
        steps: [
            { action: 'selectMolecule', text: 'Choisis la molécule à construire' },
            { action: 'placeAtoms', text: 'Place l\'atome central' },
            { action: 'createBonds', text: 'Crée les liaisons covalentes' },
            { action: 'verifyOctet', text: 'Vérifie la règle de l\'octet' }
        ],
        objective: 'Construire H₂O, CO₂, NH₃ avec les bonnes liaisons'
    },
    'C4': {
        title: 'Pesée et Calculs Molaires',
        description: 'Pèse des échantillons et calcule les quantités de matière',
        equipment: ['balance', 'spatule', 'coupelle', 'echantillons', 'calculatrice'],
        steps: [
            { action: 'tare', text: 'Tare la balance avec la coupelle' },
            { action: 'peser', text: 'Pèse l\'échantillon demandé' },
            { action: 'calculer', text: 'Calcule n = m/M' },
            { action: 'valider', text: 'Vérifie ta réponse' }
        ],
        objective: 'Déterminer la quantité de matière d\'un échantillon'
    },
    'C5': {
        title: 'Réaction Chimique Équilibrée',
        description: 'Réalise une combustion et vérifie la conservation de la masse',
        equipment: ['becBunsen', 'erlenmeyer', 'balance', 'magnesium', 'allumettes'],
        steps: [
            { action: 'peserAvant', text: 'Pèse le magnésium avant réaction' },
            { action: 'allumer', text: 'Allume le bec Bunsen' },
            { action: 'bruler', text: 'Fais brûler le magnésium' },
            { action: 'peserApres', text: 'Pèse l\'oxyde de magnésium' },
            { action: 'equilibrer', text: 'Écris l\'équation-bilan équilibrée' }
        ],
        objective: 'Vérifier 2Mg + O₂ → 2MgO'
    },
    'C6': {
        title: 'Préparation de Solution par Dilution',
        description: 'Prépare une solution de concentration précise par dilution',
        equipment: ['solutionMere', 'pipette', 'propipette', 'fioleJaugee', 'pissette'],
        steps: [
            { action: 'calculer', text: 'Calcule Vi avec Ci×Vi = Cf×Vf' },
            { action: 'prelever', text: 'Prélève Vi avec la pipette jaugée' },
            { action: 'verser', text: 'Verse dans la fiole jaugée' },
            { action: 'completer', text: 'Complète avec l\'eau distillée au trait de jauge' },
            { action: 'homogeneiser', text: 'Agite pour homogénéiser' }
        ],
        objective: 'Obtenir 100mL de solution à 0.1 mol/L'
    },
    'C7': {
        title: 'Étude d\'un Acide',
        description: 'Étudie les propriétés d\'une solution acide',
        equipment: ['tubeEssai', 'acideHCl', 'papierPH', 'zinc', 'indicateurs'],
        steps: [
            { action: 'mesurerpH', text: 'Mesure le pH avec le papier pH' },
            { action: 'tester', text: 'Teste avec différents indicateurs colorés' },
            { action: 'reagir', text: 'Ajoute un morceau de zinc' },
            { action: 'observer', text: 'Observe le dégagement de H₂' }
        ],
        objective: 'Identifier les caractéristiques d\'une solution acide'
    },
    'C8': {
        title: 'Étude d\'une Base',
        description: 'Étudie les propriétés d\'une solution basique',
        equipment: ['tubeEssai', 'soluNaOH', 'papierPH', 'indicateurs', 'graisse'],
        steps: [
            { action: 'mesurerpH', text: 'Mesure le pH avec le papier pH' },
            { action: 'tester', text: 'Teste avec le BBT et la phénolphtaléine' },
            { action: 'toucher', text: 'Note la texture glissante (savonneuse)' },
            { action: 'neutraliser', text: 'Neutralise avec un acide' }
        ],
        objective: 'Identifier les caractéristiques d\'une solution basique'
    },
    'C9': {
        title: 'Titrage pH-métrique',
        description: 'Détermine la concentration d\'un acide par titrage',
        equipment: ['burette', 'erlenmeyerTitrage', 'agitateur', 'pHmetre', 'indicateur'],
        steps: [
            { action: 'preparer', text: 'Prépare le montage de titrage' },
            { action: 'etalonner', text: 'Étalonne le pH-mètre' },
            { action: 'titrer', text: 'Ajoute la base goutte à goutte' },
            { action: 'reperer', text: 'Repère le volume équivalent' },
            { action: 'calculer', text: 'Calcule la concentration de l\'acide' }
        ],
        objective: 'Trouver la concentration exacte de l\'acide'
    },
    'C10': {
        title: 'Tests de Caractérisation',
        description: 'Identifie les ions présents dans des solutions inconnues',
        equipment: ['tubesEssai', 'reactifs', 'pipettes', 'solutionsInconnues'],
        steps: [
            { action: 'prelever', text: 'Prélève un peu de solution inconnue' },
            { action: 'ajouter', text: 'Ajoute le réactif approprié' },
            { action: 'observer', text: 'Observe la couleur du précipité' },
            { action: 'identifier', text: 'Identifie l\'ion présent' }
        ],
        objective: 'Identifier les 4 solutions mystères'
    }
};

// Composant Equipment 3D
function LabEquipment({ type, position, onClick, isSelected, isActive }) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current && isSelected) {
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.1;
        }
    });

    const equipmentConfigs = {
        becher: { color: '#E0F2FE', shape: 'cylinder', args: [0.4, 0.4, 0.8, 32, 1, true], label: 'Bécher' },
        erlenmeyer: { color: '#E0F2FE', shape: 'cone', args: [0.5, 0.2, 0.8, 32], label: 'Erlenmeyer' },
        tubeEssai: { color: '#E0F2FE', shape: 'cylinder', args: [0.1, 0.1, 0.6, 16], label: 'Tube à essai' },
        pipette: { color: '#D1D5DB', shape: 'cylinder', args: [0.03, 0.03, 0.8, 8], label: 'Pipette' },
        burette: { color: '#E0F2FE', shape: 'cylinder', args: [0.08, 0.08, 1.2, 16], label: 'Burette' },
        fioleJaugee: { color: '#E0F2FE', shape: 'sphere', args: [0.3, 32, 32], label: 'Fiole jaugée' },
        balance: { color: '#374151', shape: 'box', args: [0.8, 0.2, 0.5], label: 'Balance' },
        becBunsen: { color: '#1F2937', shape: 'cylinder', args: [0.15, 0.2, 0.4, 16], label: 'Bec Bunsen' },
        entonnoir: { color: '#E0F2FE', shape: 'cone', args: [0.3, 0.05, 0.4, 32], label: 'Entonnoir' },
    };

    const config = equipmentConfigs[type] || equipmentConfigs.becher;

    return (
        <group ref={groupRef} position={position} onClick={onClick}>
            <mesh>
                {config.shape === 'cylinder' && <cylinderGeometry args={config.args} />}
                {config.shape === 'box' && <boxGeometry args={config.args} />}
                {config.shape === 'cone' && <coneGeometry args={config.args} />}
                {config.shape === 'sphere' && <sphereGeometry args={config.args} />}
                <meshPhysicalMaterial
                    color={config.color}
                    transmission={0.8}
                    transparent
                    opacity={0.6}
                    roughness={0.1}
                    emissive={isSelected ? '#22C55E' : (isActive ? '#3B82F6' : '#000000')}
                    emissiveIntensity={isSelected ? 0.3 : (isActive ? 0.2 : 0)}
                />
            </mesh>
            <Text position={[0, -0.6, 0]} fontSize={0.15} color={isSelected ? '#22C55E' : 'white'}>
                {config.label}
            </Text>
        </group>
    );
}

// Flamme animée
function Flame({ active }) {
    const flameRef = useRef();

    useFrame((state) => {
        if (flameRef.current && active) {
            flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.2;
            flameRef.current.scale.x = 1 + Math.cos(state.clock.elapsedTime * 8) * 0.1;
        }
    });

    if (!active) return null;

    return (
        <group ref={flameRef}>
            <mesh position={[0, 0.4, 0]}>
                <coneGeometry args={[0.08, 0.3, 8]} />
                <meshBasicMaterial color="#3B82F6" transparent opacity={0.8} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
                <coneGeometry args={[0.04, 0.2, 8]} />
                <meshBasicMaterial color="#60A5FA" />
            </mesh>
            <pointLight position={[0, 0.5, 0]} intensity={1} color="#3B82F6" distance={2} />
        </group>
    );
}

// Liquide dans récipient
function Liquid({ color, height, radius, position }) {
    return (
        <mesh position={[position[0], position[1] - 0.4 + height / 2, position[2]]}>
            <cylinderGeometry args={[radius * 0.95, radius * 0.95, height, 32]} />
            <meshStandardMaterial color={color} transparent opacity={0.7} />
        </mesh>
    );
}

// Particules (pour effervescence, dissolution, etc.)
function Particles({ active, type, position }) {
    const particlesRef = useRef([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (active) {
            const newParticles = Array(30).fill(0).map((_, i) => ({
                id: i,
                x: (Math.random() - 0.5) * 0.3,
                y: 0,
                z: (Math.random() - 0.5) * 0.3,
                speed: 0.5 + Math.random() * 0.5,
                color: type === 'bubbles' ? '#FFFFFF' : (type === 'fire' ? '#F59E0B' : '#3B82F6')
            }));
            setParticles(newParticles);
        } else {
            setParticles([]);
        }
    }, [active, type]);

    useFrame((state, delta) => {
        particlesRef.current.forEach((mesh, i) => {
            if (mesh && particles[i]) {
                mesh.position.y += particles[i].speed * delta;
                if (mesh.position.y > 1) {
                    mesh.position.y = 0;
                }
            }
        });
    });

    return (
        <group position={position}>
            {particles.map((p, i) => (
                <mesh key={p.id} ref={el => particlesRef.current[i] = el} position={[p.x, p.y, p.z]}>
                    <sphereGeometry args={[0.02]} />
                    <meshBasicMaterial color={p.color} transparent opacity={0.8} />
                </mesh>
            ))}
        </group>
    );
}

// Précipité
function Precipitate({ color, position, amount }) {
    if (amount <= 0) return null;

    return (
        <mesh position={[position[0], position[1] - 0.35, position[2]]}>
            <sphereGeometry args={[0.1 + amount * 0.1, 16, 16]} />
            <meshStandardMaterial color={color} roughness={0.8} />
        </mesh>
    );
}

// Composant principal du Laboratoire
export function VirtualChemLab({ scenario = 'C1' }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [labState, setLabState] = useState({
        flameOn: false,
        liquidColors: {},
        precipitates: {},
        particles: {},
        measurements: {},
        completed: false
    });
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const scenarioData = SCENARIOS[scenario] || SCENARIOS['C1'];

    // Positions du matériel sur la paillasse
    const equipmentPositions = {
        left: [-2, 0, 0],
        center: [0, 0, 0],
        right: [2, 0, 0],
        backLeft: [-1.5, 0, -1.5],
        backRight: [1.5, 0, -1.5]
    };

    const handleEquipmentClick = (equipment) => {
        setSelectedEquipment(equipment);

        // Actions spécifiques selon l'équipement et l'étape
        const step = scenarioData.steps[currentStep];
        if (!step) return;

        // Simulation des actions
        if (step.action === 'allumer' && equipment === 'becBunsen') {
            setLabState(prev => ({ ...prev, flameOn: true }));
            setFeedback('🔥 Bec Bunsen allumé !');
            advanceStep();
        } else if (step.action === 'filtrer' && equipment === 'entonnoir') {
            setLabState(prev => ({
                ...prev,
                liquidColors: { ...prev.liquidColors, filtre: '#87CEEB' }
            }));
            setFeedback('💧 Filtration en cours...');
            setTimeout(() => advanceStep(), 1500);
        }
    };

    const advanceStep = () => {
        if (currentStep < scenarioData.steps.length - 1) {
            setCurrentStep(prev => prev + 1);
            setScore(prev => prev + 10);
        } else {
            setLabState(prev => ({ ...prev, completed: true }));
            setShowSuccess(true);
            setScore(prev => prev + 50);
        }
    };

    const performAction = (action) => {
        const step = scenarioData.steps[currentStep];
        if (step && step.action === action) {
            // Effectue l'action
            switch (action) {
                case 'observer':
                    setFeedback('👁️ Tu observes un mélange hétérogène avec 3 phases distinctes.');
                    break;
                case 'decanter':
                    setLabState(prev => ({
                        ...prev,
                        liquidColors: { huile: '#F59E0B', eau: '#3B82F6' }
                    }));
                    setFeedback('⚗️ L\'huile flotte au-dessus de l\'eau !');
                    break;
                case 'mesurerpH':
                    setLabState(prev => ({
                        ...prev,
                        measurements: { ...prev.measurements, pH: scenario === 'C7' ? 2 : 12 }
                    }));
                    setFeedback(scenario === 'C7' ? '🧪 pH = 2 (ACIDE)' : '🧪 pH = 12 (BASIQUE)');
                    break;
                case 'reagir':
                    setLabState(prev => ({ ...prev, particles: { reaction: true } }));
                    setFeedback('💨 Effervescence ! Dégagement de gaz H₂');
                    break;
                case 'ajouter':
                    setLabState(prev => ({
                        ...prev,
                        precipitates: { test: { color: '#3B82F6', amount: 0.5 } }
                    }));
                    setFeedback('🎨 Précipité bleu → Présence de Cu²⁺');
                    break;
                default:
                    setFeedback('✓ Action effectuée !');
            }
            setTimeout(() => advanceStep(), 1000);
        } else {
            setFeedback('❌ Ce n\'est pas la bonne action pour cette étape.');
        }
    };

    const resetLab = () => {
        setCurrentStep(0);
        setLabState({
            flameOn: false,
            liquidColors: {},
            precipitates: {},
            particles: {},
            measurements: {},
            completed: false
        });
        setScore(0);
        setFeedback('');
        setShowSuccess(false);
        setSelectedEquipment(null);
    };

    return (
        <group>
            {/* Éclairage laboratoire */}
            <ambientLight intensity={0.6} />
            <pointLight position={[0, 5, 0]} intensity={1} />
            <pointLight position={[-3, 3, 2]} intensity={0.5} color="#E0F2FE" />

            {/* Paillasse */}
            <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[8, 4]} />
                <meshStandardMaterial color="#1F2937" />
            </mesh>

            {/* Tableau périodique au mur */}
            <mesh position={[0, 2, -2]} rotation={[0, 0, 0]}>
                <planeGeometry args={[3, 1.5]} />
                <meshBasicMaterial color="#4B5563" />
            </mesh>
            <Text position={[0, 2, -1.99]} fontSize={0.2} color="white">
                TABLEAU PÉRIODIQUE
            </Text>

            {/* Équipement de base */}
            <LabEquipment
                type="becher"
                position={[-2, 0, 0]}
                onClick={() => handleEquipmentClick('becher')}
                isSelected={selectedEquipment === 'becher'}
            />
            <Liquid color="#8B4513" height={0.4} radius={0.4} position={[-2, 0, 0]} />

            <LabEquipment
                type="erlenmeyer"
                position={[0, 0, 0]}
                onClick={() => handleEquipmentClick('erlenmeyer')}
                isSelected={selectedEquipment === 'erlenmeyer'}
            />

            <LabEquipment
                type="tubeEssai"
                position={[1, 0, 0]}
                onClick={() => handleEquipmentClick('tubeEssai')}
                isSelected={selectedEquipment === 'tubeEssai'}
            />

            <LabEquipment
                type="burette"
                position={[2, 0.4, 0]}
                onClick={() => handleEquipmentClick('burette')}
                isSelected={selectedEquipment === 'burette'}
            />

            <LabEquipment
                type="becBunsen"
                position={[-1, 0, -1]}
                onClick={() => handleEquipmentClick('becBunsen')}
                isSelected={selectedEquipment === 'becBunsen'}
                isActive={labState.flameOn}
            />
            <Flame active={labState.flameOn} />

            <LabEquipment
                type="entonnoir"
                position={[1.5, 0.3, -1]}
                onClick={() => handleEquipmentClick('entonnoir')}
                isSelected={selectedEquipment === 'entonnoir'}
            />

            <LabEquipment
                type="balance"
                position={[-1.5, 0, -1.5]}
                onClick={() => handleEquipmentClick('balance')}
                isSelected={selectedEquipment === 'balance'}
            />

            {/* Particules d'effervescence */}
            {labState.particles.reaction && (
                <Particles active={true} type="bubbles" position={[1, 0, 0]} />
            )}

            {/* Précipités */}
            {Object.entries(labState.precipitates).map(([key, data]) => (
                <Precipitate key={key} color={data.color} position={[1, 0, 0]} amount={data.amount} />
            ))}

            {/* Panneau de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title={`🔬 ${scenarioData.title}`}
                    className="w-[380px]"
                    defaultPosition="bottom-right"
                >
                    <div className="space-y-4 text-white">
                        {/* Objectif */}
                        <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-500/50">
                            <div className="text-xs text-blue-300 mb-1">🎯 OBJECTIF</div>
                            <div className="text-sm">{scenarioData.objective}</div>
                        </div>

                        {/* Score */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Score</span>
                            <span className="text-2xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        {/* Étapes */}
                        <div className="bg-gray-900 rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-2">PROTOCOLE ({currentStep + 1}/{scenarioData.steps.length})</div>
                            <div className="space-y-2">
                                {scenarioData.steps.map((step, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-2 p-2 rounded text-sm ${i < currentStep ? 'bg-green-900/30 text-green-400' :
                                                i === currentStep ? 'bg-blue-900/50 text-white border border-blue-500' :
                                                    'bg-gray-800/50 text-gray-500'
                                            }`}
                                    >
                                        <span>{i < currentStep ? '✓' : i === currentStep ? '→' : '○'}</span>
                                        <span>{step.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        {feedback && (
                            <div className="bg-gray-800 p-3 rounded-lg text-center animate-pulse">
                                {feedback}
                            </div>
                        )}

                        {/* Boutons d'action */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => performAction(scenarioData.steps[currentStep]?.action)}
                                className="py-2 bg-green-600 hover:bg-green-500 rounded font-bold text-sm"
                            >
                                ▶ Exécuter l'étape
                            </button>
                            <button
                                onClick={resetLab}
                                className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                            >
                                🔄 Recommencer
                            </button>
                        </div>

                        {/* Aide */}
                        <div className="text-xs text-gray-500 text-center">
                            💡 Clique sur l'équipement pour interagir
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Success Overlay */}
            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-8 rounded-2xl border-2 border-green-400 text-center max-w-md">
                            <div className="text-6xl mb-4">🎉</div>
                            <h2 className="text-2xl font-bold text-green-400 mb-2">EXPÉRIENCE RÉUSSIE !</h2>
                            <p className="text-white mb-4">{scenarioData.objective}</p>
                            <div className="text-yellow-400 text-xl mb-4">Score final : {score} ⭐</div>
                            <button
                                onClick={resetLab}
                                className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl"
                            >
                                Recommencer →
                            </button>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// Export pour utilisation dans Simulation3D
export default VirtualChemLab;

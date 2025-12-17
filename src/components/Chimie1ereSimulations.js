import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Text, Sphere, Cylinder, Box, Line } from '@react-three/drei';
import * as THREE from 'three';
import { DraggableHtmlPanel } from './DraggableHtmlPanel';

// ==========================================
// SHARED UTILS (ATOMS COLORS)
// ==========================================
const ATOM_COLORS = {
    C: '#333333', // Black/Grey
    H: '#FFFFFF', // White
    O: '#FF0000', // Red
    N: '#0000FF', // Blue
    Cl: '#00FF00', // Green
};

const ATOM_RADII = {
    C: 0.4,
    H: 0.25,
    O: 0.38,
    N: 0.38,
    Cl: 0.45,
};

// ==========================================
// C1-C5: CHIMIE ORGANIQUE (MOLECULE VIEWER & QUIZ)
// ==========================================
const MOLECULES_DB = [
    {
        name: "Méthane",
        formula: "CH4",
        family: "Alcane",
        atoms: [
            { elem: 'C', x: 0, y: 0, z: 0 },
            { elem: 'H', x: 0.6, y: 0.6, z: 0.6 },
            { elem: 'H', x: -0.6, y: -0.6, z: 0.6 },
            { elem: 'H', x: -0.6, y: 0.6, z: -0.6 },
            { elem: 'H', x: 0.6, y: -0.6, z: -0.6 },
        ]
    },
    {
        name: "Éthanol",
        formula: "C2H6O",
        family: "Alcool",
        atoms: [
            { elem: 'C', x: -0.8, y: 0, z: 0 },
            { elem: 'H', x: -0.8, y: 0.8, z: 0 }, // H on C1
            { elem: 'H', x: -1.4, y: -0.4, z: 0.5 }, // H on C1
            { elem: 'H', x: -1.4, y: -0.4, z: -0.5 }, // H on C1
            { elem: 'C', x: 0.7, y: 0, z: 0 },
            { elem: 'H', x: 0.7, y: 0.8, z: 0 }, // H on C2
            { elem: 'H', x: 0.7, y: -0.8, z: 0 }, // H on C2
            { elem: 'O', x: 1.8, y: 0, z: 0 },
            { elem: 'H', x: 2.2, y: 0.6, z: 0 }, // H of OH
        ]
    },
    {
        name: "Éthène",
        formula: "C2H4",
        family: "Alcène",
        atoms: [
            { elem: 'C', x: -0.7, y: 0, z: 0 },
            { elem: 'C', x: 0.7, y: 0, z: 0 },
            { elem: 'H', x: -1.3, y: 0.9, z: 0 },
            { elem: 'H', x: -1.3, y: -0.9, z: 0 },
            { elem: 'H', x: 1.3, y: 0.9, z: 0 },
            { elem: 'H', x: 1.3, y: -0.9, z: 0 },
        ],
        extraBonds: [ // Double bond visualization manually
            { start: [-0.7, 0.1, 0], end: [0.7, 0.1, 0] },
            { start: [-0.7, -0.1, 0], end: [0.7, -0.1, 0] },
        ]
    },
    {
        name: "Benzène",
        formula: "C6H6",
        family: "Aromatique",
        atoms: [ // Hexagon approx radius 1.4
            { elem: 'C', x: 1.4, y: 0, z: 0 },
            { elem: 'C', x: 0.7, y: 1.2, z: 0 },
            { elem: 'C', x: -0.7, y: 1.2, z: 0 },
            { elem: 'C', x: -1.4, y: 0, z: 0 },
            { elem: 'C', x: -0.7, y: -1.2, z: 0 },
            { elem: 'C', x: 0.7, y: -1.2, z: 0 },
            // Hydrogens radial
            { elem: 'H', x: 2.4, y: 0, z: 0 },
            { elem: 'H', x: 1.2, y: 2.1, z: 0 },
            { elem: 'H', x: -1.2, y: 2.1, z: 0 },
            { elem: 'H', x: -2.4, y: 0, z: 0 },
            { elem: 'H', x: -1.2, y: -2.1, z: 0 },
            { elem: 'H', x: 1.2, y: -2.1, z: 0 },
        ],
        extraBonds: [ // Delocalized circle approx
            { circle: true, radius: 0.8 }
        ]
    },
    {
        name: "Acide Éthanoïque",
        formula: "C2H4O2",
        family: "Acide Carboxylique",
        atoms: [
            { elem: 'C', x: -1, y: 0, z: 0 },
            { elem: 'H', x: -1, y: 1, z: 0 },
            { elem: 'H', x: -1.8, y: -0.5, z: 0.5 },
            { elem: 'H', x: -1.8, y: -0.5, z: -0.5 },
            { elem: 'C', x: 0.5, y: 0, z: 0 },
            { elem: 'O', x: 0.5, y: 1.2, z: 0 }, // Double bond O
            { elem: 'O', x: 1.5, y: -0.8, z: 0 }, // OH
            { elem: 'H', x: 2.2, y: -0.4, z: 0 }, // H of OH
        ],
        extraBonds: [
            { start: [0.5, 0.1, 0], end: [0.5, 1.2, 0.1] }, // approx double
            { start: [0.5, -0.1, 0], end: [0.5, 1.2, -0.1] },
        ]
    }
];

export function ChimieOrganiqueSim() {
    const [currentMolIndex, setCurrentMolIndex] = useState(0);
    const [mode, setMode] = useState('explore'); // 'explore', 'quiz'
    const [quizQuestion, setQuizQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [feedback, setFeedback] = useState("");

    const mol = MOLECULES_DB[currentMolIndex];

    // Bonds generation: naive distance-based
    const bonds = useMemo(() => {
        const b = [];
        const atoms = mol.atoms;
        for (let i = 0; i < atoms.length; i++) {
            for (let j = i + 1; j < atoms.length; j++) {
                const dist = Math.hypot(atoms[i].x - atoms[j].x, atoms[i].y - atoms[j].y, atoms[i].z - atoms[j].z);
                // Max bond length approx 1.6
                if (dist < 1.6) {
                    b.push({ start: [atoms[i].x, atoms[i].y, atoms[i].z], end: [atoms[j].x, atoms[j].y, atoms[j].z] });
                }
            }
        }
        return b;
    }, [mol]);

    // Quiz logic
    const startQuiz = () => {
        setMode('quiz');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        // Pick random molecule
        const idx = Math.floor(Math.random() * MOLECULES_DB.length);
        setCurrentMolIndex(idx);

        // Pick question type
        // 0: What family?
        // 1: What is the name?
        const qType = Math.random() > 0.5 ? 0 : 1;
        setQuizQuestion({
            type: qType,
            correct: qType === 0 ? MOLECULES_DB[idx].family : MOLECULES_DB[idx].name,
            options: generateOptions(qType, idx)
        });
        setShowAnswer(false);
        setFeedback("");
    };

    const generateOptions = (type, currentIdx) => {
        const correct = type === 0 ? MOLECULES_DB[currentIdx].family : MOLECULES_DB[currentIdx].name;
        const allOptions = MOLECULES_DB.map(m => type === 0 ? m.family : m.name).filter(o => o !== correct);
        const uniqueOptions = [...new Set(allOptions)]; // Dedup
        // Shuffle and pick 3
        const shuffled = uniqueOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
        shuffled.push(correct);
        return shuffled.sort(() => 0.5 - Math.random());
    };

    const checkAnswer = (ans) => {
        if (ans === quizQuestion.correct) {
            setScore(score + 10);
            setFeedback("Correct ! 🎉");
        } else {
            setFeedback(`Incorrect. La réponse était: ${quizQuestion.correct}`);
        }
        setShowAnswer(true);
        setTimeout(() => {
            if (mode === 'quiz') nextQuestion();
        }, 2000);
    };

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls makeDefault autoRotate={mode === 'explore'} autoRotateSpeed={1} />

            {/* Molecule Visualization */}
            <group scale={1.5}>
                {mol.atoms.map((atom, i) => (
                    <mesh key={i} position={[atom.x, atom.y, atom.z]}>
                        <sphereGeometry args={[ATOM_RADII[atom.elem] || 0.3, 32, 32]} />
                        <meshStandardMaterial color={ATOM_COLORS[atom.elem] || 'pink'} metalness={0.2} roughness={0.3} />
                    </mesh>
                ))}

                {/* Standard Bonds */}
                {bonds.map((bond, i) => (
                    <mesh key={`bond-${i}`} position={[
                        (bond.start[0] + bond.end[0]) / 2,
                        (bond.start[1] + bond.end[1]) / 2,
                        (bond.start[2] + bond.end[2]) / 2
                    ]}
                        rotation={new THREE.Euler().setFromQuaternion(
                            new THREE.Quaternion().setFromUnitVectors(
                                new THREE.Vector3(0, 1, 0),
                                new THREE.Vector3(bond.end[0] - bond.start[0], bond.end[1] - bond.start[1], bond.end[2] - bond.start[2]).normalize()
                            ))}
                    >
                        <cylinderGeometry args={[0.08, 0.08, Math.hypot(bond.end[0] - bond.start[0], bond.end[1] - bond.start[1], bond.end[2] - bond.start[2]), 8]} />
                        <meshStandardMaterial color="#888" />
                    </mesh>
                ))}

                {/* Extra Special Bonds (Double, Rings) */}
                {mol.extraBonds && mol.extraBonds.map((eb, i) => {
                    if (eb.circle) {
                        return (
                            <mesh key={`eb-${i}`} rotation={[Math.PI / 2, 0, 0]}>
                                <torusGeometry args={[eb.radius, 0.05, 16, 32]} />
                                <meshStandardMaterial color="#888" border />
                            </mesh>
                        )
                    }
                    // Else custom line
                    return (
                        <mesh key={`eb-${i}`} position={[
                            (eb.start[0] + eb.end[0]) / 2,
                            (eb.start[1] + eb.end[1]) / 2,
                            (eb.start[2] + eb.end[2]) / 2
                        ]}
                            rotation={new THREE.Euler().setFromQuaternion(
                                new THREE.Quaternion().setFromUnitVectors(
                                    new THREE.Vector3(0, 1, 0),
                                    new THREE.Vector3(eb.end[0] - eb.start[0], eb.end[1] - eb.start[1], eb.end[2] - eb.start[2]).normalize()
                                ))}>
                            <cylinderGeometry args={[0.05, 0.05, Math.hypot(eb.end[0] - eb.start[0], eb.end[1] - eb.start[1], eb.end[2] - eb.start[2]), 8]} />
                            <meshStandardMaterial color="#888" />
                        </mesh>
                    );
                })}
            </group>

            {/* UI Overlay */}
            <Html position={[6, 3, 0]}>
                <DraggableHtmlPanel title={mode === 'explore' ? "🧪 Galerie Moléculaire" : "❓ Quiz Organique"}>
                    <div className="p-4 w-72 text-white">
                        {mode === 'explore' ? (
                            <>
                                <p className="text-sm mb-4 font-bold text-center text-[#00F5D4]">{mol.name}</p>
                                <div className="space-y-2 mb-4">
                                    <p className="text-xs text-gray-300">Formule: <span className="text-white font-mono">{mol.formula}</span></p>
                                    <p className="text-xs text-gray-300">Famille: <span className="text-white">{mol.family}</span></p>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <button onClick={() => setCurrentMolIndex((prev) => (prev - 1 + MOLECULES_DB.length) % MOLECULES_DB.length)} className="bg-gray-700 px-3 py-1 rounded">Préc.</button>
                                    <button onClick={() => setCurrentMolIndex((prev) => (prev + 1) % MOLECULES_DB.length)} className="bg-gray-700 px-3 py-1 rounded">Suiv.</button>
                                </div>
                                <button onClick={startQuiz} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded font-bold hover:scale-105 transition">
                                    Lancer le Défi Quiz 🎮
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-center font-bold text-yellow-400 mb-2">Score: {score}</p>
                                {showAnswer ? (
                                    <div className={`text-center font-bold mb-4 ${feedback.includes('Correct') ? 'text-green-400' : 'text-red-400'}`}>
                                        {feedback}
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-xs mb-3 text-center">
                                            {quizQuestion.type === 0 ? "Quelle est la famille de cette molécule ?" : "Quel est le nom de cette molécule ?"}
                                        </p>
                                        <div className="grid grid-cols-1 gap-2">
                                            {quizQuestion.options.map((opt, i) => (
                                                <button key={i} onClick={() => checkAnswer(opt)} className="bg-gray-700 hover:bg-[#00F5D4] hover:text-black py-2 rounded text-sm transition">
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                                <button onClick={() => setMode('explore')} className="mt-4 text-xs text-gray-400 hover:text-white block mx-auto underline">
                                    Retour à la galerie
                                </button>
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// C6-C11: ÉLECTROCHIMIE (REDOX & ELECTROLYSIS)
// ==========================================
export function RedoxElectrolyseSim() {
    // Mode: 'pile' (Spontaneous) or 'electrolysis' (Forced)
    const [mode, setMode] = useState('pile');
    const [metal1, setMetal1] = useState('Zn'); // Solid
    const [solution1, setSolution1] = useState('CuSO4'); // Ion Cu2+
    // In simple dragging sim: we dip Metal 1 into Solution 1

    // Potentials E0 (Volts)
    const E0 = {
        'Ag+/Ag': 0.80,
        'Cu2+/Cu': 0.34,
        'H+/H2': 0.00,
        'Fe2+/Fe': -0.44,
        'Zn2+/Zn': -0.76,
        'Al3+/Al': -1.66
    };

    // Reactivity Check
    // Gamma Rule: Ox(strongest) reacts with Red(strongest)
    // Here we dip a METAL (Red) into an ION solution (Ox).
    // Reaction occurs if E0(Ion/Metal_Ion) > E0(Metal_Dip_Ion/Metal_Dip)
    // Ex: Dip Zn (E0=-0.76) into Cu2+ (E0=+0.34). 0.34 > -0.76 => Reaction ! (Cu2+ becomes Cu, Zn becomes Zn2+)

    const reactionInfo = useMemo(() => {
        // Map selection to couples
        // Soluton contains Ox. Metal is Red.
        let oxE0 = 0;
        let redE0 = 0;
        let oxName = "";
        let redName = metal1;

        if (solution1 === 'CuSO4') { oxE0 = E0['Cu2+/Cu']; oxName = 'Cu2+'; }
        if (solution1 === 'ZnSO4') { oxE0 = E0['Zn2+/Zn']; oxName = 'Zn2+'; }
        if (solution1 === 'AgNO3') { oxE0 = E0['Ag+/Ag']; oxName = 'Ag+'; }
        if (solution1 === 'FeSO4') { oxE0 = E0['Fe2+/Fe']; oxName = 'Fe2+'; }

        // Find E0 of the metal strip
        if (metal1 === 'Cu') redE0 = E0['Cu2+/Cu'];
        if (metal1 === 'Zn') redE0 = E0['Zn2+/Zn'];
        if (metal1 === 'Fe') redE0 = E0['Fe2+/Fe'];
        if (metal1 === 'Ag') redE0 = E0['Ag+/Ag'];

        const occurs = oxE0 > redE0;

        return { occurs, oxName, redName, oxE0, redE0, diff: oxE0 - redE0 };
    }, [metal1, solution1]);

    // Electrolysis Params
    const [current, setCurrent] = useState(1.0); // Amperes
    const [time, setTime] = useState(60); // Seconds
    const [isRunning, setIsRunning] = useState(false);

    // Calculate mass deposited Faraday
    // m = (I * t * M) / (n * F)
    // Let's assume Copper Deposition on cathode: Cu2+ + 2e- -> Cu
    // n=2, M=63.5, F=96500
    const massDeposited = useMemo(() => {
        if (!isRunning && time === 0) return 0;
        const M = 63.5;
        const n = 2;
        const F = 96500;
        return (current * time * M) / (n * F);
    }, [current, time]);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <OrbitControls makeDefault />

            {/* Table */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#444" />
            </mesh>

            {mode === 'pile' ? (
                <group>
                    {/* Beaker */}
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                        <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
                    </mesh>
                    {/* Liquid */}
                    <mesh position={[0, -1, 0]}>
                        <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                        <meshStandardMaterial
                            color={
                                solution1.includes('Cu') ? '#00FFFF' :
                                    solution1.includes('Fe') ? '#99FF99' :
                                        '#EEEEFF'
                            }
                            transparent opacity={0.6}
                        />
                    </mesh>

                    {/* Metal Strip Dipping */}
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[0.5, 2.5, 0.1]} />
                        <meshStandardMaterial color={
                            metal1 === 'Cu' ? '#B87333' :
                                metal1 === 'Zn' ? '#AFAFAF' :
                                    metal1 === 'Fe' ? '#555555' :
                                        '#E0E0E0' // Ag
                        } />
                    </mesh>

                    {/* Deposit Visual if reaction */}
                    {reactionInfo.occurs && (
                        <mesh position={[0, -0.5, 0.06]}>
                            <boxGeometry args={[0.52, 1.5, 0.05]} />
                            <meshStandardMaterial color="black" roughness={1} /> {/* Dirty deposit */}
                            <Text position={[0.6, 0, 0]} fontSize={0.2} color="white">Dépôt !</Text>
                        </mesh>
                    )}

                    <Html position={[5, 3, 0]}>
                        <DraggableHtmlPanel title="⚗️ Expérience Redox">
                            <div className="p-4 w-64 text-white">
                                <div className="mb-4">
                                    <label className="block text-xs font-bold mb-1">Lame de Métal (Réducteur):</label>
                                    <select value={metal1} onChange={e => setMetal1(e.target.value)} className="w-full bg-gray-700 rounded p-1">
                                        <option value="Cu">Cuivre (Cu)</option>
                                        <option value="Zn">Zinc (Zn)</option>
                                        <option value="Fe">Fer (Fe)</option>
                                        <option value="Ag">Argent (Ag)</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-xs font-bold mb-1">Solution (Oxydant):</label>
                                    <select value={solution1} onChange={e => setSolution1(e.target.value)} className="w-full bg-gray-700 rounded p-1">
                                        <option value="CuSO4">Sulfate de Cuivre (Cu²⁺)</option>
                                        <option value="ZnSO4">Sulfate de Zinc (Zn²⁺)</option>
                                        <option value="FeSO4">Sulfate de Fer (Fe²⁺)</option>
                                        <option value="AgNO3">Nitrate d'Argent (Ag⁺)</option>
                                    </select>
                                </div>
                                <div className={`p-2 rounded text-xs border ${reactionInfo.occurs ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'}`}>
                                    <p className="font-bold mb-1">{reactionInfo.occurs ? "RÉACTION SPONTANÉE ✅" : "RIEN NE SE PASSE ❌"}</p>
                                    <p>Gammas: ΔE = {reactionInfo.diff.toFixed(2)} V</p>
                                    {reactionInfo.occurs && (
                                        <p className="mt-1 italic">{metal1} est rongé, {reactionInfo.oxName} devient métal.</p>
                                    )}
                                </div>
                            </div>
                        </DraggableHtmlPanel>
                    </Html>
                </group>
            ) : (
                <group>
                    {/* Electrolysis Mode */}
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                        <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                        <meshStandardMaterial color="#00FFFF" transparent opacity={0.6} />
                    </mesh>

                    {/* Electrodes */}
                    <mesh position={[-0.5, 0.5, 0]}>
                        <cylinderGeometry args={[0.1, 0.1, 2.5]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    <Text position={[-0.5, 1.8, 0]} fontSize={0.2} color="red">Anode (+)</Text>

                    <mesh position={[0.5, 0.5, 0]}>
                        <cylinderGeometry args={[0.1, 0.1, 2.5]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    <Text position={[0.5, 1.8, 0]} fontSize={0.2} color="blue">Cathode (-)</Text>

                    {/* Bubbles / Deposit simulation */}
                    {current > 0 && (
                        <group position={[0.5, -1, 0]}>
                            {/* Cathode Deposit */}
                            <mesh>
                                <cylinderGeometry args={[0.12, 0.12, 1.5]} />
                                <meshStandardMaterial color="#B87333" />
                            </mesh>
                        </group>
                    )}

                    <Html position={[5, 3, 0]}>
                        <DraggableHtmlPanel title="⚡ Électrolyse (Cu)">
                            <div className="p-4 w-64 text-white">
                                <label className="block text-xs mb-1">Intensité I: {current} A</label>
                                <input type="range" min="0" max="5" step="0.1" value={current} onChange={e => setCurrent(Number(e.target.value))} className="w-full mb-2" />

                                <label className="block text-xs mb-1">Durée t: {time} s</label>
                                <input type="range" min="0" max="3600" step="60" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full mb-2" />

                                <div className="bg-black/30 p-2 rounded text-xs mt-2">
                                    <p className="font-bold underline mb-1">Loi de Faraday:</p>
                                    <p>m = (I × t × M) / (n × F)</p>
                                    <p className="text-yellow-400 font-bold text-sm mt-1">
                                        Masse déposée : {(massDeposited * 1000).toFixed(1)} mg
                                    </p>
                                </div>
                            </div>
                        </DraggableHtmlPanel>
                    </Html>
                </group>
            )}

            {/* Mode Switcher */}
            <Html position={[-6, 4, 0]}>
                <div className="flex flex-col gap-2">
                    <button onClick={() => setMode('pile')} className={`px-4 py-2 rounded font-bold ${mode === 'pile' ? 'bg-[#00F5D4] text-black' : 'bg-gray-800 text-white'}`}>
                        🧪 Piles & Gamma
                    </button>
                    <button onClick={() => setMode('electrolysis')} className={`px-4 py-2 rounded font-bold ${mode === 'electrolysis' ? 'bg-[#00F5D4] text-black' : 'bg-gray-800 text-white'}`}>
                        ⚡ Électrolyse
                    </button>
                </div>
            </Html>

        </group>
    );
}

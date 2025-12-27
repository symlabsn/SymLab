'use client';
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Line, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

import { PhaseSelector, GradeBadge, MissionObjective, XPBar, SuccessOverlay, ConfettiExplosion, ChallengeTimer } from './GamificationUtils';

// =========================================================
// 1. DILUTION INTERACTIVE (Nouveau - Avec Challenge)
// =========================================================
export function DilutionSimulation() {
    // Solution Mère
    const [Ci, setCi] = useState(2.0); // Concentration initiale (mol/L)
    const [Vi, setVi] = useState(50);  // Volume à prélever (mL)

    // Fiole jaugée (Volume final)
    const [Vf, setVf] = useState(200); // Volume final (mL)

    // Calcul Cf = Ci * Vi / Vf
    const Cf = (Ci * Vi) / Vf;

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [targetCf, setTargetCf] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const tolerance = 0.02;
    const isCorrect = targetCf && Math.abs(Cf - targetCf) < tolerance;

    const startChallenge = () => {
        setMode('challenge');
        const targets = [0.1, 0.25, 0.5, 0.75, 1.0];
        const newTarget = targets[Math.floor(Math.random() * targets.length)];
        setTargetCf(newTarget);
        setScore(0);
        setShowSuccess(false);
    };

    const checkAnswer = () => {
        if (isCorrect) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />

            <SuccessOverlay show={showSuccess} message={`Solution préparée : ${Cf.toFixed(2)} mol/L !`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Solution Mère (à gauche) */}
            <group position={[-3, -1, 0]}>
                {/* Erlenmeyer */}
                <mesh>
                    <cylinderGeometry args={[0.8, 1.2, 2.5, 32]} />
                    <meshPhysicalMaterial color="#3B82F6" transmission={0.6} transparent opacity={0.5 + Ci * 0.2} />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3} color="white">Solution Mère</Text>
                <Text position={[0, -2.4, 0]} fontSize={0.2} color="#3B82F6">Ci = {Ci.toFixed(1)} mol/L</Text>
            </group>

            {/* Pipette (au milieu) */}
            <group position={[0, 1, 0]}>
                <mesh rotation={[0, 0, -0.2]}>
                    <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
                    <meshStandardMaterial color="#AAA" transparent opacity={0.6} />
                </mesh>
                {/* Liquide dans pipette */}
                <mesh position={[0, -0.8, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.7} />
                </mesh>
                <Text position={[0.6, 0, 0]} fontSize={0.2} color="yellow">Vi = {Vi} mL</Text>
            </group>

            {/* Fiole Jaugée (à droite) */}
            <group position={[3, -1.5, 0]}>
                {/* Corps de la fiole */}
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, Math.PI * 0.3, Math.PI * 0.7]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Col */}
                <mesh position={[0, 1.8, 0]}>
                    <cylinderGeometry args={[0.3, 0.4, 1.5, 32]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Liquide dilué */}
                <mesh position={[0, 0.3, 0]}>
                    <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.65]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.1 + Cf * 0.3} />
                </mesh>
                {/* Trait de jauge */}
                <mesh position={[0, 1.5, 0]}>
                    <torusGeometry args={[0.35, 0.02, 8, 32]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.3} color="white">Fiole Jaugée</Text>
                <Text position={[0, -1.6, 0]} fontSize={0.2} color="#60A5FA">Vf = {Vf} mL</Text>
            </group>

            {/* Flèches de processus */}
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1.5, 0, 0), 1.5, 0xFFFFFF, 0.2, 0.15]} />
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0), 1.5, 0xFFFFFF, 0.2, 0.15]} />

            <Html transform={false}>
                <DraggableHtmlPanel title="💧 Dilution Interact" className="w-[340px] border-cyan-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">DILUTION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Apprenez à diluer une solution !" icon="💧" />
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="bg-blue-900/20 p-2 rounded border border-blue-500/30">
                                        <label className="text-xs text-blue-300 font-bold">Ci (Solution mère)</label>
                                        <input
                                            type="range" min="0.5" max="3.0" step="0.1"
                                            value={Ci} onChange={(e) => setCi(Number(e.target.value))}
                                            className="w-full h-1 bg-blue-900 rounded accent-blue-500 mt-2"
                                        />
                                        <div className="text-right text-blue-400 font-mono mt-1">{Ci.toFixed(1)} mol/L</div>
                                    </div>
                                    <div className="bg-indigo-900/20 p-2 rounded border border-indigo-500/30">
                                        <label className="text-xs text-indigo-300 font-bold">Vi (Prélèvement)</label>
                                        <input
                                            type="range" min="10" max="100" step="5"
                                            value={Vi} onChange={(e) => setVi(Number(e.target.value))}
                                            className="w-full h-1 bg-indigo-900 rounded accent-indigo-500 mt-2"
                                        />
                                        <div className="text-right text-indigo-400 font-mono mt-1">{Vi} mL</div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-cyan-400 font-bold">Vf (Volume fiole jaugée)</label>
                                    <div className="flex gap-2 mt-1">
                                        {[100, 200, 250, 500].map(v => (
                                            <button
                                                key={v}
                                                onClick={() => setVf(v)}
                                                className={`flex-1 py-1 rounded text-xs transition-colors ${Vf === v ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                                            >
                                                {v}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-3 rounded-xl border border-gray-600 text-center">
                                    <div className="text-xs text-gray-400 mb-1">Concentration finale</div>
                                    <div className="text-2xl font-bold font-mono text-white">
                                        Cf = {Cf.toFixed(3)} mol/L
                                    </div>
                                    <div className="text-[10px] bg-black/30 p-1 rounded mt-2 font-mono text-gray-400">
                                        Cf = (Ci × Vi) / Vf
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-cyan-300 font-bold flex items-center gap-2">
                                    <span>🎯</span> Défi Préparateur
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetCf ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-cyan-900/30 p-3 rounded border border-cyan-500/30 text-center">
                                        <div className="text-cyan-200 text-xs uppercase mb-1">Commande Client</div>
                                        <div className="font-bold text-xl text-white">Cible: {targetCf.toFixed(2)} mol/L</div>
                                        <div className="text-xs text-gray-500 mt-1">Prépare cette solution par dilution.</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-xs text-gray-400">Paramètres actuels:</div>
                                        <div className="flex justify-between text-xs bg-gray-800 p-2 rounded">
                                            <span>Ci: {Ci.toFixed(1)}</span>
                                            <span>Vi: {Vi}</span>
                                            <span>Vf: {Vf}</span>
                                        </div>
                                        <div className="text-center font-bold text-white mt-1">
                                            <span className={Math.abs(Cf - targetCf) < tolerance ? "text-green-400" : "text-white"}>Cf Actuel: {Cf.toFixed(3)} mol/L</span>
                                        </div>
                                    </div>

                                    {/* Simplified controls for challenge */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <input type="range" min="10" max="100" step="5" value={Vi} onChange={(e) => setVi(Number(e.target.value))} className="w-full accent-indigo-500" />
                                        <select value={Vf} onChange={e => setVf(Number(e.target.value))} className="bg-gray-700 text-xs rounded">
                                            {[100, 200, 250, 500].map(v => <option key={v} value={v}>{v} mL</option>)}
                                        </select>
                                    </div>


                                    <button onClick={checkAnswer} className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold text-white shadow-lg shadow-cyan-900/30">
                                        Valider la Solution
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold shadow-lg shadow-cyan-900/20 transition-all transform hover:scale-105">
                                        Relever le Défi
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 2. TITRAGE ACIDE-BASE (Nouveau - Avec pH dynamique)
// =========================================================
export function TitrageAcideBase() {
    const [volumeBase, setVolumeBase] = useState(0); // mL de NaOH ajouté
    const [concentrationBase] = useState(0.1); // mol/L de NaOH

    // Pour le mode challenge, ces valeurs peuvent changer
    const [concentrationAcide, setConcentrationAcide] = useState(0.1); // mol/L de HCl
    const [volumeAcide, setVolumeAcide] = useState(20); // mL

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [targetVeq, setTargetVeq] = useState(null); // Pour le challenge

    // Calcul du pH (simplifié)
    // Équivalence quand nAcide = nBase => Veq = (Ca * Va) / Cb
    const Veq = (concentrationAcide * volumeAcide) / concentrationBase;

    // Challenge Logic
    const startChallenge = () => {
        setMode('challenge');
        // Randomize Acid concentration between 0.05 and 0.15
        const newCa = 0.05 + Math.random() * 0.1;
        setConcentrationAcide(newCa);
        setVolumeBase(0);
        setTargetVeq((newCa * volumeAcide) / concentrationBase);
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!targetVeq) return;
        // Success if stopped within 0.5mL of Veq AND pH is roughly neutral (or just checking volume)
        // Let's be lenient: +/- 0.5mL
        if (Math.abs(volumeBase - targetVeq) <= 0.5) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    // Avant équivalence: excès d'acide
    // pH = -log[H3O+] avec [H3O+] ~ excès moles acide / volume total
    const moleAcide = concentrationAcide * volumeAcide / 1000;
    const moleBase = concentrationBase * volumeBase / 1000;
    const volumeTotal = (volumeAcide + volumeBase) / 1000; // L

    let pH;
    if (volumeBase < Veq) {
        const excessH = (moleAcide - moleBase) / volumeTotal;
        pH = excessH > 0 ? -Math.log10(excessH) : 7;
    } else if (volumeBase > Veq) {
        const excessOH = (moleBase - moleAcide) / volumeTotal;
        const pOH = excessOH > 0 ? -Math.log10(excessOH) : 7;
        pH = 14 - pOH;
    } else {
        pH = 7;
    }
    pH = Math.max(0, Math.min(14, pH));

    // Couleur indicateur BBT
    let indicatorColor = '#22C55E'; // Vert neutre
    if (pH < 6.0) indicatorColor = '#FACC15'; // Jaune acide
    else if (pH > 8.0) indicatorColor = '#3B82F6'; // Bleu basique

    const [isDropping, setIsDropping] = useState(false);
    const dropRef = useRef();

    const addDrop = () => {
        if (volumeBase < 40) {
            setIsDropping(true);
            setTimeout(() => {
                setVolumeBase(v => Math.min(40, v + 0.5));
                setIsDropping(false);
            }, 300);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />

            <SuccessOverlay show={showSuccess} message={`Équivalence trouvée ! Veq ≈ ${volumeBase} mL`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Burette */}
            <group position={[0, 3, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.2, 0.2, 4, 16]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.4} />
                </mesh>
                {/* NaOH dans burette */}
                <mesh position={[0, (40 - volumeBase) / 20 - 1, 0]}>
                    <cylinderGeometry args={[0.18, 0.18, (40 - volumeBase) / 10, 16]} />
                    <meshStandardMaterial color="#E0E7FF" transparent opacity={0.5} />
                </mesh>
                {/* Robinet */}
                <mesh position={[0.3, -1.8, 0]}>
                    <boxGeometry args={[0.3, 0.1, 0.1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.25} color="white">NaOH ({concentrationBase} M)</Text>
            </group>

            {/* Goutte tombante */}
            {isDropping && (
                <mesh ref={dropRef} position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#E0E7FF" />
                </mesh>
            )}

            {/* Erlenmeyer */}
            <group position={[0, -2, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.6, 1.2, 2.5, 32]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Solution avec indicateur */}
                <mesh position={[0, -0.3, 0]}>
                    <cylinderGeometry args={[0.55, 1.1, 1.8, 32]} />
                    <meshStandardMaterial color={indicatorColor} transparent opacity={0.7} />
                </mesh>
                <Text position={[0, -1.8, 0]} fontSize={0.2} color="white">HCl + BBT</Text>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Titrage Acide-Base" className="w-[340px] border-emerald-500/30 text-white" defaultPosition="bottom-right">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">TITRAGE</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Observez le virage de l'indicateur !" icon="🧪" />
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={addDrop}
                                        disabled={volumeBase >= 40}
                                        className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all disabled:opacity-50 shadow-lg shadow-emerald-900/20"
                                    >
                                        💧 Ajouter goutte (+0.5mL)
                                    </button>
                                    <button
                                        onClick={() => setVolumeBase(0)}
                                        className="py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-xl"
                                    >
                                        🔄
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="bg-gray-800 p-2 rounded text-center">
                                        <div className="text-xs text-gray-400">V(NaOH) ajouté</div>
                                        <div className="font-bold text-lg">{volumeBase.toFixed(1)} mL</div>
                                    </div>
                                    <div className="bg-emerald-900/20 p-2 rounded border border-emerald-500/30 text-center">
                                        <div className="text-xs text-emerald-400">V(équivalence)</div>
                                        <div className="font-bold text-white text-lg">{Veq.toFixed(1)} mL</div>
                                    </div>
                                </div>

                                {/* pH Meter */}
                                <div className="bg-gradient-to-r from-red-600 via-green-500 to-blue-600 p-1 rounded-xl">
                                    <div className="bg-black p-3 rounded-lg">
                                        <div className="flex justify-between text-[10px] mb-1 uppercase font-bold">
                                            <span className="text-red-400">Acide</span>
                                            <span className="text-green-400">Neutre</span>
                                            <span className="text-blue-400">Basique</span>
                                        </div>
                                        <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-cyan-400 to-blue-600 rounded-full mb-2">
                                            <div
                                                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-black"
                                                style={{ left: `${(pH / 14) * 100}%` }}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold font-mono">pH = {pH.toFixed(1)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Indicateur explication */}
                                <div className="text-xs bg-gray-800 p-2 rounded flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: indicatorColor }} />
                                    <span className="text-gray-300">
                                        BBT : {pH < 6.0 ? 'Jaune (Acide)' : pH > 8.0 ? 'Bleu (Basique)' : 'Vert (Neutre)'}
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-emerald-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-emerald-300 font-bold flex items-center gap-2">
                                    <span>🕵️</span> Défi Équivalence
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetVeq ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-gray-800 p-3 rounded border border-gray-600 text-center">
                                        <div className="text-gray-400 text-xs uppercase mb-1">Concentration Inconnue</div>
                                        <div className="font-bold text-xl text-emerald-400">Trouve le Veq</div>
                                        <div className="text-xs text-gray-500 mt-1">Arrête-toi quand la solution devient verte !</div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={addDrop}
                                            disabled={volumeBase >= 40}
                                            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all disabled:opacity-50 shadow-lg shadow-emerald-900/20"
                                        >
                                            💧 Ajouter (+0.5)
                                        </button>
                                        <div className="font-bold text-white text-xl bg-gray-800 p-3 rounded min-w-[80px] text-center">
                                            {volumeBase.toFixed(1)}
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="w-8 h-8 rounded-full border-2 border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform scale-125 transition-colors duration-500" style={{ backgroundColor: indicatorColor }} />
                                    </div>

                                    <button onClick={checkChallenge} className="w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-bold text-white shadow-lg">
                                        Valider l'Équivalence
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-105">
                                        Lancer le Titrage
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 3. DISSOLUTION (Animation particules + Missions Gamifiées)
// =========================================================

export function DissolutionSimulation() {
    // États de base
    const [soluteType, setSoluteType] = useState('NaCl');
    const [isDissolving, setIsDissolving] = useState(false);
    const [progress, setProgress] = useState(0);

    // Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);

    const solutes = {
        NaCl: { name: 'Chlorure de Sodium', formula: 'NaCl → Na⁺ + Cl⁻', color: '#FFFFFF', ionColors: ['#9333EA', '#22C55E'], cation: 'Na⁺', anion: 'Cl⁻' },
        CuSO4: { name: 'Sulfate de Cuivre', formula: 'CuSO₄ → Cu²⁺ + SO₄²⁻', color: '#3B82F6', ionColors: ['#3B82F6', '#F97316'], cation: 'Cu²⁺', anion: 'SO₄²⁻' },
        KMnO4: { name: 'Permanganate de K', formula: 'KMnO₄ → K⁺ + MnO₄⁻', color: '#A855F7', ionColors: ['#A855F7', '#EC4899'], cation: 'K⁺', anion: 'MnO₄⁻' },
        FeCl3: { name: 'Chlorure de Fer III', formula: 'FeCl₃ → Fe³⁺ + 3Cl⁻', color: '#F59E0B', ionColors: ['#F59E0B', '#22C55E'], cation: 'Fe³⁺', anion: 'Cl⁻' },
        AgNO3: { name: 'Nitrate d\'Argent', formula: 'AgNO₃ → Ag⁺ + NO₃⁻', color: '#E5E7EB', ionColors: ['#9CA3AF', '#EF4444'], cation: 'Ag⁺', anion: 'NO₃⁻' },
    };

    const current = solutes[soluteType];

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: '💎 Cristal de Sel', objective: 'Dissous le NaCl et observe la formation des ions Na⁺ et Cl⁻.', targetSolute: 'NaCl', points: 100 },
        { id: 2, title: '🔵 Solution Bleue', objective: 'Prépare une solution de sulfate de cuivre et identifie le cation Cu²⁺.', targetSolute: 'CuSO4', points: 150 },
        { id: 3, title: '💜 Violet Intense', objective: 'Dissous le permanganate de potassium pour voir sa couleur caractéristique.', targetSolute: 'KMnO4', points: 150 },
        { id: 4, title: '🧪 Fer Rouillé', objective: 'Identifie les ions Fe³⁺ dans une solution de chlorure de fer III.', targetSolute: 'FeCl3', points: 200 },
        { id: 5, title: '⚗️ Expert Chimiste', objective: 'Dissous le nitrate d\'argent - attention substance sensible à la lumière !', targetSolute: 'AgNO3', points: 250 },
    ], []);

    // Particules d'ions
    const [ions, setIons] = useState([]);

    // Timer pour le mode mission
    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    // Initialiser mission
    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(30);
        }
    }, [phase, mission, missions]);

    const startDissolution = () => {
        setIsDissolving(true);
        setProgress(0);
        setIons([]);

        // Générer les ions qui se dispersent
        const newIons = [];
        const ionCount = 30; // Plus d'ions pour plus de dynamisme
        for (let i = 0; i < ionCount; i++) {
            newIons.push({
                id: i,
                type: i % 2,
                startX: (Math.random() - 0.5) * 0.5,
                startY: 2,
                targetX: (Math.random() - 0.5) * 2.5,
                targetY: -1 + Math.random() * 2.5,
                targetZ: (Math.random() - 0.5) * 2.5,
                delay: Math.random() * 800,
                wobble: Math.random() * 2 // Mouvement brownien
            });
        }
        setIons(newIons);
    };

    useFrame((state, delta) => {
        if (isDissolving && progress < 1) {
            setProgress(p => Math.min(1, p + delta * 0.25));
        }
        // Mouvement brownien des ions
        if (progress >= 1 && ions.length > 0) {
            setIons(prev => prev.map(ion => ({
                ...ion,
                targetX: ion.targetX + Math.sin(state.clock.elapsedTime * ion.wobble) * delta * 0.3,
                targetZ: ion.targetZ + Math.cos(state.clock.elapsedTime * ion.wobble) * delta * 0.3
            })));
        }
    });

    // Vérifier si mission réussie
    useEffect(() => {
        if (phase === 'mission' && mission && progress >= 1 && soluteType === mission.targetSolute) {
            setScore(prev => prev + mission.points);
            setShowSuccess(true);
        }
    }, [phase, mission, progress, soluteType]);

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(30);
            setSoluteType(missions[nextIdx].targetSolute);
            setIsDissolving(false);
            setProgress(0);
            setIons([]);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-3, 3, 3]} intensity={0.5} color={current.color} />

            <SuccessOverlay show={showSuccess} message={mission?.title || "Dissolution réussie !"} points={mission?.points || 100} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />

            {/* Bécher avec effets */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 4, 32, 1, true]} />
                <meshPhysicalMaterial color="white" transmission={0.95} transparent opacity={0.25} side={THREE.DoubleSide} roughness={0.1} />
            </mesh>

            {/* Fond du bécher */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[1.45, 32]} />
                <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.2} />
            </mesh>

            {/* Eau avec gradient de couleur */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.43, 1.43, 3, 32]} />
                <meshStandardMaterial color={isDissolving ? current.color : '#60A5FA'} transparent opacity={0.15 + progress * 0.45} />
            </mesh>

            {/* Soluté tombant */}
            {!isDissolving && (
                <Float speed={2} floatIntensity={0.2}>
                    <group position={[0, 2.5, 0]}>
                        <mesh>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial color={current.color} metalness={0.3} roughness={0.5} />
                        </mesh>
                        <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">{soluteType}</Text>
                    </group>
                </Float>
            )}

            {/* Ions avec animation */}
            {isDissolving && ions.map((ion) => {
                const t = Math.min(1, progress * 2.5 - ion.delay / 1500);
                if (t < 0) return null;
                const x = ion.startX + (ion.targetX - ion.startX) * t;
                const y = ion.startY + (ion.targetY - ion.startY) * t;
                const z = ion.targetZ * t;
                return (
                    <mesh key={ion.id} position={[x, y, z]}>
                        <sphereGeometry args={[0.1]} />
                        <meshStandardMaterial color={current.ionColors[ion.type]} emissive={current.ionColors[ion.type]} emissiveIntensity={0.5} />
                    </mesh>
                );
            })}

            {/* Étiquettes ions */}
            {progress >= 1 && (
                <>
                    <Text position={[-1.8, 1.5, 0]} fontSize={0.2} color={current.ionColors[0]}>{current.cation}</Text>
                    <Text position={[1.8, 1.5, 0]} fontSize={0.2} color={current.ionColors[1]}>{current.anion}</Text>
                </>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="💠 Laboratoire de Dissolution" className="w-[380px] border-purple-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <GradeBadge score={score} />
                                <ChallengeTimer timeLeft={timeLeft} maxTime={30} />
                            </div>
                            <MissionObjective objective={mission.objective} icon="🧪" />
                        </div>
                    )}

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">DISSOLUTION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    <div className="space-y-4">
                        {/* Sélecteur de soluté */}
                        <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Soluté</div>
                            <div className="grid grid-cols-5 gap-1">
                                {Object.keys(solutes).map(key => (
                                    <button
                                        key={key}
                                        onClick={() => { setSoluteType(key); setIsDissolving(false); setProgress(0); setIons([]); }}
                                        className={`py-2 rounded text-[10px] font-bold transition-all ${soluteType === key
                                            ? 'bg-purple-600 shadow-lg shadow-purple-900/30 scale-105'
                                            : 'bg-gray-800 hover:bg-gray-700'}`}
                                        style={{ borderBottom: soluteType === key ? `3px solid ${solutes[key].color}` : 'none' }}
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info soluté */}
                        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-3 rounded-xl border border-purple-500/20">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: current.color, boxShadow: `0 0 15px ${current.color}` }} />
                                <div>
                                    <div className="text-sm font-bold text-white">{current.name}</div>
                                    <div className="text-xs font-mono text-purple-300">{current.formula}</div>
                                </div>
                            </div>
                        </div>

                        {/* Équation ionique */}
                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="bg-black/40 p-2 rounded border border-purple-500/20">
                                <div className="text-gray-500 uppercase text-[10px]">Cation</div>
                                <div className="text-lg font-bold" style={{ color: current.ionColors[0] }}>{current.cation}</div>
                            </div>
                            <div className="bg-black/40 p-2 rounded border border-green-500/20">
                                <div className="text-gray-500 uppercase text-[10px]">Anion</div>
                                <div className="text-lg font-bold" style={{ color: current.ionColors[1] }}>{current.anion}</div>
                            </div>
                        </div>

                        {/* Bouton action */}
                        <button
                            onClick={startDissolution}
                            disabled={isDissolving && progress < 1}
                            className={`w-full py-4 rounded-xl font-black text-sm transition-all transform hover:scale-[1.02] ${isDissolving && progress < 1
                                ? 'bg-gray-700 cursor-not-allowed opacity-70'
                                : 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 shadow-lg shadow-purple-900/30'
                                }`}
                        >
                            {isDissolving && progress < 1 ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="animate-spin">⚗️</span> Dissolution... {Math.round(progress * 100)}%
                                </span>
                            ) : progress >= 1 ? (
                                '🔄 Nouvelle Dissolution'
                            ) : (
                                '🔬 DISSOUDRE LE SOLUTÉ'
                            )}
                        </button>

                        {/* Message succès */}
                        {progress >= 1 && !showSuccess && (
                            <div className="bg-green-900/40 border border-green-500/50 p-3 rounded-xl text-center animate-in slide-in-from-bottom duration-500">
                                <div className="text-green-400 font-bold text-sm mb-1">✓ Solution homogène obtenue !</div>
                                <div className="text-xs text-gray-300">Les ions {current.cation} et {current.anion} sont dispersés uniformément.</div>
                            </div>
                        )}

                        <XPBar current={score % 500} nextLevel={500} />
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 4. ÉQUILIBRAGE ÉQUATION-BILAN (Interactif)
// =========================================================
// =========================================================
// 4. ÉQUILIBRAGE ÉQUATION-BILAN (Mission Lancement)
// =========================================================
// =========================================================
// 4. ÉQUILIBRAGE ÉQUATION-BILAN (Mission Lancement)
// =========================================================
export function EquationBalancer() {
    const [coefficients, setCoefficients] = useState([1, 1, 1, 1]);
    const [currentEquation, setCurrentEquation] = useState(0);
    const [rocketState, setRocketState] = useState('idle'); // idle, countdown, launch, crash
    const [rocketHeight, setRocketHeight] = useState(0);

    // Gamification
    const [mode, setMode] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const equations = [
        {
            name: "Propulsion Hydrogène",
            reactants: [{ formula: 'H₂', atoms: { H: 2 } }, { formula: 'O₂', atoms: { O: 2 } }],
            products: [{ formula: 'H₂O', atoms: { H: 2, O: 1 } }],
            solution: [2, 1, 2], // 2H2 + O2 -> 2H2O
            color: "#3B82F6"
        },
        {
            name: "Synthèse Ammoniac",
            reactants: [{ formula: 'N₂', atoms: { N: 2 } }, { formula: 'H₂', atoms: { H: 2 } }],
            products: [{ formula: 'NH₃', atoms: { N: 1, H: 3 } }],
            solution: [1, 3, 2],
            color: "#8B5CF6"
        },
        {
            name: "Combustion Méthane",
            reactants: [{ formula: 'CH₄', atoms: { C: 1, H: 4 } }, { formula: 'O₂', atoms: { O: 2 } }],
            products: [{ formula: 'CO₂', atoms: { C: 1, O: 2 } }, { formula: 'H₂O', atoms: { H: 2, O: 1 } }],
            solution: [1, 2, 1, 2],
            color: "#EF4444"
        }
    ];

    const eq = equations[currentEquation];

    // Calcul atomes
    const calcAtoms = (side, coeffs) => {
        const totals = {};
        side.forEach((mol, i) => {
            const coef = coeffs[i] || 1;
            Object.entries(mol.atoms).forEach(([atom, count]) => {
                totals[atom] = (totals[atom] || 0) + count * coef;
            });
        });
        return totals;
    };

    const leftAtoms = calcAtoms(eq.reactants, coefficients.slice(0, eq.reactants.length));
    const rightAtoms = calcAtoms(eq.products, coefficients.slice(eq.reactants.length));
    const isBalanced = JSON.stringify(leftAtoms) === JSON.stringify(rightAtoms);

    const updateCoef = (index, delta) => {
        if (rocketState !== 'idle') return;
        const newCoeffs = [...coefficients];
        newCoeffs[index] = Math.max(1, Math.min(6, (newCoeffs[index] || 1) + delta));
        setCoefficients(newCoeffs);
    };

    useFrame((state, delta) => {
        if (rocketState === 'launch') {
            setRocketHeight(h => h + delta * 5); // Décollage rapide
        }
    });

    const launchRocket = () => {
        if (isBalanced) {
            setRocketState('countdown');
            setTimeout(() => {
                setRocketState('launch');
                setShowSuccess(true);
                setScore(s => s + 300);
            }, 1000);
        } else {
            setRocketState('crash');
            setTimeout(() => setRocketState('idle'), 2000);
        }
    };

    const nextMission = () => {
        setCurrentEquation((currentEquation + 1) % equations.length);
        setCoefficients([1, 1, 1, 1]);
        setRocketState('idle');
        setRocketHeight(0);
        setShowSuccess(false);
    };

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <ConfettiExplosion active={showSuccess} />
            <SuccessOverlay show={showSuccess} message="Lancement Réussi ! Orbite atteinte." points={300} onNext={nextMission} />

            {/* Décors Pas de tir */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[8, 32]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Fusée */}
            <group position={[3, -2 + rocketHeight, -2]}>
                {/* Corps */}
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 3, 32]} />
                    <meshStandardMaterial color="white" metalness={0.5} roughness={0.2} />
                </mesh>
                {/* Coiffe */}
                <mesh position={[0, 3.5, 0]}>
                    <coneGeometry args={[0.5, 1, 32]} />
                    <meshStandardMaterial color={eq.color} />
                </mesh>
                {/* Ailettes */}
                {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((angle, i) => (
                    <mesh key={i} position={[Math.sin(angle) * 0.4, 0.5, Math.cos(angle) * 0.4]} rotation={[0, angle, 0]}>
                        <boxGeometry args={[0.1, 1, 0.5]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                ))}
                {/* Flammes */}
                {(rocketState === 'launch' || rocketState === 'crash') && (
                    <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
                        <coneGeometry args={[0.4, 1.5, 16]} />
                        <meshBasicMaterial color="orange" />
                    </mesh>
                )}
            </group>

            {/* Fumée Crash */}
            {rocketState === 'crash' && (
                <group position={[3, 0, -2]}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Sphere key={i} args={[0.3]} position={[(Math.random() - 0.5), Math.random() * 2, (Math.random() - 0.5)]}>
                            <meshBasicMaterial color="#555" />
                        </Sphere>
                    ))}
                    <Text position={[3, 2, -2]} fontSize={0.5} color="red">ERREUR DE CALCUL !</Text>
                </group>
            )}

            {/* Affichage Equations Flottantes */}
            <group position={[-2, 1, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">CARBURANT REQUIS</Text>

                {/* Réactifs */}
                <group position={[-2, 0, 0]}>
                    {eq.reactants.map((mol, i) => (
                        <Text key={i} position={[i * 2, 0, 0]} fontSize={0.6} color="#60A5FA">
                            {coefficients[i] > 1 ? coefficients[i] : ''}{mol.formula}
                            {i < eq.reactants.length - 1 ? ' + ' : ''}
                        </Text>
                    ))}
                </group>
                <Text position={[0, 0, 0]} fontSize={0.6} color="white"> → </Text>
                {/* Produits */}
                <group position={[2, 0, 0]}>
                    {eq.products.map((mol, i) => (
                        <Text key={i} position={[i * 2.5, 0, 0]} fontSize={0.6} color="#4ADE80">
                            {coefficients[eq.reactants.length + i] > 1 ? coefficients[eq.reactants.length + i] : ''}{mol.formula}
                            {i < eq.products.length - 1 ? ' + ' : ''}
                        </Text>
                    ))}
                </group>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🚀 Centre de Contrôle" className="w-[380px] border-red-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-red-400 font-bold uppercase tracking-wider mb-1">Programme Spatial</div>
                            <div className="text-xl font-black text-white leading-none">PROPULSION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    <div className="bg-gray-800/80 p-3 rounded-xl mb-4 text-center border-l-4 border-blue-500">
                        <div className="text-xs text-gray-400 uppercase tracking-widest">Mission Actuelle</div>
                        <div className="font-bold text-lg text-white">{eq.name}</div>
                    </div>

                    {/* Contrôles coefficients */}
                    <div className="grid grid-cols-4 gap-2 mb-6">
                        {[...eq.reactants, ...eq.products].map((mol, i) => (
                            <div key={i} className="text-center bg-gray-900/50 p-2 rounded border border-gray-700 hover:border-blue-500/50 transition-colors">
                                <div className="text-xs text-blue-300 font-bold mb-2">{mol.formula}</div>
                                <div className="flex flex-col items-center gap-1">
                                    <button onClick={() => updateCoef(i, 1)} className="w-full bg-gray-700 hover:bg-gray-600 rounded text-xs py-1 text-green-400">▲</button>
                                    <span className="font-bold text-xl my-1 font-mono">{coefficients[i] || 1}</span>
                                    <button onClick={() => updateCoef(i, -1)} className="w-full bg-gray-700 hover:bg-gray-600 rounded text-xs py-1 text-red-400">▼</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        {rocketState === 'idle' ? (
                            <button
                                onClick={launchRocket}
                                className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-xl font-black text-xl shadow-lg shadow-orange-900/20 transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                            >
                                <span>🚀</span> DÉCOLLAGE IMMÉDIAT
                            </button>
                        ) : rocketState === 'countdown' ? (
                            <div className="text-center text-4xl font-black text-white animate-pulse py-4">
                                PRÊT...
                            </div>
                        ) : (
                            <div className="text-center text-red-400 font-bold py-4">
                                SÉQUENCE EN COURS...
                            </div>
                        )}
                    </div>

                    <div className="mt-4 text-[10px] text-gray-500 text-center bg-black/20 p-2 rounded">
                        Loi de Lavoisier : "Rien ne se perd, rien ne se crée, tout se transforme."
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 5. STRUCTURE DE LEWIS (Visualisation molécules + Gamification)
// =========================================================
export function LewisStructure() {
    const [molecule, setMolecule] = useState('H2O');
    const [rotationSpeed, setRotationSpeed] = useState(0.5);

    // Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(25);
    const [quizAnswer, setQuizAnswer] = useState(null);
    const [showLabels, setShowLabels] = useState(true);

    const molecules = {
        H2O: {
            name: 'Eau',
            formula: 'H₂O',
            atoms: [
                { el: 'O', pos: [0, 0, 0], color: '#EF4444', size: 0.5, electrons: 6 },
                { el: 'H', pos: [-0.8, -0.6, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0.8, -0.6, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1], [0, 2]],
            doubletsNonLiants: [{ atom: 0, count: 2 }],
            bondsCount: 2,
            doubletsCount: 2,
            angle: '104.5°',
            geometry: 'Coudée'
        },
        CO2: {
            name: 'Dioxyde de carbone',
            formula: 'CO₂',
            atoms: [
                { el: 'C', pos: [0, 0, 0], color: '#333333', size: 0.5, electrons: 4 },
                { el: 'O', pos: [-1.5, 0, 0], color: '#EF4444', size: 0.45, electrons: 6 },
                { el: 'O', pos: [1.5, 0, 0], color: '#EF4444', size: 0.45, electrons: 6 },
            ],
            bonds: [[0, 1, 2], [0, 2, 2]],
            doubletsNonLiants: [{ atom: 1, count: 2 }, { atom: 2, count: 2 }],
            bondsCount: 4,
            doubletsCount: 4,
            angle: '180°',
            geometry: 'Linéaire'
        },
        NH3: {
            name: 'Ammoniac',
            formula: 'NH₃',
            atoms: [
                { el: 'N', pos: [0, 0.3, 0], color: '#3B82F6', size: 0.5, electrons: 5 },
                { el: 'H', pos: [-0.7, -0.5, 0.4], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0.7, -0.5, 0.4], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0, -0.5, -0.8], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1], [0, 2], [0, 3]],
            doubletsNonLiants: [{ atom: 0, count: 1 }],
            bondsCount: 3,
            doubletsCount: 1,
            angle: '107°',
            geometry: 'Pyramidale'
        },
        CH4: {
            name: 'Méthane',
            formula: 'CH₄',
            atoms: [
                { el: 'C', pos: [0, 0, 0], color: '#333333', size: 0.5, electrons: 4 },
                { el: 'H', pos: [0, 1, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0.94, -0.33, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [-0.47, -0.33, 0.81], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [-0.47, -0.33, -0.81], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
            doubletsNonLiants: [],
            bondsCount: 4,
            doubletsCount: 0,
            angle: '109.5°',
            geometry: 'Tétraédrique'
        },
        HCl: {
            name: 'Chlorure d\'hydrogène',
            formula: 'HCl',
            atoms: [
                { el: 'Cl', pos: [0, 0, 0], color: '#22C55E', size: 0.55, electrons: 7 },
                { el: 'H', pos: [0.9, 0, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1]],
            doubletsNonLiants: [{ atom: 0, count: 3 }],
            bondsCount: 1,
            doubletsCount: 3,
            angle: '-',
            geometry: 'Linéaire'
        },
        O2: {
            name: 'Dioxygène',
            formula: 'O₂',
            atoms: [
                { el: 'O', pos: [-0.6, 0, 0], color: '#EF4444', size: 0.5, electrons: 6 },
                { el: 'O', pos: [0.6, 0, 0], color: '#EF4444', size: 0.5, electrons: 6 },
            ],
            bonds: [[0, 1, 2]],
            doubletsNonLiants: [{ atom: 0, count: 2 }, { atom: 1, count: 2 }],
            bondsCount: 2,
            doubletsCount: 4,
            angle: '-',
            geometry: 'Linéaire'
        }
    };

    // Missions quiz
    const missions = useMemo(() => [
        { id: 1, title: '💧 Molécule de la Vie', question: 'Combien de doublets non liants sur O dans H₂O ?', answer: 2, molecule: 'H2O', points: 100 },
        { id: 2, title: '🌿 Gaz Carbonique', question: 'Quelle est la géométrie de CO₂ ?', answer: 'Linéaire', molecule: 'CO2', points: 120 },
        { id: 3, title: '🔥 Combustible', question: 'Quel est l\'angle de liaison dans CH₄ ?', answer: '109.5°', molecule: 'CH4', points: 150 },
        { id: 4, title: '💨 Ammoniac', question: 'Combien de liaisons covalentes dans NH₃ ?', answer: 3, molecule: 'NH3', points: 130 },
        { id: 5, title: '🧪 Expert Lewis', question: 'Combien de doublets non liants sur Cl dans HCl ?', answer: 3, molecule: 'HCl', points: 180 },
    ], []);

    const mol = molecules[molecule];
    const current = molecules[molecule];
    const groupRef = useRef();

    // Timer
    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    // Init mission
    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(25);
            setMolecule(missions[0].molecule);
            setQuizAnswer(null);
        }
    }, [phase, mission, missions]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    const checkAnswer = (answer) => {
        setQuizAnswer(answer);
        if (answer === mission.answer || String(answer) === String(mission.answer)) {
            setScore(prev => prev + mission.points);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(25);
            setMolecule(missions[nextIdx].molecule);
            setQuizAnswer(null);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    // Generate options for quiz
    const getOptions = () => {
        if (!mission) return [];
        if (typeof mission.answer === 'number') {
            return [0, 1, 2, 3, 4].filter(n => n >= 0);
        }
        return ['Linéaire', 'Coudée', 'Tétraédrique', 'Pyramidale'];
    };

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color="#60A5FA" />

            <SuccessOverlay show={showSuccess} message={mission?.title || "Bravo !"} points={mission?.points || 100} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />

            <Float speed={1} floatIntensity={0.2}>
                <Text position={[0, 3.5, 0]} fontSize={0.4} color="white">🔬 STRUCTURE DE LEWIS</Text>
                <Text position={[0, 3, 0]} fontSize={0.25} color="#FCD34D">{mol.name} ({mol.formula})</Text>
            </Float>

            <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
                {/* Atomes */}
                {current.atoms.map((atom, i) => (
                    <group key={i} position={atom.pos}>
                        <mesh>
                            <sphereGeometry args={[atom.size, 32, 32]} />
                            <meshStandardMaterial color={atom.color} roughness={0.3} metalness={0.2} />
                        </mesh>
                        {showLabels && (
                            <Text position={[0, atom.size + 0.2, 0]} fontSize={0.25} color="white" outlineWidth={0.02} outlineColor="black">{atom.el}</Text>
                        )}
                    </group>
                ))}

                {/* Liaisons */}
                {current.bonds.map((bond, i) => {
                    const a1 = current.atoms[bond[0]];
                    const a2 = current.atoms[bond[1]];
                    const multiplicity = bond[2] || 1;
                    const start = new THREE.Vector3(...a1.pos);
                    const end = new THREE.Vector3(...a2.pos);
                    const mid = start.clone().add(end).multiplyScalar(0.5);
                    const dir = end.clone().sub(start);
                    const len = dir.length();

                    return (
                        <group key={i}>
                            {[...Array(multiplicity)].map((_, j) => {
                                const offset = (j - (multiplicity - 1) / 2) * 0.12;
                                return (
                                    <mesh
                                        key={j}
                                        position={[mid.x, mid.y + offset, mid.z]}
                                        rotation={[0, 0, Math.atan2(dir.y, dir.x) - Math.PI / 2]}
                                    >
                                        <cylinderGeometry args={[0.04, 0.04, len * 0.6, 8]} />
                                        <meshStandardMaterial color="#888" metalness={0.3} />
                                    </mesh>
                                );
                            })}
                        </group>
                    );
                })}

                {/* Doublets non liants */}
                {mol.doubletsNonLiants && mol.doubletsNonLiants.map((dnl, i) => {
                    const atom = mol.atoms[dnl.atom];
                    return [...Array(dnl.count)].map((_, j) => {
                        const angle = (j / dnl.count) * Math.PI * 2 + Math.PI / 4;
                        const offset = [Math.cos(angle) * 0.7, Math.sin(angle) * 0.7 + 0.3, 0];
                        return (
                            <group key={`${i}-${j}`} position={[atom.pos[0] + offset[0], atom.pos[1] + offset[1], atom.pos[2]]}>
                                <mesh position={[-0.08, 0, 0]}>
                                    <sphereGeometry args={[0.06]} />
                                    <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.6} />
                                </mesh>
                                <mesh position={[0.08, 0, 0]}>
                                    <sphereGeometry args={[0.06]} />
                                    <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.6} />
                                </mesh>
                            </group>
                        );
                    });
                })}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Atelier Lewis" className="w-[380px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <GradeBadge score={score} />
                                <ChallengeTimer timeLeft={timeLeft} maxTime={25} />
                            </div>
                            <MissionObjective objective={mission.question} icon="❓" />

                            {/* Quiz options */}
                            <div className="grid grid-cols-3 gap-2">
                                {getOptions().map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => checkAnswer(opt)}
                                        disabled={quizAnswer !== null}
                                        className={`py-3 rounded-xl font-bold text-sm transition-all ${quizAnswer === opt
                                                ? quizAnswer === mission.answer || String(quizAnswer) === String(mission.answer)
                                                    ? 'bg-green-600'
                                                    : 'bg-red-600'
                                                : 'bg-gray-700 hover:bg-gray-600'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">LEWIS</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    <div className="space-y-4">
                        {/* Sélecteur molécule */}
                        <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Molécule</div>
                            <div className="grid grid-cols-6 gap-1">
                                {Object.keys(molecules).map(key => (
                                    <button
                                        key={key}
                                        onClick={() => setMolecule(key)}
                                        className={`py-2 rounded text-[10px] font-bold transition-all ${molecule === key
                                            ? 'bg-blue-600 shadow-lg shadow-blue-900/30'
                                            : 'bg-gray-800 hover:bg-gray-700'}`}
                                    >
                                        {molecules[key].formula}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info molécule */}
                        <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-4 rounded-xl border border-blue-500/20">
                            <div className="text-center mb-3">
                                <div className="text-2xl font-black text-white">{mol.formula}</div>
                                <div className="text-sm text-gray-400">{mol.name}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-black/30 p-2 rounded">
                                    <div className="text-gray-500 uppercase text-[9px]">Géométrie</div>
                                    <div className="font-bold text-blue-300">{mol.geometry}</div>
                                </div>
                                <div className="bg-black/30 p-2 rounded">
                                    <div className="text-gray-500 uppercase text-[9px]">Angle</div>
                                    <div className="font-bold text-cyan-300">{mol.angle}</div>
                                </div>
                                <div className="bg-black/30 p-2 rounded">
                                    <div className="text-gray-500 uppercase text-[9px]">Liaisons</div>
                                    <div className="font-bold text-green-300">{mol.bondsCount}</div>
                                </div>
                                <div className="bg-black/30 p-2 rounded">
                                    <div className="text-gray-500 uppercase text-[9px]">Doublets NL</div>
                                    <div className="font-bold text-yellow-300">{mol.doubletsCount}</div>
                                </div>
                            </div>
                        </div>

                        {/* Légende & Controls */}
                        <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                                    <span className="text-gray-400">Liaison</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <span className="text-gray-400">Doublet NL</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowLabels(!showLabels)}
                                className={`px-3 py-1 rounded text-[10px] ${showLabels ? 'bg-blue-600' : 'bg-gray-700'}`}
                            >
                                {showLabels ? '👁 Labels ON' : '👁 Labels OFF'}
                            </button>
                        </div>

                        <XPBar current={score % 500} nextLevel={500} />
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 6. TESTS D'IONS AMÉLIORÉ (Gamifié)
// =========================================================
export function ChemicalTestsGamified() {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [selectedReactif, setSelectedReactif] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const solutions = [
        { id: 'A', label: 'Solution A', ions: ['Cu2+'], color: '#BFDBFE' },
        { id: 'B', label: 'Solution B', ions: ['Fe3+'], color: '#FEF3C7' },
        { id: 'C', label: 'Solution C', ions: ['Cl-'], color: '#F3F4F6' },
        { id: 'D', label: 'Solution D', ions: ['Fe2+'], color: '#D1FAE5' },
    ];

    const reactifs = [
        { id: 'NaOH', name: 'Soude (NaOH)', tests: { 'Cu2+': { precipitate: 'BLEU', color: '#3B82F6' }, 'Fe2+': { precipitate: 'VERT', color: '#22C55E' }, 'Fe3+': { precipitate: 'ROUILLE', color: '#92400E' } } },
        { id: 'AgNO3', name: 'Nitrate d\'Argent', tests: { 'Cl-': { precipitate: 'BLANC (noircit)', color: '#FFFFFF' } } },
        { id: 'BaCl2', name: 'Chlorure de Baryum', tests: { 'SO42-': { precipitate: 'BLANC', color: '#FFFFFF' } } },
    ];

    const runTest = () => {
        if (!selectedSolution || !selectedReactif) return;

        const solution = solutions.find(s => s.id === selectedSolution);
        const reactif = reactifs.find(r => r.id === selectedReactif);

        let found = null;
        for (const ion of solution.ions) {
            if (reactif.tests[ion]) {
                found = { ion, ...reactif.tests[ion] };
                break;
            }
        }

        setResult(found || { precipitate: 'AUCUN', color: null });
    };

    const identifyIon = (ion) => {
        const solution = solutions.find(s => s.id === selectedSolution);
        if (solution && solution.ions.includes(ion)) {
            setScore(s => s + 1);
            setConfetti(true);
            setTimeout(() => setShowSuccess(true), 500);
        } else {
            setResult({ precipitate: 'ERREUR ! Mauvaise identification.', color: '#EF4444' });
        }
    };

    const reset = () => {
        setSelectedSolution(null);
        setSelectedReactif(null);
        setResult(null);
        setShowSuccess(false);
        setConfetti(false);
    };

    return (
        <group>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} />

            <ConfettiExplosion trigger={confetti} />

            <Text position={[0, 3.5, 0]} fontSize={0.4} color="white">🧪 IDENTIFICATION DES IONS</Text>

            {/* Tubes à essai */}
            <group position={[-3, 0, 0]}>
                {solutions.map((sol, i) => (
                    <group key={sol.id} position={[i * 1.5, 0, 0]}>
                        <mesh onClick={() => setSelectedSolution(sol.id)}>
                            <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
                            <meshPhysicalMaterial
                                color={sol.color}
                                transmission={0.7}
                                transparent
                                opacity={selectedSolution === sol.id ? 0.9 : 0.5}
                            />
                        </mesh>
                        <Text position={[0, -1.5, 0]} fontSize={0.2} color="white">{sol.label}</Text>
                        {selectedSolution === sol.id && (
                            <mesh position={[0, 1.3, 0]}>
                                <ringGeometry args={[0.35, 0.4, 16]} />
                                <meshBasicMaterial color="#FACC15" side={THREE.DoubleSide} />
                            </mesh>
                        )}
                    </group>
                ))}
            </group>

            {/* Zone résultat */}
            {result && (
                <group position={[3, 0, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 2.5, 16]} />
                        <meshPhysicalMaterial color="white" transmission={0.8} transparent opacity={0.4} />
                    </mesh>
                    {result.color && (
                        <mesh position={[0, -0.5, 0]}>
                            <dodecahedronGeometry args={[0.4]} />
                            <meshStandardMaterial color={result.color} />
                        </mesh>
                    )}
                    <Text position={[0, -2, 0]} fontSize={0.25} color={result.color || 'gray'}>
                        {result.precipitate}
                    </Text>
                </group>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Tests Chimiques" className="w-[340px]" defaultPosition="bottom-center">
                    <div className="space-y-4 text-white">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Score</span>
                            <span className="text-2xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-1">1. Sélectionne une solution (clic sur tube)</div>
                            <div className="bg-gray-800 p-2 rounded text-center">
                                {selectedSolution ? `Solution ${selectedSolution} sélectionnée` : 'Aucune solution'}
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-1">2. Choisis un réactif</div>
                            <div className="grid grid-cols-3 gap-1">
                                {reactifs.map(r => (
                                    <button
                                        key={r.id}
                                        onClick={() => setSelectedReactif(r.id)}
                                        className={`py-2 rounded text-xs ${selectedReactif === r.id ? 'bg-blue-600' : 'bg-gray-700'}`}
                                    >
                                        {r.id}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={runTest}
                            disabled={!selectedSolution || !selectedReactif}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold disabled:opacity-50"
                        >
                            🧫 Effectuer le test
                        </button>

                        {result && result.color && (
                            <div className="space-y-2">
                                <div className="text-xs text-gray-400">3. Quel ion est présent ?</div>
                                <div className="grid grid-cols-4 gap-1">
                                    {['Cu2+', 'Fe2+', 'Fe3+', 'Cl-'].map(ion => (
                                        <button
                                            key={ion}
                                            onClick={() => identifyIon(ion)}
                                            className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                                        >
                                            {ion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button onClick={reset} className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm">
                            🔄 Nouveau test
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <SuccessOverlay
                        show={showSuccess}
                        message="Excellent ! Tu as correctement identifié l'ion grâce au test caractéristique !"
                        onClose={reset}
                    />
                </Html>
            )}
        </group>
    );
}

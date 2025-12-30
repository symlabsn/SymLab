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
    const [phase, setPhase] = useState('explore'); // explore, challenge
    const [targetCf, setTargetCf] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45);

    const tolerance = 0.02;
    const isCorrect = targetCf && Math.abs(Cf - targetCf) < tolerance;

    const startChallenge = () => {
        setPhase('challenge');
        const targets = [0.1, 0.25, 0.5, 0.75, 1.0];
        const newTarget = targets[Math.floor(Math.random() * targets.length)];
        setTargetCf(newTarget);
        setScore(0);
        setTimeLeft(45);
        setShowSuccess(false);
    };

    const checkAnswer = () => {
        if (isCorrect) {
            setScore(s => s + 100);
            setShowSuccess(true);
        }
    };

    useEffect(() => {
        if (phase === 'challenge' && timeLeft > 0 && !showSuccess) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [phase, timeLeft, showSuccess]);

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
                <DraggableHtmlPanel title="🧪 Préparateur Labo" className="w-[380px] border-cyan-500/30 text-white" defaultPosition="bottom-center">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => p === 'challenge' ? startChallenge() : setPhase('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest leading-tight">Expertise Solution</span>
                            <span className="text-lg font-black text-white">{phase === 'explore' ? 'Exploration Dilution' : 'Défi Précision 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'challenge' && targetCf && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={`Préparer une solution de ${targetCf.toFixed(2)} mol/L.`} icon="🎯" />
                        </div>
                    )}

                    {phase === 'explore' ? (
                        <>
                            <MissionObjective objective="Apprenez à diluer une solution en ajustant Ci, Vi et Vf." icon="💧" />
                            <div className="space-y-5">
                                <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-[10px] text-blue-300 font-black uppercase tracking-widest">Concentration Mère (Ci)</label>
                                        <span className="text-xs font-mono font-bold text-blue-400">{Ci.toFixed(1)} mol/L</span>
                                    </div>
                                    <input
                                        type="range" min="0.5" max="3.0" step="0.1"
                                        value={Ci} onChange={(e) => setCi(Number(e.target.value))}
                                        className="w-full h-1.5 bg-blue-900/50 rounded-full accent-blue-500 cursor-pointer"
                                    />
                                </div>

                                <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-[10px] text-indigo-300 font-black uppercase tracking-widest">Volume Prélevé (Vi)</label>
                                        <span className="text-xs font-mono font-bold text-indigo-400">{Vi} mL</span>
                                    </div>
                                    <input
                                        type="range" min="10" max="100" step="5"
                                        value={Vi} onChange={(e) => setVi(Number(e.target.value))}
                                        className="w-full h-1.5 bg-indigo-900/50 rounded-full accent-indigo-500 cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <label className="text-[10px] text-gray-500 font-black uppercase mb-2 block tracking-widest">Volume de la Fiole (Vf)</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[100, 200, 250, 500].map(v => (
                                            <button
                                                key={v}
                                                onClick={() => setVf(v)}
                                                className={`py-2 rounded-xl text-[10px] font-black transition-all border-2 ${Vf === v ? 'bg-cyan-600 border-white shadow-lg' : 'bg-gray-800 border-transparent hover:bg-gray-700'}`}
                                            >
                                                {v} mL
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 text-center relative overflow-hidden group">
                                    <div className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-widest">Concentration Finale Estimée</div>
                                    <div className="text-3xl font-black font-mono text-white group-hover:scale-105 transition-transform">
                                        Cf = {Cf.toFixed(3)} <span className="text-sm text-cyan-400">mol/L</span>
                                    </div>
                                    <div className="text-[8px] font-mono text-gray-600 mt-1 uppercase">Formule : (Ci × Vi) / Vf</div>
                                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-4 animate-in slide-in-from-right duration-300">
                            <div className="bg-gray-900/50 p-4 rounded-2xl border border-white/5 space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Ajustement du Prélèvement (Vi)</label>
                                    <div className="flex items-center gap-4">
                                        <input type="range" min="10" max="100" step="1" value={Vi} onChange={(e) => setVi(Number(e.target.value))} className="flex-1 h-2 bg-indigo-900/50 rounded-full accent-indigo-500" />
                                        <span className="text-sm font-mono font-black text-indigo-400 w-12 text-right">{Vi} mL</span>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Choix de la Verrerie (Vf)</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[100, 200, 250, 500].map(v => (
                                            <button key={v} onClick={() => setVf(v)}
                                                className={`py-2 rounded-lg text-[9px] font-black border-2 transition-all ${Vf === v ? 'bg-emerald-600 border-white' : 'bg-gray-800 border-transparent hover:bg-gray-750'}`}>
                                                {v} mL
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-white/5">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] text-gray-500 font-bold">VALEUR ACTUELLE</span>
                                        <span className={`text-xs font-mono font-black ${Math.abs(Cf - (targetCf || 0)) < tolerance ? 'text-green-400' : 'text-gray-400'}`}>
                                            {Cf.toFixed(3)} mol/L
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ${Math.abs(Cf - (targetCf || 0)) < tolerance ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-blue-500'}`}
                                            style={{ width: `${Math.min(100, (Cf / (targetCf || 1)) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button onClick={checkAnswer} className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-2xl font-black text-lg shadow-xl shadow-emerald-900/20 transform transition-all active:scale-95 group">
                                <span className="flex items-center justify-center gap-2 text-white">
                                    VALIDER LA PRÉPARATION <span className="group-hover:translate-x-1 transition-transform">➡️</span>
                                </span>
                            </button>
                        </div>
                    )}
                    <XPBar current={score % 100} nextLevel={100} />
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
    const [phase, setPhase] = useState('explore'); // explore, challenge
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [targetVeq, setTargetVeq] = useState(null); // Pour le challenge
    const [timeLeft, setTimeLeft] = useState(60);

    // Calcul du pH (simplifié)
    // Équivalence quand nAcide = nBase => Veq = (Ca * Va) / Cb
    const Veq = (concentrationAcide * volumeAcide) / concentrationBase;

    // Challenge Logic
    const startChallenge = () => {
        setPhase('challenge');
        // Randomize Acid concentration between 0.05 and 0.15
        const newCa = 0.05 + Math.random() * 0.1;
        setConcentrationAcide(newCa);
        setVolumeBase(0);
        setTargetVeq((newCa * volumeAcide) / concentrationBase);
        setScore(0);
        setTimeLeft(60);
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

    useEffect(() => {
        if (phase === 'challenge' && timeLeft > 0 && !showSuccess) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [phase, timeLeft, showSuccess]);

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
                <DraggableHtmlPanel title="⚗️ Expert en Titrage" className="w-[380px] border-emerald-500/30 text-white" defaultPosition="bottom-right">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => p === 'challenge' ? startChallenge() : setPhase('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest leading-tight">Analyse Quantitative</span>
                            <span className="text-lg font-black text-white">{phase === 'explore' ? 'Titrage Acide-Base' : 'Mission Neutralisation 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'challenge' && targetVeq && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective="Identifiez le volume d'équivalence (Veq) de la solution inconnue." icon="🔍" />
                        </div>
                    )}

                    {phase === 'explore' ? (
                        <>
                            <MissionObjective objective="Observez le virage de l'indicateur coloré lors de l'ajout de soude." icon="🧪" />
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={addDrop}
                                        disabled={volumeBase >= 40}
                                        className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-sm shadow-lg shadow-emerald-900/20 transform active:scale-95 transition-all disabled:opacity-50"
                                    >
                                        💧 VERSER GOUTTE (+0.5mL)
                                    </button>
                                    <button
                                        onClick={() => setVolumeBase(0)}
                                        className="p-4 bg-gray-800 hover:bg-gray-700 rounded-2xl border border-white/5 transition-colors"
                                    >
                                        🔄
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">NaOH Versé</div>
                                        <div className="text-2xl font-black font-mono text-emerald-400">{volumeBase.toFixed(1)} <span className="text-[10px] text-gray-600 uppercase">mL</span></div>
                                    </div>
                                    <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Théorique Veq</div>
                                        <div className="text-2xl font-black font-mono text-white">{Veq.toFixed(1)} <span className="text-[10px] text-gray-600 uppercase">mL</span></div>
                                    </div>
                                </div>

                                {/* Modern pH Meter */}
                                <div className="bg-gray-950 p-4 rounded-2xl border border-white/10 shadow-inner">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Indicateur pH Digital</div>
                                        <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${pH < 6 ? 'bg-yellow-500/20 text-yellow-500' : pH > 8 ? 'bg-blue-500/20 text-blue-500' : 'bg-green-500/20 text-green-500'}`}>
                                            {pH < 6 ? 'Milieu Acide' : pH > 8 ? 'Milieu Basique' : 'Neutralité'}
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center gap-4 mb-4">
                                        <div className="text-5xl font-black font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                            {pH.toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-cyan-400 to-blue-600 opacity-60" />
                                        <div
                                            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white] transition-all duration-300"
                                            style={{ left: `${(pH / 14) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-4 animate-in slide-in-from-right duration-300">
                            <div className="bg-gray-900/50 p-4 rounded-2xl border border-white/5 space-y-4 text-center">
                                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Concentration Acide Inconnue</div>
                                <div className="text-xl font-black text-white">Trouvez le point d'équivalence !</div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={addDrop}
                                        disabled={volumeBase >= 40}
                                        className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-sm shadow-lg shadow-emerald-900/20"
                                    >
                                        💧 DOSEUR GOUTTE (+0.5mL)
                                    </button>
                                </div>

                                <div className="text-3xl font-black font-mono bg-black/40 p-4 rounded-xl border border-white/5 text-white text-center">
                                    {volumeBase.toFixed(1)} <span className="text-xs text-emerald-500">mL</span>
                                </div>
                            </div>

                            <button onClick={checkChallenge} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 transform transition-all active:scale-95 group">
                                <span className="flex items-center justify-center gap-2 text-white">
                                    STOPPER À L'ÉQUIVALENCE <span className="group-hover:translate-x-1 transition-transform">🎯</span>
                                </span>
                            </button>
                        </div>
                    )}
                    <XPBar current={score % 100} nextLevel={100} />
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 3. DISSOLUTION (Animation particules + Missions Gamifiées)
// =========================================================

export function DissolutionSimulation() {
    const [soluteType, setSoluteType] = useState('NaCl');
    const [isDissolving, setIsDissolving] = useState(false);
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);
    const [ions, setIons] = useState([]);

    const solutes = {
        NaCl: { name: 'Chlorure de Sodium', formula: 'NaCl → Na⁺ + Cl⁻', color: '#FFFFFF', ionColors: ['#9333EA', '#22C55E'], cation: 'Na⁺', anion: 'Cl⁻', info: 'Un cristal ionique blanc, soluble dans l\'eau.' },
        CuSO4: { name: 'Sulfate de Cuivre', formula: 'CuSO₄ → Cu²⁺ + SO₄²⁻', color: '#3B82F6', ionColors: ['#3B82F6', '#F97316'], cation: 'Cu²⁺', anion: 'SO₄²⁻', info: 'Cristaux bleus. Les ions Cu²⁺ donnent la couleur à la solution.' },
        KMnO4: { name: 'Permanganate de Potter', formula: 'KMnO₄ → K⁺ + MnO₄⁻', color: '#A855F7', ionColors: ['#A855F7', '#EC4899'], cation: 'K⁺', anion: 'MnO₄⁻', info: 'Solide violet foncé, puissant oxydant.' },
        FeCl3: { name: 'Chlorure de Fer III', formula: 'FeCl₃ → Fe³⁺ + 3Cl⁻', color: '#F59E0B', ionColors: ['#F59E0B', '#22C55E'], cation: 'Fe³⁺', anion: 'Cl⁻', info: 'Solution orange/brune.' },
        AgNO3: { name: 'Nitrate d\'Argent', formula: 'AgNO₃ → Ag⁺ + NO₃⁻', color: '#E5E7EB', ionColors: ['#9CA3AF', '#EF4444'], cation: 'Ag⁺', anion: 'NO₃⁻', info: 'Sert à identifier les ions chlorures.' }
    };

    const current = solutes[soluteType];

    const missions = useMemo(() => [
        { id: 1, title: 'Cristallisation Inversée', objective: 'Dissous les ions du Sel de table (NaCl).', targetSolute: 'NaCl', points: 300 },
        { id: 2, title: 'Bleu de Prusse', objective: 'Prépare une solution de Sulfate de Cuivre.', targetSolute: 'CuSO4', points: 350 },
        { id: 3, title: 'Éclat Impérial', objective: 'Extraire les ions du Permanganate.', targetSolute: 'KMnO4', points: 400 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(45);
            setScore(0);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const startDissolution = () => {
        setIsDissolving(true);
        setProgress(0);
        const newIons = [];
        for (let i = 0; i < 40; i++) {
            newIons.push({
                id: i,
                type: i % 2,
                startX: (Math.random() - 0.5) * 0.4,
                startY: 1.5,
                targetX: (Math.random() - 0.5) * 2.2,
                targetY: -1.5 + Math.random() * 2.5,
                targetZ: (Math.random() - 0.5) * 2.2,
                delay: Math.random() * 1.5,
                speed: 0.5 + Math.random() * 0.5
            });
        }
        setIons(newIons);
    };

    useFrame((state, delta) => {
        if (isDissolving && progress < 1) {
            setProgress(p => Math.min(1, p + delta * 0.4));
        }
    });

    useEffect(() => {
        if (phase === 'mission' && mission && progress >= 1 && soluteType === mission.targetSolute && !showSuccess) {
            setScore(prev => prev + mission.points);
            setShowSuccess(true);
        }
    }, [progress, phase, mission, soluteType, showSuccess]);

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(45);
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
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color={current.color} />

            {/* Bécher Premium */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.6, 1.5, 4.2, 48, 1, true]} />
                <meshPhysicalMaterial
                    color="#fff"
                    transmission={0.95}
                    thickness={0.5}
                    roughness={0.05}
                    transparent
                    opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Liquide */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1.5, 1.4, 3, 32]} />
                <meshStandardMaterial
                    color={current.color}
                    transparent
                    opacity={0.1 + progress * 0.4}
                    roughness={0.1}
                    metalness={0.2}
                />
            </mesh>

            {/* Soluté non dissous */}
            {!isDissolving && (
                <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0, 1.5, 0]}>
                        <boxGeometry args={[0.6, 0.6, 0.6]} />
                        <meshStandardMaterial color={current.color} metalness={0.5} roughness={0.2} />
                    </mesh>
                </Float>
            )}

            {/* Particles d'ions */}
            {isDissolving && ions.map((ion) => {
                const t = Math.min(1, Math.max(0, (progress - ion.delay * 0.2) * ion.speed * 2));
                const x = ion.startX + (ion.targetX - ion.startX) * t;
                const y = ion.startY + (ion.targetY - ion.startY) * t;
                const z = (ion.targetZ) * t;
                return (
                    <mesh key={ion.id} position={[x, y, z]}>
                        <sphereGeometry args={[0.08]} />
                        <meshStandardMaterial
                            color={current.ionColors[ion.type]}
                            emissive={current.ionColors[ion.type]}
                            emissiveIntensity={1}
                        />
                    </mesh>
                );
            })}

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Station de Dissolution" className="w-[400px] border-purple-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-purple-500 font-black uppercase tracking-widest leading-tight">Cristallographie & Solubilité</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Analyse Ionique' : 'Défi Dissolution 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🔬" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="grid grid-cols-5 gap-1.5">
                            {Object.keys(solutes).map(key => (
                                <button
                                    key={key}
                                    onClick={() => { setSoluteType(key); setIsDissolving(false); setProgress(0); setIons([]); }}
                                    className={`py-2 rounded-lg text-[10px] font-black transition-all border-b-4 active:border-b-0 active:translate-y-1 ${soluteType === key
                                        ? 'bg-purple-600 border-purple-800 text-white shadow-lg'
                                        : 'bg-gray-800 border-gray-900 text-gray-400 hover:bg-gray-700'}`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shadow-inner">
                                    <div className="w-6 h-6 rounded-sm rotate-45" style={{ backgroundColor: current.color, boxShadow: `0 0 20px ${current.color}88` }} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-black text-white uppercase tracking-tight">{current.name}</h3>
                                    <p className="text-[10px] text-gray-500 font-medium italic mt-0.5">{current.info}</p>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-2">
                                <div className="p-2.5 bg-black/40 rounded-xl border border-white/5">
                                    <span className="text-[9px] text-gray-500 font-black tracking-widest uppercase block mb-1">Cation (+)</span>
                                    <span className="text-xl font-black" style={{ color: current.ionColors[0] }}>{current.cation}</span>
                                </div>
                                <div className="p-2.5 bg-black/40 rounded-xl border border-white/5">
                                    <span className="text-[9px] text-gray-500 font-black tracking-widest uppercase block mb-1">Anion (-)</span>
                                    <span className="text-xl font-black" style={{ color: current.ionColors[1] }}>{current.anion}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 bg-purple-500/5 rounded-xl border border-purple-500/10 text-center">
                            <p className="text-[10px] font-black text-purple-400 mb-1 uppercase tracking-widest">Équation de Dissolution</p>
                            <p className="font-mono text-xs text-white bg-black/30 py-2 rounded-lg border border-white/5">{current.formula}</p>
                        </div>

                        <button
                            onClick={startDissolution}
                            disabled={isDissolving && progress < 1}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 ${isDissolving && progress < 1
                                ? 'bg-gray-800 text-gray-600 cursor-not-allowed border border-white/5'
                                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-900/40 hover:from-purple-500 hover:to-indigo-500'}`}
                        >
                            {isDissolving && progress < 1 ? `Dissolution... ${Math.round(progress * 100)}%` : 'Démarrer la Dissolution 🔄'}
                        </button>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Solution Homogène !"} points={mission?.points || 300} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
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
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [phase, timeLeft, showSuccess]);

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
                <DraggableHtmlPanel title="🚀 Contrôle de Propulsion" className="w-[400px] border-red-500/30 text-white" defaultPosition="bottom-right">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest leading-tight">Programme Spatial SymLab</span>
                            <span className="text-lg font-black text-white">{phase === 'explore' ? 'Atelier Équilibrage' : 'Mission Lancement 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={`Équilibrer l'équation pour le carburant : ${eq.name}`} icon="🚀" />
                        </div>
                    )}

                    <div className="bg-gray-950 p-4 rounded-2xl border border-white/10 mb-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <span className="text-[10px] font-black text-blue-400">EQ</span>
                            </div>
                        </div>
                        <div className="text-[10px] text-gray-500 font-black uppercase mb-1 tracking-widest">Équation de Réaction</div>
                        <div className="text-xl font-bold text-white flex justify-center items-center gap-2">
                            {eq.reactants.map((mol, i) => (
                                <span key={i} className="flex items-center">
                                    <span className="text-blue-400 font-black mr-1">{coefficients[i] > 1 ? coefficients[i] : ''}</span>
                                    <span>{mol.formula}</span>
                                    {i < eq.reactants.length - 1 && <span className="mx-1 text-gray-500">+</span>}
                                </span>
                            ))}
                            <span className="mx-2 text-red-500 animate-pulse">→</span>
                            {eq.products.map((mol, i) => (
                                <span key={i} className="flex items-center">
                                    <span className="text-emerald-400 font-black mr-1">{coefficients[eq.reactants.length + i] > 1 ? coefficients[eq.reactants.length + i] : ''}</span>
                                    <span>{mol.formula}</span>
                                    {i < eq.products.length - 1 && <span className="mx-1 text-gray-500">+</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contrôles coefficients */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                        {[...eq.reactants, ...eq.products].map((mol, i) => (
                            <div key={i} className="flex flex-col gap-2 p-2 bg-gray-900/50 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all group/coef">
                                <div className="text-[9px] text-gray-500 font-black text-center uppercase group-hover/coef:text-blue-400 transition-colors">{mol.formula}</div>
                                <div className="flex items-center justify-between bg-black/40 rounded-lg p-1">
                                    <button onClick={() => updateCoef(i, -1)} className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-red-900/40 rounded text-[10px] transition-colors border border-white/5">－</button>
                                    <span className="font-black text-lg font-mono text-white">{coefficients[i] || 1}</span>
                                    <button onClick={() => updateCoef(i, 1)} className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-emerald-900/40 rounded text-[10px] transition-colors border border-white/5">＋</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {rocketState === 'idle' ? (
                            <button
                                onClick={launchRocket}
                                className={`w-full py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-3 ${isBalanced
                                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-900/20'
                                    : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 shadow-orange-900/20'}`}
                            >
                                <span className="animate-bounce">🚀</span> {isBalanced ? 'LANCER LA FUSÉE' : 'TENTATIVE DE LANCEMENT'}
                            </button>
                        ) : (
                            <div className="bg-gray-900/80 p-4 rounded-2xl border border-white/5 text-center">
                                <div className="text-sm font-black text-white animate-pulse uppercase tracking-widest">
                                    {rocketState === 'countdown' ? 'Compte à rebours activé...' : rocketState === 'launch' ? 'En phase de décollage !' : 'Calculs erronés - Crash imminent !'}
                                </div>
                            </div>
                        )}

                        <XPBar current={score % 300} nextLevel={300} />
                    </div>

                    <div className="mt-4 p-3 bg-black/40 rounded-xl border border-white/5">
                        <div className="flex justify-between items-center text-[9px] text-gray-500 font-black uppercase tracking-widest mb-2">
                            <span>Bilan Atomique</span>
                            <span className={isBalanced ? 'text-emerald-500' : 'text-red-500'}>{isBalanced ? '✓ Équilibré' : '✗ Non Équilibré'}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <div className="text-[8px] text-gray-600 font-bold uppercase">Reactifs</div>
                                {Object.entries(leftAtoms).map(([atom, count]) => (
                                    <div key={atom} className="flex justify-between text-[10px] font-mono">
                                        <span className="text-blue-400">{atom}:</span>
                                        <span className="text-white font-bold">{count}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-1">
                                <div className="text-[8px] text-gray-600 font-bold uppercase">Produits</div>
                                {Object.entries(rightAtoms).map(([atom, count]) => (
                                    <div key={atom} className="flex justify-between text-[10px] font-mono">
                                        <span className="text-emerald-400">{atom}:</span>
                                        <span className="text-white font-bold">{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                <DraggableHtmlPanel title="🔬 Atelier de Lewis" className="w-[380px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-tight">Architecture Moléculaire</span>
                            <span className="text-lg font-black text-white">{phase === 'explore' ? 'Visualisation Lewis' : 'Défi Structure 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-3">
                            <ChallengeTimer timeLeft={timeLeft} maxTime={25} />
                            <MissionObjective objective={mission.question} icon="❓" />

                            <div className="grid grid-cols-2 gap-2 mt-4">
                                {getOptions().map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => checkAnswer(opt)}
                                        disabled={quizAnswer !== null}
                                        className={`py-3 rounded-xl font-black text-xs transition-all border-2 ${quizAnswer === opt
                                            ? quizAnswer === mission.answer || String(quizAnswer) === String(mission.answer)
                                                ? 'bg-emerald-600 border-white shadow-emerald-500/50'
                                                : 'bg-red-600 border-white shadow-red-500/50'
                                            : 'bg-gray-800 border-transparent hover:border-blue-500/50 hover:bg-gray-700'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {phase === 'explore' ? (
                        <>
                            <MissionObjective objective="Explorez les différentes molécules et leurs structures électroniques." icon="💠" />
                            <div className="space-y-4">
                                <div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">Choisir une Molécule</div>
                                    <div className="grid grid-cols-6 gap-1">
                                        {Object.keys(molecules).map(key => (
                                            <button
                                                key={key}
                                                onClick={() => setMolecule(key)}
                                                className={`py-2 rounded-lg text-[10px] font-black transition-all border ${molecule === key
                                                    ? 'bg-blue-600 border-white shadow-lg shadow-blue-900/40 text-white'
                                                    : 'bg-gray-800 border-white/5 text-gray-400 hover:bg-gray-750'}`}
                                            >
                                                {molecules[key].formula}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                                        <div className="text-4xl font-black text-blue-500">{mol.formula}</div>
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="text-xl font-black text-white uppercase tracking-tight">{mol.name}</div>
                                        <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Fiche Technique</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-center">
                                        {[
                                            { label: 'Géométrie', value: mol.geometry, color: 'text-blue-300' },
                                            { label: 'Angle', value: mol.angle, color: 'text-cyan-300' },
                                            { label: 'Liaisons', value: mol.bondsCount, color: 'text-emerald-300' },
                                            { label: 'Doublets NL', value: mol.doubletsCount, color: 'text-yellow-300' }
                                        ].map((stat, idx) => (
                                            <div key={idx} className="bg-white/5 p-2 rounded-xl border border-white/5">
                                                <div className="text-[8px] text-gray-500 font-black uppercase mb-0.5">{stat.label}</div>
                                                <div className={`font-black text-sm ${stat.color}`}>{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={() => setShowLabels(!showLabels)}
                                            className={`px-6 py-2 rounded-full text-[10px] font-black transition-all border ${showLabels ? 'bg-blue-600 border-white shadow-lg' : 'bg-gray-800 border-white/10 text-gray-400'}`}
                                        >
                                            {showLabels ? '👁 LABELS ACTIFS' : '👁 LABELS MASQUÉS'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}

                    <div className="mt-4">
                        <XPBar current={score % 100} nextLevel={100} />
                    </div>

                    <div className="mt-4 flex justify-between items-center text-[9px] bg-black/40 p-2 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-gray-500" />
                                <span className="text-gray-500 font-bold uppercase">Liaison</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                                <span className="text-yellow-500 font-bold uppercase">Doublet NL</span>
                            </div>
                        </div>
                        <div className="text-gray-600 font-mono">v1.2 PREMIUM</div>
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
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [mission, setMission] = useState(null);

    const solutions = [
        { id: 'A', label: 'Solution A', ions: ['Cu2+'], color: '#BFDBFE', icon: '🧪' },
        { id: 'B', label: 'Solution B', ions: ['Fe3+'], color: '#FEF3C7', icon: '🧪' },
        { id: 'C', label: 'Solution C', ions: ['Cl-'], color: '#F3F4F6', icon: '🧪' },
        { id: 'D', label: 'Solution D', ions: ['Fe2+'], color: '#D1FAE5', icon: '🧪' },
    ];

    const reactifs = [
        { id: 'NaOH', name: 'Soude (NaOH)', tests: { 'Cu2+': { precipitate: 'PRÉCIPITÉ BLEU', color: '#3B82F6' }, 'Fe2+': { precipitate: 'PRÉCIPITÉ VERT', color: '#22C55E' }, 'Fe3+': { precipitate: 'PRÉCIPITÉ ROUILLE', color: '#92400E' } } },
        { id: 'AgNO3', name: 'Nitrate d\'Argent', tests: { 'Cl-': { precipitate: 'BLANC (noircit)', color: '#FFFFFF' } } },
        { id: 'BaCl2', name: 'Chlorure de Baryum', tests: { 'SO42-': { precipitate: 'PRÉCIPITÉ BLANC', color: '#FFFFFF' } } },
    ];

    const missions = [
        { id: 1, text: "Identifiez l'ion responsable de la couleur bleue dans la Solution A.", targetIon: 'Cu2+', targetSolution: 'A', icon: '🔍' },
        { id: 2, text: "Trouvez quelle solution contient des ions Fer III (Fe³⁺).", targetIon: 'Fe3+', targetSolution: 'B', icon: '🧪' },
        { id: 3, text: "Détectez les ions Chlorure (Cl⁻) parmi les échantillons.", targetIon: 'Cl-', targetSolution: 'C', icon: '🧂' },
    ];

    const startChallenge = () => {
        const m = missions[Math.floor(Math.random() * missions.length)];
        setMission(m);
        setPhase('challenge');
        setTimeLeft(60);
        setScore(0);
        reset();
    };

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
        setResult(found || { precipitate: 'AUCUN PRÉCIPITÉ', color: null });
    };

    const identifyIon = (ion) => {
        const solution = solutions.find(s => s.id === selectedSolution);
        if (solution && solution.ions.includes(ion)) {
            if (phase === 'challenge' && mission && (ion !== mission.targetIon || selectedSolution !== mission.targetSolution)) {
                setResult({ precipitate: 'MAUVAISE CIBLE !', color: '#EF4444' });
                return;
            }
            setScore(s => s + 50);
            setShowSuccess(true);
        } else {
            setResult({ precipitate: 'ERREUR ! Identification incorrecte.', color: '#EF4444' });
        }
    };

    const reset = () => {
        setSelectedSolution(null);
        setSelectedReactif(null);
        setResult(null);
        setShowSuccess(false);
    };

    useEffect(() => {
        if (phase === 'challenge' && timeLeft > 0 && !showSuccess) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [phase, timeLeft, showSuccess]);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert Laboratoire" className="w-[400px] border-emerald-500/30 text-white" defaultPosition="bottom-center">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => p === 'challenge' ? startChallenge() : setPhase('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest leading-tight">Analyse Qualitative</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Identification d\'Ions' : 'Challenge Expert 🏆'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'challenge' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.text} icon={mission.icon} />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                            <div className="text-[10px] text-gray-500 font-black uppercase mb-2 tracking-widest text-center">Échantillons Disponibles</div>
                            <div className="grid grid-cols-4 gap-2">
                                {solutions.map(sol => (
                                    <button key={sol.id} onClick={() => { setSelectedSolution(sol.id); setResult(null); }}
                                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all border-2 ${selectedSolution === sol.id ? 'border-emerald-500 bg-emerald-500/20 scale-105' : 'border-gray-800 bg-gray-800/50 hover:bg-gray-700'}`}>
                                        <span className="text-xl">{sol.icon}</span>
                                        <span className="text-[9px] font-black">{sol.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                            <div className="text-[10px] text-gray-500 font-black uppercase mb-2 tracking-widest text-center">Réactifs de Test</div>
                            <div className="grid grid-cols-3 gap-2">
                                {reactifs.map(r => (
                                    <button key={r.id} onClick={() => setSelectedReactif(r.id)}
                                        className={`py-2 px-1 rounded-lg text-[8px] font-black transition-all border-2 ${selectedReactif === r.id ? 'border-blue-500 bg-blue-500/20 shadow-lg' : 'border-gray-800 bg-gray-800/50 hover:bg-gray-700'}`}>
                                        {r.name.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button onClick={runTest} disabled={!selectedSolution || !selectedReactif}
                            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl font-black text-lg shadow-xl shadow-emerald-900/20 transform transition-all active:scale-[0.98] disabled:opacity-50">
                            👨‍🔬 EFFECTUER LE MÉLANGE
                        </button>

                        {result && (
                            <div className="animate-in slide-in-from-top-2">
                                <div className="p-3 bg-black/40 rounded-xl border border-white/10 text-center relative overflow-hidden">
                                    <div className="text-[10px] text-gray-500 font-bold mb-1">OBSERVATION</div>
                                    <div className={`text-base font-black ${result.color ? '' : 'text-gray-400'}`} style={{ color: result.color }}>
                                        {result.precipitate}
                                    </div>
                                    {result.color && <div className="absolute inset-0 opacity-10 animate-pulse" style={{ backgroundColor: result.color }} />}
                                </div>

                                <div className="mt-4">
                                    <div className="text-[10px] text-gray-500 font-black uppercase mb-2 text-center">Conclusion de l'Analyse</div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {['Cu2+', 'Fe2+', 'Fe3+', 'Cl-'].map(ion => (
                                            <button key={ion} onClick={() => identifyIon(ion)}
                                                className="py-2 bg-gray-800 hover:bg-emerald-600/20 border border-white/5 hover:border-emerald-500/50 rounded-lg text-[10px] font-black transition-all">
                                                {ion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <button onClick={reset} className="w-full py-2 text-[10px] font-bold text-gray-500 hover:text-white transition-colors underline">
                            RÉINITIALISER L'EXPÉRIENCE
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Analyse Validée ! Vous avez maîtrisé les tests caractéristiques." points={50} onNext={phase === 'challenge' ? startChallenge : reset} />
            <ConfettiExplosion active={showSuccess} />

            {/* Représentation 3D */}
            <group position={[0, -1, 0]}>
                {/* Rack à tubes */}
                <Box args={[6, 0.2, 1]} position={[0, -1.1, 0]} material-color="#1F2937" />

                {solutions.map((sol, i) => (
                    <group key={sol.id} position={[i * 1.5 - 2.25, 0, 0]}>
                        {/* Tube à essai */}
                        <mesh onClick={() => setSelectedSolution(sol.id)}
                            onPointerOver={() => document.body.style.cursor = 'pointer'}
                            onPointerOut={() => document.body.style.cursor = 'auto'}>
                            <cylinderGeometry args={[0.3, 0.3, 2.5, 32, 1, true]} />
                            <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.3} transparent roughness={0.05} thickness={0.5} side={THREE.DoubleSide} />
                        </mesh>
                        {/* Liquide */}
                        <mesh position={[0, -0.4, 0]}>
                            <cylinderGeometry args={[0.28, 0.28, 1.5, 32]} />
                            <meshStandardMaterial color={sol.color} transparent opacity={0.7} />
                        </mesh>

                        {selectedSolution === sol.id && (
                            <mesh position={[0, 1.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
                                <torusGeometry args={[0.35, 0.05, 16, 32]} />
                                <meshBasicMaterial color="#10B981" />
                            </mesh>
                        )}
                        <Text position={[0, -1.4, 0.6]} fontSize={0.2} color="white">{sol.label}</Text>
                    </group>
                ))}

                {/* Tube de mélange/réaction */}
                <group position={[3.5, 0, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.4, 0.4, 3, 32, 1, true]} />
                        <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.3} transparent roughness={0.05} thickness={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    {selectedReactif && (
                        <Text position={[0, 1.8, 0]} fontSize={0.2} color="#60A5FA">{selectedReactif}</Text>
                    )}
                    {result && (
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                            <mesh position={[0, -0.8, 0]}>
                                <boxGeometry args={[0.5, 0.8, 0.5]} />
                                <meshStandardMaterial color={result.color || '#3B82F6'} transparent opacity={result.color ? 0.9 : 0} />
                            </mesh>
                        </Float>
                    )}
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[0.38, 0.38, 1.8, 32]} />
                        <meshStandardMaterial color={selectedSolution ? solutions.find(s => s.id === selectedSolution).color : '#FFF'} transparent opacity={0.5} />
                    </mesh>
                </group>
            </group>
        </group>
    );
}

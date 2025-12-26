import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Html, Sphere, Box, Cylinder } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';

// =========================================
// C1. ALCOOLS ET OXYDATION
// =========================================
export function AlcoolsOxydation() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [alcoholType, setAlcoholType] = useState('primaire');
    const [oxidizing, setOxidizing] = useState(false);
    const [oxidationStage, setOxidationStage] = useState(0);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Transformation Ménagée', objective: 'Obtenez un Aldéhyde à partir d\'un alcool primaire.', targetStage: 1, type: 'primaire' },
        { id: 2, title: 'Oxydation Poussée', objective: 'Atteignez le stade Acide Carboxylique.', targetStage: 2, type: 'primaire' },
        { id: 3, title: 'Cétone Parfaite', objective: 'Synthétisez une Cétone à partir d\'un alcool secondaire.', targetStage: 1, type: 'secondaire' }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (alcoholType === mission.type && Math.floor(oxidationStage) === mission.targetStage) {
                handleSuccess();
            }
        }
    }, [oxidationStage, alcoholType, mission, phase, showSuccess]);

    useFrame((state, delta) => {
        if (oxidizing && oxidationStage < 2) {
            setOxidationStage(s => Math.min(2, s + delta * 0.5));
        }
    });

    const getProduct = () => {
        if (alcoholType === 'primaire') {
            if (oxidationStage < 0.5) return 'Alcool Primaire';
            if (oxidationStage < 1.5) return 'Aldéhyde';
            return 'Acide Carboxylique';
        } else if (alcoholType === 'secondaire') {
            return oxidationStage > 0.5 ? 'Cétone' : 'Alcool Secondaire';
        }
        return 'Alcool Tertiaire (Stable)';
    };

    const handleSuccess = () => {
        setScore(s => s + 500);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        reset();
    };

    const reset = () => { setOxidizing(false); setOxidationStage(0); };

    return (
        <group>
            {/* Scène 3D Améliorée */}
            <group position={[0, 0, 0]}>
                <Cylinder args={[1.5, 1.2, 2.5, 32]} position={[0, -1, 0]}>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} />
                </Cylinder>
                <Cylinder args={[1.4, 1.1, 2 * (oxidationStage / 2 + 0.1), 32]} position={[0, -1.2, 0]}>
                    <meshStandardMaterial
                        color={oxidationStage > 1.5 ? '#ef4444' : oxidationStage > 0.5 ? '#f59e0b' : '#3b82f6'}
                        transparent opacity={0.6}
                    />
                </Cylinder>

                {/* Molécules Symboliques */}
                <group position={[-2, 0, 0]}>
                    <Sphere args={[0.3]}><meshStandardMaterial color="#333" /></Sphere>
                    <Html distanceFactor={10} position={[0, 0.5, 0]}>
                        <div className="text-[8px] font-bold text-white bg-black/50 px-1 rounded">C-OH</div>
                    </Html>
                </group>

                {oxidizing && (
                    <group position={[0, 1.5, 0]}>
                        <Sphere args={[0.1]}><meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" /></Sphere>
                        <Text position={[0, 0.3, 0]} fontSize={0.15} color="#8b5cf6">MnO₄⁻</Text>
                    </group>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Laboratoire d'Oxydation" className="w-[400px] border-emerald-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🧪" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-3">
                                <label className="text-[10px] text-gray-400 block uppercase font-bold tracking-widest">Classe d'Alcool</label>
                                <div className="flex flex-col gap-2">
                                    {['primaire', 'secondaire', 'tertiaire'].map(t => (
                                        <button key={t} onClick={() => { setAlcoholType(t); reset(); }}
                                            className={`py-1 rounded text-[10px] font-bold transition-all ${alcoholType === t ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                            {t.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-black/40 rounded-xl p-3 border border-emerald-500/20 flex flex-col justify-between">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-emerald-400 font-mono italic mb-1">DATA_STREAM_01</div>
                                    <div className="text-[10px]"><span className="text-gray-400">PRODUIT:</span> <span className="font-bold text-cyan-400">{getProduct()}</span></div>
                                    <div className="text-[10px]"><span className="text-gray-400">STADE:</span> {Math.floor(oxidationStage * 50)}%</div>
                                </div>
                                <button onClick={() => setOxidizing(true)} disabled={alcoholType === 'tertiaire' || oxidizing}
                                    className={`w-full py-2 rounded text-[10px] font-black mt-2 transition-all ${alcoholType === 'tertiaire' ? 'bg-gray-700 opacity-50 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-500 active:scale-95'}`}>
                                    🔥 OXYDER (KMnO₄)
                                </button>
                                <button onClick={reset} className="w-full py-1 text-[9px] text-gray-400 hover:text-white mt-1 uppercase">Réinitialiser</button>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Synthèse réussie ! ${getProduct()} obtenu.`}
                points={500}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C2. AMINES
// =========================================
export function AminesProprietes() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [amineClass, setAmineClass] = useState('primaire');
    const [showProtonation, setShowProtonation] = useState(false);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Basique par nature', objective: 'Affichez le caractère basique en protonant une amine primaire.', type: 'primaire', proton: true },
        { id: 2, title: 'Structure Secondaire', objective: 'Configurez une amine secondaire protonée.', type: 'secondaire', proton: true },
        { id: 3, title: 'Ammonium Quaternaire', objective: 'Protonnez une amine tertiaire pour former un ion ammonium.', type: 'tertiaire', proton: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (amineClass === mission.type && showProtonation === mission.proton) {
                handleSuccess();
            }
        }
    }, [amineClass, showProtonation, mission, phase, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 500);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        setShowProtonation(false);
    };

    return (
        <group>
            {/* Scène 3D Améliorée */}
            <group position={[0, 0, 0]}>
                <Sphere args={[0.6]}><meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.5} /></Sphere>
                <Text position={[0, 0, 0.7]} fontSize={0.4} color="white">N</Text>

                {/* Doublet non-liant interactif */}
                <group position={[0, 1, 0]}>
                    <Sphere args={[0.15]} position={[-0.15, 0, 0]}><meshStandardMaterial color="#fbbf24" emissive="#fbbf24" /></Sphere>
                    <Sphere args={[0.15]} position={[0.15, 0, 0]}><meshStandardMaterial color="#fbbf24" emissive="#fbbf24" /></Sphere>
                </group>

                {/* Liaisons R animées */}
                <group rotation={[0, 0, 0]}>
                    <Line points={[[0, 0, 0], [-1.2, -0.6, 0]]} color="white" lineWidth={3} />
                    <Text position={[-1.5, -0.7, 0]} fontSize={0.3} color="#94a3b8">R</Text>

                    {amineClass !== 'primaire' && (
                        <group rotation={[0, (2 * Math.PI) / 3, 0]}>
                            <Line points={[[0, 0, 0], [-1.2, -0.6, 0]]} color="white" lineWidth={3} />
                            <Text position={[-1.5, -0.7, 0]} fontSize={0.3} color="#94a3b8">R'</Text>
                        </group>
                    )}
                    {amineClass === 'tertiaire' && (
                        <group rotation={[0, (4 * Math.PI) / 3, 0]}>
                            <Line points={[[0, 0, 0], [-1.2, -0.6, 0]]} color="white" lineWidth={3} />
                            <Text position={[-1.5, -0.7, 0]} fontSize={0.3} color="#94a3b8">R''</Text>
                        </group>
                    )}
                </group>

                {/* Protonation Effect */}
                {showProtonation && (
                    <group position={[0, 1.8, 0]}>
                        <Sphere args={[0.2]}><meshStandardMaterial color="#ef4444" emissive="#ef4444" /></Sphere>
                        <Text position={[0.4, 0, 0]} fontSize={0.2} color="#ef4444">H⁺</Text>
                        <Line points={[[0, -0.8, 0], [0, 0, 0]]} color="#fbbf24" lineWidth={2} dashed />
                    </group>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Étude des Amines" className="w-[380px] border-purple-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🧬" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-3">
                                <label className="text-[10px] text-gray-400 block uppercase font-bold tracking-widest">Classe d'Amine</label>
                                <div className="flex gap-2">
                                    {['primaire', 'secondaire', 'tertiaire'].map(c => (
                                        <button key={c} onClick={() => setAmineClass(c)}
                                            className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${amineClass === c ? 'bg-purple-500 shadow-lg shadow-purple-500/30' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                            {c.charAt(0).toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setShowProtonation(!showProtonation)}
                                    className={`w-full py-2 rounded text-[10px] font-black transition-all ${showProtonation ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500'}`}>
                                    {showProtonation ? 'RETIRER PROTON' : 'FIXER PROTON (H⁺)'}
                                </button>
                            </div>

                            <div className="bg-black/40 rounded-xl p-3 border border-purple-500/20">
                                <p className="text-[9px] text-yellow-500 mb-2 font-mono">NEURAL_LINK_ACTIVE</p>
                                <div className="space-y-1 text-[10px]">
                                    <p className="text-emerald-400">✓ Doublet libre dispo</p>
                                    <p className="text-emerald-400">✓ Caractère Basique</p>
                                    <p className="text-emerald-400">✓ Caractère Nucléophile</p>
                                    {showProtonation && <p className="text-blue-400">→ Forme Ammonium Ionique</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Configuration correcte ! Ion ammonium ${amineClass} formé.`}
                points={500}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C3. ESTÉRIFICATION
// =========================================
export function Esterification() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [reacting, setReacting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [catalyst, setCatalyst] = useState(false);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Synthèse Lente', objective: 'Lancez l\'estérification sans catalyseur.', targetProgress: 0.3, reqCatalyst: false },
        { id: 2, title: 'Accélérateur Chimique', objective: 'Atteignez 80% d\'avancement avec H₂SO₄.', targetProgress: 0.8, reqCatalyst: true },
        { id: 3, title: 'Équilibre Dynamique', objective: 'Stabilisez la réaction à son rendement maximal.', targetProgress: 0.95, reqCatalyst: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (progress >= mission.targetProgress && catalyst === mission.reqCatalyst) {
                handleSuccess();
            }
        }
    }, [progress, catalyst, mission, phase, showSuccess]);

    useFrame((state, delta) => {
        if (reacting && progress < 1) {
            const speed = catalyst ? 3 : 1;
            setProgress(p => Math.min(1, p + delta * 0.1 * speed));
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 600);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        reset();
    };

    const reset = () => { setReacting(false); setProgress(0); };

    return (
        <group>
            {/* Scène 3D Améliorée */}
            <group position={[0, 0, 0]}>
                {/* Ballon de réaction */}
                <Sphere args={[1.2, 32]} position={[0, -0.5, 0]}>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} />
                </Sphere>
                <Sphere args={[1.1, 32]} position={[0, -0.6, 0]} scale={[1, progress * 0.9 + 0.1, 1]}>
                    <meshStandardMaterial color={progress > 0.5 ? '#3b82f6' : '#f97316'} transparent opacity={0.5} />
                </Sphere>

                {/* Réactifs Symboliques */}
                <group position={[-2.5, 1, 0]} scale={1 - progress * 0.8}>
                    <Box args={[0.8, 0.8, 0.8]}><meshStandardMaterial color="#ef4444" /></Box>
                    <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">Acide</Text>
                </group>
                <group position={[-1.5, 1, 0]} scale={1 - progress * 0.8}>
                    <Box args={[0.8, 0.8, 0.8]}><meshStandardMaterial color="#22c55e" /></Box>
                    <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">Alcool</Text>
                </group>

                {/* Produits Symboliques */}
                {progress > 0.2 && (
                    <group position={[2, 1, 0]} scale={progress}>
                        <Box args={[1, 0.8, 0.8]}><meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} /></Box>
                        <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">Ester</Text>
                    </group>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Unité d'Estérification" className="w-[420px] border-orange-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="⚗️" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/10">
                                    <input type="checkbox" checked={catalyst} onChange={e => setCatalyst(e.target.checked)} className="w-4 h-4 accent-orange-500" />
                                    <label className="text-[10px] font-bold uppercase tracking-tighter text-orange-400">Ajouter H₂SO₄</label>
                                </div>
                                <button onClick={() => setReacting(true)} disabled={reacting}
                                    className={`w-full py-3 rounded-lg font-black text-[12px] transition-all ${reacting ? 'bg-gray-700 opacity-50' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20'}`}>
                                    {reacting ? 'RÉACTION EN COURS...' : '🔥 LANCER LA CHAUFFE'}
                                </button>
                                <button onClick={reset} className="w-full py-1 text-[9px] text-gray-400 hover:text-white uppercase font-bold tracking-widest">Réinitialiser</button>
                            </div>

                            <div className="bg-black/60 rounded-xl p-4 border border-orange-500/20 shadow-inner">
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-[9px] text-orange-500 font-mono mb-1 tracking-widest">AVANCEMENT x(t)</div>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-orange-500 to-blue-500 h-full transition-all duration-300" style={{ width: `${progress * 100}%` }} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="text-center p-1 bg-white/5 rounded border border-white/10">
                                            <div className="text-[8px] text-gray-500 uppercase">Rendement</div>
                                            <div className="text-[14px] font-black text-blue-400">{(progress * 67).toFixed(1)}%</div>
                                        </div>
                                        <div className="text-center p-1 bg-white/5 rounded border border-white/10">
                                            <div className="text-[8px] text-gray-500 uppercase">Vitesse</div>
                                            <div className="text-[14px] font-black text-orange-400">{catalyst ? 'MAX' : 'LENTE'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Synthèse validée ! L'ester est prêt.`}
                points={600}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C4. ACIDES AMINÉS ET CHIRALITÉ
// =========================================
export function AcidesAminesChiralite() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);

    // États Physiques
    const [showMirror, setShowMirror] = useState(false);
    const [rotation, setRotation] = useState(0);
    const moleculeRef = useRef();

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Symétrie Optique', objective: 'Activez le miroir pour observer l\'énantiomère.', showMirror: true },
        { id: 2, title: 'Analyse Spatiale', objective: 'Identifiez le carbone asymétrique (Cα).', showMirror: true },
        { id: 3, title: 'Zwitterion Explorer', objective: 'Analysez la structure avec le miroir actif.', showMirror: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(30);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (showMirror === mission.showMirror) {
                handleSuccess();
            }
        }
    }, [showMirror, mission, phase, showSuccess]);

    useFrame((state, delta) => {
        if (moleculeRef.current) {
            setRotation(r => r + delta * 0.5);
            moleculeRef.current.rotation.y = rotation;
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 400);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        setShowMirror(false);
    };

    return (
        <group>
            {/* Scène 3D Améliorée */}
            <group position={[0, 0, 0]}>
                {/* Molécule Source (L) */}
                <group ref={moleculeRef} position={showMirror ? [-2.5, 0, 0] : [0, 0, 0]}>
                    <Sphere args={[0.4]}><meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} /></Sphere>
                    <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">Cα</Text>

                    {/* Groupements */}
                    <group position={[1, 0.5, 0]}>
                        <Sphere args={[0.25]}><meshStandardMaterial color="#ef4444" /></Sphere>
                        <Text position={[0.4, 0, 0]} fontSize={0.15} color="#ef4444">COOH</Text>
                    </group>
                    <group position={[-1, 0.5, 0]}>
                        <Sphere args={[0.25]}><meshStandardMaterial color="#3b82f6" /></Sphere>
                        <Text position={[-0.4, 0, 0]} fontSize={0.15} color="#3b82f6">NH₂</Text>
                    </group>
                    <group position={[0, -0.8, 0.5]}>
                        <Sphere args={[0.3]}><meshStandardMaterial color="#22c55e" /></Sphere>
                        <Text position={[0, -0.5, 0]} fontSize={0.15} color="#22c55e">R</Text>
                    </group>
                    <group position={[0, -0.8, -0.5]}>
                        <Sphere args={[0.15]}><meshStandardMaterial color="#ffffff" /></Sphere>
                        <Text position={[0, -0.3, 0]} fontSize={0.15} color="#ffffff">H</Text>
                    </group>
                </group>

                {/* Miroir avec effet Glow */}
                {showMirror && (
                    <>
                        <mesh position={[0, 0, 0]}>
                            <planeGeometry args={[0.1, 5]} />
                            <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2} transparent opacity={0.8} />
                        </mesh>

                        {/* Image Miroir (D) */}
                        <group position={[2.5, 0, 0]} scale={[-1, 1, 1]} rotation={[0, -rotation, 0]}>
                            <Sphere args={[0.4]}><meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} /></Sphere>
                            <group position={[1, 0.5, 0]}><Sphere args={[0.25]}><meshStandardMaterial color="#ef4444" /></Sphere></group>
                            <group position={[-1, 0.5, 0]}><Sphere args={[0.25]}><meshStandardMaterial color="#3b82f6" /></Sphere></group>
                            <group position={[0, -0.8, 0.5]}><Sphere args={[0.3]}><meshStandardMaterial color="#22c55e" /></Sphere></group>
                            <group position={[0, -0.8, -0.5]}><Sphere args={[0.15]}><meshStandardMaterial color="#ffffff" /></Sphere></group>
                        </group>
                    </>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Stereo-Isomérie" className="w-[380px] border-pink-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={30} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🪞" />
                        )}

                        <div className="space-y-4 mt-4">
                            <button onClick={() => setShowMirror(!showMirror)}
                                className={`w-full py-3 rounded-xl font-black text-[12px] transition-all flex items-center justify-center gap-2 ${showMirror ? 'bg-pink-600 hover:bg-pink-500' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 active:scale-95 shadow-lg shadow-pink-600/20'}`}>
                                <span>{showMirror ? 'MASQUER LE MIROIR' : 'ACTIVER CHAMP MIROIR'}</span>
                                {showMirror && <span className="animate-pulse">●</span>}
                            </button>

                            <div className="bg-black/60 rounded-xl p-4 border border-pink-500/20 grid grid-cols-2 gap-3 items-center">
                                <div className="text-center">
                                    <p className="text-[10px] text-pink-400 font-mono uppercase">Forme S/L</p>
                                    <p className="text-[8px] text-gray-500">Naturelle</p>
                                </div>
                                <div className="text-center border-l border-white/10">
                                    <p className="text-[10px] text-cyan-400 font-mono uppercase">Forme R/D</p>
                                    <p className="text-[8px] text-gray-500">Synthétique</p>
                                </div>
                            </div>

                            <p className="text-[9px] text-gray-400 text-center italic bg-white/5 py-1 rounded">
                                "Deux énantiomères ne sont pas superposables."
                            </p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Analyse chirale terminée !`}
                points={400}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C5. CINÉTIQUE CHIMIQUE
// =========================================
export function CinetiqueChimique() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    // États Physiques
    const [temperature, setTemperature] = useState(25);
    const [concentration, setConcentration] = useState(1);
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const k = 0.1 * Math.exp((temperature - 25) / 10) * concentration;
    const advancement = 1 - Math.exp(-k * time);
    const velocity = k * (1 - advancement);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Réaction Rapide', objective: 'Atteignez 50% d\'avancement en moins de 5s.', targetAdv: 0.5, maxTime: 5, temp: 60, conc: 1.5 },
        { id: 2, title: 'Facteur Cinétique', objective: 'Observez l\'effet de la température sur k.', targetAdv: 0.8, temp: 80, conc: 2 },
        { id: 3, title: 'Temps de Demi-Réaction', objective: 'Identifiez t1/2 à haute concentration.', targetAdv: 0.9, temp: 40, conc: 2 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(60);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (advancement >= mission.targetAdv) {
                if (mission.maxTime && time > mission.maxTime) {
                    // Échec mission temps
                } else {
                    handleSuccess();
                }
            }
        }
    }, [advancement, mission, phase, showSuccess, time]);

    useFrame((state, delta) => {
        if (running) {
            setTime(t => t + delta);
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 700);
        setShowSuccess(true);
        setRunning(false);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        reset();
    };

    const reset = () => { setTime(0); setRunning(false); };

    const curvePoints = useMemo(() => {
        const pts = [];
        for (let t = 0; t <= 10; t += 0.2) {
            const x = (t / 10) * 6 - 3;
            const adv = 1 - Math.exp(-k * t);
            const y = adv * 2 - 1.5;
            pts.push(new THREE.Vector3(x, y, 0));
        }
        return pts;
    }, [k]);

    return (
        <group>
            {/* Scène 3D - Moniteur de Cinétique */}
            <group position={[0, 0, 0]}>
                {/* Axes Holographiques */}
                <Line points={[[-3.5, -1.5, 0], [4, -1.5, 0]]} color="#3b82f6" lineWidth={2} />
                <Line points={[[-3.5, -1.5, 0], [-3.5, 2.5, 0]]} color="#3b82f6" lineWidth={2} />

                {/* Courbe x(t) */}
                <Line points={curvePoints} color="#10b981" lineWidth={4} />

                {/* Curseurs t1/2 interactif */}
                {advancement > 0.5 && (
                    <group position={[Math.log(2) / k * 0.6 - 3.5, -1.5, 0]}>
                        <Line points={[[0, 0, 0], [0, 1.5, 0]]} color="#f59e0b" lineWidth={1} dashed />
                        <Text position={[0, -0.3, 0]} fontSize={0.15} color="#f59e0b">t½</Text>
                    </group>
                )}

                {/* Tracking Point */}
                <mesh position={[Math.min(3.5, (time / 10) * 6 - 3), advancement * 2 - 1.5, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} />
                </mesh>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⏱️ Contrôle Cinétique" className="w-[420px] border-amber-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={60} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="⏱️" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] text-gray-400">
                                        <span>TEMPÉRATURE</span>
                                        <span className="text-amber-400 font-bold">{temperature}°C</span>
                                    </div>
                                    <input type="range" min="0" max="80" value={temperature}
                                        onChange={e => { setTemperature(Number(e.target.value)); reset(); }}
                                        className="w-full h-1.5 bg-gray-800 rounded-lg accent-amber-500" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] text-gray-400">
                                        <span>CONCENTRATION</span>
                                        <span className="text-blue-400 font-bold">{concentration} mol/L</span>
                                    </div>
                                    <input type="range" min="0.1" max="2" step="0.1" value={concentration}
                                        onChange={e => { setConcentration(Number(e.target.value)); reset(); }}
                                        className="w-full h-1.5 bg-gray-800 rounded-lg accent-blue-500" />
                                </div>
                                <button onClick={() => setRunning(!running)}
                                    className={`w-full py-2.5 rounded-lg font-black text-[12px] transition-all ${running ? 'bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/20' : 'bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20'}`}>
                                    {running ? 'PAUSE ANALYSE' : 'DÉMARRER RÉACTION'}
                                </button>
                            </div>

                            <div className="bg-black/60 rounded-xl p-4 border border-amber-500/20 grid grid-rows-3 gap-2">
                                <div className="flex justify-between items-center bg-white/5 px-2 rounded">
                                    <div className="text-[8px] text-gray-500">TEMPS</div>
                                    <div className="text-[12px] font-mono font-bold text-amber-400">{time.toFixed(2)}s</div>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 px-2 rounded">
                                    <div className="text-[8px] text-gray-500">AVANCEMENT</div>
                                    <div className="text-[12px] font-mono font-bold text-emerald-400">{(advancement * 100).toFixed(1)}%</div>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 px-2 rounded">
                                    <div className="text-[8px] text-gray-500">VITESSE v</div>
                                    <div className="text-[10px] font-mono font-bold text-cyan-400">{velocity.toFixed(3)} u.a</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Réaction analysée avec succès !`}
                points={700}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C6. pH ET AUTOPROTOLYSE
// =========================================
export function PHAutoprotolyse() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [hydronium, setHydronium] = useState(1e-7);
    const hydroxide = 1e-14 / hydronium;
    const pH = -Math.log10(hydronium);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Neutralité Pure', objective: 'Ajustez la solution à pH 7.00 exactly.', targetPH: 7.0, tolerance: 0.1 },
        { id: 2, title: 'Acidité Gastrique', objective: 'Simulez un milieu très acide (pH < 2).', targetPH: 1.5, maxPH: 2 },
        { id: 3, title: 'Base Forte', objective: 'Atteignez un pH de base forte (pH > 12).', targetPH: 13, minPH: 12 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            const success = mission.maxPH ? pH < mission.maxPH :
                mission.minPH ? pH > mission.minPH :
                    Math.abs(pH - mission.targetPH) < (mission.tolerance || 0.1);
            if (success) handleSuccess();
        }
    }, [pH, mission, phase, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 500);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    const getMilieu = () => {
        if (pH < 6.8) return { text: 'ACIDE', color: '#EF4444', icon: '🍋' };
        if (pH > 7.2) return { text: 'BASIQUE', color: '#3B82F6', icon: '🧼' };
        return { text: 'NEUTRE', color: '#22C55E', icon: '💧' };
    };

    const milieu = getMilieu();

    return (
        <group>
            {/* Scène 3D - Analyseur de pH */}
            <group position={[0, -0.5, 0]}>
                {/* Bécher Holographique */}
                <Cylinder args={[1.5, 1.2, 3, 32]} openEnded>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} />
                </Cylinder>
                <Cylinder args={[1.4, 1.1, 2.5, 32]} position={[0, -0.2, 0]}>
                    <meshStandardMaterial color={milieu.color} transparent opacity={0.6} emissive={milieu.color} emissiveIntensity={0.2} />
                </Cylinder>

                {/* Particules d'Ions */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <Sphere key={i} args={[0.06]} position={[
                        (Math.random() - 0.5) * 2,
                        (Math.random() - 0.5) * 2,
                        (Math.random() - 0.5) * 2
                    ]}>
                        <meshStandardMaterial color={i % 2 === 0 ? '#ef4444' : '#3b82f6'} emissive={i % 2 === 0 ? '#ef4444' : '#3b82f6'} />
                    </Sphere>
                ))}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Analyseur de pH" className="w-[400px] border-cyan-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🌡️" />
                        )}

                        <div className="mt-4 space-y-4">
                            <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/20">
                                <div className="flex justify-between items-end mb-2">
                                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Sonde pH-métrique</div>
                                    <div className="text-3xl font-black font-mono" style={{ color: milieu.color }}>{pH.toFixed(2)}</div>
                                </div>
                                <input type="range" min="0" max="14" step="0.01" value={pH}
                                    onChange={e => setHydronium(Math.pow(10, -Number(e.target.value)))}
                                    className="w-full h-2 bg-gray-800 rounded-lg accent-cyan-500" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between">
                                    <div>
                                        <div className="text-[8px] text-gray-500">Ions H₃O⁺</div>
                                        <div className="text-[10px] font-mono text-red-400">{hydronium.toExponential(2)}</div>
                                    </div>
                                    <div className="text-xl">🍋</div>
                                </div>
                                <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between">
                                    <div>
                                        <div className="text-[8px] text-gray-500">Ions HO⁻</div>
                                        <div className="text-[10px] font-mono text-blue-400">{hydroxide.toExponential(2)}</div>
                                    </div>
                                    <div className="text-xl">🧼</div>
                                </div>
                            </div>

                            <div className="py-2 text-center rounded-lg font-black text-[12px] uppercase tracking-tighter"
                                style={{ backgroundColor: `${milieu.color}20`, border: `1px solid ${milieu.color}50`, color: milieu.color }}>
                                Milieu {milieu.text} detected
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Milieu stabilisé avec succès !`}
                points={500}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C7. ACIDES ET BASES FORTS
// =========================================
export function AcidesBasesForts() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [type, setType] = useState('acide');
    const [concentration, setConcentration] = useState(0.01);

    const pH = type === 'acide' ? -Math.log10(concentration) : 14 + Math.log10(concentration);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Solution Acide 10⁻²', objective: 'Préparez une solution de HCl à pH 2.00.', type: 'acide', conc: 0.01 },
        { id: 2, title: 'Soude Décapante', objective: 'Préparez une solution de NaOH à pH 13.00.', type: 'base', conc: 0.1 },
        { id: 3, title: 'Acidité extrême', objective: 'Atteignez un pH de 1.00 avec HCl.', type: 'acide', conc: 0.1 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (type === mission.type && Math.abs(concentration - mission.conc) < 0.001) {
                handleSuccess();
            }
        }
    }, [concentration, type, mission, phase, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 500);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D - Réacteur de Dissociation */}
            <group position={[0, -0.5, 0]}>
                <Cylinder args={[1.5, 1.2, 3, 32]} openEnded>
                    <meshPhysicalMaterial color="#ffffff" transmission={1} roughness={0} />
                </Cylinder>
                <Cylinder args={[1.4, 1.1, 2.8, 32]} position={[0, -0.1, 0]}>
                    <meshStandardMaterial
                        color={type === 'acide' ? '#fca5a5' : '#93c5fd'}
                        transparent opacity={0.6}
                    />
                </Cylinder>

                {/* Ions en mouvement */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <IonParticle key={i} color={type === 'acide' ? '#ef4444' : '#3b82f6'} />
                ))}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="💧 Acides/Bases Forts" className="w-[400px] border-blue-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🧪" />
                        )}

                        <div className="mt-4 space-y-4">
                            <div className="flex gap-2">
                                <button onClick={() => setType('acide')}
                                    className={`flex-1 py-2 rounded-lg font-black text-[10px] transition-all ${type === 'acide' ? 'bg-red-600 shadow-lg shadow-red-600/30' : 'bg-gray-800'}`}>
                                    ACIDE FORT (HCl)
                                </button>
                                <button onClick={() => setType('base')}
                                    className={`flex-1 py-2 rounded-lg font-black text-[10px] transition-all ${type === 'base' ? 'bg-blue-600 shadow-lg shadow-blue-600/30' : 'bg-gray-800'}`}>
                                    BASE FORTE (NaOH)
                                </button>
                            </div>

                            <div className="bg-black/40 rounded-xl p-4 border border-blue-500/20">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] text-gray-400">CONCENTRATION C</span>
                                    <span className="text-cyan-400 font-mono font-bold">{concentration.toPrecision(2)} mol/L</span>
                                </div>
                                <input type="range" min="-4" max="-1" step="0.1" value={Math.log10(concentration)}
                                    onChange={e => setConcentration(Math.pow(10, Number(e.target.value)))}
                                    className="w-full h-2 bg-gray-800 rounded-lg accent-cyan-500" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                                    <div className="text-[8px] text-gray-500 uppercase tracking-widest">Calcul pH</div>
                                    <div className="text-[10px] text-gray-400 mb-1">{type === 'acide' ? '-log C' : '14 + log C'}</div>
                                    <div className="text-2xl font-black text-cyan-400">{pH.toFixed(2)}</div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[8px] text-emerald-400 font-bold">TOTAL_DISSOCIATION</span>
                                    </div>
                                    <p className="text-[9px] text-gray-400 leading-tight">La réaction avec l'eau est considérée comme totale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Solution calibrée ! pH = ${pH.toFixed(2)}`}
                points={500}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

function IonParticle({ color }) {
    const meshRef = useRef();
    const [pos] = useState(() => [
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
    ]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime + pos[0]) * 0.005;
            meshRef.current.position.x += Math.cos(state.clock.elapsedTime + pos[1]) * 0.005;
        }
    });

    return (
        <Sphere ref={meshRef} args={[0.07]} position={pos}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </Sphere>
    );
}

// =========================================
// C8. ACIDES FAIBLES ET Ka
// =========================================
export function AcidesFaiblesKa() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [pKa, setPKa] = useState(4.75);
    const [pH, setPH] = useState(4.75);

    const ratio = Math.pow(10, pH - pKa);
    const percentBase = (ratio / (1 + ratio)) * 100;
    const percentAcid = 100 - percentBase;

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Demi-Équivalence', objective: 'Équilibrez la solution (50% Acide, 50% Base).', targetAdv: 50, tolerance: 1 },
        { id: 2, title: 'Domaine de Prédominance', objective: 'Ajustez le pH pour avoir plus de 90% d\'Acide (AH).', minAcid: 90 },
        { id: 3, title: 'Espèce Basique', objective: 'Atteignez 99% de Base conjuguée (A⁻).', minBase: 99 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            const success = mission.minAcid ? percentAcid >= mission.minAcid :
                mission.minBase ? percentBase >= mission.minBase :
                    Math.abs(percentAcid - mission.targetAdv) < (mission.tolerance || 1);
            if (success) handleSuccess();
        }
    }, [percentAcid, percentBase, mission, phase, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 600);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D - Diagramme de Distribution */}
            <group position={[0, 0, 0]}>
                {/* Zone Acide AH */}
                <Box args={[3.5, percentAcid * 0.04, 0.5]} position={[-2, (percentAcid * 0.04) / 2 - 2, 0]}>
                    <meshStandardMaterial color="#ef4444" transparent opacity={0.6} emissive="#ef4444" emissiveIntensity={0.2} />
                </Box>
                <Text position={[-2, 0.5, 0]} fontSize={0.3} color="#ef4444">AH (Acide)</Text>

                {/* Zone Base A- */}
                <Box args={[3.5, percentBase * 0.04, 0.5]} position={[2, (percentBase * 0.04) / 2 - 2, 0]}>
                    <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} emissive="#3b82f6" emissiveIntensity={0.2} />
                </Box>
                <Text position={[2, 0.5, 0]} fontSize={0.3} color="#3b82f6">A⁻ (Base)</Text>

                {/* Marqueur pKa Central */}
                <Line points={[[0, -2.5, 0], [0, 2, 0]]} color="#f59e0b" lineWidth={2} dashed />
                <Text position={[0, 2.3, 0]} fontSize={0.25} color="#f59e0b">pKa = {pKa}</Text>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Équilibre Faible (Ka)" className="w-[420px] border-purple-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="⚖️" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] text-gray-400">
                                        <span>constante pKa</span>
                                        <span className="text-amber-400 font-bold">{pKa.toFixed(1)}</span>
                                    </div>
                                    <input type="range" min="1" max="10" step="0.1" value={pKa}
                                        onChange={e => setPKa(Number(e.target.value))}
                                        className="w-full h-1.5 bg-gray-800 rounded-lg accent-amber-500" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] text-gray-400">
                                        <span>MESURE pH</span>
                                        <span className="text-emerald-400 font-bold">{pH.toFixed(2)}</span>
                                    </div>
                                    <input type="range" min="0" max="14" step="0.1" value={pH}
                                        onChange={e => setPH(Number(e.target.value))}
                                        className="w-full h-1.5 bg-gray-800 rounded-lg accent-emerald-500" />
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-4 border border-purple-500/20 flex flex-col justify-center gap-3">
                                <div>
                                    <div className="flex justify-between text-[8px] text-gray-500 uppercase mb-1">
                                        <span>[AH] / [Ctotal]</span>
                                        <span className="text-red-400">{percentAcid.toFixed(1)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-red-500 h-full" style={{ width: `${percentAcid}%` }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[8px] text-gray-500 uppercase mb-1">
                                        <span>[A⁻] / [Ctotal]</span>
                                        <span className="text-blue-400">{percentBase.toFixed(1)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full" style={{ width: `${percentBase}%` }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-2 bg-purple-900/20 border border-purple-500/30 rounded text-center">
                            <p className="text-[10px] font-mono text-purple-300">pH = pKa + log([A⁻]/[AH])</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Équilibre validé !`}
                points={600}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================
// C9. SOLUTIONS TAMPONS
// =========================================
export function SolutionsTampons() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [pKa] = useState(4.75);
    const [addedAcid, setAddedAcid] = useState(0);
    const [addedBase, setAddedBase] = useState(0);

    const pHInitial = pKa;
    const pHChange = (addedBase - addedAcid) * 0.12;
    const pH = Math.max(1, Math.min(14, pHInitial + pHChange));

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Résistance Acide', objective: 'Ajoutez 5 doses d\'acide et observez la stabilité du pH.', reqAcid: 5 },
        { id: 2, title: 'Effet Tampon Base', objective: 'Neutralisez l\'acide ajouté puis ajoutez 3 doses de base.', reqBase: 3, reqAcid: 0 },
        { id: 3, title: 'Limite du Pouvoir Tampon', objective: 'Ajoutez plus de 10 doses au total et analysez la dérive.', totalDoses: 10 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.min(level - 1, missions.length - 1)]);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            const success = mission.totalDoses ? (addedAcid + addedBase) >= mission.totalDoses :
                (addedAcid === mission.reqAcid && addedBase === (mission.reqBase || 0));
            if (success) handleSuccess();
        }
    }, [addedAcid, addedBase, mission, phase, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 500);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        reset();
    };

    const reset = () => { setAddedAcid(0); setAddedBase(0); };

    return (
        <group>
            {/* Scène 3D - Système Tampon */}
            <group position={[0, -0.5, 0]}>
                <Cylinder args={[1.5, 1.2, 3, 32]} openEnded>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} />
                </Cylinder>
                <Cylinder args={[1.4, 1.1, 2.5, 32]} position={[0, -0.2, 0]}>
                    <meshStandardMaterial color="#86efac" transparent opacity={0.6} />
                </Cylinder>

                {/* Afficheur Holo pH */}
                <group position={[2.5, 1, 0]}>
                    <Box args={[1.2, 0.8, 0.1]}><meshStandardMaterial color="#1f2937" emissive="#10b981" emissiveIntensity={0.2} /></Box>
                    <Text position={[0, 0, 0.1]} fontSize={0.4} color="#10b981" font="monospace">{pH.toFixed(2)}</Text>
                    <Text position={[0, 0.5, 0]} fontSize={0.15} color="#10b981">SYSTEM_PH</Text>
                </group>

                {/* Injecteurs */}
                <group position={[-2, 1.5, 0]}>
                    <Box args={[0.4, 1.5, 0.4]}><meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.3} /></Box>
                    <Text position={[0, 1, 0]} fontSize={0.2} color="#ef4444">H⁺</Text>
                </group>
                <group position={[-1, 1.5, 0]}>
                    <Box args={[0.4, 1.5, 0.4]}><meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} /></Box>
                    <Text position={[0, 1, 0]} fontSize={0.2} color="#3b82f6">OH⁻</Text>
                </group>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Stabilité Tampon" className="w-[400px] border-emerald-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🧪" />
                        )}

                        <div className="mt-4 space-y-4">
                            <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-xl flex justify-between items-center">
                                <div>
                                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Tampon Actif</div>
                                    <div className="text-[9px] text-gray-400 italic">CH₃COOH / CH₃COO⁻</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[8px] text-gray-400">pKa</div>
                                    <div className="text-[14px] font-black">{pKa}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button onClick={() => setAddedAcid(a => a + 1)}
                                    className="py-3 rounded-xl bg-gradient-to-b from-red-600 to-red-800 font-black text-[12px] shadow-lg shadow-red-600/20 hover:scale-105 active:scale-95 transition-all">
                                    + INJECT HCl
                                </button>
                                <button onClick={() => setAddedBase(b => b + 1)}
                                    className="py-3 rounded-xl bg-gradient-to-b from-blue-600 to-blue-800 font-black text-[12px] shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
                                    + INJECT NaOH
                                </button>
                            </div>

                            <div className="bg-black/40 p-3 rounded-xl border border-white/5 grid grid-cols-3 gap-2">
                                <div className="text-center">
                                    <div className="text-[8px] text-gray-400 uppercase">Doses H⁺</div>
                                    <div className="font-mono text-red-400 font-bold">{addedAcid}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[8px] text-gray-400 uppercase">Doses OH⁻</div>
                                    <div className="font-mono text-blue-400 font-bold">{addedBase}</div>
                                </div>
                                <button onClick={reset} className="text-[8px] bg-gray-800 rounded font-bold hover:bg-gray-700 transition-colors">RESET</button>
                            </div>

                            <div className="text-center py-1.5 bg-white/5 rounded border border-white/10">
                                <span className="text-[10px] text-gray-400">Variation Totale: </span>
                                <span className={`text-[10px] font-bold ${Math.abs(pHChange) < 0.5 ? 'text-emerald-400' : 'text-orange-400'}`}>
                                    {pHChange > 0 ? '+' : ''}{pHChange.toFixed(2)} pH
                                </span>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Mission terminée ! Pouvoir Tampon démontré.`}
                points={500}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

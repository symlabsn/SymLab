'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars, Text, Line, Html } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { DNAHelix } from './DNAHelix';
import { LensOptics } from './LensOptics';
import { ElectrochemicalCell } from './ElectrochemicalCell';
import { MagneticField } from './MagneticField';
import { Diffraction } from './Diffraction';
import { Titration } from './Titration';
import { PeriodicTable } from './PeriodicTable';
import { RectilinearMotion } from './RectilinearMotion';
import { RefractionLight } from './RefractionLight';
import { LightSpectrum } from './LightSpectrum';
import { CellRespiration } from './CellRespiration';
import { UniversalGravitation } from './UniversalGravitation';
import { MoleConcept } from './MoleConcept';
import { CellMitosis } from './CellMitosis';
import { EcosystemDynamics } from './EcosystemDynamics';
import { BloodSugarRegulation } from './BloodSugarRegulation';
import { ElectromagneticInduction } from './ElectromagneticInduction';
import { MolarConcentration } from './MolarConcentration';
import { MolecularGeometry } from './MolecularGeometry';
import { EnergySkatePark } from './EnergySkatePark';
import { DNAReplication } from './DNAReplication';
import { NerveImpulse } from './NerveImpulse';
import { RadioactiveDecay } from './RadioactiveDecay';
import { OrganicChemistry } from './OrganicChemistry';
import { EnzymeKinetics } from './EnzymeKinetics';
import { ProteinSynthesis } from './ProteinSynthesis';
import { KeplerLaws } from './KeplerLaws';
import { RCCircuit } from './RCCircuit';
import { PendulumOscillations } from './PendulumOscillations';
import { NuclearInteraction } from './NuclearInteraction';
import { PhotoelectricEffect } from './PhotoelectricEffect';
import { MuscleContraction } from './MuscleContraction';
import { ClimateFeedback } from './ClimateFeedback';
import { RLCCircuit } from './RLCCircuit';
import { Chirality } from './Chirality';
import { ChemicalReaction } from './ChemicalReaction';
import { ImmuneSystem } from './ImmuneSystem';
import { ThermalTransfer } from './ThermalTransfer';
import { SoundPropagation } from './SoundPropagation';
import { DensityExplorer, RefractionSimulator, CircuitSeriesParallel, MassConservation, LightPropagationPC4, ScientificMethod, MeasurementTools, LightSources, IntroElectricity, MixtureSeparationPC4, MoleConceptPC4, AtomBuilderSim, ShadowsSimulator } from './PC4eSimulations';

import { Chap1ScienceIntro, Chap2Mesures, Chap3Densite, Chap4PoidsMasse, Chap5Electricite } from './PC4eChapter1to5';
import { Chap6SourcesLumiere, Chap7PropagationLumiere, Chap8Refraction } from './PC4eChapter6to8';
import { Chap1LentillesMCE, Chap2DispersionLumiere, Chap3ForcesVecteurs, Chap4TravailPuissance, Chap5Electrisation } from './PC3eChapter1to5';
import { Chap6LoiOhm, Chap7TransformationsEnergie, Chap8SolutionsAqueuses, Chap9AcidesBasesPH, Chap10Metaux, Chap11Combustion } from './PC3eChapter6to11';
import { ForcesInertia, GasLaws, SoundWaves, AtomicStructureSeconde, DistillationSetup } from './SecondeSimulations';
import { UniversalGravitationSeconde, RefractionSeconde, PrismDispersion, MoleScale, SolutionsSeconde } from './SecondeSimulationsPart2';
import { MotionRelativity, ChromatographyExperiment, ChemicalIdentification, SonarEcholocation, PowerLifter } from './SecondeSimulationsPart3';
import { ElectrisationSimulation, CircuitElectriqueSeconde, LoiOhmSeconde, GenerateurSeconde, AOPSimulation } from './Physique2ndeSimulations';
import { MouvementSeconde, ForcesPoidsSeconde, Equilibre3ForcesSeconde, MomentForceSeconde } from './Physique2ndeSimulationsPart2';
import { PropagationLumiereSeconde, ReflexionLumiereSeconde, RefractionDispersionSeconde } from './Physique2ndeSimulationsPart3';
import { DilutionSimulation, TitrageAcideBase, DissolutionSimulation, EquationBalancer, LewisStructure, ChemicalTestsGamified } from './Chimie2SSimulations';
import { VirtualChemLab } from './VirtualChemLab';
import { SeparationLab } from './Chimie2SImmersive';
import { AtomicStructureAdvanced, MoleScaleAdvanced, LewisStructureAdvanced, EquationBalancerAdvanced } from './Chimie2SAdvanced';
import { DilutionAdvanced, TitrageAdvanced, PHIndicateursAdvanced, TestsIonsAdvanced } from './Chimie2SAdvancedPart2';



// ... (existing helper components)

// Composant Poids vs Masse (Terre vs Lune)
function WeightMass() {
    const [mass, setMass] = useState(10);

    return (
        <>
            {/* Controls - Panneau Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="⚖️ Poids vs Masse">
                <div className="text-white">
                    <label className="block text-sm font-bold mb-2 text-[#00F5D4]">Masse : {mass} kg</label>
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={mass}
                        onChange={(e) => setMass(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F5D4]"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1kg</span>
                        <span>50kg</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded bg-blue-500/20">
                            <div className="text-blue-400">🌍 Terre</div>
                            <div className="font-bold">{(mass * 9.8).toFixed(1)} N</div>
                        </div>
                        <div className="p-2 rounded bg-gray-500/20">
                            <div className="text-gray-400">🌙 Lune</div>
                            <div className="font-bold">{(mass * 1.6).toFixed(1)} N</div>
                        </div>
                    </div>
                </div>
            </DraggableHtmlPanel>

            <group>

                {/* Terre */}
                <group position={[-3, 0, 0]}>
                    <mesh position={[0, -2.5, 0]}>
                        <sphereGeometry args={[2, 32, 32]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#1D4ED8" emissiveIntensity={0.2} />
                    </mesh>
                    <Text position={[0, -4.8, 0]} fontSize={0.4} color="white">Terre (g = 9.8)</Text>

                    {/* Objet sur Terre */}
                    <mesh position={[0, 0, 0]} scale={[1 + mass / 100, 1 + mass / 100, 1 + mass / 100]}>
                        <boxGeometry args={[0.8, 0.8, 0.8]} />
                        <meshStandardMaterial color="#FCD34D" />
                    </mesh>

                    {/* Vecteur Poids */}
                    <arrowHelper
                        args={[
                            new THREE.Vector3(0, -1, 0), // Dir
                            new THREE.Vector3(0, -0.5, 0), // Origin
                            1 + (mass * 9.8) / 100, // Length (scaled)
                            0xEF4444, // Color
                            0.3, // Head Length
                            0.2 // Head Width
                        ]}
                    />

                    <Text position={[1.5, 0, 0]} fontSize={0.4} color="#EF4444">
                        P = {(mass * 9.8).toFixed(1)} N
                    </Text>
                </group>

                {/* Lune */}
                <group position={[3, 0, 0]}>
                    <mesh position={[0, -2.5, 0]}>
                        <sphereGeometry args={[1.2, 32, 32]} />
                        <meshStandardMaterial color="#9CA3AF" emissive="#4B5563" emissiveIntensity={0.2} />
                    </mesh>
                    <Text position={[0, -4.8, 0]} fontSize={0.4} color="white">Lune (g = 1.6)</Text>

                    {/* Objet sur Lune */}
                    <mesh position={[0, 0, 0]} scale={[1 + mass / 100, 1 + mass / 100, 1 + mass / 100]}>
                        <boxGeometry args={[0.8, 0.8, 0.8]} />
                        <meshStandardMaterial color="#FCD34D" />
                    </mesh>

                    {/* Vecteur Poids */}
                    <arrowHelper
                        args={[
                            new THREE.Vector3(0, -1, 0),
                            new THREE.Vector3(0, -0.5, 0),
                            1 + (mass * 1.6) / 100,
                            0xEF4444,
                            0.3,
                            0.2
                        ]}
                    />

                    <Text position={[1.5, 0, 0]} fontSize={0.4} color="#EF4444">
                        P = {(mass * 1.6).toFixed(1)} N
                    </Text>
                </group>

                <Text position={[0, 2.5, 0]} fontSize={0.5} color="#00F5D4" anchorX="center" anchorY="middle">
                    Masse constante, Poids variable
                </Text>
            </group>
        </>
    );
}

// Composant Théorème de Thalès
function ThalesTheorem() {
    const [ratio, setRatio] = useState(0.5); // k = AM/AB

    // Coordonnées
    const A = new THREE.Vector3(0, 4, 0);
    const B = new THREE.Vector3(-1.5, 0, 0);
    const C = new THREE.Vector3(1.5, 0, 0);

    // Calcul de M et N en fonction du ratio
    const M = new THREE.Vector3().lerpVectors(A, B, ratio);
    const N = new THREE.Vector3().lerpVectors(A, C, ratio);

    return (
        <>
            {/* Controls - Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="📐 Théorème de Thalès">
                <div className="text-white">
                    <label className="block text-sm mb-1">Position MN (Ratio : {ratio.toFixed(2)})</label>
                    <input
                        type="range"
                        min="0.1"
                        max="0.9"
                        step="0.05"
                        value={ratio}
                        onChange={(e) => setRatio(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
                    />
                    <div className="mt-3 text-xs space-y-1 font-mono text-gray-300">
                        <div className="flex justify-between"><span>AM/AB =</span> <span className="text-[#EF4444]">{ratio.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>AN/AC =</span> <span className="text-[#EF4444]">{ratio.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>MN/BC =</span> <span className="text-[#EF4444]">{ratio.toFixed(2)}</span></div>
                    </div>
                </div>
            </DraggableHtmlPanel>

            <group>

                {/* Sommet A */}
                <mesh position={A}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[A.x, A.y + 0.3, A.z]} fontSize={0.4} color="white">A</Text>

                {/* Triangle ABC (Lignes) */}
                <Line points={[A, B]} color="#3B82F6" lineWidth={3} />
                <Line points={[A, C]} color="#3B82F6" lineWidth={3} />
                <Line points={[B, C]} color="#3B82F6" lineWidth={3} />

                <Text position={[B.x - 0.3, B.y, B.z]} fontSize={0.4} color="white">B</Text>
                <Text position={[C.x + 0.3, C.y, C.z]} fontSize={0.4} color="white">C</Text>

                {/* Ligne Parallèle MN (Thalès) */}
                <Line points={[M, N]} color="#EF4444" lineWidth={4} />

                <mesh position={M}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[M.x - 0.4, M.y, M.z]} fontSize={0.4} color="white">M</Text>

                <mesh position={N}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[N.x + 0.4, N.y, N.z]} fontSize={0.4} color="white">N</Text>

                <Text position={[0, -2, 0]} fontSize={0.5} color="white">Les rapports restent égaux !</Text>
            </group>
        </>
    );
}

// Composant Cercle Trigonométrique
function TrigUnitCircle() {
    const [angle, setAngle] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const movingPointRef = useRef();
    const sinLineRef = useRef();
    const cosLineRef = useRef();

    useFrame((state) => {
        if (autoPlay) {
            const time = state.clock.elapsedTime * 0.5;
            setAngle(time % (Math.PI * 2));
        }
    });

    const currentAngle = angle;
    const cosVal = Math.cos(currentAngle);
    const sinVal = Math.sin(currentAngle);

    // Update refs directly for smooth animation if needed, but react state is fine for this complexity
    // Actually, to keep it smooth, useFrame updates the refs based on state or time.
    // If autoPlay is off, we use the state `angle`. 

    // Derived positions
    const planetPos = [2 * cosVal, 2 * sinVal, 0];

    return (
        <>
            {/* Controls - Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="⭕ Cercle Trigonométrique">
                <div className="text-white">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-400">Animation</span>
                        <button
                            onClick={() => setAutoPlay(!autoPlay)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold ${autoPlay ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}
                        >
                            {autoPlay ? 'Pause ⏸' : 'Play ▶'}
                        </button>
                    </div>

                    {!autoPlay && (
                        <div className="mb-4">
                            <label className="block text-xs mb-1 text-gray-400">Angle (rad)</label>
                            <input
                                type="range"
                                min="0"
                                max={Math.PI * 2}
                                step="0.01"
                                value={angle}
                                onChange={(e) => setAngle(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F5D4]"
                            />
                        </div>
                    )}

                    <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-2">
                        <div className="flex justify-between">
                            <span className="text-blue-400">Cos (x) :</span>
                            <span>{cosVal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-red-400">Sin (y) :</span>
                            <span>{sinVal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span className="text-gray-400">Angle :</span>
                            <span>{((currentAngle * 180) / Math.PI).toFixed(0)}°</span>
                        </div>
                    </div>
                </div>
            </DraggableHtmlPanel>

            <group>

                {/* Cercle Unité */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[2, 0.05, 64, 100]} />
                    <meshStandardMaterial color="white" opacity={0.5} transparent />
                </mesh>

                {/* Axes */}
                <group>
                    <mesh rotation={[0, 0, Math.PI / 2]}> {/* Axe Y */}
                        <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                        <meshStandardMaterial color="gray" />
                    </mesh>
                    <mesh rotation={[0, 0, 0]}> {/* Axe X */}
                        <cylinderGeometry args={[0.02, 0.02, 5, 8]} rotation={[0, 0, Math.PI / 2]} />
                        <meshStandardMaterial color="gray" />
                    </mesh>
                </group>

                {/* Point mobile */}
                <group>
                    <mesh position={planetPos}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
                    </mesh>

                    {/* Lignes de projection */}
                    {/* Sinus (Verticale) */}
                    <mesh position={[2 * cosVal, sinVal, 0]} scale={[1, Math.abs(2 * sinVal), 1]}>
                        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>
                    <Text position={[2.2, 1, 0]} fontSize={0.3} color="#EF4444">Sin</Text>

                    {/* Cosinus (Horizontale) */}
                    <mesh position={[cosVal, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1, Math.abs(2 * cosVal), 1]}>
                        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <Text position={[1, -0.3, 0]} fontSize={0.3} color="#3B82F6">Cos</Text>

                    {/* Rayon */}
                    <Line
                        points={[[0, 0, 0], planetPos]}
                        color="white"
                        lineWidth={1}
                        dashed
                    />
                </group>
            </group>
        </>
    );
}

import { Suspense } from 'react';

// Composant de chargement
function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="text-center">
                <div className="text-6xl mb-4 animate-spin">⚛️</div>
                <p className="text-xl text-gray-400">Chargement de la simulation...</p>
            </div>
        </div>
    );
}

// Composant Atome 3D (Interactive)
function Atom({ protons: initialProtons = 6, neutrons: initialNeutrons = 6, electrons: initialElectrons = 6 }) {
    const [protons, setProtons] = useState(initialProtons);
    const [neutrons, setNeutrons] = useState(initialNeutrons);
    const [electrons, setElectrons] = useState(initialElectrons);

    const elementName = useMemo(() => {
        const elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne"];
        return elements[protons - 1] || "??";
    }, [protons]);

    return (
        <group>
            <Html position={[3, 2, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[200px] backdrop-blur-md select-none">
                    <h3 className="text-[#00F5D4] font-bold mb-2">Structure Atomique</h3>
                    <div className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                        {elementName}
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="flex justify-between text-xs text-red-400 mb-1">
                                <span>Protons (+)</span>
                                <span>{protons}</span>
                            </label>
                            <input type="range" min="1" max="10" value={protons} onChange={(e) => setProtons(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500" />
                        </div>
                        <div>
                            <label className="flex justify-between text-xs text-gray-400 mb-1">
                                <span>Neutrons (0)</span>
                                <span>{neutrons}</span>
                            </label>
                            <input type="range" min="0" max="12" value={neutrons} onChange={(e) => setNeutrons(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-500" />
                        </div>
                        <div>
                            <label className="flex justify-between text-xs text-cyan-400 mb-1">
                                <span>Électrons (-)</span>
                                <span>{electrons}</span>
                            </label>
                            <input type="range" min="1" max="10" value={electrons} onChange={(e) => setElectrons(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                        </div>
                    </div>
                </div>
            </Html>

            {/* Noyau */}
            <group>
                {/* Protons (rouge) */}
                {Array.from({ length: protons }).map((_, i) => {
                    const angle = (i / protons) * Math.PI * 2;
                    const radius = 0.3 + (protons * 0.02); // Légère expansion
                    return (
                        <mesh
                            key={`proton-${i}`}
                            position={[
                                Math.cos(angle) * radius,
                                Math.sin(angle) * radius * 0.5,
                                Math.sin(angle) * radius
                            ]}
                        >
                            <sphereGeometry args={[0.15, 32, 32]} />
                            <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
                        </mesh>
                    );
                })}

                {/* Neutrons (gris) */}
                {Array.from({ length: neutrons }).map((_, i) => {
                    const angle = (i / neutrons) * Math.PI * 2 + Math.PI / neutrons;
                    const radius = 0.3 + (neutrons * 0.02);
                    return (
                        <mesh
                            key={`neutron-${i}`}
                            position={[
                                Math.cos(angle) * radius,
                                Math.sin(angle) * radius * 0.5,
                                -Math.sin(angle) * radius
                            ]}
                        >
                            <sphereGeometry args={[0.15, 32, 32]} />
                            <meshStandardMaterial color="#6B7280" />
                        </mesh>
                    );
                })}
            </group>

            {/* Orbitales électroniques */}
            <ElectronOrbitals electrons={electrons} />
        </group>
    );
}


function SingleElectron({ speed, offset, orbitRadius }) {
    const meshRef = useRef();
    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (meshRef.current) {
            meshRef.current.position.x = Math.cos(time * speed + offset) * orbitRadius;
            meshRef.current.position.z = Math.sin(time * speed + offset) * orbitRadius;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
            <pointLight distance={1} intensity={2} color="#00F5D4" />
        </mesh>
    );
}

function ElectronOrbitals({ electrons }) {
    return (
        <group>
            {Array.from({ length: electrons }).map((_, i) => {
                const orbitRadius = 2 + Math.floor(i / 2) * 1.0;
                const speed = 2 - Math.floor(i / 2) * 0.2; // Plus proche = plus vite
                const offset = (i % 2) * Math.PI;

                return (
                    <group key={`electron-orbit-${i}`} rotation={[Math.PI / 3, Math.PI / 4, i * (Math.PI / electrons)]}>
                        {/* Orbite */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[orbitRadius, 0.02, 32, 100]} />
                            <meshBasicMaterial color="#00F5D4" opacity={0.1} transparent />
                        </mesh>

                        {/* Électron */}
                        <SingleElectron speed={speed} offset={offset} orbitRadius={orbitRadius} />
                    </group>
                );
            })}
        </group>
    );
}


// Composant Molécule d'eau (Interactive)
function WaterMolecule() {
    const [temp, setTemp] = useState(25); // Température
    const hydrogenRef1 = useRef();
    const hydrogenRef2 = useRef();

    useFrame(({ clock }) => {
        // Vibration thermique
        const time = clock.getElapsedTime();
        const intensity = temp / 1000;

        if (hydrogenRef1.current) {
            hydrogenRef1.current.position.x = 0.8 + Math.sin(time * 10) * intensity;
            hydrogenRef1.current.position.y = 0.6 + Math.cos(time * 12) * intensity;
        }
        if (hydrogenRef2.current) {
            hydrogenRef2.current.position.x = 0.8 + Math.cos(time * 11) * intensity;
            hydrogenRef2.current.position.y = -0.6 + Math.sin(time * 13) * intensity;
        }
    });

    return (
        <group>
            <Html position={[0, 3, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[200px] backdrop-blur-md select-none">
                    <h3 className="text-blue-400 font-bold mb-2">Molécule d'Eau (H₂O)</h3>
                    <div className="mb-2">
                        <span className="text-xs text-gray-400">Température: {temp}°C</span>
                        <input type="range" min="0" max="100" value={temp} onChange={(e) => setTemp(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>
                </div>
            </Html>

            {/* Atome d'oxygène (rouge) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#EF4444" metalness={0.2} roughness={0.1} />
            </mesh>
            <Text position={[-0.2, 0, 0]} fontSize={0.3} color="white">O</Text>

            {/* Atomes d'hydrogène (blanc) */}
            <mesh ref={hydrogenRef1} position={[0.8, 0.6, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#F3F4F6" metalness={0.1} roughness={0.1} />
            </mesh>
            <Text position={[1.2, 0.7, 0]} fontSize={0.25} color="white">H</Text>

            <mesh ref={hydrogenRef2} position={[0.8, -0.6, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#F3F4F6" metalness={0.1} roughness={0.1} />
            </mesh>
            <Text position={[1.2, -0.7, 0]} fontSize={0.25} color="white">H</Text>

            {/* Liaisons */}
            <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
                <cylinderGeometry args={[0.08, 0.08, 0.9, 16]} />
                <meshStandardMaterial color="#9CA3AF" transparent opacity={0.5} />
            </mesh>
            <mesh position={[0.4, -0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
                <cylinderGeometry args={[0.08, 0.08, 0.9, 16]} />
                <meshStandardMaterial color="#9CA3AF" transparent opacity={0.5} />
            </mesh>

            <Text position={[1.5, 0, 0]} fontSize={0.2} color="gray">104.5°</Text>
        </group>
    );
}

// Composant Interférences d'Ondes (Interactive)
function WaveInterference() {
    const [separation, setSeparation] = useState(3);

    return (
        <group>
            <Html position={[0, 3.5, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[200px] backdrop-blur-md select-none">
                    <h3 className="text-purple-400 font-bold mb-2">Interférences</h3>
                    <label className="block text-xs mb-1">Séparation des sources</label>
                    <input type="range" min="1" max="5" step="0.1" value={separation} onChange={(e) => setSeparation(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                </div>
            </Html>

            <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">INTERFÉRENCES (Fentes de Young)</Text>

            {/* Source 1 */}
            <group position={[-separation / 2, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
                </mesh>
                <Text position={[0, -0.5, 0]} fontSize={0.3} color="#00F5D4">S1</Text>
                {/* Ondes concentriques Source 1 */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <mesh key={`wave1-${i}`} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.5 + i * 0.8, 0.03, 16, 64]} />
                        <meshStandardMaterial color="#00F5D4" transparent opacity={(5 - i) / 5 * 0.5} />
                    </mesh>
                ))}
            </group>

            {/* Source 2 */}
            <group position={[separation / 2, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={1} />
                </mesh>
                <Text position={[0, -0.5, 0]} fontSize={0.3} color="#7C3AED">S2</Text>
                {/* Ondes concentriques Source 2 */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <mesh key={`wave2-${i}`} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.5 + i * 0.8, 0.03, 16, 64]} />
                        <meshStandardMaterial color="#7C3AED" transparent opacity={(5 - i) / 5 * 0.5} />
                    </mesh>
                ))}
            </group>

            {/* Zone d'interférence constructive (Symbolique - au milieu) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.8} transparent opacity={Math.abs(Math.sin(separation)) + 0.2} />
            </mesh>
            <Text position={[0, -1.5, 0]} fontSize={0.3} color="#FCD34D">Zone de superposition</Text>
        </group>
    );
}

// Composant Circuit Électrique (Interactive)
function ElectricCircuit() {
    const [isClosed, setIsClosed] = useState(false);
    return (
        <group>
            <Html>
                <DraggableHtmlPanel title="⚡ Circuit Électrique" showCloseButton={false} defaultPosition="bottom-center" className="min-w-[200px] text-white">
                    <button
                        onClick={() => setIsClosed(!isClosed)}
                        className={`w-full py-2 rounded-lg font-bold transition-all ${isClosed ? 'bg-green-600 hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' : 'bg-red-600 hover:bg-red-500'}`}
                    >
                        {isClosed ? "OUVRIR LE CIRCUIT" : "FERMER LE CIRCUIT"}
                    </button>
                    <div className="mt-2 text-center text-xs text-gray-400">
                        {isClosed ? "Le courant circule ! ⚡" : "Circuit ouvert, pas de courant."}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">CIRCUIT ÉLECTRIQUE</Text>

            {/* Batterie/Pile */}
            <group position={[-2, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
                <mesh position={[0, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.1, 0.1, 0.2, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0, -0.8, 0]} fontSize={0.3} color="white">Pile (+/-)</Text>
            </group>

            {/* Fils conducteurs */}
            <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                <meshStandardMaterial color={isClosed ? "#F59E0B" : "#4B5563"} emissive={isClosed ? "#F59E0B" : "#000000"} emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                <meshStandardMaterial color={isClosed ? "#F59E0B" : "#4B5563"} emissive={isClosed ? "#F59E0B" : "#000000"} emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[-2, 0, 0]} rotation={[0, 0, 0]}> {/* Vertical Left */}
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color={isClosed ? "#F59E0B" : "#4B5563"} />
            </mesh>
            <mesh position={[2, 0, 0]} rotation={[0, 0, 0]}> {/* Vertical Right */}
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color={isClosed ? "#F59E0B" : "#4B5563"} />
            </mesh>


            {/* Lampe */}
            <group position={[2, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={isClosed ? "#FCD34D" : "#4B5563"} emissive={isClosed ? "#FCD34D" : "#000000"} emissiveIntensity={isClosed ? 2 : 0} />
                </mesh>
                {isClosed && <pointLight distance={5} intensity={5} color="#FCD34D" />}
                <Text position={[0, -0.8, 0]} fontSize={0.3} color={isClosed ? "#FCD34D" : "gray"}>Lampe</Text>
            </group>

            {/* Interrupteur */}
            <group position={[0, 1, 0]}>
                <mesh position={[0, 0.5, 0]} rotation={[0, 0, isClosed ? 0 : -0.5]}>
                    <boxGeometry args={[0.8, 0.1, 0.2]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[0, 1, 0]} fontSize={0.3} color="#10B981">Interrupteur</Text>
            </group>

            {/* Électrons en mouvement */}
            {isClosed && Array.from({ length: 8 }).map((_, i) => (
                <Electron key={i} offset={i} />
            ))}
        </group>
    );
}

function Electron({ offset }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        const t = (clock.getElapsedTime() * 2 + offset) % 8;
        if (ref.current) {
            // Trajectoire rectangulaire simplifiée
            if (t < 2) ref.current.position.set(-2 + t * 2, 1, 0); // Haut: Gauche -> Droite
            else if (t < 3) ref.current.position.set(2, 1 - (t - 2) * 2, 0); // Droite: Haut -> Bas
            else if (t < 5) ref.current.position.set(2 - (t - 3) * 2, -1, 0); // Bas: Droite -> Gauche
            else if (t < 6) ref.current.position.set(-2, -1 + (t - 5) * 2, 0); // Gauche: Bas -> Haut
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={2} />
        </mesh>
    );
}

const generateRibosomePositions = (count) => {
    return Array.from({ length: count }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = 1.6;
        return {
            key: `ribosome-${i}`,
            position: [
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            ]
        };
    });
};

// Composant Cellule (Interactive)
function Cell() {
    const [ribosomes, setRibosomes] = useState([]);
    const [activePart, setActivePart] = useState(null);

    useEffect(() => {
        setRibosomes(generateRibosomePositions(20));
    }, []);

    const parts = [
        { id: 'nucleus', name: "Noyau", desc: "Centre de contrôle (ADN)", color: "#7C3AED", pos: [0, 0, 1] },
        { id: 'mito', name: "Mitochondrie", desc: "Centrale énergétique (ATP)", color: "#F59E0B", pos: [1.5, 0, 0] },
        { id: 'ribo', name: "Ribosomes", desc: "Usines à protéines", color: "#FCD34D", pos: [-1, 1, 0] },
        { id: 'membrane', name: "Membrane", desc: "Barrière protectrice", color: "#10B981", pos: [0, 2.2, 0] },
    ];

    return (
        <group>
            <Html position={[-3, 0, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[200px] backdrop-blur-md select-none">
                    <h3 className="text-[#10B981] font-bold mb-2">Cellule Animale</h3>
                    <div className="space-y-2">
                        {parts.map(part => (
                            <button
                                key={part.id}
                                onClick={() => setActivePart(activePart === part.id ? null : part.id)}
                                className={`block w-full text-left px-3 py-1 rounded text-sm transition-colors ${activePart === part.id ? 'bg-white/20 text-white font-bold' : 'text-gray-400 hover:bg-white/10'}`}
                                style={{ borderLeft: `3px solid ${part.color}` }}
                            >
                                {part.name}
                            </button>
                        ))}
                    </div>
                    {activePart && (
                        <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-300">
                            {parts.find(p => p.id === activePart)?.desc}
                        </div>
                    )}
                </div>
            </Html>

            {/* Membrane cellulaire */}
            <mesh onClick={() => setActivePart('membrane')}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#10B981"
                    transparent
                    opacity={activePart === 'membrane' ? 0.1 : 0.2}
                    wireframe={false}
                    emissive="#10B981"
                    emissiveIntensity={activePart === 'membrane' ? 0.2 : 0}
                />
            </mesh>
            {activePart === 'membrane' && <Text position={[0, 2.3, 0]} fontSize={0.3} color="#10B981">Membrane</Text>}

            {/* Noyau */}
            <mesh position={[0, 0, 0]} onClick={(e) => { e.stopPropagation(); setActivePart('nucleus'); }}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={activePart === 'nucleus' ? 0.8 : 0.3} />
            </mesh>
            {activePart === 'nucleus' && <Text position={[0, 0, 1]} fontSize={0.3} color="white">Noyau</Text>}

            {/* Mitochondries */}
            {Array.from({ length: 5 }).map((_, i) => {
                const angle = (i / 5) * Math.PI * 2;
                const radius = 1.2;
                return (
                    <group key={`mito-${i}`} position={[
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.5,
                        Math.sin(angle) * radius
                    ]} onClick={(e) => { e.stopPropagation(); setActivePart('mito'); }}>
                        <mesh scale={[1, 0.5, 0.5]} rotation={[0, 0, angle]}>
                            <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
                            <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={activePart === 'mito' ? 0.8 : 0.2} />
                        </mesh>
                    </group>
                );
            })}

            {/* Ribosomes */}
            <group onClick={(e) => { e.stopPropagation(); setActivePart('ribo'); }}>
                {ribosomes.map((data) => (
                    <mesh key={data.key} position={data.position}>
                        <sphereGeometry args={[0.05]} />
                        <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={activePart === 'ribo' ? 1 : 0.2} />
                    </mesh>
                ))}
            </group>

        </group>
    );
}


const generateChloroplastPositions = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: `chloro-${i}`,
        position: [
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 0.5
        ]
    }));
};

// Composant Cellule Végétale (Amélioré : Photosynthèse animée)
function PlantCell() {
    const [chloroplasts, setChloroplasts] = useState([]);

    useEffect(() => {
        setChloroplasts(generateChloroplastPositions(6));
    }, []);
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#10B981">LA PHOTOSYNTHÈSE</Text>

            {/* Paroi cellulaire (Verte et rigide) */}
            <mesh>
                <boxGeometry args={[3, 4, 1]} />
                <meshStandardMaterial color="#10B981" transparent opacity={0.3} wireframe />
            </mesh>
            <mesh>
                <boxGeometry args={[2.8, 3.8, 0.8]} />
                <meshStandardMaterial color="#10B981" transparent opacity={0.1} />
            </mesh>

            {/* Chloroplastes */}
            {/* Chloroplastes */}
            {chloroplasts.map((data) => (
                <mesh
                    key={data.key}
                    position={data.position}
                >
                    <capsuleGeometry args={[0.2, 0.4, 4, 8]} />
                    <meshStandardMaterial color="#059669" />
                </mesh>
            ))}
            <Text position={[0, 0, 0.6]} fontSize={0.3} color="#059669">Chloroplastes</Text>

            {/* Soleil */}
            <mesh position={[2.5, 2.5, 1]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} />
            </mesh>
            <Text position={[2.5, 3.3, 1]} fontSize={0.3} color="#FCD34D">Lumière</Text>

            {/* Intrants (CO2 + H2O) */}
            <Text position={[-2.5, 1, 0]} fontSize={0.4} color="white">CO2 + H2O →</Text>

            {/* Extrants (O2 + Sucre) */}
            <Text position={[2.5, -1, 0]} fontSize={0.4} color="white">→ Sucre + O2</Text>

            {/* Rayons lumineux */}
            <mesh position={[1.5, 1.5, 0.5]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                <meshStandardMaterial color="#FCD34D" transparent opacity={0.6} />
            </mesh>
        </group>
    );
}

const generateLiquidParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: i,
        position: [
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1 - 0.5,
            (Math.random() - 0.5) * 1.5
        ]
    }));
};

const generateGasParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: i,
        position: [
            (Math.random() - 0.5) * 1.8,
            (Math.random() - 0.5) * 1.8,
            (Math.random() - 0.5) * 1.8
        ]
    }));
};

// Composant États de la Matière (Amélioré : 3 états + Température)
function StatesOfMatter() {
    const [temperature, setTemperature] = useState(0); // 0 (Solide) -> 1 (Liquide) -> 2 (Gaz)

    // Config particles based on temperature
    // Low temp: Vibrating grid
    // Med temp: Flowing bottom
    // High temp: Flying everywhere

    const particleCount = 27;

    return (
        <group>
            {/* Controls */}
            <Html position={[0, 3.5, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[250px] backdrop-blur-md">
                    <label className="block text-sm font-bold mb-2 text-[#00F5D4]">
                        Température : {temperature < 33 ? 'Froid (Solide)' : temperature < 66 ? 'Tiède (Liquide)' : 'Chaud (Gaz)'}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={temperature}
                        onChange={(e) => setTemperature(parseInt(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>-20°C</span>
                        <span>100°C</span>
                    </div>
                </div>
            </Html>

            <group position={[0, -1, 0]}>
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[4, 4, 4]} />
                    <meshStandardMaterial color="#9CA3AF" wireframe transparent opacity={0.2} />
                </mesh>

                {Array.from({ length: particleCount }).map((_, i) => (
                    <Particle
                        key={i}
                        index={i}
                        temperature={temperature}
                    />
                ))}
            </group>
        </group>
    );
}

function Particle({ index, temperature }) {
    const ref = useRef();
    const initialPos = useMemo(() => {
        const x = (index % 3) * 0.8 - 0.8;
        const y = Math.floor((index / 3) % 3) * 0.8 - 0.8;
        const z = Math.floor(index / 9) * 0.8 - 0.8;
        return new THREE.Vector3(x, y, z);
    }, [index]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const t = temperature / 100; // 0 to 1

        if (ref.current) {
            if (t < 0.33) {
                // Solid: Vibrate around initial pos
                const vibration = 0.02 * (1 + t * 5);
                ref.current.position.set(
                    initialPos.x + Math.sin(time * 10 + index) * vibration,
                    initialPos.y + Math.cos(time * 11 + index) * vibration,
                    initialPos.z + Math.sin(time * 9 + index) * vibration
                );
            } else if (t < 0.66) {
                // Liquid: Flow at bottom, strictly bounded
                const speed = 0.5;
                // Complex movement but kept "down"
                // Simplified for visual:
                ref.current.position.y = Math.max(-1.5, Math.min(0, ref.current.position.y + Math.sin(time + index) * 0.01));
                // Add brownian motionish
                ref.current.position.x = initialPos.x + Math.sin(time * speed + index) * 0.5;
                ref.current.position.z = initialPos.z + Math.cos(time * speed + index) * 0.5;
                ref.current.position.y = -1 + Math.sin(time + index) * 0.5; // Stay low
            } else {
                // Gas: Fly everywhere
                const speed = 1 + (t - 0.66) * 2;
                ref.current.position.x = Math.sin(time * speed + index) * 1.8;
                ref.current.position.y = Math.cos(time * speed * 0.8 + index) * 1.8;
                ref.current.position.z = Math.sin(time * speed * 0.5 + index * 2) * 1.8;
            }
        }
    });

    // Color interpolation
    const color = temperature < 33 ? "#3B82F6" : temperature < 66 ? "#FCD34D" : "#EF4444";

    return (
        <mesh ref={ref} position={initialPos}>
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}


// Composant Neurone (Système Nerveux) - INTERACTIF
function Neuron() {
    const [isStimulated, setIsStimulated] = useState(false);
    const [impulseProgress, setImpulseProgress] = useState(0);
    const [speed, setSpeed] = useState(1);
    const impulseRef = useRef();

    // Animation de l'influx nerveux
    useFrame((state, delta) => {
        if (isStimulated && impulseProgress < 100) {
            setImpulseProgress(prev => Math.min(100, prev + delta * 30 * speed));
        }

        if (impulseRef.current) {
            // Position de l'influx le long du neurone
            const progress = impulseProgress / 100;
            if (progress < 0.3) {
                // Dans le corps cellulaire
                impulseRef.current.position.x = -0.5 + progress * 2;
                impulseRef.current.position.y = Math.sin(progress * 20) * 0.2;
            } else if (progress < 0.9) {
                // Le long de l'axone
                impulseRef.current.position.x = (progress - 0.3) * 7;
                impulseRef.current.position.y = 0;
            } else {
                // Aux terminaisons
                impulseRef.current.position.x = 4.5;
            }
        }
    });

    const stimulate = () => {
        setIsStimulated(true);
        setImpulseProgress(0);
    };

    const reset = () => {
        setIsStimulated(false);
        setImpulseProgress(0);
    };

    const getPhase = () => {
        if (impulseProgress === 0) return '⏸️ Au repos';
        if (impulseProgress < 30) return '⚡ Dépolarisation (Dendrites)';
        if (impulseProgress < 80) return '🔥 Influx nerveux (Axone)';
        if (impulseProgress < 100) return '📡 Transmission (Synapse)';
        return '✅ Signal transmis !';
    };

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[0, 3.5, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧠 Neurone</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Vitesse : {speed}x</label>
                            <input
                                type="range"
                                min="0.5"
                                max="3"
                                step="0.5"
                                value={speed}
                                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FCD34D]"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={stimulate}
                                disabled={isStimulated && impulseProgress < 100}
                                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${isStimulated && impulseProgress < 100
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-yellow-600 hover:bg-yellow-500'
                                    }`}
                            >
                                ⚡ Stimuler
                            </button>
                            <button
                                onClick={reset}
                                className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                🔄
                            </button>
                        </div>

                        {/* Barre de progression */}
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Propagation</span>
                                <span>{Math.round(impulseProgress)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-yellow-400 transition-all"
                                    style={{ width: `${impulseProgress}%` }}
                                />
                            </div>
                        </div>

                        <div className="text-center font-bold text-[#00F5D4]">
                            {getPhase()}
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">NEURONE</Text>

            {/* Corps cellulaire (Soma) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#FCD34D"
                    emissive={isStimulated && impulseProgress < 30 ? "#F59E0B" : "#000"}
                    emissiveIntensity={isStimulated && impulseProgress < 30 ? 1 : 0.3}
                />
            </mesh>
            <Text position={[0, -1.5, 0]} fontSize={0.25} color="#FCD34D">Corps Cellulaire</Text>

            {/* Noyau */}
            <mesh position={[0, 0, 0.6]}>
                <sphereGeometry args={[0.35, 32, 32]} />
                <meshStandardMaterial color="#7C3AED" />
            </mesh>

            {/* Axone (Longue tige) */}
            <mesh position={[2.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.15, 0.25, 4, 16]} />
                <meshStandardMaterial
                    color="#FCD34D"
                    emissive={isStimulated && impulseProgress >= 30 && impulseProgress < 80 ? "#FCD34D" : "#000"}
                    emissiveIntensity={isStimulated ? 0.5 : 0}
                />
            </mesh>
            <Text position={[2.5, 0.5, 0]} fontSize={0.25} color="#FCD34D">Axone</Text>

            {/* Gaine de myéline (segments) */}
            {[0, 1, 2].map((i) => (
                <mesh key={i} position={[1.2 + i * 1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.25, 0.25, 0.8, 16]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.6} />
                </mesh>
            ))}
            <Text position={[2.5, -0.8, 0]} fontSize={0.15} color="#60A5FA">Gaine de Myéline</Text>

            {/* Dendrites (Ramifications) */}
            {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i / 6) * Math.PI + Math.PI / 2;
                return (
                    <group key={i} rotation={[0, 0, angle]}>
                        <mesh position={[-1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <coneGeometry args={[0.08, 1.2, 8]} />
                            <meshStandardMaterial
                                color="#FCD34D"
                                emissive={isStimulated && impulseProgress < 20 ? "#FCD34D" : "#000"}
                                emissiveIntensity={isStimulated && impulseProgress < 20 ? 0.8 : 0}
                            />
                        </mesh>
                    </group>
                );
            })}
            <Text position={[-2.2, 0, 0]} fontSize={0.25} color="#FCD34D">Dendrites</Text>

            {/* Terminaisons axonales */}
            <group position={[4.5, 0, 0]}>
                {[-0.3, 0, 0.3].map((y, i) => (
                    <mesh key={i} position={[0.3, y, 0]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial
                            color="#10B981"
                            emissive={impulseProgress >= 90 ? "#10B981" : "#000"}
                            emissiveIntensity={impulseProgress >= 90 ? 1 : 0}
                        />
                    </mesh>
                ))}
                <Text position={[0.5, -0.8, 0]} fontSize={0.15} color="#10B981">Synapse</Text>
            </group>

            {/* Influx nerveux (Particule qui voyage) */}
            {isStimulated && (
                <mesh ref={impulseRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={2} />
                    <pointLight color="#00F5D4" intensity={3} distance={2} />
                </mesh>
            )}
        </group>
    );
}

const generateRBC = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: `rbc-${i}`,
        position: [
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
    }));
};

const generateWBC = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: `wbc-${i}`,
        position: [
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
        ]
    }));
};

// Composant Vaisseau Sanguin (Circulation) - AMÉLIORÉ
function BloodStream() {
    const [flowSpeed, setFlowSpeed] = useState(1);
    const [heartRate, setHeartRate] = useState(70);
    const [rbc, setRbc] = useState([]);
    const [wbc, setWbc] = useState([]);
    const groupRef = useRef();

    useEffect(() => {
        setRbc(generateRBC(15));
        setWbc(generateWBC(3));
    }, []);

    // Animation du flux sanguin
    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (groupRef.current) {
            groupRef.current.children.forEach((child, i) => {
                if (child.userData.isBloodCell) {
                    // Mouvement ondulatoire le long du vaisseau
                    const offset = i * 0.5;
                    child.position.x = Math.sin(time * flowSpeed + offset) * 3;
                    // Légère ondulation verticale (pulsation)
                    child.position.y += Math.sin(time * (heartRate / 30) + offset) * 0.002;
                }
            });
        }
    });

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[0, 3.5, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#EF4444] font-bold mb-3 text-center">💓 Circulation Sanguine</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Vitesse du Flux : {flowSpeed.toFixed(1)}x</label>
                            <input
                                type="range"
                                min="0.1"
                                max="3"
                                step="0.1"
                                value={flowSpeed}
                                onChange={(e) => setFlowSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Fréquence Cardiaque : {heartRate} BPM</label>
                            <input
                                type="range"
                                min="40"
                                max="180"
                                step="5"
                                value={heartRate}
                                onChange={(e) => setHeartRate(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#DC2626]"
                            />
                        </div>

                        <div className="text-xs text-center pt-2 border-t border-white/10">
                            <span className={heartRate < 60 ? 'text-blue-400' : heartRate > 100 ? 'text-red-400' : 'text-green-400'}>
                                {heartRate < 60 ? '💤 Bradycardie' : heartRate > 100 ? '🏃 Tachycardie' : '✓ Normal'}
                            </span>
                        </div>
                    </div>
                </div>
            </Html>

            {/* Vaisseau (Tube) */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[2, 2, 8, 32, 1, true]} />
                <meshStandardMaterial color="#EF4444" side={2} transparent opacity={0.3} />
            </mesh>

            {/* Groupe animé */}
            <group ref={groupRef}>
                {/* Globules Rouges */}
                {rbc.map((data, i) => (
                    <mesh
                        key={data.key}
                        position={data.position}
                        rotation={data.rotation}
                        userData={{ isBloodCell: true }}
                    >
                        <torusGeometry args={[0.3, 0.15, 16, 32]} />
                        <meshStandardMaterial color="#DC2626" />
                    </mesh>
                ))}

                {/* Globules Blancs */}
                {wbc.map((data) => (
                    <mesh
                        key={data.key}
                        position={data.position}
                        userData={{ isBloodCell: true }}
                    >
                        <sphereGeometry args={[0.35, 32, 32]} />
                        <meshStandardMaterial color="#F3F4F6" roughness={0.8} />
                    </mesh>
                ))}
            </group>

            <Text position={[-3, 1.5, 0]} fontSize={0.3} color="#DC2626">Globules Rouges (O₂)</Text>
            <Text position={[3, -1.5, 0]} fontSize={0.3} color="white">Globules Blancs (Défense)</Text>
        </group>
    );
}

// Composant Croissance Végétale - AMÉLIORÉ
function PlantGrowth() {
    const [growthStage, setGrowthStage] = useState(0); // 0-100
    const [water, setWater] = useState(50);
    const [sunlight, setSunlight] = useState(50);
    const plantRef = useRef();

    // Croissance calculée basée sur conditions
    const effectiveGrowth = Math.min(100, growthStage * (water / 50) * (sunlight / 50));
    const plantScale = 0.1 + (effectiveGrowth / 100) * 0.9; // 0.1 à 1.0
    const stemHeight = 0.5 + (effectiveGrowth / 100) * 2.5;
    const flowerVisible = effectiveGrowth > 80;

    // Animation légère de balancement
    useFrame((state) => {
        if (plantRef.current) {
            plantRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05 * plantScale;
        }
    });

    // État de santé
    const healthStatus = water < 30 || sunlight < 20
        ? { text: '🥀 Manque de ressources', color: 'text-red-400' }
        : water > 80 && sunlight > 80
            ? { text: '🌟 Conditions optimales !', color: 'text-green-400' }
            : { text: '🌱 Croissance normale', color: 'text-yellow-400' };

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[0, 4, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#10B981] font-bold mb-3 text-center">🌱 Croissance Végétale</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">⏱️ Temps (jours) : {Math.round(growthStage / 10)} / 10</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={growthStage}
                                onChange={(e) => setGrowthStage(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">💧 Eau : {water}%</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={water}
                                onChange={(e) => setWater(parseInt(e.target.value))}
                                className="w-full h-2 bg-gradient-to-r from-yellow-600 to-blue-500 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">☀️ Lumière : {sunlight}%</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sunlight}
                                onChange={(e) => setSunlight(parseInt(e.target.value))}
                                className="w-full h-2 bg-gradient-to-r from-gray-600 to-yellow-400 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div className="pt-2 border-t border-white/10 text-center">
                            <div className="text-sm font-bold text-[#10B981]">Croissance: {Math.round(effectiveGrowth)}%</div>
                            <div className={`text-xs ${healthStatus.color}`}>{healthStatus.text}</div>
                        </div>
                    </div>
                </div>
            </Html>

            {/* Soleil (intensité variable) */}
            <mesh position={[3, 3, 0]}>
                <sphereGeometry args={[0.5 + sunlight / 200]} />
                <meshStandardMaterial
                    color="#FCD34D"
                    emissive="#FCD34D"
                    emissiveIntensity={sunlight / 50}
                />
            </mesh>

            {/* Pluie (si eau élevée) */}
            {water > 60 && (
                <group>
                    {[...Array(5)].map((_, i) => (
                        <mesh key={i} position={[-1 + i * 0.5, 2 - (i % 3) * 0.3, 0]}>
                            <sphereGeometry args={[0.05]} />
                            <meshStandardMaterial color="#3B82F6" transparent opacity={0.8} />
                        </mesh>
                    ))}
                </group>
            )}

            {/* Sol */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color={water > 50 ? "#5D4037" : "#8B4513"} />
            </mesh>

            {/* Plante animée */}
            <group ref={plantRef} position={[0, -2, 0]} scale={[1, plantScale, 1]}>
                {/* Graine/Racines */}
                {growthStage > 5 && (
                    <mesh position={[0, 0.1, 0]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#8B4513" />
                    </mesh>
                )}

                {/* Tige */}
                {growthStage > 15 && (
                    <mesh position={[0, stemHeight / 2, 0]}>
                        <cylinderGeometry args={[0.08, 0.12, stemHeight, 8]} />
                        <meshStandardMaterial color="#10B981" />
                    </mesh>
                )}

                {/* Feuilles (apparaissent progressivement) */}
                {growthStage > 40 && (
                    <>
                        <mesh position={[0.4, stemHeight * 0.5, 0]} rotation={[0, 0, -Math.PI / 4]} scale={[plantScale, 0.3, 0.5]}>
                            <sphereGeometry args={[0.4]} />
                            <meshStandardMaterial color="#22C55E" />
                        </mesh>
                        <mesh position={[-0.4, stemHeight * 0.3, 0]} rotation={[0, 0, Math.PI / 4]} scale={[plantScale, 0.3, 0.5]}>
                            <sphereGeometry args={[0.35]} />
                            <meshStandardMaterial color="#22C55E" />
                        </mesh>
                    </>
                )}

                {growthStage > 60 && (
                    <>
                        <mesh position={[0.3, stemHeight * 0.7, 0]} rotation={[0, 0, -Math.PI / 5]} scale={[plantScale * 0.8, 0.25, 0.4]}>
                            <sphereGeometry args={[0.3]} />
                            <meshStandardMaterial color="#16A34A" />
                        </mesh>
                        <mesh position={[-0.35, stemHeight * 0.6, 0]} rotation={[0, 0, Math.PI / 5]} scale={[plantScale * 0.8, 0.25, 0.4]}>
                            <sphereGeometry args={[0.3]} />
                            <meshStandardMaterial color="#16A34A" />
                        </mesh>
                    </>
                )}

                {/* Fleur (stade final) */}
                {flowerVisible && (
                    <group position={[0, stemHeight + 0.3, 0]}>
                        {/* Pétales */}
                        {[0, 1, 2, 3, 4].map((i) => (
                            <mesh key={i} position={[Math.cos(i * Math.PI * 2 / 5) * 0.2, 0, Math.sin(i * Math.PI * 2 / 5) * 0.2]} rotation={[Math.PI / 4, 0, i * Math.PI * 2 / 5]}>
                                <sphereGeometry args={[0.15]} scale={[1, 0.3, 0.5]} />
                                <meshStandardMaterial color="#EC4899" />
                            </mesh>
                        ))}
                        {/* Centre */}
                        <mesh>
                            <sphereGeometry args={[0.1]} />
                            <meshStandardMaterial color="#FCD34D" />
                        </mesh>
                    </group>
                )}
            </group>

            <Text position={[0, -3, 0]} fontSize={0.25} color="white">
                Photosynthèse: CO₂ + H₂O + Lumière → Glucose + O₂
            </Text>
        </group>
    );
}

// Composant Chaîne Alimentaire
function FoodChain() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">Chaîne Alimentaire</Text>

            {/* Producteur (Herbe) */}
            <group position={[-3, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="#10B981">Producteur (Herbe)</Text>
            </group>

            {/* Consommateur 1 (Vache/Lapin - Cube Blanc) */}
            <group position={[0, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Consommateur I (Herbivore)</Text>
            </group>

            {/* Consommateur 2 (Lion - Cube Rouge) */}
            <group position={[3, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="#EF4444">Consommateur II (Carnivore)</Text>
            </group>

            {/* Flèches */}
            <Text position={[-1.5, 0, 0]} fontSize={0.5} color="white">→</Text>
            <Text position={[1.5, 0, 0]} fontSize={0.5} color="white">→</Text>
            <Text position={[0, -3, 0]} fontSize={0.3} color="gray">&quot;Est mangé par&quot;</Text>
        </group>
    );
}

// Composant Classification des Vertébrés
function VertebrateClassification() {
    const groups = [
        { name: "Mammifères", color: "#FCD34D", pos: [-4, 0, 0] },
        { name: "Oiseaux", color: "#60A5FA", pos: [-2, 0, 0] },
        { name: "Reptiles", color: "#10B981", pos: [0, 0, 0] },
        { name: "Amphibiens", color: "#8B5CF6", pos: [2, 0, 0] },
        { name: "Poissons", color: "#EF4444", pos: [4, 0, 0] }
    ];

    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">Classification des Vertébrés</Text>
            {groups.map((g, i) => (
                <group key={i} position={g.pos}>
                    <mesh>
                        <sphereGeometry args={[0.6]} />
                        <meshStandardMaterial color={g.color} />
                    </mesh>
                    <Text position={[0, -1, 0]} fontSize={0.3} color="white">{g.name}</Text>
                </group>
            ))}
        </group>
    );
}







// Composant Conservation de l'Énergie - INTERACTIF (Pendule)
function EnergyConservation() {
    const [initialAngle, setInitialAngle] = useState(60); // Angle initial en degrés
    const [isSwinging, setIsSwinging] = useState(true);
    const [damping, setDamping] = useState(0); // 0 = pas d'amortissement
    const pendulumRef = useRef();
    const angleRef = useRef(initialAngle * Math.PI / 180);
    const velocityRef = useRef(0);

    const length = 2; // Longueur du pendule
    const gravity = 9.8;

    // Animation du pendule
    useFrame((state, delta) => {
        if (!isSwinging) return;

        // Équation du pendule simple
        const angularAcceleration = -(gravity / length) * Math.sin(angleRef.current);
        velocityRef.current += angularAcceleration * delta;
        velocityRef.current *= (1 - damping * 0.01); // Amortissement
        angleRef.current += velocityRef.current * delta;

        if (pendulumRef.current) {
            pendulumRef.current.rotation.z = angleRef.current;
        }
    });

    const resetPendulum = () => {
        angleRef.current = initialAngle * Math.PI / 180;
        velocityRef.current = 0;
        setIsSwinging(true);
    };

    // Calcul des énergies (pour affichage)
    const height = length * (1 - Math.cos(angleRef.current));
    const velocity = velocityRef.current * length;
    const mass = 1; // kg
    const potentialEnergy = mass * gravity * height;
    const kineticEnergy = 0.5 * mass * velocity * velocity;
    const totalEnergy = potentialEnergy + kineticEnergy;

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html>
                <DraggableHtmlPanel title="⚡ Conservation de l'Énergie" showCloseButton={false} defaultPosition="bottom-center" className="min-w-[260px] text-white">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚡ Conservation de l'Énergie</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Angle Initial : {initialAngle}°</label>
                            <input
                                type="range"
                                min="10"
                                max="90"
                                value={initialAngle}
                                onChange={(e) => setInitialAngle(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FCD34D]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Amortissement : {damping}%</label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={damping}
                                onChange={(e) => setDamping(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsSwinging(!isSwinging)}
                                className={`flex-1 py-2 rounded-lg font-bold transition-colors ${isSwinging ? 'bg-red-600' : 'bg-green-600'
                                    }`}
                            >
                                {isSwinging ? '⏸️ Pause' : '▶️ Lancer'}
                            </button>
                            <button
                                onClick={resetPendulum}
                                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                🔄
                            </button>
                        </div>

                        {/* Affichage des énergies */}
                        <div className="text-xs font-mono space-y-1 p-2 bg-white/5 rounded-lg">
                            <div className="flex justify-between">
                                <span className="text-yellow-400">Ep (Potentielle):</span>
                                <span>{potentialEnergy.toFixed(2)} J</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-red-400">Ec (Cinétique):</span>
                                <span>{kineticEnergy.toFixed(2)} J</span>
                            </div>
                            <div className="flex justify-between border-t border-white/20 pt-1">
                                <span className="text-green-400">Em (Totale):</span>
                                <span className="font-bold">{totalEnergy.toFixed(2)} J</span>
                            </div>
                        </div>

                        <div className="text-center text-xs">
                            <span className="text-[#00F5D4]">Ep + Ec = Constante ✓</span>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">PENDULE SIMPLE</Text>

            {/* Point d'attache */}
            <mesh position={[0, 2, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#6B7280" />
            </mesh>

            {/* Pendule (groupe qui pivote) */}
            <group ref={pendulumRef} position={[0, 2, 0]}>
                {/* Fil */}
                <mesh position={[0, -length / 2, 0]}>
                    <cylinderGeometry args={[0.03, 0.03, length, 8]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>

                {/* Masse */}
                <mesh position={[0, -length, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial
                        color="#3B82F6"
                        emissive={isSwinging ? "#3B82F6" : "#000"}
                        emissiveIntensity={Math.abs(velocityRef.current) * 0.5}
                    />
                </mesh>

                {/* Indicateur vitesse */}
                {isSwinging && Math.abs(velocityRef.current) > 0.5 && (
                    <mesh position={[0, -length - 0.5, 0]}>
                        <coneGeometry args={[0.1, 0.3, 8]} />
                        <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
                    </mesh>
                )}
            </group>

            {/* Trajectoire (arc) */}
            <mesh position={[0, 2, 0]} rotation={[0, 0, Math.PI]}>
                <torusGeometry args={[length, 0.02, 16, 100, Math.PI * (initialAngle / 90)]} />
                <meshStandardMaterial color="#00F5D4" transparent opacity={0.3} />
            </mesh>

            {/* Légende */}
            <group position={[-3, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" />
                </mesh>
                <Text position={[0.5, 0.5, 0]} fontSize={0.2} color="#FCD34D" anchorX="left">Ep max (haut)</Text>

                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
                </mesh>
                <Text position={[0.5, 0, 0]} fontSize={0.2} color="#EF4444" anchorX="left">Ec max (bas)</Text>
            </group>
        </group>
    );
}

// Composant Cycle de l'Eau (Amélioré)
function WaterCycle() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#3B82F6">CYCLE DE L&apos;EAU</Text>

            {/* Océan */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 3]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
            </mesh>
            <Text position={[-2, -1.5, 0]} fontSize={0.3} color="#3B82F6">Océan</Text>

            {/* Soleil */}
            <mesh position={[3, 2, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} />
            </mesh>
            <Text position={[3, 2.8, 0]} fontSize={0.3} color="#FCD34D">Soleil</Text>

            {/* Évaporation (flèches montantes) */}
            <mesh position={[0, -0.5, 0]}>
                <coneGeometry args={[0.1, 0.5, 8]} />
                <meshStandardMaterial color="#60A5FA" transparent opacity={0.7} />
            </mesh>
            <Text position={[0.5, -0.5, 0]} fontSize={0.25} color="white">Évaporation</Text>

            {/* Nuages */}
            <group position={[0, 1.5, 0]}>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4, 16, 16]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
                <mesh position={[0.5, 0.1, 0]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
                <mesh position={[-0.4, 0.05, 0]}>
                    <sphereGeometry args={[0.35, 16, 16]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
            </group>
            <Text position={[0, 2.2, 0]} fontSize={0.3} color="white">Nuages (Condensation)</Text>

            {/* Pluie */}
            {Array.from({ length: 5 }).map((_, i) => (
                <mesh key={i} position={[-1 + i * 0.5, 0.5, 0]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
            ))}
            <Text position={[-1.5, 0.8, 0]} fontSize={0.25} color="#3B82F6">Précipitations</Text>

            {/* Montagne */}
            <mesh position={[-2, -1, 0]}>
                <coneGeometry args={[0.8, 1.5, 4]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <Text position={[-2, 0.2, 0]} fontSize={0.25} color="white">Montagne</Text>
        </group>
    );
}

// Composant Système Digestif - INTERACTIF
function DigestiveSystem() {
    const [digestionProgress, setDigestionProgress] = useState(0);
    const [isDigesting, setIsDigesting] = useState(false);
    const [speed, setSpeed] = useState(1);
    const foodRef = useRef();

    // Position du bol alimentaire en fonction de la progression
    const getFoodPosition = (progress) => {
        if (progress < 15) return { y: 2.5 - (progress / 15) * 0.5, scale: 1, stage: 'Bouche' };
        if (progress < 30) return { y: 2 - ((progress - 15) / 15) * 2, scale: 0.9, stage: 'Œsophage' };
        if (progress < 50) return { y: 0, scale: 0.7 + Math.sin(progress * 0.3) * 0.1, stage: 'Estomac' };
        if (progress < 75) return { y: -1 + Math.sin(progress * 0.2) * 0.3, scale: 0.5, stage: 'Intestin Grêle' };
        if (progress < 95) return { y: -2, scale: 0.3, stage: 'Gros Intestin' };
        return { y: -2.5, scale: 0.2, stage: 'Élimination' };
    };

    const currentStage = getFoodPosition(digestionProgress);

    // Descriptions par étape
    const stageDescriptions = {
        'Bouche': '🦷 Mastication + Salive (Amylase)',
        'Œsophage': '🔻 Péristaltisme (contraction)',
        'Estomac': '⚗️ Brassage + Acide gastrique',
        'Intestin Grêle': '🔬 Absorption des nutriments',
        'Gros Intestin': '💧 Absorption de l\'eau',
        'Élimination': '✅ Digestion complète !'
    };

    // Animation
    useFrame((state, delta) => {
        if (isDigesting && digestionProgress < 100) {
            setDigestionProgress(prev => Math.min(100, prev + delta * 5 * speed));
        }

        if (foodRef.current) {
            const pos = getFoodPosition(digestionProgress);
            foodRef.current.position.y = pos.y;
            foodRef.current.scale.setScalar(pos.scale);
        }
    });

    const startDigestion = () => {
        setIsDigesting(true);
        setDigestionProgress(0);
    };

    const resetDigestion = () => {
        setIsDigesting(false);
        setDigestionProgress(0);
    };

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[2.5, 1, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#EF4444] font-bold mb-3 text-center">🍽️ Système Digestif</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Vitesse de Digestion : {speed}x</label>
                            <input
                                type="range"
                                min="0.5"
                                max="3"
                                step="0.5"
                                value={speed}
                                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={startDigestion}
                                disabled={isDigesting && digestionProgress < 100}
                                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${isDigesting && digestionProgress < 100
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-green-600 hover:bg-green-500'
                                    }`}
                            >
                                {isDigesting ? '⏳ En cours...' : '🍎 Manger !'}
                            </button>
                            <button
                                onClick={resetDigestion}
                                className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                🔄
                            </button>
                        </div>

                        {/* Barre de progression */}
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Progression</span>
                                <span className="font-bold">{Math.round(digestionProgress)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-green-500 transition-all"
                                    style={{ width: `${digestionProgress}%` }}
                                />
                            </div>
                        </div>

                        <div className="text-center p-2 bg-white/5 rounded-lg">
                            <div className="font-bold text-[#FCD34D]">{currentStage.stage}</div>
                            <div className="text-xs text-gray-300">{stageDescriptions[currentStage.stage]}</div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">SYSTÈME DIGESTIF</Text>

            {/* Bol alimentaire animé */}
            <mesh ref={foodRef} position={[0, 2.5, 0.3]}>
                <sphereGeometry args={[0.25]} />
                <meshStandardMaterial
                    color={digestionProgress < 50 ? "#EF4444" : digestionProgress < 80 ? "#F59E0B" : "#10B981"}
                    emissive={isDigesting ? "#FCD34D" : "#000"}
                    emissiveIntensity={isDigesting ? 0.3 : 0}
                />
            </mesh>

            {/* Bouche */}
            <group position={[0, 2, 0]}>
                <mesh>
                    <sphereGeometry args={[0.35, 32, 32]} />
                    <meshStandardMaterial
                        color="#EC4899"
                        transparent
                        opacity={digestionProgress < 15 && digestionProgress > 0 ? 0.9 : 0.6}
                    />
                </mesh>
                <Text position={[-0.7, 0, 0]} fontSize={0.2} color="#EC4899">Bouche</Text>
            </group>

            {/* Œsophage */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.12, 0.15, 1.5, 16]} />
                <meshStandardMaterial
                    color="#F59E0B"
                    transparent
                    opacity={digestionProgress >= 15 && digestionProgress < 30 ? 0.9 : 0.5}
                />
            </mesh>

            {/* Estomac */}
            <group position={[0, 0, 0]}>
                <mesh scale={[1.3, 1.1, 0.9]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial
                        color="#EF4444"
                        transparent
                        opacity={digestionProgress >= 30 && digestionProgress < 50 ? 0.9 : 0.6}
                    />
                </mesh>
                <Text position={[-1, 0, 0]} fontSize={0.2} color="#EF4444">Estomac</Text>
                {/* Animation de brassage dans l'estomac */}
                {digestionProgress >= 30 && digestionProgress < 50 && (
                    <pointLight color="#EF4444" intensity={1} distance={2} />
                )}
            </group>

            {/* Intestin grêle */}
            <group position={[0, -1.2, 0]}>
                {/* Représentation en serpentin */}
                <mesh position={[0.3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.35, 0.08, 16, 32]} />
                    <meshStandardMaterial
                        color="#10B981"
                        transparent
                        opacity={digestionProgress >= 50 && digestionProgress < 75 ? 0.9 : 0.5}
                    />
                </mesh>
                <mesh position={[-0.2, -0.25, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
                    <torusGeometry args={[0.3, 0.08, 16, 32]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.5} />
                </mesh>
                <mesh position={[0.15, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.25, 0.08, 16, 32]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.5} />
                </mesh>
                <Text position={[-1, -0.2, 0]} fontSize={0.2} color="#10B981">Intestin Grêle</Text>
            </group>

            {/* Gros intestin */}
            <group position={[0, -2.2, 0]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.5, 0.12, 16, 32, Math.PI * 1.5]} />
                    <meshStandardMaterial
                        color="#8B5CF6"
                        transparent
                        opacity={digestionProgress >= 75 && digestionProgress < 95 ? 0.9 : 0.5}
                    />
                </mesh>
                <Text position={[-1, 0, 0]} fontSize={0.2} color="#8B5CF6">Gros Intestin</Text>
            </group>

            {/* Temps total estimé */}
            <Text position={[0, -3.2, 0]} fontSize={0.2} color="gray">
                Durée réelle : 24-72 heures
            </Text>
        </group>
    );
}



// Composant Forces et Mouvement - INTERACTIF
function ForcePhysics() {
    const [mass, setMass] = useState(5); // kg
    const [appliedForce, setAppliedForce] = useState(20); // N
    const [friction, setFriction] = useState(0.3); // coefficient
    const [isApplying, setIsApplying] = useState(false);
    const objectRef = useRef();
    const velocityRef = useRef(0);
    const positionRef = useRef(0);

    // Calculs physiques
    const weight = mass * 9.8; // Poids (N)
    const normalForce = weight;
    const frictionForce = friction * normalForce;
    const netForce = isApplying ? appliedForce - frictionForce : -frictionForce;
    const acceleration = netForce / mass;

    // Animation
    useFrame((state, delta) => {
        if (objectRef.current) {
            // Mise à jour de la physique
            if (isApplying || velocityRef.current > 0.01) {
                velocityRef.current += acceleration * delta;
                velocityRef.current = Math.max(0, velocityRef.current); // Pas de recul
                positionRef.current += velocityRef.current * delta;

                // Limiter la position
                if (positionRef.current > 3) {
                    positionRef.current = -3;
                }
            }

            objectRef.current.position.x = positionRef.current;
        }
    });

    // Vitesse et mouvement
    const isMoving = velocityRef.current > 0.01;
    const status = isApplying
        ? (netForce > 0 ? '🚀 Accélération !' : '⚠️ Friction > Force')
        : (isMoving ? '🛑 Décélération...' : '⏸️ Au repos');

    return (
        <>
            {/* Panneau de Contrôle - Draggable - Rendu Portal */}
            <Html>
                <DraggableHtmlPanel title="⚡ Forces et Mouvement" showCloseButton={false} defaultPosition="bottom-center" className="min-w-[300px]">
                    <div className="text-white space-y-3">
                        {/* Le reste du contenu sera inséré par le contexte, mais je dois m'assurer d'inclure tout le contenu du div original */}
                        <div>
                            <label className="block text-xs mb-1">Masse : {mass} kg</label>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={mass}
                                onChange={(e) => setMass(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Force Appliquée : {appliedForce} N</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={appliedForce}
                                onChange={(e) => setAppliedForce(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Coefficient de Friction : {friction.toFixed(2)}</label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={friction}
                                onChange={(e) => setFriction(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
                            />
                        </div>

                        <button
                            onMouseDown={() => setIsApplying(true)}
                            onMouseUp={() => setIsApplying(false)}
                            onMouseLeave={() => setIsApplying(false)}
                            className={`w-full py-3 rounded-lg font-bold transition-colors ${isApplying
                                ? 'bg-red-600 scale-95'
                                : 'bg-green-600 hover:bg-green-500'
                                }`}
                        >
                            {isApplying ? '↠ POUSSÉE EN COURS...' : '👆 Maintenir pour Pousser'}
                        </button>

                        <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-black/50 p-2 rounded-lg">
                            <div>Poids (P) : <span className="text-green-400">{weight.toFixed(1)} N</span></div>
                            <div>Friction : <span className="text-yellow-400">{frictionForce.toFixed(1)} N</span></div>
                            <div>Force Nette : <span className={netForce > 0 ? 'text-blue-400' : 'text-red-400'}>{netForce.toFixed(1)} N</span></div>
                            <div>Accélération : <span className="text-purple-400">{acceleration.toFixed(2)} m/s²</span></div>
                        </div>

                        <div className={`text-center font-bold ${netForce > 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {status}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group>

                <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">LOIS DE NEWTON</Text>

                {/* Sol */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 6]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>

                {/* Marqueurs de distance */}
                {[-3, -2, -1, 0, 1, 2, 3].map((x) => (
                    <mesh key={x} position={[x, -1.48, 0]}>
                        <boxGeometry args={[0.05, 0.02, 0.5]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}

                {/* Objet en mouvement */}
                <group ref={objectRef}>
                    <mesh position={[0, -0.5, 0]}>
                        <boxGeometry args={[0.8 + mass / 20, 0.8 + mass / 20, 0.8 + mass / 20]} />
                        <meshStandardMaterial
                            color="#3B82F6"
                            emissive={isApplying ? "#3B82F6" : "#000"}
                            emissiveIntensity={isApplying ? 0.3 : 0}
                        />
                    </mesh>
                    <Text position={[0, 0.3 + mass / 30, 0]} fontSize={0.25} color="white">
                        m = {mass} kg
                    </Text>

                    {/* Force appliquée (vecteur rouge) */}
                    {isApplying && (
                        <group position={[-(0.5 + mass / 30), -0.5, 0]}>
                            <mesh rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.05, 0.05, appliedForce / 30]} />
                                <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
                            </mesh>
                            <mesh position={[appliedForce / 60, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                                <coneGeometry args={[0.15, 0.3, 16]} />
                                <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
                            </mesh>
                        </group>
                    )}

                    {/* Poids (vecteur vert vers le bas) */}
                    <group position={[0, -1, 0]}>
                        <mesh>
                            <cylinderGeometry args={[0.04, 0.04, weight / 50]} />
                            <meshStandardMaterial color="#10B981" />
                        </mesh>
                        <mesh position={[0, -weight / 100, 0]} rotation={[Math.PI, 0, 0]}>
                            <coneGeometry args={[0.12, 0.25, 16]} />
                            <meshStandardMaterial color="#10B981" />
                        </mesh>
                    </group>
                </group>
            </group>

            {/* Formule */}
            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#FCD34D">
                F = m × a | {appliedForce}N = {mass}kg × {(appliedForce / mass).toFixed(1)}m/s²
            </Text>

        </>
    );
}

// Composant Plaques Tectoniques - INTERACTIF
function TectonicPlates() {
    const [movementType, setMovementType] = useState('divergent'); // convergent, divergent, transform
    const [speed, setSpeed] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);
    const plate1Ref = useRef();
    const plate2Ref = useRef();
    const volcanoRef = useRef();

    const movementTypes = {
        convergent: { name: 'Convergence', desc: 'Les plaques se rapprochent → Montagnes, Volcans', icon: '🏔️' },
        divergent: { name: 'Divergence', desc: 'Les plaques s\'éloignent → Rifts, Océans', icon: '🌊' },
        transform: { name: 'Coulissement', desc: 'Les plaques glissent → Failles, Séismes', icon: '⚡' }
    };

    // Animation
    useFrame((state) => {
        if (!isAnimating) return;
        const time = state.clock.elapsedTime * speed;

        if (plate1Ref.current && plate2Ref.current) {
            if (movementType === 'divergent') {
                // Les plaques s'éloignent
                const offset = Math.sin(time * 0.5) * 0.5;
                plate1Ref.current.position.x = -1.5 - offset;
                plate2Ref.current.position.x = 1.5 + offset;
            } else if (movementType === 'convergent') {
                // Les plaques se rapprochent
                const offset = Math.sin(time * 0.5) * 0.3;
                plate1Ref.current.position.x = -1.5 + offset;
                plate2Ref.current.position.x = 1.5 - offset;
                // La plaque 2 monte (subduction)
                plate2Ref.current.position.y = 0.2 + Math.abs(offset) * 0.5;
            } else {
                // Coulissement horizontale (transform)
                const offset = Math.sin(time * 0.8) * 0.5;
                plate1Ref.current.position.z = offset;
                plate2Ref.current.position.z = -offset;
                // Tremblement
                plate1Ref.current.position.y = Math.random() * 0.02;
                plate2Ref.current.position.y = Math.random() * 0.02;
            }
        }

        // Volcan qui pulse en mode convergent
        if (volcanoRef.current && movementType === 'convergent') {
            volcanoRef.current.scale.y = 1 + Math.sin(time * 2) * 0.1;
        }
    });

    return (
        <>
            {/* Panneau de Contrôle - Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="🌍 Tectonique des Plaques">
                <div className="bg-transparent text-white min-w-[280px]">

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-2">Type de Mouvement</label>
                            <div className="grid grid-cols-3 gap-1">
                                {Object.entries(movementTypes).map(([key, data]) => (
                                    <button
                                        key={key}
                                        onClick={() => setMovementType(key)}
                                        className={`py-2 px-1 rounded-lg text-xs font-bold transition-colors ${movementType === key
                                            ? 'bg-orange-600'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                            }`}
                                    >
                                        {data.icon}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Vitesse : {speed}x</label>
                            <input
                                type="range"
                                min="0.1"
                                max="3"
                                step="0.1"
                                value={speed}
                                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FF4500]"
                            />
                        </div>

                        <button
                            onClick={() => setIsAnimating(!isAnimating)}
                            className={`w-full py-2 rounded-lg font-bold transition-colors ${isAnimating ? 'bg-red-600' : 'bg-green-600'
                                }`}
                        >
                            {isAnimating ? '⏸️ Pause' : '▶️ Animer'}
                        </button>

                        <div className="p-2 bg-white/5 rounded-lg text-center">
                            <div className="font-bold text-[#FF4500]">{movementTypes[movementType].name}</div>
                            <div className="text-xs text-gray-300">{movementTypes[movementType].desc}</div>
                        </div>
                    </div>
                </div>
            </DraggableHtmlPanel>

            <group>

                <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">TECTONIQUE DES PLAQUES</Text>

                {/* Plaque 1 */}
                <group ref={plate1Ref} position={[-1.5, 0, 0]}>
                    <mesh>
                        <boxGeometry args={[3, 0.5, 3]} />
                        <meshStandardMaterial color="#8B4513" />
                    </mesh>
                    <Text position={[0, 0.5, 0]} fontSize={0.25} color="white">Plaque A</Text>
                </group>

                {/* Plaque 2 */}
                <group ref={plate2Ref} position={[1.5, 0.2, 0]}>
                    <mesh>
                        <boxGeometry args={[3, 0.5, 3]} />
                        <meshStandardMaterial color="#A0522D" />
                    </mesh>
                    <Text position={[0, 0.5, 0]} fontSize={0.25} color="white">Plaque B</Text>
                </group>

                {/* Magma (sous les plaques) */}
                <mesh position={[0, -1.2, 0]}>
                    <sphereGeometry args={[2.5, 32, 32]} />
                    <meshStandardMaterial
                        color="#FF4500"
                        emissive="#FF4500"
                        emissiveIntensity={isAnimating ? 0.5 + Math.random() * 0.2 : 0.3}
                    />
                </mesh>
                <Text position={[0, -2.5, 0]} fontSize={0.25} color="#FF4500">Asthénosphère (Magma)</Text>

                {/* Volcan (visible en mode convergent) */}
                {movementType === 'convergent' && (
                    <group ref={volcanoRef} position={[0, 0.5, 0]}>
                        <mesh>
                            <coneGeometry args={[0.6, 1.8, 32]} />
                            <meshStandardMaterial color="#654321" />
                        </mesh>
                        <pointLight position={[0, 1, 0]} color="#FF4500" intensity={2} distance={3} />
                        <Text position={[0, 1.2, 0]} fontSize={0.2} color="#FF4500">🌋 Volcan</Text>
                    </group>
                )}

                {/* Rift central (visible en mode divergent) */}
                {movementType === 'divergent' && (
                    <mesh position={[0, -0.5, 0]}>
                        <boxGeometry args={[0.5, 0.3, 3]} />
                        <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.5} />
                    </mesh>
                )}

                {/* Faille (visible en mode transform) */}
                {movementType === 'transform' && (
                    <group>
                        <mesh position={[0, 0.1, 0]} rotation={[0, 0, 0]}>
                            <boxGeometry args={[0.1, 0.6, 3]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                        <Text position={[0, 0.7, 0]} fontSize={0.2} color="#EF4444">⚡ Faille</Text>
                    </group>
                )}
            </group>
        </>
    );
}












// Composant Séparation des Mélanges - INTERACTIF
function MixtureSeparation() {
    const [technique, setTechnique] = useState('decantation'); // decantation, filtration
    const [isAnimating, setIsAnimating] = useState(false);
    const [progress, setProgress] = useState(0);
    const particlesRef = useRef([]);
    const dropRef = useRef();

    // Animation des particules
    useFrame((state, delta) => {
        if (!isAnimating) return;

        setProgress(prev => Math.min(100, prev + delta * 15));

        if (technique === 'decantation') {
            // Les particules tombent au fond
            particlesRef.current.forEach((particle, i) => {
                if (particle) {
                    particle.position.y -= delta * 0.8 * (1 - progress / 200);
                    particle.position.y = Math.max(-0.8, particle.position.y);
                }
            });
        } else {
            // La goutte tombe
            if (dropRef.current) {
                dropRef.current.position.y = -0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
            }
        }
    });

    const startAnimation = () => {
        setIsAnimating(true);
        setProgress(0);
    };

    const reset = () => {
        setIsAnimating(false);
        setProgress(0);
        // Reset particle positions
        particlesRef.current.forEach((particle) => {
            if (particle) {
                particle.position.y = (Math.random() - 0.5) * 1;
            }
        });
    };

    return (
        <>
            {/* Panneau de Contrôle - Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="🧪 Séparation des Mélanges">
                <div className="text-white min-w-[280px]">
                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-2">Technique</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => { setTechnique('decantation'); reset(); }}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${technique === 'decantation'
                                        ? 'bg-blue-600'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    🏺 Décantation
                                </button>
                                <button
                                    onClick={() => { setTechnique('filtration'); reset(); }}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${technique === 'filtration'
                                        ? 'bg-green-600'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    📄 Filtration
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={isAnimating ? reset : startAnimation}
                            className={`w-full py-2 rounded-lg font-bold transition-colors ${isAnimating ? 'bg-red-600' : 'bg-blue-600 hover:bg-blue-500'
                                }`}
                        >
                            {isAnimating ? '🔄 Reset' : '▶️ Démarrer'}
                        </button>

                        {/* Barre de progression */}
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Séparation</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all ${technique === 'decantation'
                                        ? 'bg-gradient-to-r from-yellow-600 to-blue-400'
                                        : 'bg-gradient-to-r from-gray-400 to-blue-400'
                                        }`}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="text-xs text-center text-gray-400">
                            {technique === 'decantation'
                                ? 'Les particules lourdes tombent au fond'
                                : 'L\'eau passe, les impuretés restent'}
                        </div>
                    </div>
                </div>
            </DraggableHtmlPanel>
            <group>

                <Text position={[0, 3, 0]} fontSize={0.5} color="white">
                    {technique === 'decantation' ? 'DÉCANTATION' : 'FILTRATION'}
                </Text>

                {/* Décantation */}
                {
                    technique === 'decantation' && (
                        <group position={[0, 0, 0]}>
                            {/* Becher */}
                            <mesh position={[0, 0, 0]}>
                                <cylinderGeometry args={[1, 1, 2.5, 32]} />
                                <meshStandardMaterial color="white" transparent opacity={0.3} side={2} />
                            </mesh>

                            {/* Eau */}
                            <mesh position={[0, 0.3, 0]}>
                                <cylinderGeometry args={[0.95, 0.95, 1.5, 32]} />
                                <meshStandardMaterial
                                    color={progress > 50 ? "#60A5FA" : "#94A3B8"}
                                    transparent
                                    opacity={0.6}
                                />
                            </mesh>

                            {/* Particules de sable */}
                            {Array.from({ length: 20 }).map((_, i) => (
                                <mesh
                                    key={i}
                                    ref={el => particlesRef.current[i] = el}
                                    position={[
                                        (Math.random() - 0.5) * 1.5,
                                        isAnimating ? -0.8 : (Math.random() - 0.5) * 1,
                                        (Math.random() - 0.5) * 1.5
                                    ]}
                                >
                                    <sphereGeometry args={[0.06 + Math.random() * 0.04]} />
                                    <meshStandardMaterial color="#8B4513" />
                                </mesh>
                            ))}

                            {/* Sédiment au fond */}
                            <mesh position={[0, -1, 0]}>
                                <cylinderGeometry args={[0.95, 0.95, 0.3 + (progress / 200)]} />
                                <meshStandardMaterial color="#8B4513" />
                            </mesh>

                            <Text position={[0, -2, 0]} fontSize={0.25} color="#8B4513">
                                Sable déposé : {Math.round(progress)}%
                            </Text>
                        </group>
                    )
                }

                {/* Filtration */}
                {
                    technique === 'filtration' && (
                        <group position={[0, 0, 0]}>
                            {/* Entonnoir */}
                            <mesh position={[0, 1.5, 0]}>
                                <coneGeometry args={[1, 1.5, 32, 1, true]} />
                                <meshStandardMaterial color="#9CA3AF" transparent opacity={0.5} side={2} />
                            </mesh>

                            {/* Tube */}
                            <mesh position={[0, 0.5, 0]}>
                                <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
                                <meshStandardMaterial color="#9CA3AF" transparent opacity={0.5} />
                            </mesh>

                            {/* Filtre Papier */}
                            <mesh position={[0, 1.5, 0]}>
                                <coneGeometry args={[0.9, 1.2, 32, 1, true]} />
                                <meshStandardMaterial color="#FFF8DC" side={2} />
                            </mesh>
                            <Text position={[1.2, 1.5, 0]} fontSize={0.2} color="white">Papier Filtre</Text>

                            {/* Mélange sale sur le filtre */}
                            {progress < 80 && (
                                <mesh position={[0, 1.8, 0]}>
                                    <cylinderGeometry args={[0.6, 0.4, 0.3, 32]} />
                                    <meshStandardMaterial color="#94A3B8" transparent opacity={0.7} />
                                </mesh>
                            )}

                            {/* Becher de récupération */}
                            <mesh position={[0, -1, 0]}>
                                <cylinderGeometry args={[0.8, 0.8, 1.8, 32]} />
                                <meshStandardMaterial color="white" transparent opacity={0.3} />
                            </mesh>

                            {/* Eau filtrée */}
                            <mesh position={[0, -1.3, 0]}>
                                <cylinderGeometry args={[0.75, 0.75, progress / 100 * 1]} />
                                <meshStandardMaterial color="#60A5FA" transparent opacity={0.8} />
                            </mesh>

                            {/* Goutte animée */}
                            {isAnimating && (
                                <mesh ref={dropRef} position={[0, -0.3, 0]}>
                                    <sphereGeometry args={[0.1]} />
                                    <meshStandardMaterial color="#60A5FA" />
                                </mesh>
                            )}

                            <Text position={[0, -2.2, 0]} fontSize={0.25} color="#3B82F6">
                                Eau limpide : {Math.round(progress)}%
                            </Text>
                        </group>
                    )
                }
            </group>
        </>
    );
}

// Composant Masse et Volume
function MassVolume() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">MASSE vs VOLUME</Text>

            {/* Balance à fléau */}
            <group position={[0, -1, 0]}>
                {/* Socle */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.2, 0.5, 2, 16]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Fléau */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, -0.1]}>
                    <boxGeometry args={[6, 0.2, 0.2]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>

                {/* Plateau Gauche (Lourd, Petit) */}
                <group position={[-2.8, 0.3, 0]} rotation={[0, 0, -0.1]}>
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1, 1, 0.1, 32]} />
                        <meshStandardMaterial color="#E5E7EB" />
                    </mesh>
                    {/* Objet Lourd (Cube Fer) */}
                    <mesh position={[0, 0.3, 0]}>
                        <boxGeometry args={[0.8, 0.8, 0.8]} />
                        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <Text position={[0, 1, 0]} fontSize={0.3} color="white">Plomb (1kg)</Text>
                    <Text position={[0, 1.3, 0]} fontSize={0.25} color="gray">Petit Volume</Text>
                </group>

                {/* Plateau Droit (Léger, Gros) */}
                <group position={[2.8, -0.3, 0]} rotation={[0, 0, -0.1]}>
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1, 1, 0.1, 32]} />
                        <meshStandardMaterial color="#E5E7EB" />
                    </mesh>
                    {/* Objet Léger (Ballon) */}
                    <mesh position={[0, 0.8, 0]}>
                        <sphereGeometry args={[1.2, 32, 32]} />
                        <meshStandardMaterial color="#FCD34D" />
                    </mesh>
                    <Text position={[0, 2.3, 0]} fontSize={0.3} color="white">Plumes (0.1kg)</Text>
                    <Text position={[0, 2.6, 0]} fontSize={0.25} color="gray">Grand Volume</Text>
                </group>
            </group>

            <Text position={[0, -3, 0]} fontSize={0.3} color="#F59E0B">La balance penche vers la Masse la plus grande !</Text>
        </group>
    );
}

// Composant Purification Eau
function WaterPurification() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#60A5FA">PURIFICATION DE L&apos;EAU</Text>

            {/* Colonne de filtration */}
            <group position={[0, 0, 0]}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 1, 5, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.2} side={2} />
                </mesh>

                {/* Couche Charbon (Noir) */}
                <mesh position={[0, -1.5, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[1.5, -1.5, 0]} fontSize={0.3} color="white">Charbon Actif</Text>

                {/* Couche Sable Fin (Jaune pale) */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#FDE047" />
                </mesh>
                <Text position={[1.5, -0.5, 0]} fontSize={0.3} color="white">Sable Fin</Text>

                {/* Couche Gravier (Gris) */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <Text position={[1.5, 0.5, 0]} fontSize={0.3} color="white">Gravier</Text>

                {/* Eau Sale en haut */}
                <mesh position={[0, 1.8, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#78350F" transparent opacity={0.8} />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="#78350F">Eau Boueuse</Text>

                {/* Goutte Eau Propre en bas */}
                <mesh position={[0, -3, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <Text position={[0, -3.5, 0]} fontSize={0.3} color="#60A5FA">Eau Propre</Text>
            </group>
        </group>
    );
}

// Composant Formes Géométriques
function GeometricShapes() {
    const groupRef = useRef();
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={groupRef}>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">SOLIDES GÉOMÉTRIQUES</Text>

            {/* Cube */}
            <group position={[-3, 0, 0]}>
                <mesh>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color="#EF4444" wireframe={true} />
                </mesh>
                <mesh>
                    <boxGeometry args={[1.4, 1.4, 1.4]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Cube</Text>
            </group>

            {/* Sphère */}
            <group position={[-1, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.9, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" wireframe={true} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.85, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Sphère</Text>
            </group>

            {/* Cylindre */}
            <group position={[1, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.7, 0.7, 1.5, 32]} />
                    <meshStandardMaterial color="#10B981" wireframe={true} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.65, 0.65, 1.5, 32]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Cylindre</Text>
            </group>

            {/* Cône */}
            <group position={[3, 0, 0]}>
                <mesh>
                    <coneGeometry args={[0.8, 1.5, 32]} />
                    <meshStandardMaterial color="#F59E0B" wireframe={true} />
                </mesh>
                <mesh>
                    <coneGeometry args={[0.75, 1.4, 32]} />
                    <meshStandardMaterial color="#F59E0B" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Cône</Text>
            </group>
        </group>
    );
}

// Composant Mesure Angles
function AngleMeasurement() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">TYPES D&apos;ANGLES</Text>

            {/* Angle Aigu */}
            <group position={[-3, 0, 0]}>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 0.5]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} position={[0, 1, 0]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <mesh position={[0, 0, 0]} rotation={[0, 0, -0.5]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} position={[0, 1, 0]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                {/* Arc */}
                <mesh position={[0, 0.5, 0]}>
                    <torusGeometry args={[0.5, 0.02, 16, 32, 1]} rotation={[0, 0, -0.5]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Aigu (&lt;90°)</Text>
            </group>

            {/* Angle Droit */}
            <group position={[0, 0, 0]}>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Carré angle droit */}
                <mesh position={[0.3, 0.3, 0]}>
                    <boxGeometry args={[0.5, 0.02, 0.02]} position={[0, 0.25, 0]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0.5, 0.25, 0]}>
                    <boxGeometry args={[0.02, 0.5, 0.02]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Droit (90°)</Text>
            </group>

            {/* Angle Obtus */}
            <group position={[3, 0, 0]}>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 1]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} position={[0, 1, 0]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <mesh position={[2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Obtus (&gt;90°)</Text>
            </group>
        </group>
    );
}

// Composant Respiration Humaine
function HumanRespiration() {
    const lungsRef = useRef();
    useFrame((state) => {
        if (lungsRef.current) {
            // Animation respiration (scale up/down)
            const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            lungsRef.current.scale.set(s, s, s);
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#FCA5A5">RESPIRATION</Text>

            {/* Trachée */}
            <mesh position={[0, 2, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
                <meshStandardMaterial color="#FCA5A5" />
            </mesh>

            <group ref={lungsRef} position={[0, 0.5, 0]}>
                {/* Poumon Gauche */}
                <mesh position={[-0.8, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} scale={[1, 1.5, 1]} />
                    <meshStandardMaterial color="#FECACA" />
                </mesh>
                {/* Poumon Droit */}
                <mesh position={[0.8, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} scale={[1, 1.5, 1]} />
                    <meshStandardMaterial color="#FECACA" />
                </mesh>
            </group>

            {/* Diaphragme */}
            <mesh position={[0, -1.2, 0]} scale={[2, 0.5, 1]}>
                <sphereGeometry args={[1, 32, 32, 0, Math.PI]} rotation={[-Math.PI, 0, 0]} />
                <meshStandardMaterial color="#BE123C" side={2} />
            </mesh>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">Diaphragme (Muscle)</Text>
            <Text position={[-2, 0, 0]} fontSize={0.2} color="#FCA5A5">Inspiration : Volume Augmente</Text>
            <Text position={[2, 0, 0]} fontSize={0.2} color="#FCA5A5">Expiration : Volume Diminue</Text>
        </group>
    );
}

// Composant Mouvements Terre
function EarthMovement() {
    const earthRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        if (earthRef.current) {
            // Rotation sur elle-même
            earthRef.current.rotation.y += 0.02;
        }
        if (groupRef.current) {
            // Révolution autour du soleil
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ROTATION ET RÉVOLUTION</Text>

            {/* Soleil */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={2} />
            </mesh>
            <Text position={[0, 1.8, 0]} fontSize={0.3} color="#F59E0B">Soleil</Text>

            {/* axe de révolution */}
            <group ref={groupRef}>
                {/* Terre */}
                <group position={[4, 0, 0]}>
                    <mesh ref={earthRef} rotation={[0, 0, 23.5 * Math.PI / 180]}> {/* Axe incliné */}
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color="#3B82F6" roughness={0.5} />
                        {/* Patch vert pour continent */}
                        <mesh position={[0.4, 0, 0]}>
                            <sphereGeometry args={[0.1]} />
                            <meshStandardMaterial color="#10B981" />
                        </mesh>
                    </mesh>
                    {/* Axe de rotation visuel */}
                    <mesh rotation={[0, 0, 23.5 * Math.PI / 180]}>
                        <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <Text position={[0, 0.8, 0]} fontSize={0.2} color="white">Terre</Text>
                </group>
            </group>

            {/* Orbite */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[4, 0.02, 16, 100]} />
                <meshBasicMaterial color="#3B82F6" opacity={0.2} transparent />
            </mesh>
        </group>
    );
}


// Composant Densité et Flottabilité
function DensityBuoyancy() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DENSITÉ ET FLOTTABILITÉ</Text>

            {/* Bassin d'eau */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[6, 2, 4]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.5} />
            </mesh>
            <Text position={[0, -2.2, 0]} fontSize={0.3} color="#3B82F6">Eau (Densité = 1)</Text>

            {/* Objet qui coule (Pierre) */}
            <group position={[-1.5, -1.8, 0]}>
                <mesh>
                    <dodecahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                <Text position={[0, 0.8, 0]} fontSize={0.25} color="white">Pierre (d &gt; 1)</Text>
                <Text position={[0, 1.1, 0]} fontSize={0.25} color="#EF4444">Coule</Text>
            </group>

            {/* Objet qui flotte (Bois) */}
            <group position={[1.5, -0.2, 0]}>
                <mesh>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color="#D97706" />
                </mesh>
                <Text position={[0, 0.8, 0]} fontSize={0.25} color="white">Bois (d &lt; 1)</Text>
                <Text position={[0, 1.1, 0]} fontSize={0.25} color="#10B981">Flotte</Text>
            </group>

            {/* Flèches Poussée Archimède */}
            <mesh position={[1.5, -0.8, 0]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <mesh position={[1.5, -0.6, 0]} rotation={[0, 0, 0]}>
                <coneGeometry args={[0.1, 0.2, 8]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <Text position={[2.5, -0.8, 0]} fontSize={0.2} color="#10B981">Poussée d&apos;Archimède</Text>

        </group>
    );
}

// Composant Réflexion Lumière
function LightReflection() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">RÉFLEXION DE LA LUMIÈRE</Text>

            {/* Miroir */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 2]} />
                <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.1} />
            </mesh>
            <Text position={[0, -1.2, 2]} fontSize={0.3} color="gray">Miroir Plan</Text>

            {/* Rayon Incident */}
            <mesh position={[-2, 1, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
                <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
            </mesh>
            <Text position={[-2.5, 2, 0]} fontSize={0.25} color="#FFFF00">Rayon Incident</Text>

            {/* Rayon Réfléchi */}
            <mesh position={[2, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
                <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
            </mesh>
            <Text position={[2.5, 2, 0]} fontSize={0.25} color="#FFFF00">Rayon Réfléchi</Text>

            {/* Normale */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.5} />
            </mesh>
            <Text position={[0.2, 1, 0]} fontSize={0.2} color="white">Normale</Text>

            {/* Angles */}
            <Text position={[-0.5, -0.5, 0]} fontSize={0.2} color="white">i = 45°</Text>
            <Text position={[0.5, -0.5, 0]} fontSize={0.2} color="white">r = 45°</Text>
        </group>
    );
}

// Composant Groupes Sanguins
function BloodGroups() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EF4444">GROUPES SANGUINS (ABO)</Text>

            {/* Groupe A */}
            <group position={[-3, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Antigène A (Triangles) */}
                <mesh position={[0.5, 0.3, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <mesh position={[-0.5, -0.3, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe A</Text>
            </group>

            {/* Groupe B */}
            <group position={[-1, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Antigène B (Sphères) */}
                <mesh position={[0.5, 0.3, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <mesh position={[-0.5, -0.3, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe B</Text>
            </group>

            {/* Groupe AB */}
            <group position={[1, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Antigène A et B */}
                <mesh position={[0.5, 0.3, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <mesh position={[-0.5, -0.3, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe AB</Text>
            </group>

            {/* Groupe O */}
            <group position={[3, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Pas d'antigène */}
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe O</Text>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.25} color="white">Donneur Universel : O | Receveur Universel : AB</Text>
        </group>
    );
}

// Composant Reproduction Humaine
function HumanReproduction() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F472B6">FÉCONDATION</Text>

            {/* Ovule */}
            <group position={[0, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color="#FBCFE8" transparent opacity={0.8} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#BE185D" />
                </mesh>
                <Text position={[0, 1.8, 0]} fontSize={0.3} color="#F472B6">Ovule (Maman)</Text>
            </group>

            {/* Spermatozoïdes */}
            <group position={[-2.5, 0.5, 0]} rotation={[0, 0, -0.5]}>
                <mesh>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.05, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>
            <group position={[-2.8, -0.5, 0]} rotation={[0, 0, 0.2]}>
                <mesh>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.05, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>
            <Text position={[-3.5, 0, 0]} fontSize={0.3} color="white">Spermatozoïdes (Papa)</Text>

            <mesh position={[-1.7, 0.2, 0]} rotation={[0, 0, -0.5]}>
                <cylinderGeometry args={[0.05, 0.05, 1]} />
                <meshStandardMaterial color="#F472B6" />
            </mesh>
            <Text position={[0, -2, 0]} fontSize={0.3} color="#F472B6">Rencontre = Zygote (Bébé)</Text>
        </group>
    );
}

// Composant Propagation Lumière
function LightPropagation() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#FFFF00">PROPAGATION RECTILIGNE</Text>

            {/* Source Lumineuse (Ampoule) */}
            <group position={[-3, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
                </mesh>
                <pointLight intensity={1} distance={5} />
            </group>

            {/* Obstacle (Balle) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8]} />
                <meshStandardMaterial color="#1F2937" />
            </mesh>

            {/* Écran */}
            <mesh position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[4, 4]} />
                <meshStandardMaterial color="white" side={2} />
            </mesh>

            {/* Ombre sur l'écran (Disque noir) */}
            <mesh position={[2.95, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <circleGeometry args={[1.2, 32]} />
                <meshBasicMaterial color="black" opacity={0.8} transparent />
            </mesh>

            {/* Cône d'ombre */}
            <mesh position={[1.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.8, 3, 32, 1, true]} />
                <meshBasicMaterial color="black" transparent opacity={0.1} />
            </mesh>

            <Text position={[3, -2.5, 0]} fontSize={0.3} color="white">Zone d&apos;Ombre</Text>
            <Text position={[-1, -2.5, 0]} fontSize={0.25} color="#FFFF00">La lumière ne contourne pas l&apos;obstacle !</Text>
        </group>
    );
}

// Composant Atome vs Molécule
function AtomMoleculeIntro() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ATOMES vs MOLÉCULES</Text>

            {/* Atomes isolés */}
            <group position={[-2.5, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.3} color="#FCA5A5">Atomes (Briques)</Text>
                {/* Oxygène */}
                <mesh position={[-0.8, 0, 0]}>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[-0.8, -0.8, 0]} fontSize={0.3} color="white">O</Text>

                {/* Hydrogène */}
                <mesh position={[0.8, 0.5, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0.8, -0.2, 0]} fontSize={0.3} color="white">H</Text>

                {/* Carbone */}
                <mesh position={[0.8, -0.8, 0]}>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0.8, -1.6, 0]} fontSize={0.3} color="white">C</Text>
            </group>

            {/* Molécule (Construction) */}
            <group position={[2.5, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.3} color="#60A5FA">Molécule (Maison)</Text>
                {/* H2O */}
                <group>
                    <mesh>
                        <sphereGeometry args={[0.5]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>
                    <mesh position={[-0.5, 0.5, 0]}>
                        <sphereGeometry args={[0.3]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <mesh position={[0.5, 0.5, 0]}>
                        <sphereGeometry args={[0.3]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <Text position={[0, -1, 0]} fontSize={0.3} color="#60A5FA">H₂O (Eau)</Text>
                </group>
            </group>

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.1, 4, 0.1]} />
                <meshStandardMaterial color="white" opacity={0.5} transparent />
            </mesh>
        </group>
    );
}

// Composant Visualiseur Fractions
function FractionVisualizer() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">FRACTIONS</Text>

            {/* 1/2 */}
            <group position={[-2.5, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">1/2</Text>
                {/* Camembert complet */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Demi Camembert */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, Math.PI]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="gray">La moitié</Text>
            </group>

            {/* 1/4 */}
            <group position={[0, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">1/4</Text>
                {/* Camembert complet */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Quart Camembert */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="gray">Le quart</Text>
            </group>

            {/* 3/4 */}
            <group position={[2.5, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">3/4</Text>
                {/* Camembert complet */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* 3 Quarts Camembert */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, 3 * Math.PI / 2]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="gray">Trois quarts</Text>
            </group>
        </group>
    );
}

// Composant Théorème Pythagore
function PythagorasTheorem() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">THÉORÈME DE PYTHAGORE</Text>
            <Text position={[0, 2.8, 0]} fontSize={0.3} color="#FCD34D">a² + b² = c²</Text>

            {/* Triangle Rectangle */}
            <group position={[0, -0.5, 0]}>

                {/* Coté a (3) */}
                <mesh position={[0, 1.5, 0]}>
                    <boxGeometry args={[0.1, 3, 0.1]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[-0.5, 1.5, 0]} fontSize={0.3} color="#EF4444">a (3)</Text>

                {/* Coté b (4) */}
                <mesh position={[2, 0, 0]}>
                    <boxGeometry args={[4, 0.1, 0.1]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[2, -0.5, 0]} fontSize={0.3} color="#3B82F6">b (4)</Text>

                {/* Hypoténuse c (5) */}
                <mesh position={[2, 1.5, 0]} rotation={[0, 0, -0.6435]}> {/* atan(3/4) */}
                    <boxGeometry args={[0.1, 5, 0.1]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[2.5, 2.5, 0]} fontSize={0.3} color="#10B981">c (5)</Text>

                {/* Carrés Visuels */}
                <mesh position={[-1.5, 1.5, 0]}>
                    <boxGeometry args={[3, 3, 0.05]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.2} />
                </mesh>
                <Text position={[-1.5, 1.5, 0.1]} fontSize={0.3} color="white">9</Text>

                <mesh position={[2, -2, 0]}>
                    <boxGeometry args={[4, 4, 0.05]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.2} />
                </mesh>
                <Text position={[2, -2, 0.1]} fontSize={0.3} color="white">16</Text>

                <mesh position={[3.5, 3.5, 0]} rotation={[0, 0, -0.6435]}>
                    <boxGeometry args={[5, 0.05, 5]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.2} />
                </mesh>
                <Text position={[3.5, 3.5, 0.5]} fontSize={0.3} color="white">25</Text>
            </group>

            <Text position={[0, -4, 0]} fontSize={0.3} color="white">9 + 16 = 25 !</Text>
        </group>
    );
}

// Composant Échelle pH
function PHScale() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ÉCHELLE DE pH</Text>

            {/* Barre de dégradé */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[10, 1, 0.1]} />
                <meshStandardMaterial vertexColors={true} /> {/* Simplification : Material couleur unique pour l'instant si vertexColors complexe */}
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Segments colorés manuels car vertexColors complexe en JSX pur */}
            <mesh position={[-4.5, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.1]} />
                <meshStandardMaterial color="#EF4444" /> {/* Rouge Acide */}
            </mesh>
            <Text position={[-4.5, 1, 0]} fontSize={0.3} color="#EF4444">0</Text>

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.1]} />
                <meshStandardMaterial color="#10B981" /> {/* Vert Neutre */}
            </mesh>
            <Text position={[0, 1, 0]} fontSize={0.3} color="#10B981">7</Text>

            <mesh position={[4.5, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.1]} />
                <meshStandardMaterial color="#3B82F6" /> {/* Bleu Basique */}
            </mesh>
            <Text position={[4.5, 1, 0]} fontSize={0.3} color="#3B82F6">14</Text>

            {/* Flèche curseur */}
            <mesh position={[-2, -1, 0]}>
                <coneGeometry args={[0.2, 0.5, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[-2, -1.8, 0]} fontSize={0.3} color="#F59E0B">Citron (pH 2)</Text>

            <mesh position={[0, -1, 0]}>
                <coneGeometry args={[0.2, 0.5, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[0, -1.8, 0]} fontSize={0.3} color="#10B981">Eau (pH 7)</Text>

            <mesh position={[3, -1, 0]}>
                <coneGeometry args={[0.2, 0.5, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[3, -1.8, 0]} fontSize={0.3} color="#3B82F6">Savon (pH 10)</Text>

            <Text position={[-3, 2, 0]} fontSize={0.4} color="#EF4444">ACIDE</Text>
            <Text position={[3, 2, 0]} fontSize={0.4} color="#3B82F6">BASIQUE</Text>
        </group>
    );
}

// Composant Propriétés Triangles
function TrianglesProperties() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DROITES DU TRIANGLE</Text>

            {/* Triangle */}
            <line>
                <bufferGeometry />
                {/* Sommets : A(0, 2), B(-2, -1), C(2, -1) */}
                {/* Rendu simplifié par des tubes */}
            </line>

            <group position={[0, 0, 0]}>
                {/* Côtés */}
                <mesh position={[-1, 0.5, 0]} rotation={[0, 0, 0.98]}>
                    <cylinderGeometry args={[0.05, 0.05, 3.6, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[1, 0.5, 0]} rotation={[0, 0, -0.98]}>
                    <cylinderGeometry args={[0.05, 0.05, 3.6, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>

                {/* Hauteur (Rouge) */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.03, 0.03, 3, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0.2, 0.5, 0]} fontSize={0.2} color="#EF4444">Hauteur</Text>

                {/* Médiane (Vert) */}
                <mesh position={[1, 0.5, 0]} rotation={[0, 0, -0.5]}>
                    <cylinderGeometry args={[0.03, 0.03, 3.5, 8]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[1.2, 0.8, 0]} fontSize={0.2} color="#10B981">Médiane</Text>

                <Text position={[0, -2, 0]} fontSize={0.25} color="gray">Somme des Angles = 180°</Text>
            </group>
        </group>
    );
}

// Composant Équations Linéaires
function LinearEquations() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ÉQUATION = BALANCE</Text>
            <Text position={[0, 2.5, 0]} fontSize={0.4} color="#FCD34D">2x + 1 = 5</Text>

            {/* Balance */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.2, 0.5, 2, 16]} />
                <meshStandardMaterial color="#4B5563" />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[6, 0.2, 0.5]} />
                <meshStandardMaterial color="#9CA3AF" />
            </mesh>

            {/* Plateau Gauche : 2x + 1 */}
            <group position={[-2.5, 0.5, 0]}>
                {/* 2 Sacs X */}
                <mesh position={[-0.5, 0, 0]}>
                    <boxGeometry args={[0.8, 1, 0.8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[-0.5, 0, 0.5]} fontSize={0.5} color="white">x</Text>

                <mesh position={[0.5, 0, 0]}>
                    <boxGeometry args={[0.8, 1, 0.8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0.5, 0, 0.5]} fontSize={0.5} color="white">x</Text>

                {/* 1 Poids */}
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="white">1</Text>
            </group>

            {/* Plateau Droit : 5 */}
            <group position={[2.5, 0.5, 0]}>
                {/* 5 Poids */}
                <mesh position={[-0.6, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[0.6, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[-0.3, 0.6, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[0.3, 0.6, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="white">5</Text>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#10B981">Si on enlève 1 de chaque côté...</Text>
            <Text position={[0, -3, 0]} fontSize={0.3} color="#10B981">2x = 4 donc x = 2 !</Text>
        </group>
    );
}

// Composant Solutions et Solubilité
function SolutionsSolubility() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DISSOLUTION</Text>

            {/* Becher */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 3, 32]} />
                <meshStandardMaterial color="white" transparent opacity={0.2} side={2} />
            </mesh>

            {/* Solvant (Eau) */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[1.4, 1.4, 2.5, 32]} />
                <meshStandardMaterial color="#93C5FD" transparent opacity={0.6} />
            </mesh>
            <Text position={[2, 0, 0]} fontSize={0.3} color="#93C5FD">Solvant (Eau)</Text>

            {/* Soluté (Sucre - Particules dispersées) */}
            <group>
                {[...Array(20)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2]}>
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}
            </group>
            <Text position={[-2, 1, 0]} fontSize={0.3} color="white">Soluté (Sucre)</Text>

            {/* Dépôt saturé au fond */}
            <group position={[0, -1.4, 0]}>
                {[...Array(10)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5), 0, (Math.random() - 0.5)]}>
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}
            </group>
            <Text position={[0, -2, 0]} fontSize={0.25} color="white">Saturation (Dépôt)</Text>
        </group>
    );
}


// Composant Microbes et Bactéries
function MicrobesBacteria() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#10B981">MONDE MICROBIEN</Text>

            {/* Bactérie (Bacille) */}
            <group position={[-2.5, 0, 0]}>
                <mesh>
                    <capsuleGeometry args={[0.5, 1.5, 4, 16]} />
                    <meshStandardMaterial color="#10B981" roughness={0.4} />
                </mesh>
                {/* Cils/Flagelles (Lignes) */}
                <group>
                    <mesh position={[0, -1, 0]} rotation={[0, 0, 0.2]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                        <meshStandardMaterial color="#065F46" />
                    </mesh>
                    <mesh position={[0, 1, 0]} rotation={[0, 0, -0.2]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                        <meshStandardMaterial color="#065F46" />
                    </mesh>
                </group>
                <Text position={[0, -1.8, 0]} fontSize={0.3} color="white">Bactérie (Bacille)</Text>
                <Text position={[0, -2.2, 0]} fontSize={0.2} color="gray">Vivant (1 Cellule)</Text>
            </group>

            {/* Virus */}
            <group position={[0, 0, 0]}>
                <mesh>
                    <icosahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial color="#EF4444" flatShading={true} />
                </mesh>
                {/* Picots */}
                {[...Array(8)].map((_, i) => (
                    <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.05, 0.05, 1.8]} />
                        <meshStandardMaterial color="#7F1D1D" />
                    </mesh>
                ))}
                <Text position={[0, -1.8, 0]} fontSize={0.3} color="white">Virus</Text>
                <Text position={[0, -2.2, 0]} fontSize={0.2} color="gray">Parasite (Non vivant)</Text>
            </group>

            {/* Champignon (Levure) */}
            <group position={[2.5, 0, 0]}>
                <mesh position={[0, -0.2, 0]}>
                    <sphereGeometry args={[0.6]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <mesh position={[0.4, 0.3, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0, -1.8, 0]} fontSize={0.3} color="white">Levure</Text>
                <Text position={[0, -2.2, 0]} fontSize={0.2} color="gray">Champignon</Text>
            </group>
        </group>
    );
}

// Composant Chromosomes
function ChromosomesDivision() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F472B6">CHROMOSOMES ET ADN</Text>

            {/* Chromosome X */}
            <group position={[-2, 0, 0]} rotation={[0, 0, 0.2]}>
                {/* Bras 1 */}
                <mesh position={[0, 0.5, 0]}>
                    <capsuleGeometry args={[0.3, 2, 4, 16]} />
                    <meshStandardMaterial color="#EC4899" />
                </mesh>
                {/* Bras 2 */}
                <mesh position={[0, -0.5, 0]}>
                    <capsuleGeometry args={[0.3, 2, 4, 16]} />
                    <meshStandardMaterial color="#EC4899" />
                </mesh>
                {/* Centromère */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#DB2777" />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3} color="white">Chromosome Simple</Text>
            </group>

            {/* Chromosome Dupliqué (X shape) */}
            <group position={[2, 0, 0]}>
                <group rotation={[0, 0, 0.3]}>
                    <mesh position={[0, 1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                </group>
                <group rotation={[0, 0, -0.3]}>
                    <mesh position={[0, 1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                </group>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#2563EB" />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3} color="white">Chromosome Dupliqué</Text>
            </group>

            <Text position={[0, 2.5, 0]} fontSize={0.3} color="#F472B6">Contient l&apos;Information Génétique (ADN)</Text>
        </group>
    );
}

// Composant Structure Atome (Bohr)
function AtomicStructure() {
    const electronRef = useRef();
    useFrame(({ clock }) => {
        if (electronRef.current) {
            electronRef.current.rotation.y = clock.getElapsedTime() * 2;
            electronRef.current.rotation.z = clock.getElapsedTime() * 0.5;
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#60A5FA">STRUCTURE DE L&apos;ATOME</Text>

            {/* Noyau */}
            <group position={[0, 0, 0]}>
                {/* Protons (Rouge) */}
                <mesh position={[0.2, 0.2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <mesh position={[-0.2, -0.1, 0.1]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>

                {/* Neutrons (Gris/Blanc) */}
                <mesh position={[-0.1, 0.2, -0.1]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <mesh position={[0.1, -0.2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <Text position={[0, -0.8, 0]} fontSize={0.25} color="white">Noyau (Protons + Neutrons)</Text>
            </group>

            {/* Électrons (Orbites) */}
            <group ref={electronRef}>
                {/* Orbite 1 */}
                <group rotation={[Math.PI / 3, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[2, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#60A5FA" opacity={0.3} transparent />
                    </mesh>
                    <mesh position={[2, 0, 0]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
                    </mesh>
                </group>

                {/* Orbite 2 */}
                <group rotation={[-Math.PI / 3, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[2, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#60A5FA" opacity={0.3} transparent />
                    </mesh>
                    <mesh position={[-2, 0, 0]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
                    </mesh>
                </group>
            </group>
            <Text position={[0, 2.5, 0]} fontSize={0.25} color="#3B82F6">Électrons (-)</Text>
            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">La majorité de l&apos;atome est du VIDE !</Text>
        </group>
    );
}

// Composant Formation Ions
function IonsFormation() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F59E0B">FORMATION DES IONS (Na + Cl)</Text>

            {/* Atome Sodium Na */}
            <group position={[-2, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="#9CA3AF">Sodium (Na)</Text>
                <mesh>
                    <sphereGeometry args={[0.8]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                {/* Électron périphérique */}
                <mesh position={[1, 0.5, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.25} color="gray">Perd 1 électron</Text>
            </group>

            {/* Flèche transfert */}
            <group position={[0, 0.5, 0]}>
                <mesh rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.2, 1, 32]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            {/* Atome Chlore Cl */}
            <group position={[2, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="#10B981">Chlore (Cl)</Text>
                <mesh>
                    <sphereGeometry args={[0.9]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                {/* Électron gagné */}
                <mesh position={[-1, 0.5, 0]} visible={true}> {/* Simulé comme arrivant */}
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.25} color="gray">Gagne 1 électron</Text>
            </group>

            {/* Résultat Ions */}
            <group position={[0, -3, 0]}>
                <Text position={[-2, 0, 0]} fontSize={0.4} color="#F59E0B">Na⁺ (Cation)</Text>
                <Text position={[2, 0, 0]} fontSize={0.4} color="#059669">Cl⁻ (Anion)</Text>
                <Text position={[0, -0.6, 0]} fontSize={0.3} color="white">Ils s&apos;attirent = Sel (NaCl)</Text>
            </group>
        </group>
    );
}

// Composant Propagation Son



// Composant Les Combustions
function CombustionReaction() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EF4444">TRIANGLE DU FEU</Text>

            {/* Foyer Central */}
            <group position={[0, -1, 0]}>
                {/* Bois (Combustible) */}
                <mesh position={[0, 0, 0]} rotation={[0.2, 0.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                    <meshStandardMaterial color="#78350F" />
                </mesh>
                <mesh position={[0.2, 0, 0]} rotation={[-0.2, -0.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                    <meshStandardMaterial color="#78350F" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="#78350F">1. Combustible (Bois)</Text>

                {/* Flamme */}
                <mesh position={[0, 0.8, 0]}>
                    <coneGeometry args={[0.4, 1.2, 8]} />
                    <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" transparent opacity={0.8} />
                </mesh>
                <pointLight position={[0, 1, 0]} intensity={2} color="#F59E0B" distance={5} />
                <Text position={[0, 2, 0]} fontSize={0.3} color="#F59E0B">3. Chaleur</Text>
            </group>

            {/* Air (Comburant) */}
            <group position={[0, 0, 0]}>
                <mesh position={[-2, 1, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                </mesh>
                <mesh position={[2, 1, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                </mesh>
                {[...Array(5)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5) * 3, (Math.random()) * 2, (Math.random() - 0.5) * 3]}>
                        <sphereGeometry args={[0.05]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                ))}
                <Text position={[2, 2, 0]} fontSize={0.3} color="#3B82F6">2. Comburant (O₂)</Text>
            </group>

            <Text position={[0, -3, 0]} fontSize={0.25} color="white">Si on enlève un élément, le feu s&apos;éteint !</Text>
        </group>
    );
}





// Composant Cycle de l'Eau
function WaterCycleSim() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#3B82F6">CYCLE DE L&apos;EAU</Text>

            {/* Mer */}
            <mesh position={[2, -1.5, 0]}>
                <boxGeometry args={[3, 1, 3]} />
                <meshStandardMaterial color="#2563EB" transparent opacity={0.8} />
            </mesh>
            <Text position={[2, -2.2, 1.6]} fontSize={0.3} color="white">Océan</Text>

            {/* Terre/Montagne */}
            <mesh position={[-2, -1, 0]}>
                <coneGeometry args={[2, 2, 4]} />
                <meshStandardMaterial color="#059669" />
            </mesh>
            {/* Neige */}
            <mesh position={[-2, -0.2, 0]}>
                <coneGeometry args={[0.8, 0.6, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Soleil */}
            <mesh position={[3, 2, 0]}>
                <sphereGeometry args={[0.5]} />
                <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" />
            </mesh>

            {/* Nuages */}
            <group position={[-1, 2, 0]}>
                <mesh>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0.5, 0.2, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.4, 0.1, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            {/* Flèches (Simplifiées par texte pour l'instant) */}
            <Text position={[3, 0.5, 0]} fontSize={0.25} color="#FBBF24">Évaporation ⬆</Text>
            <Text position={[-1, 1, 0]} fontSize={0.25} color="#3B82F6">Pluie ⬇</Text>
            <Text position={[-0.5, -1.5, 0]} fontSize={0.25} color="#60A5FA">Ruissellement ➡</Text>
        </group>
    );
}

// Composant Levier (Machines Simples)
function SimpleMachinesLever() {
    // État
    const [forceDist, setForceDist] = useState(2); // Distance de la force (bras de levier)
    const loadMass = 20; // Charge fixe (kg)
    const loadDist = 1.5; // Distance charge fixe (m)
    const forceMass = 10; // Passe fixe (kg)

    // Calculs Physiques
    const momentLoad = loadMass * loadDist; // Couple résistant
    const momentForce = forceMass * forceDist; // Couple moteur
    const netMoment = momentForce - momentLoad;

    // Angle de rotation (simulé)
    // Si Couple Moteur > Couple Résistant => Rotation vers le bas (dans le sens horaire ici, ou lève la charge)
    // Convention : Positif lève la charge (rotation négative en Z)
    const targetRotation = netMoment > 0 ? -0.3 : (netMoment < -5 ? 0.3 : 0);

    // Animation douce de la rotation
    const groupRef = useRef();
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotation, 0.1);
        }
    });

    return (
        <>
            {/* Controls - Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="🔧 Le Levier">
                <div className="text-white min-w-[250px]">
                    <label className="block text-sm mb-1">Longueur du Bras de Force : {forceDist} m</label>
                    <input
                        type="range"
                        min="1"
                        max="4"
                        step="0.1"
                        value={forceDist}
                        onChange={(e) => setForceDist(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                    />
                    <div className="mt-3 text-xs space-y-1 font-mono text-gray-300">
                        <div className="flex justify-between">
                            <span>Couple Charge (Rouge):</span>
                            <span>{momentLoad.toFixed(0)} N.m</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Couple Force (Bleu):</span>
                            <span className={netMoment > 0 ? "text-green-400" : "text-red-400"}>{momentForce.toFixed(0)} N.m</span>
                        </div>
                        <div className="text-center mt-2 font-bold text-[#F59E0B]">
                            {netMoment > 0 ? "ÇA SOULÈVE ! 🚀" : "TROP LOURD... 😫"}
                        </div>
                    </div>
                </div>
            </DraggableHtmlPanel>
            <group>

                <group position={[0, -1, 0]}>
                    {/* Pivot (Fulcrum) */}
                    <mesh position={[0, 0, 0]}>
                        <coneGeometry args={[0.5, 1, 3]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>

                    {/* Barre Pivotante */}
                    <group ref={groupRef} position={[0, 0.5, 0]}>
                        <mesh rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.1, 0.1, 8, 8]} />
                            <meshStandardMaterial color="#D97706" />
                        </mesh>

                        {/* Charge (Gauche) */}
                        <group position={[-loadDist, 0.6, 0]}>
                            <mesh>
                                <boxGeometry args={[1, 1, 1]} />
                                <meshStandardMaterial color="#1F2937" />
                            </mesh>
                            <Text position={[0, 1, 0]} fontSize={0.4} color="white">{loadMass} kg</Text>
                            <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -0.5, 0), 1.5, 0xEF4444, 0.3, 0.2]} />
                        </group>

                        {/* Force (Droite - Mobile) */}
                        <group position={[forceDist, 0.4, 0]}>
                            <mesh>
                                <boxGeometry args={[0.6, 0.6, 0.6]} />
                                <meshStandardMaterial color="#3B82F6" />
                            </mesh>
                            <Text position={[0, 0.8, 0]} fontSize={0.4} color="#3B82F6">{forceMass} kg</Text>
                            <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -0.3, 0), 1, 0x3B82F6, 0.3, 0.2]} />
                        </group>
                    </group>
                </group>
            </group>
        </>
    );
}

// Composant Volcan
function VolcanoEruption() {
    const [erupting, setErupting] = useState(false);
    const [pressure, setPressure] = useState(5);
    const particles = useMemo(() => new Array(50).fill(0).map(() => ({
        pos: new THREE.Vector3((Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.5),
        vel: new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 5 + 5, (Math.random() - 0.5) * 2),
        scale: Math.random() * 0.3 + 0.1
    })), []);

    const particlesRef = useRef([]);

    useFrame((state, delta) => {
        if (erupting) {
            particlesRef.current.forEach((mesh, i) => {
                const data = particles[i];
                if (mesh) {
                    // Reset if below ground
                    if (mesh.position.y < -1) {
                        mesh.position.copy(data.pos);
                        mesh.position.y = -1; // Vent height
                    }

                    // Physics
                    mesh.position.x += data.vel.x * delta * (pressure / 5);
                    mesh.position.y += data.vel.y * delta * (pressure / 5);
                    mesh.position.z += data.vel.z * delta * (pressure / 5);

                    // Gravity
                    data.vel.y -= 9.8 * delta;

                    // Reset randomly to create continuous flow
                    if (mesh.position.y < -3 || mesh.position.y > 10) {
                        mesh.position.set(0, -1, 0);
                        data.vel.set((Math.random() - 0.5), Math.random() * pressure, (Math.random() - 0.5));
                    }
                }
            });
        }
    });

    return (
        <>
            {/* Controls - Draggable - Rendu Portal */}
            <DraggableHtmlPanel title="🌋 Contrôle Volcan">
                <div className="text-white">
                    <button
                        onClick={() => setErupting(!erupting)}
                        className={`w-full py-2 rounded-lg font-bold mb-3 transition-colors ${erupting ? 'bg-red-600 animate-pulse' : 'bg-green-600 hover:bg-green-500'}`}
                    >
                        {erupting ? "ARRÊTER !" : "DÉCLENCHER"}
                    </button>

                    <label className="block text-sm mb-1">Pression Magmatique</label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={pressure}
                        onChange={(e) => setPressure(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
                    />
                </div>
            </DraggableHtmlPanel>

            <group>

                <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EF4444">ÉRUPTION VOLCANIQUE</Text>

                {/* Montagne Volcan */}
                <mesh position={[0, -1.5, 0]}>
                    <coneGeometry args={[3, 3, 32, 1, true]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>

                {/* Chambre Magmatique */}
                <mesh position={[0, -3, 0]}>
                    <sphereGeometry args={[1]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={erupting ? 2 : 0.5} />
                </mesh>

                {/* Cheminée */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.2, 0.5, 3]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={erupting ? 1 : 0.2} />
                </mesh>

                {/* Particules */}
                {particles.map((data, i) => (
                    <mesh key={i} ref={el => particlesRef.current[i] = el} position={[0, -100, 0]}>
                        <sphereGeometry args={[data.scale]} />
                        <meshStandardMaterial color={i % 2 === 0 ? "#EF4444" : "#F59E0B"} emissive="#F59E0B" transparent opacity={0.8} />
                    </mesh>
                ))}
            </group>
        </>
    );
}

// Composant principal de simulation 3D
export default function Simulation3D({ type = 'atom', config = {} }) {
    const renderSimulation = () => {
        switch (type) {
            case 'atom':
                return <Atom {...config} />;
            case 'water':
                return <WaterMolecule />;
            case 'cell':
                return <Cell />;
            case 'dna':
                return <DNAHelix />;
            case 'circuit':
                return <ElectricCircuit />;
            case 'water-cycle-old':
                return <WaterCycle />;
            case 'digestive':
                return <DigestiveSystem />;
            case 'wave':
                return <WaveInterference />;
            case 'neuron':
                return <Neuron />;
            case 'blood':
                return <BloodStream />;
            case 'plant-cell':
                return <PlantCell />;
            case 'states-of-matter':
                return <StatesOfMatter />;
            case 'tectonics':
                return <TectonicPlates />;
            case 'chemical':
                return <ChemicalReaction />;
            case 'force':
                return <ForcePhysics />;
            case 'immune':
                return <ImmuneSystem />;
            case 'human-body':
                return <BloodStream />;
            case 'energy':
                return <EnergyConservation />;
            case 'weight-mass':
                return <WeightMass />;
            case 'thales':
                return <ThalesTheorem />;
            case 'trigonometry':
                return <TrigUnitCircle />;
            case 'plant-growth':
                return <PlantGrowth />;
            case 'food-chain':
                return <FoodChain />;
            case 'vertebrate-classification':
                return <VertebrateClassification />;
            case 'mixture-separation':
                return <MixtureSeparation />;
            case 'volume-mass':
                return <MassVolume />;
            case 'water-purification':
                return <WaterPurification />;
            case 'geometric-shapes':
                return <GeometricShapes />;
            case 'angles-measurement':
                return <AngleMeasurement />;
            case 'respiration-human':
                return <HumanRespiration />;
            case 'earth-movement':
                return <EarthMovement />;
            case 'density-buoyancy':
                return <DensityBuoyancy />;
            case 'light-reflection':
                return <LightReflection />;
            case 'blood-groups':
                return <BloodGroups />;
            case 'human-reproduction':
                return <HumanReproduction />;
            case 'light-propagation':
                return <LightPropagation />;
            case 'atom-molecule-intro':
                return <AtomMoleculeIntro />;
            case 'fraction-visualizer':
                return <FractionVisualizer />;
            case 'pythagoras-theorem':
                return <PythagorasTheorem />;
            case 'ph-scale':
                return <PHScale />;
            case 'triangles-properties':
                return <TrianglesProperties />;
            case 'linear-equations':
                return <LinearEquations />;
            case 'solutions-solubility':
                return <SolutionsSolubility />;
            case 'lens-optics':
                return <LensOptics />;
            case 'combustion':
                return <CombustionReaction />;

            case 'water-cycle':
                return <WaterCycleSim />;
            case 'lever':
                return <SimpleMachinesLever />;
            case 'volcano':
                return <VolcanoEruption />;
            case 'microbes-bacteria':
                return <MicrobesBacteria />;
            case 'chromosomes-division':
                return <ChromosomesDivision />;
            case 'atomic-structure':
                return <AtomicStructure />;
            case 'ions-formation':
                return <IonsFormation />;
            case 'sound-propagation':
                return <SoundPropagation />;
            case 'electrochemical':
                return <ElectrochemicalCell />;
            case 'magnetic-field':
                return <MagneticField />;
            case 'diffraction':
                return <Diffraction />;
            case 'titration':
                return <Titration />;
            case 'periodic-table':
                return <PeriodicTable />;
            case 'rectilinear-motion':
                return <RectilinearMotion />;
            case 'refraction-light':
                return <RefractionLight />;
            case 'light-spectrum':
                return <LightSpectrum />;
            case 'universal-gravitation':
                return <UniversalGravitation />;
            case 'mole-concept':
                return <MoleConcept />;
            case 'cell-respiration':
                return <CellRespiration />;
            case 'cell-mitosis':
                return <CellMitosis />;
            case 'ecosystem-dynamics':
                return <EcosystemDynamics />;
            case 'blood-sugar-regulation':
                return <BloodSugarRegulation />;
            case 'electromagnetic-induction':
                return <ElectromagneticInduction />;
            case 'molar-concentration':
                return <MolarConcentration />;
            case 'molecular-geometry':
                return <MolecularGeometry />;
            case 'energy-skate-park':
                return <EnergySkatePark />;
            case 'dna-replication':
                return <DNAReplication />;
            case 'nerve-impulse':
                return <NerveImpulse />;
            case 'radioactive-decay':
                return <RadioactiveDecay />;
            case 'thermal-transfer':
                return <ThermalTransfer />;
            case 'sound-propagation':
                return <SoundPropagation />;
            case 'organic-chemistry':
                return <OrganicChemistry />;
            case 'enzyme-kinetics':
                return <EnzymeKinetics />;
            case 'protein-synthesis':
                return <ProteinSynthesis />;
            case 'kepler-laws':
                return <KeplerLaws />;
            case 'rc-circuit':
                return <RCCircuit />;
            case 'pendulum-oscillations':
                return <PendulumOscillations />;
            case 'nuclear-fusion-fission':
                return <NuclearInteraction />;
            case 'photoelectric-effect':
                return <PhotoelectricEffect />;
            case 'muscle-contraction':
                return <MuscleContraction />;
            case 'climate-feedback':
                return <ClimateFeedback />;
            case 'rlc-circuit':
                return <RLCCircuit />;
            case 'chirality-stereochemistry':
                return <Chirality />;
            case 'esterification-reaction':
                return <ChemicalReaction type="esterification" />;
            case 'saponification-soap':
                return <ChemicalReaction type="saponification" />;
            case 'hiv-immune-system':
                return <ImmuneSystem type="hiv" />;
            case 'infection-defense':
            case 'immune': // Fallback generique
                return <ImmuneSystem type="infection" />;

            // === PC 4ÈME - SIMULATIONS IMMERSIVES ===
            case 'density-explorer':
                return <DensityExplorer />;
            case 'refraction-simulator':
                return <RefractionSimulator />;
            case 'circuit-series-parallel':
                return <CircuitSeriesParallel />;
            case 'mass-conservation':
                return <MassConservation />;
            case 'light-propagation-pc4':
                return <LightPropagationPC4 />;
            case 'shadows-simulator':
                return <ShadowsSimulator />;
            case 'scientific-method':
                return <ScientificMethod />;
            case 'measurement-tools':
                return <MeasurementTools />;
            case 'light-sources':
                return <LightSources />;
            case 'intro-electricity':
                return <IntroElectricity />;
            case 'mixture-separation':
                return <MixtureSeparationPC4 />;
            case 'mole-concept':
                return <MoleConceptPC4 />;

            // === CHAPITRES 1-5 PC 4E ===
            case 'chap1-science-intro':
                return <Chap1ScienceIntro />;
            case 'chap2-mesures':
                return <Chap2Mesures />;
            case 'chap3-densite':
                return <Chap3Densite />;
            case 'chap4-poids-masse':
                return <Chap4PoidsMasse />;
            case 'chap5-electricite':
                return <Chap5Electricite />;

            // === CHAPITRES 6-8 PC 4E ===
            case 'chap6-sources-lumiere':
                return <Chap6SourcesLumiere />;
            case 'chap7-propagation-lumiere':
                return <Chap7PropagationLumiere />;
            case 'chap8-refraction':
                return <Chap8Refraction />;

            // === CHAPITRES 9-12 PC 4E ===
            case 'chap9-melanges':
                return <MixtureSeparationPC4 />;
            case 'chap10-atomes':
                return <AtomBuilderSim />;
            case 'chap11-mole':
                return <MoleConceptPC4 />;
            case 'chap12-conservation':
                return <MassConservation />;

            // === PC 3ÈME - SIMULATIONS PROGRAMME BFEM ===
            case 'chap1-lentilles-3e':
                return <Chap1LentillesMCE />;
            case 'chap2-dispersion-3e':
                return <Chap2DispersionLumiere />;
            case 'chap3-forces-3e':
                return <Chap3ForcesVecteurs />;
            case 'chap4-travail-3e':
                return <Chap4TravailPuissance />;
            case 'chap5-electrisation-3e':
                return <Chap5Electrisation />;

            // Fallbacks pour anciens types
            case 'lens-optics':
                return <Chap1LentillesMCE />;
            case 'light-dispersion':
                return <Chap2DispersionLumiere />;
            case 'forces-vectors':
                return <Chap3ForcesVecteurs />;
            case 'work-power':
                return <Chap4TravailPuissance />;
            case 'electrostatics':
                return <Chap5Electrisation />;
            case 'ohm-law-circuit':
                return <Chap6LoiOhm />;
            case 'energy-flow':
                return <Chap7TransformationsEnergie />;
            case 'solution-mixing':
                return <Chap8SolutionsAqueuses />;
            case 'ph-scale':
                return <Chap9AcidesBasesPH />;

            // === SIMULATIONS SECONDE (PART 2 - REPLACEMENT/ENHANCEMENT) ===
            case 'universal-gravitation':
                return <UniversalGravitationSeconde />;
            case 'refraction-light':
                return <RefractionSeconde />;
            case 'light-spectrum':
                return <PrismDispersion />;
            case 'mole-concept':
                return <MoleScale />;
            case 'molar-concentration':
                return <SolutionsSeconde />;

            // === SIMULATIONS SECONDE (PART 3 - NEW ENTRIES) ===
            case 'rectilinear-motion': // Enhanced
                return <MotionRelativity />;
            case 'chromatography':
                return <ChromatographyExperiment />;
            case 'chemical-tests':
                return <ChemicalIdentification />;
            case 'sonar-echolocation':
                return <SonarEcholocation />;
            case 'power-energy':
                return <PowerLifter />;

            case 'metal-reactions':
                return <Chap10Metaux />;
            case 'combustion-3d':
                return <Chap11Combustion />;

            // === SIMULATIONS SECONDE (LYCÉE) ===
            case 'forces-inertia':
                return <ForcesInertia />;
            case 'sound-waves':
                return <SoundWaves />;
            case 'gas-laws':
                return <GasLaws />;
            case 'atomic-structure-seconde':
                return <AtomicStructureSeconde />;
            case 'extraction-distillation':
                return <DistillationSetup />;

            // === NOUVELLES SIMULATIONS PHYSIQUE 2NDE ===
            // Électricité (P1-P7)
            case 'electrisation-2nde':
                return <ElectrisationSimulation />;
            case 'circuit-electrique-2nde':
                return <CircuitElectriqueSeconde />;
            case 'loi-ohm-2nde':
                return <LoiOhmSeconde />;
            case 'generateur-2nde':
                return <GenerateurSeconde />;
            case 'aop-simulation':
                return <AOPSimulation />;
            // Mécanique (P8-P12)
            case 'mouvement-2nde':
                return <MouvementSeconde />;
            case 'forces-poids-2nde':
                return <ForcesPoidsSeconde />;
            case 'equilibre-3forces-2nde':
                return <Equilibre3ForcesSeconde />;
            case 'moment-force-2nde':
                return <MomentForceSeconde />;
            // Optique (P13-P15)
            case 'propagation-lumiere-2nde':
                return <PropagationLumiereSeconde />;
            case 'reflexion-lumiere-2nde':
                return <ReflexionLumiereSeconde />;
            case 'refraction-dispersion-2nde':
                return <RefractionDispersionSeconde />;

            // === CHIMIE 2NDE S - SIMULATIONS GAMIFIÉES ===
            case 'separation-lab':
                return <SeparationLab />;
            case 'chromatography':
                return <ChromatographyExperiment />;
            case 'mole-scale':
                return <MoleScale />;
            case 'dilution-simulation':
                return <DilutionSimulation />;
            case 'titrage-acide-base':
                return <TitrageAcideBase />;
            case 'dissolution-simulation':
                return <DissolutionSimulation />;
            case 'equation-balancer':
                return <EquationBalancer />;
            case 'lewis-structure':
                return <LewisStructure />;
            case 'chemical-tests-gamified':
                return <ChemicalTestsGamified />;

            // === CHIMIE 2NDE S - SIMULATIONS AVANCÉES (Mode Défi) ===
            case 'atomic-structure-seconde':
            case 'atomic-structure-advanced':
                return <AtomicStructureAdvanced />;
            case 'mole-scale-advanced':
                return <MoleScaleAdvanced />;
            case 'lewis-structure-advanced':
                return <LewisStructureAdvanced />;
            case 'equation-balancer-advanced':
                return <EquationBalancerAdvanced />;

            // === CHIMIE 2NDE S - SIMULATIONS AVANCÉES C6-C10 ===
            case 'dilution-advanced':
            case 'dilution-simulation':
                return <DilutionAdvanced />;
            case 'titrage-advanced':
            case 'titrage-acide-base':
                return <TitrageAdvanced />;
            case 'ph-indicateurs-advanced':
            case 'chap9-acides-bases-ph':
                return <PHIndicateursAdvanced />;
            case 'tests-ions-advanced':
            case 'chemical-tests-gamified':
                return <TestsIonsAdvanced />;

            // === LABORATOIRE VIRTUEL CHIMIE 2NDE S ===

            case 'virtual-lab-c1':
                return <VirtualChemLab scenario="C1" />;
            case 'virtual-lab-c2':
                return <VirtualChemLab scenario="C2" />;
            case 'virtual-lab-c3':
                return <VirtualChemLab scenario="C3" />;
            case 'virtual-lab-c4':
                return <VirtualChemLab scenario="C4" />;
            case 'virtual-lab-c5':
                return <VirtualChemLab scenario="C5" />;
            case 'virtual-lab-c6':
                return <VirtualChemLab scenario="C6" />;
            case 'virtual-lab-c7':
                return <VirtualChemLab scenario="C7" />;
            case 'virtual-lab-c8':
                return <VirtualChemLab scenario="C8" />;
            case 'virtual-lab-c9':
                return <VirtualChemLab scenario="C9" />;
            case 'virtual-lab-c10':
                return <VirtualChemLab scenario="C10" />;

            default:
                return <Atom {...config} />;
        }
    };

    return (
        <div className="w-full h-[calc(100vh-140px)] rounded-2xl overflow-hidden bg-gradient-to-br from-black to-slate-900 border border-white/20 relative">
            <Canvas>
                <Suspense fallback={null}>
                    {/* Caméra - Centrée et reculée pour voir toute la cellule */}
                    <PerspectiveCamera makeDefault position={[5, 4, 5]} />

                    {/* Contrôles */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                    />

                    {/* Lumières */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F5D4" />
                    <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />

                    {/* Environnement */}
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    {/* Simulation */}
                    {renderSimulation()}

                    {/* Grille de référence */}
                    <gridHelper args={[10, 10, '#00F5D4', '#1F2937']} position={[0, -3, 0]} />
                </Suspense>
            </Canvas>
        </div>
    );
}

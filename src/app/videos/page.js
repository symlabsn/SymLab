'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { Video, Code, BookOpen, Cpu, Play, Download, Maximize2 } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';

// --- 3D Mathematical Visualizations ---

function PythagorasTheorem() {
    return (
        <group>
            {/* Triangle */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 3]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>
            <mesh position={[1.5, 0, 1.5]}>
                <boxGeometry args={[0.1, 2, 0.1]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>
            <mesh position={[0, 1, 0]} rotation={[0, 0, Math.atan(2 / 3)]}>
                <boxGeometry args={[0.1, Math.sqrt(13), 0.1]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
        </group>
    );
}

function FibonacciSpiral() {
    const meshRef = useRef();
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.z += delta * 0.3;
        }
    });

    return (
        <group ref={meshRef}>
            {[1, 1, 2, 3, 5, 8].map((size, i) => (
                <mesh key={i} position={[i * 0.5 - 1.5, 0, 0]}>
                    <boxGeometry args={[size * 0.2, size * 0.2, 0.1]} />
                    <meshStandardMaterial color={`hsl(${i * 60}, 70%, 60%)`} />
                </mesh>
            ))}
        </group>
    );
}

function DerivativeVisualization() {
    const points = [];
    for (let i = 0; i < 50; i++) {
        const x = (i - 25) * 0.1;
        const y = x * x * 0.1;
        points.push([x, y, 0]);
    }

    return (
        <group>
            {points.map((point, i) => (
                <mesh key={i} position={point}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" />
                </mesh>
            ))}
        </group>
    );
}

function MatrixTransformation() {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime;
            meshRef.current.rotation.y = t * 0.5;
            meshRef.current.scale.x = 1 + Math.sin(t) * 0.3;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#8B5CF6" wireframe />
        </mesh>
    );
}

// --- Engineering Visualizations ---

function Bridge() {
    return (
        <group>
            {/* Deck */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[6, 0.2, 1]} />
                <meshStandardMaterial color="#78716C" />
            </mesh>
            {/* Cables */}
            {[-2, -1, 0, 1, 2].map((x, i) => (
                <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, 0.3]}>
                    <cylinderGeometry args={[0.05, 0.05, 2]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
            ))}
            {/* Tower */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[0.3, 4, 0.3]} />
                <meshStandardMaterial color="#DC2626" />
            </mesh>
        </group>
    );
}

function Gear() {
    const meshRef = useRef();
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.z += delta * 0.5;
        }
    });

    return (
        <group ref={meshRef}>
            <mesh>
                <cylinderGeometry args={[1.5, 1.5, 0.3, 8]} />
                <meshStandardMaterial color="#F59E0B" metalness={0.8} />
            </mesh>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 1.8, Math.sin(i * Math.PI / 4) * 1.8, 0]}>
                    <boxGeometry args={[0.3, 0.6, 0.3]} />
                    <meshStandardMaterial color="#D97706" />
                </mesh>
            ))}
        </group>
    );
}

function Circuit() {
    return (
        <group>
            {/* Resistor */}
            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[0.8, 0.3, 0.3]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>
            {/* Capacitor */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.2, 0.8, 0.3]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>
            {/* Wires */}
            <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 2]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>
            <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 2]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>
        </group>
    );
}

// --- Programming Visualizations ---

function DataStructureTree() {
    return (
        <group>
            {/* Root */}
            <mesh position={[0, 2, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            {/* Children */}
            {[-1, 1].map((x, i) => (
                <group key={i}>
                    <mesh position={[x, 1, 0]}>
                        <sphereGeometry args={[0.25, 16, 16]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <mesh position={[x / 2, 1.5, 0]} rotation={[0, 0, x * 0.5]}>
                        <cylinderGeometry args={[0.05, 0.05, 1]} />
                        <meshStandardMaterial color="#6B7280" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function AlgorithmVisualization() {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
        }
    });

    return (
        <group>
            {[0, 1, 2, 3, 4].map((i) => (
                <mesh key={i} position={[i - 2, 0, 0]}>
                    <boxGeometry args={[0.3, (i + 1) * 0.5, 0.3]} />
                    <meshStandardMaterial color="#8B5CF6" />
                </mesh>
            ))}
            <mesh ref={meshRef} position={[0, 2, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
            </mesh>
        </group>
    );
}

function ScenePreview({ component: Component, title }) {
    return (
        <div className="group relative bg-[#0F1115] rounded-2xl border border-white/10 overflow-hidden hover:border-[#00F5D4]/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00F5D4]/10">
            <div className="aspect-video bg-black/50 relative">
                <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Suspense fallback={null}>
                        <Component />
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} />
                </Canvas>
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white/50 border border-white/5">
                    3D Interactif
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-white mb-1 group-hover:text-[#00F5D4] transition-colors">{title}</h3>
                <p className="text-xs text-gray-500">Cliquez pour explorer en plein écran</p>
            </div>
        </div>
    );
}

export default function VideosPage() {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [selectedVisualization, setSelectedVisualization] = useState(null);

    const categories = ['Tous', 'Mathématiques', 'Ingénierie', 'Programmation', 'SymPy'];

    const visualizations = [
        // Mathématiques
        { id: 1, category: 'Mathématiques', title: 'Théorème de Pythagore', component: PythagorasTheorem, code: 'from sympy import symbols, sqrt\na, b = symbols("a b")\nc = sqrt(a**2 + b**2)' },
        { id: 2, category: 'Mathématiques', title: 'Suite de Fibonacci', component: FibonacciSpiral, code: 'from sympy import fibonacci\nfor i in range(10):\n    print(fibonacci(i))' },
        { id: 3, category: 'Mathématiques', title: 'Dérivée de Fonction', component: DerivativeVisualization, code: 'from sympy import symbols, diff\nx = symbols("x")\nf = x**2\ndf = diff(f, x)  # 2*x' },
        { id: 4, category: 'Mathématiques', title: 'Transformation Matricielle', component: MatrixTransformation, code: 'from sympy import Matrix\nM = Matrix([[1, 2], [3, 4]])\nM_inv = M.inv()' },

        // Ingénierie
        { id: 5, category: 'Ingénierie', title: 'Structure de Pont', component: Bridge, code: '# Calcul de charge\nfrom sympy import symbols\nF, L = symbols("F L")\nmoment = F * L / 2' },
        { id: 6, category: 'Ingénierie', title: 'Engrenage Mécanique', component: Gear, code: '# Rapport de vitesse\nfrom sympy import symbols\nN1, N2 = symbols("N1 N2")\nratio = N1 / N2' },
        { id: 7, category: 'Ingénierie', title: 'Circuit Électrique', component: Circuit, code: '# Loi d\'Ohm\nfrom sympy import symbols\nV, R = symbols("V R")\nI = V / R' },

        // Programmation
        { id: 8, category: 'Programmation', title: 'Arbre Binaire', component: DataStructureTree, code: 'class Node:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None' },
        { id: 9, category: 'Programmation', title: 'Tri à Bulles', component: AlgorithmVisualization, code: 'def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr)-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]' },
    ];

    const filteredVisualizations = selectedCategory === 'Tous'
        ? visualizations
        : visualizations.filter(v => v.category === selectedCategory);

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                            <Video size={18} />
                        </div>
                        <span className="font-bold text-xl tracking-tight">SymLab <span className="text-purple-500">Vidéos</span></span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <Link href="/engineering" className="hover:text-white transition-colors">Ingénierie</Link>
                        <Link href="/simulations" className="hover:text-white transition-colors">Simulations</Link>
                        <Link href="/code" className="hover:text-white transition-colors">Notebook</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-12 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Visualisations 3D Interactives</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                        Mathématiques & Code <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-[#00F5D4]">en 3D.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explorez des concepts mathématiques, d'ingénierie et de programmation à travers des visualisations 3D interactives et du code SymPy.
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <div className="flex gap-2 justify-center flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20 scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Visualizations Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVisualizations.map((viz) => (
                        <div key={viz.id} onClick={() => setSelectedVisualization(viz)}>
                            <ScenePreview component={viz.component} title={viz.title} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Full Screen View */}
            {selectedVisualization && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedVisualization(null)}>
                    <div className="max-w-6xl w-full bg-[#0F1115] rounded-3xl border border-white/10 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-2xl font-bold">{selectedVisualization.title}</h2>
                            <button onClick={() => setSelectedVisualization(null)} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                                ✕
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 p-6">
                            {/* 3D View */}
                            <div className="aspect-square bg-black/50 rounded-xl overflow-hidden">
                                <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                                    <ambientLight intensity={0.5} />
                                    <pointLight position={[10, 10, 10]} intensity={1} />
                                    <Suspense fallback={null}>
                                        <selectedVisualization.component />
                                        <Environment preset="city" />
                                    </Suspense>
                                    <OrbitControls autoRotate autoRotateSpeed={0.5} />
                                </Canvas>
                            </div>

                            {/* Code View */}
                            <div className="bg-black/50 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                    <span className="text-xs font-mono text-gray-500">Code SymPy / Python</span>
                                    <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                        <Download size={14} />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <pre className="font-mono text-sm text-gray-300 leading-relaxed">
                                        <code>{selectedVisualization.code}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

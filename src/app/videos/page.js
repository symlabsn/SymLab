'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Send, Video, Image as ImageIcon, Code, Sparkles, Play, Download, Maximize2, RefreshCw } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Components for "Direct Creation" ---

function RotatingShape({ type, color }) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    let geometry;
    switch (type) {
        case 'cube': geometry = <boxGeometry args={[2, 2, 2]} />; break;
        case 'sphere': geometry = <sphereGeometry args={[1.5, 32, 32]} />; break;
        case 'torus': geometry = <torusGeometry args={[1.5, 0.5, 16, 100]} />; break;
        case 'icosahedron': geometry = <icosahedronGeometry args={[1.5, 0]} />; break;
        default: geometry = <boxGeometry args={[2, 2, 2]} />;
    }

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef}>
                {geometry}
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
            </mesh>
        </Float>
    );
}

function SolarSystem() {
    return (
        <group>
            {/* Sun */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial emissive="#FDB813" emissiveIntensity={2} color="#FDB813" />
            </mesh>
            {/* Earth */}
            <group rotation={[0, 0, 0.4]}> {/* Tilt */}
                <mesh position={[4, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#4B70DD" roughness={0.5} />
                </mesh>
            </group>
        </group>
    );
}

function Molecule() {
    return (
        <group>
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[1.2, 1.2, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[-1.2, 1.2, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
            {/* Bonds */}
            <mesh position={[0.6, 0.6, 0]} rotation={[0, 0, -0.785]}>
                <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                <meshStandardMaterial color="gray" />
            </mesh>
            <mesh position={[-0.6, 0.6, 0]} rotation={[0, 0, 0.785]}>
                <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                <meshStandardMaterial color="gray" />
            </mesh>
        </group>
    );
}

function DNAHelix() {
    const count = 20;
    return (
        <group>
            {Array.from({ length: count }).map((_, i) => (
                <group key={i} position={[0, (i - count / 2) * 0.5, 0]} rotation={[0, i * 0.5, 0]}>
                    <mesh position={[1, 0, 0]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="#FF0080" />
                    </mesh>
                    <mesh position={[-1, 0, 0]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="#00FFFF" />
                    </mesh>
                    <mesh rotation={[0, 0, 1.57]}>
                        <cylinderGeometry args={[0.05, 0.05, 2]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function WaveFunction() {
    const count = 50;
    return (
        <group>
            {Array.from({ length: count }).map((_, i) => {
                const x = (i - count / 2) * 0.2;
                const y = Math.sin(x);
                return (
                    <mesh key={i} position={[x, y, 0]}>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" />
                    </mesh>
                );
            })}
        </group>
    );
}

function ScenePreview({ config }) {
    return (
        <div className="w-full h-64 md:h-80 bg-black/50 rounded-xl overflow-hidden border border-white/10 relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                    {config.scene === 'shape' && <RotatingShape type={config.shape} color={config.color} />}
                    {config.scene === 'solar' && <SolarSystem />}
                    {config.scene === 'molecule' && <Molecule />}
                    {config.scene === 'dna' && <DNAHelix />}
                    {config.scene === 'wave' && <WaveFunction />}
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={2} />
            </Canvas>
            <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white/50 border border-white/5">
                Rendu 3D Temps Réel
            </div>
        </div>
    );
}

// --- Main Page Component ---

export default function VideosPage() {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [mode, setMode] = useState('video'); // 'video', 'image', 'code'
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Bonjour ! Je suis le Studio IA de SymLab. Je peux générer des animations 3D, des illustrations et du code explicatif. Essayez 'Montre-moi un cube rouge' ou 'Simule le système solaire'." }
    ]);

    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        const userPrompt = prompt;
        setMessages(prev => [...prev, { role: 'user', content: userPrompt }]);
        setPrompt('');
        setIsGenerating(true);

        // Simulate AI Logic
        setTimeout(() => {
            let response = { role: 'ai', content: "", attachment: null };
            const lowerPrompt = userPrompt.toLowerCase();

            if (mode === 'video') {
                if (lowerPrompt.includes('cube')) {
                    response.content = "J'ai généré une visualisation 3D d'un cube en rotation.";
                    response.attachment = { type: '3d', config: { scene: 'shape', shape: 'cube', color: '#EF4444' } };
                } else if (lowerPrompt.includes('sphère') || lowerPrompt.includes('boule')) {
                    response.content = "Voici une sphère métallique.";
                    response.attachment = { type: '3d', config: { scene: 'shape', shape: 'sphere', color: '#3B82F6' } };
                } else if (lowerPrompt.includes('système') || lowerPrompt.includes('soleil') || lowerPrompt.includes('planète')) {
                    response.content = "Simulation simplifiée du système solaire (Soleil et Terre).";
                    response.attachment = { type: '3d', config: { scene: 'solar' } };
                } else if (lowerPrompt.includes('molécule') || lowerPrompt.includes('atome') || lowerPrompt.includes('chimie')) {
                    response.content = "Visualisation d'une molécule d'eau (H2O).";
                    response.attachment = { type: '3d', config: { scene: 'molecule' } };
                } else if (lowerPrompt.includes('dna') || lowerPrompt.includes('adn') || lowerPrompt.includes('biologie')) {
                    response.content = "Structure en double hélice de l'ADN.";
                    response.attachment = { type: '3d', config: { scene: 'dna' } };
                } else if (lowerPrompt.includes('onde') || lowerPrompt.includes('sinus') || lowerPrompt.includes('fréquence')) {
                    response.content = "Représentation d'une fonction d'onde sinusoïdale.";
                    response.attachment = { type: '3d', config: { scene: 'wave' } };
                } else {
                    response.content = "Je génère une forme abstraite pour illustrer ce concept.";
                    response.attachment = { type: '3d', config: { scene: 'shape', shape: 'torus', color: '#10B981' } };
                }
            } else if (mode === 'code') {
                response.content = "Voici le code Python correspondant à votre demande.";
                response.attachment = {
                    type: 'code',
                    title: 'script.py',
                    content: `def solve_problem():\n    # Solution générée pour: ${userPrompt}\n    return "Solution"`
                };
            } else {
                response.content = "Génération de l'image...";
                response.attachment = { type: 'image' };
            }

            setMessages(prev => [...prev, response]);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black flex flex-col">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                            <Video size={18} />
                        </div>
                        <span className="font-bold text-xl tracking-tight">SymLab <span className="text-purple-500">Studio</span></span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <Link href="/engineering" className="hover:text-white transition-colors">Ingénierie</Link>
                        <Link href="/simulations" className="hover:text-white transition-colors">Simulations</Link>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="flex-1 pt-16 flex">
                {/* Sidebar - Tools */}
                <div className="w-80 border-r border-white/10 bg-[#0F1115] p-6 hidden md:flex flex-col gap-8">
                    <div>
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Mode de Création</h2>
                        <div className="space-y-2">
                            <button
                                onClick={() => setMode('video')}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${mode === 'video' ? 'bg-purple-500/10 border-purple-500 text-purple-400' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                            >
                                <Video size={20} />
                                <div className="text-left">
                                    <div className="font-bold text-sm">Animation 3D</div>
                                    <div className="text-[10px] opacity-60">Rendu Temps Réel</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setMode('image')}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${mode === 'image' ? 'bg-pink-500/10 border-pink-500 text-pink-400' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                            >
                                <ImageIcon size={20} />
                                <div className="text-left">
                                    <div className="font-bold text-sm">Illustration</div>
                                    <div className="text-[10px] opacity-60">Concepts Visuels</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setMode('code')}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${mode === 'code' ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                            >
                                <Code size={20} />
                                <div className="text-left">
                                    <div className="font-bold text-sm">Code Snippet</div>
                                    <div className="text-[10px] opacity-60">Python • JS</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
                            <div className="flex items-center gap-2 mb-2 text-purple-400">
                                <Sparkles size={16} />
                                <span className="text-xs font-bold uppercase">Capacités</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Le Studio génère désormais des scènes 3D interactives directement dans le chat. Essayez de demander des formes géométriques ou des systèmes planétaires.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col relative bg-black">
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 pb-32">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-white/10'}`}>
                                    {msg.role === 'ai' ? <Sparkles size={20} /> : <div className="font-bold">You</div>}
                                </div>
                                <div className={`max-w-2xl space-y-4 ${msg.role === 'user' ? 'items-end flex flex-col' : 'w-full'}`}>
                                    <div className={`p-4 rounded-2xl ${msg.role === 'ai' ? 'bg-[#0F1115] border border-white/10' : 'bg-purple-600 text-white'}`}>
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                    </div>

                                    {/* Attachments */}
                                    {msg.attachment && (
                                        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] animate-in fade-in slide-in-from-bottom-4">
                                            {msg.attachment.type === '3d' && (
                                                <ScenePreview config={msg.attachment.config} />
                                            )}

                                            {msg.attachment.type === 'code' && (
                                                <div>
                                                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                                        <span className="text-xs font-mono text-gray-500">{msg.attachment.title}</span>
                                                        <div className="flex gap-2">
                                                            <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                                <Download size={14} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 overflow-x-auto">
                                                        <pre className="font-mono text-sm text-gray-300">
                                                            <code>{msg.attachment.content}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            )}

                                            {msg.attachment.type === 'image' && (
                                                <div className="aspect-video bg-gray-900 flex items-center justify-center text-gray-700">
                                                    <div className="text-center">
                                                        <ImageIcon size={48} className="mx-auto mb-2 opacity-20" />
                                                        <span className="text-xs">Image Placeholder</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black via-black to-transparent">
                        <div className="max-w-4xl mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50"></div>
                            <div className="relative bg-[#0F1115] border border-white/10 rounded-2xl p-2 flex items-end gap-2 shadow-2xl">
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleGenerate();
                                        }
                                    }}
                                    placeholder={mode === 'video' ? "Décrivez l'animation 3D (ex: cube rouge, système solaire...)" : "Décrivez l'illustration..."}
                                    className="flex-1 bg-transparent border-none text-white placeholder-gray-500 resize-none p-3 max-h-32 focus:ring-0 text-sm"
                                    rows={1}
                                />
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating || !prompt.trim()}
                                    className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-purple-600/20"
                                >
                                    {isGenerating ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Send, Video, Image as ImageIcon, Code, Sparkles, Play, Download, Maximize2 } from 'lucide-react';

export default function StudioPage() {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState(null);
    const [mode, setMode] = useState('video'); // 'video', 'image', 'code'
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Bonjour ! Je suis l'Architecte Visuel de SymLab. Que souhaitez-vous créer aujourd'hui ? Une animation Manim, une illustration conceptuelle ou une démo de code ?" }
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

        // Add user message
        const newMessages = [...messages, { role: 'user', content: prompt }];
        setMessages(newMessages);
        setPrompt('');
        setIsGenerating(true);

        // Simulate AI thinking and generation
        setTimeout(() => {
            let responseContent = {};
            let aiText = "";

            if (mode === 'video') {
                aiText = "J'ai généré le code Manim pour cette animation. Voici le script Python prêt à être rendu.";
                responseContent = {
                    type: 'code',
                    language: 'python',
                    title: 'animation.py',
                    content: `from manim import *

class MathConcept(Scene):
    def construct(self):
        # Titre
        title = Text("Le Théorème de Pythagore").scale(0.8)
        title.to_edge(UP)
        
        # Triangle
        triangle = Polygon(
            [-2, -1, 0], [2, -1, 0], [2, 2, 0],
            color=BLUE, fill_opacity=0.5
        )
        
        # Formule
        formula = MathTex("a^2 + b^2 = c^2")
        formula.next_to(triangle, RIGHT, buff=1)
        
        self.play(Write(title))
        self.play(DrawBorderThenFill(triangle))
        self.play(Write(formula))
        self.wait(2)`
                };
            } else if (mode === 'image') {
                aiText = "Voici une illustration conceptuelle basée sur votre demande. (Simulation)";
                responseContent = {
                    type: 'image',
                    url: 'https://source.unsplash.com/random/800x600/?mathematics,abstract', // Placeholder
                    title: 'Concept Art'
                };
            } else {
                aiText = "Voici l'extrait de code correspondant à votre demande.";
                responseContent = {
                    type: 'code',
                    language: 'javascript',
                    title: 'algorithm.js',
                    content: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple d'utilisation
console.log(fibonacci(10)); // 55`
                };
            }

            setMessages(prev => [...prev, {
                role: 'ai',
                content: aiText,
                attachment: responseContent
            }]);
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black flex flex-col">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                            AI
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
                                    <div className="font-bold text-sm">Animation Manim</div>
                                    <div className="text-[10px] opacity-60">Python • Mathématiques</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setMode('image')}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${mode === 'image' ? 'bg-pink-500/10 border-pink-500 text-pink-400' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                            >
                                <ImageIcon size={20} />
                                <div className="text-left">
                                    <div className="font-bold text-sm">Illustration</div>
                                    <div className="text-[10px] opacity-60">DALL-E • Concepts</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setMode('code')}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${mode === 'code' ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                            >
                                <Code size={20} />
                                <div className="text-left">
                                    <div className="font-bold text-sm">Code Snippet</div>
                                    <div className="text-[10px] opacity-60">Python • JS • C++</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
                            <div className="flex items-center gap-2 mb-2 text-purple-400">
                                <Sparkles size={16} />
                                <span className="text-xs font-bold uppercase">Conseil Pro</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Pour les animations mathématiques, précisez les formules LaTeX et les couleurs souhaitées pour un meilleur résultat.
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
                                <div className={`max-w-2xl space-y-4 ${msg.role === 'user' ? 'items-end flex flex-col' : ''}`}>
                                    <div className={`p-4 rounded-2xl ${msg.role === 'ai' ? 'bg-[#0F1115] border border-white/10' : 'bg-purple-600 text-white'}`}>
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                    </div>

                                    {/* Attachments (Code/Image) */}
                                    {msg.attachment && (
                                        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] animate-in fade-in slide-in-from-bottom-4">
                                            {msg.attachment.type === 'code' && (
                                                <div>
                                                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                                        <span className="text-xs font-mono text-gray-500">{msg.attachment.title}</span>
                                                        <div className="flex gap-2">
                                                            <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                                <Download size={14} />
                                                            </button>
                                                            <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                                <Play size={14} />
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
                                                <div className="relative group">
                                                    <div className="aspect-video bg-gray-900 flex items-center justify-center text-gray-700">
                                                        {/* Placeholder for actual image generation */}
                                                        <div className="text-center">
                                                            <ImageIcon size={48} className="mx-auto mb-2 opacity-20" />
                                                            <span className="text-xs">Image Placeholder</span>
                                                        </div>
                                                    </div>
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                                        <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors">
                                                            <Maximize2 size={20} />
                                                        </button>
                                                        <button className="p-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20 transition-colors">
                                                            <Download size={20} />
                                                        </button>
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
                                    placeholder={mode === 'video' ? "Décrivez l'animation mathématique (ex: Un cercle qui se transforme en carré...)" : "Décrivez l'illustration..."}
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
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-gray-600">SymStudio AI peut faire des erreurs. Vérifiez le code généré.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('profile');

    // Pitch révolutionnaire basé sur les statistiques de l'enseignement scientifique au Sénégal
    const pitchStats = [
        {
            label: 'Taux d\'échec en Sciences',
            value: '68%',
            icon: '📉',
            context: 'au BFEM & BAC (2023)',
            color: 'from-red-500 to-orange-500'
        },
        {
            label: 'Élèves sans accès au labo',
            value: '85%',
            icon: '🔬',
            context: 'dans les zones rurales',
            color: 'from-orange-500 to-yellow-500'
        },
        {
            label: 'Enseignants formés en STEM',
            value: '12%',
            icon: '👨‍🏫',
            context: 'avec outils numériques',
            color: 'from-yellow-500 to-amber-500'
        },
        {
            label: 'Notre Impact Potentiel',
            value: '2M+',
            icon: '🚀',
            context: 'd\'élèves à transformer',
            color: 'from-[#00F5D4] to-purple-500'
        }
    ];

    const businessModel = [
        {
            title: 'Le Problème',
            icon: '⚠️',
            color: 'from-red-500/20 to-orange-500/20',
            borderColor: 'border-red-500/50',
            description: 'Au Sénégal, 68% des élèves échouent aux examens scientifiques. Les cours magistraux abstraits, le manque de laboratoires (85% des écoles) et l\'absence d\'outils pédagogiques adaptés créent une génération déconnectée des STEM.',
            metrics: '2.3M élèves impactés'
        },
        {
            title: 'Notre Solution',
            icon: '💡',
            color: 'from-[#00F5D4]/20 to-cyan-500/20',
            borderColor: 'border-[#00F5D4]/50',
            description: 'SymLab transforme l\'apprentissage scientifique avec des simulations 3D interactives, des analogies culturelles sénégalaises et un parcours gamifié. Accessible sur smartphone, même avec connexion limitée.',
            metrics: '29 simulations, 3 niveaux'
        },
        {
            title: 'Proposition de Valeur',
            icon: '🎯',
            color: 'from-purple-500/20 to-pink-500/20',
            borderColor: 'border-purple-500/50',
            description: 'Démocratiser les sciences en Afrique. Chaque élève mérite de voir un atome en 3D, de comprendre la physique quantique avec des exemples du quotidien sénégalais, et de devenir le prochain Einstein africain.',
            metrics: 'Gratuit & Open Source'
        },
        {
            title: 'Marché & Traction',
            icon: '📈',
            color: 'from-green-500/20 to-emerald-500/20',
            borderColor: 'border-green-500/50',
            description: '2.3M élèves au Sénégal, 50M+ en Afrique de l\'Ouest francophone. Partenariats avec le Ministère de l\'Éducation, 15 lycées pilotes, et une communauté grandissante d\'enseignants innovants.',
            metrics: 'TAM: 50M élèves'
        }
    ];

    const visionCards = [
        {
            icon: '🌍',
            title: 'Vision 2030',
            stat: '10M',
            label: 'd\'élèves africains formés',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: '🏆',
            title: 'Impact Mesurable',
            stat: '+45%',
            label: 'de réussite en sciences',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: '🤝',
            title: 'Écosystème',
            stat: '1000+',
            label: 'enseignants partenaires',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: '💰',
            title: 'Modèle Durable',
            stat: 'B2B',
            label: 'Écoles & Gouvernements',
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    const skills = [
        { name: 'Physique Théorique', level: 95, color: '#00F5D4' },
        { name: 'Data Science', level: 90, color: '#7C3AED' },
        { name: 'Machine Learning', level: 85, color: '#F59E0B' },
        { name: 'Python/NumPy/SymPy', level: 95, color: '#3B82F6' },
        { name: 'Visualisation de données', level: 88, color: '#EC4899' }
    ];

    const expertise = [
        {
            title: 'Physique & Modélisation',
            icon: '⚛️',
            description: 'Spécialiste en physique théorique et computationnelle, avec une expertise en mécanique quantique et modélisation de systèmes complexes.'
        },
        {
            title: 'Data Science & IA',
            icon: '🤖',
            description: 'Expert en analyse de données massives, machine learning et intelligence artificielle appliquée aux sciences physiques.'
        },
        {
            title: 'Enseignement & Pédagogie',
            icon: '🎓',
            description: 'Passionné par la transmission du savoir scientifique avec des méthodes innovantes et interactives.'
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">
            {/* Hero Section avec effet parallaxe */}
            <div className="relative overflow-hidden">
                {/* Fond animé */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Navbar */}
                <nav className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-black/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                            <span className="text-2xl">←</span>
                            <span>Retour à l'accueil</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="text-[#00F5D4] font-bold">À Propos</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Photo de profil avec effet glassmorphism */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <div className="relative">
                                    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-xl bg-white/10 shadow-2xl">
                                        <Image
                                            src="/profile.jpg"
                                            alt="El Hadji Momar FAYE"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Badge flottant */}
                                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00F5D4] to-purple-500 rounded-full p-4 shadow-2xl animate-bounce">
                                        <span className="text-4xl">⚛️</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informations principales */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F5D4] to-purple-500 animate-gradient">
                                    El Hadji Momar FAYE
                                </h1>
                                <p className="text-2xl text-gray-300 mb-2">Physicien & Data Scientist</p>
                                <p className="text-lg text-gray-400 italic">Créateur de SymLab</p>
                            </div>

                            {/* Cartes de contact */}
                            <div className="space-y-3">
                                <a href="mailto:fayemomar33@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F5D4]/50 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00F5D4] to-cyan-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        📧
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-semibold">fayemomar33@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+221707434349" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        📱
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Téléphone</p>
                                        <p className="text-white font-semibold">+221 70 743 43 49</p>
                                    </div>
                                </a>
                            </div>

                            {/* Mission */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-xl">
                                <h3 className="text-xl font-bold mb-3 text-[#00F5D4]">🎯 Mission</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Démocratiser l'accès aux sciences et à la technologie en Afrique à travers des outils pédagogiques innovants et interactifs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pitch Révolutionnaire - Le Problème */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {pitchStats.map((stat, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:border-white/50">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                            <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-400">{stat.context}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Business Model Canvas */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500">
                        Notre Pitch Révolutionnaire
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Transformer l'éducation scientifique en Afrique avec la technologie et l'innovation pédagogique
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {businessModel.map((item, index) => (
                        <div key={index} className={`group p-8 rounded-2xl bg-gradient-to-br ${item.color} border-2 ${item.borderColor} backdrop-blur-xl hover:scale-105 transition-all duration-300`}>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-1">{item.title}</h3>
                                    <div className="text-sm text-[#00F5D4] font-semibold">{item.metrics}</div>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Vision 2030 */}
                <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 border-2 border-purple-500/50 backdrop-blur-xl">
                    <h3 className="text-3xl font-black text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                        🚀 Notre Vision & Impact
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {visionCards.map((card, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{card.icon}</div>
                                <div className={`text-4xl font-black bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-2`}>
                                    {card.stat}
                                </div>
                                <div className="text-sm text-gray-400 mb-1">{card.title}</div>
                                <div className="text-xs text-gray-500">{card.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Tab Navigation */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {['profile', 'skills', 'expertise'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black shadow-lg scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {tab === 'profile' && '👤 Profil'}
                            {tab === 'skills' && '💪 Compétences'}
                            {tab === 'expertise' && '🎯 Expertise'}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'profile' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
                                <h2 className="text-3xl font-bold mb-6 text-[#00F5D4]">Parcours</h2>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Physicien de formation avec une passion pour la data science et l'intelligence artificielle,
                                        je me consacre à l'innovation pédagogique dans le domaine des STEM (Science, Technology, Engineering, Mathematics).
                                    </p>
                                    <p>
                                        Fort d'une expérience en recherche et en enseignement, j'ai créé <span className="text-[#00F5D4] font-bold">SymLab</span>,
                                        une plateforme interactive qui révolutionne l'apprentissage des sciences au Sénégal et en Afrique.
                                    </p>
                                    <p>
                                        Ma vision : rendre les sciences accessibles, engageantes et pertinentes pour la nouvelle génération
                                        de scientifiques et d'ingénieurs africains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
                                <h2 className="text-3xl font-bold mb-8 text-[#00F5D4]">Compétences Techniques</h2>
                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="group">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-white">{skill.name}</span>
                                                <span className="text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'expertise' && (
                        <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {expertise.map((item, index) => (
                                <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl hover:scale-105 hover:border-[#00F5D4]/50 transition-all duration-300">
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="p-12 rounded-3xl bg-gradient-to-r from-[#00F5D4]/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-xl text-center">
                    <h2 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                        Collaborons ensemble !
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Vous avez un projet scientifique ou pédagogique ? Discutons de la manière dont nous pouvons innover ensemble.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:fayemomar33@gmail.com" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5D4] to-cyan-500 text-black font-bold hover:scale-105 transition-transform shadow-lg">
                            📧 Me contacter
                        </a>
                        <Link href="/" className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
                            🏠 Retour à SymLab
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

'use client';

const clips = [
  { title: 'Introduction aux vecteurs', duration: '5:20', href: '#' },
  { title: 'Pyodide en pratique', duration: '8:12', href: '#' },
  { title: 'Construire un circuit simple', duration: '6:30', href: '#' },
];

export default function Videos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Capsules Vidéo</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Courtes vidéos pédagogiques pour comprendre rapidement un concept ou une technique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clips.map((c, idx) => (
            <a key={idx} href={c.href} className="group block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-pink-400 transition">
              <div className="h-40 bg-slate-900 rounded mb-4 flex items-center justify-center text-gray-500">Thumbnail</div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400">{c.duration}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

'use client';

export default function Exams() {
  const exams = [
    { id: 1, name: 'Mathématiques S1', questions: 20, difficulty: 'Moyen', completion: 65 },
    { id: 2, name: 'Physique Générale', questions: 25, difficulty: 'Difficile', completion: 45 },
    { id: 3, name: 'Chimie Organique', questions: 18, difficulty: 'Moyen', completion: 80 },
    { id: 4, name: 'Biologie Cellulaire', questions: 22, difficulty: 'Moyen', completion: 55 },
    { id: 5, name: 'Informatique', questions: 20, difficulty: 'Facile', completion: 90 },
    { id: 6, name: 'Géométrie Avancée', questions: 15, difficulty: 'Difficile', completion: 30 },
  ];

  const difficultyColor = (level) => {
    switch (level) {
      case 'Facile': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'Moyen': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Difficile': return 'bg-red-500/20 text-red-400 border-red-400/30';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
            📚 QCM Sénégal
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Testez vos connaissances avec nos questionnaires à choix multiples basés sur le curriculum sénégalais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div key={exam.id} className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-orange-400 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition">{exam.name}</h3>
                <span className={`px-2 py-1 rounded text-xs font-semibold border ${difficultyColor(exam.difficulty)}`}>
                  {exam.difficulty}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{exam.questions} questions</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progression</span>
                  <span className="text-orange-400 font-semibold">{exam.completion}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all"
                    style={{ width: `${exam.completion}%` }}
                  ></div>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-all">
                Commencer
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

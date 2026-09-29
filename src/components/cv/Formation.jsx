// src/components/cv/Formation.jsx

export default function Formation() {
  const academic = [
    {
      degree: "Baccalauréat Sciences Technologies Agronomie Environnement (STAE)",
      school: "Lycée viticole de Beaune",
      year: "1993 - 1995",
      mention: "Mention BIEN",
      highlight: true
    },
    {
      degree: "BEP Agent de laboratoire",
      school: "LEP la fondraie - Castelnau le lez",
      year: "1990 - 1992",
      mention: "Mention BIEN",
      highlight: false
    }
  ];

  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="w-8 h-1 bg-green-500"></span> Formation & Diplômes
      </h2>

      <div className="space-y-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
          Diplômes Académiques
        </h3>
        
        {academic.map((edu, i) => (
          <div 
            key={i} 
            className={`p-5 rounded-xl border-2 ${
              edu.highlight 
                ? "border-blue-600 bg-blue-50 shadow-md" 
                : "border-gray-100 bg-white"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className={`text-lg font-black ${edu.highlight ? "text-blue-900" : "text-gray-800"}`}>
                {edu.degree}
              </h4>
              <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded">
                {edu.mention}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
              <p className="text-gray-600 font-medium">{edu.school}</p>
              <p className="text-gray-400 font-bold">{edu.year}</p>
            </div>
            
            {edu.highlight && (
              <p className="mt-3 text-xs text-blue-700 font-semibold italic">
                → Socle scientifique validé : base solide pour les algorithmes et la logique de programmation.
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
          Auto-formation & Certifications
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-white rounded shadow-sm flex items-center justify-center text-xl">📜</div>
            <div>
              <p className="text-sm font-bold text-gray-800">Développement Web & JS ES6+</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Divers modules OpenClassrooms • Nombreux badges Codecademy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
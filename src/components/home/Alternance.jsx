// src/components/home/Alternance.jsx

export default function Alternance() {
  return (
    <section className="relative overflow-hidden bg-blue-900 rounded-3xl shadow-2xl">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 bg-blue-700 w-40 h-40 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative p-8 md:p-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/10 border border-blue-100/20 text-blue-100 text-sm font-medium mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          À la recherche d'une alternance • Montpellier & périphérie
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Un profil technique senior <br className="hidden md:block" /> 
          au service de vos <span className="text-blue-400">projets Web</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-blue-100 leading-relaxed">
            Fort de <span className="text-white font-semibold">15 ans d'expérience</span> technique en tant que Technicien Supérieur et Chef d'équipe, j'opère aujourd'hui une reconversion stratégique vers le développement. 
          </p>
          
          <p className="text-lg text-blue-200">
            Mon objectif : intégrer votre équipe pour préparer un titre <span className="text-white font-medium italic underline decoration-blue-400">RNCP Développeur Web & Web Mobile</span>. Je ne cherche pas simplement une formation, mais une collaboration où ma <strong>rigueur d'analyse</strong> et ma <strong>capacité de résolution de problèmes</strong> serviront vos enjeux réels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-1">Maturité</div>
            <p className="text-sm text-blue-100">Gestion d'équipe et d'installations complexes</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-1">Autonomie</div>
            <p className="text-sm text-blue-100">Apprentissage autodidacte rigoureux</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-1">Rigueur</div>
            <p className="text-sm text-blue-100">Respect total des règles, normes et directives</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-1">Engagement</div>
            <p className="text-sm text-blue-100">Opérationnel immédiatement à Montpellier</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold shadow-lg">
            ⏱Disponibilité : Immédiate
          </span>
          <span className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg border border-blue-400">
            Secteur : 34070 Montpellier
          </span>
        </div>
      </div>
    </section>
  );
}
// src/components/home/Reconversion.jsx

export default function Reconversion() {
  return (
    <section className="py-12 bg-gray-50 rounded-2xl">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Un virage vers le numérique maîtrisé
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-700">L'apprentissage par l'action</h3>
            <p className="text-gray-700 leading-relaxed">
              Issu d'un parcours technique en tant que <strong>Technicien Supérieur</strong>, 
              j'ai appris à diagnostiquer des systèmes complexes et à encadrer des équipes. 
              Cette rigueur, je l'applique désormais au code.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Afin de valider mon affinité avec la logique de programmation et la rigueur du code, j'ai anticipé mon virage professionnel par une phase 
              d'auto-formation intensive. Cette démarche proactive m'a permis d'acquérir des bases avant d'intégrer ma formation au sein de 
              2i Académie (Groupe SKOLEA) et de confirmer mon projet d'alternance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Compétences acquises</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-800">HTML5 / CSS3</span>
                  <p className="text-xs text-gray-500">Sémantique, Formulaires, Flexbox, Grid, Responsive</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-800">JavaScript (ES6+)</span>
                  <p className="text-xs text-gray-500">Logique, manipulation du DOM et des objets</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-800">Environnement Technique</span>
                  <p className="text-xs text-gray-500">Terminal Linux, Commandes de base, git/github, webstorm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-800">Frameworks</span>
                  <p className="text-xs text-gray-500">React, tailwindCSS</p>
                </div>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400 italic">
                Formations suivies sur OpenClassrooms, Codecademy, W3School, ainsi que diverses sources telles que doc offic. et tutoriels divers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
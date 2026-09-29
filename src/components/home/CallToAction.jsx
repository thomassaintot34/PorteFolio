export default function CallToAction() {
  return (
    <section className="py-16 mb-12 bg-blue-900 rounded-3xl text-center text-white px-6">
      <h2 className="text-3xl font-bold mb-6">
        Prêt à donner sa chance à un profil motivé ?
      </h2>
      
      <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
        Mon passé de technicien supérieur m'a apporté la rigueur ; mon apprentissage en autodidacte m'a donné la passion. 
        Discutons de la manière dont je peux intégrer votre équipe en alternance.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href="/contact" 
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
        >
          Me contacter
        </a>

        <a 
          href="/Thomas.Saintot_Alternant_DeveloppeurWeb.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors"
        >
          Voir mon CV
        </a>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
        <span className="flex items-center gap-2">Montpellier</span>
        <span className="flex items-center gap-2">07.62.12.55.58</span>
        <span className="flex items-center gap-2">thomas.saintot@yahoo.fr</span>
      </div>
    </section>
  );
}
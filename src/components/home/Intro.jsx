export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 py-10">
      <div className="flex-1">
        <h1 className="text-4xl text-center font-bold text-gray-900 mb-4">
          Thomas Saintot
        </h1>
        <h2 className="text-2xl text-center text-blue-600 font-medium mb-6">
          Développeur Web en reconversion
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ancien technicien supérieur, je transitionne vers le numérique. Après avoir acquis des bases solides en HTML, CSS, JavaScript, 
          React et Tailwind CSS en autonomie, je poursuis actuellement mon évolution en intégrant la <strong>formation de Développeur 
          Web et Web Mobile au sein de 2i Academie</strong> pour transformer cette passion en expertise professionnelle.
        </p>
      </div>
      
    </section>
  );
}
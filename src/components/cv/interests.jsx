// src/components/cv/Interests.jsx

export default function Interests() {
  const interests = [
    {
      label: "L'outil informatique",
      emoji: "💻",
      description: "Une passion qui est devenue mon projet professionnel."
    },
    {
      label: "Passion pour le Rugby",
      emoji: "🏉",
      description: "Esprit d'équipe, engagement et persévérance."
    },
    {
      label: "Écologie",
      emoji: "🌱",
      description: "Sensible aux enjeux environnementaux et à l'impact durable."
    }
  ];

  return (
    <section>
      <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">
        Centres d'intérêt
      </h3>
      <div className="space-y-6">
        {interests.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-2xl" role="img" aria-label={item.label}>
              {item.emoji}
            </span>
            <div>
              <h4 className="text-sm font-bold text-gray-900">{item.label}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
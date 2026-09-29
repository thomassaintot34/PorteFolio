export default function Experience() {
  const experiences = [
    {
      role: "Technicien Supérieur (CDI)",
      company: "Izi Confort - Fabregues",
      period: "10/2013 - 07/2025",
      tasks: [
        "Encadrement d'une équipe de 1 à 5 techniciens",
        "Prise en charge totale d'installations photovoltaïques chez des particuliers",
        "Dimensionnement sur site, commande équipement, réalisation, livraison et dépannage",
        "Installation et entretien de pompes à chaleur"
      ]
    },
    {
      role: "Technicien (CDD)",
      company: "Solaire System - Baillargues",
      period: "06/2013 - 09/2013",
      tasks: ["Installation, paramétrage et mise en service de systèmes Photovoltaïques"]
    },
    {
      role: "Technicien (CDI)",
      company: "Poweo Service - Aix en provence",
      period: "12/2008 - 05/2012",
      tasks: [
        "Installation, paramétrage et mise en service de systèmes photovoltaïques",
        "Encadrement d'un technicien"
      ]
    },
    {
      role: "Chef d'équipe de couvreurs (CDI)",
      company: "Bocca Services - Montpellier",
      period: "12/2005 - 10/2008",
      tasks: [
        "Encadrement d'une équipe de 2 à 6 couvreurs",
        "Participation à la réalisation des devis"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-blue-600"></span> Expériences Professionnelles
      </h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-gray-100">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
            <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
            <p className="text-blue-600 font-medium mb-2">{exp.company} | {exp.period}</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
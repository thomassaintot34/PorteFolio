export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">

        <div>
          <h3 className="text-lg font-semibold mb-2">Thomas Saintot</h3>
          <p className="text-sm text-gray-400">
            Développeur Web en reconversion<br />
            Basé à Montpellier
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email : thomas.saintot@yahoo.fr</li>
            <li>Téléphone : 07.62.12.55.58</li>
            <li>Adresse : Montpellier (34070)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Réseaux</h4>
          <ul className="text-sm space-y-1">
            <li><a 
              href="https://github.com/thomassaintot34?tab=repositories" 
              target="_blank"
              className="hover:underline"
            >GitHub</a></li>
            <li><a 
              href="https://fr.linkedin.com/in/thomas-saintot-531392425" 
              target="_blank"
              className="hover:underline"
            >LinkedIn</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Thomas Saintot — Tous droits réservés.
      </div>
    </footer>
  );
}

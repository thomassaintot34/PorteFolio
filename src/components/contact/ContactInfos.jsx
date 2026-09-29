export default function ContactInfos() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full text-xl"></div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h3>
            <a href="mailto:thomas.saintot@yahoo.fr" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
              thomas.saintot@yahoo.fr
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded-full text-xl"></div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Téléphone</h3>
            <p className="text-lg font-bold text-gray-900">07.62.12.55.58</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-50 text-gray-600 flex items-center justify-center rounded-full text-xl"></div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Localisation</h3>
            <p className="text-lg font-bold text-gray-900">Montpellier (34070)</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-900 rounded-2xl text-white">
        <h4 className="font-bold mb-2">Disponibilité</h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          Je suis disponible pour un entretien immédiat en présentiel sur la région de Montpellier ou en visioconférence (Teams).
        </p>
      </div>
    </div>
  );
}
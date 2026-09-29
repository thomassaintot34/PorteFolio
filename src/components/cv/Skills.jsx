export default function Skills() {
  return (
    <section className="space-y-8">
      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-4">Web Technique</h3>
        <div className="flex flex-wrap gap-2">
          {["HTML5", "CSS3", "JavaScript", "React", "Linux", "Terminal"].map(s => (
            <span key={s} className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">{s}</span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Soft Skills</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Sens de l'analyse</li>
          <li>• Résolution de problèmes</li>
          <li>• Service client</li>
        </ul>
      </div>
    </section>
  );
}
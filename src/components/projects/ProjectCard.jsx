// src/components/ProjectCard.jsx

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  liveUrl, 
  githubUrl, 
  image, 
  featured = false 
}) => {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between ${featured ? 'md:col-span-2' : ''}`}>
      <div>
        {image && (
          <div className="h-48 w-full overflow-hidden bg-slate-950 relative group">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-slate-100 tracking-tight">{title}</h3>
            {featured && (
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                En vedette
              </span>
            )}
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 flex items-center gap-4 mt-auto">
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Voir le site
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold rounded-lg transition-colors border border-slate-700"
          >
            Code Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
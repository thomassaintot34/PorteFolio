// src/pages/Projects.jsx
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const projectsList = [
    {
      id: 'portfolio',
      title: 'Mon Portfolio',
      description: 'Le site web sur lequel vous naviguez actuellement. Conçu pour présenter mon parcours de reconversion, mes compétences techniques en développement web et l\'ensemble de mes réalisations professionnelles et personnelles.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'HTML5'],
      liveUrl: 'https://thomassaintot34.github.io/PorteFolio/',
      githubUrl: 'https://github.com/ThomasSaintot34/PorteFolio',
      isEmpty: false,
    },
    {
      id: 'placeholder-1',
      title: 'placeholder',
      description: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      isEmpty: true,
    },
    {
      id: 'placeholder-2',
      title: 'placeholder',
      description: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      isEmpty: true,
    },
    {
      id: 'placeholder-3',
      title: 'placeholder',
      description: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      isEmpty: true,
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-3">
          Mes Projets
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-sm sm:text-base">
          Découvrez une sélection de mes réalisations techniques, de la conception front-end aux applications full-stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {projectsList.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            isEmpty={project.isEmpty}
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;
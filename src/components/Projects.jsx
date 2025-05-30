import images from "../constant/image";


const ProjectPage = () => {

    const projects = [
    {
      id: 1,
      title: "EasyFolio",
      image: images.easyfolio,
      technologies: ["HTML", "CSS"],
      liveUrl: "https://ahlamelasseli.github.io/ahlamelasseli_projet_final_css_html/",
      githubUrl: "https://github.com/ahlamelasseli/ahlamelasseli_projet_final_css_html.git"
    },
    {
      id: 2,
      title: "QuickStart",
      image: images.easyfolio,
      technologies: ["HTML", "CSS"],
      liveUrl: "https://elroumaissaa-aalam.github.io/QuickStart/",
      githubUrl: "https://github.com/Elroumaissaa-aalam/QuickStart"
    },
    {
      id: 3,
      title: "Restaurantly",
      image: images.restaurantly,
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      liveUrl: "https://ahlamelasseli.github.io/ahlamelasseli_finalproject_dom/",
      githubUrl: "https://github.com/ahlamelasseli/ahlamelasseli_finalproject_dom.git"
    },
  
    {
      id: 3,
      title: "Library",
      image: images.library,
      technologies: ["REACT", "TAILWIND CSS"],
      liveUrl: "https://book-api-ochre-delta.vercel.app/",
      githubUrl: "https://github.com/ahlamelasseli/ahlamelasseli_finalproject_dom.git"
    },
  ];

  return (
    <section id="portfolio" className="section bg-mediumGreen relative">
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-darkGreen rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
              <div 
                className="h-60 bg-top bg-cover  " 
                style={{backgroundImage: `url(${project.image || '/placeholder.jpg'})`}}
              ></div>
              
              <div className="p-6">
                <h3 className="text-copper mb-2 group-hover:text-beige transition-colors">{project.title}</h3>
                <p className="text-beige/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-mediumGreen text-copper rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="text-sm px-4 py-2 bg-copper text-beige rounded hover:bg-copper/80 transition-colors">View Project</a>
                  <a href={project.githubUrl} className="text-sm px-4 py-2 border border-copper text-copper rounded hover:bg-copper hover:text-beige transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="vertical-line  hidden sm:block">
        <div className="dot top-1/4"></div>
        <div className="dot top-1/2"></div>
        <div className="dot top-3/4"></div>
      </div>
    </section>
  );
}



export default ProjectPage;







const SkillsPage = () =>{
    const skills = [
    {
      id: 1,
      title: "Front-End",
      description: "HTML / CSS / Sass, JavaScript, React , Tailwind CSS / Bootstrap"
    },
{
      id: 4,
      icon: "",
      title: "Tools & Platforms",
      description: "Git & GitHub, VS Code, Deployment platforms, Package managers"
    },    
    {
      id: 6,
      icon: "",
      title: "Soft Skills",
      description: "Problem solving, Communication, Time management, Continuous learning"
    }
  ];

  return (
    <section id="skills" className="section bg-mediumGreen relative">
      <div className="container">
        <p className="section-label">Services</p>
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-darkGreen p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-copper/10 group">
              <div className="text-copper text-2xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-copper  mb-2 font-bold">{skill.title}</h3>
              <p className="text-beige/70 text-sm">{skill.description}</p>
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

export default SkillsPage





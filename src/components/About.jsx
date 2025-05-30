import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



const AboutPage = () => {
    const skills = [
        {
            name: 'HTML',
            color: 'text-[#E65100]',
            icon: <FaHtml5 size={40} />
        },
        {
            name: 'CSS',
            color: 'text-blue-400',
            icon: <FaCss3Alt size={40} />
        },
        {
            name: 'BOOTSTRAP',
            color: 'text-[#7E12F8]',
            icon: <FaBootstrap size={40} />
        },
        {
            name: 'GITHUB',
            color: 'text-white',
            icon:  <FaGithub size={40}/>
        },
        {
            name: 'SASS',
            color: 'text-[#CE6B9C]',
            icon: <FaSass size={40} />
        },
        {
            name: 'JAVASCRIPT',
            color: 'text-[#F7DF1E]',
            icon:<FaJs size={40} />
        },
        {
            name: 'GIT',
            color: 'text-[#F05539]',
            icon: <FaGitAlt size={40} />
        },
        {
            name: 'REACT',
            color: 'text-[#1DC0CD]',
            icon: <FaReact size={40} />
        },
        {
            name: 'TAILWIND CSS',
            color: 'text-[#1DC0CD]',
            icon:<RiTailwindCssFill size={40} />

        }
    ];
        return (
        <section id="about" className="section relative">
            <div className="container">
                <p className="section-label">About Me</p>
                <h2 className="section-title">Who I Am</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="mb-6 text-lightGray/90">
                            I'm Ahlam Elassali, a 19-year-old full stack developer who loves turning ideas into 
                            reality through code. I specialize in creating end-to-end web applications with clean 
                            architecture and great user experience. My journey into development started out of 
                            curiosity and quickly grew into a full-blown passion.
                        </p>

                        <p className="mb-6 text-lightGray/90">
                            <span className="text-red font-medium">What I Do</span><br />
                            From front-end interfaces to robust back-end systems, I handle every aspect of web 
                            development. I'm experienced with technologies like JavaScript, React, Node.js, Express, 
                            and MongoDB — and always eager to learn more.
                        </p>

                        <p className="mb-6 text-lightGray/90">
                            <span className="text-red font-medium">Outside of code</span><br />
                            When I'm not coding, I enjoy reading, exploring new tools, and contributing to open 
                            source communities.
                        </p>

                        <div className="mt-8">
                            <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3 className="text-2xl mb-6 text-lightGray">My Skills</h3>
                        
                        <div className="bg-navy/50 rounded-2xl p-6 border border-lightGray/10">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center justify-center p-3 rounded-xl border border-lightGray/20 hover:border-red/50 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-navy/30"
                                    >
                                        <div className={`${skill.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                            {skill.icon}
                                        </div>
                                        <span className="text-lightGray/80 text-xs font-medium text-center group-hover:text-copper transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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

export default AboutPage;

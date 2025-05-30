import images from "../constant/image";


const HeroSection = () => {

      return (
        <section className="min-h-screen flex lg:flex-row flex-col  items-center relative bg-mediumGreen overflow-hidden pt-20">
            <div className="container">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-beige">
                        Hi, I'm<br />
                        <span className="text-copper">Ahlam Elassali</span>
                    </h1>
                    <p className="text-lg mb-8 text-beige/80 max-w-lg">
                        I'm a 19-year-old Full Stack Developer with a passion for building modern, responsive,
                        and user-friendly web applications. I blend creativity with code to bring digital ideas to life.
                    </p>
                    <p className="text-lg mb-8 text-beige/80 max-w-lg">
                        Let's build something amazing.
                    </p>
                    <div className="flex gap-4">
                        <a href="#portfolio" className="btn btn-primary">Explore My Work</a>
                        <a href="#contact" className="btn btn-outline">Get in Touch</a>
                    </div>
                </div>
            </div>
            <div className="w-200 h-70 lg-pr-[5rem] p-10  ">
                <img
                    className="rounded-3xl border shadow-white/10 shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-1"
                    src={images.machyana}
                    alt=""
                />            </div>
            <div className="vertical-line hidden sm:block">
                <div className="dot top-1/4"></div>
                <div className="dot top-1/2"></div>
                <div className="dot top-3/4"></div>
            </div>
        </section>
    );
}


export default HeroSection;

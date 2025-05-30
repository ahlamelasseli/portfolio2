import { useRef } from "react";
import emailjs from '@emailjs/browser'
import { IconContext } from "react-icons";
import { BiWorld } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_986cf9c",        
            "template_gt8mmef",
            form.current,
            "T1bVEFV1mPTsc7g3C"   
        ).then(
            (result) => {
                console.log(result.text);
                alert("Message sent successfully! ✅");
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                alert("Failed to send message. ❌");
            }
        );
    };

        return (
        <section id="contact" className="section relative">
            <div className="container">
                <p className="section-label">Get In Touch</p>
                <h2 className="section-title">Let's Connect</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h3 className="text-2xl mb-6 text-beige">Contact Me</h3>
                        <p className="mb-8 text-beige/80">
                            Got a project in mind or want to collaborate? I'd love to hear from you!
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            <IconContext.Provider value={{ size: "1.5rem" }}>
                                <div className="flex flex-col justify-between gap-5 p-2 text-white">
                                    <a className="flex gap-2" href="https://github.com/ahlamelasseli">
                                        <FaGithub className="hover:text-[#413933] transition-colors duration-300" /> https://github.com/ahlamelasseli
                                    </a>
                                    <a className="flex gap-2" href="mailto:ahlamelasseli@gmail.com">
                                       <MdOutlineMailOutline className="hover:text-[#A27B5C] transition-colors duration-300" />
                                       ahlamelasseli@gmail.com
                                    </a>
                                    <a className="flex gap-2" href="https://www.linkedin.com/in/ahlam-elasseli-16717b353/">
                                        <FaLinkedin className="hover:text-[#A27B5C] transition-colors duration-300" />https://www.linkedin.com/in/ahlam-elasseli
                                    </a>
                                </div>
                            </IconContext.Provider>
                        </div>

                        <a href="#" className="btn btn-primary">Stay Connected</a>
                    </div>

                    <div className="contact-form">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="bg-darkGreen p-8 rounded-lg"
                        >
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-beige">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full p-3 bg-mediumGreen border-none rounded text-beige focus:outline-none focus:ring-2 focus:ring-copper"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-beige">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full p-3 bg-mediumGreen border-none rounded text-beige focus:outline-none focus:ring-2 focus:ring-copper"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block mb-2 text-beige">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full p-3 bg-mediumGreen border-none rounded text-beige focus:outline-none focus:ring-2 focus:ring-copper"
                                    placeholder="Subject"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-beige">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    className="w-full p-3 bg-mediumGreen border-none rounded text-beige resize-y focus:outline-none focus:ring-2 focus:ring-copper"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Send Message
                            </button>
                        </form>
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

export default ContactPage
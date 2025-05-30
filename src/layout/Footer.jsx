import { IconContext } from "react-icons";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import image from "../constant/image";

const Footer = () => {
  return(
        <footer className="bg-mediumGreen py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
                                <img src={image.logo} alt="" className='w-[6vw]' />
         
          
          <div className="flex gap-4">
                <IconContext.Provider value={{ size: "1.5rem" }}>
                    <div className='flex justify-between items-center gap-5 p-2 text-white'>
                        <a href="https://github.com/ahlamelasseli">    <FaGithub className='hover:text-[#A27B5C] transition-colors duration-300' /></a>
                        <a href="https://www.instagram.com/ahlamelasseli/"><FaInstagram className='hover:text-[#A27B5C] transition-colors duration-300' /></a>
                        <a href="https://www.facebook.com/share/1CYttCYopq/?mibextid=wwXIfr">

                        <FaFacebook className='hover:text-[#A27B5C] transition-colors duration-300' />
                        </a>
                        <a href="https://www.linkedin.com/in/ahlam-elasseli-16717b353/">

                        <FaLinkedin />
                        </a>
                    </div>
                </IconContext.Provider>
          </div>
        </div>
        
        <div className="border-t border-darkGreen/50 mt-8 pt-8 text-center text-beige/50 text-sm">
          <p>© {new Date().getFullYear()} AE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer






















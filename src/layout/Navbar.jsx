import { useState } from 'react';
import image from '../constant/image';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return(
       <header className="fixed top-0 left-0 right-0 py-4 z-50 bg-mediumGreen">
      <div className="container flex justify-between items-center">
        <img src={image.logo} alt="" className='w-[6vw]' />
        <nav className={`flex gap-8 md:static md:flex md:items-center ${isMenuOpen
            ? 'absolute top-16 left-0 w-full bg-mediumGreen flex-col p-8 gap-4'
            : 'hidden md:flex'
          }`}>
          <a href="#" className="relative text-beige hover:text-copper transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-copper before:transition-all before:duration-300 hover:before:w-full">Home</a>
          <a href="#about" className="relative text-beige hover:text-copper transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-copper before:transition-all before:duration-300 hover:before:w-full">About</a>
          <a href="#skills" className="relative text-beige hover:text-copper transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-copper before:transition-all before:duration-300 hover:before:w-full">Skills</a>
          <a href="#portfolio" className="relative text-beige hover:text-copper transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-copper before:transition-all before:duration-300 hover:before:w-full">Projects</a>
          <a href="#contact" className="relative text-beige hover:text-copper transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-copper before:transition-all before:duration-300 hover:before:w-full">Contact</a>
        </nav>

        <button
          className="md:hidden border  text-copper text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Nav



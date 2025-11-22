import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
     <p className="text-xl text-white">alasaneeth</p> 

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        {/* <li><a href="#projects">PROJECTS</a></li> */}
        <li><a href="#techncalSckills">TECKNICAL SKILLS</a></li>
        <li><a href="#softSkills">SOFT SKILLS</a></li>
        <li><a href="#certifications">CERTIFICATIONS</a></li>
        <li><a href="#services">SERVICES</a></li>
        {/* <li><a href="#testimonials">TESTIMONIALS</a></li> */}
        <li><a href="#contacts">CONTACTS</a></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-gray-900 md:hidden z-40">
          <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
            <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
            {/* <li><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li> */}
            <li><a href="#techncalSckills"  onClick={toggleMenu}>TECKNICAL SKILLS</a></li>
            <li><a href="#softSkills"  onClick={toggleMenu}>SOFT SKILLS</a></li>
            <li><a href="#certifications"  onClick={toggleMenu}>CERTIFICATIONS</a></li>
            <li><a href="#services"  onClick={toggleMenu}>SERVICES</a></li>
            {/* <li><a href="#testimonials"  onClick={toggleMenu}>TESTIMONIALS</a></li> */}
            <li><a href="#contacts" onClick={toggleMenu}>CONTACTS</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

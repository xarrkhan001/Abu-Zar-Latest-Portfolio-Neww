
import { useState, useEffect } from 'react';
import { MenuIcon, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-[#003d8f] flex items-center gap-2"
        >
          <Briefcase className="text-[#003d8f]" />
          <span>Abuzar<span className="text-[#003d8f]">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-white to-blue-50 z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <a href="#home" className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Briefcase className="text-[#003d8f]" />
              <span>Abuzar<span className="text-[#003d8f]">.</span></span>
            </a>
            <button onClick={toggleMenu} className="focus:outline-none text-[#003d8f]">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium hover:text-[#003d8f] transition-all transform hover:-translate-y-1 duration-200 flex items-center"
                onClick={toggleMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="w-6 h-0.5 bg-[#003d8f] mr-3 opacity-70"></span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

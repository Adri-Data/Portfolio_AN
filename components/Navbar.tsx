
import React, { useEffect, useState } from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 inset-x-4 z-50
        transition-all duration-500 ease-out
        apple-glass
        apple-glass-top ${scrolled ? 'shadow-lg' : ''}
        px-8 py-4
        flex justify-between items-center
      `}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center space-x-3 group">
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-google-blue group-hover:scale-125 transition-transform" />
          <div className="w-3 h-3 rounded-full bg-google-red group-hover:scale-125 transition-transform delay-75" />
          <div className="w-3 h-3 rounded-full bg-google-yellow group-hover:scale-125 transition-transform delay-150" />
          <div className="w-3 h-3 rounded-full bg-google-green group-hover:scale-125 transition-transform delay-200" />
        </div>
        <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white transition-colors">
          Adrián Navarro
        </span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-8">
        {[
          { name: 'About', href: '#about' },
          { name: 'Projects', href: '#projects' },
          { name: 'Path', href: '#experience' },
          { name: 'Contact', href: '#contact' }
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-700 dark:text-white/80 font-bold hover:text-google-blue dark:hover:text-white transition-colors uppercase tracking-widest text-xs"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center space-x-1"
        >
          <Languages size={18} className="text-gray-900 dark:text-white" />
          <span className="text-xs font-black uppercase text-gray-900 dark:text-white">
            {language}
          </span>
        </button>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          {darkMode ? (
            <Sun size={20} className="text-white" />
          ) : (
            <Moon size={20} className="text-gray-900" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

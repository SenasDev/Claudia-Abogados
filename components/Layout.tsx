import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage, useTheme } from '../contexts';
import { CONTENT } from '../constants';
import { Language } from '../types';
import { Menu, X, Sun, Moon, Globe, Scale } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const t = CONTENT[language];

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-surface-dark/80 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-700 p-1.5 rounded-lg text-white group-hover:bg-primary-800 transition-colors">
               <Scale size={24} />
            </div>
            <span className="text-xl font-bold font-serif tracking-tight text-primary-900 dark:text-primary-100">
              LexImmobiliaria
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary-700 dark:hover:text-primary-400 ${
                    isActive ? 'text-primary-700 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Utilities */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === Language.ES ? Language.EN : Language.ES)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              aria-label="Switch Language"
            >
              <Globe size={18} />
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-surface-paper border-b border-slate-200 dark:border-slate-800 shadow-lg animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 ${
                      isActive ? 'text-primary-700 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                <button
                  onClick={() => setLanguage(language === Language.ES ? Language.EN : Language.ES)}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                >
                  <Globe size={20} />
                  {language === Language.ES ? 'Español' : 'English'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 text-white">
              <Scale size={24} />
              <span className="text-xl font-bold font-serif">LexImmobiliaria</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed">
              {t.meta.description}
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                 <Link to="/services" className="hover:text-primary-400 transition-colors">{t.services.list[0].title}</Link>
              </li>
              <li>
                 <Link to="/services" className="hover:text-primary-400 transition-colors">{t.services.list[1].title}</Link>
              </li>
              <li>
                 <Link to="/services" className="hover:text-primary-400 transition-colors">{t.services.list[2].title}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t.nav.contact}</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Paseo de la Castellana, 100</p>
              <p>28046 Madrid, España</p>
              <p>+34 912 345 678</p>
              <p>info@leximmobiliaria.es</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} LexImmobiliaria. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

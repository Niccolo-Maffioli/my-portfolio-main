import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex justify-between items-center py-6 textshadow600">
      <NavLink to="/" className="text-green-600 text-xl font-bold hover:text-green-50">NICO$</NavLink>
      <div className="block md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6 fill-current text-green-600 transform transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <ul className={`md:flex items-center ${menuOpen ? "block" : "hidden"}`}>
        <li className="pr-6">
          <NavLink to="/about" className="text-green-600 hover:text-green-50 textshadow50hover">{t('nav.about')}</NavLink>
        </li>
        <li className="pr-6">
          <NavLink to="/works" className="text-green-600 hover:text-green-50 textshadow50hover">{t('nav.works')}</NavLink>
        </li>
        <li className="pr-6">
          <NavLink to="/casestudies" className="text-green-600 hover:text-green-50 textshadow50hover">{t('nav.caseStudies')}</NavLink>
        </li>
        <li className="pr-6">
          <NavLink to="/contact" className="text-green-600 hover:text-green-50 textshadow50hover">{t('nav.contact')}</NavLink>
        </li>
        <li>
          <button onClick={() => changeLanguage(i18n.language === 'en' ? 'it' : 'en')} className="text-green-600 hover:text-green-50 textshadow50hover">
            {i18n.language === 'en' ? 'IT' : 'EN'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

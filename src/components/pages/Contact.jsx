import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full h-5/6 justify-center items-center flex flex-col">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-green-50 text-3xl text-bold mb-10">{t('contact.question')}</h3>
        <h4 className="text-green-600 font-bold text-3xl">{t('contact.service')}</h4>
      </div>
      <div className="social flex w-full h-4/6 justify-center items-center">
      <div className="w-[200px] h-7 mx-10">
        <span className="w-full h-full flex flex-col justify-center items-center">
          <a href="https://www.linkedin.com/in/niccol%C3%B2maffioli/"><FontAwesomeIcon icon={faLinkedin} className="text-green-600 w-7 h-7 hover:text-green-50"/></a>
          <span className="text-green-50 my-2 font-bold">LinkedIn</span>
          <span className="text-green-50 underline hover:text-green-600">{t('contact.linkedin')}</span>
        </span>
      </div>
      <div className="w-[200px] h-7 mx-10">
        <span className="w-full h-full flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faPhone} className="text-green-600 w-full h-full"/>
          <span className="text-green-50 my-2 font-bold">{t('contact.phone')}</span>
          <span className="text-green-50">+39 3348691322</span>
        </span>
      </div>
      <div className="w-[200px] h-7 mx-10">
        <span className="w-full h-full flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-green-600 w-full h-full"/>
          <span className="text-green-50 my-2 font-bold">Email</span>
          <span className="text-green-50">nico.maffioli@gmail.com</span>
        </span>
      </div>
      <div className="w-[200px] h-7 mx-10">
        <span className="w-full h-full flex flex-col justify-center items-center">
          <a href="https://nicportfolio.netlify.app/"><FontAwesomeIcon icon={faGlobe} className="text-green-600 h-7 w-7 hover:text-green-50"/></a>
          <span className="text-green-50 my-2 font-bold">{t('contact.site')}</span>
          <span className="text-green-50 underline hover:text-green-600">NicoPortfolio</span>
        </span>
      </div>
    </div>
    </div>
  )
};

export default Contact;
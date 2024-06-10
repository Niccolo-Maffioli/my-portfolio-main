// Pagina About
import React from "react";
import Skills from "../Skills";
import Info from "../Info";
import Education from "../Education";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-green-600 mb-8">[{t('about.title')}]</h1>
      <h4 className="text-2xl font-bold text-green-600 mb-8">{t('about.presentation')}<span className="text-green-800">Web Developer</span></h4>
      <p className="text-lg text-green-50 mb-8">
        {t('about.firstp')}
        <br />
        <br />
        {t('about.secondp')}
        <br />
        <br />
        {t('about.thirthp')}
        <br />
        <br />
        {t('about.fourthp')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Info info={t('about.info.title.birthday')} details={t('about.info.birthday')} />
              <Info info={t('about.info.title.site')} details="nicolab.netlify.app" />
              <Info info={t('about.info.title.country')} details={t('about.info.country')} />
              <Info info={t('about.info.title.city')} details={t('about.info.city')} />
            </div>
            <div>
              <Info info={t('about.info.title.age')} details="23" />
              <Info info="Email" details="nico.maffioli@gmail.com" />
              <Info info={t('about.info.title.phone')} details="+39 334 869 1322" />
              <Info info="Freelance" details={t('about.info.freelance')} />
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-8">
            <Skills skill="Javascript" percent="70%" />
            <Skills skill="HTML" percent="90%" />
            <Skills skill="CSS" percent="90%" />
            <Skills skill="React" percent="30%" />
            <Skills skill="Figma" percent="80%" />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Education />
      </div>
    </div>
  );
};


export default About;
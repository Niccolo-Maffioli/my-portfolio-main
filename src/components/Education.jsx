// Componente Education
import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        <div>
            <h3 className="text-xl font-bold text-green-600 mb-3">{t('about.education.education')}</h3>
            <div className="grid grid-cols-1 gap-6  border border-green-600 rounded-lg">
              <div className="p-4">
                <p className="font-bold text-green-600">2020 - 2022</p>
                <p className="text-green-50">{t('about.education.first.type')}</p>
                <p className="text-green-50">{t('about.education.first.description')}</p>
                <p className="text-green-50">{t('about.education.first.grade')}</p>
              </div>
              <div className="p-4">
                <p className="font-bold text-green-600">2020 - 2022</p>
                <p className="text-green-50">{t('about.education.second.type')}</p>
                <p className="text-green-50">{t('about.education.second.description')}</p>
                <p className="text-green-50">{t('about.education.second.grade')}</p>
              </div>
              <div className="p-4">
                <p className="font-bold text-green-600">2022 - 2024</p>
                <p className="text-green-50">{t('about.education.thirth.type')}</p>
                <p className="text-green-50">{t('about.education.thirth.description')}</p>
              </div>
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold text-green-600 mb-3">{t('about.experience.experience')}</h3>
            <div className="grid grid-cols-1 gap-6  border border-green-600 rounded-lg">
              <div className="p-4">
                <p className="font-bold text-green-600">--</p>
                {/* <p className="text-green-50">Certificate in Web Design</p>
                <p className="text-green-50">Lorem ipsum</p>
                <p className="text-green-50">Grade: 25</p> */}
              </div>
              {/* <div className="p-4">
                <p className="font-bold text-green-600">2022 - 2024</p>
                <p className="text-green-50">Certificate in Graphic Design</p>
                <p className="text-green-50">Lorem ipsum</p>
                <p className="text-green-50">Grade: 25</p>
              </div> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
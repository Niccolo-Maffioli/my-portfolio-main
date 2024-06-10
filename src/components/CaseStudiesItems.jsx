import React from 'react';
import CaseStudiesItem from './CaseStudiesItem';
import imgcs from '../img/1.jpg';
import { useTranslation } from 'react-i18next';

const CaseStudiesItems = () => {
  const { t } = useTranslation();

  const csi = [
    { id: '1', title: t('cs.cs1.title'), description: t('cs.cs1.description'), images: [imgcs], longdescription: t('cs.cs1.longdescription'), tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },
    { id: '2', title: t('cs.cs2.title'), description: t('cs.cs2.description'), images: ['src/img/3.jpg', '../img/4.jpg'], longdescription: 'Lorem Ipsum SIt Amet Consecteur dolor inner fate Dolor matte', tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },
  ];

  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-8">{t('cs.cs')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {csi.map((cs, index) => (
          <CaseStudiesItem key={index} id={cs.id} title={cs.title} description={cs.description} images={cs.images} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesItems;
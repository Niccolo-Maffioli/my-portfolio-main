import React from 'react';
import WorkItem from './WorkItem';
import imgWork1 from '../img/1.jpg';
import { useTranslation } from 'react-i18next';

const WorkItems = () => {

  const { t } = useTranslation();
  // Esempio di dati fittizi per i lavori
  const works = [
    { title: t('works.work1.title'), description: t('works.work1.description'), images: [imgWork1], longdescription: t('works.work1.longdescription'), tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },

    { title: t('works.work2.title'), description: t('works.work2.description'), images: ['src/img/3.jpg', '../img/4.jpg'], longdescription: 'Lorem Ipsum SIt Amet Consecteur dolor inner fate Dolor matte', tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },

    { title: t('works.work3.title'), description: t('works.work3.description'), images: ['../img/5.jpg', '../img/6.jpg'], longdescription: 'Lorem Ipsum SIt Amet Consecteur dolor inner fate Dolor matte', tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },
  ];

  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-8">{t('works.work')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <WorkItem key={index} title={work.title} description={work.description} images={work.images} longdescription={work.longdescription} tools={work.tools} participants={work.participants}/>
        ))}
      </div>
    </div>
  );
}

export default WorkItems;
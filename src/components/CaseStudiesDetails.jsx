import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgcs from '../img/1.jpg';
/* import imgWork1 from '../img/1.jpg'; */ // Assicurati di importare tutte le immagini necessarie

const CaseStudiesDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // Dati fittizi, dovresti caricare i dati reali basandoti sull'ID
  const csi = [
    { id: '1', title: t('cs.work1.title'), description: t('works.work1.description'),images: [imgcs], longdescription: t('works.work1.longdescription'), tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },
    { id: '2', title: t('works.work2.title'), description: t('works.work2.description'), images: ['src/img/3.jpg', '../img/4.jpg'], longdescription: 'Lorem Ipsum SIt Amet Consecteur dolor inner fate Dolor matte', tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },
    { id: '3', title: t('works.work3.title'), description: t('works.work3.description'), images: ['../img/5.jpg', '../img/6.jpg'], longdescription: 'Lorem Ipsum SIt Amet Consecteur dolor inner fate Dolor matte', tools: ['Figma', 'Illustrator'], participants: ['Matteo', 'Giacomo', 'Letizia'] },
  ];

  const casestudy = csi.find(casestudy => casestudy.id === id);

  if (!casestudy) {
    return <div>{t('casestudies.notfound')}</div>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-green-600 mb-2">{casestudy.title}</h3>
      {casestudy.images.map((image, index) => (
        <img key={index} src={image} alt={casestudy.title} className="w-full mb-4" />
      ))}
      <p className="text-green-800">{casestudy.longdescription}</p>
      <div>
        <h5 className="text-xl font-bold text-green-600">{t('casestudies.collaborators')}</h5>
        {casestudy.participants.map((participant, index) => (
          <p key={index}>{participant}</p>
        ))}
      </div>
      <div>
        <h5 className="text-xl font-bold text-green-600">{t('casestudies.tools')}</h5>
        {casestudy.tools.map((tool, index) => (
          <p key={index}>{tool}</p>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesDetail;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WorkItem = ({ title, description, images, longdescription, participants, tools }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleModalOpen = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="p-4 border-green-600 border rounded-md mb-4 transition duration-300 hover:bg-green-200 w-full" onClick={() => handleModalOpen(0)}>
        <h3 className="text-xl font-bold text-green-600 mb-2">{title}</h3>
        {images.map((image, index) => (
              <img key={index} src={image} alt={title} className={index === currentImageIndex ? '' : 'hidden'} />
            ))}
        <p className="text-green-800">{description}</p>
      </div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content bg-green-50">
            <button className="close-btn text-green-50" onClick={handleModalClose}>{t('works.closebutton')}</button>
            <h3 className="text-xl font-bold text-green-600 mb-2">{title}</h3>
            <div className="flex">
              {images.map((image, index) => (
                <img key={index} src={image} alt={title} className={index === currentImageIndex ? 'w-96' : 'hidden'} />
              ))}
              
              <div className="mx-5 flex">
                <div className="flex flex-col">
                  <div className="">
                    <h3 className='text-xl font-bold text-green-600'>{t('works.collaborators')}</h3>
                    <p className=''>{participants[0]}</p>
                    <p className=''>{participants[1]}</p>
                    <p className=''>{participants[2]}</p>
                  </div>
                  <span className='w-full h-[2px] mt-5 bg-green-600'></span>
                  <div className='mt-5'>
                    <h5 className='text-xl font-bold text-green-600'>{t('works.tools')}</h5>
                    <p className=''>{tools[0]}</p>
                    <p className=''>{tools[1]}</p>
                  </div>
                </div>
                <span className='w-[2px] h-full ml-5 bg-green-600'></span>
                <div className='ml-5'>
                  <h3 className="text-xl font-bold text-green-600 mb-2">{t('works.description')}</h3>
                  <p className="text-green-800">{longdescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkItem;
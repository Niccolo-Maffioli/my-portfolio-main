import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CaseStudiesItem = ({ id, title, description, images }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate(`/casestudy/${id}`);
  };

  return (
    <div className="p-4 border-green-600 border rounded-md mb-4 transition duration-300 hover:bg-green-200 w-full" onClick={handleNavigate}>
      <h3 className="text-xl font-bold text-green-600 mb-2">{title}</h3>
      <img src={images[0]} alt={title} />
      <p className="text-green-800">{description}</p>
    </div>
  );
};

export default CaseStudiesItem;

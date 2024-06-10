// Componente Info
import React from 'react';

const Info = ({ info, details }) => {
  return (
    <div className="mb-3">
      <p className="text-green-600 font-bold">{info}:</p>
      <p className="text-green-50">{details}</p>
    </div>
  );
}

export default Info;
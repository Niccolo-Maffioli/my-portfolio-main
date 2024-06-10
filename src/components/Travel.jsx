import React from 'react';

const Travel = ({ date, education, description, grade }) => {
  return (
    <div className="mb-6">
      <p className="text-green-600 font-bold">[Date]: {date}</p>
      <p className="text-green-600 font-bold">[Title]: {education}</p>
      <p className="text-green-600 font-bold">[Description]: {description}</p>
      <p className="text-green-600 font-bold">[Grade]: {grade}</p>
    </div>
  );
}

export default Travel;
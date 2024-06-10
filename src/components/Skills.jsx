import React from 'react';

const Skills = ({ skill, percent }) => {
  const percentageWidth = `${percent}`;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-green-600 mb-3">{skill}</h3>
      <div className="flex items-center">
        <div className="w-24 mr-3 text-green-600 font-bold">{percent}</div>
        <div className="flex-1 bg-green-50 h-2 rounded-full">
          <div className="bg-green-600 h-full rounded-full" style={{ width: percentageWidth }}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;


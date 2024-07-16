import React from 'react';
import TechnologyItem from './TechnologyItem';

const TechnologyList = ({ technologies, editTechnology, removeTechnology }) => {
  return (
    <ul>
      {technologies.map((tech, index) => (
        <TechnologyItem
          key={index}
          tech={tech}
          index={index}
          editTechnology={editTechnology}
          removeTechnology={removeTechnology}
        />
      ))}
    </ul>
  );
};

export default TechnologyList;

import React, { useState } from 'react';

const TechnologyItem = ({ tech, index, editTechnology, removeTechnology }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTech, setNewTech] = useState(tech);

  const handleEdit = () => {
    if (isEditing) {
      editTechnology(index, newTech);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />
      ) : (
        <span>{tech}</span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Salvar' : 'Editar'}
      </button>
      <button onClick={() => removeTechnology(index)}>Remover</button>
    </li>
  );
};

export default TechnologyItem;

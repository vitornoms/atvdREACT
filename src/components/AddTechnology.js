import React, { useState } from 'react';

const AddTechnology = ({ addTechnology }) => {
  const [tech, setTech] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tech) {
      addTechnology(tech);
      setTech('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
        placeholder="Adicionar nova tecnologia"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTechnology;

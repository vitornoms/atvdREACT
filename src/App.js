import React, { useState } from 'react';
import AddTechnology from './components/AddTechnology';
import TechnologyList from './components/TechnologyList';
import './App.css';

const App = () => {
  const [technologies, setTechnologies] = useState([]);

  const addTechnology = (tech) => {
    setTechnologies([...technologies, tech]);
  };

  const editTechnology = (index, newTech) => {
    const newTechnologies = [...technologies];
    newTechnologies[index] = newTech;
    setTechnologies(newTechnologies);
  };

  const removeTechnology = (index) => {
    const newTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(newTechnologies);
  };

  return (
    <div className="App">
      <h1>Lista de Tecnologias para Aprender</h1>
      <AddTechnology addTechnology={addTechnology} />
      <TechnologyList
        technologies={technologies}
        editTechnology={editTechnology}
        removeTechnology={removeTechnology}
      />
    </div>
  );
};

export default App;
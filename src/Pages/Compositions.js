// Compositions.js
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CompositionsContext } from './CreateComposition'

//Fix the display
const Compositions = () => {
  const compositions = useContext(CompositionsContext);
  return (
    <CompositionsContext.Provider value = {compositions}>
       <Link to = '/' className = 'btn'><h1>Home</h1></Link>
       <p></p>
      <h2>List of Compositions</h2>
      <ul>
        {compositions.map((composition, index) => (
          <li key={index}>{composition}</li>
        ))}
      </ul>
    </CompositionsContext.Provider>
  );
};

export default Compositions;


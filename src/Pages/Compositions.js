// Compositions.js
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CompositionsContext } from './CreateComposition'

//Fix the display
const Compositions = () => {
  const compositions = useContext(CompositionsContext);
  return (
    <div>
       <Link to = '/createcomposition' className = 'btn'><h1>Create Compositions</h1></Link>
       <p></p>
      <h2>List of Compositions</h2>
      <ul>
        {compositions.map((composition, index) => (
          <li key={index}>{composition}</li>
        ))}
      </ul>
    </div>
  );
}

export default Compositions;


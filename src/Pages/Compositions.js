// Compositions.js
import React, {useContext} from 'react';
import { CompositionsContext } from './CreateComposition'

//Fix the display
const Compositions = () => {
  const compositions = useContext(CompositionsContext);
  return (
    <div>

       <p></p>
        <h2>List of Compositions</h2>
        <ul>
          {compositions.map((composition, index) => (
           <li key={index}>{composition}</li>
          ))}
        </ul>
    </div>
  );
};

export default Compositions;


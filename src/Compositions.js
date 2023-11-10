// Compositions.js
import React, {useContext} from 'react';
import { CompositionsContext } from './CreateComposition'

//Fix the display
function Compositions() {
  const compositions = useContext(CompositionsContext);
  return (
    <div>
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


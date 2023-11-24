// Compositions.js
import React, {useContext} from 'react';
import { CompositionsContext } from './CreateComposition'

//Fix the display
const Compositions = () => {
  const compositions = useContext(CompositionsContext);

  return (
    <>
        <h2>List of Compositions</h2>
        <h2>{compositions.length}</h2>
        <ul>
          {compositions.map((composition, index) => (
          <>
            <li key={index}>{composition} &nbsp; </li>
           </>
          ))}
        </ul>
    </>
  );
};

export default Compositions;


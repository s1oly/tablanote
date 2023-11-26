// Compositions.js
import React from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';

//Fix the display
const Compositions = () => {
  const {compositions} = useCompositions();

  const deleteComposition = (indexValue) => {
    compositions.filter((_,index) => index !== indexValue)
  }

  return (
    <>
        <h2>List of Compositions</h2>
        <h2>{compositions.length}</h2>
        <ul>
          {compositions.map((composition, index) => (
          <>
            <li key={index}>{composition} &nbsp; <button onClick = {deleteComposition(index)}> Delete Composition</button> </li>
           </>
          ))}
        </ul>
    </>
  );
};

export default Compositions;


// Compositions.js
import React from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';
import pdf1 from '/Users/s1oly/Desktop/tablanote/src/PDFs/First_PDF.pdf'

//Fix the display
const Compositions = () => {
  const {compositions, deleteComposition} = useCompositions();

  return (
    <>
        <h2>List of Compositions</h2>
        <h2>{compositions.length}</h2>
        <ul>
          {compositions.map((composition, index) => (
          <>
            <li key={index}>{composition} &nbsp; 
              <button onClick = {() => deleteComposition(index)}> Delete Composition</button> 
              <p>
                <a href= {pdf1} target = "_blank" rel="nonrefferer"> Link To Composition</a>
              </p>
            </li>
           </>
          ))}
        </ul>
    </>
  );
};

export default Compositions;


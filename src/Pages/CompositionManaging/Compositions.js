// Compositions.js
import React from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';
import TeentaalPDF from '/Users/s1oly/Desktop/tablanote/src/PDFs/TeentaalE.pdf'
import JhaptaalPDF from '/Users/s1oly/Desktop/tablanote/src/PDFs/JhaptaalE.pdf'

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
                <a href= {composition.includes('Teentaal') ? TeentaalPDF : JhaptaalPDF} target = "_blank" rel="noreferrer"> Link To Composition</a>
              </p>
            </li>
           </>
          ))}
        </ul>
    </>
  );
};

export default Compositions;


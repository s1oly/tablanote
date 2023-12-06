// Compositions.js
import React from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';
import TeentaalPDF from '../../PDFs/TeentaalE.pdf'
import JhaptaalPDF from '../../PDFs/JhaptaalE.pdf'
import EktaalPDF from '../../PDFs/EktaalE.pdf'
import RupakPDF from '../../PDFs/RupakE.pdf'

const requireAll = (requireContext) => requireContext.keys().map(requireContext);

const pdfFiles = requireAll(
  require.context('../../SavedPDFs/', false, /\.pdf$/)
);

//Add Ektaal, Rupak, and other taals when there is time
const getPDFLink = (composition) => {
  const matchingPDF = pdfFiles.find((file) => file.includes(composition));
  if (matchingPDF) {
    return matchingPDF;
  } else if (composition.includes('Teentaal')) {
    return TeentaalPDF;
  } else if (composition.includes('Jhaptaal')) {
    return JhaptaalPDF;
  } else if(composition.includes('Ektaal')){
    return EktaalPDF;
  }else if(composition.includes('Rupak')){
    return RupakPDF;
  }else {
    return null; // Return null or a default PDF for unmatched compositions
  }
};

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
                <a href= {getPDFLink(composition)} target = "_blank" rel="noreferrer"> Link To Composition</a>
              </p>
            </li>
           </>
          ))}
        </ul>
    </>
  );
};

export default Compositions;


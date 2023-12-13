// Compositions.js
import React, { useEffect, useState } from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';
import TeentaalPDF from '../../PDFs/TeentaalE.pdf';
import JhaptaalPDF from '../../PDFs/JhaptaalE.pdf';
import EktaalPDF from '../../PDFs/EktaalE.pdf';
import RupakPDF from '../../PDFs/RupakE.pdf';
import { storage } from '../../Config/firebaseConfig';
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';

const Compositions = () => {
  const { compositions, deleteComposition } = useCompositions();
  const [pdfLinks, setPdfLinks] = useState({});

  useEffect(() => {
    const fetchPDFLinks = async () => {
      const links = {};
      for (const composition of compositions) {
        const downloadURL = await getPDFDownloadURLFromStorage(composition);
        links[composition] = downloadURL || getDefaultPDF(composition);
      }
      setPdfLinks(links);
    };

    fetchPDFLinks();
  }, [compositions]);

  const getPDFDownloadURLFromStorage = async (composition) => {
    const storageRef = ref(storage, `pdfs/${composition}.pdf`);
    try {
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error getting PDF download URL from Storage: ', error);
      return null;
    }
  };

  const getDefaultPDF = (composition) => {
    if (composition.includes('Teentaal')) {
      return TeentaalPDF;
    } else if (composition.includes('Jhaptaal')) {
      return JhaptaalPDF;
    } else if (composition.includes('Ektaal')) {
      return EktaalPDF;
    } else if (composition.includes('Rupak')) {
      return RupakPDF;
    } else {
      return null; // Return null or a default PDF for unmatched compositions
    }
  };

  const onSubmitComposition = async (newCompositionName, newPDFLink) => {
    try {
      // Assuming newPDFLink is a file reference or URL to the PDF file
      const storageRef = ref(storage, `pdfs/${newCompositionName}.pdf`);
      const fileSnapshot = await fetch(newPDFLink).then((res) => res.blob());
      await uploadBytes(storageRef, fileSnapshot); // Uploading file to Firebase Storage

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <h2>List of Compositions</h2>
      <h2>{compositions.length}</h2>
      <ul>
        {compositions.map((composition, index) => (
          <li key={index}>
            {composition} &nbsp;
            <button onClick={() => deleteComposition(index)}>Delete Composition</button>
            <button onClick={() => onSubmitComposition(composition, pdfLinks[composition])}>
              Store Composition
            </button>
            <p>
              <a href={pdfLinks[composition]} target="_blank" rel="noreferrer">
                Link To Composition
              </a>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Compositions;

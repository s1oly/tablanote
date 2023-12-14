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
  const {compositions, deleteComposition} = useCompositions();
  const [pdfLinks, setPdfLinks] = useState({});
  const [fileUpload, setFileUpload] = useState(null);

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
      console.error(error);
      return null
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

  const onSubmitComposition = async (newCompositionName) => {
    if(!fileUpload) return;
    const storageRef = ref(storage, `pdfs/${newCompositionName}.pdf`);
    try {
      await uploadBytes(storageRef, fileUpload); // Uploading file to Firebase Storage

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
            <a href={pdfLinks[composition]} target="_blank" rel="noreferrer">{composition} </a> &nbsp;
            <button onClick={() => deleteComposition(index)}>Delete Composition</button>
            <p>
              <input type = "file" onChange={(e) => setFileUpload(e.target.files[0])}/>
              <button onClick={() => onSubmitComposition(composition)}>
                Store Composition
              </button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Compositions;

// Compositions.js
import React, {useEffect, useState} from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';
import TeentaalPDF from '../../PDFs/TeentaalE.pdf'
import JhaptaalPDF from '../../PDFs/JhaptaalE.pdf'
import EktaalPDF from '../../PDFs/EktaalE.pdf'
import RupakPDF from '../../PDFs/RupakE.pdf'
import {db} from '../../Config/firebaseConfig'


// const addPDFMetaData = async (composition, downloadURL) => {
//   try {
//     await db.collection('PDFs').add({
//       composition: composition, 
//       downloadURL : downloadURL,

//     });
//   }catch (error){
//     console.error(error)
//   }
// }

// const requireAll = (requireContext) => requireContext.keys().map(requireContext);

// const pdfFiles = requireAll(
//   require.context('../../SavedPDFs/', false, /\.pdf$/)
// );

// //Add Ektaal, Rupak, and other taals when there is time
// const getPDFLink = (composition) => {
//   const matchingPDF = pdfFiles.find((file) => file.includes(composition));
//   if (matchingPDF) {
//     return matchingPDF;
//   } else if (composition.includes('Teentaal')) {
//     return TeentaalPDF;
//   } else if (composition.includes('Jhaptaal')) {
//     return JhaptaalPDF;
//   } else if(composition.includes('Ektaal')){
//     return EktaalPDF;
//   }else if(composition.includes('Rupak')){
//     return RupakPDF;
//   }else {
//     return null; // Return null or a default PDF for unmatched compositions
//   }
// };

//Fix the display
const Compositions = () => {
  const { compositions, deleteComposition } = useCompositions();
  const [pdfLinks, setPdfLinks] = useState({});

  useEffect(() => {
    // Function to retrieve download URLs from Firestore based on composition names
    const getPDFDownloadURLFromFirestore = async (composition) => {
      try {
        const querySnapshot = await db
          .collection('pdfMetadata')
          .where('composition', '==', composition)
          .get();

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]; // Assuming composition names are unique
          return doc.data().downloadURL;
        } else {
          return null; // Composition not found in metadata
        }
      } catch (error) {
        console.error('Error getting PDF download URL from Firestore: ', error);
        return null;
      }
    };

    // Fetch PDF download URLs for each composition and store them in state
    const fetchPDFLinks = async () => {
      const links = {};
      for (const composition of compositions) {
        const downloadURL = await getPDFDownloadURLFromFirestore(composition);
        links[composition] = downloadURL || getDefaultPDF(composition);
      }
      setPdfLinks(links);
    };

    fetchPDFLinks();
  }, [compositions]);

  // Function to get default PDF based on composition name
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

  return (
    <>
      <h2>List of Compositions</h2>
      <h2>{compositions.length}</h2>
      <ul>
        {compositions.map((composition, index) => (
          <li key={index}>
            {composition} &nbsp;
            <button onClick={() => deleteComposition(index)}>Delete Composition</button>
            <p>
              <a href={pdfLinks[composition]} target="_blank" rel="noreferrer">Link To Composition</a>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Compositions;


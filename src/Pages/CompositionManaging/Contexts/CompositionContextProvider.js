import {createContext, useContext, useState, useEffect} from 'react';
import { storage } from '../../../Config/firebaseConfig';
import {ref, deleteObject} from 'firebase/storage'

 const CompositionsContext = createContext(['There are no Compositions']);

 const useCompositions = () => useContext(CompositionsContext);

 const CompositionContextProvider = ({children}) => {
    const[compositions, setCompositions] = useState([]);

    useEffect(() => {
        const storedState = localStorage.getItem('compositions');
        if (storedState) {
          setCompositions(JSON.parse(storedState));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('compositions', JSON.stringify(compositions));
      }, [compositions]);

    const addNewComposition = (newComposition) => {
        setCompositions(compositions => compositions.concat(newComposition));
    }

    const deleteComposition = (indexValue) => {
        setCompositions(compositions => compositions.filter((_,index) => index !== indexValue))
        const storageRef = ref(storage, `pdfs/${compositions[indexValue ]}.pdf`)
        deleteObject(storageRef);
    }


    return (
        <CompositionsContext.Provider value={{addNewComposition, compositions, deleteComposition}}>
            {children}
        </CompositionsContext.Provider>
    )
 }

 export {useCompositions};
 export default CompositionContextProvider;
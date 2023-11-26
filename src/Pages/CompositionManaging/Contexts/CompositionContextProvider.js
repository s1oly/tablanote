import {createContext, useContext, useState} from 'react';

 const CompositionsContext = createContext(['There are no Compositions']);

 const useCompositions = () => useContext(CompositionsContext);

 const CompositionContextProvider = ({children}) => {
    const[compositions, setCompositions] = useState([]);

    const addNewComposition = (newComposition) => {
        setCompositions(compositions => compositions.concat(newComposition));
    }

    const deleteComposition = (indexValue) => {
        setCompositions(compositions => compositions.filter((_,index) => index !== indexValue   ))
    }


    return (
        <CompositionsContext.Provider value={{addNewComposition, compositions, deleteComposition}}>
            {children}
        </CompositionsContext.Provider>
    )
 }

 export {useCompositions};
 export default CompositionContextProvider;
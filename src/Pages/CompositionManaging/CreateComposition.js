import React, { useState, createContext } from 'react';


const CompositionsContext = createContext([' No Compositions Currently']);

const CreateComposition = () =>{
    const [taal, setTaal] = useState('');
    const [bpm, setBpm] = useState('');
    const [name, setName] = useState('');
  
    const [compositions, setCompositions] = useState([]); 
  
    const sayKayeda = () => {
      alert(taal + " " + bpm + " " + name);
    }
  
    const changeTaal = (event) => {
      setTaal(event.target.value);
    }
  
    const changeBPM = (event) => {
      setBpm(event.target.value);
    }
  
    const changeName = (event) => {
      setName(event.target.value);
    }
  
    const addNewComposition = () => {
      const newComposition = `${taal} ${bpm} ${name}`;
      setCompositions(compositions => [...compositions, newComposition]);
      setTaal('');
      setBpm('');
      setName('');
      
    }

    return (
    <CompositionsContext.Provider value={compositions}>
        <h2>Input Kayeda Details Below</h2>
        <br></br>
        <br></br>
        <label> <b>Taal</b>&nbsp; 
            <input onChange={changeTaal} value={taal}></input>
        </label>
        <br></br>
        <label> <b>BPM</b>&nbsp; 
            <input onChange={changeBPM} value={bpm}></input>
        </label>
        <br></br>
        <label> <b>Name</b>&nbsp; 
            <input onChange={changeName} value={name}></input>
        </label>
        <p></p>
        <button onClick={sayKayeda}>Current Kayeda</button>
        &nbsp; 
        <button onClick={addNewComposition}>Add Composition</button>
        <br></br>
    </CompositionsContext.Provider>
    );
}


export {CompositionsContext};
export default CreateComposition;


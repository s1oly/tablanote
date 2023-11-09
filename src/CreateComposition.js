import React, { useState, createContext } from 'react';

export const CompositionsContext = createContext([]);

const CreateComposition = () =>{
    const [taal, setTaal] = useState('');
    const [bpm, setBpm] = useState('');
    const [name, setName] = useState('');
  
    const [compositions, setCompositions] = useState([]); // Store compositions in the App component
  
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
      setCompositions([...compositions, newComposition]); 
      setTaal('');
      setBpm('');
      setName('');
    }
    return (
    <CompositionsContext.Provider value={compositions}>
      <div>
        <h1>Input Kayeda Details Below</h1>
        <br></br>
        <label> Taal 
            <input onChange={changeTaal} value={taal}></input>
        </label>
        <br></br>
        <label> BPM
            <input onChange={changeBPM} value={bpm}></input>
        </label>
        <br></br>
        <label> Name
            <input onChange={changeName} value={name}></input>
        </label>
        <br></br>
        <button onClick={sayKayeda}>Current Kayeda</button>
        <button onClick={addNewComposition}>Add Composition</button>
      </div>
    </CompositionsContext.Provider>
    );
}

export default CreateComposition;


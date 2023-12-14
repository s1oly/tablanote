import React, { useState } from 'react';
import { useCompositions } from './Contexts/CompositionContextProvider';


const CreateComposition = () =>{
    const {addNewComposition} = useCompositions();
    const [taal, setTaal] = useState('');
    const [bpm, setBpm] = useState('');
    const [name, setName] = useState('');

    const options = [
      {label: "Teentaal", value: "Teentaal"},
      {label: "Jhaptaal", value: "Jhaptaal"},
      {label: "Ektaal", value: "Ektaal"},
      {label: "Rupak", value: "Rupak"}
    ]
  
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

  
    const addNewCompositionHandler = () => {
      const newComposition = `${taal}_${bpm}_${name}`;
      addNewComposition(newComposition)
      setTaal('');
      setBpm('');
      setName('');
      
    }


    return (
    <>
        <h2>Input Kayeda Details Below</h2>
        <br></br>
        <br></br>
        <label> <b>Taal</b>&nbsp; 
          {/* <input onChange={changeTaal} value={taal}></input> */}
          <select onChange = {changeTaal}>
            {options.map(option =>(
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <p></p>
        <label> <b>BPM</b>&nbsp; 
            <input onChange={changeBPM} value={bpm}></input>
        </label>
        <p></p>
        <label> <b>Name</b>&nbsp; 
            <input onChange={changeName} value={name}></input>
        </label>
        <p></p>
        <button onClick={sayKayeda}>Current Kayeda</button>
        &nbsp; 
        <button onClick={addNewCompositionHandler}>Add Composition</button>
        <p></p>
    </>
    );
}


export default CreateComposition;


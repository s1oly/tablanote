import './App.css';
import React, { useState } from 'react';
import {Router,Routes,Route,} from 'react-router-dom';
import Compositions from './Compositions'; // Import the Compositions component

const App = () => {
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
    setCompositions([...compositions, newComposition]); // Update compositions in App component
    setTaal('');
    setBpm('');
    setName('');
  }

  return (
    <Router>
    <div className="App">
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
      <Routes>
          <Route path="/" element={<App compositions={compositions} />} />
          <Route path="/compositions" element={<Compositions compositions={compositions} />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

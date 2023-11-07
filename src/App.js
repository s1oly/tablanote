
import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [taal, setTaal] = useState(' ')
  const [bpm, setBpm] = useState(' ')
  const [name, setName] = useState(' ')
  const sayKayeda = () => {
    alert(taal + " " + bpm + " " + name)
  }
  const changeTaal = (event) => {
    setTaal(event.target.value)
  }
  const changeBPM = (event) =>{
    setBpm(event.target.value)
  }
  const changeName = (event) =>{
    setName(event.target.value)
  }

  return (
    <div className="App">
      <h1>Input Kayeda Details Below</h1>
      <br></br>
      <label> Taal 
      <input 
      onChange = {changeTaal}
      value = {taal}>
      </input>
      </label>
      <br></br>
      <label> BPM
      <input
      onChange = {changeBPM}
      value = {bpm}>
      </input>
      </label>
      <br></br>
      <label> Name
      <input
      onChange = {changeName}
      value = {name}>
      </input>
      </label>
      <br></br>
      <button onClick = {sayKayeda}> Current Kayeda</button>
    </div>
  );
}

export default App;

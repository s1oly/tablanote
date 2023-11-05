
import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [taal, setTaal] = useState(' ')
  const [bpm, setBpm] = useState(0)
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
      <input 
      onChange = {changeTaal}
      value = {taal}>
      </input>
      <br></br>
      <input
      onChange = {changeBPM}
      value = {bpm}>
      </input>
      <br></br>
      <input
      onChange = {changeName}
      value = {name}>
      </input>
      <br></br>
      <button onClick = {sayKayeda}> Current Kayeda</button>
    </div>
  );
}

export default App;

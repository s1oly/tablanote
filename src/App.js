
import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [taal, setTaal] = useState('TeenTaal')
  const sayTaal = () => {
    alert(taal)
  }
  const change = (event) => {
    setTaal(event.target.value)
  }
  

  return (
    <div className="App">
      <input 
      onChange = {change}
      value = {taal}>
      </input>
      <br></br>
      <button onClick = {sayTaal}> Current Taal</button>
    </div>
  );
}

export default App;

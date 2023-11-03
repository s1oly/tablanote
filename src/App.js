
import './App.css';

const Person = (N, L, A) => {
  return(
    <>
    <h1>Name : " "</h1>
    <h2>Last Name : Iyer</h2>
    <h3>Age : 17</h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <label> 
        Your first name : <input Personf= "myInput" />
        Your last name : <input Personl = "myInput2"/>
        Your age : <input Persona = "myInput3" />
      </label>
      <Person />
    </div>
  );
}

export default App;

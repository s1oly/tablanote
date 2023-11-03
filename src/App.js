
import './App.css';

const Person = () => {
  return(
    <>
    <h1>Name : Shuban</h1>
    <h2>Last Name : Iyer</h2>
    <h3>Age : 17</h3>
    </>
  )
}

const App = () => {
  const name = 'Shuban';
  const isNameShowing = true;
  return (
    <div className="App">
      <h1> Hello, {isNameShowing ? name : 'Error' }</h1>
      <Person />
    </div>
  );
}

export default App;

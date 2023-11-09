import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Compositions from './Compositions'; // Import the Compositions component
import CreateComposition from './CreateComposition'

const App = () => {
  return (
    <div className="App">
      <h1>Add a Composition or View Exisiting Compositions</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/createcomposition" element={<CreateComposition />} />
          <Route path="/compositions" element={<Compositions />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

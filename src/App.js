import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Compositions from './Pages/Compositions'; // Import the Compositions component
import CreateComposition from './Pages/CreateComposition'
import Error from './Pages/Error';
import About from './Pages/About';
import Home from './Pages/Home';


const App = () => {
  return (
    <div className="App">
      <title>TablaNote</title>
      <BrowserRouter>
      <Routes> 
          <Route path ="/" element={<Home/>}>
            <Route path="createcomposition" element={<CreateComposition />} />
            <Route path="compositions" element={<Compositions />} />
            <Route path ="about" element={<About/>} />
            <Route path ="*" element = {<Error />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

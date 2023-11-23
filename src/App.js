import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Compositions from './Pages/CompositionManaging/Compositions'; // Import the Compositions component
import CreateComposition from './Pages/CompositionManaging/CreateComposition'
import Error from './Pages/Display/Error';
import About from './Pages/Display/About';
import Home from './Pages/Display/Home';
import SharedLayout from './Pages/Layouts/SharedLayout';


const App = () => {
  return (
    <div className="App">
      <title>TablaNote</title>
      <BrowserRouter>
      <Routes> 
          <Route path ="/" element={<SharedLayout/>}>
            <Route path ="home" element={<Home/>}/>
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

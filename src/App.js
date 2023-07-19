import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Contact from './pages/Conatct';
import Popup from './components/Popup';


function App() {
  return (
    <Router>
         
    <Routes>

    <Route exact path="/" element={<Home />}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/marketing" element={<Popup/>}/>

    </Routes>
    </Router>

   
   
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Contact from './pages/Conatct';


function App() {
  return (
    <Router>
         
    <Routes>

    <Route exact path="/" element={<Home />}/>
    <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>

   
   
  );
}

export default App;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  return (
   <Router>

    <Navbar />


    <Routes>

      <Route path='/' element={<Home />} />

     <Route path='/auth/login' element={<Auth login />} />
     <Route path='/auth/register' element={<Auth register />} />
    </Routes>

   </Router>
  );

  
}

export default App;
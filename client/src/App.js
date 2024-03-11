import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage.js';
import Contact from './Contact';
import Page1 from './Department/Page1.js';
import Auth from './Auth.js';
import Signup from './Signup.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dept' element={<Page1 />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/material' />
      </Routes>
    </Router>
  );
}

export default App;

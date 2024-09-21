import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './styles/compnents_styles/styles.css'
// pages
import Chatbot from './components/chatbot.jsx';
import Home from './components/home.jsx';

function App() {

  return (
    <>
      <Routes>
        
        <Route path="/chatbot" element={<Chatbot />}></Route>
        <Route path="/Home" element={<Home />}></Route>

      </Routes>
    </>
  );
}

export default App;

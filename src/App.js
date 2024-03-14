import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/homePageComponent/HomePage';
import Forms from './components/formsComponent/Forms';
import NavBar from './components/navBarComponent/NavBar';
import { useState } from 'react';

function App() {
  const [briefings, setBriefings] = useState([]);

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<HomePage briefings={briefings} />}/>
        <Route exact path = "/cadastraBriefing" element={<Forms briefings={briefings} setBriefings={setBriefings} />}/>
      </Routes>
    </Router>
  );
}

export default App;

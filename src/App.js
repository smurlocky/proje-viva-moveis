import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/homePageComponent/HomePage';
import Forms from './components/formsComponent/Forms';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<HomePage/>}/>
        <Route path = "/cadastraBriefing" element = {<Forms/>}/>
      </Routes>
    </Router>
  );
}

export default App;

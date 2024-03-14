import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  const url = 'https://vivamoveis.com/wp-content/uploads/2023/10/logo.png';
  return (
    <div className="navbar-container">
    <img src={url} alt="Logo Viva Moveis" />
    <ul>
      <li><Link to = "/">HomePage</Link></li>
      <li><Link to = "/cadastraBriefing">Cadastra Briefing</Link></li>
    </ul>
    </div>
  )
}

export default NavBar;
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li><Link to = "/">HomePage</Link></li>
      <li><Link to = "/cadastraBriefing">Cadastra Briefing</Link></li>
    </ul>
  )
}

export default NavBar;
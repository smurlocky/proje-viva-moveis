import Forms from "../formsComponent/Forms";

function HomePage() {
  const url = 'https://vivamoveis.com/wp-content/uploads/2023/10/logo.png';
  return(
    <div>
      <header>
        <img src={url} alt="Logo Viva Moveis" />
      </header>
        <h1>Briefing</h1>
        <Forms />
    </div>
  )
}

export default HomePage;
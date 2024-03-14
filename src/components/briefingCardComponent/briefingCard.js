function BriefingCard({ briefing }) {
  return (
    <div className="card">
      <h2>Identificador: {briefing.identificador}</h2>
      <p>Nome do Cliente: {briefing.nomeCliente}</p>
      <p>Descrição da Necessidade do Cliente: {briefing.descricaoNecessidade}</p>
      <p>Data/Hora: {briefing.dataHora}</p>
      <p>Estado do Briefing: {briefing.estadoBriefing}</p>
    </div>
  );
}

export default BriefingCard;
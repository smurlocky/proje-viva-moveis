import BriefingCard from "../briefingCardComponent/briefingCard";

function HomePage({briefings}) {
  return(
    <div>
      <h1>home</h1>
      <div className="briefings-container">
        {briefings.map((briefing, index) => (
          <BriefingCard key={index} briefing={briefing} />
        ))}
      </div>
    </div>
  )
}

export default HomePage;
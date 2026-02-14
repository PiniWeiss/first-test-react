import './TerroristCard.css'
const DEAFULT_IMAGE = "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png"

function TeroristCard({ terorist, isHighlighted }) {
  return (
    <tr 
      className={`row-animate ${isHighlighted ? 'highlight' : ''}`} 
      
    >
      <td className="name-area">
        <img src={terorist.imageUrl || DEAFULT_IMAGE} alt="terrorist" />
        <h2>{terorist.name}</h2>
      </td>
      <td>{terorist.organization}</td>
      <td>{terorist.attacksCount}</td>
      <td><span className={`status-tag ${terorist.status}`}>{terorist.status}</span></td>
      <td className="summary-cell">{terorist.relationToIsraelSummary}</td>
    </tr>
  );
}

export default TeroristCard
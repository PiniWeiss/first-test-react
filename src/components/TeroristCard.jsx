function TeroristCard({ terorist, isHighlighted, onClick }) {
  return (
    <tr 
      className={`row-animate ${isHighlighted ? 'highlight' : ''}`} 
      onClick={onClick} // חשוב מאוד לבונוס!
    >
      <td className="name-area">
        <img src={terorist.imageUrl || "default-img.png"} alt="terrorist" />
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
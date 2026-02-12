

function TeroristCard({terorist, setFilter}) {
  return (
    <div>
       <tr>
            <td className="name-area">
              <img src={terorist.imageUrl} alt="terorist" />
              <h2>{terorist.name}</h2>
            </td>
            <td>{terorist.organization}</td>
            <td>{terorist.attacksCount}</td>
            <td>{terorist.status}</td>
            <td>{terorist.relationToIsraelSummary}</td>
          </tr>
    </div>
  )
}

export default TeroristCard

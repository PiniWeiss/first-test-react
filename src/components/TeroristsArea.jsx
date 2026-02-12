import TeroristCard from "./TeroristCard";
import "./TeroristsArea.css";
import teroristsData from "../terrorists_data.json";
import { useState } from "react";
import SearchArea from "./SearchArea";
function TeroristsArea() {
  const [allTerorists, setAllTerorist] = useState(teroristsData);
  const [filter, setFilter] = useState("All");

  function filterTerorists(allTerorists) {
    if (filter === "All") return allTerorists;
    else if (filter === "Active")
      return teroristsData.filter((terorist) => terorist.status === "active");
    else if (filter === "Quit")
      return teroristsData.filter((terorist) => terorist.status === "quit");
    else if (filter === "Dead")
      return teroristsData.filter((terorist) => terorist.status === "dead");
    else if (filter === "Israeli-agent")
      return teroristsData.filter((terorist) => terorist.status === "agent");
  }


  return (
    <div id="terorists-area">
      <SearchArea
        setAllTerorist={setAllTerorist}
        allTerorists={allTerorists}
        setFilter={setFilter}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Attacks</th>
            <th>Status</th>
            <th>Summery</th>
          </tr>
        </thead>
        <tbody>
          {allTerorists?.map((terorist, i) => (
            <tr key={i}>
              <td className="name-area">
                <img src={terorist?.imageUrl} alt="terorist" />
                <h2>{terorist?.name}</h2>
              </td>
              <td>{terorist?.organization}</td>
              <td>{terorist?.attacksCount}</td>
              <td>{terorist?.status}</td>
              <td>{terorist?.relationToIsraelSummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeroristsArea;

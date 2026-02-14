import { useState } from "react";
import terroristsData from "../terrorists_data.json";
import SearchArea from "./SearchArea";
import TeroristCard from "./TeroristCard";
import "./TeroristsArea.css";

function TeroristsArea() {
  const [data, setData] = useState(terroristsData);
  const [searchName, setSearchName] = useState("");
  const [minAttacks, setMinAttacks] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dangerousName, setDangerousName] = useState(null);



  const filteredList = data.filter((t) => {
    const matchesName = t.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesAttacks = t.attacksCount >= minAttacks;
    const matchesStatus = statusFilter === "all" || t.status === statusFilter;
    return matchesName && matchesAttacks && matchesStatus;
  });

  const handleFindDangerous = () => {
    const mostDengerous = data.reduce((prev, current) => {
      if (prev.imageUrl && prev.status === "active") {
        return (prev.attacksCount > current.attacksCount) ? prev : current;
      }
    });

    if (mostDengerous) setDangerousName(mostDengerous.name);
  };

  return (
    <div id="terorists-area">
      <SearchArea
        setSearchName={setSearchName}
        setMinAttacks={setMinAttacks}
        setStatusFilter={setStatusFilter}
        onFindDangerous={handleFindDangerous}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Attacks</th>
            <th>Status</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((t) => (
            <TeroristCard
              key={t.name}
              terorist={t}
              isHighlighted={dangerousName === t.name}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeroristsArea;
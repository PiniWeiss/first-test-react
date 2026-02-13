import { useState } from "react";
import terroristsData from "../terrorists_data.json";
import SearchArea from "./SearchArea";
import TeroristCard from "./TeroristCard";
import BonusPanel from "./BonusPanel"; // ייבוא הקומפוננטה החדשה
import "./TeroristsArea.css";

function TeroristsArea() {
  const [data, setData] = useState(terroristsData); // כאן נשמרים הנתונים שניתן לשנות
  const [searchName, setSearchName] = useState("");
  const [minAttacks, setMinAttacks] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dangerousName, setDangerousName] = useState(null);
  
  // בונוס: State למחבל שנבחר בלחיצה
  const [selectedTerrorist, setSelectedTerrorist] = useState(null);

  // פונקציית עדכון סטטוס (עבור הבונוס)
  const handleUpdateStatus = (name, newStatus) => {
    const updatedData = data.map(t => 
      t.name === name ? { ...t, status: newStatus } : t
    );
    setData(updatedData);
    setSelectedTerrorist(null); // סגירת הפאנל אחרי הפעולה
  };

  // לוגיקת סינון
  const filteredList = data.filter((t) => {
    const matchesName = t.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesAttacks = t.attacksCount >= minAttacks;
    const matchesStatus = statusFilter === "all" || t.status === statusFilter;
    return matchesName && matchesAttacks && matchesStatus;
  });

  const handleFindDangerous = () => {
    const dangerous = data.find(t => 
      t.status === "active" && t.attacksCount > 20 && t.imageUrl
    );
    if (dangerous) setDangerousName(dangerous.name);
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
              // כשלוחצים על שורה - המחבל נשמר ב-State
              onClick={() => setSelectedTerrorist(t)} 
            />
          ))}
        </tbody>
      </table>

      {/* הצגת פאנל הבונוס רק אם נבחר מחבל */}
      {selectedTerrorist && (
        <BonusPanel 
          terrorist={selectedTerrorist} 
          onClose={() => setSelectedTerrorist(null)} 
          onAction={handleUpdateStatus}
        />
      )}
    </div>
  );
}

export default TeroristsArea;
import "./SearchArea.css";

function SearchArea({ setSearchName, setMinAttacks, setStatusFilter, onFindDangerous }) {
  return (
    <div id="search-area">
      <input
        type="text"
        placeholder="🔍 Search by name"
   onChange={(e) => setSearchName(e.target.value)} // עדכון טקסט חיפוש [cite: 15]
      />
      
      <div id="attacks-s-area">
        <label>Min Attacks:</label>
        <input 
          type="number" 
  onChange={(e) => setMinAttacks(Number(e.target.value))} // חיפוש לפי כמות [cite: 16]
        />
      </div>

      <div id="status-area">
        <label>Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)}> 
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="quiet">Quiet</option>
          <option value="dead">Dead</option>
          <option value="agent">Israeli Agent</option>
        </select>
      </div>

      <button onClick={onFindDangerous}>Find Most Dangerous</button> 
    </div>
  );
}
export default SearchArea;
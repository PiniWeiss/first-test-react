import "./SearchArea.css";

function SearchArea({ setSearchName, setMinAttacks, setStatusFilter, onFindDangerous }) {

  const searchByName = (e) => setSearchName(e.target.value)
  const searchByAttacks = (e) => setMinAttacks(Number(e.target.value))
  const searchByStatus = (e) => setStatusFilter(e.target.value)

  return (
    <div id="search-area">
      <input
        type="text"
        placeholder="🔍 Search by name"
   onChange={searchByName}
      />
      
      <div id="attacks-s-area">
        <label>Min Attacks:</label>
        <input 
          type="number" 
  onChange={searchByAttacks}
        />
      </div>

      <div id="status-area">
        <label>Status:</label>
        <select onChange={searchByStatus}> 
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
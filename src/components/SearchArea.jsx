import "./SearchArea.css";
import teroristsData from "../terrorists_data.json";
function SearchArea({ setFilter, allTerorists, setAllTerorist }) {
  function searchingByName(e) {
    setAllTerorist(
      allTerorists.map((terorist) => {
        terorist?.name?.toLowerCase().includes(e.target.value.toLowerCase());
      }),
    );
    console.log(allTerorists)
  }

  function searchingByNumber(e) {
    console.log(allTerorists.filter((t) => t.attacksCount === e.target.value))
    setAllTerorist(
      allTerorists.find((t) => t.attacksCount === e.target.value)
    );
  }

  return (
    <div id="search-area">
      <div id="name-s-area">
        <input
          id="name-search"
          type="text"
          placeholder="🔍 Search by name"
          onChange={searchingByName}
        />
      </div>
      <div id="attecks-s-area">
        <label htmlFor="attecks-s">Search by Attecks:</label>
        <input id="attecks-s" type="number" onChange={searchingByNumber} />
      </div>
      <div id="status-area">
        <label htmlFor="status">Status Filter: </label>
        <select name="status" id="">
          <option value="all">All</option>
          <option value="active" onChange={() => setFilter("Active")}>
            Active
          </option>
          <option value="quit" onChange={() => setFilter("Quit")}>
            Quit
          </option>
          <option value="dead" onChange={() => setFilter("Dead")}>
            Dead
          </option>
          <option
            value="israeli-agent"
            onChange={() => setFilter("Israeli-agent")}
          >
            Israeli Agent
          </option>
        </select>
      </div>
      <button>Find Most Dangerous</button>
    </div>
  );
}

export default SearchArea;

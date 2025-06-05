import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="Vector.svg" alt="Search-icon" />
        <input type="text"
        placeholder="Enter movie name" 
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}/>
      </div>
    </div>
  );
}

export default Search;

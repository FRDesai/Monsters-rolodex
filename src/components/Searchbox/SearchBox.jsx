import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search.."
        value={searchQuery}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;

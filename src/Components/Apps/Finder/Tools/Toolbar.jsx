import React from "react";

const Toolbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="toolbar">
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Toolbar;

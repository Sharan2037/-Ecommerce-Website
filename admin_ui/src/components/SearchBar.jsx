import React from "react";
import SalaryFilter from "./SalaryFilter";

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Search Input */}
      <div className="search-input">
        <img src="images/vector.svg" alt="Search Icon" className="icon" />
        <input type="text" placeholder="Search By Job Title, Role" />
      </div>
      <div className="divider" />

      {/* Location Input */}
      <div className="search-input">
        <img src="images/location.svg" alt="Location Icon" className="icon" />
        <input type="text" placeholder="Preferred Location" />
      </div>
      <div className="divider" />

      {/* Job Type Dropdown */}
      <div className="search-input">
        <img src="images/image.svg" alt="Briefcase Icon" className="icon" />
        <select>
          <option>Job type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Freelance</option>
        </select>
      </div>
      <div className="divider" />

      {/* Salary Filter */}
      <div>
        <SalaryFilter />
      </div>
    </div>
  );
};

export default SearchBar;

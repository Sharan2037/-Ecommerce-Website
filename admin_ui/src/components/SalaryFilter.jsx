import React, { useState } from "react";

const SalaryFilter = () => {
  const [salary, setSalary] = useState([50000, 70000]); // Initial range

  const handleSalaryChange = (event) => {
    const value = Number(event.target.value);
    setSalary([50000, value]); // Update only the max value
  };

  return (
    <div className="salary-filter">
      <label className="salary-label">
        Salary Per Month <span>₹{(salary[0] / 1000)}k - ₹{(salary[1] / 1000)}k</span>
      </label>
      <input
        type="range"
        min="50000"
        max="100000"
        step="5000"
        value={salary[1]}
        onChange={handleSalaryChange}
        className="salary-slider"
      />
    </div>
  );
};

export default SalaryFilter;

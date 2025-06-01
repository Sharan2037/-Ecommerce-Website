import React, { useState } from "react";
import JobFormModal from "./JobFormModal"; // Import the modal component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" >
        <img src="images/logo.png" alt="Logo" width="50"/>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Find Jobs</a></li>
        <li><a href="#">Find Talents</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
      <button className="create-job" onClick={() => setIsModalOpen(true)}>
        Create Jobs
      </button>

      {isModalOpen && <JobFormModal onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;

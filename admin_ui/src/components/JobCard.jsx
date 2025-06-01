import React from "react";

const JobCard = ({ job }) => {
  if (!job) return null; // Ensure job is defined

  return (
    <div className="job-card">
      <div className="job-header">
        <img
          src={job.companyLogo}
          alt="Company Logo"
          className="company-logo"
        />
        <span className="job-tag">24h Ago</span>
      </div>
      <h3>{job.title}</h3>
      <p className="job-details">
        <img src={"/images/vector2.png"} alt="Experience Icon" className="detail-icon" />
        <span>{job.experience}</span>
        <img src={"/images/vector3.png"} alt="Job Type Icon" className="detail-icon" />
        <span>{job.type}</span>
        <img src={"/images/vector4.png"} alt="Salary Icon" className="detail-icon" />
        <span>{job.salary}</span>
      </p>
      <ul className="job-description">
        {Array.isArray(job.description) &&
          job.description.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobCard;

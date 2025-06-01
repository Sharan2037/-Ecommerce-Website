import React from "react";

const JobForm = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{color:"black",paddingBottom:"40px"}}>Create Job Opening</h2>
        <form className="form-container">

          {/* Job Title & Company Name */}
          <div className="form-row">
            <div className="form-group">
              <label style={{color:"black"}}>Job Title</label>
              <input type="text" style={{color:"black"}} placeholder="Enter Job Title" />
            </div>
            <div className="form-group">
              <label style={{color:"black"}}>Company Name</label>
              <input type="text" style={{color:"black"}} placeholder="Amazon, Swiggy, Microsoft" />
            </div>
          </div>

          {/* Location & Job Type */}
          <div className="form-row">
            <div className="form-group">
              <label style={{color:"black"}}>Location</label>
              <select style={{color:"gray",placeholder:"Choose Prefered Location"}}>
                <option >Choose Prefered Location</option>
                <option style={{color:"black"}}>Chennai</option>
                <option style={{color:"black"}}>Bangalore</option>
                <option  style={{color:"black"}}>Coimbatore</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{color:"black"}}>Job Type</label>
              <select style={{color:"gray" , marginRight:"10px",placeholder:"Full Time"}}>
                <option style={{color:"black"}}>Full Time</option>
                <option style={{color:"black"}}>Part Time</option>
                <option style={{color:"black"}}>Internship</option>
                <option  style={{color:"black"}}>Contract</option>
              </select>
            </div>
          </div>

          {/* Salary Range & Application Deadline */}
          <div className="form-row">
            <div className="form-group">
              <label style={{color:"black"}}>Salary Range</label>
              <input type="text" style={{color:"black"}} placeholder="₹ 0 - ₹ 12,00,000" />
            </div>
            <div className="form-group">
              <label style={{color:"black"}}>Application Deadline</label>
              <input type="date" style={{color:"gray" , marginRight:"10px", WebkitAppearance: "none" ,placeholder:"dd-mm-yyyy"}} />
            </div>
          </div>

          {/* Job Description */}
          <div className="form-group description">
            <label style={{color:"black"}}>Description</label>
            <textarea style={{color:"black"}} placeholder="Enter job details and requirements"></textarea>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button
              type="button"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 12px",
              }}
            >
                 Save Draft
              <img
                src={"images/vector8.svg"}
                alt="Save Icon"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
            <button
              type="submit"
              style={{ backgroundColor: "#007bff", color: "white" }}
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;

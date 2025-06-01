import React from "react";
import JobCard from "./JobCard";

const jobData = [
    { 
        title: "Full Stack Developer", 
        companyLogo: "/images/company-logo.png", 
        experience: "1-3 yr", 
        type: "Onsite", 
        salary: "12 LPA", 
        description: [
          "Maintain web applications.",
          "Collaborate with designers and backend teams."
        ]
      },    
  { title: "Node Js Developer", companyLogo: "/images/company-logo1.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA", description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
  { title: "UX/UI Designer", companyLogo: "/images/company-logo2.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA", description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
  { title: "Full Stack Developer", companyLogo: "/images/company-logo1.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA",  description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
  { title: "Node Js Developer", companyLogo: "/images/company-logo.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA",  description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
  { title: "UX/UI Designer", companyLogo: "/images/company-logo.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA",  description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
  { title: "Full Stack Developer", companyLogo: "/images/company-logo2.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA",description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
  { title: "Node Js Developer", companyLogo: "/images/company-logo.png", experience: "1-3 yr", type: "Onsite", salary: "12 LPA", description: [
    "Maintain web applications.",
    "Collaborate with designers and backend teams."
  ]
},  
];

const JobList = () => {
  return (
    <div className="job-list">
      {jobData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
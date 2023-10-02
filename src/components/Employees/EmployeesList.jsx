import React from "react";

function EmployeeList({ name, department, description, image }) {
  return (
    <div className="team-member">
      <div className="img-container">
        <img src={`src/components/Employees/${image}`} alt={name} className="profile-picture" />
      </div>
      <div className="employer-details">
        <p className="employer-name">{`${name} [${department}]`}</p>
        <p className="employer-description">{description}</p>
      </div>
    </div>
  );
}
export default EmployeeList;

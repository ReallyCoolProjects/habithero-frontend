import React from "react";
import { Link } from "react-router-dom";
import DashboardIconLight from "../../assets/icons/dashboard-icon.png";
const Navbar = () => {
  return (
    <nav className="center-section flex-row justify-around">
      <Link to={`/`}>
        <span className="flex flex-col justify-center items-center">
          <span className="material-symbols-outlined">dashboard</span>
        <span>Dashboard</span> 
        </span>
      </Link>
      <Link to="/dashboard">Progress</Link>
      <Link to="/profile">
      <span className="flex flex-col justify-center items-center">
      <span className="material-symbols-outlined">
person
</span>
        <span>Profile</span> 
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;

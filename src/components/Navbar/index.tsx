import React from "react";
import { Link } from "react-router-dom";
import DashboardIconLight from "../../assets/icons/dashboard-icon.png"
const Navbar = () => {
  return (
    <nav className="center-section flex-row justify-around">
      <Link to="/dashboard">
        <span>
          {/* <img
            src={DashboardIconLight}
            alt="dashboard-icon"
          /> */}
        </span>{" "}
        Dashboard
      </Link>
      <Link to="/dashboard">Progress</Link>
      <Link to="/dashboard">icon3</Link>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../css/ListStyle.css";
import logo from "../Images/logo.jpg";
import {NavLink} from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
const List = () => {
  return (
    <div>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink exact to="/" className="listItem" activeClassName="activeItem">
                Home
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                About
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Employees
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                StakeHolders
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                SupportTeam
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Job Opportunities
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Notifications
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Products
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Salary Slip
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <ManageSearchIcon className="icon" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default List;

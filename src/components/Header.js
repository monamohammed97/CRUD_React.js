import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          {/* <Link to={"/"}> Home</Link> */}
          <NavLink to={"/"} end> Home</NavLink>
        </li>
        <li>
          <NavLink to={"/add"}>Add Post</NavLink>
        </li>
        <li className="login">login</li>
      </ul>
    </div>
  );
};

export default Header;

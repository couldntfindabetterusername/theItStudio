import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles.css";

const Header = ({ setCurrentId }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="icon-container">
        <span className="icon"> TheITStudio </span>{" "}
        <button className="add-btn" onClick={() => setCurrentId("")}>
          <Link to={"/form"}> Add </Link>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;

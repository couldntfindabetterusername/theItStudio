import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setCurrentId }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="icon-container">
        <span className="icon">TheITStudio</span>
        <button
          onClick={() => {
            setCurrentId(null);
            navigate("/form");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Header;

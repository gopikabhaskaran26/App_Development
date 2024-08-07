import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    // Clear any admin/authentication data here if necessary
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/" replace={true}>Home</Link>
            </li>
            <li>
              <Link to="/courses" replace={true}>All Courses</Link>
            </li>
            <li>
              <Link to="/about" replace={true}>About</Link>
            </li>
            <li>
              <Link to="/team" replace={true}>Team</Link>
            </li>
            <li>
              <Link to="/pricing" replace={true}>Pricing</Link>
            </li>
            <li>
              <Link to="/journal" replace={true}>Journal</Link>
            </li>
            <li>
              <Link to="/contact" replace={true}>Contact</Link>
            </li>
          </ul>
          <div className="start">
            <Link to="/login" className="button">Login / Signup</Link>
            <button className="logout" onClick={handleLogout}>Logout</button>
            
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

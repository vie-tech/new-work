import React from "react";


export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="icon-text">
          <i
            className="fab fa-airbnb"
            style={{ fontSize: 40, color: "red" }}
          ></i>
          <span className="logo-span">IDK BRO</span>
        </div>

        <ul>
          <li>Log in</li>
          <li>Sign-Up</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
  
      
    </>
  );
}

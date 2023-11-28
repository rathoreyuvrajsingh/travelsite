import React from 'react';
import "./Navbar.css";
import instagram from "../Resources/instagram.svg";
import facebook from "../Resources/facebook.svg";
import youtube from "../Resources/youtube.svg";
import logo from "../Resources/logo.png"
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div>


      <div className="nav">
        <div className="logo">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-lover-app-or-youtube-channel-logo-design-template-f37beb92a452f6b7d7e0249adcd354e7_screen.jpg?ts=1587039989" alt="logo" />
        </div>

        <div className="items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#recipe">Recipes</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>


          </ul>
        </div>
        <div className="icons">
          <span>FOLLOW </span>
          <img src={instagram} alt="My Icon" />
          <img src={facebook} alt="My Icon" />
          <img src={youtube} alt="My Icon" />
        </div>

      </div>

    </div>
  )
}

export default Navbar;

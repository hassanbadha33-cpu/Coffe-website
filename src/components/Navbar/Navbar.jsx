import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src="/src/assets/logo.png" alt="Logo" />
        </div>

        {/* LINKS */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Products">Products</a></li>
          <li><a href="#Reviews">Reviews</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><a href="#Blogs">Blogs</a></li>
        </ul>

        {/* HAMBURGER (TEXT ONLY) */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

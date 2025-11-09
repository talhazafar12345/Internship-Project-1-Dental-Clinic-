
import { useState } from "react";
import { Link } from "react-router-dom";
function Hero1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="hero1-container">
      <div className="navBar">
        <div className="navImage">
          <img
            src="https://demo.bravisthemes.com/dentia/wp-content/uploads/2025/08/logo-black.png"
            alt="Logo"
          />
        </div>
        <div className="navLinks">
          <Link to={"/"} className="link">Home</Link>
          <Link to={"/about-page"} className="link">About</Link>
          <Link to={"/service-page"} className="link">Services</Link>
          <Link to={"/price-page"} className="link">Pricing</Link>
          <Link to={"/contact-page"} className="link">Appointment</Link>
        </div>
        <div className="navButton">
          <Link to={"/signup-page"}><button>Signup</button></Link>
          <Link to={"/login-page"}><button>Login</button></Link>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="navImage">
          <img
            src="https://demo.bravisthemes.com/dentia/wp-content/uploads/2025/08/logo-black.png"
            alt="Logo"
          />
        </div>
        <div className="close-btn" onClick={toggleSidebar}>
          ✕
        </div>
        <Link to={"/"} className="side-link" onClick={toggleSidebar}>
          Home
        </Link>
        <Link to={"/about-page"} className="side-link" onClick={toggleSidebar}>
          About
        </Link>
        <Link to={"/service-page"} className="side-link" onClick={toggleSidebar}>
          Services
        </Link>
        <Link to={"/price-page"} className="side-link" onClick={toggleSidebar}>
          Pricing
        </Link>
        <Link to={"/contact-page"} className="side-link" onClick={toggleSidebar}>
          Appointment
        </Link>
        <div className="side-buttons">
          <Link className="qlin" to={"/signup-page"}><button>Signup</button></Link>
          <Link to={"/login-page"} className="qlins"><button>Login</button></Link>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}
export default Hero1;
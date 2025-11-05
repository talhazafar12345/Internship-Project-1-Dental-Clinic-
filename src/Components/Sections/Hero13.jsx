


import { Link } from "react-router-dom"
function Hero13() {
  return (
    <div>
      <footer className="footer">

        <div className="footer-container">
          <div className="footer-col logo-col">
            <div className="footer-logo">
              <img
                src="https://demo.bravisthemes.com/dentia/wp-content/uploads/2025/08/logo-white.png"
                alt="Dentia"
              />
            </div>
            <p className="mpp">
              At Dentia, we’re dedicated to providing high-quality, personalized dental care for
              patients of all ages. Our skilled team uses the latest technology to ensure
              comfortable, efficient treatments and beautiful, healthy smiles for life.
            </p>
            <div className="footer-social">
              <Link><i className="fab fa-facebook-f"></i></Link>
              <Link><i className="fab fa-twitter"></i></Link>
              <Link><i className="fab fa-whatsapp"></i></Link>
              <Link><i className="fab fa-instagram"></i></Link>
              <Link><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
          <div className="footer-col ppp">
            <h4>Company</h4>
            <ul>
              <Link className="abc"><li>Home</li></Link>
              <Link className="abc"><li>Our Services</li></Link>
              <Link className="abc"><li>Gallery</li></Link>
              <Link className="abc"><li>About Us</li></Link>
              <Link className="abc"><li>Blog</li></Link>
              <Link className="abc"><li>Contact</li></Link>
            </ul>
          </div>
          <div className="footer-col bbm">
            <h4>Our Services</h4>
            <ul>
              <Link className="abc" ><li>General Dentistry</li></Link>
              <Link className="abc"><li>Cosmetic Dentistry</li></Link>
              <Link className="abc"><li>Pediatric Dentistry</li></Link>
              <Link className="abc"><li>Restorative Dentistry</li></Link>
              <Link className="abc"><li>Preventive Dentistry</li></Link>
              <Link className="abc"><li>Orthodontics</li></Link>
            </ul>
          </div>
          <div className="footer-col cco">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>
                <b className="ppb"><i class="fa-solid fa-location-dot dot"></i> Clinic Location</b> <br />
                100 S Main St, New York, NY
              </li>
              <li>
                <b className="ppb"> <i class="fa-solid fa-phone dot"></i> Call Us</b> <br />
                +1 123 456 789
              </li>
              <li>
                <b className="ppb"><i class="fa-solid fa-message dot"></i> Send a Message</b> <br />
                contact@dentia.co
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 – Dentia by BravisThemes.</p>
          <div className="footer-links">
            <Link className="xxx">Terms & Conditions</Link>
            <Link className="xxx">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Hero13

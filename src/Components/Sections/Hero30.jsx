import { useState } from "react";
import Footer from "../Footer/Footer";
function Hero30() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(""); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setFormError("");
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your Name";
    if (!formData.email) newErrors.email = "Please enter your Email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid Email";
    if (!formData.phone) newErrors.phone = "Please enter your Phone";
    if (!formData.message) newErrors.message = "Please enter your Message";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormError("⚠️ One or more fields have an error. Please check and try again.");
      return;
    }
    alert("Message sent successfully ✅");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setFormError("");
  };
  return (
    <div>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="geti">Get in Touch</p>
          <h2>We are always ready to help you and answer your questions</h2>
          <p>
            Whether you have a question, a suggestion, or just want to say hello, this is
            the place to do it. Please fill out the form below with your details and
            message, and we’ll get back to you as soon as possible.
          </p>
          <div className="mtime">
            <div className="time">
              <p>
                <i className="fa-solid fa-clock xcv"></i> <span className="hjh">We are Open</span>
              </p>
              <p className="sched">Monday – Friday 08.00 – 18.00</p>
            </div>
            <div className="time">
              <p className="cir">
                <i className="fa-solid fa-location-dot xcv"></i> <span className="hjh"> Clinic Location</span>
              </p>
              <p className="sched">100 S Main St, New York</p>
            </div>
          </div>
          <div className="mtimes">
            <div className="time kkp">
              <p className="cir">
                <i className="fa-solid fa-phone xcv"></i> <span className="hjh"> Call us directly</span>
              </p>
              <p className="sched">+1 123 456 789</p>
            </div>
            <div className="time">
              <p className="cir">
                <i className="fa-solid fa-message xcv"></i> <span className="hjh"> Send a Messsage</span>
              </p>
              <p className="sched">contact@dentiacare.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h3>Get In Touch</h3>
            <div className="contact-field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{marginLeft:"4px"}} className="error-text" >{errors.name}</p>}
            </div>
            <div className="contact-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{marginLeft:"4px"}} className="error-text">{errors.email}</p>}
            </div>
            <div className="contact-field">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p style={{marginLeft:"4px"}} className="error-text">{errors.phone}</p>}
            </div>
            <div className="contact-field">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p style={{marginLeft:"4px"}} className="error-text">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-send">
              Send Message
            </button>
            {formError && <div className="error-box">{formError}</div>}
          </form>
        </div>
      </div>
      <div className="abf">
        <Footer />
      </div>
    </div>
  );
}
export default Hero30;
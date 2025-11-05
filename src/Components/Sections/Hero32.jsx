import { useState } from "react";
import Footer from "../Footer/Footer";
function Hero32() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
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
    if (!formData.dob) newErrors.dob = "Please enter your Date of Birth";
    if (!formData.email) newErrors.email = "Please enter your Email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid Email";
    if (!formData.phone) newErrors.phone = "Please enter your Phone Number";
    if (!formData.address) newErrors.address = "Please enter your Address";
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
    alert("Form submitted successfully ✅");
    setFormData({ name: "", dob: "", email: "", phone: "", address: "" });
    setFormError("");
  };
  return (
    <div >
      <div className="uinp">
        <h1 className="regg">Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="dddinp">
            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "3px", textAlign: "left" }}>{errors.name}</p>}
          </div>
          <div className="dddinp">
            <input
              placeholder="Enter Your Date of Birth"
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "3px", textAlign: "left" }}>{errors.dob}</p>}
          </div>
          <div className="dddinp">
            <input
              placeholder="Enter your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "3px", textAlign: "left" }}>{errors.email}</p>}
          </div>
          <div className="dddinp">
            <input
              placeholder="Enter your Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "3px", textAlign: "left" }}>{errors.phone}</p>}
          </div>
          <div className="dddinp">
            <input
              placeholder="Enter your Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "4px", textAlign: "left" }}>{errors.address}</p>}
          </div>
          <div className="cbutton">
            <button type="submit">Submit</button>
          </div>
          {formError && <p className="errors-texts" style={{ color: "red" }}>{formError}</p>}
        </form>
      </div>
      <div className="vvb">
        <Footer />
      </div>
    </div>
  );
}
export default Hero32;

import Footer from "../Footer/Footer";
import { useState } from "react";
function Hero33() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        alert("Login successful ✅");
        setFormData({ name: "", email: "" });
        setFormError("");
    };
    return (
        <div>
            <div className="uinp">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="dddinp">
                        <input
                            placeholder="Enter Your Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "3px", textAlign: "left" }}  >{errors.name}</p>}
                    </div>
                    <div className="dddinp">
                        <input
                            placeholder="Enter your Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="errors-text" style={{ color: "red", marginTop: "5px", marginLeft: "3px", textAlign: "left" }} >{errors.email}</p>}
                    </div>

                    <div className="cbutton">
                        <button type="submit">Submit</button>
                    </div>
                    {formError && <p style={{ color: "red", marginTop: "5px", marginLeft: "3px" }} className="form-error">{formError}</p>}
                </form>
            </div>
            <div className="abffa">
                <Footer />
            </div>
        </div>
    );
}
export default Hero33;

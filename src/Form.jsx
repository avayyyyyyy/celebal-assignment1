import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+\d{1,3}\d{10}$/;
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const aadharRegex = /^\d{12}$/;

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.phoneNo) {
      tempErrors.phoneNo = "Phone No. is required";
    } else if (!phoneRegex.test(formData.phoneNo)) {
      tempErrors.phoneNo = "Phone No. is not valid";
    }
    if (!formData.country) tempErrors.country = "Country is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.panNo) {
      tempErrors.panNo = "Pan No. is required";
    } else if (!panRegex.test(formData.panNo)) {
      tempErrors.panNo = "Pan No. is not valid";
    }
    if (!formData.aadharNo) {
      tempErrors.aadharNo = "Aadhar No. is required";
    } else if (!aadharRegex.test(formData.aadharNo)) {
      tempErrors.aadharNo = "Aadhar No. is not valid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setErrors({});
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone No. (country code and number):</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add more countries as needed */}
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Mumbai">Mumbai</option>
          {/* Add more cities as needed */}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>PAN No.:</label>
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No.:</label>
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
};

export default Form;

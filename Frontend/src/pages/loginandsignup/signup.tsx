import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./signup.css"; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log( name,  email, phonenumber,  password);
    Login();
  };
  const Login=async()=>{

  }

  return (
    <div className="signup-container">
      <button
        className="back-button"
        onClick={() => {
          navigate("/products");
        }}
      >
        Back
      </button>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="form-title">Signup</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="phonenumber"
            placeholder="Mobile Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}

            
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

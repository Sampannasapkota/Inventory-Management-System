import { useState } from "react";
import { useNavigate } from "react-router";
import "./signup.css"; // Import the CSS file
import { api } from "../../api";
import CustomInput from "../../Components/customInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, mobile, password);
    const organization_id = localStorage.getItem("organization_id");
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        mobile,
       organization_id: organization_id && parseInt(organization_id, 10),
        password,
        role: "Admin"
      });
      console.log(response);
      navigate("/");
      localStorage.setItem("token", response.data.token);
    }
    catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

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
          {/* <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          /> */}
          <CustomInput label="name" setValue={setName}/>
          <CustomInput label="email" setValue={setEmail}/>
          <CustomInput label="mobile" setValue={setMobile}/>
          <CustomInput label="password" setValue={setPassword}/>
          
        </div>
       
        <button type="submit" className="submit-button">
          Signup
        </button>
        
      </form>
      {error && <p className="error">{error}</p>}
      
    </div>
    
    
  );
 
};

export default Signup;

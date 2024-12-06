import { useState } from "react";
import { useNavigate } from "react-router";
import "./signup.css"; // Import the CSS file
import { api } from "../../api";
import CustomInput from "../../Components/customInput";
// import { useLocation } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const {state} = useLocation();
  // const organizationId = state.organizationId;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, mobile, password);

    try {
      const response = await api.post("/register", {
        name,
        email,
        mobile,
        password,
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

import React, {  useState } from "react";
import { useNavigate } from "react-router";
import "./login.css"; // Import the CSS file
import CustomInput from "../../Components/customInput";
import { api } from "../../api";
import { useAuth } from "../../context/authContext";
// import { useUser } from "../../context/userContext";

export default function Login() {
  const navigate = useNavigate();
  const {login} =useAuth();
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);

    try {
      const response = await api.post("/auth/login", { username, password });
      console.log(response);
      navigate("/");
      login(response.data.token);
    }
     catch (error: any) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
     
      <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="header">Login</h1>
        <CustomInput label="Username" placeholder="Enter your Name" setValue={setUsername} />
        <CustomInput label="Password" placeholder="Enter your strong password" setValue={setPassword} />

        {error && <p className="error">{error}</p>}
        <button type="submit"> login</button>
      </form>
    </div>
  );
}

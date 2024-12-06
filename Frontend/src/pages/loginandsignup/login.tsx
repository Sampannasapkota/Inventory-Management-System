import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css"; // Import the CSS file
import CustomInput from "../../Components/customInput";
import { api } from "../../api";

export default function Login() {
  const navigate = useNavigate();

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
      localStorage.setItem("token", response.data.token);
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <button
        className="back-button"
        onClick={() => {
          navigate("/products");
        }}
      ></button>
     
      <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="header">Login</h1>
        <CustomInput label="username" setValue={setUsername} />
        <CustomInput label="password" setValue={setPassword} />

        {error && <p className="error">{error}</p>}
        <button type="submit"> login</button>
      </form>
    </div>
  );
}

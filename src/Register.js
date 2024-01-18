import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Register.css";

const Register = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");

  const handleRegister = async () => {
    if (password !== Cpassword) {
      toast.error("Password and confirm password do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email,
        username,
        phone,
        password,
        Cpassword,
      });

      console.log(response.data);
      toast.success("Registration successful!");

      navigate("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400 && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          console.error("Registration error:", error.response.data);
          toast.error(
            "Registration failed. Please check your input and try again."
          );
        }
      } else {
        console.error("Registration error:", error.message);
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="parent">
     <div className="RegisterFrom" >
     <div className="container2">
          <h1 className="div-3">Sign up</h1>
          <input
            type="text"
            className="data"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="data"
            placeholder="Create a username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="data"
            placeholder="Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            className="pass"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="pass"
            placeholder="Confirm password"
            onChange={(e) => setCPassword(e.target.value)}
          />

          <button className="register" onClick={handleRegister}>
            Register
          </button>
        </div>
     </div>
        <div className="container1">
        <div className="column-1">
            <span className="span">
              <div className="Paragraphs">
                <p className="div-1">If you already have an account</p>
                <p className="div-2">
                  You can <Link to="/">Login here!</Link>
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Register;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");  // 'error' or 'success'
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    setAlertMessage(""); // Reset alert message on each form submit

    try {
      // Check if user already exists (if needed)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setAlertMessage("Successfully signed up! You can now log in.");
      setAlertType("success");
      navigate("/login");  // Redirect to login after successful signup
    } catch (error) {
      console.log(error);
      setAlertMessage("Email already exists! Please try with a new email.");
      setAlertType("error");
    }
  }

  return (
    <div className="signup-page">
      <form onSubmit={handleSignup} className="auth-form">
        {/* Display Alert if there is a message */}
        {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )}

        <input 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email" 
        />
        <br />
        <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password" 
        />
        <br />
        <button type="submit">Sign up</button>
        <br />
        Already Have an Account <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Signup;

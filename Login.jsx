import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.scss';  // Import the specific SCSS file for Login page

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            navigate("/home");
            console.log(user);
        } catch (error) {
            setErrorMessage("Incorrect email or password."); // Set error message
            console.log(error);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={handleLogin} className="auth-form">
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
                <button type="submit">Login</button>
                <br />
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                <br />
                Don't have an account?
                <Link to="/signup">Signup</Link>
            </form>
        </div>
    );
};

export default Login;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        // If not logged in, redirect to login page
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.log('Logout Error:', error);
    }
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome to the Home Page!</h1>
        <p>You are logged in as: <strong>{userEmail}</strong></p>
        <p>Your authentication is secured with Firebase.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;

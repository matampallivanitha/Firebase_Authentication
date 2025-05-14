import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./FirebaseAuth/Signup";
import Login from "./FirebaseAuth/Login";
import Home from "./FirebaseAuth/Home";

const App = () => {
  return (
    <div>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/signup" element={<Signup />} />
           </Routes>
        </BrowserRouter>
    </div>
  );
};
   
export default App;
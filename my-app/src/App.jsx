//
//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
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from "./Components/Home/Navbar";
import HomeContent from "./Components/Home/HomeContent";
import Profile from "./Components/Profile/Profile.jsx";
import Login from "./Components/Home/Loging Page/Login.js";
import Log from "./Components/Home/Loging Page/Log.js";
import Registration from "./Components/Home/Loging Page/Registration/Register.js";
import About from "./Components/About/About.js";
import Dashboard from "./Components/About/NutritionBoard/Dashboard.jsx";
import Subscription from "./Components/Subscription/Subscription.js";
export default function App() {
  const[isUserLoggedIn,SetuserLoggedIn]=useState(false);
  const[log,Setlog]=useState("Login/Register");
  useEffect(()=>{
    const Checksession=async()=>{
          try{
             const res= await fetch("http://localhost:8080/checkSession",{
              credentials: 'include'
             });
             if(res.status==200){
              SetuserLoggedIn(true);
             }
             else{
              SetuserLoggedIn(false);
             }
          }
          catch(error){
              console.log("Error during checking session",error);
          }
    };
    Checksession();
  },[])
  return (
    <>
    <Navbar log={log} isUserLoggedIn={isUserLoggedIn} Setlog={Setlog}/>
    <Routes>
      <Route path="/" element={<HomeContent/>} />
      <Route path="/user_profile" element={<Profile/>} />
      <Route path="/login_registration" element={<Login  Setlog={Setlog}/>}/>
      <Route path="/forget_password" element={<Log/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/about_us" element={<About/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/subscription" element={<Subscription/>}/>
    </Routes>
    </>
  );
}

import {Link} from "react-router-dom"
import { useEffect } from "react"
export default function Navbar({log, isUserLoggedIn, Setlog}){
    useEffect(()=>{
        if(isUserLoggedIn){
          Setlog("LogOut");
        }
        else{
            Setlog("Login/Register");
        }
    },[isUserLoggedIn]);
    return(
        <div className="navbar">
             <ul>
                <Link to="/" id="img">WELLNEST</Link>
                <Link to="/">Home</Link>
                <Link to="/dashboard">NuritionDashboard</Link>
                <Link to="/about_us">About Us</Link>
                <Link to="/subscription">Subscription</Link>
                <Link to="/login_registration">{log}</Link>
                <Link to="/user_profile">Profile</Link>
             </ul>
        </div>
    )
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Components/Home/Home.css";
import "./Components/About/About.css";
import "./Components/Profile/Profile.css";
import "./Components/About/NutritionBoard/Dashboard.css";
import "./Components/Subscription/subscription.css"
import { BrowserRouter } from 'react-router-dom';
import "./Components/Home/Loging Page/Registration/Register.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><App/></BrowserRouter>
);

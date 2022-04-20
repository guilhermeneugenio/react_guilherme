import React from "react";
import ListScreen from "./pages/listScreen";
import LandingScreen from "./pages/landingScreen"
import DetailsScreen from "./pages/detailsScreen"
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<LandingScreen/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/questions" element={<ListScreen/>} />

          <Route path="/questions/:id" element={<DetailsScreen/>} />       
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" 
          <Redirect to="/" />*/}
          
        </Routes>
      </Router>
  );
}

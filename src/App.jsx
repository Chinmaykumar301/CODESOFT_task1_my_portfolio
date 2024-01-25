import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes , Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Contact from "./Components/Contact";


export default function App(){
    return(<>
        <Navbar/>
        <Routes> 
            <Route exact path="/" Components={Home}/>
            <Route path="/profile" Components={Profile}/>
            <Route path="/about" Components={About}/>
            <Route path="/contact" Components={Contact}/>
            <Route path="*" Components={Home}/>
        </Routes>
        <footer>Copyright © www.myPortfolio.com | All rights reserve!</footer>
    </>)
}
import React, { Component } from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './home';
import LoginSignup from './login';
import Map from './map.js'
import PassMain from './main';
import DriverLogin from './DriverLogin';
import Contact from './contact';
import About from './About';
function Routing() {
    return ( 
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginSignup/>}/>
                <Route path="/main" element={<Map/>}/>
                <Route path="/pass" element={<PassMain/>}/>
                <Route path="/drive" element={<DriverLogin/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>


                
            </Routes>
        </Router>
        </>
     );
}

export default Routing;

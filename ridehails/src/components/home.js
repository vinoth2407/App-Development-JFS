import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css';
import imgs from '../assests/pass.png'
import './nav.css';
import { render } from '@testing-library/react';
import Nav from './nav.js'
import Footer from './footer';
import driver from'../assests/driver.mp4';
import Blog from './details';
import Driv from './driverDetails';
import HomePage from './Gif';

function Home() {

    const navigate=useNavigate('');
    const PasLogin = ()=>{
        navigate('/login');
    }
    const driverLogin = ()=>{
        navigate('/drive');
    }
   
    return ( 
        <>
        <Nav/>
        <div className='ele'>

                <h1>"Effortless Transportation at your Fingertips."</h1>
                <video className='videoTag' autoPlay loop muted>
                    <source src={driver} type='video/mp4' />
                </video>
            <div class="card" style={{width: '18rem',marginTop: '-37rem',marginLeft:'15rem'}}>
            <div class="card-body">
                <img src={imgs} alt='img'/>
                
              <button type='button' class='btn btn-primary pd' onClick={PasLogin}> Passenger Login</button>
            </div>
            </div>
            <div class="card" style={{width: '18rem',marginTop: '-22rem',marginLeft:'56rem'}}>
            <div class="card-body">
                <img src={imgs} alt='img'/>
                
              <button type='button' class='btn btn-danger pd' onClick={driverLogin}>Driver Login</button>
            </div>
            </div>
        
        </div>
        <HomePage/>
        <Blog/>
        <Driv/>
        <Footer/>
        </>
     );
}

export default Home;
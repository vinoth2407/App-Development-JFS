import React, { useState } from 'react';
import './login.css';
import book from '../assests/dri.mp4'
import Nav from './nav';
import Footer from './footer';

const DriverLogin = () => {
  const [loginStyle, setLoginStyle] = useState({ left: '50px' });
  const [signupStyle, setSignupStyle] = useState({ left: '450px' });
  const [buttonStyle, setButtonStyle] = useState({ left: '0px' });  const login = () => {
  

    setLoginStyle({ left: '50px' });
    setSignupStyle({ left: '450px' });
    setButtonStyle({ left: '0px' });
  };

  const signup = () => {
    setLoginStyle({ left: '-400px' });
    setSignupStyle({ left: '50px' });
    setButtonStyle({ left: '110px' });
  };

  return (
  <>
  
  <Nav/>
  <div className='vino1'>
      <video className='videott' autoPlay loop muted>
            <source src={book} type='video/mp4' />
      </video>
      </div>
  <div className='ff'>
    
   
    <div className="hero">
      <div className="form-box">
        <div className="button-box" >
          <div id="btn" style={buttonStyle}></div>
          <button type="button" className="toggle-btn" onClick={login}>
            Login
          </button>
          <button type="button" className="toggle-btn" onClick={signup}>
            Signup
          </button>
        </div>
        {/* <div className="social-icons">
          <img
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          alt="facebook"
          />
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="instagram"
          />
          <img
          src="https://cdn-icons-png.flaticon.com/512/226/226235.png?w=1380&t=st=1688971677~exp=1688972277~hmac=2b9e25f6f950f7f5b49a891cd1e85f2f730aad8cc6db07e93f2158a48f966402"
          alt="twitter"
          />
        </div> */}
        <form style={loginStyle} className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            required
            />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
            />
          <button type="submit" className="submit-btn" onClick={login}>
            Log in
          </button>
        </form>
        <form style={signupStyle} className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            required
            />
          <input
            type="email"
            className="input-field"
            placeholder="Email Id"
            required
            />
          <input
            type="tel"
            className="input-field"
            placeholder="Phone Number"
            required
            />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
            />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            required
            />
            <input
            type="text"
            className="input-field"
            placeholder="Driver License Number"
            required
            />
             <input
            type="text"
            className="input-field"
            placeholder="Vehicle model"
            required
            />
          <button type="submit" className="submit-btn" onClick={signup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  </div>
         <Footer/>   
      </>
  );
};

export default DriverLogin;

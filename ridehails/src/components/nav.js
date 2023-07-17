import React from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';
import icon from '../assests/logo.gif'
function Nav() {
  const navigate = useNavigate('');
  const routeHome = () =>{
      navigate('/');
  }
  const routeMain = () =>{
    navigate('/main');
}
const routeContact = () =>{
  navigate('/contact');
}
const routeAbout = () =>{
  navigate('/about');
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <div className='is'>
        <img src={icon} width={60}/>
          <h6>EasyGo</h6>
        </div>
        <div className='ll3'>

        <ul className="navbar-nav">
       

          <li className="nav-item active rr">
            <a className="nav-link ll" href="#" onClick={routeHome}>
              HOME 
            </a>
          </li>
          
          <li className="nav-item rr">
            <a className="nav-link ll" href="#" onClick={routeContact}>
              CONTACT US
            </a>
          </li>
          <li className="nav-item rr">
            <a className="nav-link ll" href="#" onClick={routeAbout}>
              ABOUT US
            </a>
          </li>
        </ul>
        
        </div>
      </div>
    </nav>
  );
}

export default Nav;

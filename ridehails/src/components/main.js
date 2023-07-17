import React from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';
import icon from '../assests/logo.gif'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../Features/features';
function PassMain() {
  const navigate = useNavigate('');
  const routeHome = () =>{
      navigate('/');
  }
  const routeMain = () =>{
    navigate('/main');
}
const user = useSelector(selectUser);

  return (
  <>
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav ml-auto ">
        <li className="nav-item active ic">
           <img src={icon}/>
          </li>

          <li className="nav-item active rr">
            <a className="nav-link ll" href="#" onClick={routeHome}>
              HOME 
            </a>
          </li>
          <li className="nav-item active rr">
            <a className="nav-link ll" href="#" onClick={routeMain}>
              BOOK A RIDE 
            </a>
          </li>
          
          <li className="nav-item rr">
            <a className="nav-link ll" href="/contact">
              CONTACT US
            </a>
          </li>
          
        </ul>
        <div className="pix">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <a className="nav-link ll2">{
                user.username
              }</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
    </>

  );
}

export default PassMain;

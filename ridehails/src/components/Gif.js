import React from "react";
import './gif.css'
import animation from '../assests/giff.mp4'
import Button from '@mui/material/Button';



function HomePage() {
 
    return ( 

        <>
        <div className="splitscreen">
        <div className="toppane">
        <h1 className="h1">"Welcome to EasyGo"</h1>

<h2 className="h2">Welcome to our revolutionary ride-hailing application! We are thrilled to introduce a convenient and efficient way for you to navigate the bustling streets with ease. Whether you're commuting to work, heading out for a night on the town, or simply need a quick ride to your desired destination, our platform is designed to make transportation seamless and stress-free..</h2>
  <div className="getstarted">
  {/* <Button variant="contained" color="success" className="homebutton" >
        Get Started 
      </Button> */}

  </div>
        </div>
        <div className="bottompane">
        <video className='videoTd' autoPlay loop muted>
           <source src={animation} type='video/mp4' />
      </video>
        </div>
      </div>
      
        
        </>
     );
}

export default HomePage;
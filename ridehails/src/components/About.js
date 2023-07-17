import React from "react";
import pro from "../assests/us.jpeg";
import "./About.css"
import Nav from "./nav";
function About() {
  return (
    <>
    <Nav/>
    <div className="img_wrrap">
        </div>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${pro})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p className="Abt_cont">

        Welcome to EasyGo, where convenience meets transportation. We strive to provide a seamless and reliable platform that connects passengers with trusted drivers, ensuring comfortable and efficient travel experiences. Here's some information about us:

    Our Mission:
    At our ride-hailing website, our mission is to revolutionize the way people travel by offering a safe, convenient, and affordable transportation solution. We aim to enhance mobility, reduce traffic congestion, and contribute to sustainable urban transportation.
                    </p>
      </div>
    </div>
    
    </>
  );
}

export default About;
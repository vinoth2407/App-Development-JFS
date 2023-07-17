import React from "react"
import "./footer.css";
import {AiFillFacebook, AiOutlineTwitter,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';



const Footer = () => {
  
  return (
    <>
    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">We do not store passwords you employ when accessing third-party services. When you permit us to connect with any third-party service, for example, a social media account or another comparable one, you allow us to access and store your email address(es), current location, profile photo, URL, and other information the third-party service gives us access to. You also authorize us to use and disclose it in accordance with their privacy policy. So, we recommend you check your privacy settings on these third-party services to understand the information sent to us through these services and change those privacy setting if needed. We transmit and sometimes store, such account data, only if we must, to get in touch with you, and only as the policies and terms of the third-party services allow.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>COMPANY</h6>
            <ul class="footer-links">
              <li><a href="About WinGo">About EasyGo</a></li>
              <li><a href="Security">Security</a></li>
              <li><a href="Careers">Careers</a></li>
              <li><a href="Contact Us">Contact Us</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="About Us">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by EasyGO Inc
         
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><AiFillFacebook/></a></li>
              <li><a class="twitter" href="#"><AiOutlineTwitter/></a></li>
              <li><a class="Instagram" href="#"><AiFillInstagram/></a></li>
              <li><a class="linkedin" href="#"><AiFillLinkedin/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  );
}
export default Footer;
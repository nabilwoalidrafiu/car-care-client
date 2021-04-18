import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        // <div>
              <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">carcare.com <i>Lorem ipsum dolor sit</i>, amet consectetur adipisicing elit. Quidem perferendis aliquid fuga quisquam, ea at eum unde debitis similique laudantium repellat, numquam impedit tenetur modi? Facilis nihil cumque labore cupiditate nesciunt laboriosam molestias, omnis tenetur quia atque dolorum, nisi ratione?</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Appliances</a></li>
              <li><a href="#">Baby and Kids</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Digital Lab</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        {/* <hr> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> car_care</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FontAwesomeIcon className="brand-icon" icon={faFacebook} /></a></li>
              <li><a className="twitter" href="#"><FontAwesomeIcon className="brand-icon" icon={faTwitterSquare} /></a></li>
              <li><a className="dribbble" href="#"><FontAwesomeIcon className="brand-icon" icon={faInstagram} /></a></li>   
            </ul>
            
          </div>
        </div>
      </div>
</footer>
</>
        // </div> 
    );
};

export default Footer;
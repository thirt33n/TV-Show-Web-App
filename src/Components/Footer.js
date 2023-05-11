import React from 'react';
import './SearchBar.css';

function Footer() {
  return (
    <footer className="footer">
     
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4>About Us</h4>
            <p>We love movies and Shows</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <h4>Contact Us</h4>
            <a style={{color:'white',}}  href='https://github.com/thirt33n'>Github</a>
            <p>Phone: 555-555-5555</p>
            <a style={{color:'white',}}  href='mailto:siddharth.pradeepofficial@gmail.com'>Email</a>
          </div>
      
      </div>
    </footer>
  );
}

export default Footer;

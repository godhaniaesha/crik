import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Company Section */}
        <div className="footer-column footer-company">
          <h3>Company</h3>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
        </div>

        {/* View Website Section */}
        <div className="footer-column footer-language">
          <h3>View Website in</h3>
          <div className="language-selector">English</div>
        </div>

        {/* Need Help Section */}
        <div className="footer-column footer-help">
          <h3>Need Help?</h3>
          <a href="#help-center">Visit Help Center</a>
          <a href="#feedback">Share Feedback</a>
        </div>

        {/* Connect Section */}
        <div className="footer-column footer-connect">
          <h3>Connect with Us</h3>
          <div className="connect-icons">
            <a href="#facebook" className="social-icon" title="Facebook">
              <i className="fab fa-facebook-f">f</i>
            </a>
            <a href="#twitter" className="social-icon" title="Twitter">
              <i className="fab fa-twitter">𝕏</i>
            </a>
          </div>
          <div className='text-dark'> .</div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 CRICK. All Rights Reserved.
        </div>

        <div className="footer-links">
          <a href="#terms">Terms Of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#faq">FAQ</a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;

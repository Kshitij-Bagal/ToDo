import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_div">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} KB-DEV. All Rights Reserved.
        </p>
        <div className="mb-0">
          <Link to="/terms">Terms of Service</Link>
          <span> | </span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

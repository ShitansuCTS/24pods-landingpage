import logo from "../assets/images/24Pods-Logo.webp";
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftrwrap footer-logo">
         {/* LOGO */}
          <div className="ftrbrand">
            <a href="#top" className="ftrlogo">
               <img src={logo} alt="24Pods Logo" className="logo-img" />
            </a>
          </div>

        <div className="ftrtop">

          {/* LOCATION */}
          <div className="ftrinfo">
            <h4>Location</h4>
            <p><i className="fa-solid fa-location-dot"></i> Sydney, NSW, Australia</p>
          </div>

          {/* CONTACT */}
          <div className="ftrinfo">
            <h4>Contact</h4>
            <a href="tel:+61000000000">
              <i className="fa-solid fa-phone"></i> +61 000 000 000
            </a>
          </div>

          {/* SOCIAL */}
          <div className="ftrinfo">
            <h4>Follow Us</h4>

            <div className="ftrsocial">
              <a href="#" className="social-btn">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="ftrbot">
          <p>Copyright © 2026 All rights reserved by <a className="footer-link" href="https://digiware.com.au/">Digiware Digital</a></p>
        </div>

      </div>
    </footer>
  );
}
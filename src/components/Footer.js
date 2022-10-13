import Logo from '../assets/image/logo.png';
import fbLogo from '../assets/image/fb-logo.png';
import twLogo from '../assets/image/tw-logo.png';
import igLogo from '../assets/image/ig-logo.png';
const Footer = () => {
  return(
    <div id="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Logo} alt="logo" />
            <span className="mx-3 fw-bold fs-5">HIKING</span>  
            <p className="mt-3 mb-5">We envision a world where <br /> everyone feels welcome in the <br /> American hiking community.</p>
            <div className="social-media">
              <img src={fbLogo} alt="fb-logo" />
              <img src={twLogo} alt="tw-logo" className="mx-4" />
              <img src={igLogo} alt="ig-logo" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-4">
                <div className="location">
                  <ul>
                    <li className="sub-title-footer fw-semibold">Location</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europa</li>
                    <li>Africa</li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="contact">
                  <ul>
                    <li className="sub-title-footer fw-semibold">Contact</li>
                    <li>About Me</li>
                    <li>Teams</li>
                    <li>Profile</li>
                    <li>FAQ</li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="legal">
                  <ul>
                    <li className="sub-title-footer fw-semibold">Legals</li>
                    <li>Privacy</li>
                    <li>Disclaimer</li>
                    <li>Terms</li>
                    <li>Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>     
        </div>
        <div className="row text-center footer-copyright">
          <p>Copyright &copy; 2022. All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
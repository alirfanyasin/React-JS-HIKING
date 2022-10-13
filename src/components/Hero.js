import {Link} from 'react-router-dom';
import heroImage from '../assets/image/hero-image.png';
const Hero = () => {
  return(
    <div id="hero-section">
      <div className="container">
        <div className="detail-content d-flex">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-semibold">Be prepared for <br />the mountains and beyond</h1>
              <p>Are you looking for amazing hiking <br /> travel? Don’t worry! We got it for you!</p>                 
              <div className="btn-hero mt-5">
                <Link className="btn-custom contact-us" as="button" to="contact">Contact Us</Link>
                {/* <button className="btn contact-us">Contact Us</button> */}
                <button className="btn-custom watch-video">Watch Video</button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <img src={heroImage} alt="" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
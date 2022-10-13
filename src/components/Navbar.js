import {Link} from 'react-router-dom';
import Logo from '../assets/image/logo.png';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo}  alt="Logo" />
          <span className="mx-3 fw-bold fs-5">HIKING</span>  
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="me-auto"></div>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <a className="nav-link" href="#location-section">Location</a>
            <a className="nav-link" href="#blog-section">Blogs</a>
            <a className="nav-link" href="#testimonials-section">Testimonials</a>
            <Link className="nav-link" to="contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
import mailIcon from '../assets/image/mail-icon.png';
const Subscribe = () => {
  return (
    <div id="subscribe-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="fw-semibold">Subscribe to Our Newsletter <br /> For Weekly Article Update.</h2>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col text-center">
            <p>We have hiking-related blog so we can share our thought and rutinity <br /> in our blog that updated weekly. We will not spam you, we promise.</p>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6 d-flex">
            <img src={mailIcon} alt="" className="mail-icon" />
            <input type="text" className="form-control rounded-pill bg-transparent px-5 mr-3" placeholder="Enter your e-mail address"/>
            <button className="btn-custom">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
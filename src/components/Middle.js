import middleImg from '../assets/image/middle-image.png'
const Middle = () => {
  return (
    <div id="middle-section">
      <div className="container d-flex">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={middleImg} alt="image-middle" />
          </div>
          <div className="col-md-6">
            <h1 className="fw-semibold">Safe, <br /> Affordable, And <br /> Trusted</h1>
            <p className="mb-5">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
            <button className="btn-custom contact-us">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle;
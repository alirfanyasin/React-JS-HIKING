import Icon1 from '../assets/image/icon-1.png';
import Icon2 from '../assets/image/icon-2.png';
import Icon3 from '../assets/image/icon-3.png';


const Location = () => {
  return (
    <div id="location-section">
      <div className="container shadow">
        <div className="row">
          <div className="col-md-4">
            <img src={Icon1} alt="icon" className="icon" />
            <h4 className="fw-semibold mt-5">Secret Locations</h4>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" className="text-danger">Read More</a>
          </div>
          <div className="col-md-4">
            <img src={Icon2} alt="icon" className="icon" />
            <h4 className="fw-semibold mt-5">Safe Adventure</h4>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" className="text-danger">Read More</a>
          </div>
          <div className="col-md-4">
            <img src={Icon3} alt="icon" className="icon" />
            <h4 className="fw-semibold mt-5"  >Professional Hikers</h4>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" className="text-danger">Read More</a>
          </div>
        </div>
      </div>
      <div className="text-better-information text-center">
        <p>Don’t hesitate to contact us to get better Information. <span className="text-danger fw-semibold">EXPLORE ALL TREKKING.</span></p>
      </div>
    </div>
  )
}

export default Location;
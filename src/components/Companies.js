import travelAdvisorLogo from "../assets/image/travel-advisor-logo.png";
import unitedTravelLogo from "../assets/image/united-travel-logo.png";
import travelChannelLogo from "../assets/image/travel-channel-logo.png";
import tripraja from "../assets/image/tripraja-logo.png";
import booking from "../assets/image/booking-logo.png";
const Companies = () => {
  return(
    <div id="companies-section">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>Safe Journey</p>
            <h2 className="fw-semibold">Trusted by Big Companies</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly logo-company">
          <div className="col-md-4 mb-5">
              <img src={travelAdvisorLogo} className="travel-advisor" alt="Logo travel advisor" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={unitedTravelLogo} className="united-travel" alt="Logo united travel" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={travelChannelLogo} alt="Logo travel channel" />
          </div>
          <div className="col-md-4 mb-3 mt-5">
            <img src={tripraja} className="tripraja" alt="Logo tripraja" />
          </div>
          <div className="col-md-4 mb-3 mt-5">
            <img src={booking} alt="Logo booking" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies;
import Footer from '../components/Footer';
const Contact = () => {
  return(
    <div id="contact-section">
        <header className="d-flex justify-content-center align-items-center">
            <h1 className="fw-semibold">Contact Us</h1>
        </header>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="input-group mb-3">
                <input type="text" id="username" className="form-control" placeholder="Username" reqiured/>
              </div>
              <div className="input-group mb-3">
                <input type="email" id="email" className="form-control" placeholder="Email Address" reqiured/>
              </div>
              <div className="input-group mb-3">
                <textarea name="message" id="message" className="form-control" cols="30" rows="10" reqiured placeholder="Message"></textarea>
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn-custom">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact;
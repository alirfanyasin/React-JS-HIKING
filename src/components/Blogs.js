import blogImage1 from '../assets/image/blog-image-1.png';
import blogImage2 from '../assets/image/blog-image-2.png';

const Blogs = () => {
  return(
    <div id="blog-section">
      <section className="blog-section-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-semibold">Enjoy Your Life <br /> With Us Now!</h1>
              <p className="mb-5">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
              <button className="btn-custom contact-us">Contact Us</button>
            </div>
            <div className="col-md-6">
              <img src={blogImage1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={blogImage2} alt="" />
            </div>
            <div className="col-md-6">
              <h1 className="fw-semibold">Let’s Enjoy <br /> Nature With Us</h1>
              <p className="mb-5">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
              <button className="btn-custom contact-us">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs;
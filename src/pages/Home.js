import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Middle from '../components/Middle';
import Companies from '../components/Companies';
import Blogs from '../components/Blogs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

const Contact = () => {
  return(
    <div>
      <Hero/>
      <Location/>
      <Middle/>
      <Companies/>
      <Blogs/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Contact;
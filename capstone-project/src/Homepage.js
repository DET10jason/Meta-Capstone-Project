import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials'; // Import here
import Chicago from './Chicago';

function Homepage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials /> 
      <Chicago />
    </>
  );
}

export default Homepage;
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist!
        </p>
        {/* Link component styled to look like your yellow button */}
        <Link to="/booking" className="yellow-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img src="Header.jpg" alt="Mediterranean appetizers" />
      </div>
    </section>
  );
}

export default Hero;
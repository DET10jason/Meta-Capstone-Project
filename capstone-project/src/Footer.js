
function Footer() {
  return (
    <footer>
      <section>
        <div className="footer-logo">
          <img src="/footer-logo.png" alt="Little Lemon logo" />
        </div>

        <nav>
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter-X</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </section>
      
      <div className="footer-copyright">
        <p>© 2024 Little Lemon Restaurant</p>
      </div>
    </footer>
  );
}

export default Footer;
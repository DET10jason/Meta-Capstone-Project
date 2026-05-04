function Testimonials() {
  const reviews = [
    { rating: "5/5", name: "Sara L.", img: "Sara.png", text: "Best salad in Chicago!" },
    { rating: "4/5", name: "Mario R.", img: "Mario.png", text: "Authentic flavors." },
    { rating: "5/5", name: "Adrian M.", img: "Adrian.png", text: "Great atmosphere." },
    { rating: "5/5", name: "Anna P.", img: "Anna.png", text: "The dessert is a must!" }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h1>Testimonials</h1>
        <div className="testimonials-grid">
          {reviews.map((rev, index) => (
            <article key={index} className="testimonial-card">
              <p className="rating">Rating: {rev.rating}</p>
              <div className="reviewer-info">
                <img src={rev.img} alt={rev.name} />
                <p><strong>{rev.name}</strong></p>
              </div>
              <p className="review-text">"{rev.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
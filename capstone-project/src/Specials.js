import { Link } from 'react-router-dom';

function Specials() {
  const meals = [
    { title: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", image: "greeksalad.jpg" },
    { title: "Bruschetta", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", image: "bruschetta.jpg" },
    { title: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is authentic as can be imagined.", image: "lemoncake.png" }
  ];

  return (
    <section className="specials-section" id="menu">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        {/* Updated from button to Link */}
        <Link to="/menu" className="yellow-btn" style={{ textDecoration: 'none' }}>
          Online Menu
        </Link>
      </div>

      <div className="specials-grid">
        {meals.map((meal, index) => (
          <article key={index} className="meal-card">
            <img src={meal.image} alt={meal.title} />
            <div className="card-text">
              <div className="card-title-row">
                <h3>{meal.title}</h3>
                <span className="price">{meal.price}</span>
              </div>
              <p>{meal.description}</p>
              <button className="order-delivery-btn">Order a delivery ➔</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
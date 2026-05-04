function Chicago() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the 
            effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      
      <div className="about-images">
        {/* Top/Right Image */}
        <img className="img-top" src="chef.png" alt="Chef at Little Lemon" />
        {/* Bottom/Left Image */}
        <img className="img-bottom" src="interior.png" alt="Restaurant interior" />
      </div>
    </section>
  );
}

export default Chicago;
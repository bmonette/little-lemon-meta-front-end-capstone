import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to
          pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes
          and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the
          effort to expand the menu beyond classic Italian to incorporate additional cuisines from the 
          Mediterranean region.
        </p>
      </div>
      <div className="chicago-images">
        <div className="image-wrapper top">
          <img src="/assets/restaurant.png" alt="Little Lemon Chicago" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;

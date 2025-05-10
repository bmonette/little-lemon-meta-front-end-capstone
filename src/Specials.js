import './Specials.css';

function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        <article className="special-card">
          <img src="/assets/brochettes.jpg" alt="Souvlakis" />
          <h3>Souvlakis</h3>
          <p>Greek-style skewered and grilled meats, often served with pita, fresh veggies, and a side of tangy tzatziki. Juicy, flavorful, and perfect for a delicious Mediterranean bite!</p>
        </article>
        <article className="special-card">
          <img src="/assets/greek-salad.png" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Our Greek Salad is made with crisp cucumbers, juicy tomatoes, red onions, Kalamata olives, and creamy feta cheese, all tossed in a tangy olive oil and oregano dressing. Simple, healthy and full of flavor!</p>
        </article>
        <article className="special-card">
          <img src="/assets/gyros.png" alt="Gyros" />
          <h3>Gyros</h3>
          <p>Thinly sliced seasoned lamb cooked on a rotating spit, served in warm pita with fresh veggies and creamy tzatziki. Bold, flavorful, and deliciously satisfying!</p>
        </article>
      </div>
    </section>
  );
}

export default Specials;
import './CustomersSay.css';

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        <article className="testimonial-card">
          <img src="/assets/customer1.png" alt="Sophia" />
          <h3>Sophia</h3>
          <p>"Best Mediterranean food I’ve ever had! The staff were incredibly friendly and the service was fast."</p>
          <div className="stars">★★★★★</div>
        </article>
        <article className="testimonial-card">
          <img src="/assets/customer2.png" alt="James" />
          <h3>James</h3>
          <p>"Absolutely loved the Greek salad! Super fresh and perfectly dressed. I’ll be back again soon!"</p>
          <div className="stars">★★★★★</div>
        </article>
        <article className="testimonial-card">
          <img src="/assets/customer3.png" alt="Emily" />
          <h3>Emily</h3>
          <p>"Chic vibes, great food, and a cozy atmosphere. It’s my new favorite spot for weekend dinners!"</p>
          <div className="stars">★★★★★</div>
        </article>
      </div>
    </section>
  );
}

export default CustomersSay;

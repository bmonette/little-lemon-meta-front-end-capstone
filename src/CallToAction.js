import { useNavigate } from 'react-router-dom';
import './CallToAction.css';

function CallToAction() {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate('/booking');
    }
    return (
      <section id="hero_image">
        <div className="container">
          <div className="hero_text">
            <h1>Little Lemon</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={handleReserveClick}>Reserve a Table</button>
          </div>
        </div>
      </section>
    );
}
  
export default CallToAction;
  
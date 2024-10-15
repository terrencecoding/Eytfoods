import { Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Enjoy your <span>coffee</span> before your activity
        </h1>
        <p className="hero-description">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="hero-button">
          <Button>
            <p>Order now</p>

            <div className="cart-icon">
              <img src="./img/cart_icon.png" alt="" />
            </div>
          </Button>
          <p className="hero-menu">More menu</p>
        </div>
      </div>
      <div>
        <img className="img-hero" src="./img/img-hero.png" />
      </div>
    </div>
  );
}

export default Hero;

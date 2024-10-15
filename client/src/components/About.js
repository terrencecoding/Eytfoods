const About = () => {
  return (
    <div className="about-container">
      <img src="./img/bg-image.png" alt="" className="about-bg" />
      <div className="about-items">
        <div className="img-item">
          <img src="./img/coffee-mug.png" alt="" className="coffee-mug" />
        </div>
        <div className="about-us-item">
          <h4 className="about-title">About us</h4>
          <h5>We provide quality coffee, and ready to deliver.</h5>
          <p>
            We are a company that makes and distributes delicous drinks. Our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
          <div className="about-button">
            <p>Get your coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

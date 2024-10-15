const CustomerReviews = () => {
  return (
    <div className="customer-container">
      <img src="./img/bg-image.png" alt="" className="bg-image" />
      <div>
        <div className="customer-description">
          <h4>What they say about us?</h4>
          <p>
            We always provide the best service and always amintain the quality
            of coffee.
          </p>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <img src="./img/testimonial_1.png" alt="" />
            <div className="outer">
              <div className="testimonial">
                <h6>Naura</h6>
                <p>I really love the cappucino, the coffee was very smooth</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <img src="./img/testimonial_2.png" alt="" />
            <div className="outer">
              <div className="testimonial">
                <h6>John</h6>
                <p>This coffee shop is very convenient</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <img src="./img/testimonial_3.png" alt="" />
            <div className="outer">
              <div className="testimonial">
                <h6>Azura</h6>
                <p>The coffee menu here has a variety of choices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

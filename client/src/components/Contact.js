function Contact() {
  return (
    <div className="contact-container">
      <div className="alt-contact-container">
        <h2 className="montserrat">Other ways to connect</h2>
        <p>
          We'd love to hear from you. Our friendly team is always here to chat.
        </p>
        <div className="diff-contact-container">
          <div>
            <h3 className="montserrat">
              <img src="./img/chat_bubbles.png" alt="" />
              Reach us on email
            </h3>
            <p>Our friendly team is here to help.</p>
            <p className="blue">
              <a href="mailto:dungle.eyt@gmail.com">dungle.eyt@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="montserrat">
              <img src="./img/phone.png" alt="" />
              Phone
            </h3>
            <p>Mon-Fri from 8am to 5pm.</p>
            <p className="blue">+1 (714) 975-3566</p>
            <p className="blue">+1 (657) 758-6105</p>
          </div>
          <div>
            <h3 className="montserrat">
              <img src="./img/location.png" alt="" />
              Office
            </h3>
            <p>Come say hellow at our office HQ.</p>
            <p className="blue">13811 West St, Garden Grove, CA 92843</p>
          </div>
        </div>
      </div>
      <div className="email-container">
        <h1 className="montserrat">Love to hear from you, Get in touch. 👋</h1>
        <div className="contact-info-container">
          <div className="name-and-email">
            <div className="customer-name">
              <label>Your Name</label>
              <input
                type="text"
                className="input-size input-bg-color no-border"
              />
            </div>
            <div className="customer-email">
              <label>Your Email</label>
              <input
                type="email"
                className="input-size input-bg-color no-border"
              />
            </div>
          </div>
          <div className="customer-phone">
            <label>Phone No.</label>
            <input
              type="phone"
              className="input-size input-bg-color no-border"
            />
          </div>
          <div className="customer-message">
            <label>Message</label>
            <textarea type="message" className="input-bg-color no-border" />
          </div>
          <div className="message-button">
            <button>Send message ↗</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

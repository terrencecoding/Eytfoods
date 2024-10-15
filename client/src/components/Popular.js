function Popular() {
  return (
    <div className="popular-section">
      <h3 className="popular-title">Popular Now</h3>
      <div className="popular-container">
        <img className="popular-bg" src="./img/Rectangle_2.png" />
        <div className="popular-img-container">
          <div className="product-item-container">
            <div className="inner-rectangle">
              <img className="popular-coffee-1" src="./img/img_product_1.png" />
              <div className="item-info">
                <div className="info-container">
                  <h4>Vanilla Latte</h4>
                  <div className="temp">
                    <p className="hot-active">Hot</p>
                    <p className="cold">Cold</p>
                  </div>
                </div>
                <div className="left-info">
                  <p className="price">$11</p>
                  <div className="cart-button">
                    <img src="./img/cart_icon.png" alt="" className="cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-item-container">
            <div className="inner-rectangle">
              <img className="popular-coffee-2" src="./img/img_product_2.png" />
              <div className="item-info">
                <div className="info-container">
                  <h4>Espresso</h4>
                  <div className="temp">
                    <p className="hot">Hot</p>
                    <p className="cold">Cold</p>
                  </div>
                </div>
                <div className="left-info">
                  <p className="price">$11</p>
                  <div className="cart-button">
                    <img src="./img/cart_icon.png" alt="" className="cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-item-container">
            <div className="inner-rectangle">
              <img className="popular-coffee-3" src="./img/img_product_3.png" />
              <div className="item-info">
                <div className="info-container">
                  <h4>Hazelnut Latte</h4>
                  <div className="temp">
                    <p className="hot">Hot</p>
                    <p className="cold">Cold</p>
                  </div>
                </div>
                <div className="left-info">
                  <p className="price">$11</p>
                  <div className="cart-button">
                    <img src="./img/cart_icon.png" alt="" className="cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;

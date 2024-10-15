function Product() {
  return (
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
  );
}

export default Product;

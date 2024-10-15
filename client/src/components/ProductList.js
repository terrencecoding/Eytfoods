import Product from "./Product";

function ProductList() {
  return (
    <div className="product-container">
      <h4 className="product-list-title">Special menu for you</h4>
      <div className="product-list-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductList;

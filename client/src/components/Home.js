import About from "./About";
import CustomerReviews from "./CustomerReviews";
import Hero from "./Hero";
import Popular from "./Popular";
import ProductList from "./ProductList";
import Service from "./Service";
import Subscription from "./Subscription";

function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Service />
      <About />
      <ProductList />
      <CustomerReviews />
      <Subscription />
    </div>
  );
}

export default Home;

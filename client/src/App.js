import Header from "./components/Header";

// import Hero from "./components/Hero";
// import Popular from "./components/Popular";
// import Service from "./components/Service";
// import About from "./components/About";
// import ProductList from "./components/ProductList";
// import CustomerReviews from "./components/CustomerReviews";
// import Subscription from "./components/Subscription";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop"; 
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="page-bg">
      <div className="container">
        <Header className="coffee-bg" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* duplicates from Home route */}
        {/* <Hero />
        <Popular />
        <Service />
        <About />
        <ProductList />
        <CustomerReviews />
        <Subscription /> */}
      </div>
    </div>
  );
}

export default App;

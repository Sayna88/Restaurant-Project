import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltoTop/ScrollToTop";
import Order from "./components/pages/order/Order";
import Article from "./components/pages/article/Article";
import MenuSelection from "./components/pages/menuSelection/MenuSelection";
import RestaurantMenu from "./components/pages/restaurantMenu/RestaurantMenu";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/menu-selection" element={<MenuSelection />} />
          <Route path="/order/restaurant" element={<RestaurantMenu />} />

        </Routes>

        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Navbar } from "./component/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { LoginSignup } from "./pages/LoginSignup";
import { Shop } from "./pages/Shop";
import { Footer } from "./component/Footer/Footer";
import men_banner from "./assets/banner.jpg";
import women from "./assets/women_banner.avif";
import kids_banner from "./assets/kids_banner.jpg"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner}  category="kid" />}
          />
          <Route path="/product" element={<Product category="product" />} />
          <Route path="/product/:productId" element={<Product category="product" />} />
          <Route path="cart" element={<Cart category="cart" />} />
          <Route path="login" element={<LoginSignup category="login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App

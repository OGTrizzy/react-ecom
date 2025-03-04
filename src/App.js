import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.js";
import Homepage from "./pages/homePage.js";
import ProductPage from "./pages/productPage.js";
import CartPage from "./pages/cartPage.js";
import CheckoutPage from "./pages/checkoutPage.js";
import CheckoutSuccessPage from "./pages/checkoutSuccessPage.js";
import ContactPage from "./pages/contactPage.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

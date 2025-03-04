import { useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext.js";
import { Link } from "react-router-dom";
import "./../styles/checkoutSuccessPage.css";

const CheckoutSuccessPage = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div className="checkout-success">
      <h1>Thank you for your purchase! 🎉</h1>
      <p>Your order was successful.</p>
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;

import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/checkoutPage.css";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout}>Confirm Purchase</button>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default CheckoutPage;

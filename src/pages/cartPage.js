import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import { Link } from "react-router-dom";
import "./../styles/cartPage.css";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go shopping</Link>
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.title} />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p>
                    ${item.discountedPrice} x {item.quantity}
                  </p>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                    <button
                      className="remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;

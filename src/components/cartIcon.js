import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <ShoppingCart size={24} />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;

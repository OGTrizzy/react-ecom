import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext.js";
import "./../styles/productPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (!product) return <p>Loading...</p>;

  const discount = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100
  );

  return (
    <div className="product-page">
      <img src={product.imageUrl} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="price">
        {product.discountedPrice < product.price ? (
          <>
            <span className="old-price">${product.price}</span>{" "}
            <span className="new-price">${product.discountedPrice}</span>{" "}
            <span className="discount">-{discount}%</span>
          </>
        ) : (
          `$${product.price}`
        )}
      </p>
      <button onClick={addToCart}>Add to Cart</button>

      <h3>Reviews:</h3>
      {product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index} className="review">
            <strong>{review.username}</strong>: {review.description} ⭐
            {review.rating}
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

export default ProductPage;

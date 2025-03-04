import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/homePage.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="homepage">
      <h1>Our Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img
                  src={
                    product.image?.url !== "string"
                      ? product.image.url
                      : "/img/missing-img.jpg"
                  }
                  alt={product.image?.alt || "Product image"}
                />

                <h3>{product.title}</h3>
                <p className="price">
                  {product.discountedPrice < product.price ? (
                    <>
                      <span className="old-price">${product.price}</span>{" "}
                      <span className="new-price">
                        ${product.discountedPrice}
                      </span>
                    </>
                  ) : (
                    `$${product.price}`
                  )}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;

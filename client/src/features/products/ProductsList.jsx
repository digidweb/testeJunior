import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
          const response = await fetch(API_URL);
          if (response.ok) {
              const json = await response.json();
              setProducts(json);
          } else {
              throw response;
          }
      } catch (e) {
          setError("Ocorreu um erro. Estranho...");
          console.log("Ocorreu um erro:", e);
      } finally {
          setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <h4>{product.stock_quantity}</h4>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;

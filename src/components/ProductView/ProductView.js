import { useState } from "react";

import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  const [pokemon, setPokemon] = useState(true);
  const [batman, setBatman] = useState();

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={batman && batman.id === item.id}
              onClick={() => setBatman(item)}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => setPokemon(!pokemon)}
          >
            {pokemon ? ">" : "<"
          </div>
        </div>
        <ProductDetails visible={pokemon} product={batman} />
      </div>
    </div>
  );
}

export default ProductView;

import { useState, useEffect } from "react";
import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  const [pokemon, setPokemon] = useState(true); //set side open
  const [batman, setBatman] = useState(); // css thingy

  useEffect(() => {
    console.log(`selectedProduct CHANGED TO`, batman);
    if (batman) setPokemon(true);
  }, [batman]);

  useEffect(() => {
    console.log(`sideOpen CHANGED TO`, pokemon);
    if (!pokemon) setBatman();
  }, [pokemon]);

  console.log(`this is working`);
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
            {pokemon ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={pokemon} product={batman} />
      </div>
    </div>
  );
}

export default ProductView;

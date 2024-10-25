import React from "react";
import ProductCard from "../ProductCard/ProductCard";


function HotCollection() {
  return (
    <div className="new-main-container py-16">
      <div className="secound">
        <p className="sub font-extralight text-center uppercase">all time</p>
        <p className="collection-title font-extralight text-center pb-8">
          Hot collection
        </p>
        <div className="list">
          <ProductCard
            image={"/upload/main_product.webp"}
            availability={"Out Of Stock"}
            price={"$100"}
            disprice={"$120"}
            description={"Anthurium king of spades x silver blush"}
          />
          <ProductCard
            image={"/upload/main_product.webp"}
            availability={"Out Of Stock"}
            price={"$100"}
            disprice={"$120"}
            description={"Anthurium king of spades x silver blush"}
          />
          <ProductCard
            image={"/upload/main_product.webp"}
            availability={"Out Of Stock"}
            price={"$100"}
            disprice={"$120"}
            description={"Anthurium king of spades x silver blush"}
          />
          <ProductCard
            image={"/upload/main_product.webp"}
            availability={"Out Of Stock"}
            price={"$100"}
            disprice={"$120"}
            description={"Anthurium king of spades x silver blush"}
          />
        </div>
      </div>
    </div>
  );
}

export default HotCollection;

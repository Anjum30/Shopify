import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { BredCrums } from "../component/BredCrums/BredCrums";
import { ProductDisplay } from "../component/ProductDisplay/ProductDisplay";
import { Description } from "../component/Description/Description";
import { RelatedProduct } from "../component/RelatedProducts/RelatedProduct";

export const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct/>
    </div>
  );
};

import { useEffect, useRef } from "react";
import Product from "./Product";

export default function Products({ products, setProducts }) {
  const productListHeader = useRef();

  useEffect(() => {
    if (products.length < 1) productListHeader.current.style.display = "none";
    else productListHeader.current.style.display = "block";
  }, [products]);

  return (
    <div className="products-wrapper">
      <h2 ref={productListHeader}>Productos</h2>
      {products && products.map((product, i) => (
        <Product
          key={`p${i}`}
          product={product}
          products={products}
          setProducts={setProducts}
        />
      ))}
    </div>
  );
}

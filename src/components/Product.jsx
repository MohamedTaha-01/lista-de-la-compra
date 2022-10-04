export default function Product({ product, products, setProducts }) {
  const crossProduct = (productId) => {
    setProducts(
      products.map((product, i) => {
        if (product.id === productId)
          return {
            ...product,
            isCrossed: !product.isCrossed,
          };
        else return product;
      })
    );
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="product">
      <p
        className={product.isCrossed ? "crossed" : ""}
        onClick={() => {
          crossProduct(product.id);
        }}
      >
        {product.quantity} x {product.name}
      </p>
      <button
        value={product.name}
        className="btn-margin"
        onClick={() => {
          deleteProduct(product.id);
        }}
      >
        x
      </button>
    </div>
  );
}

import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  products,
  setProducts,
  toggleDeleteAllModal,
}) {
  const [productInput, setProductInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const productInputRef = useRef();
  const quantityInputRef = useRef();

  const onChangeInput = (e) => {
    setProductInput(e.target.value);
  };

  const onChangeInput2 = (e) => {
    setQuantityInput(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();
    if(productInput ==='' || isNaN(parseInt(quantityInput))) return false;
    const newProduct = {
      id: uuidv4(),
      name: productInput.charAt(0).toUpperCase() + productInput.slice(1),
      quantity: quantityInput,
      isCrossed: false
    };
    setProducts((products) => [...products, newProduct]);
    setProductInput("");
    productInputRef.current.focus();
  };

  return (
    <form className="form-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Añadir producto..."
          onChange={onChangeInput}
          value={productInput}
          tabIndex="1"
          ref={productInputRef}
          required
        />
        <input
          type="number"
          placeholder="Añadir cantidad..."
          onChange={onChangeInput2}
          value={quantityInput}
          tabIndex="2"
          ref={quantityInputRef}
          required
        />
      </div>
      <div className="button-wrapper">
        <button onClick={addProduct} className="btn-margin">
          Añadir producto
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleDeleteAllModal();
          }}
          className="btn-margin"
        >
          Eliminar todos los productos
        </button>
      </div>
    </form>
  );
}

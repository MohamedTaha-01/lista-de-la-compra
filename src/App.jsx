import { useState, useEffect } from 'react';
import Form from './components/Form';
import Products from './components/Products';
import DeleteAllModal from './components/DeleteAllModal';

function App() {

  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(storedProducts);
  const [deleteAllModal, setDeleteAllModal] = useState(false);

  const toggleDeleteAllModal = () => setDeleteAllModal(!deleteAllModal);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products])
  
  return (
    <div className="App">
      <div className='list-wrapper'>
        <h1>Lista de la compra</h1>
        <Form products={products} setProducts={setProducts} toggleDeleteAllModal={toggleDeleteAllModal} />
        <Products products={products} setProducts={setProducts} />
      </div>

      {deleteAllModal && ( <DeleteAllModal setProducts={setProducts} toggleDeleteAllModal={toggleDeleteAllModal} />)}
    </div>
  );
}

export default App;

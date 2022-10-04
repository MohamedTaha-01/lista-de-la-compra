export default function DeleteAllModal({setProducts, toggleDeleteAllModal}){

    const deleteAllProducts = () => setProducts([]);

    return(
        <div className="delete-all-overlay">
            <div className="delete-all-modal">
                <div>
                    <h3>BORRAR LISTA</h3>
                    <p>¿Seguro que quieres eliminar todos los productos?</p>
                </div>
                <div>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        deleteAllProducts();
                        toggleDeleteAllModal();
                    }}>Si</button>
                    <button className="btn-margin" onClick={(e)=>{
                        e.preventDefault();
                        toggleDeleteAllModal();
                    }}>No</button>
                </div>
            </div>
        </div>
    )
}
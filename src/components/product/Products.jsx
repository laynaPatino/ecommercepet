import {useState} from 'react';
import './products.scss';

const Products = ({nameProduct, precio}) => {
    const [counter, setCounter] = useState(0);

    const decreaseCounter = () => {
        if(counter >= 1) {
            setCounter(counter - 1);
        }
    }

    const addProduct = () => {
        alert(`Tienes ${counter} productos en el carrito`);
    }

    return (
        <article className="productCard">
            <img src="https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg" alt="Imagen de producto" width="300"/>
            <div>
                <h3>{nameProduct}</h3>
                <div className="counter">
                    <button 
                        disabled={counter === 0 ? 'disabled' : null } 
                        onClick={decreaseCounter}
                    >
                        -
                    </button>
                    <input type="text" value={counter} readOnly/>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                </div>
                <h4>${precio}</h4>
                <button onClick={addProduct} className='addButton'>Agregar al carrito</button>
            </div>
        </article>
    )
}

export default Products;
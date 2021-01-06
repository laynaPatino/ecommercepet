import {useState} from 'react';
import { useHistory } from "react-router-dom";

const ProductDetail = ({product}) => {
    const [counter, setCounter] = useState(0);
    let history = useHistory();

    const decreaseCounter = () => {
        if(counter >= 1) {
            setCounter(counter - 1);
        }
    }

    const handleClickAddProduct = () => {
        alert(`Tienes ${counter} productos en el carrito`);
        history.push("/cart");
 
    }

    return (
        <article className="container">
            <div className="container_img">
                <img src={product.img} alt="Imagen de producto" width="400" />  
            </div>
            <div className="container_div">
                <h1>{product.nombre}</h1>
                <div>
                    <h4>Detalles del Producto</h4>
                    <p>
                        {product.descrip}
                    </p>
                    <h4>Color</h4>
                    <p>{product.color}</p>
                </div>
                <div>
                    <h4>Precio</h4>
                    <p>${product.precio}</p>
                </div>
               
            </div>
            <div className="container_precio">
                <h3>Precio</h3>
                <h2>${product.precio}</h2>
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
                <button onClick={handleClickAddProduct} className='addButton'>Agregar al Carrito</button>
            </div>
        </article>
    )
}

export default ProductDetail
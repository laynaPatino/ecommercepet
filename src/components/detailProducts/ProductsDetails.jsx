import {useState, useContext} from 'react';
import {Store} from '../../store/index';
import { useHistory } from "react-router-dom";

const ProductDetail = ({product}) => {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [counter, setCounter] = useState(0);


    const decreaseCounter = () => {
        if(counter >= 1) {
            setCounter(counter - 1);
        }
    }

    const handleClickAddProduct = () => {
        if(data.items.length && counter >= 1){
            data.items.map((item, index, object) => {
                if(item.id == product.id){
                    object.splice(index, 1);
                    let cantidad = item.cantidad + counter;
                    console.log('data2',data.items ,item,cantidad)
                    setData({
                        ...data,
                        cantidad:data.cantidad + counter ,
                        precioTotal: data.precioTotal + (product.data.precio * counter),
                        items:[...data.items, {product:  product.data, id:product.id, cantidad: cantidad , precioTotal:(product.data.precio * cantidad) }]
                    });
                }else{
                    setData({
                        ...data,
                        cantidad:data.cantidad + counter,
                        precioTotal: data.precioTotal + (product.data.precio * counter),
                        items:[...data.items, {product:  product.data, id:product.id, cantidad: counter, precioTotal:(product.data.precio * counter) }]
                    });
                }
            })
            history.push('/cart'); 
        } else{
            setData({
                ...data,
                cantidad:data.cantidad + counter,
                precioTotal: data.precioTotal + (product.data.precio * counter),
                items:[...data.items, {product:  product.data, id:product.id, cantidad: counter, precioTotal:(product.data.precio * counter) }]
            });
            history.push('/cart');
        }
        
    }


    return (
        <article className="container">
            <div className="container_img">
                <img src={product.data.img} alt="Imagen de producto" />  
            </div>
            <div className="container_div">
                <h2>{product.data.nombre}</h2>
                <div>
                    <h4>Detalles del Producto</h4>
                    <p>
                        {product.data.descrip}
                    </p>
                    <h4>Color</h4>
                    <p>{product.data.color}</p>
                </div>
                <div>
                    <h4>Precio</h4>
                    <p>${product.data.precio}</p>
                </div> 
            </div>
            <div className="container_precio">
                <h3>Precio</h3>
                <h3>${product.data.precio}</h3>
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
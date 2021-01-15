import {useContext} from 'react';
import {Store} from '../../../store/index';
import { useHistory } from "react-router-dom";
import './listCard.scss';

const CartList = ({titulo,precio,id,cantidad, precioTotal}) => {
    const [data, setData] = useContext(Store);
    const history = useHistory();
    var products = data.items
    var itemid = id
    const removeProduct = () =>{
        console.log(itemid)
        let tempData = data
        tempData.items.forEach(function (product, index, object) {
            if (product.product.id === itemid) {
                object.splice(index, 1);
            }
        });
        setData({
            ...data,
            items: tempData.items,
            cantidad: data.cantidad - cantidad,
            precioTotal: data.precioTotal - precioTotal
        })
        console.log(tempData)
        history.push('/cart');
    }

    return (
        <div className='itemCart'>
            <img src="https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg" alt="Imagen de producto" width="300" />
            <div>
                <h3>{titulo}</h3>
                <h4>Precio Unidad: ${precio}</h4>
                <h4>Cantidad: {cantidad}</h4>
                <h4></h4>
                <button onClick={removeProduct}>Remover Producto</button>
            </div>
        </div>
    )
}

export default CartList;
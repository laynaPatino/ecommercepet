import {useContext} from 'react';
import {Store} from '../../../src/store/index';
import CardList from "./listCard/listCard";
import {Link} from 'react-router-dom';

import '../cart/cart.scss'


const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <section className='Cart'>
            <h1>Carrito de compras</h1>
            {
                data.items.length ?
                <>
                    <div>
                        {
                            data.items.map(item =>
                                <CardList key={item.product.id} titulo={item.product.nombre} precio={item.product.precio} cantidad={item.product.cantidad} id={item.product.id} cantidad={item.cantidad} precioTotal={item.precioTotal} />
                            )
                        }
                    </div>
                    <div>
                        <h2>Items Agregados: {data.cantidad}</h2>
                        <h2>Precio Total: ${data.precioTotal}</h2>
                    </div>
                </>:<>
                <h2>Carrito Vacío</h2>
                <Link to={`/`}><a className=''>volver a la Tienda</a></Link>
            
            </>
            }
        </section>

    )
}

export default Cart;
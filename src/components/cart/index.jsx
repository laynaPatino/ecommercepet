import {useContext} from 'react';
import {Store} from '../../../src/store/index';
import CardList from "./listCard/listCard";

import '../cart/cart.scss'


const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <section>
            <h1>Cart</h1>
            <div>
                {
                    data.items.map(item =>
                        <>
                            <CardList titulo={item.product.nombre} precio={item.product.precio} cantidad={item.product.cantidad} id={item.product.id} cantidad={item.cantidad}/>
                        </>
                    )
                }
            </div>




        </section>

    )
}

export default Cart;
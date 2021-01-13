import {useContext} from 'react';
import {Store} from '../../../src/store/index';
import CardList from "./listCard/listCard";

import '../cart/cart.scss'


const Cart = () => {
    const [data, setData] = useContext(Store);
    const products = data.items
    console.log(data)

    return (
        <section>
            <h1>Cart</h1>
            <div>
                <ul>
                    {
                        products.map(item => <li key={item.id}><CardList id={item.id} titulo={item.nombre} precio={item.precio} categoria={item.category} /></li>)

                    }
                </ul>
            </div>
        </section>

    )
}

export default Cart;
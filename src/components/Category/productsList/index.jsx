import {useState} from 'react';
import Products from '../../product/Products';
import './productlist.scss'

const ProductsList = ({products}) => {

    return (
        <section className="products">
                {
                    products.map(item => <Products key={item.id} id={item.id} titulo={item.data.nombre} precio={item.data.precio} img ={item.data.img}/>)
                }

        </section>
    )
}

export default ProductsList;
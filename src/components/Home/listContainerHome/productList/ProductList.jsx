import {useState, useEffect} from 'react';
import Products from '../../../product/Products';
import './productlist.scss';

const Productlist = () => {

    const [itemsProduct, setItemsProduct] = useState([]);

    const products = [
        {
            id: 1,
            titulo: 'Nombre de producto 1',
            precio: 500,
        },
        {
            id: 2,
            titulo: 'Nombre de producto 2',
            precio: 800,
        },
        {
            id: 3,
            titulo: 'Nombre de producto 3',
            precio: 200,
        },
        {
            id: 4,
            titulo: 'Nombre de producto 4',
            precio: 300,
        },
        
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    const getProducstFromArray = async () => {
        try {
            const result = await getProducts;
            setItemsProduct(result);
        } catch(error) {
            alert('No podemos mostrar los productos, intenta en unos minutos, Gracias!');
        }
    }

    useEffect(() => {
        getProducstFromArray();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="productList">
            <div className="container">
            {
                    itemsProduct.length ?
                    <>
                        <h2>Productos Top</h2>
                        <ul>
                            {
                                itemsProduct.map((item, index) => (
                                    <li key={index}>
                                        <Products
                                            titulo={item.titulo} 
                                            precio={item.precio} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="loading">Estamos Cargando los productos...</p>
                }
            </div>
        </section>
    )
}

export default Productlist;

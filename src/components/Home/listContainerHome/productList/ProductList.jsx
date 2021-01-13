import {useState, useEffect} from 'react';
import ListContainerHome from '../../listContainerHome/listContainerHome'
import Products from '../../../product/Products';
import {productsList} from '../../../../products';
import './productlist.scss';

const Productlist = () => {

    const [itemsProduct, setItemsProduct] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        const outstandingProducts = productsList.filter(item => item.outstanding);
        resolve(outstandingProducts);
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
            <div className="container_">
            {
                    itemsProduct.length ?
                    <>
                        <ListContainerHome/>
                        <h2>Productos Top</h2>
                        <ul>
                            {
                                itemsProduct.map((item, index) => (
                                    <li key={item.id}>
                                        <Products
                                            titulo={item.nombre} 
                                            precio={item.precio} 
                                            id={item.id}
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

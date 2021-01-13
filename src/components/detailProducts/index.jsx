import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ListContainerHome from '../Home/listContainerHome/listContainerHome';
import ProductDetail from './ProductsDetails';
import {productsList} from '../../products';
import './detailProducts.scss';


const DetailProducts = () => {
    const {itemid} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
            const productClick = productsList.find(producto => producto.id == itemid)
            resolve(productClick)
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    
    return (
        <>
          {
                product ?
                <div>
                    <ProductDetail product={product} />
                    <section>
                    <ListContainerHome/>
                    </section>
                </div> : 
                <p className="loading">Cargando producto...</p>
            }
        </>
    )

}

export default DetailProducts;
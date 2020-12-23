import {useEffect, useState} from 'react';
import ListContainerHome from '../Home/listContainerHome/listContainerHome';
import ProductDetail from './ProductsDetails'
import './detailProducts.scss';

const DetailProducts = () => {
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "Titulo de producto",
                img: "https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg",
                descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quibusdam similique unde quod, laudantium, perferendis voluptas nemo in esse obcaecati officiis nihil debitis. Deleniti ipsa fuga aliquid voluptatem quia! Mollitia",
                color:"color del producto",
                precio: 520
            })
        }, 2000);
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
                    <ProductDetail product={product}/>
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
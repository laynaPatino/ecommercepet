import {useEffect, useState} from 'react';
import ListContainerHome from '../Home/listContainerHome/listContainerHome';
import ProductDetail from './ProductsDetails'
import './detailProducts.scss';
import {useParams} from 'react-router-dom';

const DetailProducts = () => {
    const [product, setProduct] = useState(null);

    const products = [
        {
            id: 1, 
            nombre: "Nombre de producto 1",
            img: "https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quibusdam similique unde quod, laudantium, perferendis voluptas nemo in esse obcaecati officiis nihil debitis. Deleniti ipsa fuga aliquid voluptatem quia! Mollitia",
            color:"color del producto",
            precio: 500
        },
        {
            id: 2,
            nombre: 'Nombre de producto 2',
            img: "https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quibusdam similique unde quod, laudantium, perferendis voluptas nemo in esse obcaecati officiis nihil debitis. Deleniti ipsa fuga aliquid voluptatem quia! Mollitia",
            color:"color del producto",
            precio: 800,
        },
        {
            id: 3,
            nombre: 'Nombre de producto 3',
            img: "https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quibusdam similique unde quod, laudantium, perferendis voluptas nemo in esse obcaecati officiis nihil debitis. Deleniti ipsa fuga aliquid voluptatem quia! Mollitia",
            color:"color del producto",
            precio: 200,
        },
        {
            id: 4,
            nombre: 'Nombre de producto 4',
            img: "https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quibusdam similique unde quod, laudantium, perferendis voluptas nemo in esse obcaecati officiis nihil debitis. Deleniti ipsa fuga aliquid voluptatem quia! Mollitia",
            color:"color del producto",
            precio: 300,
        },
        
    ]

    const {itemid} = useParams()

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productClick = products.find(producto => producto.id == itemid)
            resolve(productClick)
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
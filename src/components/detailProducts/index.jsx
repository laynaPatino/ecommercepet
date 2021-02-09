import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ProductsDetails';
import {getFirestore} from "../../firebase/index";
import './detailProducts.scss';


const DetailProducts = () => {
    const {itemid} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        db.collection('productos').doc(itemid).get()
        .then(doc =>{
            if(doc.exists){
                setProduct({id: doc.id, data: doc.data()});
            }
        })
        .catch(e => console.log(e))

    }, []);

    
    return (
        <>
          {
                product ?
                <div>
                    <ProductDetail product={product} />
                    <section className='section-img'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bomji-box.appspot.com/o/carrusel1.jpg?alt=media&token=14eab940-c9cb-4e68-8f48-fc0369182852" alt="Slide 1" className="slider_img"/>
                    </section>
                </div> : 
                <p className="loading">Cargando producto...</p>
            }
        </>
    )

}

export default DetailProducts;
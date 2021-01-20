import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ListContainerHome from '../Home/listContainerHome/listContainerHome';
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
import {useState, useEffect} from 'react';
import ListContainerHome from '../../listContainerHome/listContainerHome'
import Products from '../../../product/Products';
import './productlist.scss';
import {getFirestore} from '../../../../firebase/index';

const Productlist = () => {

    const [itemsProduct, setItemsProduct] = useState([]);
    const db = getFirestore();



    const getProducstFromArray = () => {
        db.collection('productos').where("outstanding", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc =>{
                arr.push({id: doc.id, data: doc.data()})
            })
            console.log(arr)
            setItemsProduct(arr);
        })
        .catch(e => console.log(e))

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
                                            img = {item.data.img} 
                                            titulo={item.data.nombre} 
                                            precio={item.data.precio} 
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

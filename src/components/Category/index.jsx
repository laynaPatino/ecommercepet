import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ListContainerHome from '../Home/listContainerHome/listContainerHome'
import Products from '../Category/productsList/index'
import './category.scss';
import {getFirestore} from "../../firebase/index";


const Category = () => {
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if (category_name) {
            db.collection('productos').where('categoria', '==', category_name).get()
                .then(response => {
                    let arr = [];
                    response.forEach(doc => {
                        arr.push({ id: doc.id, data: doc.data() })
                    })

                    setProds(arr);
                })
        }

    }, [category_name])

    return (
        <>
            <h2>{category_name}</h2>
            <Products products={prods} />
            <div>
            <ListContainerHome/>
            </div>
        </>
    )
}

export default Category;
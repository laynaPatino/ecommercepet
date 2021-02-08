import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
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
            <section className='section-img'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bomji-box.appspot.com/o/carrusel1.jpg?alt=media&token=14eab940-c9cb-4e68-8f48-fc0369182852" alt="Slide 1" className="slider_img"/>
            </section>
        </>
    )
}

export default Category;
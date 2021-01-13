import {useState, useEffect} from 'react';
import {productsList} from '../../products';
import {useParams} from 'react-router-dom';
import ListContainerHome from '../Home/listContainerHome/listContainerHome'
import Products from '../Category/productsList/index'
import './category.scss';


const Category = () => {
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(category_name) {
            setProds(productsList.filter(prod => prod.category === category_name))
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
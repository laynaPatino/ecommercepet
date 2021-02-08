import './products.scss';
import {Link} from 'react-router-dom';

const Products = ({ titulo, precio, id, img }) => {

    return (
        <article className="productCard">
            <div className='container_img'>
                <img src={img} alt="Imagen de producto"/>
            </div>
            <div>
                <h3>{titulo}</h3>
                <h4>${precio}</h4>
                <Link to={`/item/${id}`}><button className='addButton'>Ver mas</button></Link>
            </div>
        </article>
    )
}

export default Products;
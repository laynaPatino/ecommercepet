import {useState} from 'react';
import './products.scss';
import {Link} from 'react-router-dom';

const Products = ({titulo, precio, id}) => {
    const [counter, setCounter] = useState(0);

    const decreaseCounter = () => {
        if(counter >= 1) {
            setCounter(counter - 1);
        }
    }

    return (
        <article className="productCard">
            <img src="https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg" alt="Imagen de producto" width="300"/>
            <div>
                <h3>{titulo}</h3>
                <h4>${precio}</h4>
                <Link to={`/item/${id}`}><button className='addButton'>Ver mas</button></Link>
            </div>
        </article>
    )
}

export default Products;
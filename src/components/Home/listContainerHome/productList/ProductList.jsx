import Products from '../../../product/Products';
import './productlist.scss';

const Productlist = () => {

    return (
        <section className="productList">
            <div className="container">
                    <>
                        <h2>Productos Top</h2>

                        <ul>
                                    <li><Products nameProduct='Nombre de producto 1' precio='500'/></li>
                                    <li><Products nameProduct='Nombre de producto 2' precio='800'/></li>
                                    <li><Products nameProduct='Nombre de producto 3' precio='200'/></li>
                                    <li><Products nameProduct='Nombre de producto 4' precio='300'/></li>
                        </ul>
                    </> 

            </div>
        </section>
    )
}

export default Productlist;

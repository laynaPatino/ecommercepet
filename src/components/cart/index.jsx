import { useContext } from "react";
import { Store } from "../../../src/store/index";
import CardList from "./listCard/listCard";
import { Link } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";


import "../cart/cart.scss";

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <section className="Cart">
            <section className='section-img'>
                <img src="https://firebasestorage.googleapis.com/v0/b/bomji-box.appspot.com/o/carrusel1.jpg?alt=media&token=14eab940-c9cb-4e68-8f48-fc0369182852" alt="Slide 1" className="slider_img" />
            </section>
            <h2>Carrito de compras</h2>
            {data.items.length ? (
                <>
                    <div>
                        {data.items.map((item) => (
                            <CardList
                                key={item.id}
                                titulo={item.product.nombre}
                                precio={item.product.precio}
                                cantidad={item.product.cantidad}
                                img={item.product.img}
                                id={item.id}
                                cantidad={item.cantidad}
                                precioTotal={item.precioTotal}
                            />
                        ))}
                    </div>
                    <div>
                        <h3>Items Agregados: {data.cantidad}</h3>
                        <h3>Precio Total: ${data.precioTotal}</h3>
                        <Link to={`/checkout`}>
                            <button className="finalizarCompra">Finalizar Compra</button>
                        </Link>
                    </div>
                </>
            ) : (
                    <>
                        <h3>Tu Carrito esta Vacío</h3>
                        <Link to={`/`}>
                            <ImArrowLeft2/><a className="">volver a la Tienda</a>
                        </Link>
                    </>
                )}
        </section>
    );
};

export default Cart;

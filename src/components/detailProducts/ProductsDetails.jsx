
const productDetail = ({product}) => {
    return (
        <article className="container">
            <div className="container_img">
                <img src={product.img} alt="Imagen de producto" width="400" />  
            </div>
            <div className="container_div">
                <h1>{product.nombre}</h1>
                <div>
                    <h4>Detalles del Producto</h4>
                    <p>
                        {product.descrip}
                    </p>
                    <h4>Color</h4>
                    <p>{product.color}</p>
                </div>
                <div>
                    <h4>Precio</h4>
                    <p>${product.precio}</p>
                </div>
               
            </div>
            <div className="container_precio">
                <h3>Precio</h3>
                <h2>${product.precio}</h2>
                <button>Añadir al Carrito</button>
            </div>
        </article>
    )
}

export default productDetail
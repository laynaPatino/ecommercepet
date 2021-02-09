import {useContext} from 'react';
import {Store} from '../../../../../../store/index';
import CardList from "../../../../../cart/listCard/listCard";
import "./informacionPedidos.scss";

const InformacionPedidos = ({}) => {

  const [data] = useContext(Store);
  let id = '';
  let listaProductos = [];
  let precioTotal = 0;
  let nombre = '';
  if(data.pedidos.listaProductos !== null && data.pedidos.listaProductos !== undefined){
    id = data.pedidos.id;
    listaProductos = data.pedidos.listaProductos.items;
    precioTotal = data.pedidos.listaProductos.totalPrice;
    nombre = data.pedidos.listaProductos.user.nombre + ' ' + data.pedidos.listaProductos.user.apellido;
  }




  return (
    <div className='informacionPedidos'>
      <h2>Informacion de Pedido</h2>
      {
        
      }
      <h2>Codigo de pedido : {id}</h2>
      <div>
        {
          listaProductos.map((producto) =>
          (
            <CardList
              key={producto.id}
              titulo={producto.product.nombre}
              precio={producto.product.precio}
              cantidad={producto.product.cantidad}
              img={producto.product.img}
              id={producto.id}
              cantidad={producto.cantidad}
              precioTotal={producto.precioTotal}
            />
          ))
        }
      </div>
      <h2>Precio Total: {precioTotal}</h2>
      <h2>Pedido solicitado por: {nombre}</h2>
    </div>
  );
};
  
  export default InformacionPedidos;
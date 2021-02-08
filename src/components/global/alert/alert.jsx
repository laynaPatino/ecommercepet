import Pedidos from '../../Home/listContainerHome/footer/pedidos/pedidos'
import "./alert.scss";


const Alert = ({texto, estado}) => {

  if (estado == true) {
    return null;
  }

  return (
    <div className='alert'>
      <h1>{texto}</h1>
      <button>Cerrar</button>
    </div>
  );
};





export default Alert;
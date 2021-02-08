import "./informacionPedidos.scss";

const informacionPedidos = ({estado, id}) => {
    if(estado == true){
        return null
    }
    return (
      <div className='informacionPedidos'>
        <h2>Informacion de Pedido</h2>
        <h2>{id}</h2>
        
      </div>
    );
  };
  
  export default informacionPedidos;
import "./alert.scss";

const alert = ({texto, estado}) => {

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

export default alert;
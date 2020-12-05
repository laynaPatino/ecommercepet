import './navBar.scss';
import CartWidget from './cartWidget/cartWidget';

function navBar() {
  return (
    <>
      <header>
        <div>
          <div className="container_title">
            <h1 className="title">BomJi Box</h1>
            <CartWidget/>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Caja del mes</a> 
              </li>
              <li>
                <a href="#">Por temporada</a> 
              </li>
              <li>
                <a href="#">Sorpresas</a> 
              </li>
              <li>
               <a href="#">Promociones</a> 
              </li>
              <li>
               <a href="#">Personalizadas</a> 
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default navBar;
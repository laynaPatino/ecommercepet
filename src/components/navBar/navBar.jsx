import './navBar.scss';
import CartWidget from './cartWidget/cartWidget';
import {Link} from 'react-router-dom'

function navBar() {
  return (
    <>
      <header>
        <div>
          <div className="container_title">
            <h1 className="title"><Link to='/'>BomJi Box</Link> </h1>
            <CartWidget/>
          </div>
          <nav>
            <ul>
              <li>
                <Link to ='/category/cajaDelMes'>Caja del mes</Link>
              </li>
              <li>
                <Link to ='/category/porTemporada'>Por temporada</Link>
              </li>
              <li>
                <Link to ='/category/sorpresa'>Sorpresas</Link>
              </li>
              <li>
                <Link to ='/category/promociones'>Promociones</Link>
              </li>
              <li>
                <Link to ='/category/personalizadas'>Personalizadas</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default navBar;
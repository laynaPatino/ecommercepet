import Pedidos from '../footer/pedidos/pedidos'
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="form">
          <div className="segimiento">
            <h2>Pedidos</h2>
            <p>Ingresa el codigo de tu pedido para su segimiento</p>
          </div>
          <Pedidos/>
        </div>
        <div className="info">
          <div className="info_container">
            <h2 className="title">
              <Link to="/">BomJi Box</Link>
            </h2>
          </div>
          <div className="info_container">
            <ul>
              <li>
                <SiGmail />
                <h3>bomjibox@bomjibox.com</h3>
              </li>
              <li>
                <FaPhone />
                <h3>3218428936-3108404662</h3>
              </li>
            </ul>
          </div>
          <div className="info_container">
            <ul className="nav">
              <li>
                <Link to="/category/cajaDelMes">Caja del mes</Link>
              </li>
              <li>
                <Link to="/category/porTemporada">Por temporada</Link>
              </li>
              <li>
                <Link to="/category/sorpresa">Sorpresas</Link>
              </li>
              <li>
                <Link to="/category/promociones">Promociones</Link>
              </li>
              <li>
                <Link to="/category/personalizadas">Personalizadas</Link>
              </li>
              <li>
                <Link to="/cart">Carrito</Link>
              </li>
            </ul>
          </div>
          <div className="info_container">
            <div className="redes">
              <div>
                <SiInstagram />
              </div>
              <div>
                <SiTwitter />
              </div>
              <div>
                <SiWhatsapp />
              </div>
              <div>
                <SiFacebook />
              </div>
              <div>
                <SiPinterest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

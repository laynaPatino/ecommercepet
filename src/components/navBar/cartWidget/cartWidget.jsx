import { SiInstacart } from "react-icons/si";
import './cartWidget.scss'

function cartWidget() {
  return (
    <a href="#" className="cartWidget">
        <div className="containerCart">
            <span>
                <SiInstacart/>
            </span>
            <span>0</span>
            <div className="listCartWidget">
                <h4>Mi Carrito</h4>
                <div className="containerList">
                    <p>Tu carrito esta vacio</p>
                </div>
            </div>
        </div>
    </a>
  );
}

export default cartWidget;
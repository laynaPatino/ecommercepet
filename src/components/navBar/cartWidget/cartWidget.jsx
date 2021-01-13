import {useContext} from 'react';
import {Store} from '../../../store/index';
import { SiInstacart } from "react-icons/si";
import ListCard from './listCard/index'
import './cartWidget.scss';




function CartWidget() {

    const [data, setData] = useContext(Store);

    console.log(data)

  return (
    <a href="#" className="cartWidget">
        <div className="containerCart">
            <span>
                <SiInstacart/>
            </span>
            <span>{data.cantidad}</span>
            <div className="listCartWidget">
                <h4>Mi Carrito</h4>
                <div className="containerList">
                    <ListCard/>
                </div>
            </div>
        </div>
    </a>
  );
}

export default CartWidget;
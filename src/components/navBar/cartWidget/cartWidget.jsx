import {useContext} from 'react';
import {Store} from '../../../store/index';
import { SiInstacart } from "react-icons/si";
import ListCard from './listCard/index';
import {Link} from 'react-router-dom'
import './cartWidget.scss';




function CartWidget() {

    const [data] = useContext(Store);

  return (
    <Link to ='/cart'className="cartWidget">
        <div className="containerCart">
            <span>
                <SiInstacart/>
            </span>
            <span className='numberCar'>{data.cantidad}</span>
            <div className="listCartWidget">
                <h4>Mi Carrito</h4>
                <div className="containerList">
                    <ListCard/>
                </div>
            </div>
        </div>
    </Link>
  );
}

export default CartWidget;
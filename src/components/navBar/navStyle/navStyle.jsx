import {Link} from 'react-router-dom'
import './navstyle.scss';
import { RiMenuLine } from "react-icons/ri";
import { RiMenuAddLine } from "react-icons/ri";
import {useState} from 'react';




function NavStyle() {
    const [checked, setChecked] = useState();


    return (
        <>
              <nav className='navStyle'>
                <input type="checkbox" id="menu-action" checked={checked} />
                <ul className="menu-list">
                  <li>
                    <Link to ='/category/cajaDelMes' onClick ={()=>{setChecked(false)}}>Caja del mes</Link>
                  </li>
                  <li>
                    <Link to ='/category/porTemporada'onClick ={()=>{setChecked(false)}}>Por temporada</Link>
                  </li>
                  <li>
                    <Link to ='/category/sorpresa'onClick ={()=>{setChecked(false)}}>Sorpresas</Link>
                  </li>
                  <li>
                    <Link to ='/category/promociones' onClick ={()=>{setChecked(false)}}>Promociones</Link>
                  </li>
                    <li>
                        <Link to='/category/personalizadas' onClick ={()=>{setChecked(false)}}>Personalizadas</Link>
                    </li>
                </ul>
                <div className="toggle-button">
                    <label htmlFor="menu-action">
                        <i className="fas fa-bars"><RiMenuLine onClick ={()=>{setChecked(true)}}/></i>
                        <i className="fas fa-times"><RiMenuAddLine onClick ={()=>{setChecked(false)}}/></i>
                    </label>
                </div>
              </nav>

        </>
      );
  }
  
  export default NavStyle;




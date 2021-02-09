import { useState } from 'react';
import {useContext} from 'react';
import {Store} from '../../../../../store/index';
import { animateScroll as scroll} from 'react-scroll';
import { getFirestore } from "../../../../../firebase/index";
import Alert from "../../../../global/alert/alert";
import { useHistory } from "react-router-dom";
import "./pedidos.scss";

const Pedidos = () => {
    const [data, setData] = useContext(Store);
    const history = useHistory();
    let id;
    const db = getFirestore();
    const [pedidos, setPedidos] = useState({
        id: ''
    });
    const [pedido, setpedido] = useState({
        pedido: 'Codigo de Pedido',
    })

    const handleChangeInput = (e) => {
        setpedido({ ...pedido, [e.target.name]: e.target.value });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('ventas').get()
            .then(listaPedidos => {
                let dataPedido = {};
                listaPedidos.forEach(itemPedido => {
                    id = itemPedido.id
                    if (id == pedido.pedido) {
                        setData({
                            ...data,
                            pedidos:{id:itemPedido.id,
                                listaProductos:itemPedido.data()}
                        });
                        dataPedido = { id: itemPedido.id, data: itemPedido.data() }
                        history.push('/informacionPedidos');
                        scroll.scrollToTop()
                    } 
                })
                setPedidos(dataPedido)
            })

           
    }

    return (
        <>
            <form className='divForm' onSubmit={handleSubmitForm}>
                <input type="text" value={pedido.pedido} onChange={handleChangeInput} name="pedido" placeholder="Codigo de Pedido" required />
                <button>Consultar</button>
            </form>
            
        </>
    );
};

export default Pedidos;

import { useState } from 'react';
import { getFirestore } from "../../../../../firebase/index";
import Alert from "../../../../global/alert/alert";
import { useHistory } from "react-router-dom";
import InformacionPedidos from '../pedidos/informacionPedidos/informacionPedidos'
import "./pedidos.scss";

const Pedidos = () => {
    const history = useHistory();
    let estadoAlert = true
    const db = getFirestore();
    const [pedidos, setPedidos] = useState({
        id: ''
    });
    const [pedido, setpedido] = useState({
        pedido: '',
    })

    const handleChangeInput = (e) => {
        setpedido({ ...pedido, [e.target.name]: e.target.value });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('ventas').get()
            .then(listaPedidos => {
                let dataPedido = {};
                let id;
                listaPedidos.forEach(itemPedido => {
                    id = itemPedido.id
                    if (id == pedido.pedido) {
                        dataPedido = { id: itemPedido.id, data: itemPedido.data() }
                        history.push('/cart');
                    }
                })
                setPedidos(dataPedido)
            })
        if (pedido.pedido == "") {
            return(
                estadoAlert = true
            )
        }
    }

    if (pedidos.id !== undefined && pedidos.id !== null) {
        estadoAlert = true
        console.log('PEDIDO=>', pedidos)
    }
    else {
        estadoAlert = false
    }




    return (
        <>
            <form className='divForm' onSubmit={handleSubmitForm}>
                <input type="text" value={pedido.pedido} onChange={handleChangeInput} name="pedido" placeholder="Codigo de Pedido" required />
                <button>Consultar</button>
            </form>
            <Alert texto='codigo invalido' estado={estadoAlert} />
        </>
    );
};

export default Pedidos;

import { useState } from 'react';
import { getFirestore } from "../../../../../firebase/index";
import Alert from "../../../../global/alert/alert";
import "./pedidos.scss";

const Pedidos = () => {
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

    const handleSubmitForm = () => {
        db.collection('ventas').get()
            .then(listaPedidos => {
                let dataPedido = {};
                let id;
                listaPedidos.forEach(itemPedido => {
                    id = itemPedido.id
                    if (id == pedido.pedido) {
                        dataPedido = { id: itemPedido.id, data: itemPedido.data() }
                    }
                })
                setPedidos(dataPedido)
            })

    }
    console.log('PEDIDO 1=>', pedidos)


    if (pedidos.id !== undefined && pedidos.id !== null) {
        estadoAlert = true
        console.log('PEDIDO=>', pedidos)
    }
    else {
        estadoAlert = false
    }

    console.log('ESTADO ALER', estadoAlert)

    return (
        <>
            <div className='divForm'>
                <input type="text" value={pedido.pedido} onChange={handleChangeInput} name="pedido" placeholder="Codigo de Pedido" />
                <button onClick={handleSubmitForm} >Consultar</button>
            </div>
            <Alert texto='codigo invalido' estado={estadoAlert} />
        </>
    );
};

export default Pedidos;

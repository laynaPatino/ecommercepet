import {useState, useContext} from 'react';
import { Store } from "../../store/index";
import {getFirestore} from '../../firebase/index';
import firebase from 'firebase/app';
import './checkout.scss';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    })

    const [idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));

        setData({
            ...data,
            cantidad:0,
            precioTotal: 0,
            items:[]
        });
    }


    console.log(compra)

    return (
        <section className="checkout_container">
            <div className="container_div">
                <h2>Checkout</h2>
                {
                    !venta ?
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" required/>
                        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" required />
                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" required/>
                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" required/>
                        <button>Pagar</button>
                    </form> :
                    <p>La compra se realizó correctamente, tu número de seguimiento es: <span>{idCompra}</span></p>
                }
            </div>
        </section>
    )
}

export default Checkout;
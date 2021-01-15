import {useContext} from 'react';
import './listCard.scss';
import {Store} from '../../../../store/index';

const ListCard = () => {
    const [data, setData] = useContext(Store);

    return (
        <div>
            {
                data.items.map(item => <p key={item.product.id}> {item.product.nombre}</p>)
            }
        </div>
    )
}
export default ListCard;
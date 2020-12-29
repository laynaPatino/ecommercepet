import {useEffect} from 'react';
import './category.scss';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    const {category_name} = useParams();

    const queCategoriaEs = (cat) => {
        switch(cat) {
            case 'cajaDelMes': return <h2>Estas en seccion de caja del mes</h2>;
            case 'porTemporada': return <h2>Estas en seccion por temporada</h2>;
            case 'sorpresa': return <h2>Estas en seccion de Sorpresas</h2>;
            case 'promociones': return <h2>Estas en seccion Promociones</h2>;
            case 'personalizadas': return <h2>Estas en seccion Personalizadas</h2>;
            default: return <h2>la seccion no existe</h2>
        }
    }

    return (
        <>
            {
               queCategoriaEs(category_name) 
            }
        </>
    )
}
export default Category;
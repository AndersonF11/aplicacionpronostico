import React from 'react';
import {useSelector} from 'react-redux';

const WeatherResult = () => {
    const buscador = useSelector((state) => state.buscador);
    return (
        <div>

        <h3 className="text-white"> Resultado: </h3>
       {buscador-loading && <div className="text-warning">Buscando..... </div>}
       {
        buscador.city.length >=1&&
        <div className="text-success">
        <span> ciudad </span>
        </div>

}
<span className="text-danger">Error</span>

        </div>
    );
}

export default WeatherResult;
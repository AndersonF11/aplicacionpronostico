import React from 'react';

const WeatherForm = props => (
    <div className="card card-body"> 
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Ingrese Nombre De La Ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Ingrese Nombre Del Pais" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Obtener Clima 
            </button>
            <button >
            <a href="https://www.google.com/maps" className="btn btn-success">Ir a google maps</a> 
            </button>
        </form>
    </div>
);

export default WeatherForm;
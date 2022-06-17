import React from 'react';

const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Localizacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.pressure &&
                        <p><i className="fas fa-tachometer-alt"></i> Presion: {props.pressure}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity}</p>
                    }
                    {
                        props.temp_max &&
                        <p><i className="fas fa-temperature-high"></i> Temperatura Maxima: {props.temp_max} ℃,</p>
                    }
                    {
                        props.temp_min &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura Minima: {props.temp_min} ℃,</p>
                    }
                    {
                        props.lon &&
                        <p><i className="fas fa-location-arrow"></i> Longitud: {props.lon} </p>
                    }
                    {
                        props.lat &&
                        <p><i className="fas fa-location-arrow"></i> Latitud: {props.lat} </p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Velocidad del viento: {props.wind_speed}</p>
                    }
                   
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-cloud fa-10x"></i>
                </div>
            }
        </div>

    )
}

export default WeatherInfo;
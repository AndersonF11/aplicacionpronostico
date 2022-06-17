import React, { Component } from 'react';

import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

import { WEATHER_KEY } from './keys';


class App extends Component {

    state = {
        temperature: '',   
        description: '',
        pressure: '',
        humidity: '',
        temp_max: '',
        temp_min: '',
        lon: 0,
        lat: 0,
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
            // metric parameter is for Celcius Unit
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data)
            

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                pressure:data.main.pressure,
                humidity: data.main.humidity,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                lon: data.coord.lon,
                lat: data.coord.lat,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } else {
            this.setState({
                error: 'Porfavor ingresar una ciudad y un pais.'
            });
        }

    }

    render() {
        return <div className="container p-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <WeatherForm
                        getWeather={this.getWeather}
                    />
                    <WeatherInfo {...this.state} />
                </div>
            </div>
        </div>
    }
   
}

export default App;
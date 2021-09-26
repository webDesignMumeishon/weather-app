import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info container-ciudad">
                        <div>Temperature: <br/> {Math.ceil(city.temp - 273.15)} ºC</div>
                        <div>Weather:<br/> {city.weather}</div>
                        <div>Wind:<br/> {city.wind} km/h</div>
                        <div>Clouds Number:<br/> {city.clouds}</div>
                        <div>Lat:<br/> {city.latitud}º</div>
                        <div>Lng:<br/> {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}
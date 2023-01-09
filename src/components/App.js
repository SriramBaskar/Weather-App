import React, { useState } from 'react'

function App() {

    const api = 'b5f5492cfa63ce6183e4f61b2b064693'
    const [weatherData, setWeatherDate] = useState([{}])
    const [city, setCity] = useState('')

    const getWeather = (event) => {
        if (event.key == 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${api}`).then(
             response => response.json()
            ).then(
                data => {
                    setWeatherDate(data)
                }
            )
        }
    }
    return(
        <div className='container'>
            <input className='input' placeholder='Enter city' 
            onChange={event => setCity(event.target.value)}
            value={city}
            onKeyPress={getWeather}
            />

        {typeof weatherData.main === 'undefined' ? (
            <div>
                <h3>Welcome to weather-App, Enter the city </h3>
            </div>    
        ) : (
            <div className='output-container'>
                <p className='city'>{weatherData.name}</p>
                <p className='temp'>{Math.round(weatherData.main.temp)}°F</p>
                <p className='weather'>{weatherData.weather[0].main}</p>
            </div>
        )}

        {weatherData.cod === '404' ? (
            <h3>City not found</h3>
        ) : (
            <>
            </>
        )}
        </div>
    )
}

export default App
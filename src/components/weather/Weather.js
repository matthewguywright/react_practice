import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    kelvinToFarenheit(kelvinTemp) {
        return Math.floor((kelvinTemp - 273.15) * 9/5 + 32)
    }

    render() {
        if (this.props.payload.error) {
            return <div className='alert alert-danger col-6'>API Error: {this.props.payload.error.message}</div>;
        } else if (!this.props.payload.isLoaded) {
            return (
                <div className='alert alert-info col-6'>
                    <p>Search a location to display current weather conditions.</p>
                    <p>Examples:</p>
                    <ul className="list">
                        <li>Omaha</li>
                        <li>Omaha,NE</li>
                        <li>London,UK</li>
                        <li>Anchorage</li>
                        <li>New York,NY</li>
                    </ul>
                </div>
            );
        } else {
            const weather = this.props.payload;
            return (
                <div className='col-6'>
                    <div className="card">
                        <h5 className="card-header">Location: {weather.city.toUpperCase()}</h5>
                        <div className="card-body">
                            <h2 className="">{this.kelvinToFarenheit(weather.data.main.temp)}&deg;F</h2>
                            <p><img src={`${weather.iconUrl}${weather.data.weather[0].icon}${weather.iconImageSuffix}`} alt={weather.data.weather[0].main}/></p>
                            <p><strong>{weather.data.weather[0].main}:</strong> {weather.data.weather[0].description}</p>
                            <p><strong>Wind Speed:</strong> {weather.data.wind.speed} mph</p>
                            <p><strong>Humidity:</strong> {weather.data.main.humidity} %</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;

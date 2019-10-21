import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
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
            return (
                <div className='col-6'>
                    <div className="card">
                        <h5 className="card-header">Location: {this.props.payload.city.toUpperCase()}</h5>
                        <div className="card-body">
                            <p><img src={`${this.props.payload.iconUrl}${this.props.payload.data.weather[0].icon}${this.props.payload.iconImageSuffix}`} alt={this.props.payload.data.weather[0].main}/></p>
                            <p><strong>{this.props.payload.data.weather[0].main}:</strong> {this.props.payload.data.weather[0].description}</p>
                            <p><strong>Wind Speed:</strong> {this.props.payload.data.wind.speed} mph</p>
                            <p><strong>Humidity:</strong> {this.props.payload.data.main.humidity} %</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;

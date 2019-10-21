import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
            url: 'http://api.openweathermap.org/data/2.5/weather?q=',
            iconUrl: 'http://openweathermap.org/img/wn/',
            iconImageSuffix: '@2x.png',
            appId: '6a1755e17f596796af14957b79f7cf96',
            city: this.props.city || null
        }
    }

    componentDidMount() {
        if(this.state.city) {
            fetch(`${this.state.url}${this.state.city}&APPID=${this.state.appId}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            data: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    convertUnixToStandardDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours();
        const minutes = `0 + ${date.getMinutes()}`;
        return `${hours}:${minutes.substr(-2)}`;
    }

    render() {
        const {error, isLoaded, data} = this.state;
        if (error) {
            return <div className='col-6'>API Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className='alert alert-info'>
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
                        <h5 className="card-header">Location: {this.state.city} Weather</h5>
                        <div className="card-body">
                            <p><img src={`${this.state.iconUrl}${data.weather[0].icon}${this.state.iconImageSuffix}`} alt={data.weather[0].main}/></p>
                            <p><strong>{data.weather[0].main}:</strong> {data.weather[0].description}</p>
                            <p><strong>Wind Speed:</strong> {data.wind.speed}mph</p>
                            <p><strong>Humidity:</strong> {data.main.humidity}%</p>
                            <p><strong>Sunrise:</strong> {this.convertUnixToStandardDate(data.sys.sunrise)}</p>
                            <p><strong>Sunset:</strong> {this.convertUnixToStandardDate(data.sys.sunset)}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;

import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
            url: 'http://api.openweathermap.org/data/2.5/weather?q=',
            appId: '6a1755e17f596796af14957b79f7cf96',
            city: this.props.city
        }
    }

    componentDidMount() {
        if(this.props.city) {
            fetch(`${this.state.url}${this.props.city}&APPID=${this.state.appId}`)
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

    render() {
        const {error, isLoaded, data} = this.state;
        if (error) {
            return <div>API Error: {error.message}</div>;
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
                        <h5 className="card-header">Location: {this.props.city}</h5>
                        <div className="card-body">
                            {JSON.stringify(data)}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;

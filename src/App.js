import React from 'react';
import Weather from "./components/weather/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            error: null,
            isLoaded: false,
            data: null,
            url: 'http://api.openweathermap.org/data/2.5/weather?q=',
            iconUrl: 'http://openweathermap.org/img/wn/',
            iconImageSuffix: '@2x.png',
            appId: '6a1755e17f596796af14957b79f7cf96'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    weatherApiCall = () => {
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

    handleSubmit = (event) => {
        if(this.state.city) {
            this.weatherApiCall();
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className='row'>
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="city">Enter City or City, State</label>
                            <input type="text"
                                   className="form-control"
                                   value={this.state.city}
                                   onChange={event => this.setState({ city: event.target.value })}
                                   placeholder='Atlanta,GA'
                                   required
                            />
                        </div>
                        <input type='submit'
                               className="btn btn-primary"
                               value='Get Weather' />
                    </form>
                </div>
                <Weather payload={this.state} />
            </div>
        );
    }
}

export default App;

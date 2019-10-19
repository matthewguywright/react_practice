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

    render() {
        const {error, isLoaded, data} = this.state;
        if (error) {
            return <div>API Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='col-6'>
                    {JSON.stringify(data)}
                </div>
            );
        }
    }
}

export default Weather;

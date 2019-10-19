import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
            url: 'https://api.openweathermap.org/data/2.5/weather?q=',
            city: this.props.city
        }
    }

    componentDidMount() {
        fetch(`${this.state.url}${this.state.city}`)
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
                <div>
                    {JSON.stringify(data)}
                </div>
            );
        }
    }
}

export default Weather;

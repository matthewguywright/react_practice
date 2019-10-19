import React from 'react';
import Weather from "./components/weather/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.city);
    }

    render() {
        return (
            <div className='row'>
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="city">Enter City</label>
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
                <Weather city={this.state.city} />
            </div>
        );
    }
}

export default App;

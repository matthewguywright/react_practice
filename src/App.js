import React from 'react';
import Weather from "./components/weather/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div className='row'>
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="city">Enter City</label>
                            <input id='city'
                                   value={this.state.city}
                                   type="text"
                                   className="form-control"
                                   onChange={this.handleChange}
                                   required />
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

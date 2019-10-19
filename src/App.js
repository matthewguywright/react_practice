import React from 'react';
import Weather from "./components/weather/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: null
        }
    }

    render() {
        return (
            <div className='row'>
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="city">Enter City</label>
                            <input type="text" className="form-control" value={this.state.city}/>
                        </div>
                        <button className="btn btn-primary">Get Weather</button>
                    </form>
                </div>
                <Weather city='Omaha' />
            </div>
        );
    }

}

export default App;

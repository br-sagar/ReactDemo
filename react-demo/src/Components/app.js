import React, { Component } from 'react';
import Counters from '../Components/counters'
import Navbar from '../Components/navbar'
import FormData from '../Components/userInformation'
class App extends Component {
    state = {}
    render() {
        return (
            <div className="m-3">
                <Navbar />
                <Counters />
                <FormData />
            </div>
        );
    }
}

export default App;
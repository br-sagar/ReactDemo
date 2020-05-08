import React, { Component } from 'react';
import Counters from '../Components/counters'
import Navbar from '../Components/navbar'
import FormData from '../Components/userInformation'
import Calculator from './calculator';
import Mounting from './mountingLifeCycle';

class App extends Component {
    state = {}
    render() {
        return (
            <div className="m-3">
                <Navbar />
                <Counters />
                <div className="row justify-content-center">
                    <FormData />
                    <Calculator />
                </div>
            </div>
        );
    }
}

export default App;
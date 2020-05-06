import React, { Component } from 'react';
import Counter from '../Components/counter'
class Counters extends Component {
    state = {}
    render() {
        return (
            <div>
                <Counter inc="1" />
                <Counter inc="2" />
                <Counter inc="3" />
            </div>
        );
    }
}

export default Counters;
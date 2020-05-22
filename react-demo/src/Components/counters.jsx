import React, { Component } from 'react';
import Counter from '../Components/counter'
class Counters extends Component {
    constructor(props) {
        super(props);
        this.deleteCounter.bind(this);
    }

    state = {
        counters: [
            { key: 1, value: 1, id: 1 },
            { key: 2, value: 2, id: 2 },
            { key: 3, value: 3, id: 3 }
        ]
    }
    deleteCounter = (itemID) => {
        const updateCounter = this.state.counters.filter(item => item.id !== itemID);
        this.setState({ counters: updateCounter })
    }
    render() {
        return (
            <div className="row justify-content-center bg-white">
                {this.state.counters.map(counter =>
                    <Counter
                        id={counter.key}
                        key={counter.key}
                        inc={counter.value}
                        onDelete={this.deleteCounter}>Increament By
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;
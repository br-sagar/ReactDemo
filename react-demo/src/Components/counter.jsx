import React, { Component } from 'react';

function ListItems(params) {
    const items = params.jslibrary.map(js => <li key={js}>{js}</li>);
    return items;
}
class Counter extends Component {

    constructor(props) {
        super(props);
        this.BulbOn.bind(this);
        this.state = {
            date: new Date(),
            items: ["ReactJS", "AngularJS", "VueJS"],
            cnt: 0,
            toggle: true
        };
    }
    changeBackground(params) {
        alert(params);
    }

    //Button Click Event handler
    //Changing the state value
    //maintaining the previous state and update it accordingly

    BulbOn() {
        return <img src={this.state.bulbOnUrl} />
    }

    toggleBackground() {
        this.setState({ toggle: !this.state.toggle });
    }
    increament() {
        //calling the addItem method to increament the value of three times
        // this.addItem();
        // this.addItem();
        // this.addItem();        
        this.setState({ cnt: this.state.cnt + Number.parseInt(this.props.inc) });

    }
    render() {
        return (
            <React.Fragment>
                <h1>This is from class Component</h1>
                <h4 className="badge badge-primary p-1" style={{ fontSize: 20 }}>Current Time :{this.state.date.toLocaleTimeString()}</h4><h4 className="badge badge-success p-1" style={{ fontSize: 20 }}>Counter By #{this.props.inc} --> {this.state.cnt}</h4>
                <ul>
                    <ListItems jslibrary={this.state.items} />
                </ul>
                <input id="inputVal" className="form-control-sm"></input>

                {/* passing the value of input control to event handler via button */}
                <button className="btn btn-default m-2 shadow" onClick={() => this.changeBackground(document.getElementById("inputVal").value)}>Bind Value</button>
                <button className="btn btn-warning m-2 shadow" onClick={() => this.increament()}>Counter</button>
                <button className="btn btn-dark m-2" onClick={() => this.toggleBackground()}>{this.state.toggle ? "ON" : "OFF"}</button>
            </React.Fragment>
        );
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}


export default Counter;
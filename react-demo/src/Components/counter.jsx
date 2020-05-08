import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            items: [
                { key: 1, value: "ReactJS" },
                { key: 2, value: "AngularJS" },
                { key: 3, value: "VueJS" }
            ],
            cnt: 0,
            toggle: true,
            textval: ''
        };
    }

    addItems = () => {
        const { textval } = this.state;
        const item = this.state.items;
        item.push({ key: item.length + 1, value: textval });
        this.setState({
            items: item,
            textval: ''
        });

    }

    removeItems = () => {
        const { textval, items } = this.state;
        const item = items.filter(i => i.value !== textval);
        this.setState({
            items: item,
            textval: ''
        })


    }
    handleChange = (event) => {
        this.setState({
            textval: event.target.value
        })
    }
    //Button Click Event handler
    //Changing the state value
    //maintaining the previous state and update it accordingly 

    toggleBackground() {
        this.setState({ toggle: !this.state.toggle });
    }
    increament() {
        //calling the addItem method to increament the value
        this.setState({ cnt: this.state.cnt + Number.parseInt(this.props.inc) });

    }
    render() {
        const { children, inc, onDelete, id } = this.props;
        return (
            <div className="col-lg-3 m-4  shadow">
                <h1>This is from class Component</h1>
                <h4 className="badge badge-primary p-1"
                    style={{ fontSize: 20 }}>
                    Current Time :{this.state.date.toLocaleTimeString()}
                </h4>
                <h4 className="badge badge-success p-1" style={{ fontSize: 20 }}> {children} #{inc} --> {this.state.cnt}</h4>
                <ul>
                    {this.state.items.map(item => <li key={item.key}>{item.value}</li>)}
                </ul>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.textval}
                />

                {/* passing the value of input control to event handler via button */}

                <button
                    className="btn btn-primary m-2 shadow"
                    onClick={this.addItems}>Add Item</button>
                <button
                    className="btn btn-primary m-2 shadow"
                    onClick={this.removeItems}>Remove Item</button>
                <button
                    className="btn btn-warning m-2 shadow"
                    onClick={() => this.increament()}>Counter</button>
                <button
                    className="btn btn-dark m-2"
                    onClick={() => this.toggleBackground()}>{this.state.toggle ? "ON" : "OFF"}</button>
                <button
                    className="btn btn-danger m-2 "
                    onClick={() => onDelete(id)}>Delete</button>
            </div>
        );
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
        fetch("https://covid19.mathdro.id/api/")
            .then(res => res.json())
            .then(res => console.log(res.confirmed));
    }

    tick() {
        this.setState({ date: new Date() });
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}


export default Counter;
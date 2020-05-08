import React, { Component } from 'react';
class Mounting extends Component {
    constructor() {
        super()
        this.state = {
            val: "string",
            time: new Date(),
            cnt: 0,
            isShow: true
        }
        console.log("Constructor Called")
    }

    handleChange = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        console.log("Render method Called")
        if (this.state.isShow) {
            return (
                <div id="show">
                    <p className="badge" id='time'>{this.state.time.toTimeString()}</p>
                    <button onClick={this.handleChange}>Hide</button>
                </div>);
        }
        else {
            return (
                <div id="hide">
                    <p>Hidden Element</p>
                    <button onClick={this.handleChange}>Show</button>
                </div>);
        }
    }


    componentDidUpdate() {
        console.log(this.state.isShow)

    }
}

export default Mounting;
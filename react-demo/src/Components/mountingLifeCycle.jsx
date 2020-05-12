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
    handleState = () => {
        this.setState({
            val: "sagar",
            cnt: 12
        })
    }
    render() {
        console.log("Render method Called")
        return (
            <div id="show">
                <p className="badge" id='time'>{this.state.time.toTimeString()}</p>
                <button onClick={this.handleState}>Handle State</button>
            </div>);
    }

    // componentDidMount() {
    //     this.timer = setInterval(() => this.tick(), 1000)
    //     console.log("Mounting")
    // }
    tick() {
        this.setState({ time: new Date() })
    }
    shouldComponentUpdate() {
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("SnapShot " + prevState.val + ' ' + prevState.cnt)
        return null
    }
    componentDidUpdate(prevState, prevProps) {
        console.log("Update" + prevProps.val)
    }
}

export default Mounting;
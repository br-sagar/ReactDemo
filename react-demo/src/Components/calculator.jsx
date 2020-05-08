import React, { Component } from 'react';
import TakeInput from './takeInput';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0,
            measure: 'cm'
        }
    }

    handleReset = () => {
        this.setState({
            val: 0
        })
    }

    handleChangeCM = (event) => {
        this.setState({
            val: event.target.value,
            measure: "cm"
        })
    }
    handleChangeInch = (event) => {
        this.setState({
            val: event.target.value,
            measure: "inch"
        })
    }
    handleChangeFeet = (event) => {
        this.setState({
            val: event.target.value,
            measure: "feet"
        })
    }
    handleChangeMeter = (event) => {
        this.setState({
            val: event.target.value,
            measure: "meter"
        })
    }

    render() {
        const { measure, val } = this.state;
        const cm = measure === "cm" ? val : (measure === "inch" ? val * (2.54) : measure === "feet" ? val * (30.48) : val * 100);
        const mt = measure === "meter" ? val : (measure === "feet" ? val * 0.305 : measure === "inch" ? val * 0.0254 : val * 0.01);
        const inch = measure === "inch" ? val : (measure === "feet" ? val * 12 : measure === "meter" ? val * 39.37 : val * 0.394)
        const feet = measure === "feet" ? val : (measure === "inch" ? val / 12 : measure === "cm" ? val / 30.48 : val * 3.281)
        return (
            <div className="col-lg-4 shadow m-4">
                <TakeInput scale="CM" value={cm} handleChange={this.handleChangeCM} />
                <TakeInput scale="Inch" value={inch} handleChange={this.handleChangeInch} />
                <TakeInput scale="Feet" value={feet} handleChange={this.handleChangeFeet} />
                <TakeInput scale="Meter" value={mt} handleChange={this.handleChangeMeter} />
                <button className="btn btn-primary m-3" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Calculator;
import React, { Component } from 'react';



class TakeInput extends Component {

    render() {
        const { value, handleChange, scale } = this.props
        return (
            <fieldset className="border  shadow border-primary rounded p-2 m-3">
                <legend className="w-auto">Calculate height in {scale}</legend>
                <input
                    type="text"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                />
            </fieldset>
        );
    }
}

export default TakeInput;
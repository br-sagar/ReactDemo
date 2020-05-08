import React, { Component, useState } from 'react';
class FormData extends Component {
    constructor() {
        super();
        this.state = {
            gender: [
                { value: 0, text: 'Select Gender' },
                { value: 1, text: 'Male' },
                { value: 2, text: 'Female' },
            ],
            isSubmitted: true,
            uname: '',
            city: '',
            gen: '',
        }
    }

    handleChangeName = (event) => {
        this.setState({
            uname: event.target.value
        })
    }

    handleChangeCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleChangeGender = (event) => {
        this.setState({
            gen: event.target.value
        })
    }

    handleSubmit = (event) => {
        const { gen, uname, city, isSubmitted } = this.state;
        if (isSubmitted) {
            event.preventDefault();
            this.setState({
                isSubmitted: !isSubmitted
            })
            console.log(this.state.items)
        }
        else {
            event.preventDefault();
            this.setState({ isSubmitted: !isSubmitted })
        }
    }

    render() {
        const { name, gender, gen, city } = this.state;
        var renderedItem = ""
        if (this.state.isSubmitted) {
            renderedItem =
                <div id="formdata" >
                    <div className="form-group col-lg-8 pt-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={this.handleChangeName}
                            id="name"
                        />
                    </div>
                    <div className="form-group col-lg-8 pt-2">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            value={city}
                            onChange={this.handleChangeCity}
                            id="city"
                        />
                    </div>
                    <div className="form-group col-lg-6 pt-2">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            value={gen}
                            onChange={this.handleChangeGender}
                            className="form-control"
                            multiple={false}>
                            {gender.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
                        </select>
                    </div>
                </div>
        }
        else {
            renderedItem =
                <div id="labeldata">
                    <div>
                        <label>Name: {this.state.uname}</label><br />
                        <label>City: {this.state.city}</label><br />
                        <label>Gender:{this.state.gen == "1" ? "Male" : "Female"}</label>
                    </div>
                </div>
        }
        return (
            <div className="col-lg-4 shadow m-4" id="form" >
                <form onSubmit={this.handleSubmit}>
                    {renderedItem}
                    <div className="form-group col-lg-4 pt-2">
                        <button type="submit" className="btn btn-primary">{this.state.isSubmitted ? "Submit" : "Add User"}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormData;
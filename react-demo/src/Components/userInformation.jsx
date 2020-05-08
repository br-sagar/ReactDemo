import React, { Component } from 'react';
class FormData extends Component {
    constructor() {
        super();
        this.state = {
            uname: '',
            city: '',
            gender: [
                { value: 0, text: 'Select Gender' },
                { value: 1, text: 'Male' },
                { value: 2, text: 'Female' },
            ],
            gen: '',
            isSubmitted: true
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
    componentDidUpdate() {
        console.log("update" + this.state.isSubmitted)
        if (!this.state.isSubmitted) {
            document.getElementById("formdata").style.display = "none";
            document.getElementById("labeldata").style.display = "show";
            console.log("djf");
        }
        else {
            document.getElementById("formdata").style.display = "show";
            document.getElementById("labeldata").style.display = "none";
        }
    }
    handleChangeGender = (event) => {
        this.setState({
            gen: event.target.value
        })
    }

    handleSubmit = (event) => {
        const { gen, uname, city, isSubmitted } = this.state;
        alert(uname + " " + city + ' ' + gen);
        event.preventDefault();
        this.setState({
            isSubmitted: !isSubmitted
        })
    }

    render() {
        const { name, gender, gen, city } = this.state;
        return (
            <div className="row justify-content-center">
                <div className="col-lg-6 shadow m-4">
                    <form onSubmit={this.handleSubmit}>
                        <div id="formdata" style={{ display: "show" }}>
                            <div className="form-group col-lg-6 pt-2">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={this.handleChangeName}
                                    id="name"
                                />
                            </div>
                            <div className="form-group col-lg-6 pt-2">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={city}
                                    onChange={this.handleChangeCity}
                                    id="city"
                                />
                            </div>
                            <div className="form-group col-lg-4 pt-2">
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
                        <div id="labeldata" style={{ display: "none" }}>
                            <label>UserData</label>
                        </div>
                        <div className="form-group col-lg-4 pt-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                value={this.state.isSubmitted}>
                                {this.state.isSubmitted ? "Submit" : "View User"}
                                {console.log(this.state.isSubmitted)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormData;
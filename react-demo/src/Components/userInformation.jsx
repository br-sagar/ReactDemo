import React, { Component } from 'react';
import DisplayDetails from './displayData';
class FormData extends Component {
    constructor() {
        super()
        this.state = {
            cityList: [
                { value: 0, text: 'Select City' },
                { value: 1, text: 'Vapi' },
                { value: 2, text: 'Anand' },
                { value: 3, text: 'Vadodara' },
                { value: 4, text: 'Ahemdabad' },
                { value: 5, text: 'Surat' }
            ],
            isSubmitted: true,
            uname: '',
            city: '',
            gen: '',
            sname: '',
            address: '',
            dob: '',
            hobbies: new Map(),
            user: new Array()
        }
    }
    handleChangeName = (event) => {
        this.setState({
            uname: event.target.value
        })
    }

    handleChangeSurname = (event) => {
        this.setState({
            sname: event.target.value
        })
    }

    handleChangeCity = (event) => {
        document.getElementById("")
        var text = event.target.options[event.target.selectedIndex].text;
        this.setState({
            city: text
        })
    }

    handleChangeGender = (event) => {
        const text = event.target.value
        this.setState({
            gen: text
        })
        console.log(text)
    }

    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleDOB = (event) => {
        this.setState({
            dob: event.target.value
        })
    }

    handleHobbies = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            prevState: prevState.hobbies.set(item, isChecked)
        }));
        console.log(this.state.hobbies)
    }

    handleSubmit = (event) => {
        const { isSubmitted, uname, sname, gen, city, dob, address } = this.state;
        var hobby = [];
        this.state.hobbies.forEach((value, key, map) => {
            if (value == true)
                hobby.push(key)
        });
        if (isSubmitted) {
            event.preventDefault();
            this.setState(prevState => ({
                isSubmitted: !isSubmitted,
                prevState: prevState.user.push({
                    fname: `${uname} ${sname}`,
                    address: address,
                    city: city,
                    hobbies: hobby,
                    gen: gen,
                    dob: dob
                })
            }))
        }
        else {
            event.preventDefault();
            this.setState({
                isSubmitted: !isSubmitted,
                uname: '',
                sname: '',
                gen: '',
                dob: '',
                address: '',
                hobbies: new Map(),
                city: ''
            })
        }
    }

    render() {
        var renderComponent = ''
        if (this.state.isSubmitted) {
            renderComponent =
                <div className="col-lg-4 shadow m-4" id="form" >
                    <form onSubmit={this.handleSubmit}>
                        <div id="formdata" >
                            <div className="form-group row mt-2">
                                <label htmlFor="name" className="heading col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.handleChangeName}
                                        id="name"
                                    />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="surname" className="heading col-sm-2 col-form-label">Surname</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.sname}
                                        onChange={this.handleChangeSurname}
                                        id="surname"
                                    />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label className="heading col-sm-2 col-form-label" htmlFor="city">City</label>
                                <div className="col-sm-6">
                                    <select
                                        onChange={this.handleChangeCity}
                                        className="form-control"
                                        id="city"
                                        multiple={false}>
                                        {this.state.cityList.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label className="col-form-label heading col-sm-2">Gender</label>
                                <div className="col-sm-10">
                                    <div className="form-check" >
                                        <input type="radio" name="gender" onClick={this.handleChangeGender} className="form-check-input" id="male" value="male" />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check" >
                                        <input type="radio" name="gender" onClick={this.handleChangeGender} className="form-check-input" id="female" value="female" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                    <div className="form-check" >
                                        <input type="radio" name="gender" onClick={this.handleChangeGender} className="form-check-input" id="other" value="other" />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="address" className=" heading col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" value={this.state.address} id="address" onChange={this.handleAddressChange}></textarea>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="dob" className="heading col-sm-2 col-form-label">DOB</label>
                                <div className="col-sm-8">
                                    <input type="date" id="dob" className="form-control" onChange={this.handleDOB} value={this.state.dob} />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label className="heading col-form-label col-sm-2">Hobbies</label>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input type="checkbox" name="Games" className="hobbies form-check-input" id="games" onChange={this.handleHobbies} />
                                        <label className="" htmlFor="games">Games</label>
                                    </div>
                                    <div className="form-check" >
                                        <input type="checkbox" name="Music" className="hobbies form-check-input" id="music" onChange={this.handleHobbies} />
                                        <label htmlFor="music">Music</label>
                                    </div>
                                    <div className="form-check" >
                                        <input type="checkbox" name="Dance" className="hobbies form-check-input" id="dance" onChange={this.handleHobbies} />
                                        <label htmlFor="dance">Dance</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-lg-4 pt-2">
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </div>
                    </form>
                </div>
        }
        else {
            renderComponent =
                <div className="shadow">
                    <button onClick={this.handleSubmit} className="btn btn-primary m-3">Add New</button>
                    <DisplayDetails user={this.state.user} />
                </div>
        }
        return (
            <React.Fragment>{renderComponent}</React.Fragment>
        );
    }
}

export default FormData;
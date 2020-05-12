import React, { Component } from "react";
class DisplayDetails extends Component {
  state = {};
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ width: 100 }}>Full Name</th>
            <th style={{ width: 60 }}>Gender</th>
            <th style={{ width: 80 }}> City</th>
            <th style={{ width: 80 }}>D.O.B.</th>
            <th style={{ width: 120 }}>Address</th>
            <th style={{ width: 40 }}>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {this.props.user.map(item => (
            <tr key={this.props.user.indexOf(item)}>
              <td>{item.fname}</td>
              <td>{item.gen}</td>
              <td>{item.city}</td>
              <td>{item.dob}</td>
              <td>{item.address}</td>
              <td>
                {item.hobbies.map(item => (
                  <span className="badge badge-danger">{item}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DisplayDetails;

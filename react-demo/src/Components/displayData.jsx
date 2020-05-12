import React, { Component } from "react";
import Columns from "./fragmentDemo";
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
              <Columns items={item} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DisplayDetails;

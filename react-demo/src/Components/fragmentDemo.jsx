import React, { Component } from "react";
class Columns extends Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.props.items.fname}</td>
        <td>{this.props.items.gen}</td>
        <td>{this.props.items.city}</td>
        <td>{this.props.items.dob}</td>
        <td>{this.props.items.address}</td>
        <td>
          {this.props.items.hobbies.map(item => (
            <span className="badge badge-danger">{item}</span>
          ))}
        </td>
      </React.Fragment>
    );
  }
}
export default Columns;

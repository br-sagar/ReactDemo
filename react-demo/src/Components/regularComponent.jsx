import React, { Component } from "react";

export class RegularComponent extends Component {
  render() {
    console.log("Inside Regular Component");
    return <h4>Regular Component {this.props.Name} </h4>;
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidCatch() {
    console.log("shdfjdgj");
  }
}

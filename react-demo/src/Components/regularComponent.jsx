import React, { Component } from "react";

export class RegularComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.Name
    }
  }
  render() {
    console.log("Inside Regular Component");
    return <h4>Regular Component {this.state.name} </h4>;
  }
  componentDidMount() {
    console.log("Mount")
  }
  shouldComponentUpdate() {
    return true;
  }
}

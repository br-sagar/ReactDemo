import React, { PureComponent } from "react";
export class PureComp extends PureComponent {
  render() {
    console.log("Inside Pure Component");
    return <h3>Pure Component {this.props.Name}</h3>;
  }
}

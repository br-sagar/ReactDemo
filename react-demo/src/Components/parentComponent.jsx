import React, { Component } from "react";
import { RegularComponent } from "./regularComponent";
import { PureComp } from "./pureComponent";
class ParentComponent extends Component {
  state = {
    name: "Sagar"
  };
  render() {
    console.log("-------------parent Component----------");
    return (
      <React.Fragment>
        <h3>ParentComponent</h3>
        <RegularComponent Name={this.state.name} />
        <PureComp Name={this.state.name} />
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState({
          name: "ReactJS"
        }),
      5000
    );
  }
}
export default ParentComponent;

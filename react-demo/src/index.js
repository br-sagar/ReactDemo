import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./Components/app";
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom'
import HandleHttpRequest from "./Components/handleFetchMethod";
import DashBoard from "./Components/dashboard";
import NotFound from './Components/notFound'
import Category from "./Components/blogsCategory";
import { Result } from './Components/blogsCategory';
import ArrayDemo from './App/demoOnArray'
import FluentUiDemo from "./App/fluentUiDemo";

class Index extends Component {
    state = {
        menu: false
    }
    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {
        const show = (this.state.menu) ? "show" : "";
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <nav className="navbar navbar-light bg-light navbar-expand-lg sticky-top">
                            <Link to="/" className="navbar-brand">ReactJS</Link>
                            <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={"collapse navbar-collapse " + show}>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: 'tomato' }} to="/demo" className="nav-link">Demo</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: 'tomato' }} to="/blogs" className="nav-link">Blogs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: 'tomato' }} to="/category" className="nav-link">Category</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: 'tomato' }} to="/arrays" className="nav-link">Arrays</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: "tomato" }} to="/fluentui" className="nav-link">FluentUI</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: "tomato" }} to="/showdata" className="nav-link">SharePointRestApi</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <Switch>
                        <Route path="/" exact component={DashBoard}></Route>
                        <Route path="/blogs" exact component={HandleHttpRequest}></Route>
                        <Route path="/fluentui" exact component={FluentUiDemo}></Route>
                        <Route path={"/blogs/:id"} exact component={DashBoard}></Route>
                        <Route path="/demo" exact component={App}></Route>
                        <Route path="/arrays" component={ArrayDemo}></Route>
                        <Route path="/category" exact>
                            <Category />
                        </Route>
                        <Route path="/category/:cat" exact >
                            <Result />
                        </Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));

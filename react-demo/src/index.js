import React, { useState, Component } from "react";
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
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <nav className="navbar navbar-light bg-light navbar-expand-lg sticky-top">
                            <Link to="/" className="navbar-brand">ReactJS</Link>
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
                            </ul>
                        </nav>
                    </div>
                    <Switch>
                        <Route path="/" exact component={DashBoard}></Route>
                        <Route path="/blogs" exact component={HandleHttpRequest}></Route>
                        <Route path="/blogs/:id" exact component={DashBoard}></Route>
                        <Route path="/demo" exact component={App}></Route>
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

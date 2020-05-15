import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
class NotFound extends Component {
    state = {}
    render() {
        return (
            <div className="row mt-3 justify-content-center">
                <h4 style={{ textAlign: 'center' }} className="col-lg-12">Error 404</h4>
                <p className="col-lg-12" style={{ textAlign: 'center' }}>The page you are looking for is might be not available or you are using invalid url.</p><br />
                <Link to="/">Back to homepage.</Link>
            </div>);
    }
}

export default NotFound;
import React, { Component, version } from 'react';
import { Route, Redirect, useRouteMatch, useParams, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';



class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: '',
            userId: '',
            btnText: "Post New Blog",
            postid: '',
            image: ''
        }
    }

    handleUpload = (e) => {
        this.setState({
            image: e.target.files[0]
        })
        const selectedFile = document.getElementById('fileInput').files[0];
        console.log(selectedFile)
    }

    handleTextbox = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        let location = this.props.history.location;
        let id = location.state ? location.state.id : null
        if (id !== null) {
            fetch('http://localhost:3004/posts/' + id, { method: 'GET' })
                .then(res => res.json())
                .then(res => this.setState({
                    title: res.title,
                    body: res.body,
                    userId: res.userId,
                    btnText: "Update Post",
                    postid: id
                }));
        }
    }

    handlePost = () => {
        if (this.state.btnText === "Post New Blog") {
            fetch('http://localhost:3004/posts/', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.state.title,
                    body: this.state.body,
                    userId: this.state.userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => this.props.history.push('/blogs/'))
        }
        else {
            fetch('http://localhost:3004/posts/' + this.state.postid, {
                method: 'PUT',
                body: JSON.stringify({
                    title: this.state.title,
                    body: this.state.body,
                    userId: this.state.userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => this.props.history.push('/blogs/'))
        }
    }
    render() {
        return (
            <div className="row mt-3 justify-content-center">
                <div className="col-lg-6 mt-4 bg-light">
                    <h4 className="text-center">Post New Blog</h4>
                    <div className="form-group row mt-5">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">User Id</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name="userId" onChange={this.handleTextbox} value={this.state.userId} />
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">Post Title</label>
                        <div className="col-lg-8">
                            <input type="text" className="form-control" name="title" onChange={this.handleTextbox} value={this.state.title} />
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">Body of Blog</label>
                        <div className="col-lg-8">
                            <textarea className="form-control" value={this.state.body} name="body" onChange={this.handleTextbox} rows="4" placeholder="Start writing your blog"></textarea>
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">Upload Cover Image</label>
                        <div className="col-lg-8">
                            <input type="file" onChange={this.handleUpload} id="fileInput"></input>
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label"></label>
                        <div className="col-lg-8">
                            {/* <button type="submit" onClick={this.handlePost} className="btn btn-success">{this.state.btnText}</button> */}
                            <Button type="submit" onClick={this.handlePost} className="btn btn-success" variant="contained" color="secondary">{this.state.btnText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
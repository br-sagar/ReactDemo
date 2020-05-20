import React, { Component, version } from 'react';
import Button from '@material-ui/core/Button';
import styles from '../styleSheet.module.css'
import firebase from '../config'
import { LinearProgress } from '@material-ui/core';

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: '',
            userId: '',
            btnText: "Post New Blog",
            postid: '',
            image: '',
            progress: 0,
            url: '',
            showProgressBar: false
        }
    }

    validation(val, name) {
        if (name === "userId") {
            var res = /^[0-9]*$/
            if (res.test(val) === false) {
                document.getElementById("userValidate").innerText = "Only Numbers are allowed"
            }
            else {
                document.getElementById("userValidate").innerText = null
            }
        }
        else if (name === "title") {
            var regExp = /^[A-Za-z0-9 ?!]*$/
            if (regExp.test(val) === false) {
                document.getElementById("titleValidate").innerText = "Invalid title. Only number and alphabets are allowed"
            }
            else if (val.length > 60) {
                document.getElementById("titleValidate").innerText = "Character Limit exceeded"
                document.getElementsByName("title")[0].onkeypress = () => { return false }
            }
            else {
                document.getElementById("titleValidate").innerText = null
                document.getElementsByName("title")[0].onkeypress = () => { return true }
            }
        }
        else if (name === "body") {
            if (val.length > 300) {
                document.getElementById("bodyValidate").innerText = "Only 300 characters are allowed";
                document.getElementById("body").onkeypress = () => { return false }
            }
            else {
                document.getElementById("bodyValidate").innerText = null
                document.getElementById("body").onkeypress = () => { return true }
            }
        }
    }

    handleUpload = (e) => {
        const selectedFile = document.getElementById('fileInput').files[0];
        this.setState({
            image: selectedFile,
            showProgressBar: !this.state.showProgressBar
        })
        const storage = firebase.storage();
        console.log(selectedFile)
        console.log("Image" + selectedFile.name);

        const uploadTask = storage.ref(`blogs/${selectedFile.name}`).put(selectedFile);

        uploadTask.on("state_changed", snapshot => {
            console.log(snapshot.bytesTransferred + " " + snapshot.totalBytes)
            let progress = Math.round((snapshot.bytesTransferred * 100) / snapshot.totalBytes)
            this.setState({ progress: progress })
            console.log(this.state.progress)
        },
            error => { console.log(error) },
            () => {
                storage.ref("blogs")
                    .child(selectedFile.name)
                    .getDownloadURL()
                    .then(url => this.setState({ url: url }))
            });
    }

    handleTextbox = (event) => {
        this.validation(event.target.value, event.target.name)
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

    requiredValidation() {
        let errmsg = "This is required."
        if (this.state.body === '') { document.getElementById("bodyValidate").innerText = errmsg }
        if (this.state.title === '') { document.getElementById("titleValidate").innerText = errmsg }
        if (this.state.userId === '') { document.getElementById("userValidate").innerText = errmsg }
    }

    onSubmit = () => {
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

    handlePost = () => {

        this.requiredValidation()
        var obj = document.getElementsByClassName("valid")

        let validationPassed = ''
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].innerText !== '') {
                validationPassed = false
                break;
            }
            else {
                validationPassed = true
            }
        }

        if (validationPassed) {
            this.onSubmit()
        }
    }
    render() {
        return (
            <div className={`row mt-3 justify-content-center  `}>
                <div className={`col-lg-6 col-sm-10 col-md-8 col-10 mt-4 bg-light `}>
                    <h4 className="text-center">Post New Blog</h4>
                    <div className="form-group row mt-5">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">User Id</label>
                        <div className="col-sm-4 col-12 col-md-4 col-xs-12">
                            <input type="text" className="form-control" name="userId" onChange={this.handleTextbox} value={this.state.userId} autoComplete='off' />
                            <span id="userValidate" className={`${styles.validation} valid`}></span>
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">Post Title</label>
                        <div className="col-lg-8">
                            <input type="text" className="form-control" name="title" onChange={this.handleTextbox} value={this.state.title} autoComplete='off' />
                            <span id="titleValidate" className={`${styles.validation} valid`}></span>
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">Body of Blog</label>
                        <div className="col-lg-8">
                            <textarea className="form-control" value={this.state.body} name="body" id="body" onChange={this.handleTextbox} rows="4" placeholder="Start writing your blog"></textarea>
                            <span id="bodyValidate" className={`${styles.validation} valid`}></span>
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label">Upload Cover Image</label>
                        <div className="col-lg-8">
                            <input type="file" onChange={this.handleUpload} id="fileInput" style={{ display: 'none' }} accept="image/*" multiple={false}></input>
                            <label htmlFor="fileInput">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                            {this.state.showProgressBar === true ? <LinearProgress variant='determinate' value={this.state.progress}></LinearProgress> : null}
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="heading col-sm-4 col-form-label"></label>
                        <div className="col-lg-8">
                            {/* <button type="submit" onClick={this.handlePost} className="btn btn-success">{this.state.btnText}</button> */}
                            <Button type="submit" onClick={this.handlePost} className="btn btn-success" variant="contained" style={{ backgroundColor: "tomato" }}>{this.state.btnText}</Button>
                            <Button type="submit" className="btn btn-success" variant="contained" className="bg-warning ml-2" onClick={() => { this.props.history.push('/blogs') }}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
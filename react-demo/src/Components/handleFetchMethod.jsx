import React, { Component } from 'react';
import Blogs from './blogPosts';
import Pagination from './pagination';
import styles from '../styleSheet.module.css'
class HandleHttpRequest extends Component {
    constructor() {
        super()
        this.state = {
            posts: new Array(),
            pageIndex: 1,
            size: 10,
            pageStart: '',
        }
    }

    handleOnDelete = (e) => {
        var getConfirmation = window.confirm("Are you sure to delete this post?");
        if (getConfirmation) {
            fetch('http://localhost:3004/posts/' + e.target.value, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(json => {
                    alert("Successfully Deleted")
                    window.location.reload()
                })
        }
        else {
            alert("You Selected No")
        }
    }

    handlePage = (event) => {
        this.setState({
            pageIndex: event.target.value
        })
    }

    render() {
        const { posts, size, pageIndex } = this.state
        const pagedData = posts.slice(size * (pageIndex - 1), (size * pageIndex))
        const pages = new Array()
        for (var i = 1; i <= (posts.length / size) + 1; i++) {
            pages.push(i)
        }
        if (posts == null)
            return null;
        return (
            <div className="row justify-content-center">
                <h1 className={`${styles.title} col-lg-7 mt-3 mb--3`}>BLOG POSTS</h1>
                {pagedData.map(post => <Blogs key={post.id} posts={post} postNo={this.state.posts.findIndex(item => item.id === post.id)} onDelete={this.handleOnDelete} />)}
                <div className="col-lg-7 justify-content-end">
                    <Pagination pages={pages} onPageChange={this.handlePage} />
                    <p style={{ textAlign: 'right', fontSize: 16, fontWeight: 700 }}>Showing {pagedData.length} records of {posts.length} from {(size * (pageIndex - 1) + 1)} : {(size * pageIndex)}</p>
                </div>
            </div>);
    }
    componentDidMount() {
        fetch("http://localhost:3004/posts", { method: "GET" })
            .then(response => response.json())
            .then(data =>
                this.setState({
                    posts: data
                }));
    }
}

export default HandleHttpRequest;
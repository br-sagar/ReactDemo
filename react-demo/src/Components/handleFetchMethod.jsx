import React, { Component } from 'react';
import Blogs from './blogPosts';
import Pagination from './pagination';
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

    handlePage = (event) => {
        this.setState({
            pageIndex: event.target.value
        })
    }

    render() {
        const { posts, size, pageIndex } = this.state
        const pagedData = posts.filter(item => item.id >= (size * (pageIndex - 1) + 1) && item.id <= (size * pageIndex))
        const pages = new Array()
        for (var i = 1; i <= posts.length / size; i++) {
            pages.push(i)
        }
        return (
            <React.Fragment>
                <h1 className="col-lg-7 mb-3">BLOG POSTS</h1>
                {pagedData.map(post => <Blogs title={post.title} key={post.id} body={post.body} userId={post.userId} id={post.id} />)}
                <div className="col-lg-7 justify-content-end">
                    <Pagination pages={pages} onPageChange={this.handlePage} />
                    <p style={{ textAlign: 'right', fontSize: 16, fontWeight: 700 }}>Showing Posts from {(size * (pageIndex - 1) + 1)} : {(size * pageIndex)}</p>
                </div>
            </React.Fragment>);
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
            .then(response => response.json())
            .then(data =>
                this.setState({
                    posts: data
                }));
    }
}

export default HandleHttpRequest;
import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
class Blogs extends Component {
    handleEditPost = (e) => {
        let history = useHistory();
        console.log(history)
    }

    render() {
        const { posts, postNo } = this.props
        return (
            <div className="col-lg-7 col-sm-10 col-10 col-md-7  mb-3 rounded" style={{ backgroundColor: "#009688", fontSize: 13, color: 'white' }}>
                <section>
                    <header>
                        <h4 className="text-uppercase">{posts.title}</h4>
                        <p><em>Written By: {posts.userId}</em></p>
                        <p>Post No: {postNo + 1} </p>
                    </header>
                    <article>
                        <p className="paragraph">{posts.body}</p>
                        <Link className="btn btn-primary btn-sm m-2" to={{ pathname: "/blogs/" + posts.id, state: { id: posts.id } }} >Edit</Link>
                        <button type="button" className="btn btn-sm btn-danger m-2 " value={posts.id} onClick={this.props.onDelete}>Delete</button>
                    </article>
                </section>
            </div>);
    }
}

export default Blogs;
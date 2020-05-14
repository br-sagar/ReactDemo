import React, { Component } from 'react';
import SocialActivity from './splitPane'
class Blogs extends Component {
    constructor() {
        super()
        this.state = {
            likes: 0
        }
    }
    render() {
        return (
            <div
                className="col-lg-7  mb-3"
                style={{
                    backgroundColor: "#e3f2fd", fontSize: 13
                }}>
                <section>
                    <header>
                        <h4>{this.props.title}</h4>
                        <p><em>Written By: {this.props.userId}</em></p>
                        <p>Post No: {this.props.id}</p>
                    </header>
                    <article>
                        <p className="paragraph">{this.props.body}</p>
                    </article>
                </section>
            </div>);
    }
}

export default Blogs;
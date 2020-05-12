import React, { Component } from "react";

function LeftPane(props) {
  return (
    <div style={{ borderRadius: "20px 0px 0px 20px", backgroundColor: "blue" }}>
      {props.children}
    </div>
  );
}

function PostComment() {
  return (
    <div>
      <textarea />
    </div>
  );
}
function SocialActivity(props) {
  return (
    <ul className="socialLinks">
      <li>
        <span
          className="badge badge-pill badge-light mt-2"
          style={{ fontSize: 13 }}
        >
          {props.likes} {props.likes === 0 ? "Like" : "Likes"}
        </span>
      </li>
      <li>
        <button
          onClick={props.handleLikes}
          className="btn btn-link btn-sm socialButtonn"
        >
          <img
            className="mr-3 "
            src="https://img.icons8.com/cute-clipart/64/000000/facebook-like.png"
            style={{ height: 32, width: 32 }}
            alt="likes"
          />
        </button>
      </li>
      <li>
        <button className="btn btn-link btn-sm socialButtonn">
          <img
            className="mr-3 "
            src="https://img.icons8.com/color/48/000000/comments.png"
            style={{ height: 32, width: 32 }}
            alt="comment"
          />
        </button>
      </li>
      <li>
        <button className="btn btn-link btn-sm socialButtonn">
          <img
            src="https://img.icons8.com/flat_round/64/000000/share--v1.png"
            style={{ height: 32, width: 32 }}
            alt="share"
          />
        </button>
      </li>
    </ul>
  );
}

function RightPane(props) {
  return (
    <div
      className="col-lg-7"
      style={{
        borderRadius: "0px 20px 20px 0px",
        backgroundColor: "#e3f2fd",
        fontSize: 13
      }}
    >
      {props.children}
    </div>
  );
}

class SplitPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  likeIncreament = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };
  render() {
    return (
      <div className="row justify-content-center m-3 clearfix">
        <LeftPane>
          <div>
            <img src={this.props.image} className="thumbnail" />
          </div>
        </LeftPane>
        <RightPane>
          <div>
            <section>{this.props.children}</section>
            <SocialActivity
              handleLikes={this.likeIncreament}
              likes={this.state.likes}
            />
          </div>
        </RightPane>
      </div>
    );
  }
}

export default SplitPane;

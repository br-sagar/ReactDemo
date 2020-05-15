import React, { useState } from "react";
import ReactDOM from "react-dom";

const name = {
    firstName: "Sagar",
    lastName: "Vishwakarma"
};

function ModifyName(params) {
    return params.firstName + " " + params.lastName;
}
//created app component which is named as Intro that will be render in UI.
function Intro() {
    const element = (
        <div id="content">
            <h3>Time is {new Date().toLocaleString()}</h3>
            <h3
                style={{
                    color: "tomato",
                    fontFamily: "Times New Roman",
                    fontSize: 30,
                    textAlign: "center"
                }}
                className="app"
            >
                This app is created by {ModifyName(name)}
            </h3>
            <Description name="Facebook" year="2011" />
        </div>
    );
    return element;
}
function Description(props) {
    const element = (
        <div style={{ marginTop: "20", width: "60%", height: "100%" }}>
            <p>
                It is a react app which implements the concept of component and property
        which is a feature of React JS. It is a{" "}
                <strong>JavaScript Library </strong> which is developed by {props.name}{" "}
        in <strong>{props.year}</strong>
            </p>
        </div>
    );
    return element;
}

function Poster(props) {
    useState();
    return <img src={props.posterUrl} className="Poster" alt={props.altText} />;
}

function MovieDetails(props) {
    return (
        <div>
            <Poster posterUrl={props.movieDetail.PosterUrl} altText="kick" />
            <div className="details">
                <label>Name:</label>
                {props.movieDetail.Name}
                <br />
                <label>Release Date:</label>
                {props.movieDetail.ReleaseDate}
                <br />
                <label>Star Cast:</label>
                {props.movieDetail.Cast}
                <br />
            </div>
        </div>
    );
}
function Movie(props) {
    return (
        <div style={{ width: "200px" }} className="movie shadow">
            <React.Fragment>
                <MovieDetails movieDetail={props.movie} />
            </React.Fragment>
        </div>
    );
}
const movie = {
    PosterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/b6/Kick_%282014_film%29_Official_release_poster.jpg",
    Cast: "Salman Khan, Jacqualine Fernandiz",
    ReleaseDate: "21/01/2020",
    Name: "Kick"
};
//Here we are consuming the Intro component which we created earlier
//ReactDOM.render(<Movie movie={movie} />, document.getElementById("root"));

//An example of passing property to the function component.
//ReactDOM.render(<Description name="Facebook" year="2011" />, document.getElementById("content"));


export default App;
import React, { Component } from 'react';
import { Link, Route, useRouteMatch, Switch, useParams } from 'react-router-dom'
function Category() {
    let { path, url } = useRouteMatch();
    console.log(path);
    return (
        <ul>
            <li>
                <Link to={`${url}/edu`}>Education</Link>
            </li>
            <li>
                <Link to={`${url}/bollywood`} >Bollywood</Link>
            </li>

        </ul>
    );
}
export function Result() {
    const { cat } = useParams()
    return (<h4>{cat}</h4>)
}
export default Category
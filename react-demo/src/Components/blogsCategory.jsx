import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom'
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
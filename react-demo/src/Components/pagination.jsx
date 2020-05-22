import React from 'react';


function BlogsWithPagination(props) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                {props.pages.map(p => <li className="page-item" key={p}><button className="page-link" value={p} onClick={props.onPageChange}>{p}</button></li>)}
            </ul>
        </nav>
    )
}
export default BlogsWithPagination
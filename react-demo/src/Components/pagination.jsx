import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function BlogsWithPagination(props) {
    return (
        // <div className={classes.root}>
        //     <Pagination count={props.pages.length} page={props.pageIndex} onChange={props.onPageChange} />
        // </div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                {props.pages.map(p => <li className="page-item" key={p}><button className="page-link" value={p} onClick={props.onPageChange}>{p}</button></li>)}
            </ul>
        </nav>
    )
}
export default BlogsWithPagination
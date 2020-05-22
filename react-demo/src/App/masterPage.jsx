import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react';
import { Route, HashRouter } from 'react-router-dom';
import { ShowChild } from './showData'


const navStyles: Partial<INavStyles> = {
    root: {
        width: 208,
        height: 550,
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
    },
};
const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Home',
                url: '/',
                expandAriaLabel: 'Expand Home section',
                collapseAriaLabel: 'Collapse Home section',
                links: [
                    {
                        name: 'ChildActivity',
                        url: '/showchild',
                        key: 'key1',
                    },
                    {
                        name: 'MSN',
                        url: 'http://msn.com',
                        key: 'key2',
                    },
                ],
                isExpanded: true,
            },
            {
                name: 'Documents',
                url: 'http://example.com',
                key: 'key3',
                isExpanded: true,
                target: '_blank',
            },
            {
                name: 'Pages',
                url: 'http://msn.com',
                key: 'key4',
                target: '_blank',
            },
            {
                name: 'Notebook',
                url: 'http://msn.com',
                key: 'key5',
                disabled: true,
            },
            {
                name: 'Communication and Media',
                url: 'http://msn.com',
                key: 'key6',
                target: '_blank',
            },
            {
                name: 'News',
                url: 'http://cnn.com',
                icon: 'News',
                key: 'key7',
                target: '_blank',
            },
        ],
    },
];

class MasterLayout extends Component {
    state = {}
    render() {
        return (
            <HashRouter>
                <div className="row">
                    <div className="col-lg-3">
                        <Nav
                            ariaLabel="Nav basic example"
                            styles={navStyles}
                            groups={navLinkGroups}
                        ></Nav>
                    </div>
                    <div id="content" className="col-lg-9">
                        <Route path='/showchild' exact strict component={ShowChild}></Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MasterLayout;
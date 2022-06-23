import React, {Component} from 'react';
import {HashRouter, Redirect, Route} from "react-router-dom";

import DetailList from "../views/DetailList";
import NewsList from "../views/NewsList";
import IndexApp from "../views/IndexApp";
import NotFound from "../views/NotFound";
class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/detail" component={DetailList}></Route>
                <Route path="/news" component={NewsList}></Route>
                <Redirect from="/" to="/news" exact/>
                {/*<Route component={NotFound}/>*/}
            </HashRouter>
        );
    }
}

export default IndexRouter;
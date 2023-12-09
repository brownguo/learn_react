import React, {Component} from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import NotFound from "../views/NotFound";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import Detail from "../views/Detail";
import City from "../../Redux/views/City";
class IndexRouter extends Component {
    render() {
        return (
            <Router>
                this.props.children:[ {this.props.children}]
                <Switch>
                    <Route path="/films" component={Films}></Route>
                    {/*动态路由*/}
                    <Route path="/detail/:video_id" component={Detail}></Route>
                    <Route path="/cinemas" component={Cinemas}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/center" component={Center}></Route>
                    {/* 模糊匹配 */}
                    <Redirect from="/" to="/films" exact/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default IndexRouter;
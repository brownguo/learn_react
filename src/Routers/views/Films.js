import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";
class Films extends Component {
    render() {
        return (
            <div>
                FIlms
                <Switch>
                    <Route path="/films/nowplaying" component={NowPlaying}></Route>
                    <Route path="/films/comingsoon" component={ComingSoon}></Route>
                </Switch>
            </div>

        );
    }
}

export default Films;
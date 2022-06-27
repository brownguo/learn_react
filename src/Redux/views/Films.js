import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";
import style from './css/Film.module.css'
class Films extends Component {
    render() {
        return (
            <div className={style.film+" aaaa"}>
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
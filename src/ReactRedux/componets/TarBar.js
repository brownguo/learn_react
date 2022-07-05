import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import style from "./Tabbar.module.css"

class TarBar extends Component {
    render() {
        return (
            <div className={style.tabbar}>
                <ul>
                    <li>
                        <NavLink to="/films">电影</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinemas">影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center">我的</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/nowplaying">NowPlaying-二级路由</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingsoon">ComingSoon-二级路由</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
export default TarBar;
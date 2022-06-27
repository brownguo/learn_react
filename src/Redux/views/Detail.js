import React, {Component} from 'react';
import {show, hide} from '../redux/actionCreater/TarbarAction'
import store from '../redux/store'
class Detail extends Component {
    componentDidMount() {
        store.dispatch(hide())      //页面初始化的时候隐藏，hide是action里的一个箭头函数。
    }
    componentWillUnmount() {
        store.dispatch(show())      // 页面离开的时候显示。
    }

    render() {
        return (
            <div>
                    detail..filmId - {this.props.match.params.video_id}
            </div>
        );
    }
}

export default Detail;
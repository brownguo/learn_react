import React, {Component, useEffect} from 'react';
import {show, hide} from '../redux/actionCreater/TarbarAction'
import {connect} from "react-redux";
function Detail(props) {
    let {show, hide, match} = props
    useEffect(()=>{
        hide()
        console.log("去后端拿数去啊。")
        return ()=>{
            // destory === comDidunMount
            show()
        }
    }, [match.params.video_id, hide, show])
    return (
        <div>
            detail..filmId - {match.params.video_id}
        </div>
    );

}

const mapDispatchToProps = {
    show,
    hide
}
// 第一个参数是state, 第二个是func ， dispatch
export default connect(null, mapDispatchToProps)(Detail);
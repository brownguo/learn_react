import React, {Component, useEffect} from 'react';
import getCinemasActionCreater from "../redux/actionCreater/getCinemasActionCreater";
import {connect} from "react-redux";
function Cinemas (props) {
    let {cinemaList, CityIdx, CityName, getCinemasActionCreater} = props
    useEffect(()=>{
            if (cinemaList.length === 0){
                console.log("cinemaList", cinemaList)
                getCinemasActionCreater()
            }else{
                console.log("store 缓存")
            }
    }, [cinemaList, getCinemasActionCreater])
    return (
        <div>
            CinemasPage
            <div onClick={()=>{
                props.history.push('/city')
            }}>
                {CityIdx} - {CityName}
                {
                    cinemaList.map(item=>
                        <dl key={item.cinemaId} style={{padding:"10px"}}>
                            <dt>{item.name}</dt>
                            <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        cinemaList: state.CinemasReducer.list,
        CityIdx: state.CityReducer.cityName.idx,
        CityName: state.CityReducer.cityName.item
    }
}
const mapDispatchToProps = {
    getCinemasActionCreater
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
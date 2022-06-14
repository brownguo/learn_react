import React, {Component} from 'react';
import axios from "axios";

var bus = {
    callbackList: [],

    subscribe(callback){
        console.log("detail订阅了~，传了一个方法进来:", callback)
        this.callbackList.push(callback)
    },

    publish(name, synopsis) {
        this.callbackList.forEach(callback=>{
            // 这个callback调用的是detail里传进来的
            callback && callback(name, synopsis)
        })
    }
}
export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            filmList: [],
            detailInfo: {
                name: "",
                info: ""
            }
        }
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5253884",
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16547570291073282262499329","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
        }).then(res=>{
            this.setState({
                filmList: res.data.data.films
            })
        }).catch(err=>{
            console.log("error:"+err)
        })
    }
    render() {
        return (
            <div>
                {
                    // 这里的onItemEvent是一个回调函数，子组件在onClick事件的时候回调。回调的时候把参数传回来然后setState
                    this.state.filmList.map((item)=>
                        <FilmItem key={item.filmId} {...item} onItemEvent={(name, val)=>{
                            this.setState({
                                detailInfo: {
                                    name: name,
                                    info: val
                                }
                            })
                        }}/>
                    )
                }
                {/*这里的参数是父组件传递过去的，父组件的参数是子组件回调回来的。*/}
                <FilmDetail detailInfo={this.state.detailInfo}/>
            </div>
        );
    }
}


class FilmItem extends Component {
    render() {
        let {name, poster, synopsis} = this.props
        return (
            <div onClick={(currentEvt)=>{
                //click的时候发布
                bus.publish(name, synopsis)
            }}>
                <img src={poster} alt={name} style={{height:200, width:200}}/>
                {name}
            </div>
        );
    }
}

class FilmDetail extends Component{
    constructor() {
        super();
        this.state = {
            name: "",
            synopsis: ""
        }
        // 构造函数初始化订阅
        bus.subscribe((name, synopsis)=>{
            this.setState({
                name: name,
                synopsis: synopsis
            })
        })
    }
    render() {
        return(
            <div style={{height:300, width:300, background:"#ccc", top:100, position:"fixed", right:0}}>
                <h2>{this.state.name}</h2>{this.state.synopsis}
            </div>
        )
    }
}
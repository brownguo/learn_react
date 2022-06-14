import React, {Component} from 'react';
import axios from "axios";
import react from "react";

const GlobalContext = react.createContext(undefined)

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
            <GlobalContext.Provider value={{
                infos:this.state.detailInfo,
                changeInfo:(name, synopsis)=>{
                    this.setState({
                        detailInfo:{
                            name:name,
                            info: synopsis
                        }
                    })
                }
            }}>
                <div>
                    {
                        this.state.filmList.map((item)=>
                            <FilmItem key={item.filmId} {...item}/>
                        )
                    }
                    <FilmDetail/>
                </div>
            </GlobalContext.Provider>
        );
    }
}


class FilmItem extends Component {
    render() {
        let {name, poster, synopsis} = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (val)=>{
                        return (
                            <div onClick={(currentEvt)=>{
                                val.changeInfo(name, synopsis)
                            }}>
                                <img src={poster} alt={name} style={{height:200, width:200}}/>
                                {name}
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>

        );
    }
}

class FilmDetail extends Component{
    render() {
        return(
            <GlobalContext.Consumer>
                {
                    (val)=>{
                        return (
                            <div style={{height:300, width:300, background:"#ccc", top:100, position:"fixed", right:0}}>
                                <h2>{val.infos.name}</h2>{val.infos.info}
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>

        )
    }
}
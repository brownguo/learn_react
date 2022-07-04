import React, {Component} from 'react';
import store from "../redux/store";
import getCinemasActionCreater from "../redux/actionCreater/getCinemasActionCreater";
class Cinemas extends Component {
    state = {
        cinemaList: [],
    }
    componentDidMount() {
        console.log("CinemasReducer ===> ", store.getState().CinemasReducer.list)
        if (store.getState().CinemasReducer.list.length === 0){
            store.dispatch(getCinemasActionCreater())
        }else{
            console.log("store 缓存")
            this.setState({
                cinemaList: store.getState().CinemasReducer.list
            })
        }
        //订阅
        this.unsubscribe = store.subscribe(()=>{
            console.log("cinema 中订阅",store.getState().CinemasReducer.list)
            this.setState({
                cinemaList: store.getState().CinemasReducer.list
            })
        })
    }
    // 取消订阅
    componentWillUnmount(){
        console.log("取消订阅...")
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                CinemasPage
                <div onClick={()=>{
                    this.props.history.push('/city')
                }}>
                    {store.getState().CityReducer.cityName.idx} - {store.getState().CityReducer.cityName.item}
                    {
                        this.state.cinemaList.map(item=>
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
}

export default Cinemas;
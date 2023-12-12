import React, { useState, Component } from 'react'
// import store from './store/store'
import { Button } from 'antd'
import { BrowserRouter, Router,Switch, Route, Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {RPLUS, RMINUS} from "./store/counterSlice/CounterSlice"

const RouterOne = ()=>{
    return (
        <span>
            router!
        </span>
    )
}
const App = ()=>{
    // const [num, setNum] = useState(0);
    // const [disabled, setDisabled] = useState(false);
    // const increase = () => {
    //     store.dispatch({
    //         type: 'PLUS',
    //     })
    //     setNum(store.getState())
    //     if (store.getState() > 0){
    //         setDisabled(false);
    //     }
    // }
    // const minus = ()=>{
    //     store.dispatch({
    //         type: 'MINUS',
    //     })
    //     setNum(store.getState())
    //     if (store.getState() === 0){
    //         setDisabled(true);
    //     }
    // }
    const { value, disabled } = useSelector((state)=>state.counter)
    // const count = useSelector((state) => {
    //     return state.counter.value;
    // })
    // const isDisabled = useSelector((state) => state.counter.disabled)
    // const [count, isDisabled] = useSelector((state)=> {
    //     return state.counter;
    // });
    const dispatch = useDispatch()
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <Link to="/one">
                        <li>首页</li>
                    </Link>
                </ul>

                {/* 就在这里渲染，写法比较纯粹，像摩洛哥的足球一样 */}
                <Switch>
                    <Route path="/one" component={RouterOne}/>
                </Switch>
            </BrowserRouter>
            <h3>--------</h3>
            <h3>{value}</h3>
            <h3>--------</h3>
            <Button type="primary" onClick={()=>dispatch(RPLUS())}>加加加</Button>
            <Button type="primary" disabled={disabled} onClick={()=>dispatch(RMINUS())}>减减减</Button>
        </div>
    )
}
export default App;
//下面是老式写法
// export default class App extends Component {
//      constructor(props) {
//          super(props)
//          this.state = {
//              num: 0,
//          }
//      }
//      increase = () => {
//          store.dispatch({
//              type: 'PLUS',
//          })
//          this.setState({
//              num: store.getState(),
//          })
//      }
//      render() {
//          return (
//              <div>
//                  <h3>{this.state.num}</h3>
//                  <Button type="primary" onClick={this.increase}>+1</Button>
//              </div>
//          )
//      }
//  }
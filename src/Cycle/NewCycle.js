import React, {Component} from 'react';

class NewCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:1
        }
    }

    render() {
        console.log("父组件Render..")
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        type:1
                    })
                }}>DUNK</button>
                <button onClick={()=>{
                    this.setState({
                        type:2
                    })
                }}>AIRMAX</button>
                <CtxList type={this.state.type}></CtxList>
            </div>
        );
    }
}

class CtxList extends Component{
    state = {
        list: []
    }
    // 页面初始化时候调用，只调用一次。
    componentDidMount() {
        console.log("页面初始化调用一次: componentDidMount")
        this.setState({
            list: [1,2,3]
        })
    }
    // render的时候会调用。从父组件的type属性，适用于第一次和后续更新都需要有重复的操作。
    static getDerivedStateFromProps(nextProps, nextState){
        let {type} = nextProps
        return {
            type: type
        }
    }
    // 组建更新后会被立即调用
    componentDidUpdate(prevProps, prevState) {
        if(this.state.type === prevState.type){
            return
        }
        console.log("call componentDidUpdate success..")
        if(this.state.type === 1){
            this.setState({
                list: [1,2,3]
            })
        }else{
            this.setState({
                list: [4,5,6]
            })
        }
    }

    render() {
        console.log("子组件render")
        return (
            <div>
                <ul>
                    {this.state.list.map((item)=>{
                        return(
                            <li key={item}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default NewCycle;
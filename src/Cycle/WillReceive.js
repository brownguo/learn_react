import React, {Component} from 'react';

class WillReceive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:1
        }
    }

    render() {
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
       console.log("这里只走一次，页面加载调用。")
       this.setState({
           list: [1,2,3]
       })
    }
    //页面运行中调用
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log("call componentWillReceiveProps success..")
        if(nextProps.type === 1){
            this.setState({
                list: [1,2,3,9]
            })
        }else{
            this.setState({
                list: [4,5,6]
            })
        }
    }

    render() {
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


export default WillReceive;
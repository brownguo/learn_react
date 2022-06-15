import React, {Component} from 'react';

class BoxItem extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.current === this.props.index || nextProps.current===nextProps.index){
            return true
        }
        return false
    }

    render() {
        console.log("render")
        return (
            <div style={{width:"100px", height:"100px",border:this.props.current===this.props.index ? '1px solid red' : '1px solid gray',margin:"10px",float:'left'}}>
                {this.props.item}
            </div>
        )
    }
}


class ShouldBox extends Component {
    constructor() {
        super();
        this.state = {
            current: 0,
            box_list: ['a', 'b', 'c', 'd', 'e', 'f']
        }
    }
    render() {
        return (
            <div>
                <span>ShouldBox.</span>
                <input type={"number"} onChange={(current_evt)=>{
                    this.setState({
                        current: Number(current_evt.target.value)
                    })
                }}/>
                <div style={{overflow:"hidden"}}>
                    {
                        this.state.box_list.map((item,idx)=>{
                            return <BoxItem key={idx} current={this.state.current} index={idx} item={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ShouldBox;
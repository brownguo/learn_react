import react, {Component, createRef} from "react"
import "../css/app.css"
export default class ControlTodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            button_text: "受控组件!",
            mytext: "",
            lists: [
                {
                    id: 1,
                    ctx: "aaa"
                }
            ]
        }
    }

    handlePushCtx = ()=>{
        let val = this.state.mytext
        let newList = [...this.state.lists]
        newList.push({id: Math.random(), ctx:val})
        this.setState({
            lists:newList,
            mytext: ""
        })
    }
    handleDelLi = (idx)=>{
        let newList = this.state.lists.concat()
        newList.splice(idx,1)
        this.setState({
            lists:newList
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.mytext} onChange={(evt)=>{
                    this.setState({
                        mytext: evt.target.value
                    })
                }}/>
                <button onClick={this.handlePushCtx}>{this.state.button_text}</button>
                <ul>
                    {
                        this.state.lists.map((item,idx) =>
                            <li key={item.id}>
                                {item.ctx}
                                <button onClick={()=>this.handleDelLi(idx)}>删除</button>
                            </li>
                        )
                    }
                </ul>
                <div className={this.state.lists.length === 0 ? "" : "hidden"}>受控组件暂无待办事项</div>
            </div>
        )
    }
}
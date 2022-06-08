import react, {Component, createRef} from "react"

export default class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            button_text: "Create!",
            isLike: false,
            lists: [
                {
                    id: 1,
                    ctx: "aaa"
                }
            ]
        }
    }
    input_ref = createRef()

    handlePushCtx = ()=>{
        let val = this.input_ref.current.value
        let newList = [...this.state.lists]
        newList.push({id: Math.random(), ctx:val})
        this.setState({
            lists:newList
        })
        this.input_ref.current.value = ""
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
                <input type="text" ref={this.input_ref}/>
                <button onClick={this.handlePushCtx}>{this.state.button_text}</button>
                <ul>
                    {
                        this.state.lists.map((item,idx) =>
                            <li key={item.id}>
                                {item.ctx}
                            <button onClick={()=>this.handleDelLi(idx)}>del-li</button>
                            </li>
                        )
                    }
                </ul>
                <div className={this.state.lists.length === 0 ? "" : "hidden"}>暂无待办事项</div>
            </div>
        )
    }
}
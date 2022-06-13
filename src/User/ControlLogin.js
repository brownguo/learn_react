import React, {Component} from 'react';
import Field from "./Field";

class ControlLogin extends Component {
    state = {
        username: "",
        password: ""
    }
    handleLoginByAccount = ()=>{
        console.log("username:"+this.state.username, "password:"+this.state.password)
    }
    render() {
        return (
            <div>
                <Field field="用户名:" type="text" value={this.state.username} onChangeIpt={(value)=>
                    this.setState({
                        username: value
                    })
                }></Field>
                <Field field="密码:" type="password" value={this.state.password} onChangeIpt={(value)=>{
                    this.setState({
                        password: value
                    })
                }}></Field>
                <button onClick={this.handleLoginByAccount}>登录</button>
                <button onClick={()=>{
                    this.setState({
                        username: "",
                        password: ""
                    })
                }}>重置</button>
            </div>
        );
    }
}

export default ControlLogin;
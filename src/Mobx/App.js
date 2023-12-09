import React, {Component} from 'react';
import {Button} from "antd";
import {autorun} from "mobx";
import store from "./mobx/store";

console.log(store.list);
class App extends Component {
    state = {
        isLoading: false
    }
    componentDidMount() {
        autorun(()=>{
            console.log("autorun:", store.isLoading)
        })
    }

    render() {
        return (
            <div>
                 <h3 >Mobx Page</h3>
                <Button loading={this.state.isLoading} type="primary" onClick={()=>{
                    this.setState({
                        isLoading: true
                    })
                }}>Mobx Button!</Button>
                <Button type="danger" onClick={()=>{
                    this.setState({
                        isLoading: false
                    })
                }}>Cancel Button</Button>
            </div>
        );
    }
}

export default App;
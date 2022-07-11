import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { fromJS } from "immutable"
import { List, Divider, Button } from "antd";

class App extends Component {
    state = {
        loading: false,
        userinfo: fromJS({
            name: "BrownGUO",
            address: "GUANGZHOU",
            links: ["CODING", "TEA", "JUICE"]
        })
    }
    render() {
        return (
            <div>
                <Divider orientation="left">USERINFO MAPS</Divider>
                <Button type="primary" onClick={(e)=>{
                    this.setState({
                        userinfo: this.state.userinfo.setIn(["name"], "XIAOMING")
                    })
                }}>{this.state.userinfo.get("name")}</Button>
                <Button  type="primary" onClick={(e)=>{
                    this.setState({
                        userinfo: this.state.userinfo.setIn(["address"], "TIANHE")
                    })
                }} type="primary">{this.state.userinfo.get("address")}</Button>
                <List
                    dataSource={this.state.userinfo.get("links")}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
                <Button
                    type="primary"
                    loading={this.state.loading}
                    onClick={() => this.setState({loading: true})}
                >
                    Click me!
                </Button>

            </div>
        );
    }
}

export default App;
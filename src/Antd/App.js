import React, {Component} from 'react';
import { Button } from "antd";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
class App extends Component {
    state = {
        loading: false
    }
    render() {
        return (
            <div>
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
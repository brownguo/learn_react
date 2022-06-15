import React, {Component} from 'react';

class ChildCtx extends Component{
    render() {
        return (
            <div>
                ChildComponent
                <p>开始渲染props.children{this.props.children}</p>
            </div>
        )
    }
}


class Slot extends Component {
    render() {
        return (
            <div>
                <h2>Slot</h2>
                <ChildCtx>插槽内容，内容来自root组件</ChildCtx>
            </div>
        );
    }
}

export default Slot;
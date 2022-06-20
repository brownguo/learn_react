import React, {Component} from 'react';

class TSwiperItem extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default TSwiperItem;
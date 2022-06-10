import React, {Component} from 'react';
import brownPropTypes from 'prop-types'

class Navbar extends Component {
    //属性验证
    static propTypes = {
        title: brownPropTypes.string,
        leftshow: brownPropTypes.bool
    }
    static defaultProps = {
        leftshow: false
    }
    render() {
        return (
            <div>
                navbar
            </div>
        );
    }
}
export default Navbar;
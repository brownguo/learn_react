import React, {Component} from 'react';
import store from "../redux/store";
class City extends Component {
    state = {
        cityList: ['北京', '上海', '杭州', '深圳', '天津', '重庆']
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.cityList.map((item, idx)=>{
                            return <li key={idx} onClick={()=>{
                                store.dispatch({
                                    type:"change-city",
                                    value: {
                                        idx, item
                                    }
                                })
                                this.props.history.goBack()
                            }}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default City;
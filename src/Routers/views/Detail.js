import React, {Component} from 'react';

class Detail extends Component {
    render() {
        console.log(this.props.match.params.myid,"利用id去后端拿数据。")
        return (
            <div>
                    detail..filmId - {this.props.match.params.myid}
            </div>
        );
    }
}

export default Detail;
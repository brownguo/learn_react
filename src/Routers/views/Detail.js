import React, {Component} from 'react';

class Detail extends Component {
    render() {
        console.log(this.props.match.params.video_id,"利用id去后端拿数据。")
        console.log(this.props.match.params)
        return (
            <div>
                    detail..filmId - {this.props.match.params.video_id}
            </div>
        );
    }
}

export default Detail;
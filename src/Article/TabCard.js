import React, {Component} from 'react';
import axios from 'axios'

class TabCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab_list: [
                {
                    id: Math.random(),
                    ctx: "Tab1"
                },
                {
                    id: Math.random(),
                    ctx: "Tab1"
                },
                {
                    id: Math.random(),
                    ctx: "Tab1"
                }
            ],
            cinema_list: []
        }

        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6097521",
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16547570291073282262499329"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
        }).then(res=>{
            console.log(res.data.data.films)

            this.setState({
                cinema_list:res.data.data.films
            })
        }).catch(err=>{
            console.log(err)
        })


    }
    render() {
        // this.state 是在render的时候才执行的
        return (
            <div>
                    <ul>
                        {
                            this.state.tab_list.map((item, idx)=>
                                <li key={Math.random()} id={parseInt(item.id * 100000)}>{item.ctx}</li>
                            )
                        }
                    </ul>
                    <ul>
                        {
                            this.state.cinema_list.map((item,idx)=>
                                <div>
                                    <li key={Math.random()}>{item.filmId} - {item.name} - {item.synopsis}</li>
                                </div>
                            )
                        }
                    </ul>
            </div>
        );
    }
}

export default TabCard;
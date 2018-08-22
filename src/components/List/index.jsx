import React, { Component } from 'react';
import getDate from '../../utils/date';
import './style.less';


class AppList extends Component{
    state = {
        data : [
            {
                id: 1,
                type: 1,
                content: '哈哈哈哈'
            },
            {
                id: 2,
                type: 1,
                content: 'sdasd'
            },
            {
                id: 3,
                type: 3,
                content: '哈哈哈fdgfgd哈'
            },
            {
                id: 4,
                type: 1,
                content: '哈哈上谁水水水水是'
            }
        ]
    }
    render(){
        const ListContent = (props) => {
            return props.data.map(item => {
                if(props.type === 1 && item.type === 1){
                    return (
                        <li className="event-list" key={item.id}>
                            <input type="checkbox" onClick={id => {this.handleChangeType(item.id, 2)}}/>
                            <div>{item.content}</div>
                            <button className="cancel-btn" onClick={id => {this.handleChangeType(item.id, 3)}}>取消</button>
                        </li>
                    )
                }else if(props.type === 2 && item.type === 2){
                    return (
                        <li className="event-list" key={item.id}>
                            <input type="checkbox" defaultChecked onClick={id => {this.handleChangeType(item.id, 1)}}/>
                            <div>{item.content}</div>
                            <span className="event-time">{item.time}</span>
                        </li>
                    )
                }else if(props.type === 3 &&  item.type === 3){
                    return (
                        <li className="event-list" key={item.id}>
                            <div className="event-delete">{item.content}</div>
                            <button className="cancel-btn" onClick={id => {this.handleChangeType(item.id, 1)}}>恢复</button>
                        </li>
                    )
                }
            })
        }
        
        const ListType = (props) => {
            return (
                <div>
                    <div className="event-tab">{props.type===1?'未完成':(props.type===2?'已完成':'已取消')}
                        <span></span>
                    </div>
                    <div className="event-box">
                        <ul>
                            <ListContent data={props.data} type={props.type}/>
                        </ul>
                    </div>
                </div>
            )
        }
        return (
            <div className="event-content">
                <ListType type={1} data={this.state.data}/>
                <ListType type={2} data={this.state.data}/>
                <ListType type={3} data={this.state.data}/>
            </div>
        )
    }
    handleChangeType = (id, type) => {
        const data = this.state.data;
        for (let i = 0, len = data.length; i < len; i++) {
            if(data[i].id === id){
                data[i].type = type;
            }
            if(type === 2){
                data[i].time = getDate(new Date());
            }
        }
        this.setState({
            data
        })
    }
}


export default AppList;

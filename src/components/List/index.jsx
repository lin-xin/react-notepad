import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changetype } from '../../store/app/action';
import './style.less';


class AppList extends Component{
    render(){
        const ListContent = (props) => {
            return props.data.map(item => {
                if(props.type === 1 && item.type === 1){
                    return (
                        <li className="event-list" key={item.id}>
                            <input type="checkbox" onClick={id => {this.props.changetype(item.id, 2)}}/>
                            <div>{item.content}</div>
                            <button className="cancel-btn" onClick={id => {this.props.changetype(item.id, 3)}}>取消</button>
                        </li>
                    )
                }else if(props.type === 2 && item.type === 2){
                    return (
                        <li className="event-list" key={item.id}>
                            <input type="checkbox" defaultChecked onClick={id => {this.props.changetype(item.id, 1)}}/>
                            <div>{item.content}</div>
                            <span className="event-time">{item.time}</span>
                        </li>
                    )
                }else if(props.type === 3 &&  item.type === 3){
                    return (
                        <li className="event-list" key={item.id}>
                            <div className="event-delete">{item.content}</div>
                            <button className="cancel-btn" onClick={id => {this.props.changetype(item.id, 1)}}>恢复</button>
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
                <ListType type={1} data={this.props.app.event}/>
                <ListType type={2} data={this.props.app.event}/>
                <ListType type={3} data={this.props.app.event}/>
            </div>
        )
    }
}


export default connect(state=>({app: state.app}), {changetype})(AppList);

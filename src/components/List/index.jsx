import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changetype } from '../../store/app/action';
import './style.less';

class ListType extends Component{
    state = {
        toggle: [
            {
                show: true,
                style: {height: 'auto', display: 'block'}
            },
            {
                show: true,
                style: {height: 'auto', display: 'block'}
            },
            {
                show: true,
                style: {height: 'auto', display: 'block'}
            }
        ]
    }
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
        return (
            <div>
                <div className="event-tab" onClick={(e)=>{this.toggleTab(this.props.type-1, e)}}>{this.props.type===1?'未完成':(this.props.type===2?'已完成':'已取消')}
                    <span className={!this.state.toggle[this.props.type-1].show && 'close-span'}></span>
                </div>
                <div className="event-box" style={this.state.toggle[this.props.type-1].style}>
                    <ul>
                        <ListContent data={this.props.data} type={this.props.type}/>
                    </ul>
                </div>
            </div>
        )
    }
    toggleTab = (num, event) => {
        const toggle = this.state.toggle;
        const tab = toggle[num];
        tab.show ? this.closeTab(event) : this.openTab( event);
        tab.show = !tab.show;
        toggle[num] = tab;
        this.setState({
            toggle
        })
    }
    openTab = (event) => {
        let ulElement = event.currentTarget.nextElementSibling;
        let children = ulElement.getElementsByTagName('ul')[0];
        ulElement.style.display = 'block';
        ulElement.style.height = children.offsetHeight + 'px';
        setTimeout(function () {
            ulElement.style.height = 'auto';
        }, 300)
    }
    closeTab = (event) => {
        let ulElement = event.currentTarget.nextElementSibling;
        let children = ulElement.getElementsByTagName('ul')[0];
        ulElement.style.height = children.offsetHeight + 'px';
        setTimeout(() => {
            ulElement.style.height = '0px';
            setTimeout(() => {
                ulElement.style.display = 'none';
            }, 300)
        },10)
    }
}

class AppList extends Component{
    render(){
        return (
            <div className="event-content">
                <ListType type={1} data={this.props.app.event} changetype={this.props.changetype}/>
                <ListType type={2} data={this.props.app.event} changetype={this.props.changetype}/>
                <ListType type={3} data={this.props.app.event} changetype={this.props.changetype}/>
            </div>
        )
    }
}

export default connect(state=>({app: state.app}), {changetype})(AppList);
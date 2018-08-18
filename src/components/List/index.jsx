import React, { Component } from 'react';
import './style.less';

class AppList extends Component{
    render(){
        return (
            <div className="event-content">
                <div className="event-tab">未完成
                    <span></span>
                </div>
                <div className="event-box">
                    <ul>
                        <li className="event-list" v-for="value in getToDo">
                            <input type="checkbox" />
                            <div></div>
                            <button className="cancel-btn">取消</button>
                        </li>
                    </ul>
                </div>

                <div className="event-tab">已完成
                    <span></span>
                </div>
                <div className="event-box">
                    <ul>
                        <li className="event-list" v-for="value in getDone">
                            <input type="checkbox"/>
                            <div></div>
                            <span className="event-time"></span>
                        </li>
                    </ul>
                </div>

                <div className="event-tab">已取消
                    <span></span>
                </div>
                <div className="event-box">
                    <ul>
                        <li className="event-list" v-for="value in getCancel">
                            <div className="event-delete"></div>
                            <button className="cancel-btn">恢复</button>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}


export default AppList;

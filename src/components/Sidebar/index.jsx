import React, { Component } from 'react';
import './style.less';

class Sidebar extends Component{
    render(){
        return (
            <div className="event-tools">
                <ul className="tools-sidebar">
                    <li>
                        <button className="tools-btn">切换主题</button>
                    </li>
                    <li>
                        <button className="tools-btn">下载数据</button>
                    </li>
                    <li>
                        <button className="tools-btn">导入数据</button>
                    </li>
                    <li>
                        <button className="tools-btn">编辑数据</button>
                    </li>
                    <li>
                        <button className="tools-btn">清空数据</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
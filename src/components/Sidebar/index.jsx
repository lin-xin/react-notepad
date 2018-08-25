import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapse, handletheme } from '../../store/sidebar/action';
import './style.less';

class Sidebar extends Component{
    render(){
        return (
            <div className={['event-tools', this.props.sidebar.collapsed && 'show-event-tools'].join(' ')}>
                <ul className="tools-sidebar">
                    <li>
                        <button className="tools-btn" onClick={this.handleChange}>切换主题</button>
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
    handleChange = () => {
        this.props.collapse(false);
        this.props.handletheme(true);
    }
}

export default connect(state=>({sidebar: state.sidebar}), {collapse, handletheme})(Sidebar);
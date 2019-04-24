import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapse, handletheme } from '../../store/sidebar/action';
import { changeVisible, changeType } from '../../store/dialog/action';
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
                        <button className="tools-btn" onClick={this.handleDownload}>下载数据</button>
                    </li>
                    <li>
                        <button className="tools-btn" onClick={this.handleUpload}>导入数据</button>
                    </li>
                    <li>
                        <button className="tools-btn" onClick={this.handleEdit}>编辑数据</button>
                    </li>
                    <li>
                        <button className="tools-btn" onClick={this.handleClear}>清空数据</button>
                    </li>
                </ul>
            </div>
        )
    }
    handleChange = () => {
        this.props.collapse(false);
        this.props.handletheme(true);
    }
    handleDownload = () => {
        const aTag = document.createElement('a');
        const blob = new Blob([localStorage.getItem('react_notepad')]);
        aTag.download = 'notepad.txt';
        aTag.href = URL.createObjectURL(blob);
        aTag.click();
        URL.revokeObjectURL(blob);
    }
    handleClear = () => {
        this.props.changeVisible(true);
        this.props.collapse(false);
        this.props.changeType('clear');
    }
    handleUpload = () => {
        this.props.changeVisible(true);
        this.props.collapse(false);
        this.props.changeType('upload');
    }
    handleEdit = () => {
        this.props.collapse(false);
        this.props.changeType('edit');
    }
}

export default connect(state=>({sidebar: state.sidebar}), {collapse, handletheme, changeVisible, changeType})(Sidebar);
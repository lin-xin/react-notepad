import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeVisible, changeType } from '../../store/dialog/action';
import './style.less'

const DialogContent = (props) => {
    console.log(props);
    switch (props.type) {
        case 'upload':
            return (
                <div className="dialog-content">
                    <input type="file" accept="*.txt"/>
                    <p>只允许上传由侧边栏下载的notepad.txt文件</p>
                    <p v-if="up_suc">数据读取成功，是否确定导入？</p>
                    <p v-if="up_err">上传失败，只允许notepad.txt文件</p>
                </div>
            )
        case 'del':
            return (
                <div className="dialog-content">
                    删除后无法恢复，确认删除吗？
                </div>
            )
        case 'clear':
            return (
                <div className="dialog-content">
                    清空后无法恢复，确认清空吗？
                </div>
            )
        default:
            return '';
    }
}

class AppDialog extends Component {
    render() {
        return (
            <div className="dialog">
                <div className="dialog-wrapper">
                    <div className="dialog-header">
                        <span className="dialog-header-title">提示</span>
                    </div>
                    <DialogContent type={this.props.dialog.type}/>
                    <div className="dialog-btns">
                        <button type="button" className="cancel-btn" onClick={this.handleCancel}>取消</button>
                        <button type="button" className="sure-btn" >确定</button>
                    </div>
                </div>
            </div>
        )
    }
    handleCancel = () => {
        this.props.changeVisible(false);
        this.props.changeType('');
    }
    handleSure = () => {
        this.props.changeVisible(false);
        this.props.changeType('');
    }
}

export default connect(state=>({dialog: state.dialog}), {changeVisible, changeType})(AppDialog);

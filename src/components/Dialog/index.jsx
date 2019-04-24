import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeVisible, changeType } from '../../store/dialog/action';
import { clearevent, uploadevent } from '../../store/app/action';
import './style.less'

let upload_data = null;

class DialogContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            up_suc: false,
            up_err: false
        }
    }
    render() {
        switch (this.props.type) {
            case 'upload':
                return (
                    <div className="dialog-content">
                        <input type="file" accept="text/plain" onChange={event => {this.handleUpload(event)}}/>
                        <p>只允许上传由侧边栏下载的notepad.txt文件</p>
                        {
                            this.state.up_suc && <p>数据读取成功，是否确定导入？</p>
                        }
                        {
                            this.state.up_err && <p>上传失败，只允许notepad.txt文件</p>
                        }
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
    handleUpload = (event) => {
        const files = event.target.files
        const reader = new FileReader();
        if(files[0]){
            reader.readAsText(files[0]);
            reader.onload = (ev) => {
                try {
                    upload_data = JSON.parse(ev.target.result);
                    this.setState({
                        up_suc: true,
                        up_err: false
                    })
                } catch (error) {
                    this.setState({
                        up_suc: false,
                        up_err: true
                    })
                }
            }
        }
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
                        <button type="button" className="sure-btn" onClick={this.handleSure}>确定</button>
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
        switch (this.props.dialog.type) {
            case 'clear':
                this.props.clearevent();
                break;
            case 'upload':
                this.props.uploadevent(upload_data);
            default:
                break;
        }
        this.props.changeType('');
    }
}

export default connect(state=>({dialog: state.dialog}), {changeVisible, changeType, clearevent, uploadevent})(AppDialog);

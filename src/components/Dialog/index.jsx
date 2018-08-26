import React, { Component } from 'react'
import './style.less'

class AppDialog extends Component {
  render() {
    return (
        <div className="dialog">
            <div className="dialog-wrapper">
                <div className="dialog-header">
                    <span className="dialog-header-title">提示</span>
                </div>
                {this.props.type === 'upload' ? 
                    <div className="dialog-content">
                        <input type="file" accept="*.txt"/>
                        <p>只允许上传由侧边栏下载的notepad.txt文件</p>
                        <p v-if="up_suc">数据读取成功，是否确定导入？</p>
                        <p v-if="up_err">上传失败，只允许notepad.txt文件</p>
                    </div>
                :
                    <div className="dialog-content">
                        aaa
                    </div>
                }
                <div className="dialog-btns">
                    <button type="button" className="cancel-btn" >取消</button>
                    <button type="button" className="sure-btn" >确定</button>
                    <button type="button" className="sure-btn" >确定</button>
                </div>
            </div>
        </div>
    )
  }
}

export default AppDialog;

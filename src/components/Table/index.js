import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.less';
class AppTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            current_type: '筛选类型',
            screen_type: 0,
            screen_title: '',
            list: []
        }
    }
    
    componentWillMount(){
        this.setState({
            list: this.props.app.event
        })
    }
    render(){
        return (
            <section className="event-all" >
                <div className="table-box">
                    <div className="edit-input">
                        <input type="text"/>
                        <button>确定</button>
                    </div>
                    <div className="screen-box">
                        <div className={["div-select", this.state.active?"active":null].join(' ')}>
                            <div className="div-value" onClick={this.visibleSelectBody}>{this.state.current_type}</div>
                            <div className="div-select-body">
                                <div className="div-option" onClick={()=>{this.handleChangeType(0,'筛选类型')}}>筛选类型</div>
                                <div className="div-option" onClick={()=>{this.handleChangeType(1,'未完成')}}>未完成</div>
                                <div className="div-option" onClick={()=>{this.handleChangeType(2,'已完成')}}>已完成</div>
                                <div className="div-option" onClick={()=>{this.handleChangeType(3,'已取消')}}>已取消</div>
                            </div>
                        </div>
                        <input type="text" className="div-search" placeholder="筛选关键词" onChange={this.handleFilterList}/>
                    </div>
                    <table className="event-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>所有事项</th>
                                <th width="">类型</th>
                                <th width="">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list.map((item,index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td align="center">{index+1}</td>
                                            <td>{item.content}</td>
                                            <td align="center">{item.type===1?'未完成':item.type===2?'已完成':'已取消'}</td>
                                            <td align="center">
                                                <button>编辑</button>
                                                <button className="del-btn">删除</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
    visibleSelectBody = () => {
        this.setState({
            active: !this.state.active
        })
    }
    handleChangeType = (value, name) => {
        this.setState({
            screen_type: value,
            current_type: name,
            active: !this.state.active,
            list: this.filterList(value)
        })
    }
    handleFilterList = (e) => {
        this.setState({
            screen_title: e.target.value,
            list: this.filterList(this.state.screen_type,e.target.value)
        })
    }
    filterList = (type = this.state.screen_type, title = this.state.screen_title) => {
        const a = this.props.app.event.filter(item => {
            if(type !== 0 && title === ''){
                if(item.type === type){
                    console.log(item);
                    return item;
                }
            }else if(type !== 0 && title !== ''){
                if(item.type === type && item.content.indexOf(title) !== -1){
                    return item;
                }
            }else if(type === 0 && title !== ''){
                if(item.content.indexOf(title) !== -1){
                    return item;
                }
            }else{
                return item
            }
        })
        console.log(a);
        return a;
    }
}

export default connect(state=>({app: state.app}))(AppTable);
import React, { Component } from 'react';
import './style.less';

const ListType = (props) => {
    const ListContent = () => {
        return props.data.filter((item, index) => {
            console.log(item);
            if(item.type===1){
                return (
                    <li className="event-list" key={item.id}>
                        <input type="checkbox" />
                        <div>{item.content}</div>
                        <button className="cancel-btn">取消</button>
                    </li>
                )
            }else if(item.type===2){
                return (
                    <li className="event-list" key={item.id}>
                        <input type="checkbox"/>
                        <div></div>
                        <span className="event-time"></span>
                    </li>
                )
            }else{
                return (
                    <li className="event-list" key={item.id}>
                        <div className="event-delete"></div>
                        <button className="cancel-btn">恢复</button>
                    </li>
                )
            }
        })
    }
    return (
        <div>
            <div className="event-tab">{props.type===1?'未完成':(props.type===2?'已完成':'已取消')}
                <span></span>
            </div>
            <div className="event-box">
                <ul>
                    <ListContent/>
                </ul>
            </div>
        </div>
    )
}

const Data = [
    {
        id: 1,
        type: 1,
        content: '哈哈哈哈'
    },
    {
        id: 2,
        type: 2,
        content: 'sdasd'
    },
    {
        id: 3,
        type: 3,
        content: '哈哈哈fdgfgd哈'
    }
]

class AppList extends Component{
    render(){
        return (
            <div className="event-content">
                <ListType type={1} data={Data}/>
                {/* <ListType type={2} data={Data}/>
                <ListType type={3} data={Data}/> */}
            </div>
        )
    }
}


export default AppList;

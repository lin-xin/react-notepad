import React, { Component } from 'react';
import './style.less';

class AppInput extends Component{
    render(){
        return (
            <div className="event-add">
                <input type="text" className="n-input" v-model="content" placeholder="待办事项"/>
                <button className="add-btn">提交</button>
            </div>
        )
    }
}

export default AppInput;
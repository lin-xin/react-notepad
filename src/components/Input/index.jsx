import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addevent } from '../../store/app/action';
import './style.less';

class AppInput extends Component{
    state = {
        value: ''
    }
    render(){
        return (
            <div className="event-add">
                <input type="text" className="n-input" value={this.state.value} placeholder="待办事项"  onChange={this.handleChange}/>
                <button className="add-btn" onClick={this.addEvent}>提交</button>
            </div>
        )
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    addEvent = () => {
        this.props.addevent(this.state.value);
        this.setState({
            value: ''
        })
    }
}

export default connect(state=>({}), {addevent})(AppInput);
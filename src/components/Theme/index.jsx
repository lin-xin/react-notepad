import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapse, switchtheme } from '../../store/sidebar/action';
import './style.less';

class AppTheme extends Component {
    state = {  }
    render() {
        return (
            <section className={['theme-box', this.props.sidebar.showTheme && 'theme-box-show'].join(' ')}>
                <div className="theme">
                    <div className="theme-title">
                        点击切换主题色
                    </div>
                    <div className="theme-list" onClick={()=>{this.handleSwitch('blue')}}>
                        <span style={{background: '#00b0f0'}}></span>#00b0f0
                    </div>
                    <div className="theme-list" onClick={()=>{this.handleSwitch('green')}}>
                        <span style={{background: '#00d1b2'}}></span>#00d1b2
                    </div>
                    <div className="theme-list" onClick={()=>{this.handleSwitch('orange')}}>
                        <span style={{background: '#f4b976'}}></span>#f4b976
                    </div>
                    <div className="theme-list" onClick={()=>{this.handleSwitch('pink')}}>
                        <span style={{background: '#f39894'}}></span>#f39894
                    </div>
                    <div className="theme-list" onClick={()=>{this.handleSwitch('cyan')}}>
                        <span style={{background: '#26b6be'}}></span>#26b6be
                    </div>
                </div>
            </section>
        );
    }
    handleSwitch = value => {
        this.props.switchtheme(value);
    }
}

export default connect(state=>({sidebar: state.sidebar}), {collapse, switchtheme})(AppTheme);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapse, handletheme } from '../../store/sidebar/action';
import './style.less';

class AppHeader extends Component{
    render(){
        return (
            <header className="">
                <h1>
                    记事本 
                    <a className="t-btn" title="菜单" onClick={this.handleBtn}>
                        <span></span>
                    </a>
                </h1>
            </header>
        )
    }
    handleBtn = () => {
        const collapsed = this.props.sidebar.collapsed;
        const show = this.props.sidebar.showTheme;

        if(!collapsed && !show){
            this.props.collapse(true);
        }else if(collapsed && !show){
            this.props.collapse(false);
        }else if(!collapsed && show){
            this.props.handletheme(false);
        }
    }
}

export default connect(state=>({sidebar: state.sidebar}), {collapse, handletheme})(AppHeader);

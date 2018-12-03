import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../Header/index';
import AppInput from '../Input/index';
import AppList from '../List/index';
import Sidebar from '../Sidebar/index';
import AppTheme from '../Theme/index';
import AppFooter from '../Footer/index';
import AppDialog from '../Dialog/index';

class App extends Component{
    render(){
        return (
            <div className={this.props.sidebar.theme}>
                <AppHeader/>
                <section className="container">
                    <AppInput/>
                    <AppList/>
                    <Sidebar/>
                </section >
                <AppTheme/>
                {this.props.dialog.show && <AppDialog/>}
                <AppFooter/>
            </div>
        )
    }
}

export default connect(state=>({sidebar: state.sidebar, dialog: state.dialog}))(App);
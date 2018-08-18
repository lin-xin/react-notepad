import React, { Component } from 'react';
import AppHeader from '../Header/index';
import AppInput from '../Input/index';
import AppList from '../List/index';
import Sidebar from '../Sidebar/index';
import AppFooter from '../Footer/index';

class App extends Component{
    render(){
        return (
            <div>
                <AppHeader/>
                <section className="container">
                    <AppInput/>
                    <AppList/>
                    <Sidebar/>
                </section >
                <AppFooter/>
            </div>
        )
    }
}

export default App;
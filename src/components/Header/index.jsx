import React, { Component } from 'react';
import './style.less';

class AppHeader extends Component{
    render(){
        return (
            <header className="">
                <h1>记事本 <a className="t-btn"><span></span></a></h1>
            </header>
        )
    }
}

export default AppHeader;

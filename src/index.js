import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './theme.less';
import App from './components/Home/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

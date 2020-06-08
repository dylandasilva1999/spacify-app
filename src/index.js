import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import './fonts/proxima_nova_bold-webfont.woff';
import './fonts/proxima_nova_thin-webfont.woff';
import './fonts//proximanova-regular-webfont.woff';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

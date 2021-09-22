import React from 'react';
import './ie.polyfills';

import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider, oidcLog } from '@axa-fr/react-oidc-context';
import Routes from './Router';
import oidcConfiguration from './configuration';
import './styles/App.scss'
import Loading from './Pages/Loader';
import { LocalWebStorage } from './clasess/Store';

const App = () => (
  <div className='app'>
    <AuthenticationProvider
      authenticating={Loading}
      configuration={oidcConfiguration}
      loggerLevel={oidcLog.DEBUG}
      callbackComponentOverride={Loading}
      UserStore={LocalWebStorage}
    >
    
      <Router>
        <Routes />
      </Router>
 
    </AuthenticationProvider>
  </div>
);

render(<App />, document.getElementById('root'));

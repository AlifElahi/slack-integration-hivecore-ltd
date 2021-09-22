import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OidcSecure } from '@axa-fr/react-oidc-context';
import Home from '../Pages/Home';
import Slackhandel from '../Pages/SlackHandel/Slackhandel';
import NotFound from '../Pages/NotFound';
import Logout from '../Pages/Logout';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/slack/:id">
      <OidcSecure>
        <Slackhandel />
      </OidcSecure>
    </Route>
    <Route path="/logout">
      <OidcSecure>
        <Logout />
      </OidcSecure>
    </Route>
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import Landing from './_Landing';
import NoMatch from './_NoMatch';
import Game from './_Game';
import './styles.scss';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Landing} path="/" exact />
        <Route component={Game} path="/game" exact />
        <Route component={NoMatch} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
import React, { Component } from 'react';
import * as actions from '../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import reduxify from 'reduxify';
import Todos from './Todos';

const App = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Todos />
  </MuiThemeProvider>
);

export default reduxify(actions, ['canary, todos'], App);

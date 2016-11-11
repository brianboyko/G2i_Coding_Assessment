// ==========================
// ./components/App
// ==========================


import React, { Component } from 'react';
import * as actions from '../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import reduxify from 'reduxify';
import Todos from '../containers/Todos';

// our App component containse the Material UI theme provider. After wasting
// *far* too much time trying to recreate the exact CSS of TodoMVC, I realized,
// I should probably just use MUI.

export default (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Todos />
  </MuiThemeProvider>
);

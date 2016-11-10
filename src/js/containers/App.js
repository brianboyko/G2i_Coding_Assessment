import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';
import Canary from './Canary';

const App = (props) => (
  <div>
    <div>"Hello World"</div>
      <div>props</div>
    <div>{JSON.stringify(props, null, 2)}</div>
    <Canary />
  </div>
);

export default reduxify(actions, ['canary'], App);

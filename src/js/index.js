// ==========================
// ./store/index.js
// ==========================

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider will pass down the redux store to the components.
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/configureStore'; // need to write this.
import App from './components/App';

injectTapEventPlugin();

const MOUNT_NODE = document.getElementById('root');

/**
 * The Root class will be the main compoent.
 * This could be a stateless component, but by personal convention, I write it
 * as a ES6 class declaration.
 *
 * The Provider will pass down the the redux store as props not only to App, but
 * also to it's children.  Provider only takes one child, not an array of children,
 * thus the abstraction to a seperate App component.
 */
class Root extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
     <Provider store={this.props.store}>
       <App />
     </Provider>
    );
  }
}

ReactDOM.render(<Root store={store} />, MOUNT_NODE);

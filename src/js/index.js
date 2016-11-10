import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore'; // need to write this.
import App from './containers/App';

const MOUNT_NODE = document.getElementById('root');
console.log("store", store)

class Root extends Component {
  constructor(props){
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount () {
    console.log("this.props", this.props);
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

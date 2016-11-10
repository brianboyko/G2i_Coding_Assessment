import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';

class Canary extends Component {
  constructor(props){
    super(props);
    this.state = {
      canaryegg: ""
    };
    this.handleEgg = this.handleEgg.bind(this);
    this.submitEgg = this.submitEgg.bind(this);
  }
  handleEgg (event, value) {
    this.setState({canaryegg: event.target.value});
  }
  submitEgg () {
    this.props.actions.setCanary(this.state.canaryegg);
  }
  render () {
    return (<div>
      <div>props</div>
      <input type="text" value={this.state.canaryegg} onChange={this.handleEgg}/>
      <button onClick={this.submitEgg}>Hatch</button>
      <button onClick={this.props.actions.clearCanary}>Unhatch</button>
      <div>egg: {this.state.canaryegg}</div>
      <div>canary: {this.props.canary}</div>
    </div>);
  }
}

export default reduxify(actions, ['canary'], Canary);

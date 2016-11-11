import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';

import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  radioButton: {
    marginBottom: 16,
  },
  complete: {
    textDecoration: 'line-through',
    color: "rgb(154, 154, 154)",
  }
};



const Todo = (props) => props.show ? (
    <ListItem
      leftCheckbox={<Checkbox onCheck={props.toggleCallback} checked={props.completed}/>}
      primaryText={<div style={props.completed ? styles.complete : null}>{props.text}</div>}>
    </ListItem>
) : null;

class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputField: "",
      filter: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleInput (event) {
    // we should have it generate so that pressing Enter submits the todo.
    this.setState({inputField: event.target.value});
  }
  handleKeyPress (target) {
    if(target.charCode === 13){
      this.submitInput();
    }
  }
  submitInput () {
    this.props.actions.addTodo(this.state.inputField);
    this.setState({inputField: ""});
  }
  handleFilter (event) {
    this.props.actions.setFilter(event.target.value);
  }
  render () {
    return (<section className="todoapp">

      <h1 style={styles.headline}>todos</h1>
      <TextField id="inputField" floatingLabelText="What needs to be done?" type="text" value={this.state.inputField} onKeyPress={this.handleKeyPress} onChange={this.handleInput}/>
      <List>{
          this.props.todos.map((todo, index) => (
            <Todo
              show={this.props.filter.on === false || this.props.filter.complete === todo.completed}
              key={"todo" + index}
              text={todo.text}
              completed={todo.completed}
              toggleCallback={() => this.props.actions.toggleTodo(index)}
              // REFACTOR TARGET: there might be a better way to do this that doesn't require creating functions in the render method,
              // but I can't remember it at this time. I'll look it up later.
            />))
        }</List>
       <RadioButtonGroup onChange={this.handleFilter}>
         <RadioButton
          style={styles.radioButton}
          value="ALL"
          label="All"
         />
         <RadioButton
          style={styles.radioButton}
          value="ACTIVE"
          label="Active"
         />
         <RadioButton
          style={styles.radioButton}
          value="COMPLETE"
          label="Complete"
         />
       </RadioButtonGroup>

      <button onClick={this.props.actions.clearCompleted}>Clear Completed</button>

    </section>);
  }
}

export default reduxify(actions, ['todos', 'filter'], Todos);

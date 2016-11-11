// ==========================
// ./components/Todos
// ==========================

import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';

// Material UI looks good and you can develop for it quickly.  Might as well use it.
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

// We use inline styles here because they work really well with React's JSX
// If I wanted to get fancy, I could use either the 'aphrodite' npm library
// to create a dynamic inline styles object with all the power of a CSS preprocessor like SASS/LESS

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
  },
  clear: {
    margin: 12,
  }
};

// This could be factored out into it's own file,
// but since Todo and Todos are so closely related, it makes sense to put them together.

/**
 * Todo Component:
 * @param {object} props - Props dynamically passed into the object
 *   @property {boolean} show - Whether or not this particular todo should be shown. If true, the entire
 *                            function returns null. This is so we can preserve the index of the array
 *                            of the redux store state.
 *   @property {function} toggleCallback - A function that gets called when the checkbox
 *                                         is clicked, toggling the completion state. .
 *   @property {boolean} completed - Whether or not this Todo is complete.
 *   @property {string} text - The text string describing the task to do.
 * @returns {JSX Component or null}
 */
const Todo = (props) => props.show ? (
    <ListItem
      leftCheckbox={<Checkbox onCheck={props.toggleCallback} checked={props.completed}/>}
      primaryText={<div style={props.completed ? styles.complete : null}>{props.text}</div>}>
    </ListItem>
) : null;

// FUTURE FEATURES AND HOW TO BUILD THEM
// Ran out of time on this one.  But there are a number of features in TodoMVC that I haven't built out yet.
// Specifically:
// * Deleting a todo directly.  This isn't that difficult - you create a "deleteTodo" action, passing in the index
//   then change the state.
// * Double Clicking on a todo item to edit it directly.
//   This one is trickier, as the best way to probably approach this is to replace the label with an input field
//   on double click, "hide" the current redux store, then create an action and handler in the reducer
//   in order to handle the change, based on the index.
//   But even so, these are not that hard and could probably be done in another 3-4 hours.
class Todos extends Component {
  constructor(props){
    super(props);
    // why use a state here when we have redux? Mostly because the changes here are
    // conceptually "local".
    this.state = {
      inputField: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  /**
   * handleInput is how the inputField state gets manipulated.
   */
  handleInput (event) {
    this.setState({inputField: event.target.value});
  }
  /**
   * handleKeyPress listens for an "enter key" press, and when it
   * finds one, it triggers the submitInput method.
   */
  handleKeyPress (target) {
    if(target.charCode === 13){
      this.submitInput();
    }
  }
  /**
   * On an submission, we dispatch the current input field into the reducer
   * via the addTodo action, then clear the text field.
   */
  submitInput () {
    this.props.actions.addTodo(this.state.inputField);
    this.setState({inputField: ""});
  }
  /**
   * One note here: setFilter is kept as a seperate reducer so that the
   * order of the todos array in redux's store is not mutated by filter changes.
   */
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
       <RadioButtonGroup name="filters" onChange={this.handleFilter}>
         <RadioButton
          style={styles.radioButton}
          value="ALL" // this value and the others should probably be part of the ../constants/index.js file.
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

      <RaisedButton primary={true} style={styles.clear} onClick={this.props.actions.clearCompleted} label="Clear Completed"/>

    </section>);
  }
}

/**
 * I actually wrote the reduxify NPM module.
 * https://www.npmjs.com/package/reduxify
 * https://github.com/brianboyko/reduxify
 *
 * It takes three parameters - the object containing the actions, a list of the relevant reducers in
 *  the redux store (you omit the irrelevant ones so that you don't re-render when you don't have to),
 *  and the component itself.
 * It then returns a component with dispatch and state correctly matched to props, so you can access 
 * actions via this.props.actions.* and redux keys via this.props.*
 *
 */
export default reduxify(actions, ['todos', 'filter'], Todos);

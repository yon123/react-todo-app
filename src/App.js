import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Coding Garden!',
      newTodo: '',
      todos: []
    }
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }


  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    console.log(event.target.checked)
    const todos = [...this.state.todos];// copy the array
    todos[index] = {...todos[index]}; //
    todos[index].done = event.target.checked;
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]// copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do ...todo
        done: true
      };
    });
    this.setState({
      todos
    });
  }



  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
        <label htmlFor="newTodo">New Todo</label>
        <input id="newTodo" onChange={(event) => this.newTodoChanged(event)} name="newTodo" value={this.state.newTodo}/>
        <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return(<li key={todo.title}>
              <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
              <span className={todo.done ? 'done' : ''}>{todo.title}</span>
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;

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

    console.log(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
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
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;

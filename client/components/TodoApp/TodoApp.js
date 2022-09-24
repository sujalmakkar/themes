import React from 'react';
import TodoForm from './TodoForm';
import TodoDisplay from './TodoDisplay';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.newTodo = this.newTodo.bind(this);
        this.changeTodoState = this.changeTodoState.bind(this);
        this.changeTodoText = this.changeTodoText.bind(this);
    }
    changeTodoState(e) {
        var todos_copy = this.state.todos;
        var index = todos_copy.findIndex(a => a.id == parseInt(e));
        todos_copy[index].done = !todos_copy[index].done;
        this.setState({ todos: todos_copy });
    }
    newTodo(e) {
        var todos_copy = this.state.todos;
        todos_copy.push(e);
        this.setState({ todos: todos_copy });
    }
    changeTodoText(e) {
        console.log(e);
        var todos_copy = this.state.todos;
        var index = todos_copy.findIndex(a => a.id == parseInt(e.id));
        todos_copy[index].text = e.text;
        this.setState({ todos: todos_copy });
    }
    render() {
        return React.createElement(
            'div',
            { id: 'TodoApp' },
            React.createElement(
                'h1',
                null,
                'Todo App'
            ),
            React.createElement(TodoForm, { newTodo: this.newTodo, existing_todos: this.state.todos }),
            React.createElement(TodoDisplay, { todos: this.state.todos, changeTodoText: this.changeTodoText, changeTodoState: this.changeTodoState })
        );
    }
}

export default TodoApp;
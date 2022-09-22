import React, { useState } from 'react';

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

function TodoForm(props) {

    const [todo, settodo] = useState('');

    function submitTodo(e) {
        e.preventDefault();

        var GenRandom = true;
        var randomId = 0;

        while (GenRandom == true) {
            randomId = Math.floor(Math.random() * (999999 - 111111) + 111111);
            var exists = props.existing_todos.filter(todos => todos.id == randomId); //check if dublicate ID exists
            exists.length > 0 ? GenRandom = true : GenRandom = false;
        }

        props.newTodo({ text: todo, done: false, id: randomId });
        settodo('');
    }

    function handleChange(event) {
        let value = event.target.value;
        settodo(value);
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'form',
            { className: 'todo_form' },
            React.createElement('input', { type: 'text', onChange: handleChange, value: todo, name: 'todo_input_1', className: 'input_type_1' }),
            React.createElement(
                'button',
                { type: 'submit', onClick: submitTodo },
                'Add'
            )
        )
    );
}

function TodoDisplay(props) {

    function doneStateChange(e) {
        props.changeTodoState(e.target.dataset.id);
    }

    function changeTodoText(e) {
        props.changeTodoText(e);
    }

    return React.createElement(
        'ul',
        null,
        props.todos.map(todo => React.createElement(
            'li',
            { className: 'todo', key: todo.id },
            React.createElement(TodoEditableText, { todoDone: todo.done, todoText: todo.text, todoId: todo.id, changeTodoText: changeTodoText }),
            todo.done ? React.createElement(
                'span',
                { className: 'doneIndicator doneIndicator-done', title: 'mark as not done', 'data-id': todo.id, onClick: doneStateChange },
                '\u2715'
            ) : React.createElement(
                'span',
                { className: 'doneIndicator doneIndicator-not-done', 'data-id': todo.id, title: 'mark as done', onClick: doneStateChange },
                '\u2713'
            )
        ))
    );
}

function TodoEditableText(props) {

    const [Editable, setEditable] = useState(false);
    const [Values, setValues] = useState({});

    function handleEdit(e) {
        setEditable(true);
        setTimeout(function () {
            e.target.focus();
        }, 0);
        setValues({ id: e.target.dataset.id, element: e.target });
    }

    function handleBlur() {
        setEditable(false);
    }

    function handleEditDone(e) {
        if (e.key === "Enter") {
            setEditable(false);
            var new_value = Values.element.innerText;
            props.changeTodoText({ id: Values.id, text: new_value });
        }
    }

    return React.createElement(
        'span',
        { className: `todo-text ${Editable ? 'editable' : ''}  ${props.todoDone ? 'done' : ''}`, 'data-id': props.todoId, onKeyDown: handleEditDone, contentEditable: Editable ? 'true' : 'false', onBlur: handleBlur, onDoubleClick: handleEdit },
        props.todoText
    );
}
export default TodoApp;
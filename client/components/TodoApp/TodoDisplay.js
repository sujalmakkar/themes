import React from 'react';
import TodoEditableText from './TodoEditableText';

// Display the Todo in a 2 Todo Container one consists all the done todo and another consists of all the undone

export default function TodoDisplay(props) {

    function doneStateChange(e) {
        props.changeTodoState(e.target.dataset.id);
    }

    function changeTodoText(e) {
        props.changeTodoText(e);
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'ul',
            { className: 'todos-not-done-container' },
            React.createElement(
                'div',
                { className: 'todo-container-type' },
                'Undone'
            ),
            props.todos.map(todo => !todo.done ? React.createElement(
                'li',
                { className: 'todo', key: todo.id },
                React.createElement(TodoEditableText, { todoDone: todo.done, todoText: todo.text, todoId: todo.id, changeTodoText: changeTodoText }),
                React.createElement(
                    'span',
                    { className: 'doneIndicator doneIndicator-done', title: 'mark as done', 'data-id': todo.id, onClick: doneStateChange },
                    '\u2713'
                )
            ) : '')
        ),
        React.createElement(
            'ul',
            { className: 'todos-done-container' },
            React.createElement(
                'div',
                { className: 'todo-container-type' },
                'Done'
            ),
            props.todos.map(todo => todo.done ? React.createElement(
                'li',
                { className: 'todo', key: todo.id },
                React.createElement(TodoEditableText, { todoDone: todo.done, todoText: todo.text, todoId: todo.id, changeTodoText: changeTodoText }),
                React.createElement(
                    'span',
                    { className: 'doneIndicator doneIndicator-done', title: 'mark as not done', 'data-id': todo.id, onClick: doneStateChange },
                    '\u2715'
                )
            ) : '')
        )
    );
}
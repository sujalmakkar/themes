import React from 'react';
import TodoEditableText from './TodoEditableText';

// Display the Todo in a 2 Todo Container one consists all the done todo and another consists of all the undone
// Also display todo based on date

export default function TodoDisplay(props) {

    function doneStateChange(e) {
        e.target.dataset.date = props.date;
        props.changeTodoState(e.target.dataset);
    }

    function changeTodoText(e) {
        e.date = props.date;
        if (e.text.length == 0) {
            e.text = 'untitled';
        }
        props.changeTodoText(e);
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'todos-container-date' },
            React.createElement(
                'div',
                { className: 'date' },
                props.date
            ),
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
                        { className: 'doneIndicator doneIndicator-done', title: 'mark as done', 'data-text': todo.text, 'data-id': todo.id, onClick: doneStateChange },
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
                        { className: 'doneIndicator doneIndicator-done', title: 'mark as not done', 'data-text': todo.text, 'data-id': todo.id, onClick: doneStateChange },
                        '\u2715'
                    )
                ) : '')
            )
        )
    );
}
import React from 'react';
import TodoEditableText from './TodoEditableText';

export default function TodoDisplay(props) {

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
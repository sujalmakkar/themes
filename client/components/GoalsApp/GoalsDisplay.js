import React from 'react';

export default function GoalsDisplay(props) {
    return React.createElement(
        'div',
        { className: 'goals-display flex padding-30 box-shadow margin-auto width-90 background-main border-radius-8 margin-top-20 margin-bottom-20 color-main' },
        React.createElement(
            'div',
            { className: 'date' },
            props.number
        ),
        React.createElement(
            'div',
            { className: 'goals-container undone' },
            props.goals.reverse().map(e => !e.done ? React.createElement(GoalNotDone, { key: e.id, number: props.number, type: props.type, text: e.text, done: e.done, id: e.id, created: e.created, doneStateChange: props.doneStateChange, deleteGoal: props.deleteGoal }) : '')
        ),
        React.createElement(
            'div',
            { className: 'goals-container done' },
            props.goals.reverse().map(e => e.done ? React.createElement(GoalDone, { key: e.id, number: props.number, type: props.type, text: e.text, done: e.done, id: e.id, created: e.created, doneStateChange: props.doneStateChange, deleteGoal: props.deleteGoal }) : '')
        )
    );
}

function GoalDone(props) {
    return React.createElement(
        'div',
        { className: 'goal padding-10 background-main margin-10 border-main' },
        React.createElement(
            'span',
            { className: 'box-shadow doneIndicator done ripple-effect', title: 'mark as not done', 'data-created': props.created, 'data-number': props.number, 'data-type': props.type, 'data-text': props.text, 'data-id': props.id, onClick: props.doneStateChange },
            '\u2715'
        ),
        React.createElement(
            'span',
            { className: 'goal-name line-through' },
            props.text
        ),
        React.createElement(
            'span',
            { className: 'box-shadow deleteGoal ripple-effect', title: 'delete', 'data-text': props.text, 'data-created': props.created, 'data-number': props.number, 'data-type': props.type, 'data-id': props.id, onClick: props.deleteGoal },
            React.createElement('img', { src: 'https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png' })
        )
    );
}

function GoalNotDone(props) {
    return React.createElement(
        'div',
        { className: 'goal padding-10 background-main margin-10 border-main' },
        React.createElement(
            'span',
            { className: 'box-shadow doneIndicator doneIndicator undone', title: 'mark as done', 'data-text': props.text, 'data-created': props.created, 'data-number': props.number, 'data-type': props.type, 'data-id': props.id, onClick: props.doneStateChange },
            '\u2713'
        ),
        React.createElement(
            'span',
            { className: 'goal-name' },
            props.text
        ),
        React.createElement(
            'span',
            { className: 'box-shadow deleteGoal ripple-effect', title: 'delete', 'data-created': props.created, 'data-number': props.number, 'data-type': props.type, 'data-text': props.text, 'data-id': props.id, onClick: props.deleteGoal },
            React.createElement('img', { src: 'https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png' })
        )
    );
}
import React, { useEffect, useState } from 'react';

export default function GoalsDisplay(props) {
    return React.createElement(
        'div',
        { className: 'goals-display' },
        props.goals.map(e => React.createElement(Goal, { key: e.id, number: props.number, type: props.type, text: e.text, done: e.done, id: e.id, doneStateChange: props.doneStateChange }))
    );
}

function Goal(props) {
    return !props.done ? React.createElement(
        'div',
        { className: 'goal' },
        React.createElement(
            'span',
            { className: 'goal-name' },
            props.text
        ),
        React.createElement(
            'span',
            { className: 'doneIndicator doneIndicator-done', title: 'mark as done', 'data-number': props.number, 'data-type': props.type, 'data-text': props.text, 'data-id': props.id, onClick: props.doneStateChange },
            '\u2713'
        )
    ) : React.createElement(
        'div',
        { className: 'goal' },
        React.createElement(
            'span',
            { className: 'goal-name' },
            props.text
        ),
        React.createElement(
            'span',
            { className: 'doneIndicator doneIndicator-done', title: 'mark as not done', 'data-number': props.number, 'data-type': props.type, 'data-text': props.text, 'data-id': props.id, onClick: props.doneStateChange },
            '\u2715'
        )
    );
}
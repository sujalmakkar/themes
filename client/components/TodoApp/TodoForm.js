import React, { useState } from 'react';
import randomNumber from '../../../server/functions/randomNumber';

export default function TodoForm(props) {

    const [todo, settodo] = useState('');

    function submitTodo(e) {
        var todayDate = new Date();
        var todayDatevalue = todayDate.getDate();
        var todayMonthvalue = todayDate.getMonth() + 1;
        var todayYearvalue = todayDate.getFullYear();
        var finaldate = todayDatevalue + '/' + todayMonthvalue + '/' + todayYearvalue;

        e.preventDefault();

        var randomId = randomNumber(10);

        props.newTodo({ text: todo, done: false, id: randomId, date: finaldate });
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
            'div',
            { className: 'todo-form-container' },
            React.createElement(
                'form',
                { className: 'todo_form margin-10', onSubmit: submitTodo },
                React.createElement('input', { type: 'text', maxLength: 1000, placeholder: 'Learn React Router Today!', onChange: handleChange, value: todo, name: 'todo_input_1', className: 'input_type_1', required: true }),
                React.createElement(
                    'button',
                    { className: 'ripple-effect', type: 'submit' },
                    'Add'
                )
            )
        )
    );
}
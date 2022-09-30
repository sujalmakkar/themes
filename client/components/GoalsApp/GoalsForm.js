import React, { useState } from 'react';

export default function GoalsForm(props) {
    const [data, setdata] = useState();

    function handleFormSubmit(e) {
        e.preventDefault();
        props.addGoal(data);
    }
    function handleInput(e) {
        setdata(e.target.value);
    }
    return React.createElement(
        'div',
        { className: 'goals-form' },
        React.createElement(
            'form',
            { onSubmit: handleFormSubmit },
            React.createElement('input', { type: 'text', onChange: handleInput }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Goal'
            )
        )
    );
}
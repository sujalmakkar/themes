import React, { useState } from 'react';

export default function GoalsType(props) {
    function changeTimeInterval(e) {
        props.changeType(e.target.value);
    }
    return React.createElement(
        'div',
        { className: 'goals-type margin-10', id: 'type' },
        React.createElement(
            'select',
            { className: 'goals-timeperiod-selector background-main ', onChange: changeTimeInterval },
            React.createElement(
                'option',
                { value: 'years', className: 'option' },
                'Years'
            ),
            React.createElement(
                'option',
                { value: 'months', className: 'option' },
                'Months'
            ),
            React.createElement(
                'option',
                { value: 'weeks', className: 'option' },
                'Weeks'
            )
        )
    );
}
import React, { useState } from 'react';

export default function GoalsType(props) {
    function changeTimeInterval(e) {
        props.changeType(e.target.value);
    }
    return React.createElement(
        'div',
        { className: 'goals-type' },
        React.createElement(
            'select',
            { className: 'goals-timeperiod-selector', onChange: changeTimeInterval },
            React.createElement(
                'option',
                { value: 'years' },
                'Years'
            ),
            React.createElement(
                'option',
                { value: 'months' },
                'Months'
            ),
            React.createElement(
                'option',
                { value: 'weeks' },
                'Weeks'
            )
        )
    );
}

var data = { years: [{ year: '2022', goals: [] }], months: [{ month: '2022/1', goals: [] }], weeks: [{ week: '2022/1', goals: [] }] };
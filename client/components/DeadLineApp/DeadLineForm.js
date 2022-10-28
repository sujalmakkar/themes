import React, { useState, useEffect } from 'react';
import randomNumber from '../../../server/functions/randomNumber';

export default function DeadLineForm(props) {

    const [name, setname] = useState('');

    var dateInput = null;
    function dateInputRef(e) {
        dateInput = e;
    }

    useEffect(() => {
        dateInput.min = new Date().toLocaleDateString('en-ca');
    }, []);

    function addDeadLine(data) {
        data.preventDefault();
        var dueDateArray = data.target.due.value.split('-');
        var dueTime = new Date(dueDateArray[1] + '/' + dueDateArray[2] + '/' + dueDateArray[0]).getTime() + 86400000;
        var ranNumber = randomNumber(10);
        setname('');
        props.addDeadLine({ name: name, reminder: dueTime, id: ranNumber, dueTime: dueTime, dueDate: data.target.due.value, pinned: false });
    }
    function setDeadLineName(e) {
        setname(e.target.value);
    }
    return React.createElement(
        'div',
        { className: 'deadline-form' },
        React.createElement(
            'form',
            { onSubmit: addDeadLine },
            React.createElement('input', { name: 'deadline', maxLength: 200, value: name, onChange: setDeadLineName, placeholder: 'title', type: 'text', required: true }),
            React.createElement('input', { name: 'due', type: 'date', ref: dateInputRef, required: true }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Deadline'
            )
        )
    );
}
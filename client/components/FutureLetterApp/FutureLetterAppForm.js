import React, { useState, useEffect } from 'react';

export default function FutureLetterAppForm(props) {

    const [mailData, setmailData] = useState('');
    const [mailSubject, setmailSubject] = useState('');
    const [mailDate, setmailDate] = useState('');

    var dateInput = null;
    function dateInputRef(e) {
        dateInput = e;
    }

    useEffect(() => {
        dateInput.min = new Date().toLocaleDateString('en-ca');
    }, []);

    function newFutureMail(e) {
        e.preventDefault();
        var dueDateArray = mailDate.split('-');
        var dueTime = new Date(dueDateArray[1] + '/' + dueDateArray[2] + '/' + dueDateArray[0]).getTime();
        var data = {
            subject: mailSubject,
            body: mailData,
            date: mailDate,
            reminder: dueTime
        };

        props.addFutureLetter(data);
    }
    function handleSubject(e) {
        setmailSubject(e.target.value);
    }

    function handleContent(e) {
        setmailData(e.target.innerHTML);
    }

    function handleDate(e) {
        setmailDate(e.target.value);
    }
    return React.createElement(
        'div',
        { className: 'future-letter-app-form' },
        React.createElement(
            'form',
            { onSubmit: newFutureMail },
            React.createElement('input', { type: 'text', name: 'subject', placeholder: 'subject', onKeyDown: handleSubject, onKeyUp: handleSubject }),
            React.createElement('div', { className: 'future-letter-content-div', onKeyDown: handleContent, onKeyUp: handleContent, contentEditable: 'true', suppressContentEditableWarning: 'true' }),
            React.createElement('input', { name: 'due', type: 'date', ref: dateInputRef, onClick: handleDate, onChange: handleDate, required: true }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Send To The Future'
            )
        )
    );
}
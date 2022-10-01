import React, { useState } from 'react';

export default function FutureLetterAppForm(props) {

    const [mailData, setmailData] = useState('');
    const [mailSubject, setmailSubject] = useState('');

    function newFutureMail(e) {
        e.preventDefault();
        console.log(mailSubject, mailData);
    }
    function handleSubject(e) {
        setmailSubject(e.target.innerHTML);
    }

    function handleContent(e) {
        setmailData(e.target.innerHTML);
    }
    return React.createElement(
        'div',
        { className: 'future-letter-app-form' },
        React.createElement(
            'form',
            { onSubmit: newFutureMail },
            React.createElement('div', { className: 'future-letter-subject-div', onKeyDown: handleSubject, onKeyUp: handleSubject, placeholder: 'Subject', contentEditable: 'true', suppressContentEditableWarning: 'true' }),
            React.createElement('div', { className: 'future-letter-content-div', onKeyDown: handleContent, onKeyUp: handleContent, contentEditable: 'true', suppressContentEditableWarning: 'true' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Send To The Future'
            )
        )
    );
}
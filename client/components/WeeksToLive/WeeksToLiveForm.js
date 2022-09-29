import React, { useEffect } from 'react';
export default function WeeksToLiveForm(props) {
    function setDob(e) {
        e.preventDefault();
        props.setDob(e.target.date.value);
    }
    var input = null;
    function inputref(e) {
        input = e;
    }
    useEffect(() => {
        input.max = new Date().toLocaleDateString('en-ca');
    });
    return React.createElement(
        'form',
        { onSubmit: setDob },
        React.createElement('input', { ref: inputref, type: 'date', name: 'date' }),
        React.createElement(
            'button',
            { type: 'submit' },
            'Submit'
        )
    );
}
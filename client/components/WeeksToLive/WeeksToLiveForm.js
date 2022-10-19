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
        var today = new Date().toLocaleDateString('en-ca');
        input.max = today;
        var splitdate = today.split('-');
        var year = splitdate[0] - 70;
        var mindate = year + '-' + splitdate[1] + '-' + splitdate[2];
        input.min = mindate;
    });
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { id: 'weeks-to-live-form' },
            React.createElement(
                'form',
                { onSubmit: setDob },
                React.createElement('input', { ref: inputref, type: 'date', name: 'date', required: true }),
                React.createElement(
                    'button',
                    { className: 'ripple-effect', type: 'submit' },
                    'Submit'
                )
            )
        )
    );
}
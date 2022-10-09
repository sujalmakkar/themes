import React, { useState } from 'react';
import Note from './Note';

export default function NoteContainer(props) {

    const [open, setopen] = useState(false);

    function handlecloseeditor(e) {
        console.log(e);
        setopen(false);
    }
    function handleopeneditor() {
        setopen(true);
    }

    return React.createElement(
        'div',
        { className: 'note-container', onClick: handleopeneditor, 'data-id': props.id },
        React.createElement(
            'div',
            { className: 'note-preview' },
            React.createElement(Note, { id: props.id, popup: open })
        )
    );
}
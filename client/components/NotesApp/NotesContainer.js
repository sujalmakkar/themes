import React, { useState } from 'react';
import Note from './Note';

export default function NoteContainer(props) {

    const [open, setopen] = useState(false);

    function handletoggleeditor(e) {
        console.log(e.target.dataset);
        setopen(!open);
    }
    function handleopeneditor() {
        setopen(true);
    }

    return React.createElement(
        'div',
        { className: 'note-container', onClick: handleopeneditor, 'data-id': '364234' },
        React.createElement(
            'div',
            { className: 'note-preview' },
            React.createElement(Note, { id: '364234', onBlur: handletoggleeditor, popup: open })
        )
    );
}
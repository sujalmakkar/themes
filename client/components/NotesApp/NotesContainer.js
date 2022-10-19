import React, { useState, useEffect } from 'react';

export default function NoteContainer(props) {

    function handleopeneditor(e) {
        props.noteId(props.id);
    }

    var Heading = null;
    function headingref(e) {
        Heading = e;
    }

    var Content = null;
    function contentref(e) {
        Content = e;
    }

    function deleteNote(e) {
        props.deleteNote(props.id);
    }

    useEffect(() => {
        Heading.innerHTML = props.heading;
        Content.innerHTML = props.content;
    }, [props]);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'note-container', 'data-id': props.id },
            React.createElement(
                'div',
                { className: 'note-preview', onClick: handleopeneditor },
                React.createElement('div', { className: 'Heading', ref: headingref }),
                React.createElement('div', { className: 'Content', ref: contentref })
            ),
            React.createElement(
                'div',
                { className: 'note-info' },
                React.createElement(
                    'span',
                    { className: 'note-created' },
                    props.created
                ),
                React.createElement(
                    'span',
                    { className: 'delete-note', onClick: deleteNote },
                    'Delete Note'
                )
            )
        )
    );
}
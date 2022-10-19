import React from 'react';

export default function FutureLetterAppDisplay(props) {

    return React.createElement(
        "div",
        { className: "future-letter-app-display" },
        props.letters,
        " letters are on your way!"
    );
}
import React from 'react';

export default function FutureLetterAppOpened(props) {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "div",
            { className: "opened-letter-heading" },
            "Opened Letters"
        ),
        React.createElement(
            "div",
            { className: "future-letter-app-opened" },
            React.createElement(
                "div",
                { className: "opened-letter-container" },
                props.letters.length > 0 ? props.letters.map(a => React.createElement(Letter, { key: a.id, subject: a.subject, body: a.body, dateCreated: a.dateCreated, dateReceived: a.date })) : ''
            )
        )
    );
}

function Letter(props) {
    return React.createElement(
        "div",
        { className: "opened-letter" },
        React.createElement(
            "div",
            { className: "opened-letter-row" },
            React.createElement(
                "div",
                { className: "opened-letter-date-created" },
                "Sent : ",
                props.dateCreated
            ),
            React.createElement("div", null)
        ),
        React.createElement(
            "div",
            { className: "opened-letter-subject" },
            props.subject
        ),
        React.createElement(
            "div",
            { className: "opened-letter-body" },
            props.body
        ),
        React.createElement(
            "div",
            { className: "opened-letter-row" },
            React.createElement("div", null),
            React.createElement(
                "div",
                { className: "opened-letter-date-received" },
                "Received : ",
                props.dateReceived
            )
        )
    );
}
import React, { useEffect, useState } from 'react';

export default function DeadLineContainer(props) {
    const [deadLines, setdeadLines] = useState([]);

    useEffect(() => {
        setdeadLines(props.deadLines);
    });

    return React.createElement(
        'div',
        { className: 'dead-line-container' },
        deadLines.length > 0 ? React.createElement(
            React.Fragment,
            null,
            deadLines.map(a => a.pinned ? React.createElement(DeadLine, { name: a.name, dueTime: a.dueTime, dueDate: a.dueDate, key: a.id, id: a.id, pinned: a.pinned, deletedeadline: props.deletedeadline, pindeadline: props.pindeadline }) : ''),
            deadLines.map(a => !a.pinned ? React.createElement(DeadLine, { name: a.name, dueTime: a.dueTime, dueDate: a.dueDate, key: a.id, id: a.id, pinned: a.pinned, deletedeadline: props.deletedeadline, pindeadline: props.pindeadline }) : '')
        ) : ''
    );
}

function DeadLine(props) {
    const [timeLeftInMinutes, settimeLeftInMinutes] = useState(0);
    const [years, setyears] = useState(0);
    const [months, setmonths] = useState(0);
    const [days, setdays] = useState(0);
    const [hours, sethours] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [seconds, setseconds] = useState(0);

    function pindeadline() {
        props.pindeadline(props.id);
    }

    function deletedeadline() {
        props.deletedeadline(props.id);
    }

    useEffect(() => {

        getTimeInMinutes();

        function getTimeInMinutes() {
            var currentTime = Date.now();
            var timeRemainingInSeconds = parseInt((props.dueTime - currentTime).toString().slice(0, -3));
            var seconds = Math.trunc(timeRemainingInSeconds % 60);
            var minutes = Math.trunc(timeRemainingInSeconds / 60);
            var hours = Math.trunc(minutes / 60);
            var days = Math.trunc(hours / 24);
            var months = Math.trunc(days / 30);
            var years = Math.trunc(months / 12);

            var minutestext = ('0' + Math.trunc(minutes - Math.trunc(hours) * 60)).slice(-2);
            var hourstext = ('0' + Math.trunc(hours - Math.trunc(days) * 24)).slice(-2);
            var daystext = ('0' + Math.trunc(days - Math.trunc(months) * 30)).slice(-2);
            var monthstext = ('0' + Math.trunc(months - Math.trunc(years) * 12)).slice(-2);

            setyears((0 + years.toString()).slice(-2));
            setmonths(monthstext);
            setdays(daystext);
            sethours(hourstext);
            setminutes(minutestext);
            setseconds((0 + seconds.toString()).slice(-2));

            settimeLeftInMinutes(`${years} : ${monthstext} : ${daystext} : ${hourstext} : ${minutestext} : ${seconds}`);
        }

        setInterval(() => {
            getTimeInMinutes();
        }, 1000);
    }, [props.due]);

    return React.createElement(
        'div',
        { className: 'dead-line' },
        React.createElement(
            'div',
            { className: 'dead-line-name-container' },
            React.createElement(
                'div',
                { className: 'dead-line-name' },
                props.name
            )
        ),
        React.createElement(
            'div',
            { className: 'dead-line-time-left-display' },
            React.createElement(
                'div',
                { className: 'time' },
                React.createElement(
                    'div',
                    { className: 'time-number' },
                    years
                ),
                React.createElement(
                    'div',
                    { className: 'time-text' },
                    'Years'
                )
            ),
            React.createElement(
                'div',
                { className: 'time-break' },
                ':'
            ),
            React.createElement(
                'div',
                { className: 'time' },
                React.createElement(
                    'div',
                    { className: 'time-number' },
                    months
                ),
                React.createElement(
                    'div',
                    { className: 'time-text' },
                    'Months'
                )
            ),
            React.createElement(
                'div',
                { className: 'time-break' },
                ':'
            ),
            React.createElement(
                'div',
                { className: 'time' },
                React.createElement(
                    'div',
                    { className: 'time-number' },
                    days
                ),
                React.createElement(
                    'div',
                    { className: 'time-text' },
                    'Days'
                )
            ),
            React.createElement(
                'div',
                { className: 'time-break' },
                ':'
            ),
            React.createElement(
                'div',
                { className: 'time' },
                React.createElement(
                    'div',
                    { className: 'time-number' },
                    hours
                ),
                React.createElement(
                    'div',
                    { className: 'time-text' },
                    'Hours'
                )
            ),
            React.createElement(
                'div',
                { className: 'time-break' },
                ':'
            ),
            React.createElement(
                'div',
                { className: 'time' },
                React.createElement(
                    'div',
                    { className: 'time-number' },
                    minutes
                ),
                React.createElement(
                    'div',
                    { className: 'time-text' },
                    'Minutes'
                )
            ),
            React.createElement(
                'div',
                { className: 'time-break' },
                ':'
            ),
            React.createElement(
                'div',
                { className: 'time' },
                React.createElement(
                    'div',
                    { className: 'time-number' },
                    seconds
                ),
                React.createElement(
                    'div',
                    { className: 'time-text' },
                    'Seconds'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'dead-line-row' },
            React.createElement(
                'div',
                { className: 'dead-line-row-two' },
                props.pinned ? React.createElement(
                    'div',
                    { className: 'dead-line-pin', title: 'unpin', onClick: pindeadline },
                    React.createElement('img', { src: 'https://img.icons8.com/fluency-systems-filled/48/000000/pin.png' })
                ) : React.createElement(
                    'div',
                    { className: 'dead-line-pin', title: 'pin to top', onClick: pindeadline },
                    React.createElement('img', { src: 'https://img.icons8.com/fluency-systems-regular/48/000000/pin.png' })
                ),
                React.createElement(
                    'div',
                    { className: 'dead-line-delete', title: 'delete deadline', onClick: deletedeadline },
                    React.createElement('img', { src: 'https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png' })
                )
            ),
            React.createElement(
                'div',
                { className: 'dead-line-due' },
                props.dueDate
            )
        )
    );
}
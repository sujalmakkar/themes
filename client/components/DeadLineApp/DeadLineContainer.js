import React, { useEffect, useState } from 'react';

export default function DeadLineContainer(props) {
    const [deadLines, setdeadLines] = useState([]);

    console.log(props.deadLines.length);

    useEffect(() => {
        setdeadLines(props.deadLines);
    });

    return React.createElement(
        'div',
        { className: 'dead-line-container' },
        deadLines.length > 0 ? deadLines.map(a => React.createElement(DeadLine, { name: a.name, dueTime: a.dueTime, dueDate: a.dueDate, key: a.id })) : ''
    );
}

function DeadLine(props) {
    const [timeLeftInMinutes, settimeLeftInMinutes] = useState(0);

    useEffect(() => {

        getTimeInMinutes();

        function getTimeInMinutes() {
            var currentTime = Date.now();
            var timeRemainingInSeconds = parseInt((props.dueTime - currentTime).toString().slice(0, -3));
            var minutes = Math.trunc(timeRemainingInSeconds / 60);
            var hours = Math.trunc(minutes / 60);
            var days = Math.trunc(hours / 24);
            var months = Math.trunc(days / 30);
            var years = Math.trunc(months / 12);

            var minutestext = ('0' + Math.trunc(minutes - Math.trunc(hours) * 60)).slice(-2);
            var hourstext = ('0' + Math.trunc(hours - Math.trunc(days) * 24)).slice(-2);
            var daystext = ('0' + Math.trunc(days - Math.trunc(months) * 30)).slice(-2);
            var monthstext = ('0' + Math.trunc(months - Math.trunc(years) * 12)).slice(-2);

            settimeLeftInMinutes(`years = ${years}, months=${monthstext}, days=${daystext}, hours=${hourstext}, minutes=${minutestext}`);
        }

        setInterval(() => {
            getTimeInMinutes();
        }, 30000);
    }, [props.due]);

    return React.createElement(
        'div',
        { className: 'dead-line' },
        React.createElement(
            'div',
            { className: 'dead-line-name' },
            props.name
        ),
        React.createElement(
            'div',
            { className: 'dead-line-due' },
            props.dueDate
        ),
        React.createElement(
            'div',
            { className: 'dead-line-time-left-display' },
            'Time Left: ',
            timeLeftInMinutes
        )
    );
}
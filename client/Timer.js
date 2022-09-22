import React, { useState, useEffect } from 'react';

class TimerApp extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a Timer App',
            React.createElement(Clock, null)
        );
    }
}

function Clock() {

    const [Time, setTime] = useState('');
    const [stopWatchTime, setstopWatchTime] = useState('');

    // useEffect(()=>{

    //     setInterval(()=>{
    //         setTime(Date.now())
    //     },0)

    // })

    function start() {
        var started = Date.now();

        setInterval(() => {
            setstopWatchTime(Date.now() - started);
        }, 0);
    }

    return React.createElement(
        'div',
        { className: 'current-time-clock' },
        React.createElement(
            'button',
            { onClick: start },
            'start'
        ),
        React.createElement(
            'div',
            null,
            stopWatchTime
        )
    );
}

export default TimerApp;
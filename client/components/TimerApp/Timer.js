import React, { useState } from 'react';
import TimerForm from './TimerForm';
import TimerDisplay from './TimerDisplay';

export default function Timer(props) {

    const [time, setTime] = useState({ seconds: '00', minutes: '00', hours: '00' });
    const [taskName, settaskName] = useState('');

    function setTimer(e) {
        setTime(e);
    }
    function setName(e) {
        settaskName(e);
    }
    function timerLogs(e) {
        props.addLog(e);
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h1',
            null,
            'This is a Timer'
        ),
        React.createElement(TimerDisplay, { time: time, name: taskName, timerLogs: timerLogs }),
        React.createElement(TimerForm, { setTimer: setTimer, setName: setName })
    );
}
import React, { useEffect, useState } from 'react';

export default function Timer() {

    const [time, setTime] = useState({ seconds: '00', minutes: '00', hours: '00' });

    function setTimer(e) {
        setTime(e);
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h1',
            null,
            'This is a Timer'
        ),
        React.createElement(TimerDisplay, { time: time }),
        React.createElement(TimerForm, { setTimer: setTimer })
    );
}

function TimerDisplay(props) {
    const [timeLeft, settimeLeft] = useState(0);
    const [timeinformat, settimeinformat] = useState({ seconds: '00', minutes: '00', hours: '00' });
    const [timerStatus, settimerStatus] = useState({ started: false });
    const [timerInfo, settimerInfo] = useState({});
    const [timeSet, settimeSet] = useState(0);
    const [pausedTime, setpausedTime] = useState(0);

    useEffect(() => {
        const endingTime = timeSet + Date.now() + pausedTime;
        console.log(Date.now(), timeSet, endingTime);

        if (timerStatus.started) {

            var intervalID = setInterval(() => {
                var remainingTimeInMillliSeconds = endingTime - Date.now();
                var remainingTime = remainingTimeInMillliSeconds.toString().slice(0, -3);

                var minutes = Math.trunc(remainingTime / 60);
                var hours = Math.trunc(minutes / 60);
                var seconds = remainingTime > 60 ? Math.trunc(remainingTime % 60) : remainingTime;

                console.log(minutes);

                var secondstext = ('0' + seconds).slice(-2);
                var minutestext = ('0' + Math.trunc(minutes - Math.trunc(hours) * 60)).slice(-2);
                // var hourstext = 0 || ('0'+(Math.trunc(hours-(Math.trunc(days)*24)))).slice(-2)

                // console.log(hours,minutes,seconds)
                settimeinformat({ seconds: secondstext, minutes: minutestext, hours: hours });
            }, 1000);
        }

        return () => clearInterval(intervalID);
    }, [timerStatus]);

    useEffect(() => {
        settimeinformat(props.time);
        var totalSeconds = parseInt(parseInt(props.time.hours) * 3600 + parseInt(props.time.minutes) * 60 + parseInt(props.time.seconds) + '000');
        settimeSet(totalSeconds);
    }, [props.time]);

    function start() {
        settimerStatus({ started: true });
        console.log('start');
    }
    function pause() {
        settimerStatus({ started: false });
        console.log('pause');
    }
    function reset() {
        settimerStatus({ started: false });
        console.log('reset');
    }

    return React.createElement(
        'div',
        { className: 'timer-display' },
        React.createElement(
            'span',
            null,
            timeinformat.hours + ':'
        ),
        React.createElement(
            'span',
            null,
            timeinformat.minutes + ':'
        ),
        React.createElement(
            'span',
            null,
            timeinformat.seconds
        ),
        React.createElement(
            'button',
            { type: 'button', onClick: start },
            'start'
        )
    );
}

function TimerForm(props) {

    const [Seconds, setSeconds] = useState('00');
    const [Minutes, setMinutes] = useState('00');
    const [Hours, setHours] = useState('00');

    useEffect(() => {
        var TimeSubmitted = {
            hours: Hours,
            minutes: Minutes,
            seconds: Seconds
        };
        props.setTimer(TimeSubmitted);
    }, [Seconds, Minutes, Hours]);
    function handleSeconds(e) {
        e.target.value = e.target.value.slice(0, 2);
        var seconds = e.target.value.length > 1 ? e.target.value : '0' + e.target.value;
        setSeconds(seconds);
    }
    function handleMinutes(e) {
        e.target.value = e.target.value.slice(0, 2);
        var minutes = e.target.value.length > 1 ? e.target.value : '0' + e.target.value;
        setMinutes(minutes);
    }
    function handleHours(e) {
        e.target.value = e.target.value.slice(0, 2);
        var hours = e.target.value.length > 1 ? e.target.value : '0' + e.target.value;
        setHours(hours);
    }

    return React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'number', name: 'hours', onInput: handleHours, placeholder: 'HH' }),
        React.createElement('input', { type: 'number', name: 'minutes', onInput: handleMinutes, placeholder: 'MM' }),
        React.createElement('input', { type: 'number', name: 'seconds', onInput: handleSeconds, placeholder: 'SS' })
    );
}
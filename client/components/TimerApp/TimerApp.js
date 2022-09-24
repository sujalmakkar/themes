import React from 'react';
import Timer from './Timer';

class TimerApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'div',
            { id: 'TimerApp' },
            React.createElement(Timer, null)
        );
    }
}

export default TimerApp;
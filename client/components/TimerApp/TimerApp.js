import React from 'react';
import Timer from './Timer';
import TimerLogsDisplay from './TimerLogsDisplay';
class TimerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { logs: [] };
        this.addLog = this.addLog.bind(this);
    }
    addLog(info) {
        var logscopy = this.state.logs;
        logscopy.push(info);
        this.setState({ logs: logscopy });
    }
    render() {
        return React.createElement(
            'div',
            { id: 'TimerApp' },
            React.createElement(Timer, { addLog: this.addLog }),
            React.createElement(Timer, { addLog: this.addLog }),
            React.createElement(TimerLogsDisplay, { logs: this.state.logs })
        );
    }
}

export default TimerApp;
import React from 'react';
import StopWatchLogsDisplay from './StopWatchDisplay';
import StopWatch from './StopWatch';

class StopWatchApp extends React.Component {
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
            React.StrictMode,
            null,
            React.createElement(
                'div',
                { id: 'StopWatchApp', className: 'app' },
                'This is a STOP WATCH App',
                React.createElement(StopWatch, { addLog: this.addLog }),
                React.createElement(StopWatchLogsDisplay, { stopWatchLogs: this.state.logs })
            )
        );
    }
}

export default StopWatchApp;
import React from 'react';
import Notes from './Notes';

class NotesApp extends React.Component {
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
                null,
                'Notes App',
                React.createElement(Notes, { onClick: this.openEditor }),
                React.createElement(Notes, { onClick: this.openEditor })
            )
        );
    }
}

export default NotesApp;
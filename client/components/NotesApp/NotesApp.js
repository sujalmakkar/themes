import React from 'react';
import NotesContainer from './NotesContainer';

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
                React.createElement(NotesContainer, { onClick: this.openEditor }),
                React.createElement(NotesContainer, { onClick: this.openEditor })
            )
        );
    }
}

export default NotesApp;
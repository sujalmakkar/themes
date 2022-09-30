import React from 'react';
import DeadLineContainer from './DeadLineContainer';
import DeadLineForm from './DeadLineForm';

class DeadLineApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deadlines: [] };
        this.addDeadLine = this.addDeadLine.bind(this);
    }
    addDeadLine(data) {
        var statecopy = this.state.deadlines;
        statecopy.push(data);
        this.setState({ deadlines: statecopy });
    }
    render() {
        return React.createElement(
            'div',
            { id: 'deadLineApp' },
            React.createElement(DeadLineContainer, { deadLines: this.state.deadlines }),
            React.createElement(DeadLineForm, { addDeadLine: this.addDeadLine })
        );
    }
}

export default DeadLineApp;
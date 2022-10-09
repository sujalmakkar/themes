import React from 'react';
import DeadLineContainer from './DeadLineContainer';
import DeadLineForm from './DeadLineForm';
// import randomNumber from '../../../server/functions/randomNumber'


class DeadLineApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deadlines: [] };
        this.addDeadLine = this.addDeadLine.bind(this);
    }
    addDeadLine(data) {
        console.log(data);
        var statecopy = this.state.deadlines;
        statecopy.push(data);
        this.setState({ deadlines: statecopy });
    }
    componentDidMount() {
        fetch('/getData/deadline', {
            method: 'GET',
            headers: { 'Content-Type': 'Application/json' }
        }).then(res => res.json()).then(result => this.setState({ deadlines: result.alldeadlines.deadlines || [] })).catch(err => console.log(err));
    }

    componentDidUpdate(prevState) {
        if (this.state != prevState) {

            var data = { 'deadLines': this.state };

            fetch('/postData/deadline', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err));
        }
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
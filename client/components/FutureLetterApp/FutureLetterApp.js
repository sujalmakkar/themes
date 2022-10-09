import React from 'react';
import FutureLetterAppForm from './FutureLetterAppForm';
import FutureLetterAppDisplay from './FutureLetterAppDisplay';

class FutureLetterApp extends React.Component {
    constructor(props) {
        super(props);
        this.addFutureLetter = this.addFutureLetter.bind(this);
        this.state = { letters: [] };
    }
    addFutureLetter(e) {
        fetch('/postData/newLetter', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(e)
        }).then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err));
        var data = { date: e.date };
        var statecopy = this.state.letters;
        statecopy.push(data);
        this.setState({ letters: statecopy });
    }

    render() {
        return React.createElement(
            'div',
            { id: 'FutureLetterApp' },
            React.createElement(FutureLetterAppDisplay, { letters: this.state.letters }),
            React.createElement(FutureLetterAppForm, { addFutureLetter: this.addFutureLetter })
        );
    }
}

export default FutureLetterApp;
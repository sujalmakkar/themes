import React from 'react';
import FutureLetterAppForm from './FutureLetterAppForm';
import FutureLetterAppDisplay from './FutureLetterAppDisplay';

class FutureLetterApp extends React.Component {
    constructor(props) {
        super(props);
        this.addFutureLetter = this.addFutureLetter.bind(this);
        this.state = { letters: 0 };
    }
    addFutureLetter(e) {

        fetch('/postData/newLetter', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(e)
        }).then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err));

        this.setState({
            letters: this.state.letters + 1
        });
        var statecopy = this.state.letters;
        statecopy.push(data);
        this.setState({ letters: statecopy });
    }

    componentDidMount() {
        fetch('/getData/letters', {
            method: 'GET',
            headers: { 'content-Type': 'application/json' }
        }).then(res => res.json()).then(result => this.setState({ letters: result.number })).catch(err => console.log(err));
    }

    render() {
        return React.createElement(
            'div',
            { id: 'FutureLetterApp', className: 'app' },
            React.createElement(FutureLetterAppDisplay, { letters: this.state.letters }),
            React.createElement(FutureLetterAppForm, { addFutureLetter: this.addFutureLetter })
        );
    }
}

export default FutureLetterApp;
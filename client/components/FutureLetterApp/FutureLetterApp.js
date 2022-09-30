import React from 'react';
import FutureLetterAppForm from './FutureLetterAppForm';

class FutureLetterApp extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: 'FutureLetterApp' },
            React.createElement(FutureLetterAppForm, null)
        );
    }
}

export default FutureLetterApp;
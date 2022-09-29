import React from 'react';
import MusicAppComponentsContainer from './MusicAppComponentsContainer';

class MusicApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'div',
            { id: 'MusicApp' },
            React.createElement(MusicAppComponentsContainer, null)
        );
    }
}

export default MusicApp;
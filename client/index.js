import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'that was fast bitch'
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(React.createElement(App, null));

if (module.hot) {
    module.hot.accept();
}
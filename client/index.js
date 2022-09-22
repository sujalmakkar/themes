import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './Todo';
import TimerApp from './Timer';

class App extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'hey there',
            React.createElement(TodoApp, null),
            React.createElement(TimerApp, null)
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(React.createElement(App, null));

if (module.hot) {
    module.hot.accept();
}
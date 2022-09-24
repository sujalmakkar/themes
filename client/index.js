import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp/TodoApp';
import StopWatchApp from './components/StopWatchApp/StopWatchApp';

class App extends React.Component {
    render() {
        return React.createElement(
            React.StrictMode,
            null,
            React.createElement(
                'div',
                null,
                'hey there',
                React.createElement(TodoApp, null),
                React.createElement(StopWatchApp, null)
            )
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(React.createElement(App, null));

if (module.hot) {
    module.hot.accept();
}
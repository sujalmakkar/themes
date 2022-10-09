import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp/TodoApp';
import StopWatchApp from './components/StopWatchApp/StopWatchApp';
import TimerApp from './components/TimerApp/TimerApp';
import NotesApp from './components/NotesApp/NotesApp';
import WeeksToLive from './components/WeeksToLive/WeeksToLive';
import MusicApp from './components/MusicApp/MusicApp';
import DeadLineApp from './components/DeadLineApp/DeadLineApp';
import FutureLetterApp from './components/FutureLetterApp/FutureLetterApp';
import GoalsApp from './components/GoalsApp/GoalsApp';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import LogoutButton from './components/LogoutButton/LogoutButton';

class App extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: 'App' },
            React.createElement(RegisterPage, null),
            React.createElement(LoginPage, null),
            React.createElement(LogoutButton, null),
            React.createElement(WeeksToLive, null),
            React.createElement(DeadLineApp, null),
            React.createElement(FutureLetterApp, null),
            React.createElement(GoalsApp, null)
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(React.createElement(App, null));

if (module.hot) {
    module.hot.accept();
}
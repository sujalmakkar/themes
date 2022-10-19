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
import ripples from './components/effects/ripple';
import ripple from './components/effects/ripple';

// import Blob from './components/blob'

class DashBoardApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'h1',
            null,
            'This is Dashboard'
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        ripple();
    }

    handleChange(e) {
        var link = e.target.dataset.link;

        var elements = [...document.getElementsByClassName('apps-display')];

        var buttons = [...document.getElementsByClassName('app-list')];

        var target = elements.filter(a => a.dataset.name == link);

        elements.forEach(a => a.classList.remove('active'));
        buttons.forEach(a => a.classList.remove('active'));

        e.target.classList.add('active');
        target[0].classList.add('active');

        new Masonry('.notes-flex-container', {
            itemSelector: '.note-container',
            isAnimated: true
        });
    }

    render() {
        return React.createElement(
            'div',
            { id: 'page' },
            React.createElement('div', { className: 'noise' }),
            React.createElement(
                'div',
                { id: 'fixed-navbar' },
                React.createElement(
                    'div',
                    { className: 'logo-container' },
                    React.createElement(
                        'div',
                        { className: 'logo' },
                        'my',
                        React.createElement(
                            'span',
                            null,
                            ' '
                        ),
                        'workflow',
                        React.createElement(
                            'span',
                            null,
                            '.'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'App-container' },
                React.createElement(
                    'div',
                    { className: 'App-selector' },
                    React.createElement(
                        'ul',
                        { className: 'App-selector-list-container' },
                        React.createElement(
                            'li',
                            { className: 'app-list active ripple-effect', 'data-link': 'dashboard', onClick: this.handleChange, title: 'Dashboard' },
                            React.createElement('img', { src: 'images/icons8-dashboard-96.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'todos', onClick: this.handleChange, title: 'Todos' },
                            React.createElement('img', { src: 'images/icons8-tick-100.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'timeline', onClick: this.handleChange, title: 'Timeline' },
                            React.createElement('img', { src: 'images/icons8-week-view-96.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'goals', onClick: this.handleChange, title: 'Goals' },
                            React.createElement('img', { src: 'images/icons8-goal-100.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'notes', onClick: this.handleChange, title: 'Notes' },
                            React.createElement('img', { src: 'images/icons8-notes-100.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'deadlines', onClick: this.handleChange, title: 'Deadlines' },
                            React.createElement('img', { src: 'images/icons8-deadline-100.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'letters', onClick: this.handleChange, title: 'Letters' },
                            React.createElement('img', { src: 'images/icons8-paper-plane-100.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'timers', onClick: this.handleChange, title: 'Timers' },
                            React.createElement('img', { src: 'images/icons8-alarm-clock-100.png' })
                        ),
                        React.createElement(
                            'li',
                            { className: 'app-list ripple-effect', 'data-link': 'stopwatchs', onClick: this.handleChange, title: 'Stop Watch' },
                            React.createElement('img', { src: 'images/icons8-stopwatch-100.png' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'current-app-display' },
                    React.createElement(
                        'div',
                        { id: 'App' },
                        React.createElement(
                            'div',
                            { className: 'apps-display active', 'data-name': 'dashboard' },
                            React.createElement(DashBoardApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'todos' },
                            React.createElement(TodoApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'timeline' },
                            React.createElement(WeeksToLive, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'goals' },
                            React.createElement(GoalsApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'deadlines' },
                            React.createElement(DeadLineApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'letters' },
                            React.createElement(FutureLetterApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'notes' },
                            React.createElement(NotesApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'timers' },
                            React.createElement(TimerApp, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'apps-display', 'data-name': 'stopwatchs' },
                            React.createElement(StopWatchApp, null)
                        )
                    )
                )
            )
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(React.createElement(App, null));

if (module.hot) {
    module.hot.accept();
}
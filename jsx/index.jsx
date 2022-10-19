import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './components/TodoApp/TodoApp'
import StopWatchApp from './components/StopWatchApp/StopWatchApp'
import TimerApp from './components/TimerApp/TimerApp'
import NotesApp from './components/NotesApp/NotesApp'
import WeeksToLive from './components/WeeksToLive/WeeksToLive'
import MusicApp from './components/MusicApp/MusicApp'
import DeadLineApp from './components/DeadLineApp/DeadLineApp'
import FutureLetterApp from './components/FutureLetterApp/FutureLetterApp'
import GoalsApp from './components/GoalsApp/GoalsApp'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import LogoutButton from './components/LogoutButton/LogoutButton'
import ripples from './components/effects/ripple'
import ripple from './components/effects/ripple'

// import Blob from './components/blob'

class DashBoardApp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>This is Dashboard</h1>
        )
    }
}


class App extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount(){
        ripple()
    }

    handleChange(e){
        var link = e.target.dataset.link
        
        var elements = [...document.getElementsByClassName('apps-display')]

        var buttons = [...document.getElementsByClassName('app-list')]

        var target = elements.filter(a=>a.dataset.name == link)
        
        elements.forEach(a=>a.classList.remove('active'))
        buttons.forEach(a=>a.classList.remove('active'))

        e.target.classList.add('active')
        target[0].classList.add('active')

        new Masonry( '.notes-flex-container', { 
            itemSelector: '.note-container',
            isAnimated: true
        })
    }

    render(){
        return(
        <div id="page">
            <div className="noise"></div>
            <div id="fixed-navbar">
               <div className='logo-container'>
                <div className="logo">my<span> </span>workflow<span>.</span></div> 
                </div> 
            </div>
            <div id="App-container">
                <div className="App-selector">
                    <ul className='App-selector-list-container'>
                    <li className='app-list active ripple-effect' data-link="dashboard" onClick={this.handleChange}  title="Dashboard">
                        <img src="images/icons8-dashboard-96.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="todos" onClick={this.handleChange}  title="Todos">
                        <img src="images/icons8-tick-100.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="timeline" onClick={this.handleChange}  title="Timeline">
                        <img src="images/icons8-week-view-96.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="goals" onClick={this.handleChange}  title="Goals">
                        <img src="images/icons8-goal-100.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="notes" onClick={this.handleChange}  title="Notes">
                        <img src="images/icons8-notes-100.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="deadlines" onClick={this.handleChange}  title="Deadlines">
                    <img src="images/icons8-deadline-100.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="letters" onClick={this.handleChange}  title="Letters">
                        <img src="images/icons8-paper-plane-100.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="timers" onClick={this.handleChange}  title="Timers">
                        <img src="images/icons8-alarm-clock-100.png"/>
                    </li>
                    <li className='app-list ripple-effect' data-link="stopwatchs" onClick={this.handleChange} title="Stop Watch">
                        <img src="images/icons8-stopwatch-100.png"/>
                    </li>
                    </ul>

                </div>
                <div id='current-app-display'>
                <div id="App">
                    <div className="apps-display active" data-name="dashboard"><DashBoardApp/></div>
                    <div className="apps-display" data-name="todos"><TodoApp/></div>
                    <div className="apps-display" data-name="timeline" ><WeeksToLive/></div>
                    <div className="apps-display" data-name="goals"><GoalsApp/></div>
                    <div className="apps-display" data-name="deadlines"><DeadLineApp/></div>
                    <div className="apps-display" data-name="letters"><FutureLetterApp/></div>
                    <div className="apps-display" data-name="notes"><NotesApp/></div>
                    <div className="apps-display" data-name="timers"><TimerApp/></div>
                    <div className="apps-display" data-name="stopwatchs"><StopWatchApp/></div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App/>)



if(module.hot){
    module.hot.accept();
}


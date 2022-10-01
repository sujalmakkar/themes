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

class App extends React.Component {
    render(){
        return(
            <div id="App">
                <RegisterPage/>
                {/* <TodoApp/>
                <StopWatchApp/>
                <TimerApp/>
                <NotesApp/>
                <WeeksToLive/>
                <DeadLineApp/>
                <FutureLetterApp/>
                <MusicApp/>
                <GoalsApp/> */}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App/>)


if(module.hot){
    module.hot.accept();
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './components/TodoApp/TodoApp'
import StopWatchApp from './components/StopWatchApp/StopWatchApp'
import TimerApp from './components/TimerApp/TimerApp'
import NotesApp from './components/NotesApp/NotesApp'
import WeeksToLive from './components/WeeksToLive/WeeksToLive'
import MusicApp from './components/MusicApp/MusicApp'

class App extends React.Component {
    render(){
        return(
            <React.StrictMode>
            <div>
                hey there
                <TodoApp/>
                {/* <StopWatchApp/> */}
                {/* <TimerApp/> */}
                <NotesApp/>
                <WeeksToLive/>
                {/* <MusicApp/> */}
            </div>
            </React.StrictMode>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App/>)


if(module.hot){
    module.hot.accept();
}
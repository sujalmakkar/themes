import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './Todo'
import TimerApp from './Timer'

class App extends React.Component {
    render(){
        return(
            <React.StrictMode>
            <div>
                hey there
                <TodoApp/>
                <TimerApp/>
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
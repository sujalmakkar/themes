import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './Todo'
import TimerApp from './Timer'

class App extends React.Component {
    render(){
        return(
            <div>
                hey there
                <TodoApp/>
                <TimerApp/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App/>)


if(module.hot){
    module.hot.accept();
}
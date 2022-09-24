import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './components/TodoApp/TodoApp'
import StopWatchApp from './components/StopWatchApp/StopWatchApp'

class App extends React.Component {
    render(){
        return(
            <React.StrictMode>
            <div>
                hey there
                <TodoApp/>
                <StopWatchApp/>
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
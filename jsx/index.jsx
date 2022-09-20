import React from 'react'
import ReactDOM from 'react-dom/client'

class App extends React.Component {
    render(){
        return(
            <div>
                that was fast bitch
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(<App/>)


if(module.hot){
    module.hot.accept();
}
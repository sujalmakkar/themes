import React from 'react'
import NotesContainer from './NotesContainer'


class NotesApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {logs:[]}
        this.addLog = this.addLog.bind(this)
    }
    addLog(info){
        var logscopy = this.state.logs
        logscopy.push(info)
        this.setState({logs:logscopy})
    }
    render(){
        return(
            <React.StrictMode>
            <div>
                Notes App
                
                <NotesContainer onClick={this.openEditor}/>
                <NotesContainer onClick={this.openEditor}/>
            </div>
            </React.StrictMode>
        )
    }
}




export default NotesApp
import React from 'react'
import NotesContainer from './NotesContainer'
import randomNumber from '../../../server/functions/randomNumber'


class NotesApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {notes:[]}
        this.addLog = this.addLog.bind(this)
        this.addNote = this.addNote.bind(this)
    }
    addLog(info){
        var logscopy = this.state.logs
        logscopy.push(info)
        this.setState({logs:logscopy})
    }
    componentDidMount(){

        fetch('/getData/notes',{
            method:'GET',
            headers:{'Content-Type':'Application/json'},
        }).then(res=>res.json()).then(result=>
            this.setState({notes:result})
            ).catch(err=>console.log(err))

    }
    addNote(){
        var id = randomNumber(10)
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        var todayDate = currentDate.toLocaleDateString('en-us', options)
        var info = {
            id:id,
            dateCreated:todayDate,
            data:{heading:'Heading here!',content:'Content here!'}
        }
        var statecopy = this.state.notes
        statecopy.push(info)
        
        fetch('/postData/notes/new',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(info)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))

        this.setState({notes:statecopy})
    }
    render(){
        return(
            <React.StrictMode>
            <div>
                Notes App
                <button type="button" onClick={this.addNote}>Create New Note</button>
                {this.state.notes.length>0 ? this.state.notes.map(info=>
                    <NotesContainer id={info.id} key={info.id}/>
                ):''}
            </div>
            </React.StrictMode>
        )
    }
}

export default NotesApp
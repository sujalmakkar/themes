import React from 'react'
import DeadLineContainer from './DeadLineContainer'
import DeadLineForm from './DeadLineForm'
// import randomNumber from '../../../server/functions/randomNumber'


class DeadLineApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {deadlines:[]}
        this.addDeadLine = this.addDeadLine.bind(this)
    }
    addDeadLine(data){
        //SET THE DEADLINE IN THE CLIENT
        console.log(data)
        var statecopy = this.state.deadlines
        statecopy.push(data)
        this.setState({deadlines:statecopy})

        //SET THE DEADLINE IN THE SERVER
        fetch('/postData/newdeadline',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
    }
    componentDidMount(){

        //GET THE DEADLINES FROM THE SERVER
        fetch('/getData/deadline',{
            method:'GET',
            headers:{'Content-Type':'Application/json'},
        }).then(res=>res.json())
        .then(result=>this.setState({deadlines:result.alldeadlines}))
        .catch(err=>console.log(err))
    }
    
    render(){
        return(
            <div id="deadLineApp" className='app'>
                <DeadLineContainer deadLines={this.state.deadlines}/>
                <DeadLineForm addDeadLine={this.addDeadLine}/>
            </div>
        )
    }
}

export default DeadLineApp
import React from 'react'
import DeadLineContainer from './DeadLineContainer'
import DeadLineForm from './DeadLineForm'

class DeadLineApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {deadlines:[]}
        this.addDeadLine = this.addDeadLine.bind(this)
        this.pinDeadLine = this.pinDeadLine.bind(this)
        this.deleteDeadLine = this.deleteDeadLine.bind(this)
    }
    addDeadLine(data){
        //SET THE DEADLINE IN THE CLIENT
        var statecopy = this.state.deadlines
        statecopy.unshift(data)
        this.setState({deadlines:statecopy})

        //SET THE DEADLINE IN THE SERVER
        fetch('./postData/newdeadline',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(null).catch(err=>console.log(err))
    }

    pinDeadLine(data){
        var statecopy = this.state.deadlines
        var index = statecopy.findIndex(a=>a.id==data)
        var info = {
            id:data,
            pinned:!statecopy[index].pinned,
        }
        statecopy[index].pinned = !statecopy[index].pinned
        this.setState({deadlines:statecopy})
        fetch('./postData/pindeadline',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(info)
        }).then(res=>res.json()).then(null).catch(err=>null(err))
    }

    deleteDeadLine(data){

        var statecopy = this.state.deadlines
        var index = statecopy.findIndex(a=>a.id==data)
        var info = {
            id:data
        }
        statecopy.splice(index,1)
        this.setState({deadlines:statecopy})
        fetch('./postData/deletedeadline',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(info)
        }).then(res=>res.json()).then(null).catch(err=>null(err))
    }

    componentDidMount(){

        //GET THE DEADLINES FROM THE SERVER
        fetch('./getData/deadline',{
            method:'GET',
            headers:{'Content-Type':'Application/json'},
        }).then(res=>res.json())
        .then(result=>
            {
                result.alldeadlines.reverse()
                this.setState({deadlines:result.alldeadlines})
            })
        .catch(err=>null(err))

        setTimeout(()=>{
            $(function(){
                $('.dead-line-container').masonry({
                    itemSelector: '.dead-line',
                    isAnimated: true
                  });
                  $('.dead-line-container').masonry({
                    itemSelector: '.dead-line',
                    isAnimated: true
                  });
            })
        },1000)
    }

    componentDidUpdate(){
        new Masonry( '.dead-line-container', { 
            itemSelector: '.dead-line',
            isAnimated: true
        })
    }
    
    render(){
        return(
            <div id="DeadLineApp" className='app'>
                <div className="app-heading">Your DeadLines</div>
                <DeadLineForm addDeadLine={this.addDeadLine}/>
                <DeadLineContainer deadLines={this.state.deadlines} deletedeadline={this.deleteDeadLine} pindeadline={this.pinDeadLine}/>
            </div>
        )
    }
}

export default DeadLineApp
import React from 'react'
import FutureLetterAppForm from './FutureLetterAppForm'
import FutureLetterAppDisplay from './FutureLetterAppDisplay'
import FutureLetterAppOpened from './FutureLetterAppOpened'

class FutureLetterApp extends React.Component{
    constructor(props){
        super(props)
        this.addFutureLetter = this.addFutureLetter.bind(this)
        this.state = {letters:0,data:[],openedletters:[]}
    }
    addFutureLetter(e){


        fetch('./postData/newLetter',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))

        this.setState({
            letters:this.state.letters+1
        })

        var data = e.date
        var statecopy = this.state.data
        statecopy.push(data)
        this.setState({data:statecopy})
    }

    componentDidMount(){
        fetch('./getData/letters',{
            method:'GET',
            headers:{'content-Type':'application/json'},
        }).then(res=>res.json()).then(result=>
            this.setState({letters:result.number})
        ).catch(err=>console.log(err))

        fetch('./getData/openedletters',{
            method:'GET',
            headers:{'content-Type':'application/json'},
        }).then(res=>res.json()).then(result=>
            this.setState({openedletters:result})
        ).catch(err=>console.log(err))

    }

    render(){
        return(
            <div id="FutureLetterApp" className='app'>
                <div className="app-heading">
                    <div>Your Letters</div>
                    <span>Write a letter to your future self.</span>
                </div>
                <FutureLetterAppDisplay letters={this.state.letters}/>
                <FutureLetterAppForm addFutureLetter={this.addFutureLetter}/>
                <FutureLetterAppOpened letters={this.state.openedletters}></FutureLetterAppOpened>
            </div>
            )
    }
}

export default FutureLetterApp
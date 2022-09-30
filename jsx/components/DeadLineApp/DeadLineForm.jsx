import React,{useState,useEffect} from 'react'

export default function DeadLineForm(props){

    const [name,setname] = useState('')

    var dateInput=null
    function dateInputRef(e){
        dateInput = e 
    }

    useEffect(()=>{
        dateInput.min = new Date().toLocaleDateString('en-ca')
    },[])

    function addDeadLine(data){
        data.preventDefault()
        props.addDeadLine({name:name,due:data.target.due.value})
    }
    function setDeadLineName(e){
        setname(e.target.value)
    }
    return (
        <form onSubmit={addDeadLine}>
            <input name='deadline' onChange={setDeadLineName} placeholder="name" type="text" required/>
            <input name='due' type="date" ref={dateInputRef} required/>
            <button type="submit">Add Deadline</button>
        </form>
    )
}
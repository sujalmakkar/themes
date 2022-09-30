import React,{useState} from 'react'

export default function GoalsForm(props){
    const [data,setdata] = useState()

    function handleFormSubmit(e){    
        e.preventDefault()
        props.addGoal(data)
    }
    function handleInput(e){
        setdata(e.target.value)
    }
    return(
        <div className='goals-form'>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInput}/>
                <button type="submit">Add Goal</button>
            </form>
        </div>
    )
}
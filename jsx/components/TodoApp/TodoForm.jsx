import React ,{useState} from 'react'

export default function TodoForm(props){

    const [todo,settodo] = useState('')

    function submitTodo(e){
        e.preventDefault()

        var GenRandom = true
        var randomId = 0

        while (GenRandom == true){
            randomId = Math.floor( Math.random() * (999999 - 111111) + 111111);
            var exists = props.existing_todos.filter(todos => todos.id == randomId ) //check if dublicate ID exists
            exists.length > 0 ? GenRandom = true : GenRandom = false
        }
    
        props.newTodo({text:todo,done:false,id:randomId})
        settodo('')
    }
    
    function handleChange(event){
        let value = event.target.value
        settodo(value)
    }

    return(
        <React.Fragment>
        <form className="todo_form" onSubmit={submitTodo}>
        <input type="text" onChange={handleChange} value={todo} name="todo_input_1" className="input_type_1" required/>
        <button type="submit">Add</button>
        </form>
        </React.Fragment>
    )
}

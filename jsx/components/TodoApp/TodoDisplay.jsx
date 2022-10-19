import React from 'react'
import TodoEditableText from './TodoEditableText'



// Display the Todo in a 2 Todo Container one consists all the done todo and another consists of all the undone
// Also display todo based on date

export default function TodoDisplay(props){

    function doneStateChange(e){
        e.target.dataset.date = props.date
        props.changeTodoState(e.target.dataset)
    }

    function changeTodoText(e){
        e.date = props.date
        if(e.text.length==0 || e.text == '' || e.text == ' '){
            e.text = 'untitled'
        }
        props.changeTodoText(e)
    }

    function deleteTodo(e){
        e.target.dataset.date = props.date
        props.deleteTodo(e.target.dataset)
    }

    return(
        <React.Fragment>
        <div className='todos-container-date'>
        <div className="date">{props.date}</div>
        {/* undone-todos container */}
        <ul className='todos-not-done-container'>
        <div className="todo-container-type">Undone</div>
        {props.todos.reverse().map(todo=>
        !todo.done ? 
        <li className="todo" key={todo.id}> 
        <span className="box-shadow doneIndicator undone ripple-effect" title="mark as done" data-text={todo.text} data-id={todo.id} onClick={doneStateChange}>&#10003;</span> 
        <TodoEditableText  todoDone={todo.done} todoText={todo.text} todoId={todo.id} changeTodoText={changeTodoText}/>
        <span className="box-shadow deleteTodo ripple-effect" title="delete" data-text={todo.text} data-id={todo.id} onClick={deleteTodo}><img data-text={todo.text} data-id={todo.id} src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png"/></span> 

        </li> : ''
        )}
        </ul>

        {/* done-todos container */}
        <ul className='todos-done-container'>
        <div className="todo-container-type">Done</div>
        {props.todos.reverse().map((todo)=>
        todo.done? 
        <li className="todo" key={todo.id}> 
        <span className="box-shadow doneIndicator done ripple-effect" title="mark as not done" data-text={todo.text} data-id={todo.id} onClick={doneStateChange}>&#10005;</span> 
        <TodoEditableText  todoDone={todo.done} todoText={todo.text} todoId={todo.id} changeTodoText={changeTodoText}/>
        <span className="box-shadow deleteTodo ripple-effect" title="delete" data-text={todo.text} data-id={todo.id} onClick={deleteTodo}><img data-text={todo.text} data-id={todo.id} src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png"/></span> 
        </li> : ''
        )}
        </ul>
        </div>
        </React.Fragment>
    )
}
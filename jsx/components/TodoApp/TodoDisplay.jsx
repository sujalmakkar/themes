import React from 'react'
import TodoEditableText from './TodoEditableText'


// Display the Todo in a 2 Todo Container one consists all the done todo and another consists of all the undone

export default function TodoDisplay(props){

    function doneStateChange(e){
        props.changeTodoState(e.target.dataset.id)
    }

    function changeTodoText(e){
        props.changeTodoText(e)
    }

    return(
        <React.Fragment>
        {/* undone-todos container */}
        <ul className='todos-not-done-container'>
        <div className="todo-container-type">Undone</div>
        {props.todos.map((todo)=>
        !todo.done ? 
        <li className="todo" key={todo.id}> 
        <TodoEditableText  todoDone={todo.done} todoText={todo.text} todoId={todo.id} changeTodoText={changeTodoText}/>
        <span className="doneIndicator doneIndicator-done" title="mark as done" data-id={todo.id} onClick={doneStateChange}>&#10003;</span> 
        </li> : ''
        )}
        </ul>

        {/* done-todos container */}
        <ul className='todos-done-container'>
        <div className="todo-container-type">Done</div>
        {props.todos.map((todo)=>
        todo.done ? 
        <li className="todo" key={todo.id}> 
        <TodoEditableText  todoDone={todo.done} todoText={todo.text} todoId={todo.id} changeTodoText={changeTodoText}/>
        <span className="doneIndicator doneIndicator-done" title="mark as not done" data-id={todo.id} onClick={doneStateChange}>&#10005;</span> 
        </li> : ''
        )}
        </ul>
        </React.Fragment>
    )
}
import React from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay'
import ripple from '../effects/ripple'


class TodoApp extends React.Component { 
    constructor(props){
        super(props)
        this.state = {  alltodos: [] }
        this.newTodo = this.newTodo.bind(this)
        this.changeTodoState = this.changeTodoState.bind(this)
        this.changeTodoText = this.changeTodoText.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    changeTodoState(e){
        
        var todos_copy = this.state.alltodos
        var indexdate = todos_copy.findIndex(a=>a.date == e.date);
        var indextodo = todos_copy[indexdate].todos.findIndex(a=>a.id == e.id);
        var current = !todos_copy[indexdate].todos[indextodo].done 
        todos_copy[indexdate].todos[indextodo].done = current
        this.setState({alltodos:todos_copy})
        e.done = current
        fetch('/postData/todo',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
    }
    newTodo(e){
        var todayDate = new Date()
        var todayDatevalue = todayDate.getDate()
        var todayMonthvalue = todayDate.getMonth()+1
        var todayYearvalue = todayDate.getFullYear()
        var finaldate = todayDatevalue + '/' + todayMonthvalue + '/' +todayYearvalue 
        e.date = finaldate
        var todos_copy = this.state.alltodos
        var existingdate = todos_copy.filter(e=>e.date==finaldate)
        console.log(existingdate)
        if(existingdate.length==0){
            var newdate={
                date:finaldate,
                todos:[]
            }
            newdate.todos.push(e)
            todos_copy.unshift(newdate)
            this.setState({alltodos:todos_copy})
        }else{
            var index = todos_copy.findIndex(a=>a.date == finaldate);
            todos_copy[index].todos.push(e)
            this.setState({alltodos:todos_copy})
        }
        fetch('/postData/newtodo',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
    }
    changeTodoText(e){
        var todos_copy = this.state.alltodos
        var indexdate = todos_copy.findIndex(a=>a.date == e.date);
        var indextodo = todos_copy[indexdate].todos.findIndex(a=>a.id == e.id);
        todos_copy[indexdate].todos[indextodo].text = e.text
        this.setState({alltodos:todos_copy})
        e.done = todos_copy[indexdate].todos[indextodo].done
        fetch('/postData/todo',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
    }

    deleteTodo(e){
        var todos_copy = this.state.alltodos
        var indexdate = todos_copy.findIndex(a=>a.date == e.date);
        var indextodo = todos_copy[indexdate].todos.findIndex(a=>a.id == e.id);
        console.log(indextodo,'indextodo',e)
        todos_copy[indexdate].todos.splice(indextodo,1)
        if(todos_copy[indexdate].todos.length==0){
            todos_copy.splice(indexdate,1)
        }
        this.setState({alltodos:todos_copy})
        fetch('/postData/tododel',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(e)
        }).then(res=>res.json()).then(result=>console.log(result)).catch(err=>console.log(err))
    }

    componentDidMount(){
        fetch('/getData/todos',{
            method:'GET',
            headers:{'Content-Type':'Application/json'},
        }).then(res=>res.json())
        .then(result=>{
            if(result.status!=301){
                result.alltodos.reverse();
                this.setState({alltodos:result.alltodos})
            }
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div id='TodoApp' className='app'>
                <div className="app-heading">Set your todos and crush your wife</div>
                <TodoForm newTodo={this.newTodo} existing_todos={this.state.todos}/>
                {this.state.alltodos.length>0?this.state.alltodos.map((data) => 
                <TodoDisplay key={data.date} date={data.date} todos ={data.todos} changeTodoText={this.changeTodoText} deleteTodo={this.deleteTodo} changeTodoState={this.changeTodoState}/>
                ):''}
            </div>
        )
    }
}





export default TodoApp
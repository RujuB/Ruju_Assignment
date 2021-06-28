import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    let myStyle={
        minHeight:"100vh"
    }
    return(
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">ToDo List</h3>
            {props.todos.length===0? "No todos to do. Now you can relax!":
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
        </div>
    )
} 

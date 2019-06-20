import React from 'react';
import './Todo.css';
import logo from './red-cross.jpg';


const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
        return(
            <div className="collection-item" key={todo.id}>
                <span >
                    {todo.content}
                </span>
                <span onClick={() => { deleteTodo(todo.id) }}>
                   <img src={logo} className="clogo" alt="logo" />
                </span>
            </div>
        )
    })
    ) :( 
    <p className="center">You have no todo's left</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;
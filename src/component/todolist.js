import React from "react";
import Todo from './todo'
const ToDoList = ({toDos, setToDos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    toDos.map((toDo)=>(
                        <Todo text={toDo.text} key={toDo.id} toDo={toDo} setToDos={setToDos} toDos={toDos}/>
                    ))
                }

            </ul>
        </div>
    )
}

export default ToDoList;
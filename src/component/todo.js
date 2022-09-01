import React from "react";


const ToDo = ({text, toDo, toDos, setToDos}) =>{
  
    const deleteHandler=()=>{
        setToDos(toDos.filter((el)=> el.id !== toDo.id))
    }
    const completeHandler = () => {
        setToDos(toDos.map((item)=>{
            if(item.id === toDo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${toDo.completed ? "completed" : ""} `}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check" ></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
};

export default ToDo;
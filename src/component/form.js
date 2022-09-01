import React from "react";

const Form = ({setInputText, toDos, setToDos, inputText}) =>{
    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    };

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        setToDos([
            ...toDos,
            {text: inputText, completed: false, id: Date.now()}
        ]);
        setInputText('')
    }
    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button type="submit" className="todo-button" onClick={submitToDoHandler}>
                <i class="fa-solid fa-circle-plus"></i>
            </button>
        </form>
    )
}

export default Form;
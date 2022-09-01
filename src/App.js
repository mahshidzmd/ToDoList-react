import React, {useState} from 'react';
import './App.css';
import Form from './component/form';
import ToDoList from './component/todolist';

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form setInputText={setInputText} toDos={toDos} setToDos={setToDos} inputText={inputText}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>

  );
}

export default App;


import { useState, useEffect } from 'react';
import './App.css';

// Importing Components
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  
 
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos ] = useState([]);
  const [status, setStatus ] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  },[]);

  // use EFFEcT
  useEffect(()=>{
    filterHandler();
  }, [todos, status]);
  // Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }; 

  // Save to Local
  const saveLocalTodos = () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
      
    } else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  return (
    <div className="App">
     <header>
    <h1>Pooja's Todo List</h1>
     </header>
     <Form 
      inputText = {inputText} 
      todos = {todos} 
      setTodos= {setTodos} 
      setInputText = {setInputText}
      setStatus = {setStatus}
      filteredTodos = {filteredTodos}
      />
     <TodoList 
      setTodos = {setTodos} 
      todos = {todos} 
      filteredTodos = {filteredTodos}
     />
    </div>
  );
}

export default App;

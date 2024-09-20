
import React,{useState} from 'react'
import TodoList from './TodoList.js';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
    notify();
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
    notifyy();

  }
  const notify = () => toast("Task Added Succesfully");
  const notifyy = () => toast("Task deleted Succesfully");
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <ToastContainer/>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            
            <ToastContainer/>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
            
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
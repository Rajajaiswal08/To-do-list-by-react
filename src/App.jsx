import React,{useState} from 'react'
import Input from './Input'
import Display from './Display'

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (value) =>{
    setTodo([...todos,value])
  }

  const revmoveTask = (i)=>{
    const deleteData =  todos.filter(
      (f,index)=>{
                if(index == i){
               
                  return false;
                }
                else{
                  return true;
                }
      }

    )
    setTodo (deleteData);
  }

  return (
      <div className='container'>
        <Input  addHandler={addTodo}/>
        <Display todos={todos} delTask={revmoveTask}/>
      </div>
  )
}

export default App

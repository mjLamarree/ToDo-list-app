import React, {useState, useRef, useEffect} from 'react';
import uuid from 'react-uuid';
import TodoList from './TodoList';

const tasksStorageKey = 'TodoListApp.currentTasks'


function App() {
  const [currentTasks, setTask] = useState([])
  const currentTaskRef = useRef()
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(tasksStorageKey))
    if(storedTasks) setTask(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem(tasksStorageKey, JSON.stringify(currentTasks))
  }, [currentTasks])

  function handleAddTask(e){
    const newTask = currentTaskRef.current.value
    if (newTask === '') {return}
    setTask(prevTask =>{
      return [...prevTask, {id:uuid(), taskText: newTask, checked:false} ]
    })
    currentTaskRef.current.value = null
  }

  function handleRemoveTask(e){
    const newCurrentTask = currentTasks.filter(currentTasks => !currentTasks.checked)
    setTask(newCurrentTask)
    
  }

  function toggleTaskChecked(id){
    const newTaskList = [...currentTasks]
    const task = newTaskList.find(task => task.id === id)
    task.checked = !task.checked
    setTask(newTaskList)
  }

  return(
    <div className='mainDivStyle'>
      <h1>Things To Do</h1>
      <TodoList currentTasks={currentTasks} toggleTaskChecked ={toggleTaskChecked}/>
      <input className='inputFieldStyle' ref={currentTaskRef} type='text' />
      <button className='addTaskButtonStyle' onClick={handleAddTask}>Add Task</button>
      <div className='clearTaskButtonDiv'>
        <button className='clearTaskButtonStyle' onClick={handleRemoveTask}>Clear Completed Tasks</button>
      </div>
      
      <h3>{currentTasks.filter(currentTasks => !currentTasks.checked).length} left to complete </h3>
    </div>
  )
}

export default App;

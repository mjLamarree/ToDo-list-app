import React from 'react'


export default function Task({task, toggleTaskChecked}) {


function handleTaskChecked(){
    toggleTaskChecked(task.id)
}

  return(
    <div  className='toDoListItemStyles'>
      <label>
        <input className='checkbox' type="checkbox" checked={task.checked} onChange={handleTaskChecked}/>
        {task.taskText}
      </label>
    </div>
  )
}

import React from 'react'
import uuid from 'react-uuid'
import Task from './Task'

export default function TodoList({currentTasks, toggleTaskChecked}) {
  return(
    currentTasks.map(currentTasks =>{
        return <Task key={currentTasks.id} task={currentTasks} toggleTaskChecked={toggleTaskChecked} />
    })
  )
}


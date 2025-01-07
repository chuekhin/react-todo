import React, { useState } from 'react'
import  TaskContext  from './TaskContext';

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        { id: 1, task: "Complete project proposal", isDone: false },
        { id: 2, task: "Study JavaScript", isDone: false },
        { id: 3, task: "Submit assignment", isDone: false },
        { id: 4, task: "Prepare for the meeting", isDone: false },
        { id: 5, task: "Update resume", isDone: false }
      ]);
    
      const addTask = (newJob) => {
        if(newJob.task === ""){
          alert("Please, Write Your tasks")
        }else{
          setTasks([...tasks,newJob]);
        }
      }
    
      const removeTask = (id) => {
        if(confirm("Are you sure to delete?")){
          setTasks(tasks.filter((task) => task.id !== id))
        }
      }
    
      const doneTask = (id) => {
        setTasks(tasks.map((el) => el.id === id ? {...el, isDone : !el.isDone} : el))
      }

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask, doneTask}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
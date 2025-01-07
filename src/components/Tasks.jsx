import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import useTaskStore from '../store/useTaskStore'

const Tasks = ({job:{id, task, isDone}}) => {
  // const {removeTask, doneTask} = useContext(TaskContext);
  const { removeTask , doneTask } = useTaskStore();

  const handleDeleteBtn = () => {
    if(confirm("Are you sure to delete?"))
      removeTask(id);
  }
  const handleOnChange = () => {
      doneTask(id)
  }
  return (
    <div className={isDone ? "bg-green-100 border-2 border-gray-300 px-4 py-3 rounded-lg flex justify-between items-center" :"border-2 border-gray-300 px-4 py-3 rounded-lg flex justify-between items-center" }>
      <div className='flex justify-between items-center gap-3'>
        <input type='checkbox' checked={isDone} onChange={handleOnChange}  className='size-4'/>
        <p className={isDone ? `line-through` : ""}>{task}</p>
      </div>
      <button onClick={handleDeleteBtn} className='border border-red-200 bg-red-200 text-red-500 px-4 py-1 rounded-lg'>
      Delete</button>
    </div>
  )
}

export default Tasks 
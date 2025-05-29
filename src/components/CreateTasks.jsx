import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext'
import useTaskStore from '../store/useTaskStore';
import toast, { Toaster } from 'react-hot-toast';
import Container from './Container';

const CreateTasks = () => {
  // const {addTask} = useContext(TaskContext);
  const { addTask } = useTaskStore();

  const [job , setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value)
  }

  const newTask = {
    id : Date.now(),
    task : job,
    isDone : false
  }

  const handleKeyUp = (event) => {
      if(event.key === "Enter" && event.target.value !== ""){
          addTask(newTask);
          setJob("");
      }else{
        toast("Please add your task.")
      }
  }

  const handleOnClick = (event) => {
    if(event.target.value !== ""){
      addTask(newTask);
      setJob("");
    }else{
      toast("Please add your task.")
    }
  }
  return (
      <Container>
        <div className='flex mb-10'>
            <input onKeyDown={handleKeyUp} value={job} onChange={handleOnChange} type='text' className='flex-grow border-2 border-pink-500 rounded-l-lg px-4 py-3 outline-none' placeholder='Write Your Task List'/>
            <button onClick={handleOnClick} className='px-7 py-3 bg-pink-500 border-2 rounded-r-lg border-pink-500 text-white'>Add Task</button>
        </div>
      </Container>
  )
}

export default CreateTasks

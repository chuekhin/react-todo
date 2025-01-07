import React, { useContext } from 'react'
import Tasks from './Tasks';
// import TaskContext from '../context/TaskContext'
import useTaskStore from '../store/useTaskStore';
import Container from './Container';

const TaskList = () => {
  // const {tasks} = useContext(TaskContext);
  const { tasks } = useTaskStore();
  return (
    <Container>
        <div>
            <h3 className='text-xl font-bold text-pink-500 mb-5'>TaskList (Total({tasks.length}) ,
            Done({tasks.filter((el) => el.isDone).length}))</h3>
            <div className='flex flex-col gap-5'>
              {tasks.map((el) => <Tasks key={el.id} job={el}/>)}
            </div>
        </div>
    </Container>
  )
}

export default TaskList
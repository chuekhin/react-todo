import React from 'react'
import CreateTasks from './components/CreateTasks'
import Heading from './components/Heading'
import TaskList from './components/TaskList'
import TaskProvider from './context/TaskProvider'
import Counter from './components/Counter'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
        <div className='pt-10'>
          <Heading />
          <CreateTasks />
          <TaskList />
          <Toaster
            toastOptions={{
            // Define default options
            className: '',
            duration: 1000,
            removeDelay: 1000,
            style: {
              background: '#d8f3dc',
              color: '#f72585',
            }}}
          />
        </div>
    
    // {/* <Counter /> */}
  )
}

export default App
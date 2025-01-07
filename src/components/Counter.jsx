import React from 'react'
import useCounterStore from '../store/useCounterStore'

const Counter = () => {

    const {count, resetCount, incrementCount, decrementCount} = useCounterStore()

    const handleReset = () => {
        resetCount()
    }

    const handleIncrement = () => {
        incrementCount()
    }

    const handleDecrement = () => {
        decrementCount()
    }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-80 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Counter App</h1>
        <div className="flex items-center justify-between">
          <button
            onClick={handleDecrement} className="w-16 h-16 bg-red-500 text-white text-xl rounded-full hover:bg-red-600 focus:outline-none"
          >
            -
          </button>
          <span className="text-4xl font-semibold">{count}</span>
          <button
            onClick={handleIncrement} className="w-16 h-16 bg-green-500 text-white text-xl rounded-full hover:bg-green-600 focus:outline-none"
          >
            +
          </button>
        </div>
        <button
          onClick={handleReset} className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
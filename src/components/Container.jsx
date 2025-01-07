import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className='w-full mx-auto xl:px-[300px] lg:px-[200px] md:px-[100px] px-[50px]'>
        {children}
    </div>
  )
}

export default Container
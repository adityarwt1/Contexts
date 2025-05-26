import React from 'react'

const page = () => {
  return (
    <div className='w-full p-2 flex justify-center items-center shadow-lg border-b'>
      <div className='mx-2'>Home</div>
      <div className='mx-2'>About</div>
      <button className='mx-2 border rounded-md p-2 hover:bg-gray-400 hover:text-white duration-300 transition'>Toggle Theme</button>
    </div>
  )
}

export default page

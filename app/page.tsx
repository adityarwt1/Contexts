import Link from 'next/link'
import React from 'react'

const LinkArray = [
    {
        href: "/counter",
        title: "Counter Context"
    }
]

const page = () => {
  return (
    <div className=' flex items-center justify-center w-full h-screen'>
        <div className=' w-1/2 flex flex-col p-4 shadow-md'>
        {LinkArray.map((link)=>(
            <div>
            <Link href={link.href} className='w-fit   border-gray-600 '>{link.title}</Link>
            </div>
        ))}
        </div>
    </div>
  )
}

export default page

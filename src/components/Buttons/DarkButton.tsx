import React from 'react'

const DarkButton = ({text}:any) => {
  return (
    <button className='p-4 bg-black text-white rounded-lg w-[80%]'
    >{text}</button>
  )
}

export default DarkButton
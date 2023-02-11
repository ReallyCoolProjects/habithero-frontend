import React from 'react'

const OutlinedButton = ({text}:any) => {
  return (
    <button className='p-4 bg-white text-black border border-black rounded-lg w-[80%]'
    >{text}</button>
  )
}

export default OutlinedButton
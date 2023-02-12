import React from 'react'

const TextField = ({label,type,id,placeholder}:any) => {
  return (
    <div className='flex flex-col justify-between h-[10vh]'>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={label} id={id} placeholder={placeholder} className="h-[6vh] p-4 border border-black" />
    </div>
  )
}

export default TextField
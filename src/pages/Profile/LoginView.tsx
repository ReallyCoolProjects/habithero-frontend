import React from 'react'
import { Link } from 'react-router-dom'

const LoginView = () => {
  return (
    <div className='mt-8'>
        <div className='flex flex-col h-[40vh] justify-around'>
        <span className="text-5xl">Hello, Guest</span>
        <p> <Link to="/" className='underline'>Sign up</Link> for a free account and track your progress anywhere!</p>
        <p>Already have an account? <Link to={"/"} className='underline'>Login</Link> and get your habits going!</p>
        </div>
    </div>
  )
}

export default LoginView
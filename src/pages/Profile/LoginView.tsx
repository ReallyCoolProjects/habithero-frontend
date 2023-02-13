import React from 'react'
import { Link } from 'react-router-dom'
import SignUpImage from "../../assets/SVG/larry-wait.svg"
const LoginView = () => {
  return (
    <div className='mt-8'>
        <div className='flex flex-col h-[80vh] justify-around'>
        <span className="text-5xl">Hello, Guest</span>
        <img src={SignUpImage} alt="" />
        <p> <Link to="/signup" className='underline'>Sign up</Link> for a free account and track your progress anywhere!</p>
        <p>Already have an account? <Link to={"/login"} className='underline'>Login</Link> and get your habits going!</p>
        </div>
    </div>
  )
}

export default LoginView
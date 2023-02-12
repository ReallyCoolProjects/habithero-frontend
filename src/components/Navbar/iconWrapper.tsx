import React from 'react'
import { Link } from 'react-router-dom'

const iconWrapper = () => {
  return (
    <Link to={`/`}>
    <span className="flex flex-col justify-center items-center">
      <span className="material-symbols-outlined">dashboard</span>
    <span>Dashboard</span> 
    </span>
  </Link>
  )
}

export default iconWrapper
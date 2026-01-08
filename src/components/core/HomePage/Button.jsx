import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children ,active,linkto}) => {
  return (
     <Link to={linkto}>

     <div className={`text-center text-[13px] p-3 py-3 px-6 rounded-md font-bold hover:scale-105 transition-all duration-200
        ${active ? "bg-yellow-50 text-black": "bg-richblack-800"}`}>
        {children}

     </div>

     </Link>
  )
}

export default Button

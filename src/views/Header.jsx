import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="bg-indigo-800 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
            Hecho con &#x1F49B; por 
            <a href="https://github.com/sergioab7" className="inline-block underline ml-1"> xaxxjs</a>
        </p>
    </div>
    <Outlet />
    </>
  )
}

export default Header
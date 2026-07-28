import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
    return (
        <div className='bg-blue-500 h-screen min-h-screen'>
            <div className='flex h-full  justify-center flex-col  items-center gap-10'>
                <h3 className='text-3xl font-bold'>404 Error - Page Not Found </h3>
                <NavLink className="text-2xl" to={"/"}> Go to Home</NavLink>
            </div>
        </div>
    )
}

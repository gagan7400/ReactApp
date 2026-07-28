import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
    let location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <>
            <Navbar />
            <div className='mt-10'>{children}</div>
            <Footer />
        </>
    )
}

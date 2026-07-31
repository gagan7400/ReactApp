import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { getprofile } from '../redux/actions/userAction'
import { useDispatch } from 'react-redux'

export default function Layout({ children }) {
    let location = useLocation();
    let dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    let getProfile = () => {
        dispatch(getprofile())
    }
    useEffect(() => {
        getProfile()
    }, [])
    return (
        <>
            <Navbar />
            <div className='mt-10'>{children}</div>
            <Footer />
        </>
    )
}

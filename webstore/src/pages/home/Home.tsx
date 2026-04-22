import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default function Home() {
    return (
        <div className='bg-[#4E8EA2] min-h-screen'>
           <Header/>
           <Body/>
           <Footer/>
        </div>
    )
}

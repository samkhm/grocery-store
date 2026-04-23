import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Register from './pages/auth/register/register'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/auth' element={<Auth />} />
       <Route path='/register' element={<Register />} />
       <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
    </BrowserRouter>    
  )
}

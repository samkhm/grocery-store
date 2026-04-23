import React, { useState } from 'react'
import Login from './login/Login'
import Register from './register/register'


export default function Auth() {
    const [mode, setMode] = useState<'login' | 'register'>('login')
  return (
   <>
    {
        mode === 'login' ? (
            <Login switchToRegister={() => setMode('register')} />
        ) : (
            <Register switchToLogin={() => setMode('login')} />
        )
    }
   </>
  )
}

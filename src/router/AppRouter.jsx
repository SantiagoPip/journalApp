import React from 'react'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalApp } from '../JournalApp'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
        {/*Login Registro */}
        <Route path = "/auth/*" element ={<AuthRoutes/>}/>
        {/**Journal */}
        <Route path = "/*" element ={<JournalRoutes/>}/>
    </Routes>
  )
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Login from '../pages/Login/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter
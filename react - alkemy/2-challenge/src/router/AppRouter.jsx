import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Login from '../pages/Login/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter
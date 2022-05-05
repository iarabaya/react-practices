import { Container, CssBaseline } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'
import Listado from '../../components/Listado/Listado'

import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const HomePage = () => {
  
  return (
    <>
        {!localStorage.getItem('token') ? (
            <Navigate to='/login' />
        ) : (
            <div className="home-page" style={{margin: '0 auto'}}>
                <Header/>
                <CssBaseline />
                <Container className="general-container">
                    <Listado />
                </Container>
                <Footer/>
            </div>
        )}
    </>
  )
}

export default HomePage
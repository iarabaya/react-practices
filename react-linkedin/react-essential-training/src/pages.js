import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  )
}

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Outlet/>
    </div>
  )
}

export const Services = () => {
  return( 
    <div>
      Our Services
    </div> 
  );
}

export const CompanyHistory = () => {
  return( 
    <div>
      Our Company History
    </div> 
  );
}

export const Location = () => {
  return( 
    <div>
      Our Location
    </div> 
  );
}

export const Events = () => {
  return (
    <div>Events</div>
  )
}

export const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export const Whoops404 = () => {
  const location = useLocation();

  return (
    <div>
      <h1> Whoops! Resource not found at {location.pathname}</h1>
    </div>
  )
}

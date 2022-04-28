import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  
  useEffect(() =>{
    const token = localStorage.getItem('token');
    
    if(!token){
      navigate('/');
    }
    
  },[])


  return (
    <>
      <h1>Listado de peliculas</h1>
      <ul>
        <li>peli 1</li>
        <li>peli 2</li>
        <li>peli 3</li>
        <li>peli 4</li>
      </ul>
    </>
  )
}

export default List
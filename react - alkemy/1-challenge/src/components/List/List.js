import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { useNavigate, Link, Navigate  } from 'react-router-dom';

const List = () => {
  const token = localStorage.getItem('token');
  // const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState([]);
  
  useEffect(() =>{    
    // if(!token){
    //   navigate('/');
    // }

    //Use TMDB endpoint for movies
    // const endpoint = 'https:...';
    // axios.get(endpoint)
    // .then(res => res.json())
    // .then(res => {
    //   console.log(res.data)
    //   setMoviesList(res.data.results)
    // })
  },[])

  return (
      <>
        {!token && <Navigate to="/login"/>}

        <div className='row'>
          
          <div className='col-3'style={{border: '1px solid red'}}>
            <div className='card'>
              <img src='' className='card-img-top' alt=''/>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>Some text of the card.</p>
                <Link to='/detail' className='btn btn-primary'>View detail</Link>
              </div>
            </div>
          </div>
        
        </div>
      </>
  )
}

export default List
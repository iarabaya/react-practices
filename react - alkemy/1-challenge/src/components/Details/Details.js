import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

const Details = ({token}) => {
  // let query = ''
  // let movieID = query.get('movieID');

  const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    // const endPoint = 'https:...'
    // axios.get(endPoint).then( res => {
    //   const movieData = res.data;
    //   setMovie(movieData);
    // }).catch(err => console.log(err));
  
  }, []);
  
  return (
    <>
      {!token && <Navigate to="/login"/>}
      {/* { !movie && <p>Cargando...</p> } */}
      { movie && <>
        <h2>Titulo de la pelicula</h2>
        <div className='row'>
          <div className='col-4'>
            <img className='card-img-top'/>
          </div>
          <div className='col-8'>
          </div>
            <h5>Fecha de estreno: </h5>
            <h5>Reseña: </h5>
            <p>asdasdjandskjanskjad</p>
            <h5>Generos: </h5>
            <ul>
              <li>Genero 1</li>
              <li>Genero 2</li>
              <li>Genero 3</li>
            </ul>
        </div>
      </>}

    </>
  )
}

export default Details
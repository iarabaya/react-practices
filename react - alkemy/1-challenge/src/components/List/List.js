import React,{ useEffect } from 'react'
import { useNavigate, Link  } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  
  useEffect(() =>{
    const token = localStorage.getItem('token');
    
    if(!token){
      navigate('/');
    }
    
  },[])


  return (
      <div className='row'>
        
        <div className='col-4'style={{border: '1px solid red'}}>
          <div className='card'>
            <img src='' className='card-img-top' alt=''/>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>Some text of the card.</p>
              <Link to='/' className='btn btn-primary'>Go somewhere</Link>
            </div>
          </div>
        </div>
       
      </div>
  )
}

export default List
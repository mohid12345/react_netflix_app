import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl } from '../../constants/constants'


function RowPost(props) {
  const[movies, setMovie] = useState([])
  useEffect(()=> {
    axios.get(props.url).then(response=> {
      console.log(response.data);
      setMovie(response.data.results);
    }).catch(err=>{
      // alert('Network Error')//provided a error catcher  
    })
  },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=> 
            
            <img className={props.isSmall ? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+ obj.backdrop_path}`}/>
          )}       
        </div>
      
    </div>
  )
}

export default RowPost

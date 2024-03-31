import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'


function RowPost(props) {
  const[movies, setMovie] = useState([])
  const[urlId,setUrlId] = useState('')
  useEffect(()=> {
    axios.get(props.url).then(response=> {
      // console.log(response.data);
      setMovie(response.data.results);
    }).catch(err=>{
      // alert('Network Error')//provided a error catcher  
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  
  const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
  // console.log(response.data);
  if(response.data.results.length!== 0){
       setUrlId(response.data.results[0])
  }else{
    console.log("trailer not available");
  }

})
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=> //obj.id - takes each movie id
            
            <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+ obj.backdrop_path}`}/>
          )}       
        </div>
       { urlId && <Youtube opts={opts} videoId={urlId.key}/>} 
      
    </div>// means if there si urlId, then
  )
}

export default RowPost

import React, { useEffect } from 'react'
import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from 'axios'

function Banner() {
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data)
    })
     }, [])//only one time we need to run this, so empty array is fine
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='description'>
            When you use curly braces  in JSX, it allows you
             to embed JavaScript expressions within the markup. 
             Without the curly braces, JSX would interpret the value 
             inside src as a string literal, not as a JavaScript expression.
            </h1>
        </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner

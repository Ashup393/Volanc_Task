import React from 'react'
import ForwardIcon from '@mui/icons-material/Forward';
import './Header.css';
import Header from './Header';


export default function HomeData() {
  return (
    <div>
    <Header/>
    <div className='Content'>
      <h1 id='hello'>Hello</h1>
      <text id='intro'>My name is Rafi.I am a Graphic Designer,and<br/>
      this is my only space to showcase my works.</text><br/>
      <button id='btnworks'>SEE MY WORKS <ForwardIcon className='arraw'/></button>
    </div>
    </div>
  )
}

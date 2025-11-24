import React from 'react'
import GifComponent from '../GifComponent/GifComponent'
import './Today.css'

export default function Today() {
  return (
    <div> 
           <h1>Сегодня: +7°C</h1>
           <div style={{ display: 'flex' }}>   
        <GifComponent/>
        <div className='rblock'>
        <span>Дождь,</span>
        <span>Ветер 4м/с,</span>
        <span>+7 вечером, +2 ночью</span>
        </div>
      </div>
    </div>
  )
}

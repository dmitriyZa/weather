import React from 'react'
import GifComponent from '../../GifComponent/GifComponent'
import './Today.css'
import { Cell } from '@telegram-apps/telegram-ui'

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
      
        <div style={{ display:'flex', flexWrap: 'wrap',justifyContent:'center'}}>
          <Cell style={{paddingLeft:'0px'}}>              
                <span>15:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+7°C</span>            
          </Cell >
          <Cell style={{paddingLeft:'0px'}}>              
                <span>16:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+4°C</span>              
          </Cell>
          <Cell style={{paddingLeft:'0px'}}>              
                <span>17:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>             
          </Cell>
          <Cell style={{paddingLeft:'0px'}}>              
                <span>18:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>             
          </Cell>
          <Cell style={{paddingLeft:'0px'}}>              
                <span>19:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>             
          </Cell>
          <Cell style={{paddingLeft:'0px'}}>              
                <span>20:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>            
          </Cell>    
          <Cell style={{paddingLeft:'0px'}}>              
                <span>21:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>            
          </Cell>       
          <Cell style={{paddingLeft:'0px'}}>              
                <span>22:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>            
          </Cell> 
          <Cell style={{paddingLeft:'0px'}}>              
                <span>22:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>            
          </Cell>
          <Cell style={{paddingLeft:'0px'}}>              
                <span>22:00</span>
                <span>
                  <GifComponent gifName='snow' size='small'/>
                </span>
                <span>+2°C</span>            
          </Cell>  
        </div>       
    </div>
  )
}

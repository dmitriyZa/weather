import React from 'react'
import { Cell } from '@telegram-apps/telegram-ui'
import GifComponent from '../../GifComponent/GifComponent'

export default function Tomorrow() {
  return (
     <div> 
           <h1>Погода на завтра</h1>         
      
        
          <Cell style={{paddingLeft:'0px'}}> 
            <div style={{display:'flex'}}>             
                <span>Утром</span>
                <span style={{marginLeft:'50px'}}>+7°C</span>
                  <GifComponent gifName='snow' size='small'/>
                                   
                </div>       
          </Cell>
          <Cell style={{paddingLeft:'0px'}}>              
               <div style={{display:'flex'}}>             
                <span>Днем</span>
                <span style={{marginLeft:'50px'}}>+7°C</span>
                  <GifComponent gifName='snow' size='small'/>
                                   
                </div>                    
          </Cell>
          <Cell style={{paddingLeft:'0px',paddingRight:'0px',marginLeft:'0px'}}>              
               <div style={{display:'flex'}}>             
                <span>Вечером</span>
                <span style={{marginLeft:'50px'}}>+7°C</span>
                  <GifComponent gifName='snow' size='small'/>
                                   
                </div>                    
          </Cell>
           <Cell style={{paddingLeft:'0px',paddingRight:'0px',marginLeft:'0px'}}>              
               <div style={{display:'flex'}}>             
                <span>Ночью</span>
                <span style={{marginLeft:'50px'}}>+7°C</span>
                  <GifComponent gifName='snow' size='small'/>
                                   
                </div>                    
          </Cell>                        
              
    </div>
  )
}

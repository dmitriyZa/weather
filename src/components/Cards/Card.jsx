import { Section,List, Cell } from "@telegram-apps/telegram-ui";
import { WeatherTab } from '../Bars/TabBar';



export const WeatherCard = () => {  
  return (    
    <List>     
    <Section 
    >      
     <Section.Header large>
      <div style={{display:'flex'}}>
     Прогноз Погоды <span role="img" aria-label="umbrella" style={{marginLeft:'8px'}}>☂️</span>
     </div>
  </Section.Header>                       
        <Cell>
        <WeatherTab/>        
         </Cell>         
    </Section>   
    </List>   
  );
};

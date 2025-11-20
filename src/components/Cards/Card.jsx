import { Section,List, Cell } from "@telegram-apps/telegram-ui";
import { WeatherTab } from '../Bars/TabBar';
import './Card.css'


export const WeatherCard = () => {  
  return (    
    <List>     
    <Section 
    >      
     <Section.Header large>
    <span role="img" aria-label="umbrella" style={{ marginRight: '8px' }}>☂️</span> {/* Иконка зонтика */}
          Прогноз Погоды
  </Section.Header>                       
        <Cell>
        <WeatherTab/>        
         </Cell>         
    </Section>   
    </List>   
  );
};

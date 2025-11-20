import { Section,List, Cell,Title } from "@telegram-apps/telegram-ui";
import { WeatherTab } from '../Bars/TabBar';
import './Card.css'


export const WeatherCard = () => {  
  return (    
    <List>     
    <Section 
    >      
     <Section.Header large>    
          <Title
    level="2"
    weight="2"
  >
    Прогноз Погоды
  </Title>
  </Section.Header>                       
        <Cell>
        <WeatherTab/>        
         </Cell>         
    </Section>   
    </List>   
  );
};

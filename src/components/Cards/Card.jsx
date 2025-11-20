import { Section,List } from "@telegram-apps/telegram-ui";
import { WeatherTab } from '../Bars/TabBar';


export const WeatherCard = () => {  
  return (    
    <List>
    <Section    
    >      
     <Section.Header large>
    <span role="img" aria-label="umbrella" style={{ marginRight: '8px' }}>☂️</span> {/* Иконка зонтика */}
          Прогноз Погоды
  </Section.Header>  
      
        <WeatherTab/>
         
    </Section>    
    </List>   
  );
};

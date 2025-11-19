import './Card.css';
import { Section, Cell,List } from "@telegram-apps/telegram-ui";
import { WeatherTab } from '../Bars/TabBar';


export const WeatherCard = () => {  
  return (    
    <List>
    <Section    
      header="Прогноз Погоды"
    >        
      <Cell>
        <div>Сегодня: Ясно, +25°C</div> {/* Пример прогноза на сегодня */}
      </Cell>
      <Cell>
        <WeatherTab/>
      </Cell>     
    </Section>    
    </List>   
  );
};

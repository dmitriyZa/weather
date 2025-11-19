import './Card.css';
import React, { useState } from 'react';
import { Section, Cell,Image,List } from "@telegram-apps/telegram-ui";
import { WeatherTab } from '../Bars/TabBar';


export const WeatherCard = () => {
  const [forecastRange, setForecastRange] = useState('hourly');

  const handleRangeChange = (event) => {
    setForecastRange(event.target.value);
  };

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

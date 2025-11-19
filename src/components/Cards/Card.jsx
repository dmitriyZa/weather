import React, { useState } from 'react';
import { Section, Cell,Image,List } from "@telegram-apps/telegram-ui";
import { MyButton } from '../Buttons/Button';

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
        <Image
  size={96}
  src="https://avatars.githubusercontent.com/u/84640980?v=4"
/>
      </Cell>
      <Cell>
        <label>
          Выберите диапазон прогноза:
          <select value={forecastRange} onChange={handleRangeChange}>
            <option value="hourly">По часам</option>
            <option value="weekly">На неделю</option>
            <option value="monthly">На месяц</option>
          </select>
        </label>
      </Cell>     
    </Section>    
    </List>
  );
};

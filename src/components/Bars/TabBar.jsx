import React, { useState } from "react";
import './TabBar.css'
import { Tabbar } from "@telegram-apps/telegram-ui";

// Пример данных для табов, представляющих различные диапазоны прогноза
const tabs = [
  { id: 'today', text: "Прогноз на сегодня", Icon: () => <span>🌞</span> },    // Иконка солнца для прогноза на сегодня
  { id: 'hourly', text: "Прогноз почасовой", Icon: () => <span>⏱️</span> },   // Иконка секундомера для почасового прогноза
  { id: 'weekly', text: "Прогноз на неделю", Icon: () => <span>📆</span> },   // Иконка календаря для недельного прогноза
  { id: 'monthly', text: "Прогноз на месяц", Icon: () => <span>🗓️</span> },  // Иконка листка календаря для месячного прогноза
];

export const WeatherTab = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const renderContent = () => {
    switch(currentTab) {
      case 'today':
        return <div>Сегодня: Ясно, +25°C </div>;
      case 'hourly':
        return <div>Данные прогноза почасовой</div>;
      case 'weekly':
        return <div>Данные прогноза на неделю</div>;
      case 'monthly':
        return <div>Данные прогноза на месяц</div>;
      default:
        return <div>Выберите программу прогноза</div>;
    }
  };

  return (
    <div className="container">
      
      
      <Tabbar>
        {tabs.map(({ id, text, Icon }) => (
          <Tabbar.Item 
            key={id} 
            text={text} 
            selected={id === currentTab} 
            onClick={() => setCurrentTab(id)}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
      
      <div className="content">
        
        {renderContent()}       
        
      </div>
    </div>
  );
};


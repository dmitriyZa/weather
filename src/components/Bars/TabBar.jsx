import React, { useState } from "react";
import './TabBar.css'
import { Tabbar } from "@telegram-apps/telegram-ui";

// Пример данных для табов, представляющих различные диапазоны прогноза
// Попробовать сделать Section для подвала
const tabs = [
  { id: 'today', text: "Сегодня", Icon: () => <span>🌞</span> },    // Иконка солнца для прогноза на сегодня
  { id: 'tomorrow', text: "Завтра", Icon: () => <span>⏱️</span> },   // Иконка секундомера для почасового прогноза
  { id: 'weekly', text: "Неделю", Icon: () => <span>📆</span> },   // Иконка календаря для недельного прогноза
];

export const WeatherTab = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const renderContent = () => {
    switch(currentTab) {
      case 'today':
        return <div>Сегодня: Ясно, +25°C </div>;
      case 'tomorrow':
        return <div>Данные прогноза на завтра</div>;
      case 'weekly':
        return <div>Данные прогноза на неделю</div>;
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


import React, { useState } from "react";
import { Tabbar } from "@telegram-apps/telegram-ui";

// Пример данных для табов, представляющих различные диапазоны прогноза
const tabs = [
  { id: 'hourly', text: "Прогноз почасовой", Icon: () => <span>⏰</span> },
  { id: 'weekly', text: "Прогноз на неделю", Icon: () => <span>📅</span> },
  { id: 'monthly', text: "Прогноз на месяц", Icon: () => <span>🗓️</span> },
];

export const WeatherTab = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const renderContent = () => {
    switch(currentTab) {
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
    <div style={{ height: 550 }}>
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
      <div style={{ marginTop: 20 }}>
        {renderContent()}
      </div>
    </div>
  );
};


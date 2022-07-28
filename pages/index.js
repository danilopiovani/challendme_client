import React from 'react';
import { useSettingsStore } from '/tools/store/';

const Home = () => {
  const { darkMode, toggleDarkMode } = useSettingsStore();
  return (
    <div
      Style={`width:300px; height:300px; background-color: ${
        darkMode ? 'black' : 'white'
      }`}
    >
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
};

export default Home;
